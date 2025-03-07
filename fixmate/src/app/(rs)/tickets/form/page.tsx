import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs"
import TicketForm from "./TicketForm";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Users, init as kindeInit } from '@kinde/management-api-js'

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  try {

    const { customerId, ticketId } = await searchParams

    // CASE 1: Both Customer and Ticke Id is missing
    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">Ticket ID or Customer ID required to load ticket form</h2>
          <BackButton title="Go Back" variant="default" />
        </>
      )
    }

    const { getPermission, getUser } = getKindeServerSession()
    const [managerPermission, user] = await Promise.all([
      getPermission("manager"),
      getUser(),
    ])

    const isManager = managerPermission?.isGranted

    // CASE 2: Customer Id exists ( new ticket is to be made )  
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId))

      // CHECK: if customer is not in the database
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        )
      }

      // CHECK: if customer is not active
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} is not active.</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        )
      }

      // return ticket form 
      if (isManager) {
        kindeInit() // Initialized kinde management api
        const { users } = await Users.getUsers()

        const techs = users ? users.map(user => ({ id: user.email!, description: user.email! })) : []


        return <TicketForm customer={customer} techs={techs} />
      } else {
        return <TicketForm customer={customer} />
      }
    }

    // CASE 3: If ticket id exists ( existing ticket is to be edited ) 
    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId))

      // CHECK: if ticket is not found in database
      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        )
      }

      const customer = await getCustomer(ticket.customerId)

      // return ticket form 
      if (isManager) {
        kindeInit() // Initialized kinde management api
        const { users } = await Users.getUsers()

        const techs = users ? users.map(user => ({ id: user.email!, description: user.email! })) : []


        return <TicketForm customer={customer} ticket={ticket} techs={techs} />
      } else {
        const isEditable = user.email === ticket.tech
        return <TicketForm customer={customer} ticket={ticket} isEditable={isEditable} />
      }
    }

  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e)
      throw e
    }
  }
}

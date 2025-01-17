import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs"
import TicketForm from "./TicketForm";

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
      return <TicketForm customer={customer} />
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
      console.log('ticket: ', ticket)
      console.log('customer: ', customer)
      return <TicketForm customer={customer} ticket={ticket} />

    }

  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e)
      throw e
    }
  }
}

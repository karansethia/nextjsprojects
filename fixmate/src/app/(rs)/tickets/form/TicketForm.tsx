"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import InputWithLabel from '@/components/inputs/InputWithLabel'
import TextareaWithLabel from '@/components/inputs/TextareaWithLabel'
import SelectWithLabel from '@/components/inputs/SelectWithLabel'


import {
  insertTicketSchema,
  type InsertTicketSchemaType,
  SelectTicketSchemaType
} from '@/zod-schemas/ticket'
import { SelectCustomerSchemaType } from '@/zod-schemas/customer'
import CheckboxWithLabel from '@/components/inputs/CheckboxWithLabel'

type Props = {
  customer: SelectCustomerSchemaType,
  ticket?: SelectTicketSchemaType
}

const TicketForm = ({ customer, ticket }: Props) => {
  const defaultValues: InsertTicketSchemaType = {
    id: ticket?.id ?? "(New)",
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? '',
    description: ticket?.description ?? '',
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? 'new-ticket@example.com',
  }

  const form = useForm<InsertTicketSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(insertTicketSchema),
    defaultValues
  })

  const submitHandler = async (formData: InsertTicketSchemaType) => {
    console.log(formData)
  }

  return (
    <div className='flex flex-col gap-1 sm:px-8'>
      <div>
        <h2 className='text-2xl font-bold'>
          {ticket?.id
            ? `Edit Ticket # ${ticket.id}`
            : "New Ticket Form"
          }
        </h2>
      </div>
      <Form {...form}>
        <form
          className='flex flex-col md:flex-row gap-4 md:gap-8'
          onSubmit={form.handleSubmit(submitHandler)}>
          <div className='flex flex-col gap-4 w-full max-w-xs'>
            <InputWithLabel<InsertTicketSchemaType>
              fieldTitle="Title"
              nameInSchema='title' />
            <InputWithLabel<InsertTicketSchemaType>
              fieldTitle="Techician"
              nameInSchema='tech' disabled />
            <CheckboxWithLabel<InsertTicketSchemaType>
              fieldTitle="Completed" nameInSchema='completed' message='Yes' />
            <div className="mt-4 space-y-2">
              <h3 className="text-lg">Customer Information</h3>
              <hr className="w-4/5" />
              <p>{customer.firstName} {customer.lastName}</p>
              <p>{customer.address1}</p>
              {customer.address2 && <p>{customer.address2}</p>}
              <p>{customer.city}, {customer.state} : {customer.zip}</p>
              <hr className="w-4/5" />
              <p>{customer.email}</p>
              <p>Phone: {customer.phone}</p>
            </div>
          </div>

          <div className='flex flex-col gap-4 w-full max-w-xs'>
            <TextareaWithLabel<InsertTicketSchemaType>
              fieldTitle="Description"
              nameInSchema='description' className='h-96 resize-none' />
            <div className='flex gap-2'>
              <Button type='submit' className='w-3/4' variant="default" title='Save'>
                Submit
              </Button>
              <Button type='button' variant="destructive" title='Reset' onClick={() => form.reset(defaultValues)}>
                Reset
              </Button>
            </div>

          </div>
        </form>
      </Form>
    </div>
  )


}

export default TicketForm;
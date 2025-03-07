"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import InputWithLabel from '@/components/inputs/InputWithLabel'
import { type InsertCustomerSchemaType, insertCustomerSchema, type SelectCustomerSchemaType } from '@/zod-schemas/customer'
import TextareaWithLabel from '@/components/inputs/TextareaWithLabel'
import SelectWithLabel from '@/components/inputs/SelectWithLabel'
import CheckboxWithLabel from '@/components/inputs/CheckboxWithLabel'
import { Loader2 } from 'lucide-react'

import { StatesArray } from '@/constants/statesArray'

import { useAction } from 'next-safe-action/hooks'
import { saveCustomerAction } from '@/app/actions/saveCustomerAction'
import { useToast } from '@/hooks/use-toast'


type Props = {
  customer?: SelectCustomerSchemaType,
}

const CustomerForm = ({ customer }: Props) => {

  const { getPermission,
    // getPermissions,
    isLoading } = useKindeBrowserClient()

  const { toast } = useToast()

  /*
   * If you want to verify different permissions for eg a person needs to be
   * manager and admin then we use getPermissions 
   * */

  const isManager = !isLoading && getPermission("manager")?.isGranted

  const defaultValues: InsertCustomerSchemaType = {
    id: customer?.id ?? 0,
    firstName: customer?.firstName ?? '',
    lastName: customer?.lastName ?? '',
    address1: customer?.address1 ?? '',
    address2: customer?.address2 ?? '',
    city: customer?.city ?? '',
    state: customer?.state ?? '',
    email: customer?.email ?? '',
    zip: customer?.zip ?? '',
    phone: customer?.phone ?? '',
    active: customer?.active ?? true
  }

  const form = useForm<InsertCustomerSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(insertCustomerSchema),
    defaultValues
  })

  const { execute: executeSave,
    result: saveResult,
    isExecuting: isSaving,
    reset: resetSaveAction } = useAction(saveCustomerAction, {
      onSuccess({ data }) {
        toast({
          variant: "default",
          title: "Success!!",
          description: data?.message
        })
      },
      onError() {
        toast({
          variant: "destructive",
          title: "Success!!",
          description: "Something went wrong"
        })
      }
    })

  const submitHandler = async (formData: InsertCustomerSchemaType) => {
    executeSave(formData)
  }

  return (
    <div className='flex flex-col gap-1 sm:px-8'>
      <div>
        <h2 className='text-2xl font-bold'>
          {customer?.id ? "Edit" : "New"} Customer {customer?.id ? `#${customer?.id}` : "Form"}
        </h2>
      </div>
      <Form {...form}>
        <form
          className='flex flex-col md:flex-row gap-4 md:gap-8'
          onSubmit={form.handleSubmit(submitHandler)}>
          <div className='flex flex-col gap-4 w-full max-w-xs'>
            <InputWithLabel<InsertCustomerSchemaType>
              fieldTitle="First Name"
              nameInSchema='firstName' />

            <InputWithLabel<InsertCustomerSchemaType>
              fieldTitle="Last Name"
              nameInSchema='lastName' />
            <InputWithLabel<InsertCustomerSchemaType>
              fieldTitle="Address Line 1"
              nameInSchema='address1' />
            <InputWithLabel<InsertCustomerSchemaType>
              fieldTitle="Address Line 2"
              nameInSchema='address2' />
            <InputWithLabel<InsertCustomerSchemaType>
              fieldTitle="City"
              nameInSchema='city' />
            <SelectWithLabel<InsertCustomerSchemaType>
              fieldTitle="State" nameInSchema='state' data={StatesArray} />
          </div>
          <div className='flex flex-col gap-4 w-full max-w-xs'>

            <InputWithLabel<InsertCustomerSchemaType>
              fieldTitle="Zip Code"
              nameInSchema='zip' />
            <InputWithLabel<InsertCustomerSchemaType>
              fieldTitle="Email"
              nameInSchema='email' />
            <InputWithLabel<InsertCustomerSchemaType>
              fieldTitle="Phone"
              nameInSchema='phone' />
            <TextareaWithLabel<InsertCustomerSchemaType>
              fieldTitle="Notes" nameInSchema='notes' className='h-40 resize-none' />
            {isLoading ? <p>Loading...</p> : isManager && customer?.id ? (
              <CheckboxWithLabel<InsertCustomerSchemaType>
                fieldTitle="Active"
                nameInSchema="active"
                message="Yes"
              />) : null}
            <div className='flex gap-2'>
              <Button type='submit' disabled={isSaving} className='w-3/4' variant="default" title='Save'>
                {isSaving ? (
                  <><Loader2 className='animate-spin' /> Saving</>
                ) : "Save"}
              </Button>
              <Button type='button' variant="destructive" title='Reset' onClick={() => {
                form.reset(defaultValues)
                resetSaveAction()
              }}>
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )

}

export default CustomerForm

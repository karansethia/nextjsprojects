import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { customers } from '@/db/schema'

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First Name is required"),
  lastName: (schema) => schema.min(1, "Last name is required"),
  address1:  (schema) => schema.min(1, "Address is required"),
  city:  (schema) => schema.min(1, "City is required"),
  state: (schema) => schema.length(2, "State must be exactly 2 digits"),
  email: (schema) => schema.email("Invalid Email"),
  zip: (schema) => schema.length(5, "Zip code must be exactly 5 digits"),
  phone: (schema) => schema.regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format. Use XXX-XXX-XXXX"),
})

export const selectCustomerSchema = createSelectSchema(customers)

export type InsertCustomerSchemaType = typeof insertCustomerSchema._type;

export type SelectCustomerSchemaType = typeof selectCustomerSchema._type

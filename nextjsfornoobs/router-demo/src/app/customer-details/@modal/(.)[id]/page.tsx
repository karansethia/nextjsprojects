import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { people } from "@/lib/data";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>
}

const DetailsModal = async ({ params }: Props) => {

  const id = (await params).id

  const customer: (typeof people)[number] = people.find(person => person.id === parseInt(id))!
  console.log(customer)
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{customer.name}</DialogTitle>
          <DialogDescription>
            {customer.salary} at {customer.company}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <Image
            src={customer.image}
            alt={customer.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-2/3 h-fit aspect-[9/16] object-cover rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
};

export default DetailsModal;


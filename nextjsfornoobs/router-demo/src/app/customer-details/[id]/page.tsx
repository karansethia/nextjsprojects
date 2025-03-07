import { people } from "@/lib/data";
import React from "react";

type Props = {
  params: Promise<{ id: string }>
}

const Customer = async({ params }: Props) => {

  const id = (await params).id

  const customer = people.find(person => person.id === parseInt(id))!

  return <div>{customer.name}</div>;
};

export default Customer;


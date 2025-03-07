import React from "react";
import { people } from "@/lib/data";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const CustomerDetails = () => {
  return <div className="grid grid-cols-5 gap-4 max-w-[1440px]">
    {people.map(person => (
      <Card className="flex flex-col gap-2 p-4 bg-white/50 border-gray-300 shadow-md shadow-sky-300 overflow-hidden" key={person.id}>
        <Image
          src={person.image}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-[9/16] rounded-lg object-cover"
          alt={person.name} />
        <p>{person.name}</p>
        <p>{person.salary}</p>
        <p>{person.company}</p>
        <Link href={`/customer-details/${person.id}`}>Check Details</Link>

      </Card>
    ))}
  </div>;
};

export default CustomerDetails;


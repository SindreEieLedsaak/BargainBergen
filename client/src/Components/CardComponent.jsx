import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const CardComponent = ({ item, uniqueKey }) => { 
  return ( 
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed ")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.title}
          className="w-full object-cover h-[140px]"
          src={item.imageSrc}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.title}</b>
        
        {item.price && (
          <p className="text-default-500">{`$${item.price}`}</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardComponent;

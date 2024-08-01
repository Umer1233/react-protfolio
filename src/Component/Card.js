import {
  Heading,
    Image,
  Card,
  CardBody,
  Text, textDecoration  
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardComponent = ({ title, description, imageSrc }) => {
  return (
    <>
      <Card>        
        <CardBody>
          <Image src={imageSrc} alt={imageSrc} />
          <Heading size="sm" style={{ marginTop: "10px" }}>{title} </Heading><br/>
          <Text>{description}</Text>       
          <span >see more<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "5px;"}} /></span>
        </CardBody>
      </Card>
    </>
  );
};

export default CardComponent;

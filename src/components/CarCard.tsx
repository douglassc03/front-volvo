  import { CardContent, Card, Text, Spacer } from "vcc-ui"
  import { Car } from "../types/car.interface"
  
  
  interface Cardprops{
        car: Car
  }

  export function CarCard(proops:Cardprops){
    return(
        <Card href={"/learn" + proops.car.id}>
         <CardContent>
            <Text subStyle="emphasis">{proops.car.bodyType}</Text>
            <Text variant="ootah">{proops.car.modelName}</Text>
            <Spacer /> 
            <Text>This is a is a link that will take you to volvocars.com</Text>
        </CardContent>
      </Card>
    ) 
  }
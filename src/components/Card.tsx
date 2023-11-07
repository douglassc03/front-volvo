  import { CardContent, Card, Text, Spacer } from "vcc-ui"
  
  
  interface Cardprops{
        "id": string
        "modelName": string
        "bodyType": string
        "modelType": string
        "imageUrl": string
  }

  export function CarCard(proops:Cardprops){
    return(
        <Card href={"/learn" + proops.id}>
         <CardContent>
            <Text subStyle="emphasis">{proops.bodyType}</Text>
            <Text variant="ootah">{proops.modelName}</Text>
            <Spacer /> 
            <Text>This is a is a link that will take you to volvocars.com</Text>
        </CardContent>
      </Card>
    ) 
  }
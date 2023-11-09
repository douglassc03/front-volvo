  import { CardContent, Card, Text, Spacer, Flex, Row, Link } from "vcc-ui"
  import { Car } from "../types/car.interface"
  
  
  interface Cardprops{
        car: Car
  }

  export function CarCard({car} : Cardprops){
    return(
        <Card href={"/learn" + car?.id}>

         <CardContent>
            <Text variant="bates" subStyle="emphasis">{car?.bodyType}</Text>
            <Flex>
              <Row>
                <Text variant="amundsen">{car?.modelName}</Text>
                <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>
              </Row>
            </Flex>
            <Spacer /> 
            <img src={car.imageUrl} alt={car.modelName} width={200} height={150}/>
            <Flex  extend={{
                    justifyContent: 'center',
                    alignItems: 'flexstart',
                    flexDirection: 'row',
                    maxWidth: 200
                }}>
                <Link href="https://www.volvocars.com/" arrow="right">
                  SHOP
                </Link>
                <Link href="https://www.volvocars.com/" arrow="right">
                  LEARN
                </Link>
            </Flex>
        </CardContent>
      </Card>
    ) 
  }
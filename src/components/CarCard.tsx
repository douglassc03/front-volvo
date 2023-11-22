  import { CardContent, Card, Text, Spacer, Flex, Row, Link } from "vcc-ui"
  import { Car } from "../types/car.interface"
  
  import styles from '../../public/css/carCard.module.css'
  
  interface Cardprops{
        car: Car
  }

  export function CarCard({car} : Cardprops){
    return(
        <Card href={"/learn" + car?.id}>
         <div className={styles.cardWrapper}>
            <Text variant="bates" subStyle="emphasis">{car?.bodyType}</Text>
            <Flex extend={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin:0,
                }}>
                <Text variant="amundsen" extend={{margin:0,padding:0}}>{car?.modelName}</Text>
                <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>
            </Flex>
            <Spacer /> 
            <img src={car.imageUrl} alt={car.modelName} width={250} height={200}/>
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
            </div>
      </Card>
    ) 
  }
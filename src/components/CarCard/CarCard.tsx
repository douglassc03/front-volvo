import { Text, Spacer, Flex, Link } from "vcc-ui"
import { Car } from "../../types/car.interface"

interface Cardprops {
  car: Car
}

export function CarCard({ car }: Cardprops) {
  return (
    <Link href={"/learn" + car?.id} style={{ boxShadow: '2px 4px 8px 0 rgba(0, 0, 0, 0.2)', margin: '1rem 0'}}>
      <Text variant="bates" subStyle="emphasis">{car?.bodyType}</Text>
      <Flex extend={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        margin: 0
      }}>
        <Text variant="amundsen" extend={{ margin: 0, padding: 0 }}>{car?.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>
      </Flex>
      <img src={car.imageUrl} alt={car.modelName} width={250} height={200} />
      <Flex extend={{
        justifyContent: 'center',
        alignItems: 'flexstart',
        flexDirection: 'row',
        maxWidth: 200,
      }}>
        <Link href={`https://www.volvocars.com/${car.id}`} arrow="right">
          SHOP
        </Link>
        <Link href="https://www.volvocars.com/" arrow="right">
          LEARN
        </Link>
      </Flex>
    </Link>
  )
}
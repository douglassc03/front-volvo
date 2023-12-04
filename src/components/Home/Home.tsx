import React from "react";
import { Text,Spacer } from "vcc-ui";
import { useCars } from '../../hooks/useCars';
import { CarCard } from '../CarCard/CarCard';
import styles from './Home.module.css';

export const Home: React.FC = () => {
    const {cars} = useCars();

  return (
    <div className={styles.homeWrapper}> 
    <Text variant="cook">Todos os modelos Recharge</Text> 
     
      <div className={styles.cardsWrapper}>
        {cars.map(car => <CarCard key={car.id} car={car}/>)}
      </div>
    </div>
  );
};

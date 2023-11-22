import React, { useState } from "react";
import { Button, Flex } from "vcc-ui";
import { Block } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import styles from '../../public/css/home.module.css'

export const HelloWorld: React.FC = () => {
    const {cars} = useCars();

  return (
    <div className={styles.homeWrapper}>  
      <div className={styles.cardsWrapper}>
        {cars.map(car => <CarCard key={car.id} car={car}/>)}
      </div>
    </div>
  );
};

import { Home } from '../src/components/Home/Home';
import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from 'vcc-ui';


function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          
        <Home />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;

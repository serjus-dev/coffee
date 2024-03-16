import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  AmericanoModal,
  LatteModal,
  MochaModal,
  CappuccinoModal,
  EspressoModal,
  EspressoCreamModal,
  EspressoMacchiatoModal,
  FlatWhiteModal,
  CaramelMachiatoModal,
  WhiteChocolateMochaModal,
  BrewedCoffeeModal,
  CaffeMistoModal,
  HotChocolateModal,
  HotChocolateSyrupModal
} from './Demo';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AmericanoModal />
      <LatteModal />
      <MochaModal />
      <WhiteChocolateMochaModal />
      <CappuccinoModal />
      <EspressoModal />
      <EspressoCreamModal />
      <EspressoMacchiatoModal />
      <CaramelMachiatoModal />
      <FlatWhiteModal />
      <BrewedCoffeeModal />
      <CaffeMistoModal />
      <HotChocolateModal />
      <HotChocolateSyrupModal />
      
    </StyledEngineProvider>
  </React.StrictMode>
);
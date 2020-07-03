/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Cursor from './Cursor';

import BurgerMenu from './BurgerMenu';
import { MainHeaderEcology, DivButtonConvictions } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ConvictionsEcology = () => {
  const [politEnv, setPolitEnv] = useState();
  const [emissionCo2, setEmissionCo2] = useState();
  const [empreintEco, setEmpreinteEco] = useState();
  const [proximGeo, setProximGeo] = useState();
  const [tauxNucleaire, setTauxNucleaire] = useState();
  const [tauxEnergRenouv, setTauxEnergRenouv] = useState();
  const [sobrEnerg, setSobrEnerg] = useState();

  const politEnvFunc = (e) => {
    setPolitEnv(e.target.value);
  };

  const emissionCo2Func = (e) => {
    setEmissionCo2(e.target.value);
  };

  const empreintEcoFunc = (e) => {
    setEmpreinteEco(e.target.value);
  };

  const proximGeoFunc = (e) => {
    setProximGeo(e.target.value);
  };

  const tauxNucleaireFunc = (e) => {
    setTauxNucleaire(e.target.value);
  };

  const tauxEnergRenouvFunc = (e) => {
    setTauxEnergRenouv(e.target.value);
  };

  const sobrEnergFunc = (e) => {
    setSobrEnerg(e.target.value);
  };

  return (
    <>
      <MainHeaderEcology>
        <SectionTitle>Ecologie</SectionTitle>
      </MainHeaderEcology>
      <BurgerMenu />
      <Cursor
        titleCursor="Politique environementale"
        color="#92be1f"
        handleCursor={politEnvFunc}
        textCursor="la politique environementale cé bien"
        colorCursor="#92be1f"
      >
        Titre cursor
      </Cursor>
      <Cursor
        titleCursor="Emission CO2"
        color="#92be1f"
        handleCursor={emissionCo2Func}
        textCursor="Emission Co2 cé pa bien"
        colorCursor="#92be1f"
      />
      <Cursor
        titleCursor="Empreinte écologique"
        color="#92be1f"
        handleCursor={empreintEcoFunc}
        textCursor="Il faut limiter l'empreinte de l'activité humaine sur la planète"
        colorCursor="#92be1f"
      />
      <Cursor
        titleCursor="Proximité géographique"
        color="#92be1f"
        handleCursor={proximGeoFunc}
        textCursor="Il faut éviter de consommer des produits"
        colorCursor="#92be1f"
      />
      <Cursor
        titleCursor="Taux de nucléaire"
        color="#92be1f"
        handleCursor={tauxNucleaireFunc}
        textCursor="Il faut augmenter le taux du nucléaire dans la production d'énergie"
        colorCursor="#92be1f"
      />
      <Cursor
        titleCursor="Taux d'énergie renouvelable"
        color="#92be1f"
        handleCursor={tauxEnergRenouvFunc}
        textCursor="Il faut que l'énergie vienne de sources renouvelables"
        colorCursor="#92be1f"
      />
      <Cursor
        titleCursor="Sobriété énergétique"
        color="#92be1f"
        handleCursor={sobrEnergFunc}
        textCursor="Il faut limiter la consommation de toute façon"
        colorCursor="#92be1f"
      />
      <DivButtonConvictions>
        <FontAwesomeIcon icon={faCheckCircle} size="2x" />
      </DivButtonConvictions>
    </>
  );
};

export default ConvictionsEcology;

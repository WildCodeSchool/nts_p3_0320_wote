/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import Selector from './Selector';

import BurgerMenu from './BurgerMenu';
import { MainHeaderSociety } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ConvictionsSociety = (props) => {
  const [weightings, setWeightings] = useState([]);

  useEffect(() => {
    const AsyncFunc = async () => {
      const response = await Axios.get(
        `https://wote.website${props.user.activeProfile}`,
        {
          headers: { Accept: 'application/json' },
        }
      );
      const weightingsDatas = response.data.weightings.filter(
        (elt) => elt.criterion.theme.id === 3
      );
      setWeightings(weightingsDatas);
    };
    AsyncFunc();
  }, []);

  const handleSelector = (e, title) => {
    const theWeighting = weightings.filter(
      (elt) => elt.criterion.title === title
    );
    const idWeighting = theWeighting[0].id;
    const newValue = e.value;
    Axios.put(
      `https://wote.website/api/weightings/${idWeighting}`,
      {
        value: newValue,
      },
      {
        headers: { Accept: 'application/json' },
      }
    );
  };

  return (
    <>
      <MainHeaderSociety>
        <SectionTitle>Société</SectionTitle>
      </MainHeaderSociety>
      <BurgerMenu />
      {weightings.map((elt) => {
        return (
          <Selector
            titleSelect={elt.criterion.title}
            color="#94b5be"
            textSelect={elt.criterion.proposal}
            colorSelect="#94b5be"
            funcToPass={(e) => handleSelector(e, elt.criterion.title)}
            valueToPass={elt.value}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(ConvictionsSociety);

ConvictionsSociety.propTypes = {
  user: PropTypes.string.isRequired,
};

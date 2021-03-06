import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';

import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { MainHeader, MainContainerWithHeader } from '../styles/containers';
import { SectionTitle, TextParagraph } from '../styles/texts';

const Register = (props) => {
  const [datas, setDatas] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });
  const [termsOfUseCheck, setTermsOfUseCheck] = useState(false);
  const [isPasswordOk, setIsPasswordOk] = useState(false);

  const checkPasswordStandard = (pass) => {
    return pass.length >= 8 ? setIsPasswordOk(true) : setIsPasswordOk(false);
  };

  const handleChange = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'password') {
      checkPasswordStandard(e.target.value);
    }
  };

  const handleTermsOfUseCheck = () => {
    setTermsOfUseCheck(!termsOfUseCheck);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* checkPasswordStandard(datas.password); */
    if (
      !datas.email ||
      !datas.password ||
      !datas.passwordCheck ||
      !termsOfUseCheck
    ) {
      toast.warn(`Tous les champs doivent être renseignés...`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!isPasswordOk) {
      toast.error(
        'Le mot de passe doit comporter 8 caractères au minimum...',
        {}
      );
    } else if (datas.password !== datas.passwordCheck) {
      toast.error('Les mots de passe doivent correspondre', {});
    } else if (!termsOfUseCheck) {
      toast.error("Les conditions d'utilisation doivent être approuvées", {});
    } else {
      try {
        await axios.post(`https://wote.website/api/register_api`, {
          email: datas.email,
          password: datas.password,
        });
        setTimeout(() => {
          props.history.push('/');
        }, 2500);
        toast.success(`L'utilisateur a été ajouté avec succès !`, {});
      } catch (error) {
        toast.error(
          `Erreur lors de l'ajout d'un utilisateur : ${error.message}`,
          {}
        );
      }
    }
  };

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <BackButton />
        <SectionTitle>Enregistrement</SectionTitle>
      </MainHeader>
      <FormCpnt submitFuncToPass={handleSubmit}>
        <InputCpnt
          labelText="Email"
          inputType="email"
          nameForInput="email"
          inputPlaceHolder="Email de connexion..."
          value={datas.email}
          onChangeFunc={handleChange}
          inputRequired
        />
        <InputCpnt
          labelText="Mot de passe"
          inputType="password"
          nameForInput="password"
          inputPlaceHolder="Mot de passe..."
          value={datas.password}
          onChangeFunc={handleChange}
          inputRequired
        />
        <InputCpnt
          labelText="Confirmation du mot de passe"
          inputType="password"
          nameForInput="passwordCheck"
          inputPlaceHolder="Mot de passe..."
          value={datas.passwordCheck}
          onChangeFunc={handleChange}
          inputRequired
        />
        <InputCpnt
          labelText={
            <TextParagraph underline>
              <Link to="/register/terms-of-use">
                J&apos;accepte les conditions d&apos;utilisation
              </Link>
            </TextParagraph>
          }
          inputType="checkbox"
          nameForInput="termsOfUseCheckbox"
          value={termsOfUseCheck}
          onChangeFunc={handleTermsOfUseCheck}
          inputRequired
          rowReverse
        />
        <Button buttonType="submit" greenBg hoverWhite>
          Enregistrer
        </Button>
      </FormCpnt>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </MainContainerWithHeader>
  );
};

Register.propTypes = {
  history: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/Logo.svg';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={Logo} alt="PoseidooMFlix Logo" />
      </Link>
      <p>
        Criado durante a{' '}
        <strong><a href="https://www.alura.com.br/">#ImensãoReact</a></strong> da <strong className="DestakText">Alura</strong>
      </p>
    </FooterBase>
  );
}

export default Footer;

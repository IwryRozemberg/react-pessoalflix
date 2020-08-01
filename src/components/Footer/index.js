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
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;

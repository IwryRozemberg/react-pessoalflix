import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';
import Logo from './../../assets/images/Logo.svg';
import { Button } from './../Button';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="PoseidooMFlix Logo" />
        </Link>
        {/* <a href="/"></a> */}
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
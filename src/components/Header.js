import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Cadastro de Vaga</Link></li>
        <li><Link to="/list">Listagem de Vagas</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

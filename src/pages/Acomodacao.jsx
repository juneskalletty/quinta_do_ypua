import React from 'react';
import '../style/pages/Acomodacao.css';
import userIcon from '../img/user.svg';
import keyboardIcon from '../img/keyboard.svg';
import Menu from '../components/Menu';
import HeaderMenu from '../components/HeaderMenu';

const Acomodacao = () => {
  return (
    <div className='acomodacao'> 
      <Menu />
          <div className='acomodacao-content'>
            <HeaderMenu />
            <div className='agenda-content'>
              <div className='agenda'></div>
            <div className='button'>
            <button className="cabana-button">Cabana 1</button>
            <button className="cabana-button">Suíte com cozinha 1</button>
            <button className="cabana-button">Cabana 3</button>
            <button className="cabana-button">Overlands</button>
            <button className="cabana-button">Bus</button>
            <button className="cabana-button">Suíte com cozinha 2</button>
            <button className="cabana-button">Overlands</button>
            <button className="cabana-button">Cabana 2</button>
            <button className="cabana-button">Overlands</button>
           </div>
           </div>
          </div>
    </div>
  );
};

export default Acomodacao;

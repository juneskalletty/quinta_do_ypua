/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../style/pages/Acomodacao.css';
import userIcon from '../img/user.svg';
import keyboardIcon from '../img/keyboard.svg';
import Menu from '../components/Menu';
import HeaderMenu from '../components/HeaderMenu';
import Calendar from '../components/Calendario';

const Acomodacao = () => {
  const [acomodacao, setAcomodacao] = useState([])
  const cabana1 = [{
    id: 1,
    title: 'Madson Gusmão',
    start: new Date(2024, 5, 25, 10, 0),
    end: new Date(2024, 5, 30, 12, 0),   
  },
  {
    id: 2,
    title: 'Gustavo Silva',
    start: new Date(2024, 5, 12, 13, 0), 
    end: new Date(2024, 5, 15, 14, 0),   
  },
  {
    id: 3,
    title: 'Yuri Grams',
    start: new Date(2024, 5, 28, 15, 0),
    end: new Date(2024, 5, 29, 16, 0),   
  },]

  const suitecomcozinha1 = [{
    id: 1,
    title: 'Robson Gusmão',
    start: new Date(2024, 5, 7, 10, 0), 
    end: new Date(2024, 5, 8, 12, 0),   
  },
  {
    id: 2,
    title: 'Ana Silva',
    start: new Date(2024, 5, 5, 13, 0), 
    end: new Date(2024, 5, 6, 14, 0),   
  },
  {
    id: 3,
    title: 'Mateus Grams',
    start: new Date(2024, 5, 25, 15, 0), 
    end: new Date(2024, 5, 26, 16, 0),   
  },]
  const cabana3 = [
    {
      id: 1,
      title: 'Carlos Silva',
      start: new Date(2024, 6, 1, 9, 0),
      end: new Date(2024, 6, 5, 11, 0),
    },
    {
      id: 2,
      title: 'Ana Pereira',
      start: new Date(2024, 6, 10, 14, 0),
      end: new Date(2024, 6, 12, 16, 0),
    },
    {
      id: 3,
      title: 'João Souza',
      start: new Date(2024, 6, 20, 15, 0),
      end: new Date(2024, 6, 22, 17, 0),
    },
  ];

  const overlands1 = [
    {
      id: 1,
      title: 'Fernanda Lima',
      start: new Date(2024, 7, 5, 8, 0),
      end: new Date(2024, 7, 10, 10, 0),
    },
    {
      id: 2,
      title: 'Ricardo Mendes',
      start: new Date(2024, 7, 15, 13, 0),
      end: new Date(2024, 7, 18, 15, 0),
    },
    {
      id: 3,
      title: 'Paula Martins',
      start: new Date(2024, 7, 25, 12, 0),
      end: new Date(2024, 7, 28, 14, 0),
    },
  ];

  const bus = [
    {
      id: 1,
      title: 'Gustavo Almeida',
      start: new Date(2024, 8, 3, 11, 0),
      end: new Date(2024, 8, 7, 13, 0),
    },
    {
      id: 2,
      title: 'Mariana Santos',
      start: new Date(2024, 8, 12, 9, 0),
      end: new Date(2024, 8, 15, 11, 0),
    },
    {
      id: 3,
      title: 'Pedro Ferreira',
      start: new Date(2024, 8, 22, 16, 0),
      end: new Date(2024, 8, 25, 18, 0),
    },
  ];

  const suitecomcozinha2 = [
    {
      id: 1,
      title: 'Lucas Carvalho',
      start: new Date(2024, 9, 6, 10, 0),
      end: new Date(2024, 9, 11, 12, 0),
    },
    {
      id: 2,
      title: 'Camila Rocha',
      start: new Date(2024, 9, 17, 14, 0),
      end: new Date(2024, 9, 20, 16, 0),
    },
    {
      id: 3,
      title: 'Felipe Costa',
      start: new Date(2024, 9, 27, 13, 0),
      end: new Date(2024, 9, 30, 15, 0),
    },
  ];

  const overlands2 = [
    {
      id: 1,
      title: 'Thiago Silva',
      start: new Date(2024, 10, 1, 9, 0),
      end: new Date(2024, 10, 5, 11, 0),
    },
    {
      id: 2,
      title: 'Laura Oliveira',
      start: new Date(2024, 10, 10, 14, 0),
      end: new Date(2024, 10, 13, 16, 0),
    },
    {
      id: 3,
      title: 'Rafael Gomes',
      start: new Date(2024, 10, 20, 15, 0),
      end: new Date(2024, 10, 23, 17, 0),
    },
  ];

  const cabana2 = [
    {
      id: 1,
      title: 'Juliana Costa',
      start: new Date(2024, 11, 3, 8, 0),
      end: new Date(2024, 11, 7, 10, 0),
    },
    {
      id: 2,
      title: 'Bruno Almeida',
      start: new Date(2024, 11, 13, 11, 0),
      end: new Date(2024, 11, 16, 13, 0),
    },
    {
      id: 3,
      title: 'Natália Ferreira',
      start: new Date(2024, 11, 22, 12, 0),
      end: new Date(2024, 11, 25, 14, 0),
    },
  ];

  const overlands3 = [
    {
      id: 1,
      title: 'Vinícius Santos',
      start: new Date(2024, 12, 1, 9, 0),
      end: new Date(2024, 12, 5, 11, 0),
    },
    {
      id: 2,
      title: 'Bianca Mendes',
      start: new Date(2024, 12, 10, 14, 0),
      end: new Date(2024, 12, 13, 16, 0),
    },
    {
      id: 3,
      title: 'Gabriel Lima',
      start: new Date(2024, 12, 20, 15, 0),
      end: new Date(2024, 12, 23, 17, 0),
    },
  ];

  const handleClick = (e) => {
    const targetText = e.target.innerText;

    switch (targetText) {
      case 'Cabana 1':
        setAcomodacao(cabana1);
        break;
      case 'Suíte com cozinha 1':
        setAcomodacao(suitecomcozinha1);
        break;
      case 'Cabana 3':
        setAcomodacao(cabana3);
        break;
      case 'Overlands':
        setAcomodacao(overlands1);
        break;
      case 'Bus':
        setAcomodacao(bus);
        break;
      case 'Suíte com cozinha 2':
        setAcomodacao(suitecomcozinha2);
        break;
      case 'Overlands 2':
        setAcomodacao(overlands2);
        break;
      case 'Cabana 2':
        setAcomodacao(cabana2);
        break;
      case 'Overlands 3':
        setAcomodacao(overlands3);
        break;
      default:
        break;
    }
  };


  return (
    <div className='acomodacao'>
      <Menu />
      <div className='acomodacao-content'>
        <HeaderMenu />
        <div className='agenda-content'>
          <div className='agenda'>
            <Calendar acomodacao={acomodacao} setAcomodacao={setAcomodacao} />
          </div>
          <div className='button'>
            <button className="cabana-button" onClick={handleClick}>Cabana 1</button>
            <button className="cabana-button" onClick={handleClick}>Suíte com cozinha 1</button>
            <button className="cabana-button" onClick={handleClick}>Cabana 3</button>
            <button className="cabana-button" onClick={handleClick}>Overlands</button>
            <button className="cabana-button" onClick={handleClick}>Bus</button>
            <button className="cabana-button" onClick={handleClick}>Suíte com cozinha 2</button>
            <button className="cabana-button" onClick={handleClick}>Overlands 2</button>
            <button className="cabana-button" onClick={handleClick}>Cabana 2</button>
            <button className="cabana-button" onClick={handleClick}>Overlands 3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acomodacao;

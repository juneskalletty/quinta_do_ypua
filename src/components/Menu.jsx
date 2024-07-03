import { Link } from 'react-router-dom';
import '../style/components/Menu.css'; 
import logo from '../img/image.jpg';  

const Menu = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="logo" />  
        </div>
        <Link to="/home">Início</Link>
        <Link to="/reserva">Reservas</Link>
        <Link to="/acomodacao">Acomodações</Link>
      </div>

      
    </div>
  );
};

export default Menu;

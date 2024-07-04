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
        <Link to="/acomodacao">Acomodações</Link>
        <Link to="/meu-caixa">Meu Caixa</Link>
      </div>

      
    </div>
  );
};

export default Menu;
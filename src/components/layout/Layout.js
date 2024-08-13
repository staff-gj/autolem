import logo from "../../img/logo.jpg";
import "./Layout.style.css";
import Home from './Home'
import { Link } from 'react-router-dom';



export default function Layout() {

        
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="barra">
          <ul>
            <li><Link className="Links" to={'/'}>HOME</Link></li>
            <li><Link className="Links" to={'/quemsomos'}>QUEM SOMOS</Link></li>
            <li><Link className="Links" to={'/matricula'}>MATRÍCULA</Link></li>
            <li><Link className="Links" to={'/contato'}>CONTATO</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

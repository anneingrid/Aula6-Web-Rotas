import { Link } from 'react-router-dom';

export default function Menu(){
    return<>
    <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
    </ul>
    </>;
}
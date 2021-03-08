import Autenticacao from '../../Autenticacao';
import MenuAberto from './MenuAberto'
import MenuFechado from './MenuFechado'
import './Menu.css';



const Menu = () => {

        
    return (
        
        <>
            {  Autenticacao() ? MenuFechado() : MenuAberto()
            } 
            
        </>    
    )
    
}
export default Menu;
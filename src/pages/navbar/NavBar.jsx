import { Link } from 'react-scroll';
import './navbar.css';

export const NavBar = () => {
  return (
    <>
        <nav className="navbar_container ">

            <div className="nav_title_container">
                <img className='nav_title' src='https://i.ibb.co/tpBtWn8/logorafa.png' alt='logo_rafa'/>
            </div>

            <div className='nav_list_container'>
                <ul className="nav_list">

                    <Link  className='nav_link nav_list list_container' to='invitation' spy={true} smooth={true} offset={50} duration={500}>Mi cumple</Link>
                    <Link className='nav_link nav_list list_container' to='wishList' spy={true} smooth={true} offset={50} duration={500}>Lista de Deseos</Link>
                    <Link className='nav_link nav_list list_container' to='map' spy={true} smooth={true} offset={50} duration={500}>Dirección</Link>

                </ul>
            </div>

        </nav>
    </>
  )
}

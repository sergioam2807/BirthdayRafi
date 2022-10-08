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
                    <li className='list_container'>Mi cumple</li>
                    <li className='list_container'>Experiencias Previas</li>
                    <li className='list_container'>Dirección</li>
                </ul>
            </div>

        </nav>
    </>
  )
}

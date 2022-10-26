import { useState } from 'react';
import './whishList.css'

const gues = [
    'Camiones de Juguetes', 
    'Autos' ,
    'Ropa talla 2', 
    'Toalla de baño', 
    'vaso con bombilla', 
    'zapatos talla 23', 
    'Gorro de sol',
    'Libros en español o inglés',

];

export const WishList = () => {
    
    // const [wishList, setwishList] =  useState(gues);

    
    return (
    <>
    <div className="wish_list_container" id='wishList'>
        <div className="wish_title_container">
            <h1 className="wish_title">Mi lista de Deseos</h1>
        </div>

        <div className="wish_list_list">
            {
                gues.map(element =>
                    <p className='titulo' key={element}>{element}</p>
                    
                )
            }
        </div>
    </div>

    </>
  )
}

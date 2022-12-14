import './birthdayApp.css';
import { Coutdown } from './pages/coutdown/Coutdown'
import { Invitation } from './pages/invitation/Invitation'
import { GoogleMap } from './pages/map/GoogleMap';
import { NavBar } from './pages/navbar/NavBar'
import { Slider } from './pages/slider/Slider';
import { WishList } from './pages/wishList/WishList';

export const BirthdayApp = () => {
  return (
    <>
        <NavBar/>
        <Invitation/>
        <Coutdown/>
        <Slider/>
        <WishList/>
        <GoogleMap/>
    </>
  )
}

import './birthdayApp.css';
import { Coutdown } from './pages/coutdown/Coutdown'
import { Invitation } from './pages/invitation/Invitation'
import { NavBar } from './pages/navbar/NavBar'
import { Slider } from './pages/slider/Slider';

export const BirthdayApp = () => {
  return (
    <>
        <NavBar/>
        <Invitation/>
        <Coutdown/>
        <Slider/>
    </>
  )
}

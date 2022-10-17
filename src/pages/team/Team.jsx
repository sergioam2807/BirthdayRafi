import { Image } from './images/Image'
import './team.css'

export const Team = () => {
  return (
    <>
        <div className='team_container'>
            <div className='team_container_title'>
                <h1 className='team_title'>Mi equipo</h1>
            </div>

            <div className='team_guess_container'>
                <div className='team_guess_list'>
                    <div className='team_guess'> <Image alt ='rafi'  url='https://i.ibb.co/YLbrLXK/rafi.jpg' /> </div>
                    <h4 className='team_name'>hola</h4>
                </div>
            </div>

        </div>
    </>
  )
}

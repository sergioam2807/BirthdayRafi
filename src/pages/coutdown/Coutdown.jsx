import './countDown.css';
import { useEffect, useState } from "react";



export const Coutdown = () => {
    
    const [timerDay, setTimerDay] = useState();
    const [timerHour, setTimerHour] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    
    let interval;

    const startTimer = () =>{

        const birthdayParty = new Date("Nov 12,2022").getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();

            const diferencce = birthdayParty - now;

            const days = Math.floor( diferencce /( 24 * 60 * 60 * 1000));
            const hours = Math.floor( (diferencce %( 24 * 60 * 60 * 1000))/( 1000 * 60 * 60 ));
            const minutes = Math.floor( (diferencce %( 60 * 60 * 1000))/( 1000 * 60 ));
            const seconds = Math.floor( (diferencce %(  60 * 1000))/( 1000 ));

            if( diferencce < 0){

                clearInterval(interval.current)
            }else{
                setTimerDay(days);
                setTimerHour(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })


    }

    useEffect(() => {
     startTimer();
    });

    return (
        <>
        <div className='countDown_container_container' id='countDown'>

            <h1 className='countDown_party'>12 de Noviembre 16:00 hrs</h1>

            <div className='countDown_container'>
                <div>
                    <h3 className='countDown_title'> Días </h3>
                    <h1 className='countDown_time'>{timerDay > 9 ? timerDay : `0${timerDay}`}</h1>
                </div>
                <div>
                    <h3 className='countDown_title'> Horas </h3>
                    <h1 className='countDown_time'>{timerHour > 9 ? timerHour : `0${timerHour}` }</h1>
                </div>
                <div>
                    <h3 className='countDown_title'> Minutos </h3>
                    <h1 className='countDown_time'>{timerMinutes > 9 ? timerMinutes : `0${timerMinutes}`}</h1>
                </div>
                <div>
                    <h3 className='countDown_title'> Segundos </h3>
                    <h1 className='countDown_time'>{timerSeconds > 9 ? timerSeconds : `0${timerSeconds}`}</h1>
                </div>
            </div>
        </div>

            
                
            
        </>
      );
}
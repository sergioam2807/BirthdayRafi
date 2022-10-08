

export const getCoutdown = () => {
    
const birthdayParty = new Date('11/13/2022 4:00 PM');

const milisecondsOfASecond = 1000;
const milisecondsOfAMinute = milisecondsOfASecond * 60;
const milisecondsOfAHour = milisecondsOfAMinute * 60;
const milisecondsOfADay = milisecondsOfAHour * 24;

const updateCoutdown = () =>{

    const now = new Date();
    const duration = birthdayParty - now;
    const remainingDays = Math.floor( duration/milisecondsOfADay );
    const remainingHours = Math.floor( duration % milisecondsOfADay ) / milisecondsOfAHour ;
    const remainingMinutes = Math.floor( duration % milisecondsOfAHour) / milisecondsOfAMinute;
    const remainingSeconds = Math.floor( duration % milisecondsOfAMinute ) / milisecondsOfASecond;

}

return {
    updateCoutdown
}
}


import './invitation.css'


export const Invitation = () => {
  return (
    <>
      <div className='invitation_container' id='invitation'>

          <div className='invitation_photo_container'>
          <img className='invitation_image animate__animated animate__tada' src="https://i.ibb.co/27YygKM/raficontructor.jpg" alt="rafi" border="0" />
          </div>

          <div className='invitation_text_container animate__animated animate__heartBeat'>
            <p className='invitation_paragraph'>Rafael te invita a su</p>
            <h1 className='invitation_title'>Cumpleaños n° 2 </h1>
          </div>

      </div>
    </>
  )
}

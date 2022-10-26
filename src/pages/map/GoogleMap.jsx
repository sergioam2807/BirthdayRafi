import './googlemap.css'



export const GoogleMap = (props) => {

  const {
    iframeSource ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.03753943634!2d-71.38841059137157!3d-33.04855957150695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689d82eabf736c9%3A0x274278906194bed9!2sLos%20Olivos%20314%2C%202460493%20Marga%20Marga%2C%20Villa%20Alemana%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1666755168367!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  } = props

  return (
    <>
      <div className='map_container' id='map'>
        <h1 className='map_tittle'> Dirección </h1>
        <div className="googleMap" dangerouslySetInnerHTML={{ __html:iframeSource }}></div>
      </div>

    </>
  )
}

import './googlemap.css'



export const GoogleMap = (props) => {

  const {
    iframeSource ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.1423914999677!2d-71.54937648525129!3d-33.02637888325794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de7523224625%3A0xc280eaf0156cb7e8!2sSuperZoo!5e0!3m2!1ses-419!2scl!4v1665326222766!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" >mapa</iframe>'
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

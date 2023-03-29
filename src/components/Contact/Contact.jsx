export default function Contact() {
  return (
    <>
    <h3 className="h4 text-primary">CONTACTATE CON NOSOTROS</h3>
    <div className="mx-1 p-2 d-flex">
        <div className="d-flex flex-column">
            <img className="mx-auto my-1 w-25" src="/img/icons/mail 2.AVIF" alt="email"/>
            <a className="text-center my-1 " href="mailto:contacto@gvds.cl">contactomza@gmail.com</a>
        </div>
        <div className="d-flex flex-column">
            <img className="mx-auto my-1 w-25" src="/img/icons/call-center.AVIF" alt="telefono"/>
            <a className="text-center my-1" href="tel:+56955555555">+54 2616775791</a>
        </div>
        <div className="d-block">
            <img className="mx-auto my-1 w-25" src="/img/icons/map.AVIF" alt="ubicacion"/>
            <div className="my-1 mx-auto d-flex justify-content-center">
                <a className="mx-auto" rel="noopener" href="https://goo.gl/maps/Y2f9iJ1NVvioJkTH8" target="_blank">Mendoza, Argentina</a>
            </div>
        </div>
    </div>
    </>
  )
}

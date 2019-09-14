import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Rednajava - Red Nacional de investigación"
                    meta={[
                        { name: 'description', content: 'rednajava' },
                        { name: 'keywords', content: 'js, rednajava' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Actividades</h3>
                                <p>Conoce nuestras actividades</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Meetups</h3>
                                <p>conoce las fechas de nuestros proximos eventos</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Galeria</h3>
                                <p>Mira las fotos de nuestras actividades y eventos</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ofertas de empleo</h3>
                                <p>Encuentra nuestras ofertas de empleo actualizadas</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Semillero</h3>
                                <p>Conoce nuestro semillero OpenSGroup</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>¿Quienes somos?</h2>
                            </header>
                            <p> Rednajava es un grupo  conformado por estudiantes y profesores interesados en tecnología
                            </p>
                            <p>
                            Nos reunimos semanalmente en la Universitaria Uniagustiniana para desarrollar actividades que incluyen discutir documentos e investigaciones, dialogar con invitados externos que desean compartir sus experiencias, presentar avances de investigaciones desarrolladas por el grupo y promover actividades relacionadas al desarrollo de software. Todo esto, con el fin de aumentar la visibilidad de esta región en la comunidad universitaria y al mismo tiempo crear espacios para que la actividad académica pueda tener impactos positivos en la región. </p>
                            <ul className="actions">
                                <li><Link to="#footer" className="button next">Contactanos</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
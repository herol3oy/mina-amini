import React from 'react'
import Header from "../components/header"
import MinaAminiImg from '../../static/mina-amini.jpg'
import MinaAminiPdf from '../../static/mina-amini-portfolio.pdf'
import 'bootstrap/dist/css/bootstrap.min.css'


const Info = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="img-area col-lg-4">
                        <img src={MinaAminiImg} className="col-lg-12" alt="Mina Amini" />
                        <small className="mt-0 mb-0 col-lg-12">Ⓒ Shabnam Qaderi</small>
                    </div>
                </div>
                <div className="row pl-3">
                    <p className="vita-text-paragraph col-lg-7 mt-5" style={{ WebkitColumnCount: 2, MozColumnCount: 2, columnCount: 2, WebkitColumnWidth: '15rem', MozColumnWidth: '15rem', columnWidth: '15rem' }}>
                        Mina Amini wurde 1988 im Iran geboren. Sie hat im Iran Malerei studiert und im Jahr 2012 ist sie nach Deutschland ausgewandert. Sie hat an der Bauhaus Universität Weimar Freie Kunst bei Liz Bachhuber studiert. Während ihres Studiums erhielt sie zwei Mal DAAD Preise. Sie schließt ihr Studium im Jahr 2018 ab. Mina Amini beschäftigt sich mit den Themen wie Frauen und Kinderrecht, Sexualität, Konflikte und Krieg. Sie verwendet die Materialien wie Keramik, Porzellan, Knochen, Beton, Haare, Holz, ... mit verschieden künstlerischen Medien wie Installation, Skulptur, Malerei, Foto, Häkeln und Nähen. Ihre Arbeiten wurden in Europa, Iran, Japan und Bangladesch ausgestellt. Sie lebt seit 2018 mit ihrer Familie in Kassel.
          </p>
                    <div className="portfolio-area col-lg-5 mt-lg-5 mt-0 mb-5">
                        <ul className="pl-0">
                            <li className="font-weight-bold">Portfolio</li>
                            <li>Bitte laden Sie das <u><a href={MinaAminiPdf}>PDF-Format</a></u> herunter.</li>
                        </ul>
                    </div>
                </div>
                <h4 className="col-lg-2 mt-5 font-weight-bold">Vita</h4>
                <p className="vita-text-paragraph col-lg-12" style={{ WebkitColumnCount: 2, MozColumnCount: 2, columnCount: 2, WebkitColumnWidth: '15rem', MozColumnWidth: '15rem', columnWidth: '15rem' }}>
                    <span className=" font-weight-bold">1988</span> Geb. in Maschhad, Iran <br />
                    <span className="font-weight-bold">2012-2018</span> Studiert Freie Kunst. Bauhaus-Universität Weimar<br />
                    <span className="font-weight-bold">2009-2012</span> Bachelor. Bildende Kunst und Malerei, Ferdowsi Universität Nyschabur, Iran<br />
                    <span className="font-weight-bold">2006-2008</span> Abschluss Bildende Kunst und Malerei, Al-Zahra College der Bildenden Kunst, Maschhad, Iran<br />
                    <span className="font-weight-bold">2003-2005</span> Abitur. Bildende Kunst, Raafati Kunstschule, Maschhad, Iran<br />
                    <span className="font-weight-bold">2005</span> Keramik Ausbildung<br />
                    <span className="font-weight-bold">2003-2005</span> Restaurierungausbildung der traditionellen Darstellungen in der Keramikwerkstatt der Organisation für Kulturerbe, Kunsthandwerk und Tourismus Maschhad, Iran<br />
                </p>
                <h4 className="col-lg-2 mt-5 font-weight-bold">Ausstellungen</h4>
                <p className="vita-text-paragraph col-lg-12" style={{ WebkitColumnCount: 2, MozColumnCount: 2, columnCount: 2, WebkitColumnWidth: '15rem', MozColumnWidth: '15rem', columnWidth: '15rem' }}>
                    <span className=" font-weight-bold">2013</span>
                    <br />
                    FKK (Freie Kunst Kultur) Bauhaus-Universität, Weimar<br />
                    Wild nach Kunst, Bauhaus-Universität, Weimar<br />
                    <br />
                    <span className="font-weight-bold">2014</span><br />
                    Stein Schere Papier, Bauhaus-Universität, Weimar<br />
                    Transit, Bauhaus- Universität, Weimar<br />
                    Wunderkammer, Bauhaus-Universität, Weimar<br />
                    Transit, Nagoya Zokei Universität - Nagoya, Japan<br />
                    Transit, NZU Gallerie Koganecho Yokohama, Japan<br />
                    Im Rahmenprogramm der Yokohama Triennale<br />
                    <br />
                    <span className="font-weight-bold">2015</span><br />
                    Transit, Bauhaus-Universität, Weimar<br />
                    What’s so funny? Bauhaus-Universität, Weimar<br />
                    Transit II, Bauhaus-Universität, Weimar<br />
                    <br />
                    <span className="font-weight-bold">2016</span><br />
                    Streitfeld, München<br />
                    Work Situation, Bauhaus-Universität, Weimar<br />
                    <br />
                    <span className="font-weight-bold">2017</span><br />
                    Winter Show, Bauhaus-Universität, Weimar<br />
                    Materialschlacht, Bauhaus-Universität, Weimar<br />
                    Bauhaus Essentials, marke.6, Weimar<br />
                    <br />
                    <span className="font-weight-bold">2018</span><br />
                    Reassessing Material, University of Bella Arts Barcelona, Spanien<br />
                    Der weibliche Krieg, Bauhaus-Universität, Weimar<br />
                    <br />
                    <span className="font-weight-bold">2019</span><br />
                    Materie Neu Denken, Khulna, Bangladesch<br />
                    Materie Neu Denken, Sala 1, Rom, Italien<br />
                    <br />
                    <span className="font-weight-bold">Aug. 2018- Okt. 2019</span>
                    <br />
                    Elternzeit
                    <br />
                </p>
                <div className="row col-lg-12 mt-5">
                    <div className="col-lg-6">
                        <h4 className="font-weight-bold">Stipendien und Preise</h4>
                        <p className="vita-text-paragraph">
                            <span className=" font-weight-bold">2013</span> Nominierung für Marion Ermer Preis<br />
                            <span className="font-weight-bold">2015</span> DAAD Preis für besonderes interkulturelles Engagement<br />
                            <span className="font-weight-bold">2017</span> Bauhaus Essentials Preis<br />
                            <span className="font-weight-bold">2019</span> STIBET Abschluß Stipendium des International Office
                            der Bauhaus-Universität, Weimar, gefördet durch den DAAD<br />
                        </p>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="col-lg-12 mt-3 mt-lg-0">
                            <h4 className="font-weight-bold">Arbeiten in Publikationen</h4>
                            <p className="vita-text-paragraph">
                                <span className=" font-weight-bold">2016</span> Transit - The Japanese Journey, Bauhaus
                                Universitätsverlag,
                                ISBN 978-3-89739-883-2
                            </p>
                            <br />
                        </div>
                        <div className="col-lg-12">
                            <h4 className="font-weight-bold">Sammlungen</h4>
                            <p className="vita-text-paragraph">
                                Archiv der Moderne, Bauhaus-Universität Weimar<br />
                                Iranhaus Weimar<br />
                                Privatsammlungen: Iran, Jerusalem, Wien, Irland<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info

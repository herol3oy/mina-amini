import React from 'react'
import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css'

const Impressum = () => {
    return (
        <>
            <Header />
            <aside className="col-lg-6">
                <h4 className="col-lg-4">Impressum</h4>
                <p className="pl-3 vita-text-paragraph">
                    Mina Amini <br />
                    Friedenstraße 18, 34121 Kassel <br />
                    minaamini1988@gmail.com <br />
                    017629172825
          </p>
                <p className="vita-text-paragraph pl-3">Webdesign: <u><a href="https://demah.ir">Hamed Sedighi</a></u></p>
                <p className="m-0 pl-3 vita-text-paragraph">
                    Datenschutzerklärung<br />
                    Die Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Ich bin
                    für eigene Inhalte auf diesen Seiten verantwortlich. Soweit die Inhalte auf dieser Seite
                    nicht von mir erstellt wurden, werden sie entsprechend gekennzeichnet. Für den Inhalt der
            verlinkten Seiten ist der Anbieter der Seiten verantwortlich.<br /><br />
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
            der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors.<br /><br />
                    Ich nehme den Schutz Ihren persönlichen Daten sehr ernst. Die Nutzung meiner Webseite
            geschieht ohne Angabe Ihrer Daten.<br />
                    Falls Sie mir eine E-Mail schreiben, werde ich mit Ihren Daten vertraulich umgehen und
                    diese nicht an Dritte weitergeben.
          </p>
            </aside>
        </>
    )
}

export default Impressum

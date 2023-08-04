import Link from 'next/link'

const Impressum = () => (
  <div className="flex w-6/12 flex-col gap-10">
    <h1 className=" text-4xl font-bold">Impressum</h1>
    <p>
      Mina Amini <br />
      Friedenstraße 18, 34121 Kassel <br />
      minaamini1988@gmail.com <br />
      017629172825
    </p>
    <p>
      Webdesign: {` `}
      <Link href="https://github.com/herol3oy/" className="underline">
        Hamed Sedighi
      </Link>
    </p>

    <p>
      Datenschutzerklärung <br />
      Die Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
      Urheberrecht. Ich bin für eigene Inhalte auf diesen Seiten verantwortlich.
      Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden
      sie entsprechend gekennzeichnet. Für den Inhalt der verlinkten Seiten ist
      der Anbieter der Seiten verantwortlich.
    </p>

    <p>
      Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
      außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
      Zustimmung des Autors.
    </p>

    <p>
      Ich nehme den Schutz Ihren persönlichen Daten sehr ernst. Die Nutzung
      meiner Webseite geschieht ohne Angabe Ihrer Daten.
    </p>
    <p>
      Falls Sie mir eine E-Mail schreiben, werde ich mit Ihren Daten vertraulich
      umgehen und diese nicht an Dritte weitergeben.
    </p>
  </div>
)

export default Impressum

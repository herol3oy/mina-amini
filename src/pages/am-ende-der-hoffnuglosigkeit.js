import React from 'react'
import ImgAmEnde01 from '../../static/am-ende-der-hoffnuglosigkeit-01.jpg'
import ImgAmEnde02 from '../../static/am-ende-der-hoffnuglosigkeit-02.jpg'
import ImgAmEnde03 from '../../static/am-ende-der-hoffnuglosigkeit-03.jpg'
import Header from '../components/header'

const AmEnde = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-8">
                        <img src={ImgAmEnde01} className="img-fluid mb-3 offset-lg-4" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={ImgAmEnde02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={ImgAmEnde03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Am Ende der Hoffnuglösigkeit. 2013</p>
                            <p>Öl auf Leinwand. Handgemalte glasierte Fliesen. 160 x 120 cm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmEnde
import React from 'react'
import SiebenStadteDerLiebe01 from '../../static/sieben-stadte-der-liebe-01.jpg'
import SiebenStadteDerLiebe02 from '../../static/sieben-stadte-der-liebe-02.jpg'
import SiebenStadteDerLiebe03 from '../../static/sieben-stadte-der-liebe-03.jpg'
import Header from '../components/header'

const HimmelUndHolle = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={SiebenStadteDerLiebe01} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={SiebenStadteDerLiebe02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={SiebenStadteDerLiebe03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Sieben Städte der Liebe. 2015</p>
                            <p>Glasierter abgeformter Ton (Lebensgroße). 210 x 20 x 12 cm</p>
                            <p>©Florian Wehking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HimmelUndHolle

import React from 'react'
import Imgg01 from '../../static/36-12n-379o-01.jpg'
import Imgg02 from '../../static/36-12n-379o-02.jpg'
import Imgg03 from '../../static/36-12n-379o-03.jpg'
import Imgg04 from '../../static/36-12n-379o-04.jpg'
import Header from '../components/header'

const N379o = () => {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="images col-lg-12">
                    <img src={Imgg02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                </div>
                <div className="images col-lg-6">
                    <img src={Imgg03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                </div>
                <div className="images col-lg-6">
                    <img src={Imgg04} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                </div>
                <div className="images col-lg-12">
                    <img src={Imgg01} className="img-fluid mb-3 col-lg-6" alt="Fine art by Mina Amini" />
                </div>
                <div className="text-frame col-lg-12">
                    <div className="info col-lg-12">
                        <p>36° 12′ N, 37° 9′ O. 2017</p>
                        <p>Abgeformter Beton, Acryl. 140 x 70 x 30 cm</p>
                        <p>©Florian Wehking</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default N379o
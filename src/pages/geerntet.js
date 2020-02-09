import React from 'react'
import Geerntet01 from '../../static/geerntet-01.jpg'
import Geerntet02 from '../../static/geerntet-02.jpg'
import Geerntet03 from '../../static/geerntet-03.jpg'
import Geerntet04 from '../../static/geerntet-04.jpg'
import Geerntet05 from '../../static/geerntet-05.jpg'
import Geerntet06 from '../../static/geerntet-06.jpg'
import Header from '../components/header'

const Geerntet = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="left col-lg-12">
                        <div className="row">
                            <div className="images col-lg-12">
                                <img src={Geerntet01} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                            </div>
                            <div className="images col-lg-6">
                                <img src={Geerntet02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                            </div>
                            <div className="images col-lg-6">
                                <img src={Geerntet04} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                            </div>
                            <div className="images col-lg-6">
                                <img src={Geerntet03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                            </div>
                            <div className="images col-lg-6">
                                <img src={Geerntet05} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                            </div>
                            <div className="images col-lg-6">
                                <img src={Geerntet06} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Geerntet. 2015</p>
                            <p>Glasiertes Porzellan, Blut der Künstlerin, Matratze. 180 x 90 x 45 cm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Geerntet

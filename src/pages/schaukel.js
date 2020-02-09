import React from 'react'
import Schaukel01 from '../../static/schaukel01.jpg'
import Schaukel02 from '../../static/schaukel02.jpg'
import Schaukel03 from '../../static/schaukel03.jpg'
import Schaukel04 from '../../static/schaukel04.jpg'
import Schaukel05 from '../../static/schaukel05.jpg'
import Schaukel06 from '../../static/schaukel06.jpg'
import Schaukel07 from '../../static/schaukel07.jpg'
import Schaukel08 from '../../static/schaukel08.jpg'
import Header from '../components/header'

const Schaukel = () => {
    return (
        <div>
            <Header />

            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-6">
                        <img src={Schaukel01} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Schaukel02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Schaukel03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Schaukel04} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Schaukel05} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Schaukel06} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Schaukel07} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Schaukel08} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Schaukel! 2017</p>
                            <p>Holz, Acryl, Juteschnur, Scheibenwischermotor, Sand.</p>
                            <p>260 x 240 x 200 cm</p>
                            <p>©Florian Wehking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schaukel
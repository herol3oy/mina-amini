import React from 'react'
import InnereWunde01 from '../../static/innere-wunde.jpg'
import Header from '../components/header'

const InnereWunde = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={InnereWunde01} className="img-fluid mb-3 col-lg-8 mx-auto d-block" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame text-center col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Innere Wunde. 2014</p>
                            <p>Öl auf Holz, Glasur, Nägel. 150 x 80 cm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnereWunde

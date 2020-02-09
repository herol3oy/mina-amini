import React from 'react'
import OT02 from '../../static/o-t-2.jpg'
import Header from '../components/header'

const OT2 = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={OT02} className="img-fluid mb-3 col-lg-8 mx-auto d-block" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame text-center col-lg-12">
                    <div className="row">
                        <div className="info mt-5 col-lg-12">
                            <p>Mobile der Drangsal. 2018</p>
                            <p>Holz, Knochen, Wolle. 30 x 30 x 40 cm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OT2

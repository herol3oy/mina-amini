import React from 'react';
import MobileDerDrangsal01 from '../../static/mobile-der-drangsal.jpg'
import Header from '../components/header'

const MobileDerDrangsal = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={MobileDerDrangsal01} className="img-fluid mb-3 col-lg-8 mx-auto d-block" alt="Fine art by Mina Amini" />
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
    );
}

export default MobileDerDrangsal

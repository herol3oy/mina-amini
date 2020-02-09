import React from 'react'
import Header from "../components/header"


import Mutter01 from '../../static/mutter-01.jpg'
import Mutter02 from '../../static/mutter-02.jpg'
import Mutter03 from '../../static/mutter-03.jpg'

const Mutter = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={Mutter03} className="img-fluid mb-3 col-lg-12" alt="Mutter by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Mutter02} className="img-fluid mb-3 col-lg-12" alt="Mutter by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Mutter01} className="img-fluid mb-3 col-lg-12" alt="Mutter by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Mutter. 2018</p>
                            <p>Porzellan, Stoff. 115 x 70 x 10 cm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mutter
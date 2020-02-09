import React from 'react'
import Sommer02 from '../../static/sommer-02.jpg'
import Sommer03 from '../../static/sommer-03.jpg'
import Sommer04 from '../../static/sommer-04.jpg'
import Sommer05 from '../../static/sommer-05.jpg'
import Header from '../components/header'

const Heimat = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-8">
                        <img src={Sommer04} className="img-fluid mb-3 offset-lg-4" alt="Fine Art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Sommer05} className="img-fluid mb-3 col-lg-12" alt="Fine Art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Sommer03} className="img-fluid mb-3 col-lg-12" alt="Fine Art by Mina Amini" />
                    </div>
                    <div className="images col-lg-12">
                        <img src={Sommer02} className="img-fluid mb-3 col-lg-12   " alt="Fine Art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Sommer 2015. 2015</p>
                            <p>Glas, Porzellan, Wasser. 100 x 50 x 40 cm</p>
                            <p>©Florian Wehking</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Heimat
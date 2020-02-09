import React from 'react';
import OT01 from '../../static/o-t-01.jpg'
import OT02 from '../../static/o-t-02.jpg'
import OT03 from '../../static/o-t-03.jpg'
import OT04 from '../../static/o-t-04.jpg'
import Header from '../components/header'

const OT = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={OT04} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-12">
                        <img src={OT02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={OT01} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={OT03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>O.T. (Grenze). 2016</p>
                            <p>Metall, Draht, Porzellan und Beton. 250 x 200 x 45 cm</p>
                            <p>©Florian Wehking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OT

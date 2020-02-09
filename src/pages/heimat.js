import React from 'react'
import Heimat01 from '../../static/heimat-01.jpg'
import Heimat02 from '../../static/heimat-02.jpg'
import Heimat03 from '../../static/heimat-03.jpg'
import Heimat04 from '../../static/heimat-04.jpg'
import Heimat05 from '../../static/heimat-05.jpg'
import Header from '../components/header'

const Heimat = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={Heimat03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Heimat01} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={Heimat04} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-12">
                        <img src={Heimat02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-12">
                        <img src={Heimat05} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Heimat. 2018</p>
                            <p>Fundstück, Fliesen, Wasser. 45 x 40 x 27 cm</p>
                            <p>©Florian Wehking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heimat

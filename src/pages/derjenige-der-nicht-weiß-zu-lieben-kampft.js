import React from 'react'
import DerjenIMG01 from '../../static/derjenige-der-nicht-weiß-zu-lieben-kampft-01.jpg'
import DerjenIMG02 from '../../static/derjenige-der-nicht-weiß-zu-lieben-kampft-02.jpg'
import DerjenIMG03 from '../../static/derjenige-der-nicht-weiß-zu-lieben-kampft-03.jpg'
import DerjenIMG04 from '../../static/derjenige-der-nicht-weiß-zu-lieben-kampft-04.jpg'
import DerjenIMG05 from '../../static/derjenige-der-nicht-weiß-zu-lieben-kampft-05.jpg'
import Header from '../components/header'

const Derjen = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={DerjenIMG01} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={DerjenIMG02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={DerjenIMG03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={DerjenIMG05} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={DerjenIMG04} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Derjenige, der nicht weiß zu lieben, kämpft…. 2014</p>
                            <p>Mixed Media. 150 x 40 x 40 cm</p>
                            <p>©Shabnam Qaderi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Derjen

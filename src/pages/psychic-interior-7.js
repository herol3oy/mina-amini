import React from 'react'
import PsychicInterior01 from '../../static/psychic-interior-01.jpg'
import PsychicInterior02 from '../../static/psychic-interior-02.jpg'
import PsychicInterior03 from '../../static/psychic-interior-03.jpg'
import PsychicInterior04 from '../../static/psychic-interior-04.jpg'
import PsychicInterior05 from '../../static/psychic-interior-05.jpg'
import PsychicInterior06 from '../../static/psychic-interior-06.jpg'
import PsychicInterior07 from '../../static/psychic-interior-07.jpg'
import Header from '../components/header'

const PsychicInterior = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-4">
                        <img src={PsychicInterior07} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                        <div className="col-lg-12">
                            <p>O.T. 2018</p>
                            <p>Aquarell auf Papier. 24 x 17 cm</p>
                        </div>
                    </div>
                    <div className="images col-lg-4">
                        <img src={PsychicInterior02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                        <div className="col-lg-12">
                            <p>Puppi. 2018</p>
                            <p>Aquarell auf Papier. 24 x 17 cm</p>
                        </div>
                    </div>
                    <div className="images col-lg-4">
                        <img src={PsychicInterior01} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                        <div className="col-lg-12">
                            <p>Mama Mina. 2018 </p>
                            <p>Aquarell auf Papier. 24 x 17 cm</p>
                        </div>
                    </div>
                    <div className="images col-lg-6">
                        <img src={PsychicInterior05} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                        <div className="col-lg-12">
                            <p>Landschaft ihres Körpers. 2015</p>
                            <p>Aquarell auf Papier. Je. 40 x 30 cm</p>
                        </div>
                    </div>
                    <div className="images col-lg-6">
                        <img src={PsychicInterior04} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={PsychicInterior03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                        <div className="col-lg-12">
                            <p>O.T. 2018</p>
                            <p>Öl auf Leinwand. 130 x 70 cm</p>
                        </div>
                    </div>
                    <div className="images col-lg-6">
                        <img src={PsychicInterior06} className="img-fluid mb-3 col-lg-12" style={{ height: '96%' }} alt="Fine art by Mina Amini" />
                        <div className="col-lg-12">
                            <p>Zwang der Geo. 2012</p>
                            <p>Acryl auf Pappe. 70 x 50 cm  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PsychicInterior

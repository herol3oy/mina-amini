import React from 'react'
import HimmelUndHolle01 from '../../static/himmel-und-holle-01.jpg'
import HimmelUndHolle02 from '../../static/himmel-und-holle-02.jpg'
import HimmelUndHolle03 from '../../static/himmel-und-holle-03.jpg'
import HimmelUndHolle04 from '../../static/himmel-und-holle-04.jpg'
import Header from '../components/header'

const HimmelUndHolle = () => {
    return (
        <div>
            <Header />
            <div className="frame col-lg-12">
                <div className="row">
                    <div className="images col-lg-12">
                        <img src={HimmelUndHolle01} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={HimmelUndHolle02} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={HimmelUndHolle03} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                    <div className="images col-lg-6">
                        <img src={HimmelUndHolle04} className="img-fluid mb-3 col-lg-12" alt="Fine art by Mina Amini" />
                    </div>
                </div>
                <div className="text-frame col-lg-12">
                    <div className="row">
                        <div className="info col-lg-12">
                            <p>Himmel und Hölle. 2017</p>
                            <p>Knochen, Beton. 225 x 135 x 10 cm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HimmelUndHolle

import React, { Component } from "react";
import bootstrap from "bootstrap";
import './Main.css';

class Main extends Component {
    render() {
        const serviceList = [
            {
                image: './images/list53.png'
            }
        ]

        return (
            < main >
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={process.env.PUBLIC_URL + './images/service.png'} className='hero' />
                        </div>
                        <div className="col-sm-6">
                            <h2>Best Car Rental for any kind of trip in Jakarta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus eligendi numquam nulla nostrum placeat quae consectetur dolorem eius tempora neque adipisci distinctio a aliquid quisquam, repellat, accusantium quo optio.</p>
                            <ul>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt='service' /> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt='service' /> Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt='service' /> Sewa Mobil Jangka Panjang Bulanan</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt='service' /> Gratis Antar - Jemput Mobil di Bandara</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt='service' /> Layanan Airport Transfer / Drop In Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end of service */}

                {/* start of why us*/}
                <div className='container'>
                    <h1>Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className='row justify-content-between px-5'>
                    <div className='card pt-3' >
                        <div className='card-body'>
                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_complete.png'} />
                            <h5 className='card-title'>Mobil Lengkap</h5>
                            <p className='card-text'>
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.
                            </p>
                        </div>
                    </div>
                    <div className='card pt-3' >
                        <div className='card-body'>
                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_price.png'} />
                            <h5 className='card-title'>Harga Murah</h5>
                            <p className='card-text'>
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
                            </p>
                        </div>
                    </div>
                    <div className='card pt-3' >
                        <div className='card-body'>
                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_24hrs.png'} />
                            <h5 className='card-title'>Layanan 24 Jam</h5>
                            <p className='card-text'>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.
                            </p>
                        </div>
                    </div>
                    <div className='card pt-3'>
                        <div className='card-body'>
                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_professional.png'} />
                            <h5 className='card-title'>Sopir Profesional</h5>
                            <p className='card-text'>
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.
                            </p>
                        </div>
                    </div>
                </div>
            </main >
        )
    }
}

export default Main;
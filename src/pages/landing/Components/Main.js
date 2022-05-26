import React, { Component } from "react";
import bootstrap from "bootstrap";
import './Main.css';

class Main extends Component {
    render() {
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
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} /> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} /> Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} /> Sewa Mobil Jangka Panjang Bulanan</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} /> Gratis Antar - Jemput Mobil di Bandara</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} /> Layanan Airport Transfer / Drop In Out</li>
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
                <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src="img/icon_complete.svg" className="card-img-top" alt="..." />
                                <h5 className="card-title mt-3 card-title-text">Mobil Lengkap</h5>
                                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src="img/icon_price.svg" className="card-img-top" alt="..." />
                                <h5 className="card-title mt-3 card-title-text">Harga Murah</h5>
                                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src="img/icon_24hrs.svg" className="card-img-top" alt="..." />
                                <h5 className="card-title mt-3 card-title-text">Layanan 24 Jam</h5>
                                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src="img/icon_professional.svg" className="card-img-top" alt="..." />
                                <h5 className="card-title mt-3 card-title-text">Sopir Profesional</h5>
                                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        )
    }
}

export default Main;
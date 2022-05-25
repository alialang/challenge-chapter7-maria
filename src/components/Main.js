import React, { Component } from "react";

class Main extends Component {
    render() {
        const serviceList = [
            {

            }
        ]

        return (
            < main >
                <div class="container my-4">
                    <div class="row">
                        <div class="col-sm-6">
                            <img src={process.env.PUBLIC_URL + './images/service.png'} className='hero' />
                        </div>
                        <div class="col-sm-6">
                            <h2>Best Car Rental for any kind of trip in Jakarta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus eligendi numquam nulla nostrum placeat quae consectetur dolorem eius tempora neque adipisci distinctio a aliquid quisquam, repellat, accusantium quo optio.</p>
                            <ul>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt="service" /> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt="service" /> Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt="service" /> Sewa Mobil Jangka Panjang Bulanan</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt="service" /> Gratis Antar - Jemput Mobil di Bandara</li>
                                <li><img src={process.env.PUBLIC_URL + '/images/list53.png'} alt="service" /> Layanan Airport Transfer / Drop In Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end of service */}

                {/* start of why us*/}
                <div class="container">
                    <h1>Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div class="row justify-content-between px-5">
                    <div class="card pt-3" style="width: 18rem">
                        <div class="card-body">
                            <img className="icon-card" src={process.env.PUBLIC_URL + "./images/icon_complete.png"} />
                            <h5 class="card-title">Mobil Lengkap</h5>
                            <p class="card-text">
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.
                            </p>
                        </div>
                    </div>
                    <div class="card pt-3" style="width: 18rem">
                        <div class="card-body">
                            <img class="icon-card" src={process.env.PUBLIC_URL + "./images/icon_price.png"} />
                            <h5 class="card-title">Harga Murah</h5>
                            <p class="card-text">
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
                            </p>
                        </div>
                    </div>
                    <div class="card pt-3" style="width: 18rem">
                        <div class="card-body">
                            <img class="icon-card" src={process.env.PUBLIC_URL + "./images/icon_24hrs.png"} />
                            <h5 class="card-title">Layanan 24 Jam</h5>
                            <p class="card-text">
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.
                            </p>
                        </div>
                    </div>
                    <div class="card pt-3" style="width: 18rem">
                        <div class="card-body">
                            <img class="icon-card" src={process.env.PUBLIC_URL + "./images/icon_professional.png"} />
                            <h5 class="card-title">Sopir Profesional</h5>
                            <p class="card-text">
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end of service */}
            </main >
        )
    }
}
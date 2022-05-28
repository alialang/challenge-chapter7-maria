import React, { Component } from 'react';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css'

class Accordion extends Component {
	render() {
		return (
			<div className='container mt-5' id='For-FAQ'>
				<div className='row'>
					<div className='col-lg-5 col-md-12'>
						<h2>Frequently Asked Question</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
					<div className='col-lg-7 col-md-12'>
						<div className='accordion' id='accordionExample'>
							<div className='accordion-item mb-3 border'>
								<h2 className='accordion-header' id='headingOne'>
									<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
										Apa saja syarat yang dibutuhkan?
									</button>
								</h2>
								<div id='collapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae nam adipisci itaque! Maxime adipisci laudantium, numquam qui eius aliquid voluptatem sunt deserunt quos! Ducimus aut sunt illo perspiciatis natus.</p>
									</div>
								</div>
							</div>
							<div className='accordion-item mb-3 border'>
								<h2 className='accordion-header' id='headingTwo'>
									<button className='accordion-button collapsed' type='button' data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										Berapa hari minimal sewa mobil lepas kunci?
									</button>
								</h2>
								<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloremque dignissimos ducimus vel odit, quae natus ea, velit dolorum sed maxime temporibus ex voluptatibus laborum nisi? Fugit voluptatum accusamus eaque?</p>
									</div>
								</div>
							</div>
							<div className="accordion-item mb-3 border">
								<h2 className="accordion-header" id="headingThree">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										Berapa hari sebelumnya sabaiknya booking sewa mobil?
									</button>
								</h2>
								<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, nulla, ut laborum at quia impedit ea consequatur dolorum, amet molestias delectus minus esse doloribus dolor ipsa blanditiis soluta ullam error.</p>
									</div>
								</div>
							</div>
							<div className="accordion-item mb-3 border">
								<h2 className="accordion-header" id="headingFour">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
										Apakah Ada biaya antar-jemput?
									</button>
								</h2>
								<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, harum. Sequi illo labore quae ratione deserunt asperiores, minus officia quasi necessitatibus quibusdam nemo voluptatibus vero nisi ipsa quisquam earum beatae?</p>
									</div>
								</div>
							</div>
							<div className="accordion-item mb-3 border">
								<h2 className="accordion-header" id="headingFive">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										Bagaimana jika terjadi kecelakaan?
									</button>
								</h2>
								<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae sapiente ipsa velit maiores soluta labore dolorum ullam quasi exercitationem quidem consectetur fuga aperiam, culpa maxime nulla eos tempore dicta.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Accordion;
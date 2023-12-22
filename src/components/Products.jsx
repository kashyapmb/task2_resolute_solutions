import React, { useEffect, useState } from "react"
import "./Products.css"

function Products() {
	const [num, setNum] = useState(1)
	return (
		<>
			<div className="container-fluid full_component">
				<div className="row ">
					<div className="col-12 center_div">
						<p>Our Products</p>
					</div>
				</div>

				<div className="row component_spacing">
					<div className="col-4 tab_layout">
						<div
							onClick={() => setNum(1)}
							style={{ border: num == 1 ? "2px solid #002365" : "hidden" }}
							className="selection_div"
						>
							<h6>RePOS</h6>
							<h6 className="down_text">Retail POS Solution</h6>
						</div>
						<div
							onClick={() => setNum(2)}
							style={{ border: num == 2 ? "2px solid #002365" : "hidden" }}
							className="selection_div"
						>
							<h6>Android RePOS</h6>
							<h6 className="down_text">Retail Android POS Solution</h6>
						</div>
						<div
							onClick={() => setNum(3)}
							style={{ border: num == 3 ? "2px solid #002365" : "hidden" }}
							className="selection_div"
						>
							<h6>ReAnalyse</h6>
							<h6 className="down_text">Mobile Reporting App</h6>
						</div>
					</div>
					<div className="col-7 center_second_col">
						<div className="row">
							<div className="col-6">
								{num == 1 && <img src="/images/1.png" className="img-fluid" />}
								{num == 2 && <img src="/images/2.png" className="img-fluid" />}
								{num == 3 && <img src="/images/3.png" className="img-fluid" />}
							</div>
							<div className="col-5 description_sel">
								{num == 1 && (
									<div>
										<img src="/images/1_logo.png" className="img-fluid" />
										<p>
											Advanced cloud based & server based enterprise management
											system for the food and beverage service industry.
										</p>
									</div>
								)}
								{num == 2 && (
									<div>
										<img src="/images/2_logo.png" className="img-fluid" />
										<p>
											Paperless and Hassle-free Management of Restaurant tables
											and order relay to kitchen which improves the efficiency
											of operations while also reducing manual errors.
										</p>
									</div>
								)}
								{num == 3 && (
									<div>
										<img src="/images/3_logo.png" className="img-fluid" />
										<p>
											May it be a single outlet or a chain of restaurants,
											always know the latest happenings at all outlets from
											anywhere,at any time; with our reporting mobile app,
											ReAnalyse.
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Products

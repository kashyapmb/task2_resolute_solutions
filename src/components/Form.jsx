import React from "react"
import "../App.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { country } from "../country"
import "./Form.css"

function Form() {
	return (
		<>
			<div className="contact">
				<div className="contact-tagline">
					<h1 className="bookDemo">
						Book a<span class="single_space"></span>
						<p className="green_underline">Demo</p>
					</h1>
				</div>
				<div className="content">
					<img src="/images/sideImage.png" />
					<div className="form">
						<div className="input-fields">
							<div className="first-col">
								<h6>Full Name*</h6>
								<input type="text" />
								<h6>Country*</h6>
								<select className="custom-select">
									<option selected>Select Role</option>
									{country.map((item, index) => {
										return (
											<option value={index}>
												<span>
													<img
														src={item.image}
														alt="Image SVG "
														style={{
															width: "10px",
															height: "10px",
															marginRight: "8px",
														}}
													/>
													{item.name}
												</span>
											</option>
										)
									})}
								</select>
								<h6>State*</h6>
								<input type="text" />
								<h6>Brand Name*</h6>
								<input type="text" />
								<h6>Your Role*</h6>
								<select className="custom-select">
									<option selected>Select Role</option>
									<option value="1">CXO</option>
									<option value="2">Founder/Director</option>
									<option value="3">Manager</option>
									<option value="4">Consultant</option>
									<option value="5">Other</option>
								</select>
							</div>
							<div className="second-col">
								<h6>Email*</h6>
								<input type="email" />
								<h6>Contact No*</h6>
								<input type="tel" />
								<h6>City*</h6>
								<input type="text" />
								<h6>Retail Business Format*</h6>
								<select className="custom-select">
									<option selected>Select Retail Business Format</option>
									<option value="1">Garments % Apparels</option>
									<option value="2">Footwear</option>
									<option value="3">Boutique</option>
									<option value="4">Supermarket</option>
									<option value="5">Grocery Store</option>
									<option value="5">Gourmet Store</option>
									<option value="5">Vegetables Shop</option>
									<option value="5">Roastery</option>
									<option value="5">Meat Shop</option>
									<option value="5">Gifts, Toys & Stationary</option>
									<option value="5">Other</option>
								</select>
								<h6>No. of Outlets*</h6>
								<input type="number" />
							</div>
						</div>
						<button className="submit">
							<span>Submit inquiry </span>{" "}
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Form

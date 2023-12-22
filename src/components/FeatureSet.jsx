import React from "react"
import "./FeatureSet.css"

function FeatureSet() {
	return (
		<>
			<div className="heading_this_component">
				<h1>Explore our awesome Feature Set</h1>
			</div>
			<div className="component_FeatureSet">
				<div className="image_animation">
					<div className="center_div_this">
						<div className="left_component">
							<div>
								<h6>Retail POS Software</h6>
								<p className="desc_this">
									Introducing a combination of unparalleled characteristics for
									managing your restaurant
								</p>
								<p className="btn_link_this">
									<span>Know More</span>
								</p>
							</div>
							<div className="second_left">
								<h6>Integrated Accounting</h6>
								<p className="desc_this">
									Helps you efficiently manage stock, unused items, reduce
									wastage and record new stock
								</p>
								<p className="btn_link_this">
									<span>Know More</span>
								</p>
							</div>
							<div className="third_left">
								<h6>Uninterrupted Retail Billing Software</h6>
								<p className="desc_this">
									Enables you to drive result oriented sales and marketing
									campaigns for your restaurant
								</p>
								<p className="btn_link_this">
									<span>Know More</span>
								</p>
							</div>
						</div>
						<div className="right_component">
							<div>
								<h6>Supply Chain Management</h6>
								<p className="desc_this">
									An exclusive feature for multichain restaurants or businesses
									operating on the franchisee model
								</p>
								<p className="btn_link_this">
									<span>Know More</span>
								</p>
							</div>

							<div className="second_right">
								<h6>CRM and Loyalty</h6>
								<p className="desc_this">
									Central management of overall functioning of menus, recipes,
									inventory, user roles & permissions
								</p>
								<p className="btn_link_this">
									<span>Know More</span>
								</p>
							</div>

							<div className="third_right">
								<h6>Retail Software Utilities</h6>
								<p className="desc_this">
									Get powerful insights about your restaurant on-the-go and use
									it to improvise your business
								</p>
								<p className="btn_link_this">
									<span>Know More</span>
								</p>
							</div>
						</div>
					</div>
					<div className="img_set">
						<img
							src="./images/circle_animation.png"
							alt=""
							className="circle_animation"
						/>
						<img
							src="./images/circle_logo.png"
							alt=""
							className="circle_logo"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default FeatureSet

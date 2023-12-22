import React from "react"
import "./ReposInfo.css"

function ReposInfo() {
	return (
		<>
			<div className="container-fluid pb-5 my-5">
				<div className="row">
					<div className="col-12 Information">
						<div className="row">
							<div className="col-6">
								<p className="side_heading">What is RePOS?</p>
								<div className="side_content">
									<p>
										RePOS, the cutting-edge retail POS software built to take
										your business to new heights, allows you to experience
										retail excellence like never before. Say goodbye to manual
										processes and welcome improved operations, efficiency, and
										profitability.
									</p>
									<p>
										With RePOS, you can easily manage your sales transactions,
										maintain inventory, and obtain vital insights into the
										performance of your business in real time. Our simple design
										and intuitive features make it simple for you and your staff
										to execute transactions, handle petty cash, and provide
										excellent customer service.
									</p>
									<p>
										RePOS serves businesses of various sizes and types, from
										small shops to large-scale retail networks. Our software
										adjusts to your individual demands, offering a seamless and
										customised experience whether you manage a clothing store, a
										grocery store, or a speciality boutique. So, Join the
										growing community of successful businesses who have
										harnessed the power of our innovative software and taken
										their business to new heights!
									</p>
									<p className="btn_book_a_demo2">
										<span>Book a Demo</span>
									</p>
								</div>
							</div>
							<div className="col-6 display_img">
								<img src="/images/info_logo.png" alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ReposInfo

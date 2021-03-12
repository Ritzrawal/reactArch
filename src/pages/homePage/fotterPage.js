import React from 'react'
import './homeStyles.css'
export default function FotterPage() {
    return (
        <div>
            <div className="Footer">
			<div className="Footerbefore"></div>
			<div className="ContainerFotter">
				<div className="row">
				    <div className="col-md-15 col-sm-3">
				    	<div className="widget">
				    		<div className="widget-title">
				    			<h4>SUBSCRIBE</h4>

				    		</div>
				    		<div className="newsletter">
				    			<p>Lorem ipsum dolor sit amet, cons adipiscing elit, sed diam nonumy dolor.</p>
								<form className="form-inline">
									<div className="form-group">
								    <div className="input-group">
										<input type="text" className="form-control" id="exampleInputAmount" placeholder="Your Email"/>
										<div className="input-group-addon"><i class="icon icon-Mail"></i></div>
								    </div>
									</div>
								</form>
				    		</div>
				    	</div>
				    </div>

				    <div className="col-md-15 col-sm-3">
				    	<div className="widget">
				    		<div className="widget-title">
				    			<h4>MY ACCOUNT</h4>
				    		
				    		</div>
							<ul>
								<p><a href="#">My Account</a></p>
								<p><a href="#">Personal Information</a></p>
								<p><a href="#">Address</a></p>
								<p><a href="#">Discount</a></p>
								<p><a href="#">Booking Hstory</a></p>
								<p><a href="#">My Credit Slip</a></p>
							</ul>
				    	</div>
				    </div>

				    <div className="col-md-15 col-sm-3">
				    	<div className="widget">
				    		<div className="widget-title">
				    			<h4>USEFUL LINK</h4>
				    		
				    		</div>
							<ul>
								<p><a href="#">Traveller</a></p>
								<p><a href="#">Support Centre</a></p>
								<p><a href="#">Special Offers</a></p>
								<p><a href="#">Bus</a></p>
								<p><a href="#">Flight</a></p>
								<p><a href="#">Hotels</a></p>
							</ul>
				    	</div>
				    </div>

				    <div className="col-md-15 col-sm-3">
				    	<div className="widget">
				    		<div className="widget-title">
				    			<h4>CONTACT US</h4>
				    		
				    		</div>
							<ul>
								<p><a href="#">404 DESIGNER,  NEPAL</a></p>
								<p><a href="#">INFO@NEPLVE.COM</a></p>
								<p><a href="#">+100 - 800 - 456789</a></p>
							</ul>
				    	</div>
				    </div>
				</div>
			</div>
		
        </div>
        	<div class="Copyrights">
			<div class="container">	
				<div class="row clearfix">
					<div class="col-md-6">
						<p className="RightsNepCustomize">Copyright © <a href="#">NepLove 2021</a>. All Right Reserved</p>
					</div>
					<div class="col-md-6">
						<img src="images/copyrights.png" alt="" class="img-responsive"/>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

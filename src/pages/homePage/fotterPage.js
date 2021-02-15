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
								<li><a href="#">My Account</a></li>
								<li><a href="#">Personal Information</a></li>
								<li><a href="#">Address</a></li>
								<li><a href="#">Discount</a></li>
								<li><a href="#">Booking Hstory</a></li>
								<li><a href="#">My Credit Slip</a></li>
							</ul>
				    	</div>
				    </div>

				    <div className="col-md-15 col-sm-3">
				    	<div className="widget">
				    		<div className="widget-title">
				    			<h4>USEFUL LINK</h4>
				    		
				    		</div>
							<ul>
								<li><a href="#">Traveller</a></li>
								<li><a href="#">Support Centre</a></li>
								<li><a href="#">Special Offers</a></li>
								<li><a href="#">Events Ready</a></li>
								<li><a href="#">Flight</a></li>
								<li><a href="#">Hotels</a></li>
							</ul>
				    	</div>
				    </div>

				    <div className="col-md-15 col-sm-3">
				    	<div className="widget">
				    		<div className="widget-title">
				    			<h4>CONTACT US</h4>
				    		
				    		</div>
							<p>Lorem ipsum dolor sit amet, cons adipiscing elit.</p>
							<ul>
								<li><a href="#">404 DESIGNER,  NEW YORK</a></li>
								<li><a href="#">INFO@BLUEBIRD.COM</a></li>
								<li><a href="#">+100 - 800 - 456789</a></li>
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
						<p>Copyright © <a href="#">Pathos Fashion 2015</a>. All Right Reserved</p>
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

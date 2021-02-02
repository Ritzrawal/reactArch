import React from 'react'
import './loginPage.css';
const LoginPage=() =>{
    return (
        <div>
            <section class="pagebg banner">
			<div class="page-header-top"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>Login <strong>Account</strong></h1>
						<h4>Top hotel in the world</h4>
						<ol class="breadcrumb">
						  <li><a href="#">Home</a></li>
						  <li class="active">Login</li>
						</ol>
					</div>
				</div>
			</div>
		  </section>
         <section class="section white">
			<div class="pagebefore"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 section-title text-center">
						<h1>Welcome <span>Guest</span></h1>
						<h4>Your dream is just click away</h4>
					
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat diam nonummy nibh euismod tincidunt ut laoreet</p>
					</div>
				 </div>

				<div id="sitewrapper" class="row">
					<div id="content" class="col-md-12 col-sm-12 col-xs-12">

						<div class="row">
							<div class="col-md-5 col-sm-6">
								<div class="section-title">
									<h3>Login account</h3>
								</div>
								<form class="form-horizontal standardform row" role="form" id="comp">
				                    <div class="form-group">
				                        <div class="col-sm-12">
				                            <input type="text" class="form-control" id="username" name="username" placeholder="User Name"/>
				                        </div>
				                        
				                        <div class="col-sm-12">
				                            <input type="password" class="form-control" id="password" name="password" placeholder="Password"></input>
				                        </div>
				                    </div>

				                    <div class="form-group">
				                        <div class="col-sm-12">
				                            <a href="#" class="btn btn-primary btn-block">Login Your Account</a>
				                        </div>
				                    </div>
				                </form>			
							</div>

							<div class="col-md-5 col-md-offset-2">
								<div class="section-title">
									<h3>Register an account</h3>
								</div>

								<form class="form-horizontal standardform row" role="form" id="comp1">
				                    <div class="form-group">
				                        <div class="col-sm-12">
				                            <input type="text" class="form-control" id="name1" name="name1" placeholder="First name"/>
				                        </div>
				                       
				                        <div class="col-sm-12">
				                            <input type="text" class="form-control" id="name2" name="name2" placeholder="Last name"/>
				                        </div>
				                       
				                        <div class="col-sm-12">
				                            <input type="email" class="form-control" id="email" name="email" placeholder="Email Address"/>
				                        </div>
				                        
				                        <div class="col-sm-12">
				                            <input type="password" class="form-control" id="password1" name="password1" placeholder="Password"/>
				                        </div>
				                    </div>

				                    <div class="form-group">
				                        <div class="col-sm-12">
				                            <a href="#" class="btn btn-primary btn-block">Create account</a>
				                        </div>
				                    </div>
				                </form>			
							</div>
						</div>
					</div>
				</div>
			</div>
		 </section>
        </div>
    )
}
export default LoginPage

import React from "react";
import ReactDOM from "react-dom";
import {NavLink } from "react-router-dom";
import AccountNav from "./AccountNav";
import "../styles/Filter.css";
import imgOne from "../images/img2.png";
import imgTwo from "../images/img3.png";
import imgThree from "../images/img4.png";
import imgFour from "../images/img5.png";
import imgFive from "../images/img7.png";
const Filter = ()=>{
    return(
        <>
        <nav class="navbar bg-primary">
	<div class="container">
	<a class="navbar-brand" href="#">a!</a>
	<ul class="nav ml-auto">
  <li class="nav-item">
    <NavLink class="nav-link active" to="/account">Create an account</NavLink>
  </li>
</ul>
</div>
</nav>
<section class="filter-content">
	<div class="container">
	<div class="text">
		<span><h3>Search Breakfast in mumbai</h3></span>
	
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">Filter</span>
  </button>
	</div>
	<div class="row filter-div " >
		<div class="col-sm-4 col-md-4 col-lg-4">
		<div class="left-content">
           
		   <div class="location-content">
		   <h5>Search location</h5>
		   <select>
			   <option>mumbai</option>
			   <option>delhi</option>
			   <option>hydrabad</option>
			   <option>chennai</option>
			   <option>banglore</option>
		   </select>
	   </div>
	
	   <div class="choice-content">
	   <h5>Cuisine</h5>
	  <div><input type="checkbox" name="check"/><span>North Indian</span></div> 
	   <div><input type="checkbox" name="check"/><span>South Indian</span></div>
	   <div><input type="checkbox" name="check"/><span>Chinese</span></div>
	   <div><input type="checkbox" name="check"/><span>Fast Food</span></div>
	  <div><input type="checkbox" name="check"/><span>Street Food</span></div> 
	   <div><input type="checkbox" name="check"/><span>Backery</span></div>
   </div>
   <div class="radio-btn-content">
	   <h5>Price</h5>
	   <div><input type="radio" name="radio"/><span>Less than 500</span></div>
   <div><input type="radio" name="radio"/><span>500-1000</span></div>	
	   <div><input type="radio" name="radio"/><span>1000-1500</span></div>
	   <div><input type="radio" name="radio"/><span>1500-2000</span></div>
	   <div><input type="radio" name="radio"/><span>2000 above</span></div>
	   
   </div>
   <div class="sort-content">
	   <h5>Sort the Price</h5>
	   <div><input type="radio" name="sort"/><span>high to low</span></div>
	   <div><input type="radio" name="sort"/><span>low to high</span></div>
   </div>
   </div>
           <div class="left-content-demo collapse navbar-collapse" id="navbarSupportedContent">
           
           	<div class="location-content">
           	<h5>Search location</h5>
           	<select>
           		<option>mumbai</option>
           		<option>delhi</option>
           		<option>hydrabad</option>
           		<option>chennai</option>
           		<option>banglore</option>
           	</select>
           </div>
        
           <div class="choice-content">
           <h5>Cuisine</h5>
          <div><input type="checkbox" name="check"/><span>North Indian</span></div> 
           <div><input type="checkbox" name="check"/><span>South Indian</span></div>
           <div><input type="checkbox" name="check"/><span>Chinese</span></div>
           <div><input type="checkbox" name="check"/><span>Fast Food</span></div>
          <div><input type="checkbox" name="check"/><span>Street Food</span></div> 
           <div><input type="checkbox" name="check"/><span>Backery</span></div>
       </div>
       <div class="radio-btn-content">
       	<h5>Price</h5>
       	<div><input type="radio" name="radio"/><span>Less than 500</span></div>
       <div><input type="radio" name="radio"/><span>500-1000</span></div>	
       	<div><input type="radio" name="radio"/><span>1000-1500</span></div>
       	<div><input type="radio" name="radio"/><span>1500-2000</span></div>
       	<div><input type="radio" name="radio"/><span>2000 above</span></div>
       	
       </div>
       <div class="sort-content">
       	<h5>Sort the Price</h5>
       	<div><input type="radio" name="sort"/><span>high to low</span></div>
       	<div><input type="radio" name="sort"/><span>low to high</span></div>
       </div>
       </div>
		</div>

		<div class="col-sm-8 col-md-8 col-lg-8 br-alert">
			<div class="right-content">
				
               <div class="row">
               	<div class="col-sm col-md col-lg"  data-toggle="modal" data-target="#myModal">
               		<div class="back-filter">
               		<div class="img-content">
               			<img src={imgOne} width="100%" alt="breakfast image" />
               		</div>
               		<div class="title">
               			<h6>The Big Chill Cakery</h6>
               			<p>Mumbai</p>
               			<span>Price : 300rs.</span>
               			<span class="span">|</span>
               			<span>Cuision: Bakery</span>
               		</div>
                   </div>
               	</div>
   
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">The Big Chill Cakery, <b>Mumbai</b></h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
	  <div id="demo" class="carousel slide" data-ride="carousel">


<div class="carousel-inner">
  <div class="carousel-item active">
	<img src={imgOne} style={{'width':'100%'}} alt="Los Angeles"/>
  </div>
  <div class="carousel-item">
	<img src={imgTwo} style={{'width':'100%'}} alt="Chicago"/>
  </div>
  <div class="carousel-item">
	<img src={imgThree} style={{'width':'100%'}}  alt="New York"/>
  </div>
</div>
<AccountNav/>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>
      </div>

      <div class="modal-footer">
		<span className="mr-auto pl-3"><b>RS.350</b></span>
		<button type="button" class="btn btn-danger">+</button>
		<button type="button" class="btn btn-danger">2</button>
		<button type="button" class="btn btn-danger">-</button>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myOrder">Order Now</button>
      </div>

    </div>
  </div>
</div>
<div class="modal order-color" id="myOrder">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Choose Your Payment Options</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
		  <div className="payment-option">
			 <div className="options"><input type="radio" name="checkbox"/><label>UPI Payment</label></div>
			 <div className="options"><input type="radio" name="checkbox"/><label>ATM </label></div>
			 <div className="options"><input type="radio" name="checkbox"/><label>Cash On Delivery</label></div>
		 </div>
		 <div className="discount-method">
            <h5>Reference</h5>
			<table>
				<th>
				    <td>Total</td>
					<td>Discount</td>
					<td>Tax</td>
				</th>
				<tr>
				    <td>350 Rs.</td>
					<td>-50 Rs.</td>
					<td>-10 Rs.</td>
				</tr>
			</table>
		 </div>
	 </div>
      <div class="modal-footer">
		<span className="mr-auto">Total:<b className="total">Rs.350</b></span>
        <button type="button" class="btn btn-danger">Place Order</button>
      </div>

    </div>
  </div>
</div>

               	<div class="col-sm col-md col-lg ">
               		<div class="back-filter">
               	<div class="img-content">
               			<img src={imgTwo} className="img" alt="breakfast image" />
               		</div>
               		<div class="title">
               			<h6>The Big Chill Cakery</h6>
               			<p>Mumbai</p>
               			<span>Price : 300rs.</span>
               			<span class="span">|</span>
               			<span>Cuision: Bakery</span>
               		</div></div></div>
               	<div class="col-sm col-md col-lg ">
               		<div class="back-filter">
               	<div class="img-content">
               			<img src={imgThree}  alt="breakfast image" />
               		</div>
               		<div class="title">
               			<h6>The Big Chill Cakery</h6>
               			<p>Mumbai</p>
               			<span>Price : 300rs.</span>
               			<span class="span">|</span>
               			<span>Cuision: Bakery</span>
               			
               		</div></div></div>
               </div>
              
               <div class="row">
               	<div class="col-sm col-md col-lg">
               		<div class="back-filter">
               		<div class="img-content">
               			<img src={imgFour} width="100%" height="100%" alt="breakfast image" />
               		</div>
               		<div class="title">
               			<h6>The Big Chill Cakery</h6>
               			<p>Mumbai</p>
               			<span>Price : 300rs.</span>
               			<span class="span">|</span>
               			<span>Cuision: Bakery</span>
               		</div>
                   </div>
               	</div>
               	<div class="col-sm col-md col-lg ">
               		<div class="back-filter">
               	<div class="img-content">
               			<img src={imgFive} width="100%" height="100%" alt="breakfast image" />
               		</div>
               		<div class="title">
               			<h6>The Big Chill Cakery</h6>
               			<p>Mumbai</p>
               			<span>Price : 300rs.</span>
               			<span class="span">|</span>
               			<span>Cuision: North Indian</span>
               		</div></div></div>
               	<div class="col-sm col-md col-lg ">
               		<div class="back-filter">
               	<div class="img-content">
               			<img src={imgFive}width="100%" height="100%" alt="breakfast image" />
               		</div>
               		<div class="title">
               			<h6>The Big Chill Cakery</h6>
               			<p>Mumbai</p>
               			<span>Price : 300rs.</span>
               			<span class="span">|</span>
               			<span>Cuision: Bakery</span>
               		</div></div></div>
               </div>
               <div class="row">
               	<div class="col-sm-12 col-md-12 col-lg-12">
               		<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
               	</div>
               </div>
           
			</div>
		</div>
	</div>
</div>
</section>
</>
    );
};
export default Filter;
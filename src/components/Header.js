import React from "react";
import { NavLink} from "react-router-dom";
import "../styles/Header.css";
const Header = () =>{
    return(
        <>
        <header className="main-header">
            
          <nav class="navbar">
                    <div class="container ">
                        <ul className="nav ml-auto">
                            <li className="nav-item">
                            
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
 Create an Account
</button>


<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Welcome!! Create an Account for AvailReastuarent</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
          
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
                            </li>
                        </ul>
                    </div>
         </nav>
         <div className="header-content">
                    <div className="logo container">
                     <h3>a!</h3>
                    </div>
                    <div className="container">
                    <div className="title text-center">
                    <h2>Welcome! Discover Best Cafes,bar and Restuarent</h2>
                    </div>
                    </div>
                    <div className="container">
                        <div className="row form">
                        <div class="back-side col-sm-4 col-md-4 col-lg-4 d-flex mr-2 ml-2 mt-2">
                        <select >
                            <option>Mumbai</option>
                            <option>chennai</option>
                            <option>hydrabad</option>
                            <option>bhubneswar</option>
                            <option>punjab</option>
                        </select>
                        <button class="btn-style"><i class="fa fa-map-marker"></i></button>
                    </div>
                    <div className="back-side col-sm col-md d-flex mr-2 ml-2 mt-2 " >
                    <input type="text" name="text" placeholder="search here...."/>
                        <button class="btn-style"><NavLink className="nav-link" to="/filter"><i class="fa fa-search"></i></NavLink></button>
                    </div>
                        </div>
                    </div>
         </div>
         
        </header>
        </>
    );
};
export default Header;
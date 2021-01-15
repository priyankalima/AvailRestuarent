import React from "react";
import ReactDOM from "react-dom";
import "../styles/Account.css";
import vactor from "../images/vactor.svg";
const Account = () =>{
    return(
          <>
          <div className="section">
          <div className="container">
              <div className="row">
                  
                  <div className="col-sm-6 col-md-6 col-lg-6">
                  <div class="left-img">
                  <img src={vactor} width="300" height="300" />
                   </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg">
                      <div className="right-form">
                      <h3>Welcome!! Happy Shopping :)</h3>
                      <p>You need to access your acount for further process</p>
                      <form id="formPage" className="form" action="/action_page.php" >
            <div id="login" class="formation">
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Enter email" id="email" />
  </div>
  <div class="form-group">

    <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
  </div>
  <div class="form-group form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" /> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-red form-control">Login</button>
  <div class="social-login">
              <button class="facebook hvr-shadow">Facebook</button>
              <button class="google hvr-shadow">Google</button>
            </div>
            <a onclick="openPage(event, 'frgtpass')">Forgot Password?</a>or
            <p>Dont have an account <a onclick="openPage(event, 'signup')">Sign Up</a> Here.</p>
</div>
            <div id="signup" class="formation">
               <div class="form-group">
    <input type="email" class="form-control" placeholder="Enter email" id="email" />
  </div>
  <div class="form-group">
    <input type="password" class="form-control" placeholder="Enter password" id="email" />
  </div>
  <div class="form-group">
    <input type="password" class="form-control" placeholder="Re-enter password" id="email" />
  </div>
  <div class="form-group">
    <input type="number" class="form-control" placeholder="Enter password" id="pwd" />
  </div>
  <button type="submit" class="btn btn-red form-control">Login</button>
  <a onclick="openPage(event, 'login')">Back</a>
            </div>
            
            <div id="frgtpass" class="formation">
               <div class="form-group">
    <input type="email" class="form-control" placeholder="Enter email" id="email" />
  </div>
  <div class="form-group">
    <input type="number" class="form-control" placeholder="Enter password" id="pwd" />
  </div>
  <button type="submit" class="btn btn-red form-control">Login</button>
  <a onclick="openPage(event, 'login')">Back</a>
            </div>
</form>
                      </div>
                  </div>
                  </div>
              </div>
          </div>
          {function openPage(evt, formPage) {
    var i,formation,form;
    formation = document.getElementsByClassName("formation");
    for (i = 0; i < formation.length; i++) {
      formation[i].style.display = "none";
    }
    form= document.getElementsByClassName("form");
    for (i = 0; i < form.length; i++) {
      form[i].className = form[i].className.replace(" active", "");
    }
    document.getElementById(formPage).style.display = "block";
    evt.currentTarget.className += " active";
  }
 }
          </>
    );
};
export default Account;
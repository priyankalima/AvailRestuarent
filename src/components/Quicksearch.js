import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/Quicksearch.css";
import web from "../images/img2.png";
import imgtwo from "../images/img3.png";
import imgthree from "../images/img4.png";
import imgfour from "../images/img5.png";
import imgfive from "../images/img7.png";
import imgsix from "../images/ing6.png";
const Quicksearch = () => {
    return(
        <>
        <section className="main-section">
            <div className="container">
            <h5 class="mr-2">Quick Searches
            <i class="fa fa-search ml-2"></i>
            </h5>
            <p class="mr-2" >Discover restaurants by type of meal</p>
            </div>
            <div className="container">
            <div className="row">
            <div class="col-sm-4 col-md-4 col-lg-4">
                        <NavLink className="nav-link"to="/filter">
                              <div class="content-costume">
                                  <div class="img-content">
                                     <img src={web} alt="breakfast image"/>
                                 </div>
                                 <div class="title-content">
                                  <h5 class="text-center mt-5">Breakfast</h5>
                                  <p class="text-center ">
                                    Start your day with 
                                    exclusive breakfast 
                                </p>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                    <div class="col-sm-4 col-md-4 col-lg-4">
                        <NavLink className="nav-link" to="/filter">
                        <div class="content-costume">
                          <div class="img-content">
                           <img src={imgtwo}alt="lunch image"/>
                       </div>
                       <div class="title-content">
                          <h5 class="text-center mt-5">Lunch</h5>
                          <p class="text-center mt-1">
                            Start your day with 
                            exclusive lunch
                        </p>
                    </div>
                </div>
                </NavLink>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4">
            <NavLink className="nav-link" to="/filter">
                        <div class="content-costume">
                          <div class="img-content">
                           <img src={imgthree}alt="lunch image"/>
                       </div>
                       <div class="title-content">
                          <h5 class="text-center mt-5">Snacks</h5>
                          <p class="text-center mt-1">
                            Start your day with 
                            exclusive snacks
                        </p>
                    </div>
                </div>
                </NavLink>
        </div>
                    </div>
                    <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4 hover-col">
        <NavLink className="nav-link" to="/filter">
                        <div class="content-costume">
                          <div class="img-content">
                           <img src={imgfour}alt="lunch image"/>
                       </div>
                       <div class="title-content">
                          <h5 class="text-center mt-5">Diiner</h5>
                          <p class="text-center mt-1">
                            Start your day with 
                            exclusive dinner
                        </p>
                    </div>
                </div>
                </NavLink>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4">
        <NavLink className="nav-link" to="/filter">
                        <div class="content-costume">
                          <div class="img-content">
                           <img src={imgfive} alt="lunch image"/>
                       </div>
                       <div class="title-content">
                          <h5 class="text-center mt-5">Dinks</h5>
                          <p class="text-center mt-1">
                            Start your day with 
                            exclusive drinks
                        </p>
                    </div>
                </div>
                </NavLink>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4">
        <NavLink className="nav-link" to="/filter">
                        <div class="content-costume">
                          <div class="img-content">
                           <img src={imgsix}alt="lunch image"/>
                       </div>
                       <div class="title-content">
                          <h5 class="text-center mt-5">NightLife</h5>
                          <p class="text-center mt-1">
                            Start your day with 
                            exclusive night life
                        </p>
                    </div>
                </div>
                </NavLink>
        </div>
    </div>
            </div>
        </section>
        </>
    );
};
export default Quicksearch;
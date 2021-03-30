import React from 'react';
import PropTypes from 'prop-types';

About.propTypes = {

};

function About(props) {
      return (
          <div className="about-page">
                <div className="container wide">
                      {/*=======  breadcrumb area =======*/}
                      <div className="breadcrumb-area breadcrumb-bg-2 pt-50 pb-70 mb-100">
                            <div className="container">
                                  <div className="row">
                                        <div className="col-lg-12">
                                              <h1 className="breadcrumb-title">About Us</h1>
                                              {/*=======  breadcrumb list  =======*/}
                                              <ul className="breadcrumb-list">
                                                    <li className="breadcrumb-list__item"><a href="index.html">HOME</a></li>
                                                    <li className="breadcrumb-list__item breadcrumb-list__item--active">About Us</li>
                                              </ul>
                                              {/*=======  End of breadcrumb list  =======*/}
                                        </div>
                                  </div>
                            </div>
                      </div>
                      {/*=======  End of breadcrumb area =======*/}
                      {/*=============================================
                          =            section title  container      =
                          =============================================*/}
                      <div className="section-title-container mb-80">
                            <div className="container">
                                  <div className="row">
                                        <div className="col-lg-8 offset-lg-2">
                                              {/*=======  section title  =======*/}
                                              <div className="section-title section-title--one text-center">
                                                    <h1>Basic minimalism</h1>
                                                    <p className="subtitle subtitle--deep mb-0">LEZADA STORE - SIMPLY AND BASIC</p>
                                              </div>
                                              {/*=======  End of section title  =======*/}
                                        </div>
                                  </div>
                            </div>
                      </div>
                      {/*=====  End of section title container ======*/}
                      {/*=============================================
                      =            about us page content         =
                      =============================================*/}
                      <div className="about-page-content mb-100 mb-sm-45">
                            <div className="container wide">
                                  <div className="row">
                                        <div className="col-lg-6 mb-md-50 mb-sm-50">
                                              {/*=======  about page 2 image  =======*/}
                                              <div className="about-page-2-image">
                                                    <img src="assets/images/backgrounds/image-about-us.png" className="img-fluid" alt="" />
                                              </div>
                                              {/*=======  End of about page 2 image  =======*/}
                                        </div>
                                        <div className="offset-xl-1 col-xl-4 col-lg-6 col-md-6 mb-sm-50">
                                              <div className="about-page-text">
                                                    <p className=" mb-35">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit
                                                          estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit. ipsum dolor sit amet, consectetur cing
                                                          elit. Suspe ndisse suscipit sagittis leo sit es</p>
                                              </div>
                                              <div className="lezada-widget lezada-widget--about mb-35">
                                                    <h2 className="widget-title mb-25">ADDRESS</h2>
                                                    <p className="widget-content">1800 Abbot Kinney Blvd. Unit D &amp; E Venice</p>
                                              </div>
                                              <div className="lezada-widget lezada-widget--about mb-35">
                                                    <h2 className="widget-title mb-25">PHONE</h2>
                                                    <p className="widget-content">Mobile: (+88) – 1990</p>
                                                    <p className="widget-content">Hotline: 1800 – 1102</p>
                                              </div>
                                              <div className="lezada-widget lezada-widget--about">
                                                    <h2 className="widget-title mb-25">EMAIL</h2>
                                                    <p className="widget-content">contact@lezadastore.com</p>
                                              </div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                      {/*=====  End of about us page content  ======*/}
                      {/*=============================================
                            =            about two page content         =
                            =============================================*/}
                      <div className="about-page-content mb-100 testimonial-bg-1 pt-50 pb-50">
                            <div className="container">
                                  <div className="row">
                                        <div className="col-12 col-md-6 mb-sm-50">
                                              {/*=======  about single block  =======*/}
                                              <div className="about-single-block">
                                                    <p className="subtitle">On at oders over $99</p>
                                                    <h1>Free shipping &amp; return</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum
                                                          estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
                                                    <a href="#">LEARN MORE</a>
                                              </div>
                                              {/*=======  End of about single block  =======*/}
                                        </div>
                                        <div className="col-12 col-md-6">
                                              {/*=======  about single block  =======*/}
                                              <div className="about-single-block">
                                                    <p className="subtitle">Support 24/7</p>
                                                    <h1>Money back</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum
                                                          estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
                                                    <a href="#">LEARN MORE</a>
                                              </div>
                                              {/*=======  End of about single block  =======*/}
                                        </div>
                                  </div>
                            </div>
                      </div>
                      {/*=====  End of about two page content  ======*/}


                </div>
          </div>
      );
}

export default About;
import React from 'react';
import PropTypes from 'prop-types';
import Banner from "./Banner/Banner";
import {NavLink} from "react-router-dom";

Home.propTypes = {

};

function Home(props) {
      return (
          <div className="sc-layout home-page">
                <div>
                      {/*=============================================
	=            banner with product area         =
	=============================================*/}
                      <div className="banner-with-product-area mb-30 mb-sm-10">
                            <div className="container wide">
                                  <div className="row">
                                        <div className="col-lg-8 order-2">
                                              <div className="row">
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/high-waist-trousers-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/high-waist-trousers-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="onsale">-10%</span>
                                                                            <span className="hot">hot</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="single-product__variations">
                                                                            <div className="size-container mb-5">
                                                                                  <span className="size">L</span>
                                                                                  <span className="size">M</span>
                                                                                  <span className="size">S</span>
                                                                                  <span className="size">XS</span>
                                                                            </div>
                                                                            <div className="color-container">
                                                                                  <span className="black" />
                                                                                  <span className="blue" />
                                                                                  <span className="yellow" />
                                                                            </div>
                                                                            {/* <a href="#" class="clear-link">clear</a> */}
                                                                      </div>
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">High-waist Trousers</a></h3>
                                                                            <a href="#">Select options</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$160.00</span>
                                                                            <span className="discounted-price">$180.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/modern-loafer-patent-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/modern-loafer-patent-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="onsale">-5%</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">Modern loafer</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$100.00</span>
                                                                            <span className="discounted-price">$80.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/skinny-jean-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/skinny-jean-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="onsale">-15%</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">Skiny jeans</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$400.00</span>
                                                                            <span className="discounted-price">$380.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/watch-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/watch-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="onsale">-10%</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">Light Brown Watch</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price">$130.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="hot">hot</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">Dark Gray Watch</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$260.00</span>
                                                                            <span className="discounted-price">$230.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html"> Dark Brown Watch</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$120.00</span>
                                                                            <span className="discounted-price">$100.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                              </div>
                                        </div>
                                        <div className="col-lg-4 order-1 mb-md-50 mb-sm-50">
                                              {/*=============================================
					=          product side  banner         =
					=============================================*/}
                                              <div className="product-side-banner">
                                                    <a href="shop-left-sidebar.html" className="mb-40">
                                                          <img src="assets/images/banners/women.png" className="img-fluid" alt="" />
                                                    </a>
                                                    <a href="shop-left-sidebar.html" className="product-side-banner--link">#women</a>
                                              </div>
                                              {/*=====  End of product side banner  ======*/}
                                        </div>
                                  </div>
                            </div>
                      </div>
                      {/*=====  End of banner with product area  ======*/}
                      {/*=============================================
	=            hover banner area         =
	=============================================*/}
                      <div className="hover-banner-area mb-50 mb-sm-30">
                            <div className="container wide">
                                  <div className="row">
                                        <div className="col-md-6 mb-30">
                                              {/*=======  single banner  =======*/}
                                              <div className="single-banner single-banner--hoverborder">
                                                    <a className="banner-link" href="shop-left-sidebar.html" />
                                                    <img src="assets/images/banners/ads1.jpg" className="img-fluid" alt="" />
                                                    <div className="banner-content banner-content--middle-white">
                                                          <p> <span className="bold-white">10%</span> off your <span className="d-block">next purchase</span></p>
                                                    </div>
                                              </div>
                                              {/*=======  End of single banner  =======*/}
                                        </div>
                                        <div className="col-md-6 mb-30">
                                              {/*=======  single banner  =======*/}
                                              <div className="single-banner single-banner--hoverborder">
                                                    <a className="banner-link" href="shop-left-sidebar.html" />
                                                    <img src="assets/images/banners/ads2.jpg" className="img-fluid" alt="" />
                                                    <div className="banner-content banner-content--black-left">
                                                          <p> <span className="big-text">Free shipping</span> <span className="small-text d-block">Free shipping on domestic
                  orders</span></p>
                                                    </div>
                                              </div>
                                              {/*=======  End of single banner  =======*/}
                                        </div>
                                  </div>
                            </div>
                      </div>
                      {/*=====  End of hover banner area  ======*/}
                      {/*=============================================
	=            banner with product area         =
	=============================================*/}
                      <div className="banner-with-product-area">
                            <div className="container wide">
                                  <div className="row">
                                        <div className="col-lg-8 order-2 order-lg-1">
                                              <div className="row">
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/cloth-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/cloth-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="onsale">-10%</span>
                                                                            <span className="hot">hot</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="single-product__variations">
                                                                            <div className="size-container mb-5">
                                                                                  <span className="size">L</span>
                                                                                  <span className="size">M</span>
                                                                                  <span className="size">S</span>
                                                                                  <span className="size">XS</span>
                                                                            </div>
                                                                            <div className="color-container">
                                                                                  <span className="black" />
                                                                                  <span className="blue" />
                                                                                  <span className="yellow" />
                                                                            </div>
                                                                            {/* <a href="#" class="clear-link">clear</a> */}
                                                                      </div>
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">High-waist Trousers</a></h3>
                                                                            <a href="#">Select options</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$160.00</span>
                                                                            <span className="discounted-price">$180.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/pique-polo-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/pique-polo-3-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="onsale">-5%</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">Polo Shirt</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$100.00</span>
                                                                            <span className="discounted-price">$80.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/sunglass-1-600x800.png" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/sunglass-2-600x800.png" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="onsale">-15%</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">Black Sunglass</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$400.00</span>
                                                                            <span className="discounted-price">$380.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/watch-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/watch-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="onsale">-10%</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">Light Brown Watch</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price">$130.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                            <span className="hot">hot</span>
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html">Dark Gray Watch</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$260.00</span>
                                                                            <span className="discounted-price">$230.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                                    {/*=======  single product  =======*/}
                                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 mb-45">
                                                          <div className="single-product">
                                                                {/*=======  single product image  =======*/}
                                                                <div className="single-product__image">
                                                                      <a className="image-wrap" href="shop-product-basic.html">
                                                                            <img src="assets/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                            <img src="assets/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                      </a>
                                                                      <div className="single-product__floating-badges">
                                                                      </div>
                                                                      <div className="single-product__floating-icons">
                                                                            <span className="wishlist"><a href="#" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                            <span className="compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                            <span className="quickview"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product image  =======*/}
                                                                {/*=======  single product content  =======*/}
                                                                <div className="single-product__content">
                                                                      <div className="title">
                                                                            <h3> <a href="shop-product-basic.html"> Dark Brown Watch</a></h3>
                                                                            <a href="#">Add to cart</a>
                                                                      </div>
                                                                      <div className="price">
                                                                            <span className="main-price discounted">$120.00</span>
                                                                            <span className="discounted-price">$100.00</span>
                                                                      </div>
                                                                </div>
                                                                {/*=======  End of single product content  =======*/}
                                                          </div>
                                                    </div>
                                                    {/*=======  End of single product  =======*/}
                                              </div>
                                        </div>
                                        <div className="col-lg-4 order-1 order-lg-2 mb-md-50 mb-sm-50">
                                              {/*=============================================
					=          product side  banner         =
					=============================================*/}
                                              <div className="product-side-banner">
                                                    <a href="shop-left-sidebar.html" className="mb-40">
                                                          <img src="assets/images/banners/men.png" className="img-fluid" alt="" />
                                                    </a>
                                                    <a href="shop-left-sidebar.html" className="product-side-banner--link">#men</a>
                                              </div>
                                              {/*=====  End of product side banner  ======*/}
                                        </div>
                                  </div>
                            </div>
                      </div>
                      {/*=====  End of banner with product area  ======*/}
                </div>
                {/*=============================================
	=            footer banner section area        =
	=============================================*/}
                <div className="footer-banner-section-area mb-80 mb-sm-60">
                      <div className="container">
                            <div className="row">
                                  <div className="col-lg-8 offset-lg-2">
                                        {/*=======  ad section  =======*/}
                                        <div className="footer-banner-section footer-banner-section--special-home text-center">
                                              {/*=======  ad section image  =======*/}
                                              <div className="footer-banner-section-image mb-35">
                                                    <img src="assets/images/banners/ads.jpg" className="img-fluid" alt="" />
                                              </div>
                                              {/*=======  End of ad section image  =======*/}

                                              {/*=======  footer-banner-content  =======*/}
                                              <div className="footer-banner-content">
                                                    <h2 className="mb-30">Up To 40% Off Final Sale Items. Caught in the moment!</h2>
                                                    <NavLink className="lezada-button lezada-button--medium" to="/product">shop now</NavLink>
                                              </div>
                                              {/*=======  End of footer-banner-content  =======*/}
                                        </div>
                                        {/*=======  End of ad section  =======*/}
                                  </div>
                            </div>
                      </div>
                </div>
                {/*=====  End of footer banner section area ======*/}


          </div>
      );
}

export default Home;
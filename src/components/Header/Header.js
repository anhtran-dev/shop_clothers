import React from 'react';
import './Header.scss'
import { NavLink} from "react-router-dom";

function Header(props) {
      return (
          <header className="header header-wide-topbar header-sticky">
                {/*=======  header top  =======*/}
                <div className="header-top pt-10 pb-10">
                      <div className="container wide">
                            {/*=======  header top container  =======*/}
                            <div className="header-top-container">
                                  {/*=======  header top left  =======*/}
                                  <div className="header-top-left">
                                        {/*=======  order online text  =======*/}
                                        <div className="order-online-text">
                                              Order Online Call Us <a><span
                                            className="number">(0123) 456789</span></a>
                                        </div>
                                        {/*=======  End of order online text  =======*/}
                                  </div>
                                  {/*=======  End of header top left  =======*/}
                                  {/*=======  header top right  =======*/}
                                  <div className="header-top-right">
                                        {/*=======  top social icons  =======*/}
                                        <div className="top-social-icons">
                                              <ul>
                                                    <li><a><i className="fa fa-twitter"/></a>
                                                    </li>
                                                    <li><a><i
                                                        className="fa fa-facebook"/></a></li>
                                                    <li><a><i
                                                        className="fa fa-instagram"/></a></li>
                                                    <li><a><i
                                                        className="fa fa-youtube-play"/></a></li>
                                              </ul>
                                        </div>
                                        {/*=======  End of top social icons  =======*/}
                                  </div>
                                  {/*=======  End of header top right  =======*/}
                            </div>
                            {/*=======  End of header top container  =======*/}
                      </div>
                </div>
                {/*=======  End of header top  =======*/}
                {/*=======  header bottom  =======*/}
                <div className="header-bottom pt-md-40 pb-md-40 pt-sm-40 pb-sm-40">
                      <div className="container wide">
                            {/*=======  header bottom container  =======*/}
                            <div className="header-bottom-container sc-header__bottom">
                                  {/*=======  logo with off canvas  =======*/}
                                  <div className="logo-with-offcanvas d-flex">
                                        {/*=======  logo   =======*/}
                                        <div className="logo">
                                              <a>
                                                    <img src="assets/images/logo.png" className="img-fluid" alt=""/>
                                              </a>
                                        </div>
                                        {/*=======  End of logo   =======*/}
                                  </div>
                                  {/*=======  End of logo with off canvas  =======*/}
                                  {/*=======  header bottom navigation  =======*/}
                                  <div className="header-bottom-navigation">
                                        <div className="site-main-nav d-none d-lg-block">
                                              <nav className="site-nav center-menu">
                                                    <ul>
                                                          <li><NavLink to="/">Trang chủ</NavLink></li>
                                                          <li><NavLink to="/product">Shop</NavLink></li>
                                                          <li><NavLink to="/blog">Tin tức</NavLink></li>
                                                          <li><NavLink to="/about">Về chúng tôi</NavLink></li>
                                                          <li><NavLink to="/contact">Liên hệ</NavLink></li>
                                                    </ul>
                                              </nav>
                                        </div>
                                  </div>
                                  {/*=======  End of header bottom navigation  =======*/}
                                  {/*=======  header right container  =======*/}
                                  <div className="header-right-container">
                                        {/*=======  header right icons  =======*/}
                                        <div
                                            className="header-right-icons d-flex justify-content-end align-items-center h-100">
                                              {/*=======  single-icon  =======*/}
                                              <div className="single-icon search">
                                                    <a id="search-icon">
                                                          <i className="ion-ios-search-strong"/>
                                                    </a>
                                              </div>
                                              {/*=======  End of single-icon  =======*/}
                                              {/*=======  single-icon  =======*/}
                                              <div className="single-icon user-login">
                                                    <a>
                                                          <i className="ion-android-person"/>
                                                    </a>
                                              </div>
                                              {/*=======  End of single-icon  =======*/}
                                              {/*=======  single-icon  =======*/}
                                              <div className="single-icon wishlist">
                                                    <a id="offcanvas-wishlist-icon">
                                                          <i className="ion-android-favorite-outline"/>
                                                          <span className="count">2</span>
                                                    </a>
                                              </div>
                                              {/*=======  End of single-icon  =======*/}
                                              {/*=======  single-icon  =======*/}
                                              <div className="single-icon cart">
                                                    <a id="offcanvas-cart-icon">
                                                          <i className="ion-ios-cart"/>
                                                          <span className="count">3</span>
                                                    </a>
                                              </div>
                                              {/*=======  End of single-icon  =======*/}
                                        </div>
                                        {/*=======  End of header right icons  =======*/}
                                  </div>
                                  {/*=======  End of headeer right container  =======*/}
                            </div>
                            {/*=======  End of header bottom container  =======*/}
                            {/* Mobile Navigation Start Here */}
                            <div className="site-mobile-navigation d-block d-lg-none">
                                  <div id="dl-menu" className="dl-menuwrapper site-mobile-nav">
                                        {/*Site Mobile Menu Toggle Start*/}
                                        <button className="dl-trigger hamburger hamburger--spin">
                                                <span className="hamburger-box">
                                                  <span className="hamburger-inner"/>
                                                </span>
                                        </button>
                                        {/*Site Mobile Menu Toggle End*/}
                                        <ul className="dl-menu dl-menu-toggle">
                                              <li><NavLink to="/">Trang chủ</NavLink></li>
                                              <li><NavLink to="/product">Shop</NavLink></li>
                                              <li><NavLink to="/blog">Tin tức</NavLink></li>
                                              <li><NavLink to="/about">Về chúng tôi</NavLink></li>
                                              <li><NavLink to="/contact">Liên hệ</NavLink></li>
                                        </ul>
                                  </div>
                            </div>
                            {/* Mobile Navigation End Here */}
                      </div>
                </div>
                {/*=======  End of header bottom  =======*/}
          </header>

      );
}

export default Header;

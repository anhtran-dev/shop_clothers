import React from 'react';

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
                                              Order Online Call Us <a href="#"><span className="number">(0123) 456789</span></a>
                                        </div>
                                        {/*=======  End of order online text  =======*/}
                                  </div>
                                  {/*=======  End of header top left  =======*/}
                                  {/*=======  header top right  =======*/}
                                  <div className="header-top-right">
                                        {/*=======  top social icons  =======*/}
                                        <div className="top-social-icons">
                                              <ul>
                                                    <li><a href="http://www.twitter.com/"><i className="fa fa-twitter" /></a></li>
                                                    <li><a href="http://www.facebook.com/"><i className="fa fa-facebook" /></a></li>
                                                    <li><a href="http://www.instagram.com/"><i className="fa fa-instagram" /></a></li>
                                                    <li><a href="http://www.youtube.com/"><i className="fa fa-youtube-play" /></a></li>
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
                            <div className="header-bottom-container">
                                  {/*=======  logo with off canvas  =======*/}
                                  <div className="logo-with-offcanvas d-flex">
                                        {/*=======  logo   =======*/}
                                        <div className="logo">
                                              <a href="index.html">
                                                    <img src="assets/images/logo.png" className="img-fluid" alt="" />
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
                                                          <li><a href="index.html">Trang chủ</a></li>
                                                          <li><a href="index.html">Shop</a></li>
                                                          <li><a href="index.html">Tin tức</a></li>
                                                          <li><a href="index.html">Về chúng tôi</a></li>
                                                          <li><a href="index.html">Liên hệ</a></li>
                                                    </ul>
                                              </nav>
                                        </div>
                                  </div>
                                  {/*=======  End of header bottom navigation  =======*/}
                                  {/*=======  headeer right container  =======*/}
                                  <div className="header-right-container">
                                        {/*=======  header right icons  =======*/}
                                        <div className="header-right-icons d-flex justify-content-end align-items-center h-100">
                                              {/*=======  single-icon  =======*/}
                                              <div className="single-icon search">
                                                    <a href="javascript:void(0)" id="search-icon">
                                                          <i className="ion-ios-search-strong" />
                                                    </a>
                                              </div>
                                              {/*=======  End of single-icon  =======*/}
                                              {/*=======  single-icon  =======*/}
                                              <div className="single-icon user-login">
                                                    <a href="shop-customer-login.html">
                                                          <i className="ion-android-person" />
                                                    </a>
                                              </div>
                                              {/*=======  End of single-icon  =======*/}
                                              {/*=======  single-icon  =======*/}
                                              <div className="single-icon wishlist">
                                                    <a href="javascript:void(0)" id="offcanvas-wishlist-icon">
                                                          <i className="ion-android-favorite-outline" />
                                                          <span className="count">2</span>
                                                    </a>
                                              </div>
                                              {/*=======  End of single-icon  =======*/}
                                              {/*=======  single-icon  =======*/}
                                              <div className="single-icon cart">
                                                    <a href="javascript:void(0)" id="offcanvas-cart-icon">
                                                          <i className="ion-ios-cart" />
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
              <span className="hamburger-inner" />
            </span>
                                        </button>
                                        {/*Site Mobile Menu Toggle End*/}
                                        <ul className="dl-menu dl-menu-toggle">
                                              <li className><a href="#">Home</a>
                                                    <ul className="dl-submenu">
                                                          <li className> <a href="#">Home Group One</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="index-trending.html">Trending</a></li>
                                                                      <li><a href="index-collection.html">My collection</a></li>
                                                                      <li><a href="index-special.html">Special</a></li>
                                                                      <li><a href="index-concept.html">concept</a></li>
                                                                      <li><a href="index-smart.html">smart design</a></li>
                                                                </ul>
                                                          </li>
                                                          <li> <a href="#">Home Group Two</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="index-furniture.html">Furniture </a></li>
                                                                      <li><a href="index-essentials.html">Essentials</a></li>
                                                                      <li><a href="index-lookbook.html">Lookbook</a></li>
                                                                      <li><a href="index-wearables.html">Wearables</a></li>
                                                                      <li><a href="index-accessories.html">Accessories</a></li>
                                                                </ul>
                                                          </li>
                                                          <li> <a href="#">Home Group three</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="index-shoppable.html">Shoppable</a></li>
                                                                      <li><a href="index-fashion.html">Fashion</a></li>
                                                                      <li><a href="index-perfumes.html">Perfumes</a></li>
                                                                      <li><a href="index-cosmetics.html">Cosmetics</a></li>
                                                                </ul>
                                                          </li>
                                                          <li> <a href="#">Home Group four</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="index-decor.html">Home Decor</a></li>
                                                                      <li><a href="index-creative.html">Creative</a></li>
                                                                </ul>
                                                          </li>
                                                    </ul>
                                              </li>
                                              <li><a href="#">Shop</a>
                                                    <ul className="dl-submenu">
                                                          <li className> <a href="#">Shop Pages</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="shop-no-sidebar.html">Shop No Sidebar</a></li>
                                                                      <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                                                      <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                                      <li><a href="shop-fullwidth-no-space.html">Shop Fullwidth No Space</a></li>
                                                                      <li><a href="shop-fullwidth-no-sidebar.html">Shop Fullwidth No Sidebar</a></li>
                                                                      <li><a href="shop-fullwidth-left-sidebar.html">Shop Fullwidth Left Sidebar</a></li>
                                                                      <li><a href="shop-fullwidth-right-sidebar.html">Shop Fullwidth Right Sidebar</a></li>
                                                                </ul>
                                                          </li>
                                                          <li className> <a href="#">Product Details Pages</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="shop-product-basic.html">Basic </a></li>
                                                                      <li><a href="shop-product-fullwidth.html">Fullwidth</a></li>
                                                                      <li><a href="shop-product-sticky-details.html">Sticky details</a></li>
                                                                      <li><a href="shop-product-with-sidebar.html">With Sidebar</a></li>
                                                                      <li><a href="shop-product-extra-content.html">Extra Content</a></li>
                                                                      <li><a href="shop-product-variation-image.html">Variation Image</a></li>
                                                                      <li><a href="shop-product-bought-together.html">Bought Together</a></li>
                                                                </ul>
                                                          </li>
                                                          <li className> <a href="#">Other Shop Pages</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="shop-product-with-background.html">Product with background</a></li>
                                                                      <li><a href="shop-cart.html">Shopping Cart</a></li>
                                                                      <li><a href="shop-checkout.html">Checkout</a></li>
                                                                      <li><a href="shop-order-tracking.html">Order Tracking</a></li>
                                                                      <li><a href="shop-wishlist.html">Wishlist</a></li>
                                                                      <li><a href="shop-customer-login.html">Customer Login</a></li>
                                                                      <li><a href="shop-by-brand.html">Shop by Brand</a></li>
                                                                </ul>
                                                          </li>
                                                    </ul>
                                              </li>
                                              <li><a href="#">Elements</a>
                                                    <ul className="dl-submenu">
                                                          <li className> <a href="#">Shop / Products</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="element-product-categories.html">Product Categories</a></li>
                                                                      <li><a href="element-product-sliders.html">Product Sliders</a></li>
                                                                      <li><a href="element-product-tabs.html">Product Tabs</a></li>
                                                                      <li><a href="element-product-widget.html">Product Widget</a></li>
                                                                      <li><a href="element-recent-products.html">Recent Products</a></li>
                                                                </ul>
                                                          </li>
                                                          <li className> <a href="#">Shop / Products</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="element-sale-products.html">Sale Products </a></li>
                                                                      <li><a href="element-featured-products.html">Featured products</a></li>
                                                                      <li><a href="element-top-rated-products.html">Top Rated products</a></li>
                                                                      <li><a href="element-bestselling-products.html">Best Selling products</a></li>
                                                                      <li><a href="element-product-attributes.html">Product Attributes</a></li>
                                                                </ul>
                                                          </li>
                                                          <li className> <a href="#">Theming</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="element-blog-posts.html">Blog Posts</a></li>
                                                                      <li><a href="element-mailchimp-form.html">Mailchimp Form</a></li>
                                                                      <li><a href="element-icon-box.html">Icon Box</a></li>
                                                                      <li><a href="element-team-member.html">Team Member</a></li>
                                                                      <li><a href="element-instagram.html">Instagram</a></li>
                                                                </ul>
                                                          </li>
                                                    </ul>
                                              </li>
                                              <li><a href="#">Pages</a>
                                                    <ul className="dl-submenu">
                                                          <li><a href="about-us.html">About Us</a></li>
                                                          <li><a href="about-us-2.html">About Us 2</a></li>
                                                          <li><a href="contact-us.html">Contact Us</a></li>
                                                          <li><a href="faq.html">F.A.Q</a></li>
                                                          <li><a href="coming-soon.html">Coming Soon</a></li>
                                                          <li><a href="404.html">404</a></li>
                                                          <li><a href="my-account.html">My account</a></li>
                                                          <li><a href="compare.html">Compare</a></li>
                                                    </ul>
                                              </li>
                                              <li><a href="#">Blog</a>
                                                    <ul className="dl-submenu">
                                                          <li><a href="#">Standard Layout</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="blog-standard-right-sidebar.html">Right Sidebar</a></li>
                                                                      <li><a href="blog-standard-left-sidebar.html">Left Sidebar</a></li>
                                                                      <li><a href="blog-standard-full-width.html">Full Width</a></li>
                                                                </ul>
                                                          </li>
                                                          <li><a href="#">Grid Layout</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="blog-grid-right-sidebar.html">Right Sidebar</a></li>
                                                                      <li><a href="blog-grid-left-sidebar.html">Left Sidebar</a></li>
                                                                      <li><a href="blog-grid-full-width.html">Full Width</a></li>
                                                                </ul>
                                                          </li>
                                                          <li><a href="#">List Layout</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                                                                      <li><a href="blog-list-left-sidebar.html">Left Sidebar</a></li>
                                                                      <li><a href="blog-list-full-width.html">Full Width</a></li>
                                                                </ul>
                                                          </li>
                                                          <li><a href="#">Masonry Layout</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="blog-masonry-right-sidebar.html">Right Sidebar</a></li>
                                                                      <li><a href="blog-masonry-left-sidebar.html">Left Sidebar</a></li>
                                                                      <li><a href="blog-masonry-full-width.html">Full Width</a></li>
                                                                </ul>
                                                          </li>
                                                          <li><a href="#">1st Full Then Grid</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="blog-full-then-grid-right-sidebar.html">Right Sidebar</a></li>
                                                                      <li><a href="blog-full-then-grid-left-sidebar.html">Left Sidebar</a></li>
                                                                      <li><a href="blog-full-then-grid-full-width.html">Full Width</a></li>
                                                                </ul>
                                                          </li>
                                                          <li><a href="#">Single Post Layout</a>
                                                                <ul className="dl-submenu">
                                                                      <li><a href="blog-single-post-right-sidebar.html">Right Sidebar</a></li>
                                                                      <li><a href="blog-single-post-left-sidebar.html">Left Sidebar</a></li>
                                                                      <li><a href="blog-single-post-full-width.html">Full Width</a></li>
                                                                </ul>
                                                          </li>
                                                    </ul>
                                              </li>
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
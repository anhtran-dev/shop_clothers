import React from 'react';
// import PropTypes from 'prop-types';
//
// ProductList.propTypes = {
//
// };

function ProductList(props) {
      return (
          <div className="shop-page-wrapper">
                {/*=======  shop page header  =======*/}
                <div className="shop-page-header">
                      <div className="container">
                            <div className="row align-items-center">
                                  <div className="col-12 col-lg-7 col-md-10 d-none d-md-block">
                                        {/*=======  fitler titles  =======*/}
                                        <div className="filter-title filter-title--type-two">
                                              <ul className="product-filter-menu">
                                                    <li className="active" data-filter="*">All</li>
                                                    <li data-filter=".hot">hot products</li>
                                                    <li data-filter=".new">new products</li>
                                                    <li data-filter=".sale">sale products</li>
                                              </ul>
                                        </div>
                                        {/*=======  End of fitler titles  =======*/}
                                  </div>
                                  <div className="col-12 col-lg-5 col-md-2">
                                        {/*=======  filter icons  =======*/}
                                        <div className="filter-icons">
                                              {/*=======  filter dropdown  =======*/}
                                              <div className="single-icon filter-dropdown">
                                                    <select className="nice-select">
                                                          <option value={0}>Default sorting</option>
                                                          <option value={1}>Sort ny popularity</option>
                                                          <option value={0}>Sort by average rating</option>
                                                          <option value={0}>Sort by latest</option>
                                                          <option value={0}>Sort by price: low to high</option>
                                                          <option value={0}>Sort by price: high to low</option>
                                                    </select>
                                              </div>
                                              {/*=======  End of filter dropdown  =======*/}
                                              {/*=======  grid icons  =======*/}
                                              <div className="single-icon grid-icons">
                                                    <a data-target="five-column"><i className="ti-layout-grid4-alt" /></a>
                                                    <a data-target="four-column" className="active"><i className="ti-layout-grid3-alt" /></a>
                                                    <a data-target="three-column"><i className="ti-layout-grid2-alt" /></a>
                                                    <a data-target="list"><i className="ti-view-list" /></a>
                                              </div>
                                              {/*=======  End of grid icons  =======*/}
                                              {/*=======  advance filter icon  =======*/}
                                              <div className="single-icon advance-filter-icon">
                                                    <a id="advance-filter-active-btn"><i className="ion-android-funnel" />
                                                          Filters</a>
                                              </div>
                                              {/*=======  End of advance filter icon  =======*/}
                                        </div>
                                        {/*=======  End of filter icons  =======*/}
                                  </div>
                            </div>
                      </div>
                </div>
                {/*=======  End of shop page header  =======*/}
                {/*=============================================
  =            shop advance filter area         =
  =============================================*/}
                <div className="shop-advance-filter-area" id="shop-advance-filter-area">
                      <div className="shop-advance-filter-wrapper pt-50">
                            <div className="container">
                                  <div className="row">
                                        <div className="col-lg-2 col-md-4 col-sm-6 mb-50">
                                              {/*=======  single advance filte  =======*/}
                                              <div className="single-filter-widget">
                                                    <h2 className="single-filter-widget--title">Sort by</h2>
                                                    <ul className="single-filter-widget--list">
                                                          <li><a>Default</a></li>
                                                          <li><a>Popularity</a></li>
                                                          <li><a>Average rating</a></li>
                                                          <li><a>Newness</a></li>
                                                          <li><a>Price: low to high</a></li>
                                                          <li><a>Price: high to low</a></li>
                                                    </ul>
                                              </div>
                                              {/*=======  End of single advance filte  =======*/}
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 mb-50">
                                              {/*=======  single advance filte  =======*/}
                                              <div className="single-filter-widget">
                                                    <h2 className="single-filter-widget--title">Categories</h2>
                                                    <ul className="single-filter-widget--list single-filter-widget--list--category">
                                                          <li className="has-children">
                                                                <a>Cosmetic </a> <span className="quantity">5</span>
                                                                <ul>
                                                                      <li><a>For body</a></li>
                                                                      <li><a>Make up</a></li>
                                                                      <li><a>New</a></li>
                                                                      <li><a>Perfumes</a></li>
                                                                </ul>
                                                          </li>
                                                          <li className="has-children">
                                                                <a>Furniture </a> <span className="quantity">23</span>
                                                                <ul>
                                                                      <li><a>Sofas</a></li>
                                                                      <li><a>Armchairs</a></li>
                                                                      <li><a>Desk Chairs</a></li>
                                                                      <li><a>Dining Chairs</a></li>
                                                                </ul>
                                                          </li>
                                                          <li><a>Watches </a> <span className="quantity">12</span></li>
                                                    </ul>
                                              </div>
                                              {/*=======  End of single advance filte  =======*/}
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 mb-50">
                                              {/*=======  single advance filte  =======*/}
                                              <div className="single-filter-widget">
                                                    <h2 className="single-filter-widget--title">Price filter</h2>
                                                    <ul className="single-filter-widget--list">
                                                          <li><a>All</a></li>
                                                          <li><a>$0.00 - $70.00</a></li>
                                                          <li><a>$70.00 - $140.00</a></li>
                                                          <li><a>$140.00 - $210.00</a></li>
                                                          <li><a>$210.00 - $280.00</a></li>
                                                          <li><a>$280.00 - $350.00</a></li>
                                                    </ul>
                                              </div>
                                              {/*=======  End of single advance filte  =======*/}
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 mb-50">
                                              {/*=======  single advance filte  =======*/}
                                              <div className="single-filter-widget">
                                                    <h2 className="single-filter-widget--title">Color</h2>
                                                    <ul className="single-filter-widget--list single-filter-widget--list--color">
                                                          <li><a className="active" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker black" /></a></li>
                                                          <li><a data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker blue" /></a></li>
                                                          <li><a data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker brown" /></a></li>
                                                          <li><a data-tippy="Gold" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker gold" /></a></li>
                                                          <li><a data-tippy="Green Coral" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker green-coral" /></a></li>
                                                          <li><a data-tippy="Grey" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker grey" /></a></li>
                                                          <li><a data-tippy="Oak" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker oak" /></a></li>
                                                          <li><a data-tippy="Pink" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker pink" /></a></li>
                                                          <li><a data-tippy="Silver" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker silver" /></a></li>
                                                          <li><a data-tippy="White" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><span className="color-picker white" /></a></li>
                                                    </ul>
                                              </div>
                                              {/*=======  End of single advance filte  =======*/}
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 mb-50">
                                              {/*=======  single advance filte  =======*/}
                                              <div className="single-filter-widget">
                                                    <h2 className="single-filter-widget--title">Size</h2>
                                                    <ul className="single-filter-widget--list single-filter-widget--list--size">
                                                          <li><a>L</a> <span className="quantity">5</span></li>
                                                          <li><a>M</a> <span className="quantity">5</span></li>
                                                          <li><a>S</a> <span className="quantity">5</span></li>
                                                          <li><a>XS</a> <span className="quantity">5</span></li>
                                                    </ul>
                                              </div>
                                              {/*=======  End of single advance filte  =======*/}
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 mb-50">
                                              {/*=======  single advance filte  =======*/}
                                              <div className="single-filter-widget">
                                                    <h2 className="single-filter-widget--title">Brands</h2>
                                                    <ul className="single-filter-widget--list single-filter-widget--list--brand">
                                                          <li><a>Alliop</a> <span className="quantity">(12)</span></li>
                                                          <li><a>Burberry</a> <span className="quantity">(15)</span></li>
                                                          <li><a>Catmen</a> <span className="quantity">(13)</span></li>
                                                          <li><a>Houdini</a> <span className="quantity">(10)</span></li>
                                                          <li><a>Love</a> <span className="quantity">(70)</span></li>
                                                          <li><a>Made</a> <span className="quantity">(15)</span></li>
                                                    </ul>
                                              </div>
                                              {/*=======  End of single advance filte  =======*/}
                                        </div>
                                  </div>
                            </div>
                      </div>
                </div>
                {/*=====  End of shop advance filter area  ======*/}
                {/*=============================================
		=            shop page content         =
		=============================================*/}
                <div className="shop-page-content mt-100 mb-100">
                      <div className="container">
                            <div className="row">
                                  <div className="col-lg-3 order-2 order-lg-1">
                                        {/*=======  page sidebar  =======*/}
                                        <div className="page-sidebar">
                                              {/*=======  single sidebar widget  =======*/}
                                              <div className="single-sidebar-widget mb-40">
                                                    {/*=======  search widget  =======*/}
                                                    <div className="search-widget">
                                                          <form action="#">
                                                                <input type="search" placeholder="Search products ..." />
                                                                <button type="button"><i className="ion-android-search" /></button>
                                                          </form>
                                                    </div>
                                                    {/*=======  End of search widget  =======*/}
                                              </div>
                                              {/*=======  End of single sidebarwidget  =======*/}
                                              {/*=======  single sidebar widget  =======*/}
                                              <div className="single-sidebar-widget mb-40">
                                                    <h2 className="single-sidebar-widget--title">Categories</h2>
                                                    <ul className="single-sidebar-widget--list single-sidebar-widget--list--category">
                                                          <li className="has-children">
                                                                <a>Cosmetic </a> <span className="quantity">5</span>
                                                                <ul>
                                                                      <li><a>For body</a></li>
                                                                      <li><a>Make up</a></li>
                                                                      <li><a>New</a></li>
                                                                      <li><a>Perfumes</a></li>
                                                                </ul>
                                                          </li>
                                                          <li className="has-children">
                                                                <a>Furniture </a> <span className="quantity">23</span>
                                                                <ul>
                                                                      <li><a>Sofas</a></li>
                                                                      <li><a>Armchairs</a></li>
                                                                      <li><a>Desk Chairs</a></li>
                                                                      <li><a>Dining Chairs</a></li>
                                                                </ul>
                                                          </li>
                                                          <li><a>Watches </a> <span className="quantity">12</span></li>
                                                          <li><a>Bags </a> <span className="quantity">22</span></li>
                                                          <li><a>Uncategorized </a> <span className="quantity">14</span></li>
                                                    </ul>
                                              </div>
                                              {/*=======  End of single sidebar widget  =======*/}
                                              {/*=======  single sidebar widget  =======*/}
                                              <div className="single-sidebar-widget mb-40">
                                                    <h2 className="single-sidebar-widget--title">Filters</h2>
                                                    <div className="sidebar-price">
                                                          <div id="price-range" />
                                                          <div className="output-wrapper mt-20">
                                                                <input type="text" id="price-amount" className="price-amount" readOnly />
                                                                <a className="price-range-button"><i className="ion-android-funnel" /> Filter</a>
                                                          </div>
                                                    </div>
                                              </div>
                                              {/*=======  End of single sidebar widget  =======*/}
                                              {/*=======  single sidebar widget  =======*/}
                                              <div className="single-sidebar-widget mb-40">
                                                    <h2 className="single-sidebar-widget--title">Popular products</h2>
                                                    {/*=======  widget product wrapper  =======*/}
                                                    <div className="widget-product-wrapper">
                                                          {/*=======  single widget product  =======*/}
                                                          <div className="single-widget-product-wrapper">
                                                                <div className="single-widget-product">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-widget-product__image">
                                                                            <a>
                                                                                  <img src="assets/images/products/product-furniture-2-100x100.jpg" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-widget-product__content">
                                                                            <div className="single-widget-product__content__top">
                                                                                  <h3 className="product-title"><a>Wooden Table</a></h3>
                                                                                  <div className="price">
                                                                                        <span className="main-price discounted">$270.00</span>
                                                                                        <span className="discounted-price">$220.00</span>
                                                                                  </div>
                                                                                  <div className="rating">
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star-outline" />
                                                                                        <i className="ion-android-star-outline" />
                                                                                        <i className="ion-android-star-outline" />
                                                                                  </div>
                                                                            </div>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single widget product  =======*/}
                                                          {/*=======  single widget product  =======*/}
                                                          <div className="single-widget-product-wrapper">
                                                                <div className="single-widget-product">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-widget-product__image">
                                                                            <a>
                                                                                  <img src="assets/images/products/product-furniture-11-100x100.jpg" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-widget-product__content">
                                                                            <div className="single-widget-product__content__top">
                                                                                  <h3 className="product-title"><a>Sofa with cushion</a></h3>
                                                                                  <div className="price">
                                                                                        <span className="main-price discounted">$660.00</span>
                                                                                        <span className="discounted-price">$600.00</span>
                                                                                  </div>
                                                                                  <div className="rating">
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star" />
                                                                                  </div>
                                                                            </div>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single widget product  =======*/}
                                                          {/*=======  single widget product  =======*/}
                                                          <div className="single-widget-product-wrapper">
                                                                <div className="single-widget-product">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-widget-product__image">
                                                                            <a>
                                                                                  <img src="assets/images/products/soccer-4-100x100.jpg" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-widget-product__content">
                                                                            <div className="single-widget-product__content__top">
                                                                                  <h3 className="product-title"><a>High waist trousers</a></h3>
                                                                                  <div className="price">
                                                                                        <span className="main-price discounted">$36.00</span>
                                                                                        <span className="discounted-price">$33.00</span>
                                                                                  </div>
                                                                                  <div className="rating">
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star" />
                                                                                        <i className="ion-android-star-outline" />
                                                                                  </div>
                                                                            </div>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single widget product  =======*/}
                                                    </div>
                                                    {/*=======  End of widget product wrapper  =======*/}
                                              </div>
                                              {/*=======  End of single sidebar widget  =======*/}
                                              {/*=======  single sidebar widget  =======*/}
                                              <div className="single-sidebar-widget">
                                                    <h2 className="single-sidebar-widget--title">Tags</h2>
                                                    <div className="tag-container">
                                                          <a>bags</a>
                                                          <a>chair</a>
                                                          <a>clock</a>
                                                          <a>comestic</a>
                                                          <a>fashion</a>
                                                          <a>furniture</a>
                                                          <a>holder</a>
                                                          <a>mask</a>
                                                          <a>men</a>
                                                          <a>oil</a>
                                                    </div>
                                              </div>
                                              {/*=======  End of single sidebar widget  =======*/}
                                        </div>
                                        {/*=======  End of page sidebar  =======*/}
                                  </div>
                                  <div className="col-lg-9 order-1 order-lg-2 mb-md-80 mb-sm-80">
                                        <div className="row product-isotope shop-product-wrap four-column">
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 hot sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/cloth-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/cloth-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-10%</span>
                                                                      <span className="hot">hot</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
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
                                                                      {/* <a class="clear-link">clear</a> */}
                                                                </div>
                                                                <div className="title">
                                                                      <h3> <a>High-waist Trousers</a></h3>
                                                                      <a>Select options</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$160.00</span>
                                                                      <span className="discounted-price">$180.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/cloth-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/cloth-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-10%</span>
                                                                      <span className="hot">hot</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
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
                                                                      {/* <a class="clear-link">clear</a> */}
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>High-waist Trousers</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$160.00</span>
                                                                      <span className="discounted-price">$180.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-10%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Light Brown Watch</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price">$130.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-10%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Light Brown Watch</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price">$130.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 hot">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="hot">hot</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Dark Gray Watch</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$260.00</span>
                                                                      <span className="discounted-price">$230.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="hot">hot</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Dark Gray Watch</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$260.00</span>
                                                                      <span className="discounted-price">$230.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 new">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a> Dark Brown Watch</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$120.00</span>
                                                                      <span className="discounted-price">$100.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Dark Brown Watch</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$120.00</span>
                                                                      <span className="discounted-price">$100.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/cosmetics-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/cosmetics-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-5%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Pink Clay Mask</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$100.00</span>
                                                                      <span className="discounted-price">$80.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/cosmetics-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/cosmetics-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-5%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Pink Clay Mask</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$100.00</span>
                                                                      <span className="discounted-price">$80.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-15%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Wooden Round Table</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$400.00</span>
                                                                      <span className="discounted-price">$380.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-15%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Wooden Round Table</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$400.00</span>
                                                                      <span className="discounted-price">$380.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 new">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Sofa with Cushion</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price">$85.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Sofa with Cushion</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price">$85.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-25%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Green Coutch</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$360.00</span>
                                                                      <span className="discounted-price">$300.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-25%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Green Coutch</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$360.00</span>
                                                                      <span className="discounted-price">$300.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 hot sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/cloth-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/cloth-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-10%</span>
                                                                      <span className="hot">hot</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
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
                                                                      {/* <a class="clear-link">clear</a> */}
                                                                </div>
                                                                <div className="title">
                                                                      <h3> <a>High-waist Trousers</a></h3>
                                                                      <a>Select options</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$160.00</span>
                                                                      <span className="discounted-price">$180.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/cloth-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/cloth-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-10%</span>
                                                                      <span className="hot">hot</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
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
                                                                      {/* <a class="clear-link">clear</a> */}
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>High-waist Trousers</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$160.00</span>
                                                                      <span className="discounted-price">$180.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-10%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Light Brown Watch</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price">$130.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-10%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Light Brown Watch</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price">$130.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 hot">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="hot">hot</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Dark Gray Watch</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$260.00</span>
                                                                      <span className="discounted-price">$230.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="hot">hot</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Dark Gray Watch</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$260.00</span>
                                                                      <span className="discounted-price">$230.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 new">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a> Dark Brown Watch</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$120.00</span>
                                                                      <span className="discounted-price">$100.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Dark Brown Watch</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$120.00</span>
                                                                      <span className="discounted-price">$100.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/cosmetics-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/cosmetics-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-5%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Pink Clay Mask</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$100.00</span>
                                                                      <span className="discounted-price">$80.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/cosmetics-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/cosmetics-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-5%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Pink Clay Mask</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$100.00</span>
                                                                      <span className="discounted-price">$80.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-15%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Wooden Round Table</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$400.00</span>
                                                                      <span className="discounted-price">$380.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-1-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-1-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-15%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Wooden Round Table</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$400.00</span>
                                                                      <span className="discounted-price">$380.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 new">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Sofa with Cushion</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price">$85.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-2-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-2-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Sofa with Cushion</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price">$85.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                              {/*=======  single product  =======*/}
                                              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                                                    <div className="single-product">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-25%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Green Coutch</a></h3>
                                                                      <a>Add to cart</a>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$360.00</span>
                                                                      <span className="discounted-price">$300.00</span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                                    <div className="single-product--list">
                                                          {/*=======  single product image  =======*/}
                                                          <div className="single-product__image">
                                                                <a className="image-wrap">
                                                                      <img src="assets/images/products/furniture-3-1-600x800.jpg" className="img-fluid" alt="" />
                                                                      <img src="assets/images/products/furniture-3-2-600x800.jpg" className="img-fluid" alt="" />
                                                                </a>
                                                                <div className="single-product__floating-badges">
                                                                      <span className="onsale">-25%</span>
                                                                </div>
                                                                <div className="single-product__floating-icons">
                                                                      <span className="wishlist"><a data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-android-favorite-outline" /></a></span>
                                                                      <span className="compare"><a data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-shuffle-strong" /></a></span>
                                                                      <span className="quickview"><a className="cd-trigger"  data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="bottom"><i className="ion-ios-search-strong" /></a></span>
                                                                </div>
                                                          </div>
                                                          {/*=======  End of single product image  =======*/}
                                                          {/*=======  single product content  =======*/}
                                                          <div className="single-product__content">
                                                                <div className="title">
                                                                      <h3> <a>Green Coutch</a></h3>
                                                                </div>
                                                                <div className="price">
                                                                      <span className="main-price discounted">$360.00</span>
                                                                      <span className="discounted-price">$300.00</span>
                                                                </div>
                                                                <p className="short-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                                                                      consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur
                                                                      voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
                                                                </p>
                                                                <a className="lezada-button lezada-button--medium">ADD TO CART</a>
                                                          </div>
                                                          {/*=======  End of single product content  =======*/}
                                                    </div>
                                              </div>
                                              {/*=======  End of single product  =======*/}
                                        </div>
                                        <div className="row">
                                              <div className="col-lg-12 text-center mt-30">
                                                    <a className="lezada-button lezada-button--medium lezada-button--icon--left"><i className="ion-android-add" /> MORE</a>
                                              </div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                </div>
                {/*=====  End of shop page content  ======*/}
          </div>
      );
}

export default ProductList;

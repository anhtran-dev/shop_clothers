import React from 'react';
import PropTypes from 'prop-types';
import ProductList from "./ProductList/ProductList";

Product.propTypes = {
      
};

function Product(props) {
      return (
          <div className="shop-page">
                <div className="container wide">
                      <div>
                            {/*=======  breadcrumb area =======*/}
                            <div className="breadcrumb-area breadcrumb-bg-2 pt-50 pb-70">
                                  <div className="container">
                                        <div className="row">
                                              <div className="col-lg-12">
                                                    <h1 className="breadcrumb-title">Shop</h1>
                                                    {/*=======  breadcrumb list  =======*/}
                                                    <ul className="breadcrumb-list">
                                                          <li className="breadcrumb-list__item"><a href="index.html">HOME</a></li>
                                                          <li className="breadcrumb-list__item breadcrumb-list__item--active">PRODUCTS</li>
                                                    </ul>
                                                    {/*=======  End of breadcrumb list  =======*/}
                                              </div>
                                        </div>
                                  </div>
                            </div>
                            {/*=======  End of breadcrumb area =======*/}
                            {/*=============================================
                                  =            shop page content         =
                                  =============================================*/}
                            <ProductList/>
                            {/*=====  End of shop page content  ======*/}
                      </div>

                </div>
          </div>
      );
}

export default Product;
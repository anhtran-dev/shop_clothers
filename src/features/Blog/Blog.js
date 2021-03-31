import React from 'react';

function Blog(props) {
      return (
          <div className="blog-page">
                <div className="container wide">
                      <div>
                            {/*=======  breadcrumb area =======*/}
                            <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-100">
                                  <div className="container">
                                        <div className="row">
                                              <div className="col-lg-12">
                                                    <h1 className="breadcrumb-title">Blog</h1>
                                                    {/*=======  breadcrumb list  =======*/}
                                                    <ul className="breadcrumb-list">
                                                          <li className="breadcrumb-list__item"><a>HOME</a></li>
                                                          <li className="breadcrumb-list__item breadcrumb-list__item--active">Blog</li>
                                                    </ul>
                                                    {/*=======  End of breadcrumb list  =======*/}
                                              </div>
                                        </div>
                                  </div>
                            </div>
                            {/*=======  End of breadcrumb area =======*/}
                            {/*=============================================
    =            blog page wrapper         =
    =============================================*/}
                            <div className="blog-page-wrapper mb-100">
                                  <div className="container">
                                        <div className="row">
                                              <div className="col-lg-3 order-2">
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
                                                                            <a >Cosmetic </a> <span className="quantity">5</span>
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
                                                                {/*=======  widget post wrapper  =======*/}
                                                                <div className="widget-post-wrapper">
                                                                      {/*=======  single widget post  =======*/}
                                                                      <div className="single-widget-post">
                                                                            <div className="image">
                                                                                  <img src="assets/images/blog/post-thumbnail-100x120.png" className="img-fluid" alt="" />
                                                                            </div>
                                                                            <div className="content">
                                                                                  <h3 className="widget-post-title"><a>Chic Fashion Phenomenon</a></h3>
                                                                                  <p className="widget-post-date">June 5, 2018</p>
                                                                            </div>
                                                                      </div>
                                                                      {/*=======  End of single widget post  =======*/}
                                                                      {/*=======  single widget post  =======*/}
                                                                      <div className="single-widget-post">
                                                                            <div className="image">
                                                                                  <img src="assets/images/blog/post-thumbnail-6-100x120.png" className="img-fluid" alt="" />
                                                                            </div>
                                                                            <div className="content">
                                                                                  <h3 className="widget-post-title"><a>Go Your Own Way</a></h3>
                                                                                  <p className="widget-post-date">June 5, 2018</p>
                                                                            </div>
                                                                      </div>
                                                                      {/*=======  End of single widget post  =======*/}
                                                                      {/*=======  single widget post  =======*/}
                                                                      <div className="single-widget-post">
                                                                            <div className="image">
                                                                                  <img src="assets/images/blog/post-thumbnail-9-100x120.png" className="img-fluid" alt="" />
                                                                            </div>
                                                                            <div className="content">
                                                                                  <h3 className="widget-post-title"><a>Home-made Body Lotion</a></h3>
                                                                                  <p className="widget-post-date">June 5, 2018</p>
                                                                            </div>
                                                                      </div>
                                                                      {/*=======  End of single widget post  =======*/}
                                                                </div>
                                                                {/*=======  End of widget post wrapper  =======*/}
                                                          </div>
                                                          {/*=======  End of single sidebar widget  =======*/}
                                                          {/*=======  single sidebar widget  =======*/}
                                                          <div className="single-sidebar-widget mb-40">
                                                                {/*=======  blog sidebar banner  =======*/}
                                                                <div className="blog-sidebar-banner">
                                                                      <img src="assets/images/banners/ADS-blog.png" className="img-fluid" alt="" />
                                                                </div>
                                                                {/*=======  End of blog sidebar banner  =======*/}
                                                          </div>
                                                          {/*=======  End of single sidebar widget  =======*/}
                                                          {/*=======  single sidebar widget  =======*/}
                                                          <div className="single-sidebar-widget">
                                                                <h2 className="single-sidebar-widget--title"> Popular Tags</h2>
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
                                              <div className="col-lg-9 order-1 mb-md-70 mb-sm-70">
                                                    <div className="row">
                                                          <div className="col-md-12 mb-60">
                                                                <div className="single-slider-post single-slider-post--list">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-slider-post__image single-slider-post--list__image mb-sm-30">
                                                                            <a>
                                                                                  <img src="assets/images/blog/post-thumbnail-1-370x200.png" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-slider-post__content single-slider-post--list__content">
                                                                            <div className="post-date">
                                                                                  <i className="ion-android-calendar" />
                                                                                  <a> june 5, 2018</a>
                                                                            </div>
                                                                            <h2 className="post-title"><a>Chic Fashion Phenomenon</a></h2>
                                                                            <p className="post-excerpt">Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                                                                                  fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of
                                                                                  “ugly pretty.”</p>
                                                                            <a className="blog-readmore-btn">read more</a>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          <div className="col-md-12 mb-60">
                                                                <div className="single-slider-post single-slider-post--list">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-slider-post__image single-slider-post--list__image mb-sm-30">
                                                                            <a>
                                                                                  <img src="assets/images/blog/post-thumbnail-2-1-370x200.png" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-slider-post__content single-slider-post--list__content">
                                                                            <div className="post-date">
                                                                                  <i className="ion-android-calendar" />
                                                                                  <a> june 6, 2018</a>
                                                                            </div>
                                                                            <h2 className="post-title"><a>Shirt Color Picking Guide</a></h2>
                                                                            <p className="post-excerpt">Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                                                                                  fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of
                                                                                  “ugly pretty.”</p>
                                                                            <a className="blog-readmore-btn">read more</a>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          <div className="col-md-12 mb-60">
                                                                <div className="single-slider-post single-slider-post--list">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-slider-post__image single-slider-post--list__image mb-sm-30">
                                                                            <a>
                                                                                  <img src="assets/images/blog/post-thumbnail-8-370x200.png" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-slider-post__content single-slider-post--list__content">
                                                                            <div className="post-date">
                                                                                  <i className="ion-android-calendar" />
                                                                                  <a> june 8, 2018</a>
                                                                            </div>
                                                                            <h2 className="post-title"><a>Perfect Perfume &amp; Cologne</a></h2>
                                                                            <p className="post-excerpt">Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                                                                                  fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of
                                                                                  “ugly pretty.”</p>
                                                                            <a className="blog-readmore-btn">read more</a>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          <div className="col-md-12 mb-60">
                                                                <div className="single-slider-post single-slider-post--list">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-slider-post__image single-slider-post--list__image mb-sm-30">
                                                                            <a>
                                                                                  <img src="assets/images/blog/post-thumbnail-370x200.png" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-slider-post__content single-slider-post--list__content">
                                                                            <div className="post-date">
                                                                                  <i className="ion-android-calendar" />
                                                                                  <a> june 10, 2018</a>
                                                                            </div>
                                                                            <h2 className="post-title"><a>T-Shirts as Minimalist Style</a>
                                                                            </h2>
                                                                            <p className="post-excerpt">Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                                                                                  fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of
                                                                                  “ugly pretty.”</p>
                                                                            <a className="blog-readmore-btn">read more</a>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          <div className="col-md-12 mb-60">
                                                                <div className="single-slider-post single-slider-post--list">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-slider-post__image single-slider-post--list__image mb-sm-30">
                                                                            <a>
                                                                                  <img src="assets/images/blog/post-thumbnail-1-370x200.png" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-slider-post__content single-slider-post--list__content">
                                                                            <div className="post-date">
                                                                                  <i className="ion-android-calendar" />
                                                                                  <a> june 5, 2018</a>
                                                                            </div>
                                                                            <h2 className="post-title"><a>Chic Fashion Phenomenon</a></h2>
                                                                            <p className="post-excerpt">Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                                                                                  fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of
                                                                                  “ugly pretty.”</p>
                                                                            <a className="blog-readmore-btn">read more</a>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          <div className="col-md-12 mb-60">
                                                                <div className="single-slider-post single-slider-post--list">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-slider-post__image single-slider-post--list__image mb-sm-30">
                                                                            <a>
                                                                                  <img src="assets/images/blog/post-thumbnail-2-1-370x200.png" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-slider-post__content single-slider-post--list__content">
                                                                            <div className="post-date">
                                                                                  <i className="ion-android-calendar" />
                                                                                  <a> june 6, 2018</a>
                                                                            </div>
                                                                            <h2 className="post-title"><a>Shirt Color Picking Guide</a></h2>
                                                                            <p className="post-excerpt">Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                                                                                  fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of
                                                                                  “ugly pretty.”</p>
                                                                            <a className="blog-readmore-btn">read more</a>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          <div className="col-md-12 mb-60">
                                                                <div className="single-slider-post single-slider-post--list">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-slider-post__image single-slider-post--list__image mb-sm-30">
                                                                            <a>
                                                                                  <img src="assets/images/blog/post-thumbnail-8-370x200.png" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-slider-post__content single-slider-post--list__content">
                                                                            <div className="post-date">
                                                                                  <i className="ion-android-calendar" />
                                                                                  <a> june 8, 2018</a>
                                                                            </div>
                                                                            <h2 className="post-title"><a>Perfect Perfume &amp; Cologne</a></h2>
                                                                            <p className="post-excerpt">Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                                                                                  fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of
                                                                                  “ugly pretty.”</p>
                                                                            <a className="blog-readmore-btn">read more</a>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                          <div className="col-md-12 mb-60">
                                                                <div className="single-slider-post single-slider-post--list border-0 pb-0">
                                                                      {/*=======  image  =======*/}
                                                                      <div className="single-slider-post__image single-slider-post--list__image mb-sm-30">
                                                                            <a>
                                                                                  <img src="assets/images/blog/post-thumbnail-370x200.png" className="img-fluid" alt="" />
                                                                            </a>
                                                                      </div>
                                                                      {/*=======  End of image  =======*/}
                                                                      {/*=======  content  =======*/}
                                                                      <div className="single-slider-post__content single-slider-post--list__content">
                                                                            <div className="post-date">
                                                                                  <i className="ion-android-calendar" />
                                                                                  <a> june 10, 2018</a>
                                                                            </div>
                                                                            <h2 className="post-title"><a>T-Shirts as Minimalist Style</a>
                                                                            </h2>
                                                                            <p className="post-excerpt">Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                                                                                  fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of
                                                                                  “ugly pretty.”</p>
                                                                            <a className="blog-readmore-btn">read more</a>
                                                                      </div>
                                                                      {/*=======  End of content  =======*/}
                                                                </div>
                                                          </div>
                                                    </div>
                                                    <div className="row">
                                                          <div className="col-lg-12">
                                                                {/*=======  pagination  =======*/}
                                                                <div className="pagination text-center">
                                                                      <ul>
                                                                            <li className="active"><a>1</a></li>
                                                                            <li><a>2</a></li>
                                                                            <li><a>3</a></li>
                                                                            <li><a>4</a></li>
                                                                            <li><a>NEXT</a></li>
                                                                      </ul>
                                                                </div>
                                                                {/*=======  End of pagination  =======*/}
                                                          </div>
                                                    </div>
                                              </div>
                                        </div>
                                  </div>
                            </div>
                            {/*=====  End of blog page wrapper  ======*/}
                      </div>

                </div>
          </div>
      );
}

export default Blog;

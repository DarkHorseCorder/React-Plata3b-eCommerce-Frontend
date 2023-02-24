import React, { Component } from "react";
import { Link } from "react-router-dom";

const navigationmenu = [];

/*const navigationmenu = [
    {
    id: 1,
    linkText: 'Interes',
    child: true,
    //link: '/home-v4',
    submenu: [
        {
            id: 22,
            link: '/blog-list',
            linkText: 'Blog',
        },
        {
            id: 23,
            link: '/blog-list',
            linkText: 'Faqs',
        },
        {
            id: 24,
            link: '/blog-list',
            linkText: 'Eventos',
        },

        
        {
        id: 11,
        link: '/',
        linkText: 'Home v1'
    },
    {
        id: 12,
        link: '/home-v2',
        linkText: 'Home v2'
    },
    {
        id: 13,
        link: '/home-v3',
        linkText: 'Home v3'
    },
    {
        id: 14,
        link: '/home-v4',
        linkText: 'Home v4'
    },
    ]
},
/*{
    id: 2,
    linkText: 'Blog',
    child: true,
    submenu: [
       
        {
            id: 22,
            link: '/blog-list',
            linkText: 'Blog',
        },
        {
            id: 23,
            link: '/blog-list',
            linkText: 'Eventos',
        },
    ]
},
{
    id: 3,
    linkText: 'Pages (Jordi Desarrollo)',
    child: true,
    submenu: [
        {
            id: 31,
            link: '/about',
            linkText: 'About Us'
        },
        {
            id: 32,
            link: '/login',
            linkText: 'Login'
        },
        {
            id: 33,
            link: '/register',
            linkText: 'Sign Up'
        },
        {
            id: 34,
            link: '/checkout',
            linkText: 'Checkout'
        },
        {
            id: 35,
            link: '/cart',
            linkText: 'Cart'
        },
        {
            id: 36,
            link: '/wishlist',
            linkText: 'Wishlist'
        },
        {
            id: 37,
            link: '/legal',
            linkText: 'Legal'
        },
        {
            id: 38,
            link: '/error',
            linkText: 'Error 404'
        },
    ]
},
]*/
const navigationmenus = [
  {
    id: 1,
    link: "/",
    linkText: "Tienda",
  },
  {
    id: 2,
    linkText: "Interes",
    child: true,
    //link: '/home-v4',
    submenu: [
      {
        id: 22,
        link: "/blog-list",
        linkText: "Blog",
      },
      {
        id: 23,
        link: "/faq-list",
        linkText: "Faqs",
      },
      {
        id: 24,
        link: "/blog-list",
        linkText: "Eventos",
      },
    ],
  },
  {
    id: 3,
    link: "/about",
    linkText: "Sobre nosotr@s",
  },

  {
    id: 4,
    linkText: "Contáctenos",
    link: "/contact",
  },
];

class Navigation extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        {navigationmenu.length > 0
          ? navigationmenu.map((item, i) => (
              <li
                key={i}
                className={`menu-item ${
                  item.child ? "menu-item-has-children" : ""
                } `}
                onClick={this.triggerChild}
              >
                {item.child ? (
                  <Link onClick={(e) => e.preventDefault()} to="/">
                    {" "}
                    {item.linkText}{" "}
                  </Link>
                ) : (
                  <Link to={item.link}> {item.linkText} </Link>
                )}
                {item.child ? (
                  <ul className="sub-menu" role="menu">
                    {item.submenu.map((sub_item, i) => (
                      <li
                        key={i}
                        className={`menu-item ${
                          sub_item.child ? "menu-item-has-children" : ""
                        } `}
                      >
                        {sub_item.child ? (
                          <Link onClick={(e) => e.preventDefault()} to="/">
                            {" "}
                            {sub_item.linkText}{" "}
                          </Link>
                        ) : (
                          <Link to={sub_item.link}> {sub_item.linkText} </Link>
                        )}
                        {sub_item.submenu ? (
                          <ul className="sub-menu">
                            {sub_item.submenu.map((third_item, i) => (
                              <li className="menu-item" key={i}>
                                <Link to={third_item.link}>
                                  {third_item.linkText}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))
          : null}
        {/*  <li className="menu-item menu-item-has-children mega-menu-wrapper">
                    <Link to="/shop-v2">Shop</Link>
                    <ul className="sub-menu">
                        <li>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="mega-menu-item">
                                            <h6>Membership Delivery</h6>
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                                making it over 2000 years old.
                          </p>
                                            <Link to="/login" className="andro_btn-custom shadow-none btn-sm">Become a Member</Link>
                                        </div>
                                    </div>
                                    <div className="offset-lg-1 col-lg-3">
                                        <div className="mega-menu-item">
                                            <h6>Shop Pages</h6>
                                            {/*<Link to="/shop-v1">Shop v1 (Default)</Link>*/}
        {/* <Link to="/shop-v2">Shop v2 (Full Width)</Link>*/}
        {/*<Link to="/shop-v3">Shop v3 (No Sidebar)</Link>*/}
        {/*<Link to="/shop-v4">Shop v4 (List view)</Link>*/}
        {/*  </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mega-menu-item">
                                            <h6>Product Details Pages</h6>
                                            <Link to="/product-single/1">Product Details v1</Link>
                                           {/*} <Link to="/product-single-v2/1">Product Details v2</Link>
                                            <Link to="#" className="coming-soon">Product Details v3 <span>Coming Soon</span></Link>*/}
        {/* </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                                        </li>*/}
        {navigationmenus.length > 0
          ? navigationmenus.map((item, i) => (
              <li
                key={i}
                className={`menu-item ${
                  item.child ? "menu-item-has-children" : ""
                } `}
                onClick={this.triggerChild}
              >
                {item.child ? (
                  <Link onClick={(e) => e.preventDefault()} to="/">
                    {" "}
                    {item.linkText}{" "}
                  </Link>
                ) : (
                  <Link to={item.link}> {item.linkText} </Link>
                )}
                {item.child ? (
                  <ul className="sub-menu" role="menu">
                    {item.submenu.map((sub_item, i) => (
                      <li
                        key={i}
                        className={`menu-item ${
                          sub_item.child ? "menu-item-has-children" : ""
                        } `}
                      >
                        {sub_item.child ? (
                          <Link onClick={(e) => e.preventDefault()} to="/">
                            {" "}
                            {sub_item.linkText}{" "}
                          </Link>
                        ) : (
                          <Link to={sub_item.link}> {sub_item.linkText} </Link>
                        )}
                        {sub_item.submenu ? (
                          <ul className="sub-menu">
                            {sub_item.submenu.map((third_item, i) => (
                              <li className="menu-item" key={i}>
                                <Link to={third_item.link}>
                                  {third_item.linkText}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))
          : null}
      </ul>
    );
  }
}

export default Navigation;

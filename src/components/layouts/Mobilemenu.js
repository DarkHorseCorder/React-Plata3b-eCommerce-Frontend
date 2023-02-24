import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

/*
const navigationmenu = [{
    id: 1,
    linkText: 'Home Pages',
    child: true,
    submenu: [{
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
    ]
},
{
    id: 2,
    linkText: 'Blog',
    child: true,
    submenu: [
        {
            id: 21,
            linkText: 'Blog Archive',
            child: true,
            submenu: [
                {
                    id: 211,
                    link: '/blog-grid',
                    linkText: 'Grid View',
                },
                {
                    id: 212,
                    link: '/blog-list',
                    linkText: 'List View',
                },
                {
                    id: 213,
                    link: '/blog-masonry',
                    linkText: 'Masonary View',
                },
            ]
        },
        {
            id: 22,
            link: '/post-single/1',
            linkText: 'Blog Single'
        },
    ]
},
{
    id: 3,
    linkText: 'Pages',
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
{
    id: 4,
    linkText: 'Shop Pages',
    child: true,
    submenu: [
        {
            id: 41,
            link: '/shop-v1',
            linkText: 'Shop v1 (Default)'
        },
        {
            id: 42,
            link: '/shop-v2',
            linkText: 'Shop v2 (Full Width)'
        },
        {
            id: 43,
            link: '/shop-v3',
            linkText: 'Shop v3 (No Sidebar)'
        },
        {
            id: 44,
            link: '/shop-v4',
            linkText: 'Shop v4 (List View)'
        },
        {
            id: 45,
            link: '/product-single/1',
            linkText: 'Shop Detail v1'
        },
        {
            id: 46,
            link: '/product-single-v2/1',
            linkText: 'Shop Detail v2'
        },
    ]
},
{
    id: 5,
    linkText: 'Contact Us',
    link: '/contact',
},
]*/

const navigationmenu = [
  {
    id: 1,
    link: "/shop-v2",
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
    linkText: "About Us",
  },

  {
    id: 4,
    linkText: "Contact Us",
    link: "/contact",
  },
];

class Mobilemenu extends Component {
  getNextSibling = function (elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    }
  };

  triggerChild = (e) => {
    let subMenu = "";

    subMenu =
      this.getNextSibling(e.target, ".sub-menu") !== undefined
        ? this.getNextSibling(e.target, ".sub-menu")
        : null;

    if (subMenu !== null && subMenu !== undefined && subMenu !== "") {
      subMenu.classList = subMenu.classList.contains("d-block")
        ? "sub-menu"
        : "sub-menu d-block";
    }
  };
  render() {
    return (
      <Fragment>
        <Link className="navbar-brand" to="/">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
            alt="logo"
          />{" "}
        </Link>
        <ul>
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
                            <Link to={sub_item.link}>
                              {" "}
                              {sub_item.linkText}{" "}
                            </Link>
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
      </Fragment>
    );
  }
}

export default Mobilemenu;

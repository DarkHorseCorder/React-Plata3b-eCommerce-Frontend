import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../data/instagram.json'

class Instagram extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className={"col-lg-4 " + this.props.classname.style + " pattern-bg"} >
                    <div className="andro_instagram">
                        <h3 className="text-white">Follow Us On Instagram</h3>
                        <div  className="andro_btn-custom light">
                            <a className="andro_btn-custom light" href="https://www.instagram.com/plata3b/" target="_blank" class="active">
                                Follow Us
                            </a>  </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row no-gutters">
                        {instagram.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-4 col-sm-4 col-6 p-0">
                                <Link  className="andro_ig-item">
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt="ig" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Instagram;
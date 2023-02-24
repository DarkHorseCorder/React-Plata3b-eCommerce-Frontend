import React, { Component } from 'react';

const iconspost = [
    {
        icon: "flaticon-diamond",
        title: "Guaranteed Modern Design",
        para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        icon: "flaticon-harvest",
        title: "Hand Finished",
        para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        icon: "flaticon-tag",
        title: "Cheap & Modern Le'tamryy",
        para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]

class Icons extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        {iconspost.map((item, i) => (
                            <div key={i} className="col-lg-4">
                                <div className="andro_icon-block icon-block-2">
                                    <i className={item.icon} />
                                    <h5>{item.title}</h5>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Icons;
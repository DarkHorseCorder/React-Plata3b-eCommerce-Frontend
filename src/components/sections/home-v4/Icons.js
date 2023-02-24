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
        title: "Cheap & Modern Le'tamry",
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
                                <div className="andro_icon-block">
                                    <i className={item.icon} />
                                    <h5>{item.title}</h5>
                                    <p>{item.para}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg">
                                        <rect height={500} width={500} className="andro_svg-stroke-shape-anim" />
                                    </svg>
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
import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Shopcta from '../home/Shopcta';
import Featuredpost from '../home-v2/Featuredpost';
import Cta from '../home-v2/Cta';
import Toppicks from '../home-v2/Toppicks';
import Icons from './Icons';
import Fresharrivals from './Fresharrivals';
import Ctamasonary from './Ctamasonary';
import Blogpost from './Blogpost';
import Testimonialsclient from './Testimonialsclient';
import Faqcontact from './Faqcontact';

class Content extends Component { 
    render() {
        return (
            <Fragment>
                <Banner/>
                <Categories/>
                <Shopcta/>
                <Icons/>
                <Fresharrivals/>
                <Featuredpost/>
                <div className="section pt-0">
                     <Cta/>
                 </div>
                <Toppicks/>
                <Ctamasonary/>
                <Blogpost/>
                <Testimonialsclient/>
                <Faqcontact/>
            </Fragment>
        );
    }
}

export default Content;
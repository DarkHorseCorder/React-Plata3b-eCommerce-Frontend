import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Featuredpost from './Featuredpost';
import Fresharrivals from './Fresharrivals';
import Icons from './Icons';
import Cta from './Cta';
import Toppicks from './Toppicks';
import Blogpost from './Blogpost';
import Topbanner from './Topbanner';

class Content extends Component {
    render() { 
        return (
            <Fragment>
                <Topbanner/>
                 <Banner/>
                 <Icons/>
                 <Fresharrivals/>
                 <Featuredpost/>
                 <div className="section pt-0">
                     <Cta/>
                 </div>
                 <Toppicks/>
                 <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;
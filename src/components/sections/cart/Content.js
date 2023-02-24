import React, { Component, Fragment } from 'react';
import Cartblock from './Cartblock';
import Cartform from './Cartform';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Cartblock />
                <Cartform/>
            </Fragment>
        );
    }
}

export default Content;
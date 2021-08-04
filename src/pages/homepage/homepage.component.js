import React from 'react';
import { withRouter } from 'react-router';

import './homepage.styles.scss'

import Directory from '../../components/directory/directory.component'

const HomePage = () => {
    return <div className="hompage">
        <Directory />
    </div>
}

export default withRouter(HomePage)


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import configRouting from './configRouting';
import { map } from 'lodash';



// Compare this snippet from src\routes\configRouting.js:

export default function Routing(props) {
    const {setRefreshCheckLogin} = props;
    return (
        <Router>
            <Routes>
                {                    
                    map(configRouting, (route, index) => (
                        <Route key={index} path={route.path} exact={route.exact} element={<route.page setRefreshCheckLogin={setRefreshCheckLogin}  />} />
                    ))
                }

            </Routes>
        </Router>
    )
}
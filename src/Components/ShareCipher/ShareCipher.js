import React from 'react';
import { BrowserRouter as Router, Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Anime from 'react-anime';
import CreateCipher from './CreateCipher';
import CrackCipher from './CrackCipher';

// ShareCipher drives the interactive "sharable cipher"
// portion of the module.
function ShareCipher() {
    let match = useRouteMatch();

    return (
        <Router>
            <Switch>
                <Route path={`${match.path}/create`}>
                    <Anime opacity={[0,1]}>
                        <CreateCipher />

                        <Link to={match.path}>
                            <button className='button is-large is-family-secondary has-text-weight-bold'>Go back</button>
                        </Link>
                    </Anime>    
                </Route>

                <Route path={`${match.path}/solve/:hash?`}>
                    <Anime opacity={[0,1]}>
                        <CrackCipher />

                        <Link to={match.path}>
                            <button className='button is-large is-family-secondary has-text-weight-bold'>Go back</button>
                        </Link>
                    </Anime>
                </Route>

                <Route path={match.path}>
                    <>
                        <h1 className='title'>Teach LA's Cipher Potluck</h1>
                        <div className='row_space'>
                            <Link to={`${match.path}/create`}>
                                <button className='button is-large is-family-secondary has-text-weight-bold'>Create a cipher!</button>
                            </Link>

                            <Link to={`${match.path}/solve`}>
                                <button className='button is-large is-family-secondary has-text-weight-bold'>Crack a cipher!</button>
                            </Link>
                        </div>
                    </>
                </Route>
            </Switch>
        </Router>
    );
}

export default ShareCipher;
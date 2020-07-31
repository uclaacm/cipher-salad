import React from 'react';
import { BrowserRouter as Router, Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Anime from 'react-anime';
import CreateCipher from './CreateCipher';
import CrackCipher from './CrackCipher';
import bbq from './barbecue.svg';
import './shareCipher.scss';

// ShareCipher drives the interactive "sharable cipher"
// portion of the module.
function ShareCipher() {
    let match = useRouteMatch();

    return (
        <Router>
            <div className='share-container'>
                <Switch>
                    <Route path={`${match.path}/create`}>
                        <Anime opacity={[0,1]}>
                            <div className='my-5'></div>
                            
                            <CreateCipher />
                            
                            <div className='my-5'></div>

                            <div className='columns is-centered'>
                                <Link to={match.path} className='button is-large is-family-secondary has-text-weight-bold'>
                                    Go back
                                </Link>
                            </div>
                        </Anime>
                    </Route>

                    <Route path={`${match.path}/solve/:hash?`}>
                        <Anime opacity={[0,1]}>
                            <div className='my-5'></div>

                            <CrackCipher />

                            <div className='my-5'></div>

                            <div className='columns is-centered'>
                                <Link to={match.path} className='button is-large is-family-secondary has-text-weight-bold'>
                                    Go back
                                </Link>
                            </div>
                        </Anime>
                    </Route>

                    <Route path={match.path}>
                        <section className='hero is-fullheight'>
                            <div className='hero-body'>
                                <div className='columns is-centered is-vcentered'>
                                    <div className='column'>
                                        <figure className='image is-square'>
                                            <img src={bbq} alt='person barbecuing' />
                                        </figure>
                                    </div>

                                    <div className='column'>
                                        <h1 className='title is-size-1'>Teach LA's Cipher Salad Bar</h1>

                                        <Link to={`${match.path}/create`} className='button is-large is-family-secondary has-text-weight-bold'>
                                            Create a cipher!
                                        </Link>
                                        <Link to={`${match.path}/solve`} className='button is-large is-family-secondary has-text-weight-bold'>
                                            Crack a cipher!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default ShareCipher;
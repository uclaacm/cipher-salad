import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import './VertNav.scss';

/**
 * Generate a vertical navbar for the given set of components.
 * Scrollspies on each particular element passed as an ID in an
 * array through props.navLinks.
 * 
 * If you have functions that you'd like to have called when a
 * particular ID is scrolled to, you may pass them as an object
 * of the form:
 * {
 *   firstID: (e) => { ... },
 *   otherID: (e) => { ... },
 *   anotherID: () => { ... },
 * }
 * with props.callbacks. The argument passed to each function, e,
 * is the target of the scroll event - the element the viewport
 * just hit.
 * 
 * You can use this argument to initiate targeted animations, for
 * example.
 */
export default function VertNav(props) {
  const [ hidden, setHidden ] = useState(true);

  const spyContents = props.navLinks.map(id => (
    <AnchorLink offset={-5} href={`#${id}`} tabIndex={10}>
      <FontAwesomeIcon size='2x' icon={faKey} alt='key' />
    </AnchorLink>
  ));
  
  return (
    <Scrollspy
      componentTag='nav'
      className={`vnav ${hidden ? ' vnav-hidden' : ''}`}
      items={props.navLinks}
      currentClassName='current-section'
      onUpdate={e => {
        if (!e)
          setHidden(true);
        else {
          if (props.callbacks && props.callbacks[e.id])
            props.callbacks[e.id](e);
          setHidden(false);
        }
      }}
    >
      {spyContents}
    </Scrollspy>
  );
}
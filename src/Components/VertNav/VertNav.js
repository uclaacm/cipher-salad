import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import './VertNav.scss';

function NavLink(props) {
  return (
    <AnchorLink href={props.href} className={props.className}>
      <FontAwesomeIcon size='2x' icon={faKey} />
    </AnchorLink>
  );
}

export default function VertNav(props) {
  const spyContents = props.navLinks.map(href => <NavLink href={`#${href}`} />);
  const [ hidden, setHidden ] = useState(true);
  
  return (
    <div className={`vnav-container ${hidden ? 'vnav-hidden' : ''}`}>
      <Scrollspy
        items={props.navLinks}
        currentClassName='current-section'
        componentTag='div'
        className='vnav'
        onUpdate={e => {
          if (!e)
            setHidden(true);
          else
            setHidden(false);
        }}
      >
        {spyContents}
      </Scrollspy>
    </div>
  );
}
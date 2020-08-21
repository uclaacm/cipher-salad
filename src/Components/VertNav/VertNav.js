import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import './VertNav.scss';

export default function VertNav(props) {
  const [ hidden, setHidden ] = useState(true);

  const spyContents = props.navLinks.map(id => (
    <AnchorLink offset={-5} href={`#${id}`}>
      <FontAwesomeIcon size='2x' icon={faKey} />
    </AnchorLink>
  ));
  
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
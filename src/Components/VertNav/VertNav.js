import React from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './VertNav.css';

function NavLink(props) {
  return (
    <AnchorLink href={props.href}>
      <FontAwesomeIcon size='2x' icon={String(props.className).includes('current-section') ? faDotCircle : faCircle } />
    </AnchorLink>
  );
}

export default function VertNav(props) {
  const spyContents = props.navLinks.map(href => <NavLink href={`#${href}`} />);

  return (
    <div>
      <Scrollspy
        items={props.navLinks}
        currentClassName='current-section'
        componentTag='div'
        className='vnav'
      >
        {spyContents}
      </Scrollspy>
    </div>
  );
}
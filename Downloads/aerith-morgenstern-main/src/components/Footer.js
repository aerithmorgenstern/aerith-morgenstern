import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    <div className='overall-footer'>
      <section class='social-media'>
          <div class='footer-logo'>
           
          </div>
          <div class='social-icons'>
          <a
            class='social-icon-link instagram'
            href='https://www.instagram.com/aerithmorgenstern/'
            target='_blank'
            aria-label='Instagram'
            >
            <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link tumblr'
              href='https://www.tumblr.com/aerithmorgenstern'
              target='_blank'
              aria-label='Tumblr'
            >
              <i class='fab fa-tumblr' size='2xs' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/aerimorgenstern'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link pinterest'
              href='https://www.pinterest.com/aerithmorgenstern/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-pinterest-p' />
            </a>
          </div>
          <p class='website-rights'>Aerith Morgenstern © 2024</p>
      </section>
    </div>
    </div>
  );
}

export default Footer;
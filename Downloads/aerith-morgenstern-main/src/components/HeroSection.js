import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <image src='images/ocean-image.jpg'/>
      <div className='intro'>
        <p> <br/><br/><br/><br/><br/><br/><br/>darling readers, </p>

        <p> i hope that, within my stories, you will find<br/>the magic and adventure that i fell in<br/>love with once upon a time.</p>

        <p> yours forever,<br/> aerith morgenstern<br/></p>
      </div>
      <div className='contact-info'>
        <h1 size="sm">
        <br/>
            CONTACT
        </h1>
        <p> <br/>Have an AU idea? Like my writing but don't<br/>see your fandom? Don't sweat! Drop an email<br/>or PM me on any of my socials. </p>

        <p> NOTE: Voting on any of the "Coming Soon"<br/>projects is welcome! Feel free to either<br/>PM or email me with the story name and<br/>fandom in the subject line!</p>
      </div>
      <div className='email'>
        <p>aerithmorgenstern@gmail.com </p>
      </div>
    </div>
  );
}

export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      {/* <div className="cards__item__img">
        <image src='images/destiny.jpg'/>

      </div> */}
      
      {/* <li className='cards__item'> */}
            <div className='cards__item__inner'>
                <img className='cards__item__img'
                //   alt='Travel Image'
                src={props.src}
                />
                <div className="text">
                    <h3 className='book__title'>{props.titletext}
                    </h3>
                    <br/>
                    <p className='cards__item__text'>{props.au}
                    </p>
                    <p className='cards__item__text'>{props.quote}
                    </p>
                    <p className='cards__item__text'>{props.infotext1}
                    </p>
                    <p className='cards__item__text'>{props.infotext2}
                    </p>
                    <p className='cards__item__text'>{props.infotext3}
                    </p>
                    <p className='cards__item__text'>{props.infotext4}
                    </p>
                    <p className='cards__item__text'>{props.infotext5}
                    </p>
                    <p className='cards__item__text'>{props.endgame}
                    </p>
                {/* <div class='link-wrap'>
                <a
                    className='Wattpad'
                    href='https://github.com/jocelynwyu'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'
                  >
                    <i className='Wattpad' />
                    <img className='Wattpad'
                     src={props.src1}></img>
                  </a>
                  <a
                    className='Quotev'
                    href='https://github.com/jocelynwyu'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'
                  >
                    <i className='Quotev' />
                    <img className='Quotev'
                     src={props.src2}></img>
                  </a>
                  <a
                    className='AO3'
                    href='https://github.com/jocelynwyu'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'
                  >
                    <i className='AO3' />
                    <img className='AO3'
                     src={props.src3}></img>
                  </a>
                    </div> */}
<div className='link-wrap'>
  {props.links && props.links.map((link, index) => (
    <a
      key={index}
      className={link.label}
      href={link.url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={link.label}
    >
      <i className={link.label} />
      <img className={link.label} src={link.imageSrc} alt={link.label} />
    </a>
  ))}
</div>

                </div>
                
            </div>
          
          {/* <div className='cards__item__info'> */}
          
            
          {/* </div> */}
      {/* </li> */}
    </>
  );
}

export default CardItem;
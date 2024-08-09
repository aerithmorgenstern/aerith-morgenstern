import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><br/>Stories</h1>
            <ul className='cards__items'>
            <div className='rows'>
            <CardItem
              src={require('./images/destiny.png')}
              titletext= "DESTINY"
              au= "FEM!PERCY AU!"
              quote="❝ YOU'RE NOT GETTING AWAY FROM ME. NEVER AGAIN. ❞"
              infotext1="In which Percy Jackson is thrust into the world of Greek Mythology and learns that the gods and monsters of old still walk the world of men.              "
              infotext2= "Destiny may be a beautiful thing, but for Percy, it's a terrifying force to be reckoned with."
              infotext3= "After all, she wasn't supposed to be born, and a hero's destiny is always tragic."
              endgame = "[Will Solace x fem!Percy Jackson]"
              links={[
                { label: 'Wattpad', url: 'https://www.wattpad.com/story/195588539-destiny-↳-will-solace', imageSrc: require('./images/Wattpad.png') },
                { label: 'Quotev', url: 'https://www.quotev.com/story/12863275/DESTINY-Will-Solace/1', imageSrc: require('./images/Quotev.png') },
                { label: 'Fanfiction', url: 'https://www.fanfiction.net/s/12433068/1/DESTINY', imageSrc: require('./images/Fanfiction.png') },
              ]}
            />
            <CardItem
              src={require('./images/secrets.png')}
              titletext= "SECRETS"
              au= "NUMBER 8 AU!"
              quote="❝ IT WAS IN THAT MOMENT THAT PERCY REALIZED SHE WAS HOPELESSLY IN LOVE WITH FIVE HARGREEVES. ❞"
              infotext1="In which Percy Hargreeves returns to her childhood home for her father's memorial, but finds more than what she bargained for."
              infotext2= "An impending apocalypse, a race against time, her conflicting feelings for a certain time-traveller, and secrets."
              infotext3= "So many secrets."
              infotext4="What could go wrong?"
              infotext5="Well... everything."
              endgame = "[Five Hargreeves x fem!oc]"
              links={[
                { label: 'Wattpad', url: 'https://www.wattpad.com/story/235877393-secrets-↳-five-hargreeves', imageSrc: require('./images/Wattpad.png') },
                { label: 'Quotev', url: 'https://www.quotev.com/story/13083414/SECRETS-Five-Hargreeves/1', imageSrc: require('./images/Quotev.png') },
                { label: 'Fanfiction', url: 'https://www.fanfiction.net/s/13703804/1/SECRETS-l-ON-HOLD', imageSrc: require('./images/Fanfiction.png') },
              ]}
            />
          </div>
          <div>
          <div className='not-rows'>
          <CardItem
              src={require('./images/falling.png')}
              titletext= "FALLING"
              au= "REINCARCATION AU!"
              quote="❝ AIRERAUMONIS FOUND THAT SHE LOVED IT WHEN GLORFINDEL SMILED. ❞"
              infotext1="In which two elves once of Gondolin and now of Rivendell find themselves a part of a Fellowship that will determine the fate of Middle-Earth."
              infotext2= "Time is ticking, Sauron is rising, war is coming, and... Gondor is falling."
              infotext3= "The war has begun."
              infotext4="And may the best side win."
              endgame = "[Glorfindel x fem!oc]"
              links={[
                { label: 'Wattpad', url: 'https://www.wattpad.com/story/260216270-falling-↳-glorfindel', imageSrc: require('./images/Wattpad.png') },
                { label: 'AO3', url: 'https://archiveofourown.org/works/35268814/chapters/87893575', imageSrc: require('./images/AO3.png') },
              ]}
              >
              </CardItem>
              
          </div>
          </div>
          </ul>
          <h1><br/>Coming Soon...</h1>
          {/* <h2 style={{textAlign: 'center'}}><br/>None so far! Check back in a while.</h2> */}
            <ul className='cards__items'>
            <div className='single-rows'>
            <CardItem
              src={require('./images/rebellion.png')}
              titletext= "REBELLION"
              au= "CHILDHOOD ENEMIES AU!"
              quote="❝ DAPHNE WONDERED HOW CORIOLANUS' NAME TASTED LIKE HEAVEN. ❞"
              infotext1="In which Daphne Nightingale and Coriolanus Snow pay for both of their fathers' crimes in the Hunger Games and with each other."
              infotext2= "They may dislike each other, but Daphne's only chance at victory is Coriolanus, and his is her."
              infotext3= "After all, her name is synonymous with rebels and rebellion, and she'll need Coriolanus if she wants to survive."
              // infotext4="Her name is synonymous with rebels and rebellion, and she'll need to play to survive."
              endgame = "[Coriolanus Snow x fem!oc]"
              links={[
                { label: 'Wattpad', url: 'https://www.wattpad.com/story/357107269-rebellion-↳-coriolanus-snow-coming-soon', imageSrc: require('./images/Wattpad.png') },
                { label: 'AO3', url: 'https://archiveofourown.org/works/56935810/chapters/144777124', imageSrc: require('./images/AO3.png') },
              ]}
            />
            {/* <CardItem
              src={require('./images/justice.png')}
              titletext= "JUSTICE"
              au= "JON'S TWIN AU!"
            //   quote="❝ YOU'RE NOT GETTING AWAY FROM ME. NEVER AGAIN. ❞"
              infotext1="In which Rosaline Snow and Jaime Lannister decide that if the world is going to be cruel anyway, they might as well have fun."
              infotext2= "There is no justice in the game of thrones."
              infotext3= "When you play it, you win or you die."
              endgame = "[Jaime Lannister x fem!oc]"
            /> */}
            
            {/* <CardItem
              src={require('./images/angelic.png')}
              titletext= "ANGELIC"
              au= "TIME-TRAVELING AU!"
            //   quote="❝ IT WAS IN THAT MOMENT THAT PERCY REALIZED SHE WAS HOPELESSLY IN LOVE WITH FIVE HARGREEVES. ❞"
              infotext1="In which Helena Morgenstern, not-quite last of her name anymore, plays with fire and discovers that even angels can be burned."
              infotext2= "Her father's experiments have left her the most powerful shadowhunter in the nineteenth-century. Too bad she's got memory gaps from this era.​"
              infotext3= "But perhaps there's more to her than she thought."
              infotext4="After all, she's too angelic, even for a shadowhunter."
              endgame = "[Will Herondale x fem!oc]"
            /> */}
          </div>          
          </ul>
          <br/>
          <br/>
    </div>
    
    
  );
}

export default Cards;
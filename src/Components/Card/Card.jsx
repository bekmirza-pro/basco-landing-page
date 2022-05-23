import React from "react";
import ".././main.scss";
import "./_card.scss";
import sun1 from "../../Assets/images/sun 1.png";
function Card() {
  return (
    <div className='card__box'>
      <div className='card '>
        <div className='card__left'>
          <h2 className='card__left--title'>Statistik ma’lumot</h2>
          <p className='card__left--parag'>
            “Kompaniyalar osongina avtomatlashtirilishi <br /> mumkin bo’lgan
            topshiriq va vazifalarga qimmatli vaqtlarining 23% qismini havoga
            sovurishadi.”
          </p>
          <p className='card__left--author'>
            <a
              className='card__left--author'
              href='https://www.salesforce.com/form/conf/2017-connected-small-business-report/?leadcreated=true&redirect=true&chapter=&DriverCampaignId=7010M000001ybOqQAI&player=&FormCampaignId=7010M000001ybOMQAY&videoId=&playlistId=&mcloudHandlingInstructions=&landing_page=%2Fform%2Fpdf%2F2017-connected-small-business-report'>
              - Salesforce tadqiqoti
            </a>
          </p>
        </div>
        <div className='card__right'>
          <img src={sun1} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Card;

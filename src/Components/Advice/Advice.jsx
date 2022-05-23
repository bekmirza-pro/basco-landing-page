import React, { useState, useRef } from "react";
import "./_advice.scss";
import "../main.scss";
import star from "../../Assets/images/star (1).png";
import plus from "../../Assets/images/plus (1).png";
// import aylana from "../../Assets/images/aboutImg-1.png";
import halqa from "../../Assets/images/adviceImg-1.png";
import uchburchak from "../../Assets/images/adviceImg-2.png";
import sariq from "../../Assets/images/adviceImg-3.png";
import person from "../../Assets/images/person.png";
import { Fade } from "react-reveal";
function Advice() {
  const [shower, setShower] = useState(false);
  const btn = useRef();
  console.log(btn);
  const btnFunction = () => {
    setShower(!shower);
  };
  return (
    <div className='advice__box'>
      <section className='advice '>
        <div className='advice__left'>
          <h2 className='advice__left--title'>
            Qanday qilib samaradorlikni <br /> bir necha baravarga oshirib,{" "}
            <br />
            xarajatlarni qisqartirish mumkin?
          </h2>
          <p className='advice__left--parag--1'>
            Siz biznesingizda sarflayotgan vaqtingizni hech to’liq tahlil qilib
            chiqqanmisiz?
          </p>
          <p className='advice__left--parag--2'>
            Agar o’zingiz va xodimlaringizdagi samaradorlikdan ko’nglingiz
            to’lmayotgan <br /> bo’lsa…
          </p>
          <p className='advice__left--parag--3'>
            Yuqori ehtimol bilan siz asosiy vaqtingizni biznesingizdagi doimiy
            ravishda bajariladigan kichik, lekin murakkab ishlarga sarflayapsiz.
          </p>
          <p className='advice__left--parag--4'>
            Bu esa doimiy ravishda sizning energiyangiz va vaqtingizni havoga
            sovurib, hech qanday ijobiy o’zgarish olib kelmaydi.
          </p>
          {shower ? (
            ""
          ) : (
            <div className='advice__left--button'>
              <button onClick={() => btnFunction()}>
                {shower ? "Yopish" : "Davomini o`qish "}
              </button>
            </div>
          )}
          <img className='advice__left--img--1' src={star} alt='' />
          <img className='advice__left--img--2' src={plus} alt='' />
          {shower ? (
            <Fade top>
              <div className='hide__parag'>
                <p>
                  Bu xuddi terlab, qattiq yugurib ham joyidan siljimaslikka
                  o’xshaydi. Lekin… Siz bu muammoni birgina unikal yechim orqali
                  hal qilish mumkinligini bilasizmi?
                  <b>
                    {" "}
                    <br />
                    <br /> Unday bo’lsa, sizga yangiligimiz bor!{" "}
                  </b>{" "}
                  <br />
                  <br />
                  Siz, birgina, biznesingiz jarayonlarini avtomatlashtirish
                  orqali bu muammolarni oson bartaraf etishingiz mumkin. Bunda
                  sizga eng tez rivojlanib o’sib borayotgan kompaniyalarning
                  siri bo’lgan biznesni avtomatlashtirish dasturi yordam beradi.
                  <br /> <br />
                  ERP (Enterprise Resource Planning) dasturlari bugungi kunda
                  dunyoning yetakchi ishlab chiqarish, savdo va xizmat
                  ko’rsatish kompaniyalari tomonidan foydalaniladigan tizim
                  hisoblanadi.
                  <br /> <br /> Bu tizimni siz biznesingizda o’rnatganingizda…
                  Jarayonlarda yangi “portlash”ga guvoh bo’lasiz. Rost.
                  Samaradorlik bir necha baravarga oshganini guvohi bo’lasiz.
                  Xarajatlaringizni ko’paytirmasdan turib, daromadingizni bir
                  necha baravarga oshira olasiz.
                  <br /> <br /> Raqobatchilaringiz sizni o’zlari uchun yangidan
                  kashf qilishadi. Bozorda sizga o’xshagan kuchli, xavfli
                  o’yinchi paydo bo’lganiga amin bo’lishadi. Mamnun
                  mijozlaringiz soni oshib, qisqa muddat ichida bozorni egallab
                  olishingiz ham mumkin bo’ladi. Va o’zingiz uchun yangi
                  bozorlarni va imkoniyatlarni ochishingiz mumkin bo’ladi.
                </p>
                {shower ? (
                  <div id='btn' className='advice__left--button'>
                    <button ref={btn}>
                      {shower
                        ? "Imkoniyat bilan tanishish"
                        : "Davomini o`qish "}
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Fade>
          ) : (
            ""
          )}
        </div>
        <div className='advice__right'>
          <img className='advice__right--img' src={person} alt='' />
          <div className='advice__right--card'>
            <div className='advice__right--card--left'>
              <h4 className='advice__right--card--left--title'>
                So`ngi bir oyda
              </h4>
              <h2 className='advice__right--card--left--number'>29%</h2>
              <p className='advice__right--card--left--description'>
                Xarajatlar
              </p>
            </div>
            <div className='advice__right--card--right'>
              <h2 className='advice__right--card--right--number'>+35</h2>
              <p className='advice__right--card--right--description'>
                Samaradorlik
              </p>
            </div>
            <img
              className='advice__right--card--img--1'
              src={uchburchak}
              alt=''
            />
            <img className='advice__right--card--img--2' src={sariq} alt='' />
          </div>
          <img className='advice__right--img--1' src={halqa} alt='' />
          {/* <img className="advice__right--img--2" src={aylana} alt="" /> */}
        </div>
      </section>
    </div>
  );
}

export default Advice;

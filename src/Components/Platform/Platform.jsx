import React, { useState } from "react";
import "..//main.scss";
import "./_platform.scss";
import img1 from "../../Assets/images/platformImg-1.png";
import img2 from "../../Assets/images/platformImg-2.png";
import img3 from "../../Assets/images/platformImg-3.png";
import play from "../../Assets/images/platformImg-4.png";
import star from "../../Assets/images/star (1).png";
import plus from "../../Assets/images/plus (1).png";
import sariq from "../../Assets/images/adviceImg-3.png";
import halqa from "../../Assets/images/adviceImg-1.png";
import { Fade } from "react-reveal";
import Modal from "../../UI/Modal/Modal";
function Platform() {
  const [shower, setShower] = useState(false);
  const [showerModal, setShowerModal] = useState(false);
  const url = (
    <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/94BvSTTEWfk'
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen></iframe>
  );
  return (
    <section className='platform '>
      <div className='platform__left'>
        <h2 className='platform__left--title'>
          Tanishing! Basco ERP <br /> platformasi
        </h2>
        <p className='platform__left--parag--1'>
          (Ehtiyot bo’ling! Bu platforma biznesingizni butunlayga o’zgartirib
          yuborishi mumkin!)
          <br />
          <br />
        </p>
        <br />
        <p className='platform__left--parag--2'>
          Ha, siz to’g’ri o’qidingiz… <br />
          <br />
        </p>
        <p className='platform__left--parag--3'>
          Basco ERP platformasini kompaniyangizga joriy qilganingizda hech narsa
          avvalgidek bo’lmaydi. Samaradorlik oshadi, xarajatlar kamayadi va
          kompaniyangiz raqobat- chilaringizni hayron qoldirishni boshlaydi.
          <br />
          <br />
        </p>
        <p className='platform__left--parag--4'>
          Basco ERP platformasi kompaniyangizdagi muhim fundamental jarayonlarni
          samarali boshqarish va avtomatlashtirish imkoniyatini beradi.
        </p>
        {shower ? (
          <Fade top>
            <div className='hides__parag'>
              <p>
                <p className='platform__left--parag--4'>
                  Bu bilan esa o’sha zahotiyoq biznesingizdagi operatsion va
                  moliyaviy holatni yaqqol ko’rish imkoniyatiga ega bo’lasiz.
                  Holatni aniq ko’ra olish esa to’g’ri va tezkor qarorlarni
                  qabul qilishingizga yordam beradi. <br /> <br />
                </p>
                <p className='platform__left--parag--4'>
                  Bu orqali o’z-o’zidan moliyaviy holatingizni va
                  samaradorligingizni bir necha baravarga oshirishingiz mumkin
                  degani. <br /> <br />
                </p>
                <p className='platform__left--parag--4'>
                  Yagona tizim orqali biznesingizdagi butun boshli mijozlar
                  bilan munosabatlar, savdo jarayonlari, xodimlar bilan bog’liq
                  barcha ma’lumotlar, kompaniyaning barcha turdagi
                  hisob-kitoblaridan tortib… <br /> <br />
                </p>
                <p className='platform__left--parag--4'>
                  Skladdagi tayyor mahsulotlar harakatigacha bo’lgan aniq
                  ma’lumotlarni nazorat qilishingiz va boshqarishingiz mumkin
                  bo’ladi. <br /> <br />
                </p>
                <p className='platform__left--parag--4'>
                  Ma’lumotlarning aniqligi sabab siz tez va to’g’ri qarorlarni
                  qabul qilish imkoniyatiga ega bo’lasiz. <br />
                </p>
                <p className='platform__left--parag--4'>
                  Vaqtingizni biznesingizga to’g’ridan-to’g’ri foyda olib
                  kelmaydigan ishlarga sarflashdan to’xtab… <br /> <br />
                </p>
                <p className='platform__left--parag--4'>
                  Bank hisob-raqamingizda, haqiqatda, ijobiy o’zgarish qiladigan
                  va kompaniyangizning bozordagi ulushini oshiradigan muhim
                  ishlarga diqqat qila boshlaysiz. <br /> <br />
                </p>
                <p className='platform__left--parag--4'>
                  Xo’sh, qanday qilib ushbu imkoniyatga ega bo’lishingiz mumkin?
                  <br />
                  <br />
                </p>
                <p className='platform__left--parag--4'>
                  Shunchaki, quyidagi havola orqali ma’lumotlaringizni
                  qoldiring.
                  <br />
                </p>
                {shower ? (
                  <div className='platform__left--more--button'>
                    <button>
                      {shower
                        ? " Mutaxassis bilan bog’lanish"
                        : "Davomini o`qish "}
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>
          </Fade>
        ) : (
          ""
        )}
        {shower ? (
          ""
        ) : (
          <div className='platform__left--more--button'>
            <button onClick={() => setShower(!shower)}>
              {shower ? "Yopish" : "Davomini o`qish "}
            </button>
          </div>
        )}
        <img className='platform__left--img--1' src={star} alt='' />
        <img className='platform__left--img--2' src={plus} alt='' />
      </div>
      <div className='platform__right'>
        <img className='platform__right--img--1' src={img1} alt='' />
        <img className='platform__right--img--2' src={img2} alt='' />
        <img className='platform__right--img--3' src={img3} alt='' />
        <img className='platform__right--img--4' src={star} alt='' />
        <img className='platform__right--img--5' src={plus} alt='' />
        <img className='platform__right--img--6' src={halqa} alt='' />
        <img className='platform__right--img--7' src={sariq} alt='' />
        <div className='platform__right--button'>
          <p onClick={() => setShowerModal(!showerModal)}> Videoni ko’rish</p>
          <img src={play} alt='' />
        </div>
      </div>

      {showerModal ? (
        <div className='platform__modal'>
          <Modal shower={showerModal} setShower={setShowerModal} url={url} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Platform;

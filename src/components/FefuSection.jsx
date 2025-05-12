import React from "react";
import img1 from "../img/fefu_1.png";
import img2 from "../img/fefu_2.png";
import img3 from "../img/fefu_3.png";

export default function FefuSection() {
  return (
    <section className="section-fefu">
      <div className="fefu-container">
        <h2 className="fefu-title">ДВФУ – интеллектуальная арена<br/>для чемпионов!</h2>
        <p className="fefu-text">
          Кампус Дальневосточного федерального университета – ведущая площадка масштабных событий,
          где наука встречается со спортом. Именно здесь, в&nbsp;самом современном образовательном
          центре Дальнего Востока, пройдёт Чемпионат России по&nbsp;спидкубингу!
        </p>

        <div className="fefu-gallery">
          <img src={img1} alt="Кампус ДВФУ 1" className="fefu-image" loading="lazy"/>
          <img src={img2} alt="Кампус ДВФУ 2" className="fefu-image" loading="lazy"/>
          <img src={img3} alt="Кампус ДВФУ 3" className="fefu-image" loading="lazy"/>
        </div>
      </div>
    </section>
  );
}

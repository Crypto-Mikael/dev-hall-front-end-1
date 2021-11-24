import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about-field">
      <div className="about-text">
        <h1>Nossa iniciativa</h1>
        <p>
          Somos desenvolvedores que se dedicam a fazer
          projetos perfeitos e entregar valor para todos
          os seus clientes. Gostamos de ver clientes satisfeitos 
          com projetos feitos com carinho, atenção e qualidade altíssima.
        </p>
      </div>
      <img
        alt="man thinking"
        src="https://s3-alpha-sig.figma.com/img/f39b/a4ee/44b2597fbdbb3ca777d1f477fa67b73b?Expires=1638748800&Signature=E3fgHnWRzmqKmlrhb8O-AL-n1DtURkXqPN8e4qLVms2IOt-Ymnk7A7Dr7hvvViHQdbSKxq-TmSBgVbcUwThGT1LG7CMEu5p3nGRYl85DGS~ZMuAptBSC~YYcVRiLqyiejBZfKmgHtf4pK0x2E~qv9mvtgpdmFJQTCHRBU8b7gJCRIkqJEfJY4ONJ55sBykh1Jg3KL2sOeBs3olduUIkGcBt8LJv~PoLAxXwHt9tT70gj90guomwVdZsJdNyPSWhdQLYPSn~8oHWerMJvPikhwXPYi07ySfKgKwz6Rq02QxzletdnDHXjxJOMR5KMA2lWogZMpGnjgJXXgTB08M-faQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
    </section>
  );
}

export default About;

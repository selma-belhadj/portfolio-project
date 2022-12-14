import React from 'react';
import Resume from '../../assets/Resume-SelmaBelhadj.pdf';

const CTA = () => (
  <div className="cta">
    <a href={Resume} download className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">let&apos;s talk</a>
  </div>
);

export default CTA;

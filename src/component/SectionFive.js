import React from 'react';
import '../css/SectionFive.css';
import IconSectionFive from './InconsSectionFive';
import Google from '../img/Google.gif'
import Tencent from '../img/Tencent.png';
import Ebay from '../img/Ebay.png';
import Philips from '../img/Philips.png';
import Square from '../img/Square.png';
import Nubank from '../img/Nubank.png';
import Abbey from '../img/Abbey.png';
import Baidu from '../img/Baidu.png';
import ByteDance from '../img/Bytedance.png';
import Alibaba from '../img/Alibaba.png';
import Realtor from '../img/Realtor.png';


function SectionFive() {
  return (
    <div className="sectionfive">
      <div className='items'>

      <IconSectionFive
      picture={Google}
      />
      <IconSectionFive
      picture={Tencent}
      />
      <IconSectionFive
      picture={Ebay}
      /> 
      <IconSectionFive
      picture={Philips}
      /> 
      <IconSectionFive
      picture={Square}
      /> 
      <IconSectionFive
      picture={Nubank}
      /> 
      <IconSectionFive
      picture={Abbey}
      /> 
      <IconSectionFive
      picture={Baidu}
      />
      <IconSectionFive
      picture={ByteDance}
      /> 
      <IconSectionFive
      picture={Alibaba}
      />
      <IconSectionFive
      picture={Realtor}
      />
      
       
      </div>

      

    </div>
  );
}

export default SectionFive;

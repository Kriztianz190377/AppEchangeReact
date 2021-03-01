import '../css/SectionSix.css';
import IconFeature from './InconsFeature';
import Highlights1 from '../img/Highlights1.gif';
import Highlights2 from '../img/Highlights2.gif';
import Highlights3 from '../img/Highlights3.gif';
import Highlights4 from '../img/Highlights4.gif';
import Highlights5 from '../img/Highlights5.gif';
import Highlights6 from '../img/Highlights6.gif';



function SexcionSix() {


  
  return (
    <div className="highlights">

      
      <div className="featureBoxs">
        <IconFeature 
          picture={Highlights1}          
        />
        <IconFeature
          picture={Highlights2}
          />
        <IconFeature
          picture={Highlights3}        
        />
                <IconFeature
          picture={Highlights4}
          
        />
        <IconFeature
          picture={Highlights5}
          
        />
        <IconFeature
          picture={Highlights6}
        />

      </div>

      
      

      </div>
  );
}

export default SexcionSix;

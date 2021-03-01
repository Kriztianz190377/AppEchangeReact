import '../css/SectionFour.css';
import IconFeature from '../component/InconsFeature';
import Feature1 from '../img/Features1.png';
import Feature2 from '../img/Features2.png';
import Feature3 from '../img/Features3.png';
import Feature4 from '../img/Features4.png';
import Feature5 from '../img/Features5.png';
import Feature6 from '../img/Features6.png';
import FluterBox from '../img/flutterBoxIcon.png'


function Feature() {
  return (
    <div className="feature">

      <h2 id="features">Features</h2>
      <div className="featureBoxs">
        <IconFeature
          picture={Feature1}
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
        />

        <IconFeature
          picture={Feature2}
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
        />
        <IconFeature
          picture={Feature3}
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
        />
        <IconFeature
          picture={Feature4}
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
        />
        <IconFeature
          picture={Feature5}
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
        />
        <IconFeature
          picture={Feature6}
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
        />

      </div>

      <div id="flutter">
        <div className="flutter-box">
          <img src={FluterBox} alt="/"  style={{width:'750px', height:'410px'}}/>
        </div>
        <div className="flutter-box" >
          <p>Flutter Framework and Dart Programming Language are at
          the core of OmniBro Front-End interface. Developed by
          Google to build Mobile, Desktop, Server and Web
          Applications of the next generation, Flutter became a
          perfect match for OmniBro.</p> <br />
          <p>Building beautiful and natively compiled applications,
          OmniBro team chose Flutter Framework as a cost efficient
          solution for application development and maintenance.
          Join the ranks with some of the world's leading brands,
                            IT giants and FinTech companies.</p>
        </div>
      </div>

      </div>
  );
}

export default Feature;

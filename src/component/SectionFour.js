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
          <img src={FluterBox} alt="/" style={{ width: '750px', height: '410px' }} />
        </div>
        <div className="flutter-box" >
          <p>is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum</p> <br />
          <p>is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </div>

    </div>
  );
}

export default Feature;

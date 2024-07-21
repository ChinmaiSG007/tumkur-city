import WardImg from './../../images/tumkur boundary.jpg'
import PopUpBox from "./PopUpBox";
import PopUpBoxFour from './PopUpBoxFour';
import PopUpBoxSec from './PopUpBoxSec';
import PopUpBoxThir from './PopUpBoxThir';

const ImageComponent = () => {
  return (
    <div>
      <div className="container border-t-4">
        <p className="text-xl font-bold py-6 text-left">MAP WITH WARD MARKERS</p>
        <img src={WardImg} alt="Ward Sample" /> 
        <PopUpBox position={'first'}/>
        <PopUpBoxSec position={'second'}/>
        <PopUpBoxThir position={'third'}/>
        <PopUpBoxFour position={'four'}/>
        <div className="control" id="c1"></div>
        <div className="test"></div>
      </div>
    </div>
  );
};

export default ImageComponent;

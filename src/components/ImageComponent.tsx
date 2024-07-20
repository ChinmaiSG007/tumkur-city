import Test from "./../../images/Test.png";
import { MapPin } from "lucide-react";

const ImageComponent = () => {
  return (
    <div>
      <div className="container">
        <img src={Test} />
        <MapPin className="parent-pin first" />
        <MapPin className="parent-pin second" />
        <div className="control" id="c1"></div>
        <div className="test"></div>
      </div>
    </div>
  );
};

export default ImageComponent;

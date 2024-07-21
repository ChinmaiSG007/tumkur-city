import { MapPin } from "lucide-react";
import { useState } from "react";

const MarkerReturn = () => {
  return (
    <div className="parent-pin four-m">
      <div className="box"></div>
    </div>
  );
};
const PopUpBoxFour = (position: any) => {
  const [isHovering, setIsHovering] = useState(false);
  console.log(position);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <div>
        {isHovering && <MarkerReturn />}
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <MapPin className={`parent-pin four`} />
        </div>
      </div>
    </div>
  );
};

export default PopUpBoxFour;

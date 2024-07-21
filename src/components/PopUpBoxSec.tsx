import { MapPin } from "lucide-react";
import { useState } from "react";

const MarkerReturn = () => {
  return (
    <div className="parent-pin second-m">
      <div className="box"></div>
    </div>
  );
};
const PopUpBoxSec = (position : any) => {
  const [isHovering, setIsHovering] = useState(false);
    console.log(position)
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <MapPin className={`parent-pin second`} />
        </div>

        {isHovering && <MarkerReturn />}
      </div>
    </div>
  );
};

export default PopUpBoxSec;

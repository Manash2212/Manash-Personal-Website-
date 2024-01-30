// import { FiMousePointer } from "react-icons/fi";
// import Person from "../../../public/person2.png";
import Img from "../../../public/M5.png";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moseXSpring = useSpring(x);
  const moseYSpring = useSpring(y);

  const rotateX = useTransform(moseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(moseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // console.rectog(e.clientX, e.clientY); This Number is REpresent the Mouse position is it(x-axiz or y-axis)

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    // console.log({ mouseX, mouseY });

    const xPerc = mouseX / width - 0.5;
    const yPerc = mouseY / height - 0.5;
    // console.log(xPerc);

    x.set(xPerc);
    y.set(yPerc);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className=" w-full rounded-xl "
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className=" inset-4 grid place-content-center  "
        >
          <img src={Img} alt="hover-effect" />
        </div>
      </motion.div>
    </>
  );
};

export default TiltCard;

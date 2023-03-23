import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProfileIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={44}
      viewBox="0 0 30 33"
      className=""
      {...props}
    >
      <Path d="M9.5 2.5C4.2 7.7 7.7 16 15.1 16c4.5 0 7.9-3.4 7.9-7.9C23 3.9 19.2 0 15 0c-1.9 0-4 .9-5.5 2.5zm8.6 2.4c2 1.6 2.2 2.3 1.4 4.7-.9 2.4-1.6 2.9-4.5 2.9s-3.6-.5-4.5-2.9c-.8-2.4-.6-3.1 1.4-4.7C13.2 3.9 14.6 3 15 3c.4 0 1.8.9 3.1 1.9zM2.4 22.5C.5 24.5 0 25.9.2 28.7.6 33.1 3 34.5 3 30.3c0-1.6.7-3.9 1.6-5.1C6 23.2 7 23 15 23s9 .2 10.4 2.2c.9 1.2 1.6 3.5 1.6 5.1 0 4.2 2.4 2.8 2.8-1.6.2-2.8-.3-4.2-2.2-6.2C25.3 20.2 24.4 20 15 20c-9.4 0-10.3.2-12.6 2.5z" />
    </Svg>
  );
}

export default SvgProfileIcon;

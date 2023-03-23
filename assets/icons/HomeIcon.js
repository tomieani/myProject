import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={44}
      viewBox="0 0 32 33"
      className=""
      {...props}
    >
      <Path d="M7.2 5.7L0 11.2v9.4C0 33.1-.1 33 15.1 33c6.6 0 12.9-.5 14-1 1.7-1 1.9-2.2 1.9-11V11l-7.3-5.5c-4.1-3-7.8-5.5-8.3-5.4-.5 0-4.2 2.5-8.2 5.6zM22 8.2l6 4.2V30h-5.9l-.3-7.3-.3-7.2h-12l-.3 7.3c-.3 7.3-.3 7.3-3 7-2.7-.3-2.7-.4-2.9-8.8L3 12.5l5.8-4.2C11.9 6 14.9 4 15.3 4c.4 0 3.5 1.9 6.7 4.2zM19 24v6h-6V18h6v6z" />
    </Svg>
  );
}

export default SvgHomeIcon;

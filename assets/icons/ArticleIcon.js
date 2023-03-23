import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArticleIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33.333}
      height={33.333}
      viewBox="0 0 25 25"
      className=""
      {...props}
    >
      <Path d="M5.9 2.3C-.2 6.4-1.7 12.8 2 18.8c7.8 12.7 27.4 2.7 21.6-11.1C20.7.6 12.3-2 5.9 2.3zm9.7.7c.8 0 2.6 1.1 3.9 2.5 3.5 3.4 3.5 10.2 0 13.8-5.2 5.1-13.4 3.7-16.1-2.9-1.3-3.2-1.4-4.2-.2-7.3 1.4-3.7 7-7.6 9.6-6.6.8.3 2 .5 2.8.5z" />
      <Path d="M11 9c0 1.3-.7 2-2 2-1.1 0-2 .5-2 1.1 0 .6.9 1.3 2 1.6 1.1.3 2 1.1 2 1.9 0 2.3 2.1 2.7 2.7.5.3-1.2 1.1-2.1 1.9-2.1 2.2 0 2.7-2.1.6-2.7-1.1-.2-2.2-1.3-2.5-2.4C13 6.4 11 6.5 11 9z" />
    </Svg>
  );
}

export default SvgArticleIcon;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgContinueIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={18.667}
      viewBox="0 0 18 14"
      className=""
      {...props}>
      <Path d="M10 .7c0 .4 1 1.7 2.2 3L14.3 6H7.2C3.1 6 0 6.4 0 7s3.1 1 7.2 1h7.1L12 10.5c-3.8 4-1.3 4.2 2.7.2L18.4 7 15 3.5C11.8.2 10-.8 10 .7z" />
    </Svg>
  );
}

export default SvgContinueIcon;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBackIconn(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={20}
      viewBox="0 0 18 15"
      className=""
      {...props}>
      <Path d="M3 3.5L-.4 7l3.7 3.7c4 4 6.5 3.8 2.7-.2L3.7 8h7.1c4.1 0 7.2-.4 7.2-1s-3.1-1-7.2-1H3.7l2.1-2.3C7 2.4 8 1.1 8 .7 8-.8 6.2.2 3 3.5z" />
    </Svg>
  );
}

export default SvgBackIconn;

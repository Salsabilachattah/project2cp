import Svg, { Path, Circle } from "react-native-svg";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../assets/colors";

function Logo() {
  const { isDarkMode } = useTheme();
  const writingColor=isDarkMode?colors.white:colors.darkBlue;
  return (
    <Svg
      width="94"
      height="27"
      viewBox="0 0 94 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        alignSelf: "center",
      }}
    >
      <Path
        d="M23.2089 5.13781C22.7166 4.4332 22.0132 3.88016 21.0987 3.47868C20.1529 3.0711 19.1344 2.85665 18.1036 2.84805C16.6854 2.84805 15.5336 3.12683 14.6482 3.68438C13.7629 4.24194 13.3183 5.00045 13.3147 5.95993C13.3147 6.86211 13.7431 7.51778 14.5999 7.92692C15.4567 8.33606 16.702 8.65882 18.3357 8.8952C19.3909 9.03874 20.4365 9.2448 21.467 9.51229C22.3615 9.75887 23.2237 10.1091 24.036 10.5557C24.8497 10.9834 25.5216 11.636 25.9706 12.4347C26.4135 13.2268 26.635 14.1712 26.635 15.2678C26.635 16.7352 26.2068 17.9583 25.3505 18.9372C24.5176 19.8998 23.4343 20.6159 22.2192 21.0071C20.9884 21.4085 19.6043 21.6091 18.0668 21.6086C13.8337 21.6086 10.8703 20.0523 9.17664 16.9398L11.6579 15.2955C12.9961 17.546 15.1422 18.6715 18.0961 18.672C18.9324 18.6803 19.7663 18.5816 20.5773 18.3783C21.3099 18.1911 21.978 17.8107 22.5112 17.2774C23.0531 16.7388 23.324 16.0685 23.324 15.2664C23.324 14.2289 22.8563 13.4607 21.921 12.9618C20.9857 12.4629 19.691 12.1056 18.0369 11.89C17.2183 11.7939 16.4052 11.6568 15.6006 11.4793C14.871 11.3061 14.1553 11.0799 13.459 10.8026C12.7107 10.509 12.1053 10.1567 11.6429 9.74573C11.1804 9.33479 10.7974 8.80182 10.4938 8.14683C10.1884 7.49094 10.0357 6.74235 10.0357 5.90106C10.0357 4.88339 10.2719 3.98301 10.7443 3.19991C11.2033 2.43209 11.8549 1.79583 12.6354 1.35336C13.4306 0.899254 14.2856 0.557641 15.1758 0.338394C16.1033 0.110325 17.0555 -0.00330461 18.011 7.31393e-05C21.6928 7.31393e-05 24.2622 1.15487 25.7194 3.46447L23.2089 5.13781Z"
        fill={writingColor}
      />
      <Path
        d="M35.8022 21.275V15.6501C35.8022 14.8611 35.5864 14.2002 35.1549 13.6675C34.7233 13.1348 34.1385 12.8684 33.4006 12.8684C32.6628 12.8684 32.0639 13.139 31.6042 13.6804C31.1445 14.2217 30.9149 14.8782 30.9153 15.6501V21.275H28.7643V11.0212H30.769L30.9153 12.3907C31.1758 11.8822 31.5979 11.4735 32.1161 11.2282C32.6409 10.9786 33.2158 10.8509 33.7975 10.8547C35.4258 10.8547 36.5047 11.5397 37.0343 12.9097C37.7858 11.5537 38.9621 10.8757 40.5632 10.8757C41.97 10.8757 43.0489 11.2909 43.8 12.1214C44.551 12.9518 44.927 14.1141 44.9279 15.6081V21.275H42.7557V15.6081C42.7557 14.8056 42.5608 14.1515 42.171 13.6458C41.7812 13.1402 41.2173 12.888 40.4794 12.8894C39.7279 12.8894 39.1223 13.1557 38.6626 13.6885C38.2029 14.2212 37.9733 14.8753 37.9737 15.6507V21.2756L35.8022 21.275Z"
        fill={writingColor}
      />
      <Path
        d="M55.9529 11.1501C55.9416 11.4442 55.9303 11.7374 55.9189 12.0297C55.1632 11.4532 54.2744 11.0739 53.3334 10.9264C52.3924 10.7789 51.4292 10.8679 50.5317 11.1853C49.7989 11.4183 49.1287 11.8132 48.5712 12.3403C48.3201 12.5756 48.0965 12.8385 47.9048 13.1238C47.2464 14.0093 46.8807 15.0761 46.8583 16.177C46.8358 17.2779 47.1577 18.3585 47.7796 19.2698C47.9872 19.6258 48.243 19.9519 48.5399 20.2387C48.8353 20.5261 49.1663 20.7748 49.5249 20.979C50.0208 21.2601 50.561 21.456 51.1226 21.5582C51.5572 21.6612 52.0025 21.7132 52.4493 21.7131C53.7178 21.7164 54.9504 21.2952 55.9489 20.5175C55.9647 20.8057 55.9802 21.0935 55.9951 21.3809H58.0414V11.1501H55.9529Z"
        fill={writingColor}
      />
      <Path
        d="M52.3433 19.6085C54.1382 19.6085 55.5933 18.1534 55.5933 16.3585C55.5933 14.5636 54.1382 13.1085 52.3433 13.1085C50.5483 13.1085 49.0933 14.5636 49.0933 16.3585C49.0933 18.1534 50.5483 19.6085 52.3433 19.6085Z"
        fill="#F3F0A6"
        stroke={isDarkMode?colors.darkBlue:"none"}
        strokeWidth={isDarkMode?"1":"0"}
      />
      <Path
        d="M62.9901 11.0415L63.1364 12.3907C63.7345 11.3392 64.7438 10.8135 66.1642 10.8135C67.208 10.8135 68.0571 11.104 68.7115 11.685L67.7306 13.5532C67.2178 13.1392 66.5743 12.9187 65.9137 12.9307C65.12 12.9307 64.4586 13.1729 63.9295 13.6574C63.4003 14.1419 63.136 14.8336 63.1364 15.7327V21.275H60.9854V11.0415H62.9901Z"
        fill={writingColor}
      />
      <Path
        d="M71.9694 9.02373H67.1663V6.92615H79.1101V9.02373H74.3274V21.4577H71.9694V9.02373Z"
        fill={writingColor}
        stroke={writingColor}
        strokeMiterlimit="10"
      />
      <Path
        d="M87.0983 12.3596C88.0935 13.3773 88.5911 14.6471 88.5911 16.1691C88.5911 17.7051 88.1005 18.9747 87.1194 19.9779C86.1383 20.9811 84.8469 21.4828 83.2454 21.4828C81.6571 21.4828 80.3762 20.9811 79.4028 19.9779C78.4294 18.9747 77.9422 17.706 77.9413 16.1718C77.9413 14.6358 78.4321 13.3626 79.4137 12.3522C80.3953 11.3417 81.6725 10.8365 83.2454 10.8365C84.8188 10.8347 86.1031 11.3424 87.0983 12.3596Z"
        fill={writingColor}
      />
      <Path
        d="M90.9927 21.275V6.74481H93.3071V21.275H90.9927Z"
        fill={writingColor}
      />
      <Path
        d="M2.85714 24.8572C4.4351 24.8572 5.71429 23.578 5.71429 22C5.71429 20.4221 4.4351 19.1429 2.85714 19.1429C1.27919 19.1429 0 20.4221 0 22C0 23.578 1.27919 24.8572 2.85714 24.8572Z"
        fill={writingColor}
      />
      <Path
        d="M83.25 19.3571C85.0449 19.3571 86.5 17.902 86.5 16.1071C86.5 14.3122 85.0449 12.8571 83.25 12.8571C81.4551 12.8571 80 14.3122 80 16.1071C80 17.902 81.4551 19.3571 83.25 19.3571Z"
        fill="#F3F0A6"
        stroke={isDarkMode?colors.darkBlue:"none"}
        strokeWidth={isDarkMode?"1":"0"}
      />
      <Path
        d="M25.814 8.32547C27.099 8.32547 28.1407 7.29001 28.1407 6.01271C28.1407 4.73541 27.099 3.69995 25.814 3.69995C24.529 3.69995 23.4873 4.73541 23.4873 6.01271C23.4873 7.29001 24.529 8.32547 25.814 8.32547Z"
        stroke={writingColor}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <Path
        d="M9.4584 16.6501C10.7434 16.6501 11.7851 15.6147 11.7851 14.3374C11.7851 13.0601 10.7434 12.0246 9.4584 12.0246C8.17341 12.0246 7.13171 13.0601 7.13171 14.3374C7.13171 15.6147 8.17341 16.6501 9.4584 16.6501Z"
        stroke={writingColor}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <Path
        d="M83.6432 20.978L83.6085 24.0188L81.8706 25.9703L53.9612 25.9872C53.4952 25.4797 53.0307 24.9733 52.5678 24.4681L52.546 19.9427"
        stroke={writingColor}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <Path
        d="M28.3458 6L50.3085 6.0521L52.1505 7.88309L52.1852 10.9956"
        stroke={writingColor}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <Path
        d="M7.33753 14.3247H3.9285L3 15.2307V19.863"
        stroke={writingColor}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </Svg>
  );
}

export default Logo;
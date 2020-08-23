import React from "react";
import styled from "styled-components";
import { useTheme } from "./hooks/useTheme";
import theme from "./theme/theme.ts";

const Logo = (props) => {
  const { dark } = useTheme();
  const themeState = dark ? theme("dark") : theme("light");
  return (
    <svg
      className={props.className}
      width="100"
      height="54"
      viewBox="-16 0 189 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="Rectangle 1"
        x="3"
        y="3"
        width="166"
        height="54"
        fill={themeState.background}
        stroke={themeState.body}
        strokeWidth="4"
      />
      <path
        id="_ishanks"
        d="M40.1836 56.3574H24.0645V53H40.1836V56.3574ZM46.9863 53H42.7148V33.9805H46.9863V53ZM42.4512 29.041C42.4512 28.3848 42.6562 27.8398 43.0664 27.4062C43.4883 26.9727 44.0859 26.7559 44.8594 26.7559C45.6328 26.7559 46.2305 26.9727 46.6523 27.4062C47.0742 27.8398 47.2852 28.3848 47.2852 29.041C47.2852 29.6855 47.0742 30.2246 46.6523 30.6582C46.2305 31.0801 45.6328 31.291 44.8594 31.291C44.0859 31.291 43.4883 31.0801 43.0664 30.6582C42.6562 30.2246 42.4512 29.6855 42.4512 29.041ZM62.3145 47.832C62.3145 47.0703 61.998 46.4902 61.3652 46.0918C60.7441 45.6934 59.707 45.3418 58.2539 45.0371C56.8008 44.7324 55.5879 44.3457 54.6152 43.877C52.4824 42.8457 51.416 41.3516 51.416 39.3945C51.416 37.7539 52.1074 36.3828 53.4902 35.2812C54.873 34.1797 56.6309 33.6289 58.7637 33.6289C61.0371 33.6289 62.8711 34.1914 64.2656 35.3164C65.6719 36.4414 66.375 37.9004 66.375 39.6934H62.1035C62.1035 38.873 61.7988 38.1934 61.1895 37.6543C60.5801 37.1035 59.7715 36.8281 58.7637 36.8281C57.8262 36.8281 57.0586 37.0449 56.4609 37.4785C55.875 37.9121 55.582 38.4922 55.582 39.2188C55.582 39.875 55.8574 40.3848 56.4082 40.748C56.959 41.1113 58.0723 41.4805 59.748 41.8555C61.4238 42.2188 62.7363 42.6582 63.6855 43.1738C64.6465 43.6777 65.3555 44.2871 65.8125 45.002C66.2812 45.7168 66.5156 46.584 66.5156 47.6035C66.5156 49.3145 65.8066 50.7031 64.3887 51.7695C62.9707 52.8242 61.1133 53.3516 58.8164 53.3516C57.2578 53.3516 55.8691 53.0703 54.6504 52.5078C53.4316 51.9453 52.4824 51.1719 51.8027 50.1875C51.123 49.2031 50.7832 48.1426 50.7832 47.0059H54.9316C54.9902 48.0137 55.3711 48.793 56.0742 49.3438C56.7773 49.8828 57.709 50.1523 58.8691 50.1523C59.9941 50.1523 60.8496 49.9414 61.4355 49.5195C62.0215 49.0859 62.3145 48.5234 62.3145 47.832ZM74.4609 36.0547C75.8555 34.4375 77.6191 33.6289 79.752 33.6289C83.8066 33.6289 85.8633 35.9434 85.9219 40.5723V53H81.6504V40.7305C81.6504 39.418 81.3633 38.4922 80.7891 37.9531C80.2266 37.4023 79.3945 37.127 78.293 37.127C76.582 37.127 75.3047 37.8887 74.4609 39.4121V53H70.1895V26H74.4609V36.0547ZM101.619 53C101.432 52.6367 101.268 52.0449 101.127 51.2246C99.7676 52.6426 98.1035 53.3516 96.1348 53.3516C94.2246 53.3516 92.666 52.8066 91.459 51.7168C90.252 50.627 89.6484 49.2793 89.6484 47.6738C89.6484 45.6465 90.3984 44.0938 91.8984 43.0156C93.4102 41.9258 95.5664 41.3809 98.3672 41.3809H100.986V40.1328C100.986 39.1484 100.711 38.3633 100.16 37.7773C99.6094 37.1797 98.7715 36.8809 97.6465 36.8809C96.6738 36.8809 95.877 37.127 95.2559 37.6191C94.6348 38.0996 94.3242 38.7148 94.3242 39.4648H90.0527C90.0527 38.4219 90.3984 37.4492 91.0898 36.5469C91.7812 35.6328 92.7188 34.918 93.9023 34.4023C95.0977 33.8867 96.4277 33.6289 97.8926 33.6289C100.119 33.6289 101.895 34.1914 103.219 35.3164C104.543 36.4297 105.223 38 105.258 40.0273V48.6055C105.258 50.3164 105.498 51.6816 105.979 52.7012V53H101.619ZM96.9258 49.9238C97.7695 49.9238 98.5605 49.7188 99.2988 49.3086C100.049 48.8984 100.611 48.3477 100.986 47.6562V44.0703H98.6836C97.1016 44.0703 95.9121 44.3457 95.1152 44.8965C94.3184 45.4473 93.9199 46.2266 93.9199 47.2344C93.9199 48.0547 94.1895 48.7109 94.7285 49.2031C95.2793 49.6836 96.0117 49.9238 96.9258 49.9238ZM113.695 33.9805L113.818 36.1777C115.225 34.4785 117.07 33.6289 119.355 33.6289C123.316 33.6289 125.332 35.8965 125.402 40.4316V53H121.131V40.6777C121.131 39.4707 120.867 38.5801 120.34 38.0059C119.824 37.4199 118.975 37.127 117.791 37.127C116.068 37.127 114.785 37.9062 113.941 39.4648V53H109.67V33.9805H113.695ZM135.949 44.8438L134.051 46.7949V53H129.779V26H134.051V41.5742L135.387 39.9043L140.643 33.9805H145.775L138.709 41.9082L146.531 53H141.592L135.949 44.8438ZM159.24 47.832C159.24 47.0703 158.924 46.4902 158.291 46.0918C157.67 45.6934 156.633 45.3418 155.18 45.0371C153.727 44.7324 152.514 44.3457 151.541 43.877C149.408 42.8457 148.342 41.3516 148.342 39.3945C148.342 37.7539 149.033 36.3828 150.416 35.2812C151.799 34.1797 153.557 33.6289 155.689 33.6289C157.963 33.6289 159.797 34.1914 161.191 35.3164C162.598 36.4414 163.301 37.9004 163.301 39.6934H159.029C159.029 38.873 158.725 38.1934 158.115 37.6543C157.506 37.1035 156.697 36.8281 155.689 36.8281C154.752 36.8281 153.984 37.0449 153.387 37.4785C152.801 37.9121 152.508 38.4922 152.508 39.2188C152.508 39.875 152.783 40.3848 153.334 40.748C153.885 41.1113 154.998 41.4805 156.674 41.8555C158.35 42.2188 159.662 42.6582 160.611 43.1738C161.572 43.6777 162.281 44.2871 162.738 45.002C163.207 45.7168 163.441 46.584 163.441 47.6035C163.441 49.3145 162.732 50.7031 161.314 51.7695C159.896 52.8242 158.039 53.3516 155.742 53.3516C154.184 53.3516 152.795 53.0703 151.576 52.5078C150.357 51.9453 149.408 51.1719 148.729 50.1875C148.049 49.2031 147.709 48.1426 147.709 47.0059H151.857C151.916 48.0137 152.297 48.793 153 49.3438C153.703 49.8828 154.635 50.1523 155.795 50.1523C156.92 50.1523 157.775 49.9414 158.361 49.5195C158.947 49.0859 159.24 48.5234 159.24 47.832Z"
        fill={themeState.body}
      />
    </svg>
  );
};

const StyledLogo = styled(Logo)`
  position: absolute;
  bottom: 0px;
  cursor: pointer;
  right: 0px;
  margin-right: 1.2rem;
  transform: scale(0.8);
`;
export default StyledLogo;

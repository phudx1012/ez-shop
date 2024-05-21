import React from "react";
import PropTypes from "prop-types";
const shapes = {
square: "rounded-[0px]",
circle: "rounded- [50%]",
round: "rounded-md"
};

const variants = {
fill: {
blue_gray_900_02: "bg-blue_gray-900_02 text-white-A700" ,
green_400: "bg-green-400 text-white-A700",
gray_50_05: "bg-gray-50_05 text-blue_gray-500",
gray_50_02: "bg-gray-50_02 text-blue_gray-700_01",
gray_100_04: "bg-gray-100_04 shadow-xs",
white_A700: "bg-white-A700",
green_A700_e5: "bg-green-A700_e5 text-white-A700",
red_400: "bg-red-400 text-gray-100_02",
green_A700_02: "bg-green-A700_02 text-white-A700",
orange_50: "bg-orange-50 text-amber-A700",
gray_50_01: "bg-gray-50_01",
red_50_01: "bg-red-50_01 text-red-900",
blue_50: "bg-blue-50 text-indigo-500",
gray_50_04: "bg-gray-50_04 text-light_blue-500",
gray_50: "bg-gray-50 text-pink-400",
gray_100_03:"bg- gray-100_03 text-blue-800",
gray_100_05:"bg-gray-100_05 text-blue_gray-900_02",
gray_100_01: "bg-gray-100_01 text-blue_gray-800",
gray_100_02: "bg-gray-100_02",
light_green_50: "bg-light_green-50 text-teal-800_02",
green_A700_11: "bg-green-A700_11",
},
outline: {
green_50_01: "border-green-50_01 border border-solid text-blue_gray-900_02",
green_A700_02: "border-green-A700_02 border-2 border-solid shadow-sm text-blue_gray-900_02",
gray_200_01: "border-gray-200_01 border-2 border-solid shadow-sm text-blue_gray-900_02",
blue_gray_50: "border-blue_gray-50 border-b border-solid text-blue_gray-500",
}
};
const sizes = {
"11x1": "h-[60px] px-[35px] text-sm",
"7x1": "h-[44px] px-[26px] text-xs",
lg: "h-[25px] px-[3px] text-sm",
xl: "h-[30px] px-3.5 text-[13px]",
"2x1": "h-[30px] px-2.5",
"12x1": "h-[72px] px-[25px] text-sm",
md: "h-[24px] px-[15px]",
"3x1": "h-[34px] px-2.5 text-[13px]",
"6x1": "h-[42px] px-[25px] text-[15px]",
xs: "h-[20px] px-0.5",
"4x1": "h-[34px] px-2",
"10x1": "h- [54px] px- [35px] text-base",
"9x1": "h-[51px] px-[35px] text-sm",
sm: "h-[22px] px-[7px] text-xs",
"5x1": "h-[40px] px-3",
"8x1": "h- [50px] px-[13px]",
};
const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "8xl",
    color = "green_A700_02",
    ...restProps
  }) => {
    return (
      <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shapes[shape] || "")} ${(sizes[size] || "")} ${(variants[variant]?.[color] || "")}`}
        {...restProps}
      >
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </button>
    );
  };
  Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "circle", "round"]),
    size: PropTypes.oneOf(Object.keys(sizes)),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(Object.keys(variants.fill).concat(Object.keys(variants.outline)))
  };
export { Button };

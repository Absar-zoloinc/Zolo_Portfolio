const ZIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 90 91"
      fill="none"
      className={props.parentClassName}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`fill-current ${
          props.colorTransition ? "transition-colors" : ""
        } ${props.className}`}
        d="M77.9901 31.8101L67.4601 38.4601L67.4701 38.4701L63.7301 40.8201L42.6001 54.0801L54.1201 61.2701L89.4001 39.4501L77.9901 31.8101Z"
      />
      <path
        className={`fill-current ${
          props.colorTransition ? "transition-colors" : ""
        } ${props.className}`}
        d="M71.95 27.76L43.64 8.78L43.65 8.77L30.53 0L30.63 14.08L30.68 21.91L35.34 17.2L61.2 34.31L71.95 27.76Z"
      />
      <path
        className={`fill-current ${
          props.colorTransition ? "transition-colors" : ""
        } ${props.className}`}
        d="M21.99 52.48L46.8 36.91L35.28 29.72L0 51.54L11.22 59.05L21.99 52.48Z"
      />
      <path
        className={`fill-current ${
          props.colorTransition ? "transition-colors" : ""
        } ${props.className}`}
        d="M58.87 90.99L58.77 76.91L58.71 69.07L54.06 73.79L28.05 56.58L17.49 63.26L45.76 82.21L45.75 82.22L58.87 90.99Z"
      />
    </svg>
  );
};

export default ZIcon;

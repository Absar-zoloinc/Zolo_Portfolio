const TopBar = (props: IconProps) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={props.width}
      height={props.height}
      className={props.parentClassName}
      viewBox="0 0 560 90.61"
      xmlSpace="preserve"
    >
      <path
        className={`fill-current ${props.className}`}
        d="M484.79,90.61H75.21C55.77,90.61,40,72.75,40,50.72v0c0-13.64-6.15-26.33-16.31-33.65L0,0h560l-23.69,17.07
       C526.15,24.39,520,37.08,520,50.72v0.01C520,72.75,504.23,90.61,484.79,90.61z"
      />
    </svg>
  );
};

export default TopBar;

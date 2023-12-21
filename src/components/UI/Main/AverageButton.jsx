import { Link } from "react-router-dom";

export const AverageButton = ({
  title,
  maxWidth,
  background,
  fontSize,
  to,
  style,
  isLink,
  disabled,
  textColor,
  paddingY,
  fontWeight,
  onClick,
  border,
  borderRadius,
  height,
}) => {
  return (
    <>
      {isLink && (
        <Link
          to={to}
          onClick={onClick}
          style={style}
          className={`${borderRadius} flex items-center ${border} ${height} justify-center ${paddingY} w-full ${maxWidth} ${background}`}
        >
          <span className={`${fontSize} ${textColor} ${fontWeight}`}>
            {title}
          </span>
        </Link>
      )}
      {!isLink && (
        <button
          disabled={disabled}
          onClick={onClick}
          style={style}
          className={`${borderRadius} flex items-center ${border} ${height} justify-center ${paddingY} w-full ${maxWidth} ${background} ${
            disabled ? "opacity-50" : ""
          }`}
        >
          <span className={`${fontSize} ${textColor} ${fontWeight}`}>
            {title}
          </span>
        </button>
      )}
    </>
  );
};

import logo from "../../../assets/resources/logo-light.svg";
import expandLeft from "../../../assets/resources/Expand_left.svg";
import { Link } from "react-router-dom";
const DetailsHeader = () => {
  return (
    <div className="flex items-center justify-between py-4 sm:py-5 gap-4">
      {/* Header */}
      <img src={logo} className="w-24 xs:w-28 sm:w-32 h-auto shrink-0" />

      <Link
        to="/categories"
        className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-4xl cursor-pointer shrink-0"
      >
        <img src={expandLeft} className="w-4 h-4 sm:w-5 sm:h-5" />

        <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
          Back to categories
        </span>
      </Link>
    </div>
  );
};

export default DetailsHeader;

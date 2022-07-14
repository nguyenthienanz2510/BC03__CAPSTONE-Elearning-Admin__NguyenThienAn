import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import UserNav from "./UserNav";
import { Link } from "react-scroll";
import "./MobileMenu.scss";
import CategoryCourseMenu from "./CategoryCourseMenu/CategoryCourseMenu";
import Search from "./Search";

const MobileMenu = () => {
  const openMobileModal = () => {
    console.log("openMobileModal");
    document.getElementById("myModal").style.display = "block";
  };
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };
  return (
    <>
      <div className="md:hidden">
        <button
          className="px-5 :py-2 hover:text-primary transition-all hover:text-color-primary"
          onClick={() => {
            openMobileModal();
          }}
        >
          <FontAwesomeIcon className="text-4xl " icon={faBars} />
        </button>

        <div id="myModal" className="mobileMenuModal">
          <div className="mobileMenuModalContent bg-white">
            <UserNav />
            <div className="my-5">
              <Search />
            </div>
            <CategoryCourseMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

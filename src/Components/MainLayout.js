import React, { useState, useEffect } from "react";
import MenuBar from "./MenuBar";
import MainPage from "./MainPage";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

const MainLayout = () => {
    const [scrollTarget, setScrollTarget] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate("");


    const handleMenuClick = (id) => {
        setScrollTarget(id);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (scrollTarget) {
            // setScrollTarget(null);
        }
    }, [scrollTarget]);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

    return (
        <div className="mainlayout">
            <div id="top"></div>
            <button
                className="btn-menu"
                onClick={toggleMenu}
            >
                {isOpen ? <ImCross /> : <FaBars />}
            </button>
            {
                isOpen &&
                <MenuBar
                    onMenuClick={handleMenuClick} />
            }
            <MainPage scrollTarget={scrollTarget} />
            <button onClick={scrollToTop} className="btn-up">
  <FaArrowAltCircleUp />
</button>
        </div>
    );
};

export default MainLayout;
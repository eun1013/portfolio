import React, { useState, useEffect, useRef } from "react";
import MenuBar from "./MenuBar";
import MainPage from "./MainPage";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Outlet, useLocation } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

const MainLayout = () => {
    const [scrollTarget, setScrollTarget] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
     const location = useLocation();

     const mainPageScrollY = useRef(0);
    const handleMenuClick = (id) => {
        setScrollTarget(id);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (scrollTarget) {
        }
    }, [scrollTarget]);

    useEffect(() => {
        const isOverviewPath = location.pathname.startsWith("/overview");

        if (isOverviewPath) {
            mainPageScrollY.current = window.scrollY; 
        } else {
            window.scrollTo(0, mainPageScrollY.current);
            mainPageScrollY.current = 0; // 복구 후 초기화 (선택 사항)
        }
    }, [location]); // location 객체가 변경될 때마다 실행

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
            <Outlet/>
            <button onClick={scrollToTop} className="btn-up">
                <FaArrowAltCircleUp />
            </button>
        </div>
    );
};

export default MainLayout;
import { useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cover = () => {
  // 애니메이션할 요소들 참조
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const portfolioRef = useRef(null);
  const menubarRef = useRef(null);
  const navigate = useNavigate('');
  
useEffect(() => {
    // 요소들이 모두 렌더링된 후에만 실행되도록
    if (titleRef.current && imgRef.current && portfolioRef.current && portfolioRef.current) 
    {
      const tl = gsap.timeline();

      // 타이틀 애니메이션
      tl.fromTo(titleRef.current, 
        {y: -100, opacity: 0},
        {y: 0, opacity: 1, duration: 3, ease: "power3.out", delay: 0.2}
      );
      
      // 이미지 애니메이션 (타이틀 애니메이션 2.5초 전에 시작)
      tl.fromTo(imgRef.current,
        {y: 50, opacity: 0},
        {y: 0, opacity: 1, duration: 2, ease: "power3.out"},
        "-=2.5"
      );
      tl.fromTo(portfolioRef.current,
        {y: 50, opacity: 0},
        {y: 0, opacity: 1, duration: 2, ease: "power3.out"},
        "-=3"
      );
      
      tl.fromTo(menubarRef.current,
        {x:-20, opacity:0},
        {x:0,opacity:1,duration:1,ease:"power2,out"},
        "-=1"
      );
    }
  }, []);

  return (
    <div className="cover">
        <h3 ref={titleRef}>사용자의 마음에 공감하고<br/> 꼼꼼하게 설계하는 프론트엔드 개발자 장성은 입니다.</h3>
        <img
        ref={imgRef} 
        src={`${process.env.PUBLIC_URL}/images/8617903.png`}/>
        <p ref={portfolioRef}>PORTFOLIO</p>
    </div>
  );
};

export default Cover; 
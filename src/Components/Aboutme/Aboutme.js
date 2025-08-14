import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Aboutme = () => {
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate('');
    return (
        <div className="aboutme">
            <h1>ABOUT ME</h1>
            <p>사용자 중심의 사고로 완성도를 추구하며<br/>
            협업과 소통을 통해 끊임없이 성장하는<br/>
            웹디자이너 장성은 입니다</p>
            <ul className="about-keyword1">
              <li>완성도 지향<br/> (Perfection-Oriented)</li>
              </ul>
              <ul className="about-keyword2">
              <li>사용자 중심<br/> (User-<br/>Centric)</li>
              <li>긍정적 협력<br/> (Positive Collaborator)</li>
              <li>지속 성장<br/> (Continuous Learner)</li>
            </ul>
        </div>
    );
};

export default Aboutme;
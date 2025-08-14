import { useNavigate } from "react-router-dom";

const AboutmeQnA = () => {
    const navigate = useNavigate('');

    return (
        <div className="aboutme-QnA">
            <h1>ABOUT ME</h1>
            <div className="QnA-1">
                <h2>Q . 웹디자이너로서 자신을 소개해 주세요</h2>
                <p>저는 언제나 사용자의 마음을 섬세하게 읽고 불편함을 해소하며,<br/>
                창의적인 시선으로 본질적인 문제에 대한 해결책을 찾아가는 웹디자이너 장성은입니다. 
                </p>
            </div>
            <div className="QnA-2">
                <h2>Q . 어떤 것을 추구하나요?</h2>
                <p>다양한 툴과 기술에 대한 탐구심을 바탕으로, 효율적이고 직관적이면서도
                완성도 높은 UI/UX를 구현하고자 노력합니다.<br/> 
                무엇보다 동료들과의 적극적인 소통과 유기적인 협업을 통해 
                기대 이상의 시너지를 만들어내는 것을 가장 중요한 가치로 생각합니다. 
                </p>
            </div>
        </div>
    );
};

export default AboutmeQnA;
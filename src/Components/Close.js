
const Close = () => {
    return (
        <div className="close">
        <img
        src={`${process.env.PUBLIC_URL}/images/title/title01.png`}
        alt="PORTFOLIO 로고 이미지"
        />
            <h1>사용자의 마음에 따뜻하게 공감하고<br/>꼼꼼하게 설계하는 프론트엔드 개발자 장성은입니다.</h1>
            <ul>
                <li>이름 : 장성은</li>
                <li>연락처 : 010-2573-1101</li>
                <li><a href="https://github.com/eun1013" target="_blank">GitHub : https://github.com/eun1013</a></li>
                <li><a href="https://eun1013.github.io/portfolio/" target="_blank">Portfolio : https://eun1013.github.io/portfolio/</a></li>
            </ul>
        </div>
    );
};

export default Close;
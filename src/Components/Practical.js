import data from "../data/practical.json";

const Practical = () => {
    return (
        <div className="practical">
            {/* <h1>PRACTICAL <br /> PUBLISHING </h1> */}
            <h1>PRACTICAL</h1>
            <div className="practical-content">
                {
                    data.projects.map((item, idx) => {
                        return (
                            <div
                            key={idx} 
                            className="practical-contents">
                                <img
                                    src={`${process.env.PUBLIC_URL}${item.image}`}
                                    alt={item.alts} />
                                {Array.isArray(item.skills) ? (
                                    <ul className="practical-skills">
                                        {item.skills.map((skill, i) => (
                                            <li key={i}
                                            >{skill}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{item.skills}</p>
                                )}
                                <h2>{item.title}</h2>
                                {Array.isArray(item.features) ? (
                                    <ul className="practical-feature">
                                        {item.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{item.features}</p>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Practical;
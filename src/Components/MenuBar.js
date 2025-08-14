import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate('');
    return (
        <div className="menu-bar">
            <button onClick={()=>{navigate('/')}}><ImCross /></button>
            <div className="menu">
              <button><span>HOME</span></button>
              <button><span>ABOUT ME</span></button>
              <button><span>MAIN PROJECT</span></button>
              <button><span>CLONE CODING</span></button>
              <button><span>PRACTICAL</span></button>
            </div>
        </div>
    );
};

export default MenuBar;
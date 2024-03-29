import ReactLogo from "../assets/align-justify.svg";
import Sidebar from "./Sidebar";

const Topbar = ({ toggle, setToggle,setColumn1,setColumn2,setColumn3,setColumn4,setColumn5 }) => {
  return (
    <div>
      <div className="topBar">
        {/* topbar left side text  */}
        <span className="tableTitle">Table Title</span>
        <div className="imageAndmenu">
          {/* svg icon for  Hamburger menu   */}
          <img
            className="hamburger"
            onClick={() => setToggle(!toggle)}
            width={26}
            height={26}
            src={ReactLogo}
            alt="React Logo"
          />
          {/* if toggle is true then Dropdown menu will show  */}
          {toggle && <div className="Dropdown">
            <Sidebar setColumn1={setColumn1}
					setColumn2={setColumn2}
					setColumn3={setColumn3}
					setColumn4={setColumn4}
					setColumn5={setColumn5} toggle/>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

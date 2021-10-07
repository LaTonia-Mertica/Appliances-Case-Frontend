import blender from "./images/blender.png";
import { useHistory } from "react-router-dom";
const Sidebar = () => {
  const history = useHistory();
  return (
    <div
      style={{
        height: "calc(125vh - 1px)",
        backgroundColor: "#c8c4bd",
        padding: 15,
      }}
    >
      <ul className="list-group">
        <li
          className="list-group-item customers"
          style={{ backgroundColor: "#c8c4bd" }}
        >
          CUSTOMERS
        </li>
        <li className="list-group-item">APPLIANCES</li>
        <li className="list-group-item">SERVICE ORDERS</li>
        <li className="list-group-item">SERVICE ORDERS ASSIGNMENTS</li>
        <li className="list-group-item">MANAGE USERS</li>
        <li className="list-group-item">REPORTS</li>
        <li className="list-group-item">PARTS</li>
        <li
          className="list-group-item"
          onClick={() => {
            delete localStorage.password;
            delete localStorage.email;
            history.push("./");
          }}
          id="logoutBtn"
        >
          LOG OUT
        </li>
      </ul>

      <a
        href="https://www.barnesandnoble.com/w/the-clock-jobbers-handybook-microform-paul-n-hasluck/1120048499?ean=9781528702843"
        target="_blank"
        rel="noreferrer"
      >
        <p style={{ paddingTop: 50, color: "#000000" }} id="adParagraph">
          <span
            style={{
              marginLeft: 25,
              fontStyle: "italic",
            }}
          >
            Want to DIY? Click to Buy
          </span>{" "}
          <br />
          <span
            style={{
              marginLeft: 25,
              fontWeight: "bold",
            }}
          >
            The Clock Jobber's Handybook
          </span>
          <img
            className="adInSidebar img-responsive"
            src={blender}
            alt="Blender"
            style={{
              maxWidth: 150,
              width: "calc(100vw - 1000px)",
              height: "calc(100vh - 500px)",
              marginTop: 25,
              marginLeft: 50,
            }}
          />
        </p>
      </a>
    </div>
  );
};
export default Sidebar;

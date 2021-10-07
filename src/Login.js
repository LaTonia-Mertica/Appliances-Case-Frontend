import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const loginButtonClicked = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch(
      `https://appliances-case.herokuapp.com/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          email,
          password,
        },
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.error) {
      alert(data.error);
    } else if (data.success) {
      localStorage.email = email;
      localStorage.password = password;
      history.push("./customers");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div
            className="col-4 card"
            style={{
              marginTop: 125,
              borderRadius: 37,
              padding: 22,
              backgroundColor: "#c8c4bd",
            }}
          >
            <form className="card-body" onSubmit={loginButtonClicked}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail"
                  className="form-label"
                  style={{ color: "#0275d8", fontWeight: 900 }}
                  title="type in testymctesterson@gmail.com"
                >
                  email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  title="type in testymctesterson@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label"
                  style={{ color: "#0275d8", fontWeight: 900 }}
                  title="type in superSecret"
                >
                  password
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="password"
                  title="type in superSecret"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
                id="loginBtn"
              >
                LOG IN
              </button>
            </form>
            <div>
              <p id="enterWithUserCredentials">
                enter credentials below to access
              </p>
              <p id="credentialsToEnter">
                email: testymctesterson@gmail.com
                <br />
                password: superSecret
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

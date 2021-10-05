import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState, useRef } from "react";

let allCustomers;
const Customers = () => {
  const [customers, setCustomers] = useState(null);
  const table = useRef(null);
  const [zipCode, setZipCode] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://appliances-case.herokuapp.com/customers/${currentPageNum}`,
        {
          method: "GET",
          headers: {
            email: localStorage.email,
            password: localStorage.password,
          },
        }
      );
      const data = await response.json();
      setTotalPages(Math.ceil(data.customers.count / 5));
      setCustomers(data.customers.rows);
      allCustomers = data.customers.rows;
    })();
  }, [currentPageNum]);

  const addCustomer = async (event) => {
    event.preventDefault();
    // const firstName = event.target.firstName.value;
    // const lastName = event.target.lastName.value;
    // const address1 = event.target.address1.value;
    // const address2 = event.target.address2.value;
    // const city = event.target.city.value;
    // const state = event.target.state.value;
    // const zipCode = event.target.zipCode.value;
    // const phoneNumber = event.target.phoneNumber.value;

    let formData = {};

    for (const formField of event.target) {
      // console.log(formField.id, formField.value);
      if (formField.id) {
        formData[formField.id] = formField.value;
      }
    }

    formData.zipCode = zipCode;

    if (formData.zipCode.length < 5) {
      alert("Dude - check your zip code, it's a little light on numbers.");
    } else if (formData.phoneNumber.length < 10) {
      alert("Seriously dude, add in on your phone number.");
    } else {
      const response = await fetch(
        `https://appliances-case.herokuapp.com/customers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            email: localStorage.email,
            password: localStorage.password,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.error) {
        alert(data.error);
      } else {
        setCustomers(data.customers);
        table.current.scrollIntoView();

        for (const formField of event.target) {
          formField.value = "";
        }
      }
    }
  };

  let paginationLis = [];
  if (totalPages) {
    for (let i = 1; i <= totalPages; i++) {
      paginationLis.push(
        <li
          className={`page-item ${currentPageNum === i ? "active" : ""}`}
          key={i}
          onClick={() => {
            setCurrentPageNum(i);
          }}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }
  }

  //FRONT END SEARCH
  // const searchNames = (event) => {
  //   event.preventDefault();
  //   if (searchInput === "") {
  //     setCustomers(allCustomers);
  //   } else {
  //     setCustomers(
  //       allCustomers.filter((customer) => {
  //         return (
  //           customer.firstName
  //             .toLowerCase()
  //             .includes(searchInput.toLowerCase()) ||
  //           customer.lastName.toLowerCase().includes(searchInput.toLowerCase())
  //         );
  //       })
  //     );
  //   }
  // };

  //BACK END SEARCH
  const searchNames = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://appliances-case.herokuapp.com/customersSearch`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchQuery: searchInput }),
      }
    );
    const data = await response.json();
    setCustomers(data.customers);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3" style={{ paddingLeft: 0 }}>
            <Sidebar />
          </div>
          <div className="col-9">
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: 27,
                  fontWeight: 700,
                  paddingTop: 25,
                  paddingBottom: 13,
                }}
              >
                CUSTOMERS
              </h1>
            </div>

            <form
              className="row"
              style={{ marginTop: 10, marginBottom: 10 }}
              onSubmit={searchNames}
            >
              <div className="col-10">
                <input
                  type="text"
                  onChange={(event) => {
                    setSearchInput(event.target.value);
                  }}
                  value={searchInput}
                  className="form-control"
                  placeholder="search by name"
                  id="nameSearchText"
                ></input>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    marginLeft: -20,
                  }}
                >
                  SEARCH
                </button>
              </div>
            </form>

            <div style={{ maxHeight: 350, overflow: "scroll" }}>
              <table
                className="table table-hover"
                style={{ border: "1px solid black" }}
                ref={table}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: 24,
                        backgroundColor: "#c8c4bd",
                        color: "#0275d8",
                      }}
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#c8c4bd", color: "#0275d8" }}
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#c8c4bd", color: "#0275d8" }}
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#c8c4bd", color: "#0275d8" }}
                    >
                      Address
                    </th>
                    <th scope="col" style={{ backgroundColor: "#c8c4bd" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {customers ? (
                    customers.map((customer) => {
                      return (
                        <tr key={customer.customerID}>
                          <td>{customer.firstName}</td>
                          <td>{customer.lastName}</td>
                          <td>{customer.phoneNumber}</td>
                          <td>
                            {customer.address1}
                            {customer.address2 ? `, ${customer.address2}` : ""},
                            {customer.city}, {customer.state} {customer.zipCode}
                          </td>

                          <td>🖊&nbsp;&nbsp;&nbsp;🗑</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>Loading ...</td>
                    </tr>
                  )}

                  {/* <tr>
                  <td style={{ paddingLeft: 24 }}>Page</td>
                  <td>Testy</td>
                  <td>(777) 345-8998</td>
                  <td>1 First Eleventh Street, East Syracuse, NY 13203</td>
                  <td>🖊&nbsp;&nbsp;&nbsp;🗑</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: 24 }}>Holler</td>
                  <td>Tested</td>
                  <td>(777) 543-0117</td>
                  <td>3713 Fourth Main Avenue, East Syracuse, NY 13203</td>
                  <td>🖊&nbsp;&nbsp;&nbsp;🗑</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: 24 }}>Grateful</td>
                  <td>Works</td>
                  <td>(777) 223-1667</td>
                  <td>11 North Winding Full Circle, Eastwood, NY 13206</td>
                  <td>🖊&nbsp;&nbsp;&nbsp;🗑</td>
                </tr> */}
                </tbody>
              </table>
            </div>
            {totalPages < 2 ? null : (
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPageNum === 1 ? "disabled" : ""
                    }`}
                  >
                    <span
                      className="page-link"
                      onClick={() => {
                        setCurrentPageNum(currentPageNum - 1);
                      }}
                    >
                      Previous
                    </span>
                  </li>
                  {paginationLis}
                  <li
                    className={`page-item ${
                      currentPageNum === totalPages ? "disabled" : ""
                    }`}
                  >
                    <span
                      className="page-link"
                      onClick={() => {
                        setCurrentPageNum(currentPageNum + 1);
                      }}
                    >
                      Next
                    </span>
                  </li>
                </ul>
              </nav>
            )}
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: 27,
                  fontWeight: 700,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                add customer below
              </h1>
            </div>
            <form onSubmit={addCustomer}>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      first name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                      tabIndex="1"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="address1" className="form-label">
                      address 1:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address1"
                      required
                      tabIndex="2"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      last name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      required
                      tabIndex="3"
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="address2" className="form-label">
                      address 2:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      tabIndex="4"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">
                      phone number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      required
                      tabIndex="5"
                      onBlur={(event) => {
                        const num = event.target.value.trim();
                        if (num.length === 10) {
                          event.target.value = `(${num.substring(
                            0,
                            3
                          )}) ${num.substring(3, 6)}-${num.substring(6)}`;
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="col-3">
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      city:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      required
                      tabIndex="6"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">
                      state:
                    </label>
                    <select
                      className="form-select"
                      defaultValue="NY"
                      id="state"
                      required
                      tabIndex="7"
                    >
                      <option></option>
                      <option>AL</option>
                      <option>AK</option>
                      <option>AZ</option>
                      <option>AR</option>
                      <option>CA</option>
                      <option>CO</option>
                      <option>CT</option>
                      <option>DE</option>
                      <option>FL</option>
                      <option>GA</option>
                      <option>HI</option>
                      <option>ID</option>
                      <option>IL</option>
                      <option>IN</option>
                      <option>IA</option>
                      <option>KS</option>
                      <option>KY</option>
                      <option>LA</option>
                      <option>ME</option>
                      <option>MD</option>
                      <option>MA</option>
                      <option>MI</option>
                      <option>MN</option>
                      <option>MS</option>
                      <option>MO</option>
                      <option>MT</option>
                      <option>NE</option>
                      <option>NV</option>
                      <option>NH</option>
                      <option>NJ</option>
                      <option>NM</option>
                      <option>NY</option>
                      <option>NC</option>
                      <option>ND</option>
                      <option>OH</option>
                      <option>OK</option>
                      <option>OR</option>
                      <option>PA</option>
                      <option>RI</option>
                      <option>SC</option>
                      <option>SD</option>
                      <option>TN</option>
                      <option>TX</option>
                      <option>UT</option>
                      <option>VT</option>
                      <option>VA</option>
                      <option>WA</option>
                      <option>WV</option>
                      <option>WI</option>
                      <option>WY</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-9"></div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="zipCode" className="form-label">
                      zip code:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      required
                      tabIndex="8"
                      value={zipCode}
                      onChange={(event) => {
                        setZipCode(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      fontWeight: 700,
                      marginBottom: 25,
                      padding: 9,
                      letterSpacing: 1,
                    }}
                  >
                    ADD CUSTOMER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customers;

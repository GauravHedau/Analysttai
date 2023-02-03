import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDetails = (index) => {
    setShowDetails(showDetails === index ? null : index);
  };

  return (
    <div className="d-flex flex-column align-items-center  text-center main">
      {users.map((user, index) => (
        <div
          key={user.id}
          className="card mb-3"
          style={{ width: "80%", display: "flex", flexDirection: "column" }}
        >
          <div className="detail text-center" style={{ display: "flex" }}>
            <div className="element" style={{ flex: 1 }}>
              <strong>NAME</strong>
              <br />

              {user.name}
            </div>
            <div style={{ flex: 1 }}>
              <strong>EMAIL</strong>
              <br />
              {user.email}
            </div>
            <div style={{ flex: 1 }}>
              <strong>PHONE</strong>
              <br />
              {user.phone}
            </div>
            <div style={{ flex: 1 }}>
              <strong>CITY</strong>
              <br />
              {user.address.city}
            </div>

            <div>
              <button className="btn" onClick={() => handleDetails(index)}>
                {showDetails === index ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
          
          {showDetails === index ? (
            
            <div
              className="detail view"
              style={{ display: "flex", marginTop: "10px" }}
            >
                
              <div style={{ flex: 1 }}>
                <div>
                  <strong>NAME</strong> <br /> {user.name}
                </div>
                <div>
                  <strong>USERNAME</strong> <br /> {user.username}
                </div>
                <div>
                  <strong>EMAIL</strong> <br /> {user.email}
                </div>
                <div>
                  <strong>ADDRESS</strong> <br /> {user.address.street},{" "}
                  {user.address.suite}, {user.address.city},{" "}
                  {user.address.zipcode}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div>
                  <strong>PHONE</strong> <br /> {user.phone}
                </div>
                <div>
                  <strong>WEBSITE</strong> <br /> {user.website}
                </div>
                <div>
                  <strong>COMPANY</strong> <br /> {user.company.name}
                </div>
                <div>
                  <strong>CATCHPRASE</strong> <br /> {user.company.catchPhrase}
                  <br /> {user.company.bs}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default App;

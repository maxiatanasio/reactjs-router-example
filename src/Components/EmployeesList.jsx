import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class EmployeesList extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios
      .get("https://5bd25dbbbded6100135c3065.mockapi.io/api/employees")
      .then(({ data }) => {
        this.setState({
          employees: data
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.employees.map(employee => {
          return (
            <div className="employee" key={employee.id}>
              <Link to={"/about/" + employee.id}>
                <p>{employee.name}</p>
                <img src={employee.pic} />
                <small>{employee.phrase}</small>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

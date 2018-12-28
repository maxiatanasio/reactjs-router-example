import React from "react";
import axios from "axios";

export default class EmployeeDetails extends React.Component {
  state = {
    employee: null
  };

  componentDidMount() {
    axios
      .get(
        "https://5bd25dbbbded6100135c3065.mockapi.io/api/employees/" +
          this.props.match.params.id
      )
      .then(({ data }) => {
        this.setState({
          employee: data
        });
      })
      .catch(() => {
        this.props.history.push("/about");
      });
  }

  render() {
    const { employee } = this.state;
    return (
      <React.Fragment>
        {employee && (
          <div className="employee" key={employee.id}>
            <p>{employee.name}</p>
            <img src={employee.pic} />
            <small>{employee.phrase}</small>
          </div>
        )}
      </React.Fragment>
    );
  }
}

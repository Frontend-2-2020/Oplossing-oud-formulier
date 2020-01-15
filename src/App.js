import React, { Component } from "react";

class App extends Component {
  state = {
    errors: {}
  };
  handleSubmit = e => {
    e.preventDefault(); // Probleem 1

    const values = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value
    }; // te veel werk

    const errors = {};

    if (!values.firstname) {
      errors.firstname = "required";
    }

    if (!values.lastname) {
      errors.lastname = "required";
    }

    // Object.keys(errors) => ["firstname", "lastname"] of []
    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
    } else {
      // submit naar de server
      this.setState({ errors: {} });
      console.log(values);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className={
                  "form-control" + (errors.firstname ? " is-invalid" : "")
                }
                placeholder="First name"
                id="firstname"
              />
              {errors.firstname && (
                <div className="invalid-feedback">
                  Please choose a firstname.
                </div>
              )}
            </div>
            <div className="col">
              <input
                type="text"
                className={
                  "form-control" + (errors.lastname ? " is-invalid" : "")
                }
                placeholder="Last name"
                id="lastname"
              />
              {errors.lastname && (
                <div className="invalid-feedback">
                  Please choose a lastname.
                </div>
              )}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="submit"
                value="GO!"
                className="btn btn-primary btn-block"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

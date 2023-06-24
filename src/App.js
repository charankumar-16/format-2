import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { modifiedPhone: "" };

  modifyPhoneNumber = (event) => {
    const telInput = event.target;
    const Number = telInput.value.replace(/\D/g, "").substring(0, 10);
    const firstPart = Number.substring(0, 3);
    const secondPart = Number.substring(3, 6);
    const lastPart = Number.substring(6, 10);

    if (Number.length > 6) {
      const value = `(${firstPart}) ${secondPart}-${lastPart}`;
      this.setState({ modifiedPhone: value });
    } else if (Number.length > 3) {
      const value = `(${firstPart}) ${secondPart}`;
      this.setState({ modifiedPhone: value });
    } else if (Number.length > 0) {
      const value = `${firstPart}`;
      this.setState({ modifiedPhone: value });
    } else {
      const value = "";
      this.setState({ modifiedPhone: value });
    }
  };

  render() {
    const { modifiedPhone } = this.state;
    return (
      <div className="App">
        <div className="container text-center">
          <input
            type="tel"
            id="phone"
            value={modifiedPhone}
            length="16"
            placeholder="mobile number"
            autocomplete="off"
            onChange={this.modifyPhoneNumber}
          />
          <div>
            <label for="phone">(123) 456-7890</label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

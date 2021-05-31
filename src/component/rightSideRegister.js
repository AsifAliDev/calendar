// @flow
import * as React from "react";
import "./component.css";

class RightSideSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      phone: "",
      image: "",
      checkbox: false,
    };
  }

  pageChange = () => {
    window.location.href = "/login";
  };
  handleChange = (e) => {
    e.preventDefault();
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.id]: value,
    });
  };
  handleImageUpload = (image) => {
    this.setState({
      image: image.target.files[0],
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { name, password, phone, image, email, checkbox } = this.state;
    if (
      name !== "" &&
      password !== "" &&
      phone !== "" &&
      image &&
      email !== "" &&
      checkbox !== false
    ) {
      this.props.data(this.state);
    } else {
      alert("Some fields are missing");
    }
  };
  render() {
    return (
      <div className="rightSide">
        <div
          className="carcenter card border-0 p-3"
          style={{ height: "auto", maxWidth: "400px" }}
        >
          <strong className="heading">Register now!</strong>
          <br />
          <div style={{ fontSize: "12px" }}>
            <div class="form-group">
              <label htmlFor="name">Business name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="number"
                class="form-control"
                id="phone"
                // aria-describedby="emailHelp"
                min="0"
                onKeyDown={(e) =>
                  ["e", "E", ".", "+", "-"].includes(e.key) &&
                  e.preventDefault()
                }
                onChange={this.handleChange}
              />
            </div>
            <br />

            <div class="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div>
              <label for="uploadMedias">
                {/* <img className="uploadIcon-sec" src={UploadIcon} alt="sss" /> */}
                Upload logo
              </label>
              <input
                type="file"
                name="file"
                // className="displayNone"
                id="uploadMedias"
                onChange={this.handleImageUpload}
                style={{ display: "none" }}
              />
            </div>
            <br />
            <div className="form-group form-check ">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
                checked={this.state.checkbox}
                onChange={this.handleChange}
              />
              <label
                className="form-check-label "
                htmlFor="checkbox"
                id="checkbox"
              >
                I accept the privacy policy and terms of Swan beauty
              </label>
            </div>
            <br />
            <small id="emailHelp" className="form-text text-muted">
              Don't have an account ?
              <a
                href="#"
                style={{ textDecoration: "none" }}
                onClick={this.pageChange}
              >
                Register
              </a>
            </small>
            <br />
            <button
              type="submit"
              class="btn btn-primary"
              // style={{ marginLeft: "80px" }}
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default RightSideSignup;

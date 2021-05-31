// @flow
import * as React from "react";
import RightSide from "../../component/rightSideRegister";
import LeftSide from "../../component/loginSignupLeftSide";
import "../../App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { register } from "../../Redux/actions/userActions";
import { Email, password, mobile } from "../../util/validator";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleData = (data) => {
    if (!mobile(data.phone)) {
      alert("Invalid Phone no");
      return;
    }
    if (!Email(data.email)) {
      alert("Invalid Email");
      return;
    }
    if (!password(data.password)) {
      alert(
        "password must contain minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1"
      );
      return;
    }
    this.props.register(data);
  };
  static getDerivedStateFromProps(props, state) {
    if (props.reg?.user?.message === "Successfully created") {
      props.history.push("/calendar");
    }
  }
  render() {
    return (
      <div className=" bg-light">
        <div class="row main" style={{ margin: "0px", padding: "0px" }}>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 left-contaner">
            <LeftSide />
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <RightSide data={this.handleData} />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      register,
    },
    dispatch
  );
};
const mapStateToProps = ({ reg }) => {
  return {
    reg,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

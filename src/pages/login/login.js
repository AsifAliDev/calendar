// @flow
import * as React from "react";
import RightSide from "../../component/rightSideLogin";
import LeftSide from "./../../component/loginSignupLeftSide";
import "../../App.css";
import { connect } from "react-redux";
import { login } from "../../Redux/actions/userActions";
import { bindActionCreators } from "redux";
import { Email, password } from "../../util/validator";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleData = (data) => {
    console.log(Email(data.email));
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

    this.props.login(data);
  };
  static getDerivedStateFromProps(props, state) {
    if (props.loginData?.user?.message === "Successfully Login") {
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
// export default Login;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  );
};
const mapStateToProps = ({ login }) => {
  return {
    loginData: login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

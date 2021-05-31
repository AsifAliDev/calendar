// @flow
import * as React from "react";
import RightSide from "../../component/rightSideLogin";
import LeftSide from "./../../component/loginSignupLeftSide";
import "../../App.css";
import { connect } from "react-redux";
import { login } from "../../Redux/actions/userActions";
import { bindActionCreators } from "redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  handleData = (data) => {
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

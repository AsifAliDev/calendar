// @flow
import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import RightSide from "../../component/rightSideLogin";
import { login } from "../../Redux/actions/userActions";
import "../../App.css";

class Login extends React.Component {
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
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 left-contaner"></div>
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

import Signup from "./Signup"
import { connect } from "react-redux";
import { submitformData } from "../../User/Redux/Action";

const MapPropsToDispatch = (dispatch) => {
  return {
    submitformData: (data) => dispatch(submitformData(data)),
  };
};

export const SignupContainer = connect(null, MapPropsToDispatch)(Signup);


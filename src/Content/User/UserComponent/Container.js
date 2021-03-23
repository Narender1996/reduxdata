import User from "./User";
import { connect } from "react-redux";
import { deleteformData, changeuserData } from "../Redux/Action";

const mapStateToProps = (state) => {
  return {
    getData: state.UserReducer.userList,
  };
};

const MapPropsToDispatch = (dispatch) => {
  return {
    deleteformData: (data) => dispatch(deleteformData(data)),
    changeUserData: (data) => dispatch(changeuserData(data)),
  };
};

export const UserContainer = connect(mapStateToProps, MapPropsToDispatch)(User);

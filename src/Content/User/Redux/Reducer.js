import { actionType } from "./Action";
const intialValue = {
  userList: [],
};
const Reducer = (state = intialValue, action) => {
  switch (action.type) {
    case actionType.SUBMIT_FORM_DATA:
      const adduser = [...state.userList];
      adduser.push(action.payload);

      return {
        ...state,
        userList: [...adduser],
      };

    case "DELETE_FORM_DATA":
      let allUser = [...state.userList];
      allUser.splice(action.payload, 1);
      return {
        ...state,
        userList: [...allUser],
      };

    case "EDIT_USER_DATA":
      const newChange = [...state.userList];
      newChange.map((data, index) => {
        if (data.email === action.payload.email) {
          newChange[index] = { ...action.payload };
        }
      });

      return {
        ...state,
        userList: [...newChange],
      };
    default:
      return state;
  }
};
export default Reducer;

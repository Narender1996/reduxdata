export const actionType = {
  SUBMIT_FORM_DATA: "SUBMIT_FORM_DATA",
  DELETE_FORM_DATA: "DELETE_FORM_DATA",
  EDIT_USER_DATA: "EDIT_USER_DATA"
};

export const submitformData = (data) => {
  return {
    type: actionType.SUBMIT_FORM_DATA,
    payload: data,
  };
};

export const deleteformData = (data) => {
  return {
    type: actionType.DELETE_FORM_DATA,
    payload: data,
  };
};

export const changeuserData = (data) => {
  return {
    type: actionType.EDIT_USER_DATA,
    payload: data,
  };
};


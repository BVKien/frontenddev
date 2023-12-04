import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants.js";
// payload: dữ liệu mang theo đi
// payload chính là dữ liệu tương ứng với người dùng gõ vào input
export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
// console.log(setJob("rua bat"));

export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

export const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

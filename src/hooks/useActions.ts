import { allActionCreators } from "store/reducers/action-creators";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
  return bindActionCreators(allActionCreators, useDispatch());
};

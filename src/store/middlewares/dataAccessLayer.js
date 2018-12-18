import * as actionTypes from "../actionTypes";
import data from "./data.json";

const getCommentsNumber = id =>
  data.comments.find(item => item.itemId === id).value.length;

const getInitializeData = () =>
  new Promise(res => res(data)).then(data =>
    data.menuItems.map(item => ({
      ...item,
      comments_number: getCommentsNumber(item.id)
    }))
  );

const getCommentsById = id =>
  new Promise((res, rej) => (id ? res(data) : rej("active is null"))).then(
    data => data.comments.find(comments => comments.itemId === id)
  );

const dataAccessLayer = store => next => action => {
  switch (action.type) {
    case actionTypes.INITIALIZE_APP:
      return getInitializeData().then(data =>
        next({
          ...action,
          payload: { data }
        })
      );
    case actionTypes.UPDATE_COMMENTS_BY_ID:
      return getCommentsById(action.payload.id).then(comments =>
        next({
          ...action,
          payload: { comments }
        })
      );
    case actionTypes.CREATE_COMMENT:
      return next({
        ...action,
        payload: {
          ...action.payload,
          itemId: store.menu.active
        }
      });
    case actionTypes.CREATE_ITEM:
      return next({
        ...action,
        payload: {
          id: store.getState().menu.data.length + 1
        }
      });
    default:
      return next(action);
  }
};

export default dataAccessLayer;

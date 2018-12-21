export const getCommentsById = (state, id) =>
  state.comments.data.find(item => item.itemId === id).value;

export const getMenu = state => state.menu.data;

export const getActive = state => state.menu.active;

export const getMenuValue = state => state.menu.value;

export const getCommentValue = state => state.comments.value;

export const getColorComment = state => state.comments.color;

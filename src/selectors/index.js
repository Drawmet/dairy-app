export const getCommentsById = (state, id) =>
  state.comments.data.find(item => item.itemId === id);

export const getMenu = state => state.menu.data;

export const getActive = state => state.menu.active;

export const getMenuValue = state => state.menu.value;

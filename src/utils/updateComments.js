const updateComments = (state, comments) => {
  if (!comments) {
    return [...state.data, { itemId: state.data.length + 1, value: [] }];
  }

  const commentsIsFind = state.data.find(
    item => item.itemId === comments.itemId
  );

  if (commentsIsFind) {
    return state.data;
  }

  return [...state.data, comments];
};

export default updateComments;

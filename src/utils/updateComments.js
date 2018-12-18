const updateComments = (state, comments) => {
  const commentsIsFind = state.data.find(
    item => item.itemId === comments.itemId
  );

  if (commentsIsFind) {
    return state.data;
  }

  return [...state.data, comments];
};

export default updateComments;

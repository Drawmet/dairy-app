const newComment = (state, itemId) =>
  state.data.map(item => {
    if (item.itemId === itemId) {
      console.log(item);
      const comment = {
        id: item.value.length + 1,
        value: state.value,
        color: state.color
      };

      const value = item.value ? [...item.value, comment] : [comment];

      return {
        ...item,
        value: value
      };
    }

    return item;
  });

export default newComment;

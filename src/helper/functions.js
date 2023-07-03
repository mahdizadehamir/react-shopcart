const shorten = (title) => {
  const splittedTitle = title.split(" ");
  const newTitle = `${splittedTitle[0]} ${splittedTitle[1]}`;
  return newTitle;
};
const isInCart = (state, id) => {
  const checkState = !!state.selectedItems.find((item) => item.id === id);
  return checkState;
};
const quantityFilter = (state, id) => {
  const findI = state.selectedItems.findIndex((item) => item.id === id);
  if(state.selectedItems[findI]){
    return state.selectedItems[findI].quantity
  }else {
    return false
  }
  // return quantityCount[id].quantity;
};
export { shorten, isInCart, quantityFilter };

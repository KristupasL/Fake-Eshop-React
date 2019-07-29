function toggleArrayItem(array, item) {
  if (array.includes(item)) {
    return array.filter(arrayItem => arrayItem !== item);
  }
  return [...array, item];
}

export default toggleArrayItem;

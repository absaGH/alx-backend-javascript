export default function appendToEachArrayValue(array, appendString) {
  const modifiedarray = [];
  for (let idx of array) {
    const value = idx;
    idx = appendString + value;
    modifiedarray.push(idx);
  }

  return modifiedarray;
}

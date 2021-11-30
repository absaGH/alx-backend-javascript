export default function cleanSet(set, startString) {
  let str = '';
  if (startString !== '') {
    set.forEach((item) => {
      if ((typeof startString === 'string') && item.startsWith(startString)) {
        if (str === '') {
          str = str.concat(item.substring(startString.length));
        } else {
          str = str.concat('-', item.substring(startString.length));
        }
      }
    });
    return str;
  }
  return '';
}

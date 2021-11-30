export const weakMap = new WeakMap();
export function queryAPI(epoint) {
  if (!weakMap.has(epoint)) {
    weakMap.set(epoint, 1);
  } else if (weakMap.get(epoint) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(epoint, (weakMap.get(epoint) + 1));
  }
}

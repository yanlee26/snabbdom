export const array = Array.isArray;
// bad...
export function primitive(s: any): s is (string | number) {
  return typeof s === 'string' || typeof s === 'number';
}

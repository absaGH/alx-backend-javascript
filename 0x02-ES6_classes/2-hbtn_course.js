export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string' || name instanceof String) {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }

    if (typeof length === 'number' || length instanceof Number) {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }

    if (Object.getPrototypeOf(students) === Array.prototype) {
      this._students = [...students];
    } else {
      throw TypeError(' Students must be a string array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(str) {
    if (typeof str === 'string' || str instanceof String) {
      this._name = str;
    } else {
      throw TypeError('TypeError: Name must be a string');
    }
  }

  set length(len) {
    if (typeof len === 'number' || len instanceof Number) {
      this.length = len;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  set students(std) {
    if (Object.getPrototypeOf(std) === Array.prototype) {
      this._students = [...std];
    } else {
      throw TypeError('Students must be a string');
    }
  }
}

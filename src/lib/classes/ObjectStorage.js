export class ObjectStorage {
  key(index) {
    return localStorage.key(index);
  }

  getItem(key) {
    const textValue = localStorage.getItem(key);
    if (textValue !== undefined) {
      return JSON.parse(textValue);
    }
    return textValue;
  }

  setItem(key, value) {
    const textValue = JSON.stringify(value);
    localStorage.setItem(key, textValue);
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

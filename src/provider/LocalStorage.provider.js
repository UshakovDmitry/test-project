export class LocalStorageProvider {
  static getValue = (key) => {
    return localStorage.getItem(key);
  };
  static setValue = (key, value) => {
    localStorage.setItem(key, value);
  };
  static removeValue = (key) => {
    localStorage.removeItem(key);
  };
  static JSONtoString(json) {
    return JSON.stringify(json);
  }
  static StringToJSON(string) {
    return JSON.parse(string);
  }
}

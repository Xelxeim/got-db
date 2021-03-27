export default class gotAPIservice {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    const result = await response.json();
    return result;
  }

  getItem = async (url) => {
    const response = this.getResource(url);
    return this.transformItem(response);
  }

  getAllItems = async (url) => {
    const response = this.getResource(url);
    return response.map(item => this.transformItem(item))
  }

  transformItem(item) {
    const formattedItem = {};

    for (let key in item) {
      formattedItem[key] = item[key] ? item[key] : "no data :(";
    }
    return formattedItem;
  }
}
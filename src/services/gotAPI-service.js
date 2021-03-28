import formatService from "./format-service";

export default class gotAPIservice {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api/";
  }

  transformItem = new formatService().transformItem;

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    const result = await response.json();
    return result;
  }

  getItem = async (url) => {
    const response = await this.getResource(url);
    return this.transformItem(response);
  }

  getAllItems = async (url) => {
    const response = await this.getResource(url);
    return response.map(item => this.transformItem(item))
  }
}
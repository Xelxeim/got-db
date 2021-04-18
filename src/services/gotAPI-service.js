import formatService from "./format-service";

class gotAPIservice {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api/";
  }

  transformItem = formatService.transformItem;

  getRandomResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    const result = await response.json();

    return this.transformItem(result)
  }

  getResourceWithPage = (url, page = 1) => {
    const response = fetch(`${this._apiBase}${url}/?page=${page}`)
      .then(item => item.json());
    return response;
  }

  getAllItems = async (url, page) => {
    const response = await this.getResourceWithPage(url, page);
    return response.map(item => this.transformItem(item))
  }

  getItemWithFullUrl = (url) => {
    const response = fetch(url)
      .then(res => res.json())
    return response
  }
}

export default new gotAPIservice()
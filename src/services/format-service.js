export default class formatService {

  transformItem(item) {
    const formattedItem = {};

    for (let key in item) {
      formattedItem[key] = item[key] ? item[key] : "no data :(";
    }
    return formattedItem;
  }

  firstLetterUpperCase(item) {
    return item.slice(0, 1).toUpperCase() + item.slice(1);
  }
}

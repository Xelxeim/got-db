class formatService {

  transformItem(item) {
    const isArray = Array.isArray(item);
    let formattedItem;

    switch(isArray){
      case false:
        formattedItem = {};
        for (let key in item) {
          formattedItem[key] = item[key] ? item[key] : "no data :(";
        }
        return formattedItem;

      case true: 
        formattedItem = item.map(elem => {
          if (!elem[1]){
            elem.splice(1, 1);
            elem.push("no data :(");
          }
          return elem;
        })
        return formattedItem;

      default:
        return item;
    }

  }

  extractNecessaryProps(item, itemType) {
    switch(itemType){
      case "character":
        const { name, gender, born, died, culture } = item;
        return [
          ["Name: ", name],
          ["Gender: ", gender],
          ["Born: ", born],
          ["Died: ", died],
          ["Culture: ", culture]
        ]
      case "book":
        const { name: title, authors, numberOfPages, publisher, released } = item;
        return [
          ["Title: ", title],
          ["Author: ", authors[0]],
          ["Number of pages: ", numberOfPages],
          ["Publisher: ", publisher],
          ["Release date: ", released],
        ]
      case "house":
        const { name: house, region, coatOfArms, founded, words } = item
        return [
          ["House: ", house],
          ["Region: ", region],
          ["Coat of arms: ", coatOfArms],
          ["Founded: ", founded],
          ["Motto: ", words],
        ]
      default:
        return item
    }
  }

  

  firstLetterUpperCase(item) {
    return item.slice(0, 1).toUpperCase() + item.slice(1);
  }
}

export default new formatService();
export const createMarkup = (content) => {
  return {__html: content};
}

export const id = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const convertToInt = (data, argArr) => {
  // data = Geojson object
  // arg = Array containing props with type of String to be converted to Int
  data.features.map(feat => {
    argArr.forEach(arg => {
      feat.properties[arg] = parseInt(feat.properties[arg]);
    });
    return feat;
  });
  return data;
}

export default {
  id,
  createMarkup,
  convertToInt
}
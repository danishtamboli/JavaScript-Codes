function parseQueryParams(url) {
  const params = new URL(url).searchParams;
  const result = {};

  for (const [key, value] of params) {
    if (result[key]) {
      result[key] = [].concat(result[key], value);
    } else {
      result[key] = value;
    }
  }

  return result;
}
parseQueryParams("...?id=1&id=2");
// Output: { id: ["1", "2"] }
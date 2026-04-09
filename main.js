function serializeQueryParams(obj) {
  return Object.entries(obj)
    .map(([key, value]) => 
      `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}
serializeQueryParams({ page: 2, name: "javascript" });
// Output: "page=2&name=danish"
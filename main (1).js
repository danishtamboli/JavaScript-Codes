function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
function search(query) {
  console.log("Learning:", query);
}

const debouncedSearch = debounce(search, 500);

// Simulate typing
debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("react");
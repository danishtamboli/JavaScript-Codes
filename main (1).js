function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const input = "hello world from javascript";

console.log(capitalizeWords(input));

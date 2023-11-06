export function transformToNumber(value) {
  if (value !== "undefined") {
    return +value;
  } else {
    throw "error";
  }
}

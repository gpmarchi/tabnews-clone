function sum(value1, value2) {
  if (typeof value1 !== "number") {
    return "Error";
  }

  return value1 + value2;
}

exports.sum = sum;

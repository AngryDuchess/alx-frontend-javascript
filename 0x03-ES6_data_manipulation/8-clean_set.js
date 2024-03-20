export default function cleanSet(set, startString) {
  let list = [];
  set.forEach((value) => {
    if (
      typeof value === "string" &&
      value.startsWith(startString) &&
      startString.length > 0
    ) {
      list.push(value.slice(startString.length));
    }
  });
  return list.join("-");
}

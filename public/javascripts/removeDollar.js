export function removeDollar(no) {
  let n = [...no];

  return n[0] == "$"
    ? parseFloat(n.splice(1, n.length).join("")).toFixed(2)
    : parseFloat(n.join("")).toFixed(2);
}

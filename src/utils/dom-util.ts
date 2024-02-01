export const generateRandomId = (size: number) => {
  let id = "element-";

  let i = 0;
  while (i < size) {
    id = id.concat(String(Math.random() * 10))
    i++;
  }

  return id;
}

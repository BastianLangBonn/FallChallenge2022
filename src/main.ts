// @ts-ignore
const rl = () => readline().split(" ");
let input = rl();
const width = +input[0];
const height = +input[1];

while (true) {
  input = rl();
  console.error(input);
  for (let i = 0; i < width * height; i++) {
    input = rl();
    console.error(input);
  }
  console.log("WAIT");
}

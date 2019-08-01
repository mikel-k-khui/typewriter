// Reference: Working typewriter function. Pairing with @rmcwhae

const sentence = "hello this is a test";

let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
  time += 50;
}

setTimeout(() => {
  process.stdout.write('\x07');
  process.stdout.write('\n');
}, time);
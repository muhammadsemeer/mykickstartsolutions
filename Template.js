function readInput() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  let problem = {
    T: 0,
    testCases: [],
  };

  rl.on("line", function (line) {
    // TODO: Process input
    if (problem.T === 0) {
      // Get number of test cases from first line
      problem.T = parseInt(line); // or parseFloat according to the type of T
    } else {
      // TODO process the rest of the data
      const [a, b] = line.split(" ");
      const aNum = parseInt(a); // or parseFloat according to the type of a
      const bNum = parseInt(b); // or parseFloat according to the type of b

      problem.testCases.push([aNum, bNum]);
    }
  })
  .on("close", () => {
    // Finished processing input, now solve question
    solveProblem(problem);
    process.exit();
  });
}

readInput();

function solveProblem(problem) {}

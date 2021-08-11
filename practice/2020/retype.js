function readInput() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    // terminal: false,
  });

  let problem = {
    T: 0,
    testCases: [],
  };

  rl.on("line", function (line) {
    // TODO: Process input
    if (problem.T === 0) {
      // Get number of test cases from first line
      problem.T = Number(line);
    } else {
      // TODO process the rest of the data
      const [n,k,s] = line.split(" ");

      problem.testCases.push([parseInt(n), parseInt(k), parseInt(s)]);
    }
  })
  .on("close", () => {
    // Finished processing input, now solve question
    solveProblem(problem);
    process.exit();
  });
}

readInput();

function solveProblem(problem) {
  for (let i = 0; i < problem.T; i++) {
    let answer1 = 0;
    let answer2 = 0;
    const [n, k, s] = problem.testCases[i];
    answer1 = k + n;
    answer2 = k + (k - s) + (n - s);
    console.log(`Case #${i + 1}: ${answer1 < answer2 ? answer1 : answer2}`);
  }
}

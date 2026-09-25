# Rock Paper Scissors

A console-based **Rock Paper Scissors** game built with vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

The game is played directly inside the browser's developer console over 5 rounds against a computer opponent.

---

## Features

- **Random Computer Moves:** Generates random picks using `Math.random()`.
- **User Input Handling:** Collects user decisions via interactive browser prompts.
- **Case-Insensitive Matchups:** Normalizes string inputs so entries like `"ROCK"`, `"rock"`, or `"RocK"` process correctly.
- **Score Tracking:** Keeps track of round wins and determines the overall match winner after 5 rounds.

---

## Concepts Learned & Skills Applied

Building this project provided hands-on practice with fundamental programming and problem-solving concepts:

- **JavaScript Fundamentals & Syntax:**
  - Declaring function scopes and understanding scope encapsulation (local vs. global variables).
  - Working with primitives (`String`, `Number`) and collection data types (`Array`).
  - Utilizing return values to pass dynamic state between functions.

- **Control Flow & Conditional Logic:**
  - Structuring multi-branch decision trees using `if / else if / else` statements combined with logical operators (`&&`, `||`).
  - Handling variable state transitions using `switch` case control blocks.
  - Executing repeated logic blocks using standard fixed-iteration `for` loops.

- **Data Normalization & Input Validation:**
  - Standardizing raw string inputs with `.toLowerCase()` to ensure resilient comparison operations regardless of user casing.

- **Built-in Browser & Math APIs:**
  - Using `prompt()` for simple browser-driven user input.
  - Leveraging `Math.random()` and `Math.floor()` to compute random array index offsets.
  - Logging status, round results, and final outcomes via `console.log()`.

- **Development Workflow & Problem Solving:**
  - Breaking down complex programmatic requirements into discrete, testable functions (pseudocoding and modular development).
  - Utilizing browser Developer Tools to execute, inspect, and debug JavaScript runtime behavior.

---

## File Structure

```text
├── index.html       # Minimal HTML wrapper linking the script
├── script.js        # Main game logic implementation
└── README.md        # Project documentation

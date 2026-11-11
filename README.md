# Rock Paper Scissors

A browser-based **Rock Paper Scissors** game featuring a graphical user interface (GUI), built with vanilla JavaScript, HTML, and CSS as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

The game is played directly on the webpage using interactive buttons, featuring dynamic score tracking, visual image updates, and a first-to-5-points winning condition.

---

## Live Demo

You can view and play the live project on GitHub Pages:  
**[Rock Paper Scissors Live Preview](https://herculesmar.github.io/Project-Rock-Paper-Scissors/)**

---

## Features

- **Graphical User Interface (GUI):** Play by clicking interactive buttons (**Rock**, **Paper**, **Scissors**) rather than using console prompts.
- **Dynamic Image Rendering:** Automatically displays and updates player and computer choice images dynamically via DOM manipulation.
- **Score & Round Tracking:** Keeps track of the current round and running scores for both the human player and the computer.
- **First to 5 Points Win Condition:** Automatically announces the winner once a player or the computer reaches 5 points.
- **Game Reset Capability:** Includes a play/reset button to restart the match cleanly at any time.

---

## How to Play

1. Visit the **[Live Demo](https://herculesmar.github.io/Project-Rock-Paper-Scissors/)** (or open `index.html` locally).
2. Click the **Play** button to initialize or reset the game.
3. Click one of the action buttons (**Rock**, **Paper**, or **Scissors**) to make your move.
4. View your choice and the computer's choice rendered on screen alongside the running score.
5. First to reach **5 points** wins the game!

---

## Concepts Learned & Skills Applied

Building this UI version of the project provided hands-on practice with DOM manipulation and event-driven programming:

- **DOM Manipulation & Element Generation:**
  - Selecting elements via `document.querySelector`.
  - Creating and appending elements dynamically using `document.createElement` and `appendChild`.
  - Modifying element properties such as `.textContent` and `.src` in real-time.
- **Event-Driven Programming:**
  - Attaching `click` event listeners to UI buttons to trigger round logic and game resets.
- **State Management & Refactoring:**
  - Tracking scores (`hs`, `cs`) and round counters dynamically.
  - Implementing game-flow controls to halt execution once a win condition is met.

---

## File Structure

```text
├── images/
│   ├── paper.jpeg       # Paper choice graphic
│   ├── rock.jpeg        # Rock choice graphic
│   ├── scissors.jpeg    # Scissors choice graphic
│   └── vs.png           # Versus graphic divider
├── index.html           # HTML document structure
├── index.js             # Main game logic, event listeners, and DOM updates
├── style.css            # Stylesheet for layout and UI presentation
├── LICENSE              # Project license file
└── README.md            # Project documentation

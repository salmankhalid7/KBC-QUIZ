# KBC (Kaun Banega Crorepati) Quiz Game

Welcome to the KBC Quiz Game! This is a simple console-based quiz game built using JavaScript, where players can test their knowledge by answering questions.

## Features
- **Multiple Choice Questions**: Players are presented with a question and four answer options.
- **Score Tracking**: The game keeps track of the player's score based on their answers.
- **Input Validation**: Ensures that the player inputs a valid number for their choice.

## How to Play
1. Clone the repository to your local machine using the command:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd kbc-quiz-game
   ```
3. Make sure you have Node.js installed on your system. If not, [download and install Node.js](https://nodejs.org/).
4. Install the required dependencies:
   ```bash
   npm install prompt-sync
   ```
5. Run the game:
   ```bash
   node kbc-quiz-game.js
   ```
6. Answer the questions by typing the number corresponding to your choice and pressing Enter.

## Game Flow
- The game starts by welcoming the player and displaying the first question.
- Players must select an option by entering the corresponding number.
- If the answer is correct, their score increases by 1.
- If the answer is incorrect, the game displays a message and moves on.
- The player's score is displayed after each question.

## Example Gameplay
```
								Welcome to KBC
							     Questions and Answers!
Question no:1
Who is the founder of Pakistan?
1. M. Ali Jinnah  2. Liaquat Ali Khan
3. Imran Khan     4. Donald Trump
Type here: 1
Your score is 1

Question no:2
Who is the PM of Pakistan?
1. Shahbaz Sharif  2. Liaquat Ali Khan
3. Imran Khan      4. Donald Trump
Type here: 1
Your score is 2
```

## Technologies Used
- **JavaScript**: The core programming language used to implement the game logic.
- **Node.js**: The runtime environment for executing the game.

## Future Improvements
- Add more questions to make the game more engaging.
- Implement a timer to add a sense of urgency for each question.
- Allow players to review their answers at the end of the game.
- Include levels of difficulty for questions.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository, make your changes, and submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
If you have any questions or feedback, feel free to contact the repository owner.

---
Enjoy playing the KBC Quiz Game and test your knowledge!


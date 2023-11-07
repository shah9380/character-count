# Character-Count GitHub Repository

This repository contains a simple web application that provides real-time character counting for a text input field. Users can type or paste text into the provided textarea, and the application displays the total character count along with the number of remaining characters within a specified limit. This README provides information about the repository, how to use the application, and explanations of key JavaScript elements.

## Features

- Real-time character counting for a text input field.
- Display of total characters and the number of remaining characters.
- Customizable character limit.

## Demo

You can see the live demo of the Character-Count application hosted on GitHub Pages by following this [link](https://shah9380.github.io/character-count/).

![image](https://github.com/shah9380/character-count/assets/130676464/6d5ecf26-5cc5-41e6-a7ca-561fe08553b5)


## Getting Started

To run this application locally or integrate it into your project, follow these simple steps:

1. Clone the repository to your local machine.

   ```shell
   git clone https://github.com/your-username/character-count.git
   ```

2. Open the `index.html` file in your web browser to use the application.

## Usage

1. Open the application in your web browser.
2. In the textarea, start typing or paste text.
3. As you type, the application will display the total character count and the number of remaining characters based on the specified limit.
4. You can customize the character limit by modifying the `maxlength` attribute of the textarea in the HTML file.

```html
<textarea id="textinarea" cols="10" rows="10" placeholder="Please write your text here..." maxlength="50"></textarea>
```

## JavaScript Elements and Their Purposes

In the JavaScript code (found in `script.js`), several elements are used to enable the real-time character counting feature. Here's an explanation of some of the key JavaScript elements and their purposes:

- **`document.addEventListener("DOMContentLoaded", function () { ... })`**: This code ensures that the JavaScript is executed after the HTML document is fully loaded. It's used to make sure that the JavaScript code doesn't run before the HTML elements are available for manipulation.

- **`const input_text = document.getElementById("textinarea");`**: This line selects the textarea element with the id "textinarea." It's necessary to access and listen to user input in the textarea.

- **`input_text.addEventListener("input", function (event) { ... });`**: This code adds an event listener to the textarea for the "input" event. It listens for changes in the textarea's content.

- **`const total_chars = document.getElementById("total-chars");` and `const rem_chars = document.getElementById("rem-chars");`**: These lines select the HTML elements that display the total character count and the number of remaining characters.

- **`const text = event.target.value;`**: This line retrieves the current content of the textarea when the user inputs text.

- **`const textLength = text.length;`**: It calculates the length (number of characters) of the text entered in the textarea.

- **`const maxChars = 50;`**: You can customize the character limit by changing this variable. It represents the maximum allowed characters in the textarea.

- **`total_chars.textContent = textLength;` and `rem_chars.textContent = maxChars - textLength;`**: These lines update the content of the HTML elements to display the total character count and the number of remaining characters as the user types.

## Customization

You can easily customize the application to suit your needs. Here are some possible customization options:

- Change the character limit by modifying the `maxlength` attribute in the HTML file.
- Modify the application's appearance by updating the CSS in the `style.css` file.

## Contributions

Contributions to this project are welcome! If you find a bug or have an idea for an enhancement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- Shah Misbahul Islam
- GitHub: [Your GitHub Profile](https://github.com/shah9380)

## Acknowledgments

This application was created as a simple and helpful tool for counting characters in real-time. It can be used in various web projects to provide character counting functionality.

Feel free to use, modify, and contribute to this project as needed. If you have any questions or suggestions, please reach out to the author or open an issue in the repository.

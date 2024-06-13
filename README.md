# Google AI Gemini Example

This project demonstrates how to securely use the Google AI Gemini API by handling API requests server-side with a Node.js backend and making requests from a client-side application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Security Considerations](#security-considerations)

## Installation

1. Clone the repository:


   ```sh
   git clone https://github.com/Gemini-api-competition/testing-gemini-api.git
   cd testing-gemini-api
   npm install
   npm run dev

2. Create a .env file in the project root and add your Google AI Gemini API key:
   ```sh
   API_KEY=your_api_key_here



### Explanation of Added Sections

- **Clone the repository**:Clone the repository: This command retrieves the project code from GitHub. You'll need Git installed on your system. You can find installation instructions on the official Git website (https://www.git-scm.com/downloads(https://git-scm.com/downloads)).
- **Install dependencies**: This command (npm install) uses the Node Package Manager (npm) to install all the necessary libraries required by the project. These libraries are specified in a file called package.json
- I added a step to create a `.env` file and add your Google AI Gemini API key to the `API_KEY` environment variable.
- I updated the usage section with the new `npm run dev` command, which uses `nodemon` to start the server and automatically restart it whenever you make changes to the code.
- I also mentioned that the server will run on `http://localhost:8000` by default.

Make sure to replace `your_api_key_here` in the `.env` file with your actual Google AI Gemini API key.

- **Security Considerations**: Do not share your API key publicly. It should be treated like a secret password and not be included in your code repository or embedded in the client-side application.


This `README.md` should provide clear instructions for setting up and using your project, as well as guidelines for contributing.

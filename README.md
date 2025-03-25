# Candidate Search

## Project Overview

This project implements a candidate search application that interacts with the GitHub API to retrieve and display candidate information. The application allows users to view candidate profiles, save potential candidates to a list, and manage the saved candidates. The app is built using TypeScript and deployed on Render.

## Features

- **GitHub API Integration**: The app fetches candidate data from the GitHub API, including the candidate’s name, username, location, avatar, email, HTML URL, and company.
- **Save Potential Candidates**: Users can save candidates by clicking the "+" button, which adds the candidate to a list of potential candidates.
- **Reject Candidates**: Users can skip candidates by clicking the "-" button, which moves to the next candidate without saving the current one.
- **Persistent Saved Candidates List**: The list of saved candidates persists even after the page reloads using local storage.
- **Candidate Information**: For each candidate, the following information is displayed:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - HTML URL
  - Company
- **Empty State Handling**: Appropriate messages are shown when there are no candidates to review or when there are no saved candidates.

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

Ensure you have the following installed:

- **Node.js**: The runtime for the application.
- **GitHub Personal Access Token**: Create a GitHub personal access token to increase the API rate limit. Follow the [instructions on creating a GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with default permissions for public repositories.

### Steps to Run Locally

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/candidate-search.git
    cd candidate-search
    ```
2. **Install Dependencies**:

    Install the necessary dependencies for both frontend and backend:

    ```bash
    npm install
    ```

3. **Run the Application Locally**:

    Start the development server:

    ```bash
    npm start

    ```

4. **Access the Application**:

    Visit `http://localhost:5173` in your browser to view the application.

## Deployment

The application is deployed on Render and can be accessed at the following live URL:

- [Live Application](https://candidate-search-1-jksg.onrender.com)  
- [GitHub Repository](https://github.com/Jacquilyn-F/candidate_search)

## Technologies Used

- **Frontend**: React, TypeScript, JSX, CSS
- **API Integration**: GitHub REST API
- **Local Storage**: For persisting saved candidates
- **Deployment**: Render

## License

This project is licensed under the MIT license.

## Questions

- If you have any questions, please feel free to contact me at [jacquilyn.fletcher89@gmail.com](mailto:jacquilyn.fletcher89@gmail.com).
- You can also find more of my work at [Jacquilyn-F](https://github.com/Jacquilyn-F).

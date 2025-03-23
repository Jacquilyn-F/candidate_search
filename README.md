# Candidate Search

Candidate Search is a React-based application that allows users to search for GitHub users, view their profiles, and save or reject candidates for further review.

## Features

- Search for GitHub users using the GitHub API.
- View detailed profiles of candidates, including their name, location, email, company, and bio.
- Save candidates for later review or reject them.
- View saved candidates on a dedicated page.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd candidate_search
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Usage

1. Navigate to the **Candidate Search** page to browse GitHub users.
2. Use the **Add** or **Reject** buttons to save or reject candidates.
3. View saved candidates on the **Saved Candidates** page.

## File Overview

- **`src/components/CandidateCard.tsx`**: Displays detailed information about a candidate and allows users to save or reject them.
- **`src/components/SavedCandidate.tsx`**: Displays a saved candidate in a table format with an option to reject them.
- **`src/pages/CandidateSearch.tsx`**: Handles the search functionality and displays candidates using the `CandidateCard` component.
- **`src/pages/SavedCandidatesPage.tsx`**: Displays all saved candidates in a table format using the `SavedCandidate` component.

## API Integration

This application uses the following GitHub API endpoints:
- **Search Users**: Fetches a list of GitHub users.
- **User Details**: Fetches detailed information about a specific GitHub user.

## Local Storage

Saved candidates are stored in the browser's `localStorage` under the key `savedCandidates`.

## Future Enhancements

- Add pagination for large search results.
- Implement a search bar for filtering saved candidates.
- Improve UI/UX with additional styling and animations.

## License

This project is licensed under the MIT License.
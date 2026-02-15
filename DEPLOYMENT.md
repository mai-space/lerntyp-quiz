# Lerntyp-Quiz Deployment Guide

## GitHub Pages Setup

To enable GitHub Pages for this project:

1. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow in `.github/workflows/deploy.yml` will automatically deploy when you push to the `main` branch

2. **First Deployment**:
   - Merge this pull request into the `main` branch
   - The GitHub Actions workflow will automatically build and deploy
   - Your site will be available at: `https://mai-space.github.io/lerntyp-quiz/`

3. **Subsequent Updates**:
   - Any push to the `main` branch will trigger automatic deployment
   - Check the "Actions" tab to monitor deployment progress

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:5173/lerntyp-quiz/

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
lerntyp-quiz/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/
│   │   ├── NameInput.jsx      # Name input component
│   │   ├── NameInput.css
│   │   ├── QuizQuestion.jsx   # Quiz question component
│   │   ├── QuizQuestion.css
│   │   ├── Result.jsx         # Results display component
│   │   └── Result.css
│   ├── data/
│   │   └── quizData.js        # Quiz questions and learning types
│   ├── utils/
│   │   └── storage.js         # Local storage utilities
│   ├── App.jsx                # Main application component
│   ├── App.css
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## Features

- **Multi-step Quiz**: 10 questions about learning preferences
- **Learning Type Detection**: Identifies visual, auditory, kinesthetic, or reading/writing learner
- **Local Storage**: Saves all attempts for comparison
- **Export**: Download quiz results as JSON
- **Comparison**: Compare current results with previous attempts
- **Responsive Design**: Works on all devices
- **German Language**: Complete UI in German

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

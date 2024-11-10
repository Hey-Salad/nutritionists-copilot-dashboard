# Nutritionists Copilot Dashboard - Google Cloud Gemini Hackathon
Authored by **Peter Machonan** for **HeySalad** on 10th Nov 2024

Welcome to the **Nutritionists Copilot Dashboard**! This project is an open-source dashboard tailored specifically for nutritionists. It leverages advanced AI technology, including **Large Language Models (LLMs)** and **Retrieval-Augmented Generation (RAGs)**, to support nutrition professionals in delivering personalized dietary recommendations, managing client information, and generating insights. 

We welcome contributions from developers, nutritionists, and anyone interested in improving this tool.

## 📋 Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features
- **Client Management**: Easily organize and access client profiles, including dietary preferences, health goals, and nutritional needs.
**Personalized Recommendations**: Generate customized meal plans and advice using LLMs powered by RAGs to pull from both general and specialized nutritional knowledge.
 **Insight Generation**: Quickly generate insights and data visualizations to track client progress and outcomes.\n- **Scalable and Secure**: Built to handle a range of data while prioritizing privacy and security.
**Open Source**: We encourage the community to contribute new features, improvements, and bug fixes.

## 🧠 Technologies
The dashboard utilizes a combination of technologies to deliver an efficient and interactive experience:
- **Large Language Models (LLMs)**: For generating natural language responses and dietary advice.
- **Retrieval-Augmented Generation (RAGs)**: Enables precise information retrieval to support evidence-based recommendations.
- **Frontend**: Built with [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [React](https://reactjs.org/) for a responsive, user-friendly interface.
- **Backend**: Integrated with Firebase for authentication, storage, and real-time data handling.
- **Other Tools**: [Node.js](https://nodejs.org/) and other JavaScript libraries for optimized performance and flexibility.

## 🚀 Getting Started 
To get started with the Nutritionists Copilot Dashboard, follow the instructions below.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Firebase account](https://firebase.google.com/) (for backend integration)
- API access to the LLMs you intend to use (e.g., OpenAI, Hugging Face, etc.)

### Installation
 **Clone the Repository**:
   ```bash
      git clone https://github.com/Hey-Salad/nutritionists-copilot-dashboard.git
      cd nutritionists-copilot-dashboard
```

**Install Dependencies**:   
```bash  
   npm install
 ```
**Environment Configuration**:
Create a .env file in the project root directory with the following configuration:

 ```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
Replace the placeholder values with your actual credentials from your Firebase Console under Project Settings.
🔒 **Important**: Never commit your .env file to version control. Make sure it's included in your .gitignore file. 

**Run the Application**:
```bash
 npm run dev
```
## 💡 Usage
- Set up your nutritionist profile
- Add and manage client information
- Generate AI-powered meal plans and recommendations
- Track client progress with visual analytics
- Export reports and insights

## 🤝 Contributing
We're excited to make this project open-source and welcome contributions from the community! Here's how you can contribute:

Fork the Repository 

Create a Feature Branch:
 `git checkout -b feature/AmazingFeature` 

Commit Changes: 
`git commit -m 'Add some AmazingFeature'`

Push to Branch: `git push origin feature/AmazingFeature`

Open a Pull Request
### 🎯 Areas for Contribution
- UI/UX improvements
- Additional AI model integrations
- New features for nutritionists
- Documentation improvements
- Bug fixes and optimizations
- Internationalization

### 📜 Code of Conduct
nWe're committed to fostering an open and welcoming environment. Please read our Code of Conduct before contributing.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Google Gemini Hackathon organizers and mentors
- The HeySalad Team
- The open-source community

Built with ❤️ for the Google Gemini Hackathon

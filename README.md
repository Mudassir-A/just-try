# Just-Try

Welcome to **Just-Try**! This project features a seamless integration of a Flask backend and a React frontend, created using Vite.js. **Just-Try** is a fashion recommendation system that utilizes content-based filtering to recommend products based on user interactions. Follow the steps below to get started.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [Python](https://www.python.org/downloads/) (v3.6 or later)
- [Flask](https://flask.palletsprojects.com/en/2.0.x/)

### Additional Information

- **Frontend:** Built with React and Vite.
- **Backend:** Built with Flask.
- **Database:** Uses Firebase for security and authentication.

### Content-Based Filtering

Content-based filtering is a recommendation system technique that suggests items to users based on the features of the items and the preferences of the user. In this system, the algorithm analyzes the characteristics of products that a user has interacted with (such as viewed or purchased items) and recommends similar products. This approach allows for personalized recommendations tailored to individual user tastes, enhancing the overall user experience.

![alt text](https://cdn.botpenguin.com/assets/website/Screenshot_2024_02_26_at_5_55_51_PM_9dcbe67761.webp)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/just-try.git
   cd just-try
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm i --legacy-peer-deps
   ```

3. **Install backend dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Add the following script to your `package.json` in the frontend directory:**
   ```json
   "scripts": {
       "both": "concurrently \"npm run dev\" \"cd ./backend && flask run\""
   }
   ```
5. **For building models, download the notebook from the colab link and save it to the `backend/notebooks/` directory:**
   [Colab Link](https://colab.research.google.com/drive/1JiZCyvLjhdZyZYfYd57S4nqF0CMC_lX7)
### Running the Application

To run both the frontend and backend simultaneously, execute the following command from the `frontend` directory:

```bash
npm run both
```

This will start the Vite development server and the Flask backend. You can access the application at `http://localhost:5000`.

Feel free to explore and modify the code to suit your needs. Happy coding!

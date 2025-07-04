# 📋 Personal Task Tracker

## 📖 Description
A simple and intuitive personal task management application built with React. This app allows users to manage their daily tasks with features like adding, editing, deleting, and filtering tasks. All data is stored locally in the browser's localStorage, ensuring your tasks persist between sessions.

## 🚀 Features

### Core Features
- **Simple Login System**: Basic username authentication (stored in localStorage)
- **Task Management**: 
  - ➕ Add new tasks with title and optional description
  - ✏️ Edit existing tasks inline
  - 🗑️ Delete tasks with confirmation prompt
  - ✅ Toggle tasks between completed and pending status
- **Task Display**: 
  - Clean, card-based layout
  - Visual distinction between completed and pending tasks
  - Shows creation date and time for each task
  - Task status indicators with emojis
- **Task Filtering**: 
  - 📋 All tasks
  - ⏳ Pending tasks only
  - ✅ Completed tasks only
  - Dynamic task counts for each filter
- **Data Persistence**: All tasks stored in localStorage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### UI/UX Features
- Modern, gradient-based design
- Smooth animations and transitions
- Hover effects and visual feedback
- Mobile-first responsive design
- Accessible color contrasts and typography
- Intuitive iconography throughout the app

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/AAGAM17/task-tracker.git
   cd task-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app

## 🧰 Technologies Used

- **React.js** (v18) - Frontend framework
- **React Hooks** - State management (useState, useEffect)
- **CSS3** - Styling with modern features
- **localStorage API** - Data persistence
- **ES6+** - Modern JavaScript features

## 🔗 Live Demo
https://task-tracker-henna-five.vercel.app

## 🖼 Screenshots

<img width="1679" alt="Screenshot 2025-07-04 at 10 37 00 PM" src="https://github.com/user-attachments/assets/dab3b8a9-26f9-4b67-ab28-c934a9da741d" />
<img width="1680" alt="Screenshot 2025-07-04 at 10 38 22 PM" src="https://github.com/user-attachments/assets/b21e5043-02db-408f-97c4-d952a10233c4" />
<img width="1680" alt="Screenshot 2025-07-04 at 10 38 33 PM" src="https://github.com/user-attachments/assets/ec93f3fc-8841-4da3-9b06-4a8936f6e562" />
<img width="1465" alt="Screenshot 2025-07-04 at 10 38 53 PM" src="https://github.com/user-attachments/assets/a7646e51-6e3e-47f1-b0ba-b0e6e5388521" />
<img width="1530" alt="Screenshot 2025-07-04 at 10 39 38 PM" src="https://github.com/user-attachments/assets/85b00cad-f145-4af2-b0fe-e2b1a5761534" />

## 📁 Project Structure

```
task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js          # User authentication component
│   │   ├── TaskForm.js       # Add/edit task form
│   │   ├── TaskItem.js       # Individual task display
│   │   ├── TaskList.js       # Tasks container with empty states
│   │   └── TaskFilter.js     # Filter buttons and task counts
│   ├── utils/
│   │   └── localStorage.js   # localStorage utility functions
│   ├── styles/
│   │   ├── App.css          # Main app styles
│   │   ├── Login.css        # Login component styles
│   │   ├── TaskForm.css     # Form styles
│   │   ├── TaskItem.css     # Task item styles
│   │   ├── TaskList.css     # Task list styles
│   │   └── TaskFilter.css   # Filter component styles
│   ├── App.js               # Main application component
│   └── index.js             # Application entry point
├── README.md
└── package.json
```

## 🎯 Key Components

### Login Component
- Simple username input with validation
- Stores user data in localStorage
- Modern card-based design with gradient background

### TaskForm Component
- Handles both adding new tasks and editing existing ones
- Form validation for required fields
- Responsive design with proper error handling

### TaskItem Component
- Displays individual tasks with actions
- Toggle completion status
- Edit and delete functionality
- Shows creation timestamp

### TaskFilter Component
- Filter buttons for different task states
- Dynamic task counts
- Active state styling

### TaskList Component
- Displays filtered tasks
- Empty states with helpful messages
- Smooth animations for task items

## 💾 Data Management

### localStorage Structure
```javascript
// User data
{
  username: "string"
}

// Tasks data
[
  {
    id: "unique-id",
    title: "Task title",
    description: "Optional description",
    completed: boolean,
    createdAt: "ISO date string"
  }
]
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1200px+): Full layout with all features
- **Tablet** (768px - 1199px): Adapted layout with touch-friendly controls
- **Mobile** (480px - 767px): Single-column layout with optimized spacing
- **Small Mobile** (<480px): Compact design with stacked elements

## 🎨 Design System

### Colors
- **Primary Gradient**: #667eea to #764ba2
- **Success**: #28a745 (completed tasks)
- **Warning**: #ffc107 (pending tasks)
- **Danger**: #dc3545 (delete actions)
- **Background**: #f5f7fa

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, etc.)
- **Headings**: 600 weight, optimized line-height
- **Body**: 400 weight, 1.6 line-height for readability

## 🚀 Future Enhancements

Potential features for future versions:
- Search functionality across tasks
- Task priority levels (high, medium, low)
- Due dates with calendar integration
- Task categories/tags with color coding
- Dark mode toggle
- Export/import functionality
- Task statistics and analytics
- Drag-and-drop reordering

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

---

**Happy Task Tracking!** 🎉

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

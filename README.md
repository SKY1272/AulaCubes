# AulaCubes
# Task Management App.
## Project Structure
**src**: Contains the source code of the React application.
  - **components**: Directory for React components.
    - `TaskList.js`: Component to display the list of tasks.
    - `AddTaskModal.js`: Component to add new tasks.
    - `EditTaskModal.js`: Component to edit existing tasks.
  - **App.js**: Main application component.
  - **index.js**: Entry point of the application.
- **styles**: Directory containing CSS files for styling components.
  - `TaskList.css`: Styles for the TaskList component.
  - `AddTaskModal.css`: Styles for the AddTaskModal component.
  - `EditTaskModal.css`: Styles for the EditTaskModal component
  - ## Design Choices

### React Router Implementation
- Utilized React Router for navigation between different pages (task list, add task, edit task).
- Implemented navigation using `<Link>` components for a seamless user experience.

### TaskList Component
- TaskList component displays tasks with checkboxes, task details, edit, and delete buttons.
- Tasks are stored in state and managed using useState hook.
- Implemented functions for task completion, deletion, and task edit modal display.

### AddTaskModal Component
- AddTaskModal component provides a form to add new tasks.
- Validates input fields and prevents adding tasks without a name.

### EditTaskModal Component
- EditTaskModal component allows editing existing tasks.
- Validates input fields and updates tasks on the task list.

## Additional Features

### CSS Styling
- Implemented CSS styling for components to enhance the UI and provide a pleasant user experience.
- Utilized CSS for TaskList, AddTaskModal, and EditTaskModal components to improve readability and usability.

### Readability and Modularity
- Code structured into separate components for reusability and maintainability.
- CSS styles organized into separate files corresponding to each component.

## Running the Application
To run the application locally:
1. Clone the repository.
2. Install dependencies using `npm install`
3. 3. Start the development server using `npm start`.
4. Open the browser and navigate to `http://localhost:3001`.

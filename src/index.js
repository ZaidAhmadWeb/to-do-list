import './style.css';




function Todo(title, description, dueDate, priority, notes = []) {
    let completed = false;
    function toggleComplete() {
        completed = !completed;
    }
    return { title, description, dueDate, priority, notes,get completed(){ return completed; }, set completed(value) { completed = value; }, toggleComplete };
}



function Project(name) {
    let todos = [];

    function addTodo(todo) {
        todos.push(todo);
    }

    function removeTodo(todoIndex) {
        todos.splice(todoIndex, 1);
    }

    return {
        name,
        get todos() {
            return todos;
        },
        addTodo,
        removeTodo
    };
}



const newproject = Project("joining gym");


let projects = [];
// Utility to save projects and todos to localStorage
function saveToLocalStorage() {
    const projectsData = projects.map(project => {
        return {
            name: project.name,
            todos: project.todos.map(todo => ({
                title: todo.title,
                description: todo.description,
                dueDate: todo.dueDate,
                priority: todo.priority,
                notes: todo.notes,
                completed: todo.completed,
            }))
        };
    });
    localStorage.setItem('projects', JSON.stringify(projectsData));
}



// Load projects from localStorage
function loadFromLocalStorage() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        parsedProjects.forEach(projectData => {
            const project = Project(projectData.name);
            projectData.todos.forEach(todoData => {
                const todo = Todo(todoData.title, todoData.description, todoData.dueDate, todoData.priority, todoData.notes);
                todo.completed = todoData.completed; // Restore the completed status
                project.addTodo(todo);
            });
            projects.push(project);
        });
    } else {
        const initialProject = Project("joining gym");
        const todo1 = Todo("go to gym", "I am going to gym every Saturday", "12/12/2024", "High", ["take water", "take pre-gym", "take towel along"]);
        const todo2 = Todo("go to walk", "Walk every Saturday", "12/12/2024", "Medium", ["take water", "take pre-gym", "take towel along"]);
        initialProject.addTodo(todo1);
        initialProject.addTodo(todo2);
        projects.push(initialProject);
        saveToLocalStorage(); // Save initial data to localStorage
    }
}

// Initialize projects from localStorage when page loads
loadFromLocalStorage();

// Function to render todos
function renderTodos(todos) {
    const mainContent = document.getElementById('maincontent');
    mainContent.innerHTML = '';

    const addTodoButton = document.createElement('button');
    addTodoButton.id = 'add-todo-btn';
    addTodoButton.textContent = '+';
    addTodoButton.title = 'Add New Todo';
    addTodoButton.className = 'add-todo-btn';

    addTodoButton.addEventListener('click', () => {
        if (currentProject) {
            const modal = document.createElement('div');
            modal.className = 'modal';

            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.placeholder = 'Enter Todo Title';
            titleInput.required = true;

            const descriptionInput = document.createElement('textarea');
            descriptionInput.placeholder = 'Enter Todo Description';
            descriptionInput.required = true;

            const dateInput = document.createElement('input');
            dateInput.type = 'date';
            dateInput.required = true;

            const prioritySelect = document.createElement('select');
            const priorities = ['High', 'Medium', 'Low'];
            priorities.forEach(priority => {
                const option = document.createElement('option');
                option.value = priority;
                option.textContent = priority;
                prioritySelect.appendChild(option);
            });

            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.className = 'save-btn';

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.className = 'cancel-btn';

            modalContent.appendChild(titleInput);
            modalContent.appendChild(descriptionInput);
            modalContent.appendChild(dateInput);
            modalContent.appendChild(prioritySelect);
            modalContent.appendChild(saveButton);
            modalContent.appendChild(cancelButton);

            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            saveButton.addEventListener('click', () => {
                const title = titleInput.value.trim();
                const description = descriptionInput.value.trim();
                const dueDate = dateInput.value.trim();
                const priority = prioritySelect.value;

                if (title && description && dueDate && priority) {
                    const newTodo = Todo(title, description, dueDate, priority);
                    currentProject.addTodo(newTodo);
                    renderTodos(currentProject.todos);
                    saveToLocalStorage();
                    document.body.removeChild(modal);
                } else {
                    alert('All fields are required to create a todo item.');
                }
            });

            cancelButton.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        } else {
            alert('No project selected!');
        }
    });

    mainContent.appendChild(addTodoButton);

    todos.forEach((todo, index) => {
        const todoElement = document.createElement('div');
        todoElement.className = `todo-item ${todo.priority.toLowerCase()}`;
        todoElement.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>Due Date: ${todo.dueDate}</p>
            <p>Priority: ${todo.priority}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        const editButton = todoElement.querySelector('.edit-btn');
        editButton.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal';
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.value = todo.title;

            const descriptionInput = document.createElement('textarea');
            descriptionInput.value = todo.description;

            const dateInput = document.createElement('input');
            dateInput.type = 'date';
            dateInput.value = todo.dueDate;

            const prioritySelect = document.createElement('select');
            const priorities = ['High', 'Medium', 'Low'];
            priorities.forEach(priority => {
                const option = document.createElement('option');
                option.value = priority;
                option.textContent = priority;
                if (priority === todo.priority) option.selected = true;
                prioritySelect.appendChild(option);
            });

            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';

            modalContent.appendChild(titleInput);
            modalContent.appendChild(descriptionInput);
            modalContent.appendChild(dateInput);
            modalContent.appendChild(prioritySelect);
            modalContent.appendChild(saveButton);
            modalContent.appendChild(cancelButton);

            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            saveButton.addEventListener('click', () => {
                todo.title = titleInput.value.trim();
                todo.description = descriptionInput.value.trim();
                todo.dueDate = dateInput.value.trim();
                todo.priority = prioritySelect.value;

                renderTodos(currentProject.todos);
                saveToLocalStorage();
                document.body.removeChild(modal);
            });

            cancelButton.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });

        const deleteButton = todoElement.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            currentProject.removeTodo(index);
            renderTodos(currentProject.todos);
            saveToLocalStorage();
        });

        mainContent.appendChild(todoElement);
    });
}

// Render the projects and handle add/edit/delete actions
function renderProjects(projects) {
    const sideContent = document.getElementById('sidecontent');
    sideContent.innerHTML = '';

    const addProjectButton = document.createElement('button');
    addProjectButton.id = 'add-project-btn';
    addProjectButton.textContent = '+';
    addProjectButton.title = 'Add New Project';
    addProjectButton.className = 'add-project-btn';

    addProjectButton.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Enter Project Name';
        nameInput.required = true;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.className = 'save-btn';

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.className = 'cancel-btn';

        modalContent.appendChild(nameInput);
        modalContent.appendChild(saveButton);
        modalContent.appendChild(cancelButton);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        saveButton.addEventListener('click', () => {
            const name = nameInput.value.trim();
            if (name) {
                const newProject = Project(name);
                projects.push(newProject);
                renderProjects(projects);
                saveToLocalStorage();
                document.body.removeChild(modal);
            } else {
                alert('Project name is required!');
            }
        });

        cancelButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });

    sideContent.appendChild(addProjectButton);

    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-item';

        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <button class="delete-project-btn">🗑️</button>
        `;

        const deleteProjectButton = projectElement.querySelector('.delete-project-btn');
        deleteProjectButton.addEventListener('click', () => {
            projects.splice(index, 1); // Remove project
            renderProjects(projects);
            saveToLocalStorage();
        });

        projectElement.addEventListener('click', () => {
            currentProject = project;
            renderTodos(project.todos);
        });

        sideContent.appendChild(projectElement);
    });
}

// Variable to store the current selected project
let currentProject = null;

// Initial render of projects
renderProjects(projects);

# Cars Project Website - Angular, Node.js, and MongoDB
This project aims to create a car dealership website with car selection, editing and adding new models and saving them to favorites using Angular framework for frontend, Node.js for backend and MongoDB for database. The website will allow users to register or login to an existing profile using the MongoDB database. On the site, you can view available cars, read the description, edit, delete or even add new models. The project now focuses on front-end development using Angular. Next steps include implementing the backend using Node.js and integrating it with MongoDB.

> 1. User registration. The data is entered into the database.

![Alt-текст](images\Register.png "Register")
> 2. Cars list

![Alt-текст](images\Home.png "Home")
> 3. Add, details, edit and delete

![Alt-текст](images\maintenance.png "Maintenance")
> 4. Adding to favorites

![Alt-текст](images\Top.png "Top")
___
## Stage 1: Frontend (Angular)

In this step, we will develop a website interface for a car dealership using the Angular framework. Angular is a powerful and popular front-end development platform that allows us to create dynamic and responsive user interfaces.

### Prerequisites

Before proceeding with the setup, ensure that you have the following tools and technologies installed on your system:

- Node.js and npm (Node Package Manager)
- Angular CLI (Command Line Interface)

### Setting up the Frontend

Follow these steps to set up and run the frontend of the website:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the frontend directory:

```bash
cd frontend
```

3. Install the required dependencies:

```bash
npm install
```

4. Run the Angular development server:

```bash
ng serve
```

5. Open your web browser and access the website at `http://localhost:4200/`.
## Stage 2: Backend (Node.js) and Database (MongoDB)

The next phase of the project will focus on building the backend using Node.js and setting up the MongoDB database. The server will authenticate users, manage dealership data, and interface with the database to store data.
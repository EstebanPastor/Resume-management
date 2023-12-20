Resume Management System
Overview

Welcome to the Resume Management System, a web application built with .NET 7 and React. This system allows users to manage and organize their resumes in a centralized location, making it easy to update, track, and share professional information.
Features

  
    Resume Creation and Editing: Easily create, edit, and update resumes with an intuitive user interface.

    Resume Organization: Categorize resumes based on different criteria such as job title, industry, or status.

    Search and Filter: Efficiently search and filter resumes to quickly find the information you need.

    Export and Sharing: Export resumes in various formats (PDF, Word) and share them with employers or colleagues.

    Responsive Design: A user-friendly interface that adapts to different screen sizes and devices.

Technologies Used

    Frontend:
        React
        TypeScript
        CSS/SCSS for styling

    Backend:
        .NET 7
        C#
        ASP.NET Core
        Entity Framework Core (for database operations)
        RESTful API endpoints

    Database:
        SQL Server.

Getting Started

    Clone the repository:

    bash

git clone https://github.com/EstebanPastor/Resume-management

Navigate to the project folder:

bash

cd resume-management-system

Set up the frontend:

bash

cd client
yarn

Set up the backend:

bash

cd ../backend
dotnet restore

Configure the database connection in appsettings.json in the Server project.

Run the application:

bash

    dotnet run

    Access the application in your browser at http://localhost:5000.

Contribution Guidelines


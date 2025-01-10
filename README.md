# Employee Tracker CMS

## Video Walkthrough

https://github.com/user-attachments/assets/0dd15849-a7ee-4ab3-8250-cb71c64a3993


## Description
The **Employee Tracker CMS** is a command-line content management system designed to help businesses manage their employee databases with ease. It allows users to:

- View all departments, roles, and employees.
- Add new departments, roles, and employees.
- Update employee roles.

This project utilizes **Node.js**, **TypeScript**, **PostgreSQL**, and **Inquirer.js** to provide an intuitive and efficient way to manage organizational data, and keep track of employees.

## Features
- **View Information**: Retrieve and display all departments, roles, and employees.
- **Add Data**: Add new departments, roles with salaries, and employees with assigned roles and managers.
- **Update Roles**: Modify an employee’s role in the database.
- **User-Friendly Interface**: Navigate options easily with Inquirer.js prompts.

## Technologies Used
- **Node.js**
- **TypeScript**
- **PostgreSQL**
- **Inquirer.js**
- **Dotenv** for environment variable management

## Prerequisites
Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) 
- [PostgreSQL](https://www.postgresql.org/)

## Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:JT-code-dev/employee_tracker.git
   cd employee_tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Open the `main/db/schema.sql` file and run its contents in PostgreSQL to create the database and tables.
   - Open the `main/db/seeds.sql` file and run its contents to seed the database with initial data.

4. Create a `.env` file in the `main` directory with the following variables:
   ```env
   DB_HOST=localhost
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   DB_NAME=employee_cms
   DB_PORT=5432
   ```

## Usage
1. Build the project:
 ```
   npm run build
```

2. Start the application:
   ```
   npm run start
   ```

3. Select an option from the menu to view, add, or update data.

## Scripts
- `npm run build`: Transpile TypeScript files to JavaScript.
- `npm run start`: Start the application.
- `npm run dev`: Run the application in development mode using `ts-node`.
- `npm run clean`: Remove the `dist` folder.

## File Structure
```
employee_tracker/
├── main/
│   ├── db/
│   │   ├── schema.sql
│   │   ├── seeds.sql
│   ├── src/
│   │   ├── index.ts
│   │   ├── queries.ts
│   ├── .env
├── dist/
├── package.json
├── tsconfig.json
├── .gitignore
```

## Contributing
Please contribute if you wish! Go ahead and fork the repository, create a new branch, commit your changes, and then push it to the branch and run a pull request. 

## License
This project is licensed under the MIT License. 


## Contact
For questions or suggestions, please contact:
- **Author**: Jennifer H. Thompson
- **Email**: writejthompson@gmail.com
- **GitHub**: [JT-code-dev](https://github.com/JT-code-dev)



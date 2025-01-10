import dotenv from "dotenv";
import inquirer from "inquirer";
import { getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, } from "./queries.js";
dotenv.config();
const mainMenu = async () => {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit",
            ],
        },
    ]);
    switch (action) {
        case "View all departments":
            console.table(await getAllDepartments());
            break;
        case "View all roles":
            console.table(await getAllRoles());
            break;
        case "View all employees":
            console.table(await getAllEmployees());
            break;
        case "Add a department":
            const { departmentName } = await inquirer.prompt([
                { type: "input", name: "departmentName", message: "Enter department name:" },
            ]);
            console.log("Added department:", await addDepartment(departmentName));
            break;
        case "Add a role":
            const { roleName, roleSalary, departmentId } = await inquirer.prompt([
                { type: "input", name: "roleName", message: "Enter role name:" },
                { type: "input", name: "roleSalary", message: "Enter role salary:" },
                { type: "input", name: "departmentId", message: "Enter department ID:" },
            ]);
            console.log("Added role:", await addRole(roleName, parseFloat(roleSalary), parseInt(departmentId)));
            break;
        case "Add an employee":
            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                { type: "input", name: "firstName", message: "Enter first name:" },
                { type: "input", name: "lastName", message: "Enter last name:" },
                { type: "input", name: "roleId", message: "Enter role ID:" },
                { type: "input", name: "managerId", message: "Enter manager ID (optional):", default: null },
            ]);
            console.log("Added employee:", await addEmployee(firstName, lastName, parseInt(roleId), managerId ? parseInt(managerId) : null));
            break;
        case "Update an employee role":
            const { employeeId, newRoleId } = await inquirer.prompt([
                { type: "input", name: "employeeId", message: "Enter employee ID:" },
                { type: "input", name: "newRoleId", message: "Enter new role ID:" },
            ]);
            console.log("Updated employee:", await updateEmployeeRole(parseInt(employeeId), parseInt(newRoleId)));
            break;
        case "Exit":
            console.log("Goodbye!");
            process.exit();
    }
    await mainMenu();
};
mainMenu();

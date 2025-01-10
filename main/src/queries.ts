import { Client } from "pg";

const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "5432"),
});


db.connect()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err));

  console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });

export const getAllDepartments = async () => {
  const query = "SELECT id, name FROM department;";
  const res = await db.query(query);
  return res.rows;
};

export const getAllRoles = async () => {
  const query = "SELECT id, title FROM role;";
  const res = await db.query(query);
  return res.rows;
};

export const getAllEmployees = async () => {
  const query = `
    SELECT e.id, e.first_name, e.last_name, r.title AS role, r.salary, d.name AS department,
           CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r ON e.role_id = r.id
    LEFT JOIN department d ON r.department_id = d.id
    LEFT JOIN employee m ON e.manager_id = m.id;
  `;
  const res = await db.query(query);
  return res.rows;
};

export const addDepartment = async (name: string) => {
  const query = "INSERT INTO department (name) VALUES ($1) RETURNING *;";
  const values = [name];
  const res = await db.query(query, values);
  return res.rows[0];
};

export const addRole = async (title: string, salary: number, departmentId: number) => {
  const query = `
    INSERT INTO role (title, salary, department_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [title, salary, departmentId];
  const res = await db.query(query, values);
  return res.rows[0];
};

export const addEmployee = async (
  firstName: string,
  lastName: string,
  roleId: number,
  managerId: number | null
) => {
  const query = `
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [firstName, lastName, roleId, managerId];
  const res = await db.query(query, values);
  return res.rows[0];
};

export const updateEmployeeRole = async (employeeId: number, roleId: number) => {
  const query = "UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *;";
  const values = [roleId, employeeId];
  const res = await db.query(query, values);
  return res.rows[0];
};

// Close the database connection on app exit
process.on("exit", () => {
  db.end();
});

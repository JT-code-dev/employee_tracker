-- Insert departments
INSERT INTO department (name) VALUES
('Engineering'), ('Sales'), ('Environmental Services'), ('Finance'), ('Human Resources');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 75000, 1),
('Senior Software Engineer', 95000, 1),
('Sales Manager', 65000, 2),
('Sales Associate', 45000, 2),
('Environmentalist', 55000, 3),
('Senior Environmentalist', 75000, 3),
('Accountant', 55000, 4),
('HR Specialist', 60000, 5);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 3, NULL),
('Charlie', 'Berube', 5, NULL),
('Alice', 'Johnson', 5, 3),
('Sarah', 'Connor', 4, 2),
('Robert', 'Williams', 2, NULL),
('Emily', 'Davis', 1, 6),
('Michael', 'Brown', 8, NULL),
('Taylor', 'Swift', 7, NULL),
('Liam', 'Taylor', 6, NULL);

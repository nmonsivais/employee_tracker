USE employee_Tracker;

INSERT INTO department (dept_id, dept_name)
VALUES (1, "None");

INSERT INTO department (dept_id, dept_name)
VALUES (2, "Engineering");

INSERT INTO department (dept_id, dept_name)
VALUES (3, "Sales");

INSERT INTO department (dept_id, dept_name)
VALUES (4, "Marketing");

INSERT INTO department (dept_id, dept_name)
VALUES (5, "Accounting");

INSERT INTO department (dept_id, dept_name)
VALUES (6, "Legal Team");
-- ----------------------------------------------------------
INSERT INTO emp_role (role_id, title, salary, department_id)
VALUES (1, "Sales Lead", 50000, 2);

INSERT INTO emp_role (role_id, title, salary, department_id)
VALUES (2, "Salesperson", 40000, 3);

INSERT INTO emp_role (role_id, title, salary, department_id)
VALUES (3, "Lead Engineer", 70000, 4);

INSERT INTO emp_role (role_id, title, salary, department_id)
VALUES (4, "Software Engineer", 65000, 5);

INSERT INTO emp_role (role_id, title, salary, department_id)
VALUES (5, "Accountant", 45000, 6);

INSERT INTO emp_role (role_id, title, salary, department_id)
VALUES (6, "Account Manager", 55000, 7);

INSERT INTO emp_role (role_id, title, salary, department_id)
VALUES (7, "Legal Team Lead", 100000, 8);
-- ------------------------------------------------------------
INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Brad", "Pitt", 1, 2);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (2, "Noe", "Monsivais", 4, 0);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (3, "Juan", "Alvarado", 3, 5);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (4, "Felicia", "Day", 4, 0);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (5, "Alec", "Up", 5, 0);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (6, "Ricardo", "Arjona", 5, 7);

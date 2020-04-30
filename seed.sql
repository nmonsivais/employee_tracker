USE employee_Tracker;

INSERT INTO department (dept_id, dept_name)

VALUES (1, "NONE");

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

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES ()

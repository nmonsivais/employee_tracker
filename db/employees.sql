DROP DATABASE IF EXISTS employee_Tracker;
CREATE DATABASE employee_Tracker;

USE employee_Tracker;

CREATE TABLE department 
(
  dept_id INTEGER AUTO_INCREMENT NOT NULL,
  dept_name varchar(30) NOT NULL,
  PRIMARY KEY (dept_id)
);

CREATE TABLE emp_role 
(
  role_id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(30) NOT NULL,
  department_id INTEGER(10) NOT NULL,
  PRIMARY KEY (role_id),
  FOREIGN KEY (department_id) REFERENCES department(dept_id)
);

CREATE TABLE employee 
(
  emp_id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name  VARCHAR(30) NOT NULL,
  role_id INTEGER(10) NOT NULL,
  manager_id INTEGER(10),
  PRIMARY KEY (emp_id),
  FOREIGN KEY (role_id) REFERENCES emp_role(role_id)
  FOREIGN KEY (manager_id) REFERENCES employee(emp_id)
);

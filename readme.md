# PostgreSQL CRUD Demo

This project connects to a PostGres SQL DB and performs simple CRUD operations on a "student " table. The video will be located on my blog, @ https://tariqblog89.blogspot.com/2025/11/a3-sql.html
### How To Run:
1. make sure PostgreSQL is running and a database named **schooldb** exists.
2. export your connection info:
   ```bash
   export PGHOST=localhost PGPORT=5432 PGUSER=postgres PGPASSWORD=rolling12 PGDATABASE=schooldb
3. Start up the DB from the terminal and copy and paste this: 
```
-- drop the table if it already exists
   DROP TABLE IF EXISTS students;

"-- create the students table
CREATE TABLE students (
student_id SERIAL PRIMARY KEY,
first_name TEXT NOT NULL,
last_name  TEXT NOT NULL,
email TEXT NOT NULL UNIQUE,
enrollment_date DATE
);


-- insert the initial data
INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-09-01'),
('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01'),
('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02');

-- verify
SELECT * FROM students;"
```

4.Run the NODEJE script to see CRUD operations in action.

### Application Functions

getAllStudents() – shows all students in the table.
addStudent() – adds a new student.
updateStudentEmail() – changes a student’s email.
deleteStudent() – removes a student by ID.

Each function connects to the database and runs an SQL command to perform its action.

### Files
Main.js - Represents the CRUD application code file. 

// app.js
// simple postgres crud demo

const { Pool } = require('pg');
const pool = new Pool(); // uses exported PGHOST, PGUSER, etc.

async function getAllStudents() {
  const res = await pool.query('select * from students order by student_id;');
  console.log('students:');
  console.table(res.rows);
}

async function addStudent(first, last, email, date) {
  const res = await pool.query(
    'insert into students (first_name, last_name, email, enrollment_date) values ($1,$2,$3,$4) returning *;',
    [first, last, email, date]
  );
  console.log('added:', res.rows[0]);
  return res.rows[0];
}

async function updateStudentEmail(id, newEmail) {
  const res = await pool.query(
    'update students set email=$2 where student_id=$1 returning *;',
    [id, newEmail]
  );
  console.log('updated:', res.rows[0]);
}

async function deleteStudent(id) {
  const res = await pool.query(
    'delete from students where student_id=$1 returning *;',
    [id]
  );
  console.log('deleted:', res.rows[0]);
}

async function main() {
  try {
    console.log('adding student...');
    const s = await addStudent('alice', 'brown', 'alice.brown@example.com', '2025-09-01');

    console.log('listing...');
    await getAllStudents();

    console.log('updating email...');
    await updateStudentEmail(s.student_id, 'alice.new@example.com');

    console.log('listing again...');
    await getAllStudents();

    console.log('deleting...');
    await deleteStudent(s.student_id);

    console.log('final list:');
    await getAllStudents();
  } catch (err) {
    console.log('error:', err.message);
  } finally {
    await pool.end();
  }
}

main();

//TIP There's much more in WebStorm to help you be more productive. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/> and search for <b>Learn WebStorm</b> to open our learning hub with more things for you to try.

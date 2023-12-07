module.exports = {
   empList : `select e.emp_no,
                     e.first_name,
                     e.last_name,
                     e.gender,
                     e.hire_date,
                     s.salary,
                     d.dept_no,
                     d.dept_name
            from employees e join dept_emp h 
            on(e.emp_no = h.emp_no)
            join departments d
            on(h.dept_no = d.dept_no)
            join salaries s
            on(e.emp_no = s.emp_no)
            where h.to_date = CAST('9999-01-01' as date)
            and s.to_date = CAST('9999-01-01' as date)
            order by e.emp_no DESC
            limit 0, 10`,
   empInfo : `select e.emp_no,
                     e.first_name,
                     e.last_name,
                     e.gender,
                     e.hire_date,
                     s.salary,
                     d.dept_no,
                     d.dept_name
            from employees e join dept_emp h 
            on(e.emp_no = h.emp_no)
            join departments d
            on(h.dept_no = d.dept_no)
            join salaries s
            on(e.emp_no = s.emp_no)
            where h.to_date = CAST('9999-01-01' as date)
            and s.to_date = CAST('9999-01-01' as date)
            and e.emp_no = ?`,
   deptList : `SELECT dept_no, dept_name 
               FROM departments order by dept_no`,
   empInsert : `INSERT INTO employees SET ?`,
   deptInsert : `INSERT INTO dept_emp 
               SET emp_no = ?, dept_no = ?, from_date = ?, to_date = CAST('9999-01-01' as date)`,
   salInsert : `INSERT INTO salaries SET ?`,
   
   empUpdate : `UPDATE employees 
               SET ?
               WHERE emp_no = ?`,
   empDelete : `UPDATE dept_emp
               SET to_date = ?
               WHERE emp_no = ?`
}
# Write your MySQL query statement below
SELECT a.name FROM Employee a WHERE (SELECT COUNT(b.id) FROM Employee b WHERE b.managerId = a.id GROUP BY b.managerId) >= 5
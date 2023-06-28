# Write your MySQL query statement below
SELECT a.name FROM Employee a WHERE (SELECT COUNT(id) FROM Employee WHERE managerID = a.id) >= 5
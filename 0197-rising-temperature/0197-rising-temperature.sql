# Write your MySQL query statement below
SELECT a.id AS 'Id' FROM weather a JOIN weather w ON DATEDIFF(a.recordDate, w.recordDate) = 1 AND a.Temperature > w.Temperature;
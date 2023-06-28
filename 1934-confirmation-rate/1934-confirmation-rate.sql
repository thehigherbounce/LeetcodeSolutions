# Write your MySQL query statement below
SELECT 
    s.user_id,
    ROUND(COALESCE(COALESCE(c.confirmed_count, 0) / COALESCE(c.total_count, 0), 0), 2) AS confirmation_rate
FROM
    Signups s
LEFT JOIN
    (SELECT
        user_id,
        COUNT(*) AS total_count,
        SUM(action = 'confirmed') AS confirmed_count
    FROM
        Confirmations
    GROUP BY
        user_id) c ON s.user_id = c.user_id;
# Write your MySQL query statement below
SELECT a.name 
FROM Employee a
JOIN Employee e
ON e.managerId=a.id
GROUP BY e.managerId 
HAVING COUNT(*) >=5;
    
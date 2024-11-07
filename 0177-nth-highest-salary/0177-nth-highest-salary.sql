CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE result INT;
    DECLARE offset INT;
    SET offset =N-1;
    SELECT salary 
    INTO result
    FROM (
        SELECT DISTINCT salary
        FROM Employee
        ORDER BY salary DESC
        LIMIT offset,1
    ) AS temp_table
    ORDER BY salary
    LIMIT 1;
    RETURN result;
END;

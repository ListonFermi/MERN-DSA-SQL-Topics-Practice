--------------------------------  24-04-2024, Tuesday-----------------------------------------------------

-- Create a table using constrains 

CREATE TABLE college (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clg_name VARCHAR(50) UNIQUE NOT NULL,
    code INT UNIQUE NOT NULL,
    rating NUMERIC NOT NULL CHECK (rating <10)
);

-- Add a row in to the table

INSERT INTO college (clg_name,code,rating) VALUES ('ucet',9000,6.5);

-- Insert sample data into the college table
INSERT INTO college (clg_name, code, rating) VALUES
('College A', 1001, 8.5),
('College B', 1002, 9.2),
('College C', 1003, 7.8),
('College D', 1004, 8.9),
('College E', 1005, 9.5),
('College F', 1006, 7.3),
('College G', 1007, 8.1),
('College H', 1008, 9.8),
('College I', 1009, 8.7),
('College J', 1010, 9.3),
('College K', 1011, 7.2),
('College L', 1012, 8.4),
('College M', 1013, 9.1),
('College N', 1014, 8.6),
('College O', 1015, 7.9),
('College P', 1016, 9.7),
('College Q', 1017, 8.3),
('College R', 1018, 7.5),
('College S', 1019, 9.4),
('College T', 1020, 8.2),
('College U', 1021, 7.6),
('College V', 1022, 9.6),
('College W', 1023, 8.8),
('College X', 1024, 7.1),
('College Y', 1025, 9.0),
('College Z', 1026, 8.0),
('College AA', 1027, 9.9),
('College AB', 1028, 7.7),
('College AC', 1029, 8.5),
('College AD', 1030, 9.2),
('College AE', 1031, 7.8),
('College AF', 1032, 8.9),
('College AG', 1033, 9.5),
('College AH', 1034, 7.3),
('College AI', 1035, 8.1),
('College AJ', 1036, 9.8),
('College AK', 1037, 8.7),
('College AL', 1038, 9.3),
('College AM', 1039, 7.2),
('College AN', 1040, 8.4),
('College AO', 1041, 9.1),
('College AP', 1042, 8.6),
('College AQ', 1043, 7.9),
('College AR', 1044, 9.7),
('College AS', 1045, 8.3),
('College AT', 1046, 7.5),
('College AU', 1047, 9.4),
('College AV', 1048, 8.2),
('College AW', 1049, 7.6),
('College AX', 1050, 9.6);

-- Chatgpt basic questions :
/*
Certainly! Here are a few interview questions based on the `college` table:

1. **Query for Colleges with Ratings above a Certain Threshold:**
   - Write a SQL query to retrieve the names of colleges with ratings above 8.0.

2. **Find the Average Rating of Colleges:**
   - Calculate the average rating of all colleges in the table.

3. **Identify Duplicate Ratings:**
   - How would you identify if there are any duplicate ratings in the table? Provide a SQL query to retrieve the duplicated rating values.

4. **Update College Information:**
   - Suppose a college's name has changed. How would you update the college name from 'College A' to 'New College A'?

5. **Count Colleges with Unique Ratings:**
   - Write a SQL query to count the number of unique ratings present in the table.

6. **Retrieve Colleges in Descending Order of Rating:**
   - Retrieve the names and ratings of all colleges, ordered by rating in descending order.

7. **Calculate the Total Number of Colleges:**
   - How many colleges are there in total?

8. **Find Colleges with the Highest and Lowest Ratings:**
   - Write a query to find the college(s) with the highest rating and the college(s) with the lowest rating.

9. **Identify Colleges with Codes within a Range:**
   - Retrieve the names of colleges with codes between 1001 and 1010.

10. **Delete Colleges with Ratings Below a Threshold:**
    - Suppose colleges with ratings below 7.0 are no longer considered. Write a SQL statement to delete such colleges from the table.

These questions cover a range of SQL concepts such as querying, updating, aggregating, and deleting data, which are commonly tested in interviews. Feel free to modify or expand upon them based on your specific requirements or interview context.

*/

-- ANSWERS:

-- 1. **Query for Colleges with Ratings above a Certain Threshold:**
--    - Write a SQL query to retrieve the names of colleges with ratings above 8.0.

SELECT clg_name FROM college WHERE rating>8.0;

-- 2. **Find the Average Rating of Colleges:**
--    - Calculate the average rating of all colleges in the table.

SELECT AVG(rating) AS avg_rating FROM college;

-- 3. **Identify Duplicate Ratings:**
--    - How would you identify if there are any duplicate ratings in the table? Provide a SQL query to retrieve the duplicated rating values.

SELECT rating, COUNT(*) AS count FROM college GROUP BY rating HAVING COUNT(*) >1;

-- 4. **Update College Information:**
--    - Suppose a college's name has changed. How would you update the college name from 'College A' to 'New College A'?

UPDATE college SET clg_name = 'New College A' WHERE clg_name = 'College A';

-- 5. **Count Colleges with Unique Ratings:**
--    - Write a SQL query to count the number of unique ratings present in the table.

SELECT rating, COUNT(*) FROM college GROUP BY rating HAVING COUNT(*) =1 ;

-- 6. **Retrieve Colleges in Descending Order of Rating:**
--    - Retrieve the names and ratings of all colleges, ordered by rating in descending order.

SELECT clg_name, rating FROM college ORDER BY rating DESC;

-- 7. **Calculate the Total Number of Colleges:**
--    - How many colleges are there in total?

SELECT COUNT(clg_name) AS total_clgs FROM college; 

-- 8. **Find Colleges with the Highest and Lowest Ratings:**
--    - Write a query to find the college(s) with the highest rating and the college(s) with the lowest rating.

SELECT MAX(rating) AS highestRating FROM college; 
SELECT MIN(rating) AS lowestRating FROM college; 

-- 9. **Identify Colleges with Codes within a Range:**
--    - Retrieve the names of colleges with codes between 1001 and 1010.

SELECT clg_name FROM college WHERE code >= 1001 AND code <= 1010;

-- 10. **Delete Colleges with Ratings Below a Threshold:**
--     - Suppose colleges with ratings below 7.0 are no longer considered. Write a SQL statement to delete such colleges from the table.

-- Since this delete operation is for learning, we'll rollback once the rows are deleted

START TRANSACTION;

DELETE FROM college WHERE rating < 7.0;

ROLLBACK;

-- These questions cover a range of SQL concepts such as querying, updating, aggregating, and deleting data, which are commonly tested in interviews.
--  Feel free to modify or expand upon them based on your specific requirements or interview context.
UPDATE users SET 
   bio = $1,
   linkplus = $2,
   linkfb = $3,
   linkig = $4,
   linkut = $5
WHERE id = $1  


-- https://www.postgresql.org/docs/8.2/static/sql-update.html
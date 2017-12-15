UPDATE users SET 
   bio = $2,
   linkplus = $3,
   linkfb = $4,
   linkig = $5,
   linkut = $6
WHERE id = $1  



-- https://www.postgresql.org/docs/8.2/static/sql-update.html
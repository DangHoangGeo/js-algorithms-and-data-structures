/* Write your PL/SQL query statement below */
select id as "id", to_char(visit_date,'YYYY-MM-DD') as "visit_date", people as "people"
from (
select distinct s1.*
from Stadium s1, Stadium s2, Stadium s3
where 1=1
and (
    (s1.id-s2.id=1 and s1.id-s3.id=2 and s2.id-s3.id=1)
    or
    (s2.id-s1.id=1 and s2.id-s3.id=2 and s1.id-s3.id=1)
    or
    (s3.id-s2.id=1 and s3.id-s1.id=2 and s2.id-s1.id=1)
)
and s1.people >= 100
and s2.people >= 100
and s3.people > = 100
order by s1.visit_date
)

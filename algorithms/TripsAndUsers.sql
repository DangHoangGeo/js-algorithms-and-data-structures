# Write your MySQL query statement below
SELECT clientRequest.request_at AS "Day",
       ROUND(coalesce(clientCanceled.total,0)/clientRequest.total,2) AS "Cancellation Rate"
FROM 
    (SELECT COUNT(t1.request_at) AS "total", request_at
     FROM trips t1
     WHERE t1.client_id NOT IN (
             SELECT users_id FROM Users
             WHERE banned = 'Yes'
         )
     AND t1.driver_id NOT IN(
             SELECT users_id FROM Users
             WHERE banned = 'Yes'
         )
    AND t1.request_at BETWEEN '2013-10-01' AND '2013-10-03'
    GROUP BY t1.request_at
    ) clientRequest 
LEFT OUTER JOIN
    (SELECT COUNT(t2.request_at) as "total", request_at
     FROM trips t2
     WHERE t2.client_id IN (
             SELECT users_id FROM Users
             WHERE banned = 'NO'
     )
     AND t2.status != 'completed'
     AND t2.request_at BETWEEN '2013-10-01' AND '2013-10-03'
     GROUP BY t2.request_at
    ) clientCanceled
ON clientRequest.request_at = clientCanceled.request_at
;

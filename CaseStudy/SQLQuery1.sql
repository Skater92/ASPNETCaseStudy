CREATE OR ALTER PROCEDURE pGetThreeClosestStores (@lat float, @lng float)
AS
--DECLARE @distance float
SELECT TOP 3 Id, City, Region, Street, Latitude, Longitude, SQRT(POWER(Latitude - @lat, 2) + POWER(Longitude - @lng, 2)) AS Distance
FROM Branches 
order by Distance
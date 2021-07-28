-- somar toda a população de uma regiao. 

SELECT regiao AS 'Região',
 SUM(populacao) as Total
 FROM estados 
    GROUP BY regiao
    ORDER BY Total DESC

-- somar total da populacao 

SELECT sum(populacao) AS Total FROM estados

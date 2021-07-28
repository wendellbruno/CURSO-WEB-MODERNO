-- retorna apenas os relacionatos
SELECT * FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;

--retorna toda a junção + o lado esquerdo da consulta
SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;

-- retorna toda a junção + o lado direito da consulta
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;

-- retorna toda a junção + os 2 lados da cunsulta
-- o MySql nao suporta e se deve fazer uma fusão dos 2
SELECT * FROM cidades c FULL JOIN join prefeitos p ON c.id = p.cidade_id;

-- fusão
SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;
UNION ALL
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;
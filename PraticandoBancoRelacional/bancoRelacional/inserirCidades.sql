--SELECT * FROM estados where id = 25
--SELECT * FROM estados WHERE sigla = 'RJ'

INSERT INTO cidades(nome, area, estado_id)
VALUES('Campinas,',795,25)

INSERT INTO cidades(nome,area,estado_id)
VALUES('Niterói',133.9,19)

INSERT INTO cidades(nome,area,estado_id)
VALUES('Caruaru', 920.6,(SELECT id FROM estados WHERE sigla = 'PE'))

INSERT INTO cidades(nome,area,estado_id)
VALUES('Juazeiro do Norte', 248.2,(SELECT id FROM estados WHERE sigla = 'CE'))

INSERT INTO prefeitos(nome,cidade_id)
    VALUES('Rodrigo Neves', 2),
          ('Raquel Lyra',3),
          ('Zenaldo Coutinho', NULL)

SELECT * FROM prefeitos

-- é permitido porq a chave null não é unica
INSERT INTO prefeitos(nome,cidade_id)
    VALUES('Rafael Greca', NULL)    

-- não é permitido porq a chave estrangeira é unica
INSERT INTO prefeitos(nome,cidade_id)
    VALUES('Carol Castro', 2)
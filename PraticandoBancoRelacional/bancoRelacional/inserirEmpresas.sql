
ALTER TABLE empresas MODIFY cnpj VARCHAR(30);


INSERT INTO empresas(nome,cnpj)
    VALUES('Bradesco', 99999999999),
          ('Vale', 5555555555555),
          ('Cielo',111111111111);

-- busco informações da tabela
DESC empresas;

SELECT * FROM cidades;
SELECT * FROM empresas;

-- fazendo a relação muitos pra muitos
INSERT INTO empresas_unidades(empresas_id, cidade_id, sede)
    VALUES(1,1,1),
          (1,2,0),
          (2,1,0),
          (2,2,1);
          
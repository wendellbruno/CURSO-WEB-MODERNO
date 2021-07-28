SELECT e.nome Empresa, c.nome Cidade FROM empresas e, empresas_unidades eu, cidades c 
        WHERE e.id = eu.empresas_id AND c.id = eu.cidade_id
        AND sede
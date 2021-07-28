-- NUNCA FAZER O UPDATE SEM O WHERE, DAR PREFERENCIA PARA WHERE EM CHAVES PRIMARIAS OU UNICAS

UPDATE estados SET nome = 'Maranhão' WHERE sigla = 'MA'

SELECT id, estado, nome FROM estados WHERE sigla = 'MA'

UPDATE estados SET nome ='Paraná', populacao = 11.32 WHERE sigla = 'PR'
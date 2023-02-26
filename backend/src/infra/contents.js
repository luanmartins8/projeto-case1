/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import db from "./db.js";

//==== Conteúdos
const CONTENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "conteudos" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "titulo" text,
    "autor" text,
    "temporadas" number,
    "episodios" number,
    "status" text
  );`;

const ADD_CONTENTS_DATA = `
INSERT INTO PRODUTO (id, titulo, autor, temporadas, episodios, status) VALUES
(1, 'Avatar: A Lenda de Aang', 'Michael Dante DiMartino e Bryan Konietzko', 3, 61, 'Finalizada'),
(2, 'Avatar: A Lenda de Korra', 'Michael Dante DiMartino e Bryan Konietzko', 4, 52, 'Finalizada'),
(3, 'Voltron', 'Choi Goun, Kim Young Hyun, Kim Seul Ki, Lee Soo Kyung', 8, 76, 'Finalizada')`
  
function createTableContents() {
    db.run(CONTENTS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de conteúdos");
    });
}

function populaTableContents() {
    db.run(ADD_CONTENTS_DATA, (error) => {
        if (error) console.log('Erro ao popular a tabela produto!');
    });
}

db.serialize( ()=> {
    createTableContents();
    populaTableContents();
});
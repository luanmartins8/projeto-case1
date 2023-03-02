const ContentsApi = () => {
  const url = 'http://localhost:3000'

  return {
      getContents () {
          return fetch(`${url}/conteudo`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      },
      deleteContent (contentId) {
        return fetch(`${url}/conteudo/${contentId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
       })
      },
      createContent (id, titulo, autor, temporadas, episodios, status) {
        return fetch(`${url}/conteudo`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              id: id,
              titulo: titulo,
              autor: autor,
              temporadas: temporadas,
              episodios: episodios,
              status: status
            }
          )
       })
      },
      updateContent(contentId, id, autor, titulo, temporadas, episodios, status) {
        return fetch(`${url}/conteudo/${contentId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              id: id,
              autor: autor,
              titulo: titulo,
              temporadas: temporadas,
              episodios: episodios,
              status: status
            }
          )
       })
      },
  }
}

export default ContentsApi
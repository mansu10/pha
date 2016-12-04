import url from './url'

const TODOS_URL = ''

export default fetchAllTodos() {

}

export default fetchItemById(data) {
	let body = {
		"token": "3333"

	}
	Object.assign(body, data)

	return http.post(`${url}/${TODOS_URL}`, body)
}
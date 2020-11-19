class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  _handleOriginalResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(new Error(`Что-то пошло не так: ${res.status}`))
  }
  getAllInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then(this._handleOriginalResponse)
  }

  addCard(item) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(item),
    }).then(this._handleOriginalResponse)
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this._handleOriginalResponse)
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(this._handleOriginalResponse)
  }

  setUserInfo(item) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(item),
    }).then(this._handleOriginalResponse)
  }

  editAvatar(item) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(item),
    }).then(this._handleOriginalResponse)
  }

  putLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this.headers,
    }).then(this._handleOriginalResponse)
  }

  removeLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this._handleOriginalResponse)
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: {
    authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
    'Content-Type': 'application/json',
  },
})
export default api

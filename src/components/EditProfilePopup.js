import React from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleJobChange = (e) => {
    setDescription(e.target.value)
  }

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    })
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      submit="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          type="text"
          id="name"
          name="name"
          className="popup__name popup__input"
          placeholder="Имя"
          value={name || ''}
          onChange={handleNameChange}
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error" id="name-error"></span>
      </div>
      <div className="popup__input-container">
        <input
          type="text"
          id="job"
          name="about"
          className="popup__job popup__input"
          placeholder="Профессия"
          value={description || ''}
          onChange={handleJobChange}
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error" id="job-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup

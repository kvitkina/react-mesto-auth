import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const nameRef = React.useRef()
  const linkRef = React.useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    })
  }

  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      submit="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          type="text"
          id="place"
          name="name"
          className="popup__name popup__name_theme_place popup__input"
          placeholder="Название"
          required
          minLength="1"
          maxLength="30"
          ref={nameRef}
        />
        <span className="popup__input-error" id="place-error"></span>
      </div>
      <div className="popup__input-container">
        <input
          type="url"
          id="link"
          name="link"
          className="popup__job popup__job_theme_place popup__input"
          placeholder="Ссылка на картинку"
          required
          ref={linkRef}
        />
        <span className="popup__input-error" id="link-error"></span>
      </div>
    </PopupWithForm>
  )
}
export default AddPlacePopup

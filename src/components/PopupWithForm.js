import React from 'react'

function PopupWithForm({ isOpen, children, onClose, name, title, submit, onSubmit }) {
  return (
    <section
      className={`popup popup_${name} ${isOpen && `popup_opened`} `}
      onClick={(evt) => (evt.target !== evt.currentTarget) && onClose }
    >
      <div className="popup__container">
        <button className="popup__close" onClick={onClose} />
        <form className="popup__form-container" name={name} onSubmit={onSubmit} noValidate>
          <h2 className="popup__title">{title}</h2>
          <fieldset className="popup__form">
            {children}
            <input type="submit" className="popup__button" value={submit} onClick={onClose} />
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm

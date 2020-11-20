import React from 'react';
import success from '../images/success.svg'
import fail from '../images/fail.svg'

const InfoTooltip = (name, onClose, isOpen, title) => {
  return (
    <section
      className='popup '
    //   className={`popup popup_${name} ${isOpen && `popup_opened`} `}
      onClick={(evt) => (evt.target !== evt.currentTarget) && onClose }
    >
      <div className="popup__container">
        <button className="popup__close" onClick={onClose} />
        <img className="popup__icon" src={success} alt="Tooltip"/>
        <h2 className="popup__title popup__title_theme_tooltip">
          Вы успешно зарегистрировались!
        </h2>
      </div>
    </section>
  )
}

export default InfoTooltip
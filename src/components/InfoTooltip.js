import React from 'react';
import success from '../images/success.svg'
import fail from '../images/fail.svg'

const InfoTooltip = ({ tooltipStatus, onClose, isOpen }) => {
  return (
    <section
      className={`popup ${isOpen && `popup_opened`} `}
      onClick={(evt) => (evt.target !== evt.currentTarget) && onClose }
    >
      <div className="popup__container">
        <button className="popup__close" onClick={onClose} />
        <img 
          className="popup__icon" 
          src={tooltipStatus ? success : fail }
          alt="Tooltip"
        />
        <h2 className="popup__title popup__title_theme_tooltip">
          {tooltipStatus ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </section>
  )
}

export default InfoTooltip
import React from 'react'

function ImagePopup({ card, onClose, name }) {
  return (
    <section className={`popup popup_${name} ${card && 'popup_opened'}`}>
      <div className="popup__container-place">
        <img src={card && card.link} className="popup__image" alt={card && card.name} />
        <p className="popup__place">{card && card.name}</p>
        <button className="popup__close" onClick={onClose} />
      </div>
    </section>
  )
}

export default ImagePopup

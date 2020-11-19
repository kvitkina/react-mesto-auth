import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card({ card, onCardClick, onCardDelete, onCardLike, onCardDislike }) {
  const currentUser = React.useContext(CurrentUserContext)

  const isOwn = card.owner._id === currentUser._id // Определяем, являемся ли мы владельцем текущей карточки

  const isLiked = card.likes.some((i) => i._id === currentUser._id) // Определяем, есть ли у карточки лайк, поставленный текущим пользователем

  const cardLikeButtonClassName = `element__like ${isLiked && 'element__like_theme_black'}`
  const handleClick = () => {
    onCardClick(card)
  }
  const handleDeleteClick = () => {
    onCardDelete(card._id)
  }
  const handleLikeClick = () => {
    onCardLike(card)
  }
  const handleDislikeClick = () => {
    onCardDislike(card)
  }

  return (
    <li className="element">
      <img
        style={{ backgroundImage: `url(${card.link})` }}
        className="element__image"
        alt=""
        onClick={handleClick}
      />
      {isOwn && <button className="element__trash" onClick={handleDeleteClick} />}
      <div className="element__info">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={isLiked ? handleDislikeClick : handleLikeClick}
          />
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card

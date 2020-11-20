import React from 'react';

function Login ({ name, title, submit, onLogin }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(email, password)
  }
  return (
    <section className="popup popup_theme_sign">
    <div className="popup__container popup__container_theme_sign">
      <form className="popup__form-container" name={name} onSubmit={handleSubmit} noValidate>
        <h2 className="popup__title popup__title_theme_sign">{title}</h2>
        <fieldset className="popup__form">
        <div className="popup__input-container">
        <input
          type="email"
          id="email"
          name="email"
          className="popup__name popup__input popup__input_theme_sign"
          placeholder="Email"
          value={email || ''}
          onChange={handleEmailChange}
          required
        />
        <span className="popup__input-error" id="email-error"></span>
      </div>
      <div className="popup__input-container">
        <input
          type="password"
          id="password"
          name="password"
          className="popup__job popup__job_theme_sign popup__input popup__input_theme_sign"
          placeholder="Пароль"
          value={password || ''}
          onChange={handlePasswordChange}
          required
          minLength="4"
          maxLength="12"
        />
        <span className="popup__input-error" id="password-error"></span>
      </div>
          <input type="submit" className="popup__button popup__button_theme_sign" value={submit}  />
        </fieldset>
      </form>
      </div>
  </section>
  )
}

export default Login

function WelcomePage() {
  return (
    <div className="Welcome_page__container">
      <h1 className="Welcome_page__title">Welcome to Hotel Review </h1>
      <h3 className="Welcome_page__subtitle">Sign in :</h3>
      <div className="Welcome_page__wrapper">
        <label className="Welcome_page__input-title" htmlFor="welcome_mail">
          E-mail:
        </label>
        <input
          className="Welcome_page__input"
          id="welcome_mail"
          type="mail"
          placeholder="Your e-mail..."
        />
        <label className="Welcome_page__input-title" htmlFor="welcome_pass">
          Password:
        </label>
        <input
          className="Welcome_page__input"
          id="welcome_pass"
          type="text"
          placeholder="Your password..."
        />
        <button className="Welcome_page__btn">Login</button>
        <button className="Welcome_page__btn">Sign Up</button>
      </div>
    </div>
  );
}

export { WelcomePage };

function SignUpPage() {
  return (
    <div className="Welcome_page__container">
      <h1 className="Welcome_page__title">Welcome to Hotel Review </h1>
      <h3 className="Welcome_page__subtitle">Sign up :</h3>
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
        <label
          className="Welcome_page__input-title"
          htmlFor="welcome_pass"
        ></label>
        <input
          className="Welcome_page__input"
          id="welcome_pass_repeat"
          type="text"
          placeholder="Repeat password..."
        />
        <button className="Welcome_page__btn_2">Sign Up</button>
      </div>
    </div>
  );
}

export { SignUpPage };

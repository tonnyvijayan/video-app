import "./SignUp.css";

export const SignUp = () => {
  return (
    <div class="signup-form-container">
      <div class="register-form">
        <h3 class="register-heading">Register</h3>
        <div class="register-icon-container">
          <a
            class="register-icons"
            href="https://www.gmail.com"
            target="_blank"
          >
            <img
              class="register-log-icons"
              src="https://pluspng.com/img-png/google-logo-png-open-2000.png"
              alt="Google"
            />
          </a>
          <a
            class="register-icons"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <img
              class="register-log-icons"
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png"
              alt="Facebook"
            />
          </a>
          <a
            class="register-icons"
            href="https://www.github.com"
            target="_blank"
          >
            <img
              class="register-log-icons"
              src="https://image.flaticon.com/icons/svg/25/25231.svg"
              alt="Github"
            />
          </a>
          <a
            class="register-icons"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <img
              class="register-log-icons"
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png"
              alt="Linkedin"
            />
          </a>
        </div>
        <div class="register-input-container">
          <input
            class="register-detail-input"
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            class="register-detail-input"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            class="register-detail-input"
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            class="register-detail-input"
            type="password"
            placeholder="Confirm Password"
            name="confirm-password"
          />
        </div>

        <div class="register-input-container">
          <button type="submit" value="Register" class="register-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

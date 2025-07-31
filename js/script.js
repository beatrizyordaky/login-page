document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById("togglePassword");
  const eyeIcon = document.getElementById("eye-icon");
  const eyeSlashIcon = document.getElementById("eye-slash-icon");
  const emailInput = document.getElementById("email-address");

  const rules = {
    length: document.getElementById("length-rule"),
    uppercase: document.getElementById("uppercase-rule"),
    lowercase: document.getElementById("lowercase-rule"),
    number: document.getElementById("number-rule"),
    special: document.getElementById("special-rule"),
  };

  const checkIconSVG = `
            <svg class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`;
  const crossIconSVG = `
            <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`;

  const validationChecks = {
    length: (password) => password.length >= 8,
    uppercase: (password) => /[A-Z]/.test(password),
    lowercase: (password) => /[a-z]/.test(password),
    number: (password) => /[0-9]/.test(password),
    special: (password) => /[!@#$%^&*]/.test(password),
  };

  function validatePassword() {
    const password = passwordInput.value;

    for (const ruleName in rules) {
      const ruleElement = rules[ruleName];
      const iconSpan = ruleElement.querySelector(".rule-icon");
      const textSpan = ruleElement.querySelector("span:last-child");

      const isValid = validationChecks[ruleName](password);

      if (isValid) {
        iconSpan.innerHTML = checkIconSVG;
        ruleElement.classList.remove("text-gray-500");
        ruleElement.classList.add("text-green-600");
      } else {
        iconSpan.innerHTML = crossIconSVG;
        ruleElement.classList.remove("text-green-600");
        ruleElement.classList.add("text-gray-500");
      }
    }
  }

  function initializeIcons() {
    for (const ruleName in rules) {
      const ruleElement = rules[ruleName];
      const iconSpan = ruleElement.querySelector(".rule-icon");
      iconSpan.innerHTML = crossIconSVG;
    }
  }

  passwordInput.addEventListener("input", validatePassword);

  togglePasswordButton.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    eyeIcon.classList.toggle("hidden");
    eyeSlashIcon.classList.toggle("hidden");
  });

  emailInput.addEventListener("invalid", function () {
    if (this.validity.valueMissing) {
      this.setCustomValidity("Please enter your email address to continue");
    } else if (this.validity.typeMismatch) {
      this.setCustomValidity("Please enter a valid email address");
    }
  });

  emailInput.addEventListener("input", function () {
    this.setCustomValidity("");
  });

  initializeIcons();
});

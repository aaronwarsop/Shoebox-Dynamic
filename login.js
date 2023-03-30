// active function, gives element a class of "active" when clicked on for styling
const textInputs = document.querySelectorAll("input");

textInputs.forEach(textInput => {
    textInput.addEventListener("focus", () => {
        let parent = textInput.parentNode;
        parent.classList.add("active");
    });

    // removes class of active once no longer focussed
    textInput.addEventListener("blur", () => {
        let parent = textInput.parentNode;
        parent.classList.remove("active");
    });
});

// password show/hide btn
const passwordInput = document.querySelector(".password-input");
const signUpPasswordInput = document.querySelector(".signup-password-input");
const eyeBtn = document.querySelector(".eye-btn");
const eyeBtn2 = document.querySelector(".eye-btn2");

// changes password type to text when eye is clicked and changes back on re-click
eyeBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeBtn.innerHTML = "<i class='uil uil-eye'></i>";
    }
    else {
        passwordInput.type = "password";
        eyeBtn.innerHTML = "<i class='uil uil-eye-slash'></i>";
    }
});

eyeBtn2.addEventListener("click", () => {
    if (signUpPasswordInput.type === "password") {
        signUpPasswordInput.type = "text";
        eyeBtn2.innerHTML = "<i class='uil uil-eye'></i>";
    }
    else {
        signUpPasswordInput.type = "password";
        eyeBtn2.innerHTML = "<i class='uil uil-eye-slash'></i>";
    }
});


// slide animation
const signUpBtn = document.querySelector(".sign-up-btn");
const signInBtn = document.querySelector(".sign-in-btn");
const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-in-form");

signUpBtn.addEventListener("click", () => {
    signInForm.classList.add("hide");
    signUpForm.classList.add("show");
    signInForm.classList.remove("show");
});

signInBtn.addEventListener("click", () => {
    signInForm.classList.remove("hide");
    signUpForm.classList.remove("show");
    signInForm.classList.add("show");
});

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "/Shoebox/index.html"
});

document.querySelector(".form-signup").addEventListener("submit", (e) => {
    window.location.href = "/Shoebox/login.html"
})

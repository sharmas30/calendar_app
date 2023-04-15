clickLogin = document.querySelector(".loginClick");
clickSignup = document.querySelector(".signUpClick");

emailSignUp = document.querySelector(".emailSignUp");
pswdSignUp = document.querySelector(".pswdSignUp");

emailLogin = document.querySelector(".emailLogin");
pswdLogin = document.querySelector(".pswdLogin");

loginTitle = document.querySelector(".loginTitle");

const RegisterUser = async (newPost) => {
    try {
        const response = await fetch("http://rijorobbins.pythonanywhere.com/register", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        });
        const result = await response.json();
        localStorage.setItem('userId', JSON.stringify(result.user_id));
        console.log("Success:", result);
        window.location = "calendar.html";

    } catch (error) {
        console.error("Error:", error);
    }
};

const loginUser = async (newPost) => {
    try {
        const response = await fetch("http://rijorobbins.pythonanywhere.com/login", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        });
        const result = await response.json();
        localStorage.setItem('userId', JSON.stringify(result.user_id));
        console.log("Success:", result);
        loginTitle.innerHTML = result.message;
        if(result.success) {
            window.location = "calendar.html";
        }

    } catch (error) {
        console.error("Error:", error);
    }
};

// http://rijorobbins.pythonanywhere.com/login

clickSignup.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailSignUp.value;
    const pswd = pswdSignUp.value;
    console.log("email", email, pswd);
    const signUpData = {
        username:email,
        password:pswd
    };
    RegisterUser(signUpData);
})
  
clickLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailLogin.value;
    const pswd = pswdLogin.value;
    console.log("email", email, pswd);
    const loginData = {
        username:email,
        password:pswd
    };
    loginUser(loginData);
})
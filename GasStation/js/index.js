const data = new Date();
const day = data.getDate();
const month = data.getMonth() + 1;
const year = data.getFullYear();

const $CURRENT_DATA = document.querySelector(".current__data");
$CURRENT_DATA.innerHTML = `${day}.${month}.${year}`;

const $HEADER = document.querySelector("#header");
const $USER_PASSWORD = document.querySelector(".userPassword");
const $LOGIN_BTN = document.querySelector(".login-btn");
const $LOGO = document.querySelector(".logo");
const $ADMIN_PANEL = document.querySelector(".admin");

let password = "1234";

const showAdmin = () => {
    if ($USER_PASSWORD.value === password) {
        $ADMIN_PANEL.classList.toggle("active");
        $LOGIN_BTN.textContent = "Log out";
        $USER_PASSWORD.style.display = "none";
        $LOGO.textContent = "Administration panel";
        $HEADER.style.backgroundColor = "#d8d7d7";
    } else if (!$ADMIN_PANEL.classList.contains("active")) {
        $ADMIN_PANEL.classList.toggle("active");
        $LOGIN_BTN.textContent = "Log in";
        $USER_PASSWORD.style.display = "block";
        $LOGO.textContent = "Gas Station";
        $HEADER.style.backgroundcolor = "transparent";
    } else if (
        $USER_PASSWORD.value.lenght >= 1 &&
        $USER_PASSWORD.value.lenght < 4
    ) {
        alert("Недостаточно символов в пароле");
    } else if ($USER_PASSWORD.value == '') {
        alert("Введите пароль");
    } else if ($USER_PASSWORD.value !== password) {
        alert("Неверный пароль");
    }

    $USER_PASSWORD.value = "";
}

$LOGIN_BTN.addEventListener("click", showAdmin);
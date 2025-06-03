// tạo biến chứa inputUser = duyệt qua for item nào được click thì thêm class sao đó gắn vào
// tạo 1 số ngẫu nhiên từ 1 - > 6
// lấy 1 array chứa số để chọn => trong các item có chứa các giá trị 1 ->6
// so sánh giá trị user === random
// có 2 box trả kq => 0 và 1;

///////===========================Handle Event=================================
// Pull account
let account = document.querySelector(".navbar__account");
let money = 100;
account.textContent = `${money}.000 VND`;
// Close Notification
let closeNotifi = document.querySelectorAll(".close");

// lPull value can choose
let category = document.getElementsByClassName("list__item");

// Pull buttom confirm
let btn = document.querySelector(".confirm");
// Choose of user
let temporary;

// Delete active
function removeActive() {
  for (let active of category) {
    active.classList.remove("active");
  }
}
// check Event of items
function choose() {
  for (let value of category) {
    value.addEventListener("click", () => {
      removeActive();
      value.classList.add("active");
      temporary = value.value;
    });
  }
}
// Pull variable use handle event lose_win
let notifi__wron = document.querySelector(".result__wron");
let notifi__win = document.querySelector(".result__win");
let overlay = document.querySelector(".overlay");
let notifica = document.querySelector(".result");
let inputName = document.querySelector(".navbar__user");

// calc
function calc(inputUser) {
  if (money <= 0) {
    alert("không đủ tiền");
    return false;
  }
  let random = parseInt(Math.random() * 6 + 1);
  console.log(temporary, random);
  if (inputUser === undefined) {
    alert("Vui long chọn mục cược !");
    return;
  } else {
    if (inputUser === random) {
      money += 10;
      account.textContent = `${money}.000 VND`;
      notifi__win.classList.add("block");
      overlay.classList.add("inherit");
      return true;
    } else {
      money -= 10;
      account.textContent = `${money}.000 VND`;
      notifi__wron.classList.add("block");
      overlay.classList.add("inherit");
      return false;
    }
  }
}

// Run program
function run() {
  if (money <= 0) {
    alert("Không đủ tiền, vui lòng nạp");
    return false;
  } else {
    btn.addEventListener("click", () => {
      console.log(calc(temporary));
    });
  }
}

// Ended program
function ended() {
  overlay.addEventListener("click", () => {
    overlay.classList.remove("inherit");
    notifica.classList.remove("block");
    notifi__win.classList.remove("block");
  });
  for (let close of closeNotifi) {
    close.addEventListener("click", () => {
      overlay.classList.remove("inherit");
      notifica.classList.remove("block");
      notifi__win.classList.remove("block");
    });
  }
}
// Declare UserName
function nameUser() {
  inputName.innerHTML = prompt(" Nhập tên của bạn: ");
}
nameUser();
alert(` Bạn được tặng ${money}.000 VND`);
choose();
run();
ended();

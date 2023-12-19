let nowDate = new Date(); // This variable used with two ways

// To Try Way One Comment The Way Two and UnComment Way One here and in html file

// Way One
// const submit = document.getElementById("submit")
// const result = document.getElementById("age")

// const handleClick = (e) => {
//   e.preventDefault()
//   let dateOfBirth = document.getElementById("birth")
//   let birthDate = new Date(dateOfBirth.value)
//   let years = nowDate.getFullYear() - birthDate.getFullYear()
//   let months = nowDate.getMonth()  - birthDate.getMonth()
//   // console.log(`${years} Years`)
//   // console.log(`${months} Months`)
//   if (isNaN(birthDate)) {
//     result.innerHTML = `<p>*Please Add A valid date*</p>`;
//   }else {
//     result.innerHTML = `<h2>Your Age : ${years} Years , ${months} Months</h2>`
//   }
// }

// submit.addEventListener("click" , handleClick)

// Way Two
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let submit = document.getElementById("submit");
const result = document.getElementById("age");

const validation = () => {
  if (day.value === "" || day.value < 0 || day.value > 31) {
    result.innerHTML = `<p>*Please Add A valid day*</p>`;
    // alert("Please Add A valid day");
    return false; 
  } else if (month.value === "" || month.value < 0 || month.value > 12) {
    result.innerHTML = `<p>*Please Add A valid Month*</p>`;
    // alert("Please Add A valid month");
    return false;
  } else if (year.value === "" || year.value < 1970 || year.value > 2080) {
    result.innerHTML = `<p>*Please Add A valid Year*</p>`;
    // alert("Please Add A valid Year");
    return false;
  }
  return true;
};

const handleClick = (e) => {
  e.preventDefault();
  if (validation()) {
    let dateOfBirth = new Date(year.value, month.value - 1, day.value);
    let years = nowDate.getFullYear() - dateOfBirth.getFullYear();
    let months = nowDate.getMonth() - dateOfBirth.getMonth();
    let days = nowDate.getDate() - dateOfBirth.getDate()

    result.innerHTML = `<h2>Your Age : ${years} Years , ${months} Months, ${days} days</h2>`;

    day.value = "";
    month.value = "";
    year.value = "";
  }
};

submit.addEventListener("click", handleClick);

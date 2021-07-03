// ---------------------------------------------------
/* Audio play when click on button */
/* Audio play when chicking the calculator */
let audio1 = new Audio("Javascript/Audio/clicking01.mp3");
let audio2 = new Audio("Javascript/Audio/clicking02.mp3");
let audio3 = new Audio("Javascript/Audio/clicking03.mp3");
let audio4 = new Audio("Javascript/Audio/clicking04.mp3");
let audio5 = new Audio("Javascript/Audio/clicking05.mp3");
let audio6 = new Audio("Javascript/Audio/clicking06.mp3");
let audio7 = new Audio("Javascript/Audio/clicking07.mp3");
let audio8 = new Audio("Javascript/Audio/clicking08.mp3");
let audio9 = new Audio("Javascript/Audio/clicking09.mp3");
let audio10 = new Audio("Javascript/Audio/clicking10.mp3");
let count = 1;
function playAudio() {
  if (count == 1) {
    audio1.play();
    count++;
  } else if (count == 2) {
    audio2.play();
    count++;
  } else if (count == 3) {
    audio3.play();
    count++;
  } else if (count == 4) {
    audio4.play();
    count++;
  } else if (count == 5) {
    audio5.play();
    count++;
  } else if (count == 6) {
    audio6.play();
    count++;
  } else if (count == 7) {
    audio7.play();
    count++;
  } else if (count == 8) {
    audio8.play();
    count++;
  } else if (count == 9) {
    audio9.play();
    count++;
  } else if (count == 10) {
    audio10.play();
    count = 1;
  }
}
/* Audio play when chicking the Keyboard */
document.addEventListener("keypress", function clicked() {
  if (count == 1) {
    audio1.play();
    count++;
  } else if (count == 2) {
    audio2.play();
    count++;
  } else if (count == 3) {
    audio3.play();
    count++;
  } else if (count == 4) {
    audio4.play();
    count++;
  } else if (count == 5) {
    audio5.play();
    count++;
  } else if (count == 6) {
    audio6.play();
    count++;
  } else if (count == 7) {
    audio7.play();
    count++;
  } else if (count == 8) {
    audio8.play();
    count++;
  } else if (count == 9) {
    audio9.play();
    count++;
  } else if (count == 10) {
    audio10.play();
    count = 1;
  }
});
// ------------------------------------------------------------------
/* Getting value after clicked form the calcualtor */
// Getting and putting number in screen
let get_Number_0 = document.getElementById("Number_0_button").value;
let get_Number_1 = document.getElementById("Number_1_button").value;
let get_Number_2 = document.getElementById("Number_2_button").value;
let get_Number_3 = document.getElementById("Number_3_button").value;
let get_Number_4 = document.getElementById("Number_4_button").value;
let get_Number_5 = document.getElementById("Number_5_button").value;
let get_Number_6 = document.getElementById("Number_6_button").value;
let get_Number_7 = document.getElementById("Number_7_button").value;
let get_Number_8 = document.getElementById("Number_8_button").value;
let get_Number_9 = document.getElementById("Number_9_button").value;
let put_Number = document.getElementById("middle_part_of_the_main_screen_page");
let Total_value = "";

document.getElementById("Number_0_button").addEventListener("click", () => {
  Total_value += String(get_Number_0);
  put_Number.setAttribute("value", String(Total_value));
});
document.getElementById("Number_1_button").addEventListener("click", () => {
  Total_value += String(get_Number_1);
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("Number_2_button").addEventListener("click", () => {
  Total_value += String(get_Number_2);
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("Number_3_button").addEventListener("click", () => {
  Total_value += String(get_Number_3);
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("Number_4_button").addEventListener("click", () => {
  Total_value += String(get_Number_4);
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("Number_5_button").addEventListener("click", () => {
  Total_value += String(get_Number_5);
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("Number_6_button").addEventListener("click", () => {
  Total_value += String(get_Number_6);
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("Number_7_button").addEventListener("click", () => {
  Total_value += String(get_Number_7);
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("Number_8_button").addEventListener("click", () => {
  Total_value += String(get_Number_8);
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("Number_9_button").addEventListener("click", () => {
  Total_value += String(get_Number_9);
  put_Number.setAttribute("value", Total_value);
});
/* Setting and putting Arthmatic operator in screen */
let multiplication = "0";
let division = "0";
let plus = "0";
let minus = "0";
document
  .getElementById("multiplication_button")
  .addEventListener("click", () => {
    multiplication = "X";
    Total_value = String(Total_value) + String(multiplication);
    if (Total_value.length == 2) {
      Total_value = Total_value.replace("0X", "X");
    }
    put_Number.setAttribute("value", Total_value);
  });
function division_button() {
  division = "/";
  Total_value = String(Total_value) + String(division);
  if (Total_value.length == 2) {
    Total_value = Total_value.replace("0/", "/");
  }
  put_Number.setAttribute("value", Total_value);
}
document.getElementById("plus_button").addEventListener("click", () => {
  plus = "+";
  Total_value = String(Total_value) + String(plus);
  if (Total_value.length == 2) {
    Total_value = Total_value.replace("0+", "+");
  }
  put_Number.setAttribute("value", Total_value);
});
document.getElementById("minus_button").addEventListener("click", () => {
  minus = "-";
  Total_value = String(Total_value) + String(minus);
  if (Total_value.length == 2) {
    Total_value = Total_value.replace("0-", "-");
  }
  put_Number.setAttribute("value", Total_value);
});
/* Setting DEL Or AC*/
let del_total_value = "";
document.getElementById("DEL_button").addEventListener("click", () => {
  del_total_value = Total_value;
  let length_for_DEL = String(del_total_value).length - 1;
  Total_value = String(del_total_value).slice(0, length_for_DEL);
  put_Number.setAttribute("value", Total_value);
  // length_for_DEL--;
});
document.getElementById("AC_button").addEventListener("click", () => {
  Total_value = String(Total_value).replace(String(Total_value), "");
  put_Number.setAttribute("value", Total_value);
  document.getElementById(
    "lower_part_of_the_main_screen_page_content"
  ).innerText = "";
});

/* ///////////////////////////////////////////////////////////////// */
/* Perform Clcualtion */
let Store_Total_Value_Number = "";
document.getElementById("equal_to_button").addEventListener("click", () => {
  let i;
  let j;
  let k;
  let l;
  let perform_calculation = 0;
  let Store_String_of_Perform_calculation = "";
  let Store_decrement_slice_value = "";
  let Store_increment_slice_value = "";
  for (i = 0; i < Total_value.length; i++) {
    let temp = "";
    if (Total_value[0] == "/") {
      Total_value = "Syntax ERROR";
      break;
    } else if (Total_value[i] == "/") {
      for (j = i - 1; j >= -1; j--) {
        if (
          Total_value[k] == "/" ||
          Total_value[j] == "X" ||
          Total_value[j] == "+" ||
          Total_value[j] == "-"
        ) {
          Store_decrement_slice_value = Total_value.slice(j + 1, i);
          break;
        } else if (Total_value[j] == undefined) {
          Store_decrement_slice_value = Total_value.slice(j + 1, i);
          break;
        }
      }
      for (k = i + 1; k <= Total_value.length; k++) {
        if (
          Total_value[k] == "/" ||
          Total_value[k] == "X" ||
          Total_value[k] == "+" ||
          Total_value[k] == "-"
        ) {
          Store_increment_slice_value = Total_value.slice(i + 1, k);
          break;
        } else if (Total_value[k] == undefined) {
          Store_increment_slice_value = Total_value.slice(i + 1, k);
          break;
        }
      }
      perform_calculation =
        Number(Store_decrement_slice_value) /
        Number(Store_increment_slice_value);
      Store_String_of_Perform_calculation = String(perform_calculation);
      for (l = j + 1; l < k; l++) {
        temp = temp + Total_value[l];
      }
      Total_value = Total_value.replace(
        temp,
        Store_String_of_Perform_calculation
      );
      i = -1;
    }
  }
  for (i = 0; i < Total_value.length; i++) {
    let temp = "";
    if (Total_value[0] == "X") {
      Total_value = "Syntax ERROR";
      break;
    } else if (Total_value[i] == "X") {
      for (j = i - 1; j >= -1; j--) {
        if (
          Total_value[j] == "/" ||
          Total_value[j] == "X" ||
          Total_value[j] == "+" ||
          Total_value[j] == "-"
        ) {
          Store_decrement_slice_value = Total_value.slice(j + 1, i);
          break;
        } else if (Total_value[j] == undefined) {
          Store_decrement_slice_value = Total_value.slice(j + 1, i);
          break;
        }
      }
      for (k = i + 1; k <= Total_value.length; k++) {
        if (
          Total_value[k] == "/" ||
          Total_value[k] == "X" ||
          Total_value[k] == "+" ||
          Total_value[k] == "-"
        ) {
          Store_increment_slice_value = Total_value.slice(i + 1, k);
          break;
        } else if (Total_value[k] == undefined) {
          Store_increment_slice_value = Total_value.slice(i + 1, k);
          break;
        }
      }
      perform_calculation =
        Number(Store_decrement_slice_value) *
        Number(Store_increment_slice_value);
      Store_String_of_Perform_calculation = String(perform_calculation);
      for (l = j + 1; l < k; l++) {
        temp = temp + Total_value[l];
      }
      Total_value = Total_value.replace(
        temp,
        Store_String_of_Perform_calculation
      );
      i = -1;
    }
  }
  for (i = 0; i < Total_value.length; i++) {
    let temp = "";
    if (Total_value[i] == "+") {
      for (j = i - 1; j >= -1; j--) {
        if (
          // Total_value[j] == "/" ||
          // Total_value[j] == "X" ||
          // Total_value[j] == "+" ||
          Total_value[j] == "-"
        ) {
          Store_decrement_slice_value = Total_value.slice(j + 1, i);
          break;
        } else if (Total_value[j] == undefined) {
          Store_decrement_slice_value = Total_value.slice(j + 1, i);
          break;
        }
      }
      for (k = i + 1; k <= Total_value.length; k++) {
        if (
          Total_value[k] == "/" ||
          Total_value[k] == "X" ||
          Total_value[k] == "+" ||
          Total_value[k] == "-"
        ) {
          Store_increment_slice_value = Total_value.slice(i + 1, k);
          break;
        } else if (Total_value[k] == undefined) {
          Store_increment_slice_value = Total_value.slice(i + 1, k);
          break;
        }
      }
      perform_calculation =
        Number(Store_decrement_slice_value) +
        Number(Store_increment_slice_value);
      Store_String_of_Perform_calculation = String(perform_calculation);
      for (l = j + 1; l < k; l++) {
        temp = temp + Total_value[l];
      }
      Total_value = Total_value.replace(
        temp,
        Store_String_of_Perform_calculation
      );
      i = -1;
    }
  }
  for (i = 0; i < Total_value.length; i++) {
    let temp = "";
    // if (Total_value.length >= 1) {
    //   if (Total_value[0] == "-") {
    //     break;
    //   }
    // }
    if (Total_value[i] == "-") {
      for (j = i - 1; j >= -1; j--) {
        if (
          Total_value[j] == "/" ||
          Total_value[j] == "X" ||
          Total_value[j] == "+"
          // Total_value[j] == "-"
        ) {
          Store_decrement_slice_value = Total_value.slice(j + 1, i);

          break;
        } else if (Total_value[j] == undefined) {
          Store_decrement_slice_value = Total_value.slice(j + 1, i);
          break;
        }
      }
      for (k = i + 1; k <= Total_value.length; k++) {
        if (
          Total_value[k] == "/" ||
          Total_value[k] == "X" ||
          Total_value[k] == "+" ||
          Total_value[k] == "-"
        ) {
          Store_increment_slice_value = Total_value.slice(i + 1, k);
          break;
        } else if (Total_value[k] == undefined) {
          Store_increment_slice_value = Total_value.slice(i + 1, k);
          break;
        }
      }
      perform_calculation =
        Number(Store_decrement_slice_value) -
        Number(Store_increment_slice_value);
      Store_String_of_Perform_calculation = String(perform_calculation);
      console.log(perform_calculation);
      for (l = j + 1; l < k; l++) {
        temp = temp + Total_value[l];
      }
      Total_value = Total_value.replace(
        temp,
        Store_String_of_Perform_calculation
      );
      i = -1;
    }
  }
  console.log(Total_value);
  document.getElementById(
    "lower_part_of_the_main_screen_page_content"
  ).innerText = `${Total_value}`;
});

/* Backup for future use */
// for (let i = 0; i < Total_value.length; i++) {
//   if (Total_value[i] == "/") {
//     Store_Total_Value_Number = Total_value.split(division);
//     let count_number_to_store_operator = Store_Total_Value_Number.length - 1;
//     let num = Store_Total_Value_Number.length - 1;
//     for (let i = 0; i < Store_Total_Value_Number.length - 1; i++) {
//       Store_Total_Value_Number[num + count_number_to_store_operator] =
//         Store_Total_Value_Number[num];
//       count_number_to_store_operator--;
//       num--;
//     }
//     for (let j = 1; j < Store_Total_Value_Number.length - 1; j += 2) {
//       Store_Total_Value_Number[j] = "/";
//     }
//     Store_Total_Value_Number = Store_Total_Value_Number;
//     break;
//   }
// else if (Total_value[i] == "X") {
//   Store_Total_Value_Number = Total_value.split(multiplication);
//   let count_number_to_store_operator = Store_Total_Value_Number.length - 1;
//   let num = Store_Total_Value_Number.length - 1;
//   for (let i = 0; i < Store_Total_Value_Number.length - 1; i++) {
//     Store_Total_Value_Number[num + count_number_to_store_operator] =
//       Store_Total_Value_Number[num];
//     count_number_to_store_operator--;
//     num--;
//   }
//   for (let j = 1; j < Store_Total_Value_Number.length - 1; j += 2) {
//     Store_Total_Value_Number[j] = "*";
//   }
//   Store_Total_Value_Number = Store_Total_Value_Number;
//   break;
// }
//else if (Total_value[i] == "+") {
//   Store_Total_Value_Number = Total_value.split(plus);
//   let count_number_to_store_operator = Store_Total_Value_Number.length - 1;
//   let num = Store_Total_Value_Number.length - 1;
//   for (let i = 0; i < Store_Total_Value_Number.length - 1; i++) {
//     Store_Total_Value_Number[num + count_number_to_store_operator] =
//       Store_Total_Value_Number[num];
//     count_number_to_store_operator--;
//     num--;
//   }
//   for (let j = 1; j < Store_Total_Value_Number.length - 1; j += 2) {
//     Store_Total_Value_Number[j] = "+";
//   }
//   Store_Total_Value_Number = Store_Total_Value_Number;
//   break;
// } else if (Total_value[i] == "-") {
//   Store_Total_Value_Number = Total_value.split(minus);
//   let count_number_to_store_operator = Store_Total_Value_Number.length - 1;
//   let num = Store_Total_Value_Number.length - 1;
//   for (let i = 0; i < Store_Total_Value_Number.length - 1; i++) {
//     Store_Total_Value_Number[num + count_number_to_store_operator] =
//       Store_Total_Value_Number[num];
//     count_number_to_store_operator--;
//     num--;
//   }
//   for (let j = 1; j < Store_Total_Value_Number.length - 1; j += 2) {
//     Store_Total_Value_Number[j] = "-";
//   }
//   Store_Total_Value_Number = Store_Total_Value_Number;
//   break;
// } else {
//   Store_Total_Value_Number = String(Total_value);
// }
// }
// let Store_Total_Value_Number2 = [];
// for (let i = 0; i < Store_Total_Value_Number.length; i++) {
//   for (let j = 0; j < String(Store_Total_Value_Number[i]).length; j++) {
//     if (String(Store_Total_Value_Number[i])[j] == "X") {
//       Store_Total_Value_Number2.push(
//         String(Store_Total_Value_Number[i]).split(multiplication)
//       );
//       let count_number_to_store_operator =
//         Store_Total_Value_Number2.length - 1;
//       let num = Store_Total_Value_Number2.length - 1;
//       for (let i = 0; i < Store_Total_Value_Number2.length - 1; i++) {
//         Store_Total_Value_Number2[num + count_number_to_store_operator] =
//           Store_Total_Value_Number2[num];
//         count_number_to_store_operator--;
//         num--;
//       }
//       for (let j = 1; j < Store_Total_Value_Number2.length - 1; j += 2) {
//         Store_Total_Value_Number2[j] = "*";
//       }
//       Store_Total_Value_Number2 = Store_Total_Value_Number2;
//     }
//   }
// }
// console.log(Store_Total_Value_Number);
// console.log(Store_Total_Value_Number2);
// console.log(Store_Total_Value_Number2.length);

// let str = "Roman";
// console.log(str.slice(0, 3));

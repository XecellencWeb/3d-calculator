const display = document.querySelector("#display");

const appendToDisplay = (val) => (display.value += val);

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Maths Error!";
  }
};

const clearDisplay = () => (display.value = "");
const delDisplay = () => (display.value = display.value.slice(0, -1));

const convertBinaryToDecimal = () => {
  const input = document.getElementById("input");
  const resultcontainer = document.getElementById("result-container");
  const resultField = document.getElementById("result");

  resultcontainer.classList.add("hidden");

  if (!input.value) {
    alert("Value is not present!");
    return;
  }

  if (input.value.match("([^0|1])")) {
    alert("Invalid value! must be in 1 or 0.");
    return;
  }

  const convertedValue = parseInt(input.value, 2);
  resultcontainer.classList.remove("hidden");
  resultField.innerHTML = convertedValue;
};

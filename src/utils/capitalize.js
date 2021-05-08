const capitalize = (value, useCase = "") => {
  let textArray = value.split(" ");
  let capitalizedText = "";
  for (let i = 0; i < textArray.length; i++) {
    capitalizedText +=
      textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + " ";
  }

  if (useCase === "name") return capitalizedText.split(" ");

  return capitalizedText;
};

export default capitalize;

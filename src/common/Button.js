export function Button(options) {
  const {
    btnId = "",
    text = "",
    classes = "",
    btnType = "button",
    btnForm = "",
    onClick = () => {},
  } = options;

  const button = document.createElement("button");
  button.setAttribute("id", btnId);
  button.setAttribute("type", btnType);
  button.setAttribute("form", btnForm);
  button.innerText = text;
  button.className = classes;
  button.addEventListener("click", onClick);

  return button;
}

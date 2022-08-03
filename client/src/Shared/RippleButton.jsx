import { useEffect } from "react";

function RippleButton({
  disabled,
  label,
  align,
  buttonClass,
  type,
  handleClick,
  id,
  path,
  download,
}) {
  function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
  }

  useEffect(() => {
    const rippleButton = document.getElementById(id);

    if (rippleButton) {
      rippleButton.addEventListener("click", (e) => {
        mousePositionToCustomProp(e, rippleButton);
        rippleButton.classList.add("pulse");
        rippleButton.addEventListener(
          "animationend",
          () => {
            rippleButton.classList.remove("pulse");
          },
          { once: true }
        );
      });
    }
  });

  return (
    <div className={`submitButtonContainer ${align}`}>
      {path ? (
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className={`button buttonTheme ripple-button ${buttonClass}`}
          download={download}
          disabled={disabled}
          id={id}
        >
          {label}
        </a>
      ) : (
        <button
          className={`button buttonTheme ripple-button ${buttonClass}`}
          type={type}
          disabled={disabled}
          id={id}
          onClick={handleClick}
        >
          {label}
        </button>
      )}
    </div>
  );
}

export default RippleButton;

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export const Content = () => {
  const [isButtonPress, setIsButtonPress] = useState(false);

  const buttonContentRef = useRef();
  const user = useRef();

  function pressButton() {
    buttonContentRef.current.classList.add("buttonClicked");

    setTimeout(() => {
      setIsButtonPress(true);
    }, 500);
  }

  return (
    <main>
      <section className="content" ref={buttonContentRef}>
        <p>Press the PS button on your controller.</p>
        <div className="mainButton">
          <div className="button" onClick={pressButton}>
            <div className="icon">
              <img src="./PS.png" alt="PlayStation button" />
            </div>
          </div>
          <div className="absolute glow"></div>
          <div className="absolute circle1"></div>
          <div className="absolute circle2"></div>
          <div className="absolute particles"></div>
        </div>
      </section>

      {isButtonPress && (
        <section
          className="userChoice"
          onLoad={() =>
            setTimeout(() => {
              user.current.classList.add("user-active");
            }, 2500)
          }
        >
          <h1>Welcome Back to PlayStation</h1>
          <p>Who{"'"}s want you choose ?</p>

          <article ref={user}>
            <span className="userController">
              <span>1</span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <div className="userImageContainer">
              <img src="./user-image.webp" />
            </div>

            <h3>Alex Moulinneuf</h3>
          </article>
        </section>
      )}
    </main>
  );
};

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { useAppStore } from "../store";

export const Content = () => {
  const [isButtonPress, setIsButtonPress] = useState(false);

  const { updateOpacity } = useAppStore();
  const buttonContentRef = useRef();
  const user = useRef();

  function pressButton() {
    buttonContentRef.current.classList.add("buttonClicked");

    setTimeout(() => {
      setIsButtonPress(true);
    }, 500);
  }

  function redirectionProjets() {
    document.querySelector(".userChoice").classList.add("leavePage");

    setTimeout(() => {
      updateOpacity(true);
    }, 500)


    setTimeout(() => {
      window.location.href = "/projets";
    }, 1800);
  }

  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 3000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

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
            <Tilt options={defaultOptions}>
              <div onClick={redirectionProjets} className="userImageContainer">
                <img src="./user-image.webp" />
              </div>
            </Tilt>

            <h3>Alex Moulinneuf</h3>
          </article>
        </section>
      )}
    </main>
  );
};

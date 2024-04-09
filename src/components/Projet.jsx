export const Projet = ({ projet, setBackgroundProjet, index, setIndex }) => {

  function selectProjet() {
    setBackgroundProjet(projet.img);
    setIndex(projet.id - 1)
  }

  return (
    <article
      className={`projetContent ${(index+ 1) === projet.id ? "projetContent-active" : ""}`}
      key={projet.id}
      id={projet.id}
      onClick={ (index + 1) === projet.id ? null : selectProjet}
      style={{ animationDelay: `${projet.id / 10}s` }}
    >


      <div className="imageContainer">
        <div className="glowProjet"></div>
        <div
          style={{ backgroundImage: `url(${projet.cardImg})` }}
          className="imageProjet"
        >
        </div>
      </div>

      
      <h2>{projet.title}</h2>
    </article>
  );
};

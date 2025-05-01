import React from "react";

function Exercices() {
  return (
    <section id="exercice" style={{ marginTop: "6rem" }}>
      <center>
        {" "}
        <div id="text_exo" style={{ color: "white" }}>
          <h1>Ton entraînement commence ici</h1>
          <p>
            <h4>Choisis une catégorie pour commencer</h4>{" "}
          </p>
        </div>
        <img src="/img/exo/exo1.jpg" className="img-fluid mt-2" alt="..." />
        {/* Prise de masse*/}
        <div id="section_prise_masse" className="container my-5 ">
          <center>
            <h1 className="my-3" style={{ color: "white", fontWeight: "bold" }}>
              {" "}
              Prise de masse musculaire{" "}
            </h1>
          </center>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/devCouch.gif"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Développé couché</h5>
                  <p className="card-text">
                    Effectue 4 séries de 8 répétitions avec une charge
                    progressive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/squart.gif"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Squat avec barre</h5>
                  <p className="card-text">
                    Réalise 4 séries de 10 répétitions. Descends jusqu’à ce que
                    les cuisses soient parallèles au sol.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="/video/trac.gif" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Tractions</h5>
                  <p className="card-text">
                    Fais 3 séries de 10 de répétitions. Utilise un élastique si
                    besoin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Perte de poids*/}
        <div id="section_prise_masse" className="container my-5 ">
          <center>
            <h1 className="my-3" style={{ color: "white", fontWeight: "bold" }}>
              {" "}
              Perte de poids{" "}
            </h1>
          </center>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/bur.gif"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Burpees</h5>
                  <p className="card-text">
                    3 séries de 15. Exercice complet pour brûler rapidement des
                    calories.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/moutain2.gif"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Mountain climbers</h5>
                  <p className="card-text">
                    4 séries de 30 secondes. Garde un rythme élevé.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/jump.gif"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Jumping Jacks</h5>
                  <p className="card-text">
                    5 séries de 1 minute pour chauffer tout le corps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tonification*/}
        <div id="section_prise_masse" className="container my-5 ">
          <center>
            <h1 className="my-3" style={{ color: "white", fontWeight: "bold" }}>
              {" "}
              Tonification{" "}
            </h1>
          </center>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/pompe.gif"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Pompes</h5>
                  <p className="card-text">
                    3 séries de 12. Garder le corps bien aligné
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/plache.gif"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Planche</h5>
                  <p className="card-text">
                    3 séries de 60 secondes. Contracte bien les abdos
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/fente.gif"
                  className="card-img-top img-fluid "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Fentes avant</h5>
                  <p className="card-text">
                    4 séries de 10 par jambe. Garde le buste droit c'est
                    possible sans barre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Endurance*/}
        <div id="section_prise_masse" className="container my-5 ">
          <center>
            <h1 className="my-3" style={{ color: "white", fontWeight: "bold" }}>
              {" "}
              Endurance{" "}
            </h1>
          </center>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/endurance.gif"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course à pied</h5>
                  <p className="card-text">
                    20 à 45 minutes <br />
                    3 à 5 fois par semaine <br />
                    Commence à un rythme modéré puis augmente progressivement la
                    durée ou la vitesse
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/corde.gif"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Corde à sauter</h5>
                  <p className="card-text">
                    5 à 15 minutes (tu peux diviser en plusieurs séries) <br />
                    3 à 4 fois par semaine <br />
                    Excellent pour le cardio, travaille aussi la coordination.
                    Alterne entre saut normal, pied par pied, et sauts croisés.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/video/rameur.gif"
                  className="card-img-top img-fluid "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Rameur</h5>
                  <p className="card-text">
                    C’est un excellent exercice complet qui améliore à la fois
                    l’endurance cardiovasculaire, la force musculaire, la
                    posture et la coordination
                    <br />
                    vise 22 à 28 coups par minute pour du cardio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </section>
  );
}

export default Exercices;

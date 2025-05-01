import React from "react";
import { Link } from "react-router-dom";

function Objectif() {
  return (
    <section
      id="objectif"
      style={{
        marginTop: "4rem",
        backgroundImage: 'url("/img/bg1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "160vh",
        padding: "4rem 2rem",
      }}
    >
      <div id="contenu">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                id="imob"
                src="/img/img_Objectif/ob1.avif"
                className="card-img-top img-fluide "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Prise de masse musculaire</b>
                </h5>
                <p className="card-text">
                  Construisez un corps plus fort et plus massif grâce à des
                  entraînements intensifs et ciblés. Suivez des programmes
                  conçus pour stimuler l’hypertrophie musculaire, combinés à des
                  conseils nutritionnels adaptés. Idéal pour ceux qui veulent
                  développer leur force, leur volume et transformer leur
                  silhouette.
                </p>
              </div>
              <Link className="btn btn-md btn-success" to={"/Exercices"}>
                {" "}
                <b>Voir les programmes</b>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/img/img_Objectif/ob5.jpg"
                className="card-img-top img-fluide "
                alt="..."
                id="imob"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  <b>Perte de poids</b>
                </h5>
                <p className="card-text">
                  Brûlez les graisses efficacement et atteignez vos objectifs
                  minceur grâce à des entraînements dynamiques et des conseils
                  nutritionnels adaptés. Ce programme est conçu pour vous aider
                  à retrouver une silhouette affinée, améliorer votre condition
                  physique et adopter un mode de vie plus sain, durablement.
                </p>
              </div>
              <Link className="btn btn-md btn-success" to={"/Exercices"}>
                {" "}
                <b>Voir les programmes</b>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                id="imob"
                src="/img/img_Objectif/ob6.avif"
                className="card-img-top img-fluide"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Tonification</b>
                </h5>
                <p className="card-text">
                  Un programme conçu pour raffermir les muscles, améliorer la
                  définition corporelle et obtenir un corps plus tonique sans
                  prise de masse excessive.
                </p>
              </div>
              <Link className="btn btn-md btn-success" to={"/Exercices"}>
                {" "}
                <b>Voir les programmes</b>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/img/img_Objectif/ob7.jpg"
                className="card-img-top img-fluide"
                alt="..."
                id="imob"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Endurance</b>
                </h5>
                <p className="card-text">
                  Améliore ta capacité cardiovasculaire, repousse la fatigue et
                  augmente ta performance sur la durée grâce à des entraînements
                  ciblés.
                </p>
              </div>
              <Link className="btn btn-md btn-success" to={"/Exercices"}>
                {" "}
                <b>Voir les programmes</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objectif;

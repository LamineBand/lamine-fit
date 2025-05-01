import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      style={{
        marginTop: "5rem",
        color: "white",
        height: "88vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.498), rgba(3, 13, 15, 0.459)), url("/img/bg5.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        display: "flex", // Flexbox activé
        alignItems: "center", // Centre verticalement
        justifyContent: "center", // Centre horizontalement
        textAlign: "center",
      }}
    >
      <center>
        <div id="text-heros" className="hero-section ">
          <h1>Transforme ton corps, dépasse tes limites</h1>
          <p>
            Lamine-Fit t’accompagne avec des exercices ciblés, des vidéos
            guidées et des conseils personnalisés.
          </p>
          <Link
            id="btn"
            to="/objectifs"
            className="btn btn p-2"
            style={{ backgroundColor: "#00ff66" }}
          >
            Commencer maintenant
          </Link>
        </div>
      </center>
    </section>
  );
}

export default Home;

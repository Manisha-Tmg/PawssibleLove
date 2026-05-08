import { Link } from "react-router-dom";
import "../home/Homepage.css";
import milly from "../assets/Milly.jpg";
import coco from "../assets/Simba.jpg";
import dora from "../assets/Coco.jpeg";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/navbar/Navbar";

const Home = () => {
  const pets = [
    { name: "Bella", breed: "Golden Retriever", image: dora },
    { name: "Milo", breed: "Tabby Cat", image: coco },
    { name: "Charlie", breed: "Beagle", image: milly },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Furry Friend</h1>
          <p>Adopt a pet. Save a life. Bring joy to your home.</p>
          <Link to="/find-pets" className="btn">
            Adopt Now
          </Link>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="featured">
        <h2>Meet Our Featured Pets</h2>
        <div className="card-grid">
          {pets.map((pet, idx) => (
            <div className="card" key={idx}>
              <img src={pet.image} alt={pet.name} />
              <div className="card-body">
                <h3>{pet.name}</h3>
                <p>{pet.breed}</p>
                <Link to="/find-pets">View More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

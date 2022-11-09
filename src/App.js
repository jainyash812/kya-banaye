import "./styles.scss";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";

export default function App() {
  const itemsForDinner = [
    "Dal Chawal",
    "Chilka Dal ",
    "Kadi Khichdi",
    "Mix Pulav",
    "Paneer Pulav",
    "Sandwich",
    "Toast Sandwich",
    "Shimla Sandwich",
    "Cheese Tamatar Sandwich",
    "Shimla Corn",
    "Palak Paneer",
    "Matar Palak",
    "Shimla Paneer",
    "Fried Rice",
    "Noodles",
    "Pasta",
    "FulGobi",
    "Matar Paneer",
    "Matar",
    "Pav bhaji",
    "Pani Puri",
    "Aloo Paratha",
    "Matar Paratha",
    "Gobi Paratha",
    "Dosa",
    "Dal Fry",
    "Mix Dal",
    "Sev Puri",
    "Misal Pav",
    "Bhindi"
  ];

  return (
    <div className="container">
      <header className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <h1 className="navbar-logo">
            Kya <br />
            Banaye?{" "}
          </h1>
        </Link>
        <nav className="navbar">
          <Link to="/menu" className="navbar-link">
            <h3>Menu</h3>
          </Link>
          <Link to="/" className="navbar-link">
            <h3>Home</h3>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/menu"
          element={<Menu itemsForDinner={itemsForDinner} />}
        />
        <Route path="/" element={<Home itemsForDinner={itemsForDinner} />} />
      </Routes>
    </div>
  );
}

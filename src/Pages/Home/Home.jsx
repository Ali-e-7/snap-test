import "./Home.scss";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <NavLink to="/vendor-list">Vendors</NavLink>
    </div>
  );
}

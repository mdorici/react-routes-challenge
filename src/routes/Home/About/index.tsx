import { Outlet } from "react-router-dom";

export default function About() {
  return (
      <section>
        <div className="container">
          <h2>Sobre nós</h2>
        </div>
        <Outlet/>
      </section>
  );
}

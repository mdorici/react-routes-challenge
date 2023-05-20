import { Outlet } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <div className="container">
        <h2>Não encontrado!</h2>
      </div>
      <Outlet />
    </section>
  );
}

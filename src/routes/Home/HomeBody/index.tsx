import { Outlet } from "react-router-dom";

export default function HomeBody() {
  return (
    <section>
      <div className="container">
        <h2>Bem-vindos!</h2>
      </div>
      <Outlet />
    </section>
  );
}

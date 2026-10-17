import Navbar from "../Components/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" aria-labelledby="home-title">
          <h1 id="home-title">Welcome to Car Wash Centre</h1>
          <p>Quality care to keep your car clean, inside and out.</p>
        </section>
        <section id="services" aria-labelledby="services-title">
          <h2 id="services-title">Our Services</h2>
          <ul>
            <li>Mat cleaning</li>
            <li>Interior cleaning</li>
            <li>Vacuuming</li>
          </ul>
        </section>
      </main>
    </>
  );
}
import '../style/pages/Home.css';

const Home = () => {
  return (
    <div className="home-content">
      <div className="cards-container">
        {[
          { title: "Chalé familia", name: "Maria da Silva", dates: "03/04/2024 - 07/04/2024", color: "red" },
          { title: "Suíte com cozinha 1", name: "João Alberto Rodrigues", dates: "03/04/2024 - 07/04/2024", color: "red" },
          { title: "Cabana 1", name: "Gabriel Mendes Moura", dates: "03/04/2024 - 07/04/2024", color: "red" },
          { title: "Overlands", name: "Rafael Oliveiros", dates: "03/04/2024 - 07/04/2024", color: "blue" },
          { title: "Cabana 2", name: "Joana Soares", dates: "03/04/2024 - 07/04/2024", color: "blue" },
          { title: "Overlands", name: "Fernanda Nogueira", dates: "03/04/2024 - 07/04/2024", color: "yellow" },
          { title: "Suíte com cozinha 2", name: "José Martins", dates: "03/04/2024 - 07/04/2024", color: "yellow" },
          { title: "Bus", name: "", dates: "", color: "green" },
          { title: "Overlands", name: "", dates: "", color: "green" },
          { title: "Cabana 3", name: "", dates: "", color: "green" },
          { title: "Nova Acomodação", name: "", dates: "", color: "green" },
        ].map((item, index) => (
          <div key={index} className={`card ${item.color}`}>
            <div className="card-title">{item.title}</div>
            {item.name && <div className="card-name">{item.name}</div>}
            {item.dates && <div className="card-dates">{item.dates}</div>}
            {!item.name && !item.dates && <div className="card-add">Adicionar reserva +</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

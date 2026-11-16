function Card() {
  const name = "Ayesha Khan";
  return (
    <div className="card">
      <b>{name}</b>
      <img src="avatar.png" />
    </div>
  );
}

function Broken() {
  return (
    <div>
      <h1>Campus Card</h1>
      <Card />
    </div>
  );
}

export default Broken;
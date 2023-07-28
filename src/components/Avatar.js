import maria from "../maria.jpg";
const Avatar = () => {
  const username = "Maria Sklodowska-Curie";
  return (
    <div className="box-avatar">
      <header style={{ fontWeight: "bold" }}>{username}</header>
      <img src={maria} alt="maria" />
    </div>
  );
};

export default Avatar;

export default function Footer() {
  const listItemStyle = {
    color: "#0d1117",
    display: "inline-block",
    fontSize: "18px",
    margin: "2px 10px",
  };

  const lastStyle = {
    display: "inline-block",
    margin: "0 10px",
    fontSize: "15px",
    marginTop: "20px",
    marginBottom: "50px",
    textDecoration: "none",
    color: "#3a97ff",
    fontWeight: "bold",
    
  };

  return (
    <>
      <footer>
        <ul style={{ textAlign: "center" }}>
          <li style={listItemStyle}>Name: Boss</li>
          <li style={listItemStyle}>Email: boss@gmail.com </li>
        </ul>
      </footer>
    </>
  );
}

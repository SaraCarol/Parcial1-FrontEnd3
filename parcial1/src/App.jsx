import './App.css';
import Form from './Components/Form';

const titleStyles = {
  backgroundColor: "#ddb3ff",
  color: "#8314df",
  width: "50%",
  margin: "20px auto",
  borderRadius: "10px",
  padding: "10px",
};


function App() {
  return (
    <>
    <h1 style={titleStyles}>Bienvenido al proyecto</h1>
    <Form />
  </>
  );
}

export default App;

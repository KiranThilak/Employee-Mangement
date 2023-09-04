import Form from "./Form";
import Table from "./Table";

const jsonData = [
  {
    name: "Saurav Sir",
    email: "techular@gmail.com",
    gender: "Male",
    dob: "28-08-1991",
    salary: 300000,
  },
  {
    name: "Kiara",
    email: "jha02323@gmail.com",
    gender: "female",
    dob: "11-02-2022",
    salary: 200000,
  },
  {
    name: "Saurav Sir",
    email: "techular@gmail.com",
    gender: "Male",
    dob: "28-08-1991",
    salary: 300000,
  },
];

function App() {
  return (
    <div className="App">
      <Form />
      <Table data={jsonData} />
    </div>
  );
}

export default App;

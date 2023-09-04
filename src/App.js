import EmployeeList from "./Employeelist";
import Table from "./Table";

const jsonData = [
  {
    name: "Saurav Sir",
    email: "techular@gmail.com",
    gender: "Male",
    dob: "28-08-1991",
    joining: "28-05-2022",
    relieving: "28-08-2023",
    contact: "9988456738",
    salary: 300000,
  },
  {
    name: "Kiara",
    email: "jha02323@gmail.com",
    gender: "female",
    dob: "11-02-2022",
    joining: "28-05-2022",
    relieving: "28-08-2023",
    contact: "9988456738",
    salary: 200000,
  },
  {
    name: "Saurav Sir",
    email: "techular@gmail.com",
    gender: "Male",
    dob: "18-08-1991",
    joining: "28-05-2022",
    relieving: "28-08-2023",
    contact: "9988456738",
    salary: 300000,
  },
];

function App() {
  return (
    <div className="App">
      <EmployeeList />
      <Table data={jsonData} />
    </div>
  );
}

export default App;

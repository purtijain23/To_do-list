import logo from "./logo.svg";
import "./App.scss";
import UserDashboard from "./component/dashboard/UserDashboard";

function App() {
  return (
    <>
      <div className="row mx-0">
        <div className="col-12 px-0">
          <UserDashboard />
        </div>
      </div>
    </>
  );
}

export default App;

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import DashboardMainContent from "./components/layout/DashboardMainContent";
import { navigationLinks } from "./data/SideBarLinks";
import { AnatomyHealthData } from "./data/AnatomyHealthData";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar navigationLinks={navigationLinks} />
        <DashboardMainContent AnatomyHealthData={AnatomyHealthData} />
      </div>
    </div>
  );
}

export default App;

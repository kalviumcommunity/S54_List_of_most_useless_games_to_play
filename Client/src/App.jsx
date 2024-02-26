import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import List from "./components/List";
import NewPostForm from "./components/Form";
import EditForm from "./components/EditForm";
import Edit from "./components/Edit"
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="backg-color">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<NewPostForm />} />
          <Route path="/list/:id" element={<Edit />} />
          <Route path="/list/edit/:id" element={<EditForm />} />
          {/* Add additional routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Header from "./components/Header";
import Navigation from "./components/nav";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Navigation/>
            <div className="content">content</div>
        </div>
    );
}

export default App;

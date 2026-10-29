import './App.css';
import Header from "./header/Header";
import LoginForm from "./login/LoginForm";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                <LoginForm/>
            </main>
        </div>
    );
}

export default App;

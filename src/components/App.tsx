import * as React from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Main from "./Main";


function App() {
    const buttonName = "nbtn";
    let [count, setNewCount] = React.useState(0);
    const handleClick = () => {
        setNewCount(count + 1);
    };

        return (
            <React.Fragment>
                <Header buttonName={buttonName} count={count} handleClick={handleClick}/>
                <Main/>
            </React.Fragment>

        );
}


export default App;
import {useEffect} from "react";

function App() {
    useEffect(() => {document.title = "Nike: dress as you like"}, []);
    return (
        <h1 className="text-3xl font-bold underline">
            Hello World
        </h1>
    );
}

export default App;

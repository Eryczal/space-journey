import "./App.css";
import { usePage } from "./contexts/PageContext";
import { ExplorePage } from "./pages/ExplorePage/ExplorePage";
import { MainPage } from "./pages/MainPage";

function App() {
    const { page, setPage } = usePage();

    return (
        <>
            {page === "main" && <MainPage />}
            {page === "explore" && <ExplorePage />}
        </>
    );
}

export default App;

import { createBrowserRouter } from "react-router";
import { MainPage } from "./pages/MainPage/MainPage";
import { ExplorePage } from "./pages/ExplorePage/ExplorePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/explore",
        element: <ExplorePage />,
    },
]);

export { router };

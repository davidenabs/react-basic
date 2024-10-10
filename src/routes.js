import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AboutPage from "./pages/AboutPage";

function MyRoutes() {
    return (
        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
                path="*"
                element={<PageNotFound />}
            />
        </Routes>
    );
};

export default MyRoutes;
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Card from "./pages/Card";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate to="/profile" replace />}
                        />
                        <Route path="profile" element={<Profile />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="card" element={<Card />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

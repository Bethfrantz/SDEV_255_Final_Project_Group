import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import AddCourse from "./pages/AddCourse.jsx";
import AuthPage from "./AuthPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { useAuth } from "./AuthContext.jsx";
import { useState } from "react";

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Intro to React",
      description: "Basics of React library",
      subject: "Web Development",
      credits: 3,
      teacher: "Any Teacher",
    },
  ]);

  const addCourse = (course) => {
    setCourses([...courses, { ...course, id: Date.now() }]);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const { isAuthed, user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/auth", { replace: true });
  };

  // Optional: show a simple loading screen while auth loads from localStorage
  if (loading) {
    return <div style={{ padding: 20 }}>Loading...</div>;
  }

  return (
    <div>
      {isAuthed && (
        <header className="welcome-bar">
          <span className="welcome-text">
            Welcome, <strong>{user?.name || "User"}</strong> 👋
          </span>
          <button className="logout-btn" type="button" onClick={handleLogout}>
            Log Out
          </button>
        </header>
      )}

      <Navbar />

      <Routes>
        {/* Public auth page */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected pages */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses courses={courses} onDelete={deleteCourse} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-course"
          element={
            <ProtectedRoute>
              <AddCourse onAdd={addCourse} />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to={isAuthed ? "/" : "/auth"} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;

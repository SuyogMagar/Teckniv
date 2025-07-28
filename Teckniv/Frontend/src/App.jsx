import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import VendorRegistration from './pages/VendorRegistration';
import RegisterSignIn from './pages/RegisterSignIn';
import ServiceDetail from './pages/ServiceDetail';
// Admin imports
import AdminDashboard from './pages/AdminDashboard';
import AdminPostJob from './pages/AdminPostJob';
import AdminApplicants from './pages/AdminApplicants';
import AdminProfile from './pages/AdminProfile';
import AdminManageJobs from './pages/AdminManageJobs';
import ProtectedRoute from './components/layout/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/vendor-registration" element={<VendorRegistration />} />
              <Route path="/auth" element={<RegisterSignIn />} />
              {/* Admin-only routes */}
              <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              <Route path="/admin/post-job" element={<ProtectedRoute><AdminPostJob /></ProtectedRoute>} />
              <Route path="/admin/applicants" element={<ProtectedRoute><AdminApplicants /></ProtectedRoute>} />
              <Route path="/admin/profile" element={<ProtectedRoute><AdminProfile /></ProtectedRoute>} />
              <Route path="/admin/manage-jobs" element={<ProtectedRoute><AdminManageJobs /></ProtectedRoute>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
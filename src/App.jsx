// import { useEffect } from \"react\";
// import React from \"react\";
// import \"./App.css\";
// import { BrowserRouter, Routes, Route } from \"react-router-dom\";
// import axios from \"axios\";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// const Home = () => {
//   const helloWorldApi = async () => {
//     try {
//       const response = await axios.get(`${API}/`);
//       console.log(response.data.message);
//     } catch (e) {
//       console.error(e, `errored out requesting / api`);
//     }
//   };

//   useEffect(() => {
//     helloWorldApi();
//   }, []);

//   return (
//     <div>
//       <header className=\"App-header\">
//         <a
//           className=\"App-link\"
//           href=\"https://emergent.sh\"
//           target=\"_blank\"
//           rel=\"noopener noreferrer\"
//         >
//           <img src=\"https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4\" />
//         </a>
//         <p className=\"mt-5\">Building something incredible ~!</p>
//       </header>
//     </div>
//   );
// };
// import Header from \"./components/Header\";
// import Footer from \"./components/Footer\";
// import { Toaster } from \"./components/ui/sonner\";
// import Home from \"./pages/Home\";
// import About from \"./pages/About\";
// import Services from \"./pages/Services\";
// import Gallery from \"./pages/Gallery\";
// import Contact from \"./pages/Contact\";
// import Admin from \"./pages/Admin\";
// import Billing from \"./pages/Billing\";
// function App() {
//   return (
//     <div className=\"App\">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path=\"/\" element={<Home />} />
//           <Route path=\"/about\" element={<About />} />
//           <Route path=\"/services\" element={<Services />} />
//           <Route path=\"/gallery\" element={<Gallery />} />
//           <Route path=\"/contact\" element={<Contact />} />
//           <Route path=\"/admin\" element={<Admin />} />
//           <Route path=\"/billing\" element={<Billing />} />
//         </Routes>
//         <Footer />
//         <Toaster />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;









// import React from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Toaster } from "sonner";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
// import Admin from "./pages/Admin";
// import Billing from "./pages/Billing";

// function App() {
//   return (
//     <div className="App">
   
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/billing" element={<Billing />} />
//         </Routes>
//         <Footer />
//         <Toaster />
      
//     </div>
//   );
// }

// export default App;




// function App() {
//   return (
//     <>
//       <h1 style={{ color: "red" }}>App Loaded ✅</h1>
//     </>
//   );
// }



// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Billing from "./pages/Billing";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f0] text-[#3b2f2f]">
      <Router>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

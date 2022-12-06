import Navbar  from './components/Navbar.js';
import Footer  from './components/Footer.js';
import './App.css';
import Homepage from './components/Homepage.js';

function App() {
  return (
    <div class="bg-orange-50 pb-6 sm:pb-8 lg:pb-12">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}

export default App;

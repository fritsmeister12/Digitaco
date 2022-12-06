import Hero  from './Hero.js';
import Calltoaction from './Calltoaction.js';
import Content from './Content';
import Testimonials from './Testimonials.js';
import Ourwork from './Ourwork.js';
import Contact from './Contact.js';

function Homepage() {
  return (
    <div>
        <Hero />
        <Calltoaction />
        <Content />
        <Ourwork />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default Homepage
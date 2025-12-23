import { useEffect } from 'react';

declare const AOS: {
  init: (options: { duration: number; once: boolean; offset: number }) => void
}

export default function App() {
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg mr-2">
                  <span className="text-2xl font-bold">SE</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Softepic Technology</div>
                  <div className="text-xs text-gray-600 -mt-1">Software Development Company</div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition font-medium">Process</a>
              <a href="#technologies" className="text-gray-700 hover:text-blue-600 transition font-medium">Technologies</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</a>
            </div>
            <button className="md:hidden text-gray-700">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      <section className="relative bg-blue-600 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" alt="Technology Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg mb-6" data-aos="fade-down">
              <span className="text-white font-semibold">🚀 Leading Software Development Company</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">Software Development Company in India</h1>
            <p className="text-2xl sm:text-3xl text-white mb-4 font-semibold" data-aos="fade-up" data-aos-delay="200">Custom Software Development, Web & Mobile App Solutions</p>
            <p className="text-lg text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="300">Softepic Technology (P) Ltd is a trusted software development company in India providing custom web applications, mobile apps, and enterprise software solutions for startups and businesses worldwide.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
              <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition shadow-lg transform hover:scale-105">
                <i className="fas fa-comments mr-2"></i>Get a Free Consultation
              </a>
              <a href="#contact" className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-600 transition shadow-lg transform hover:scale-105">
                <i className="fas fa-file-alt mr-2"></i>Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg mb-4 font-semibold" data-aos="fade-down">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">About Softepic Technology – Professional Software Services Company</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" data-aos="zoom-in"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Team Collaboration" className="rounded-lg shadow-xl" />
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600 mb-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Softepic Technology (P) Ltd is a leading software services company specializing in building scalable, secure, and high-performance digital solutions. We help businesses transform ideas into reliable software products using modern technologies and industry best practices.</p>
                <p className="text-lg text-gray-700 leading-relaxed">We work with startups, SMEs, and enterprises across multiple domains, delivering cost-effective and future-ready software solutions.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center bg-blue-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="100">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-3xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Location</p>
                    <p className="text-blue-100">Karur, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-700 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="200">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-globe text-3xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Serving Clients</p>
                    <p className="text-blue-100">India & Global</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg mb-4 font-semibold" data-aos="fade-down">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Software Development Services We Offer</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" data-aos="zoom-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon="fa-code" title="Custom Software Development" description="We design and develop tailor-made software solutions that align perfectly with your business processes and goals." delay="100" color="blue-600" />
            <ServiceCard icon="fa-laptop-code" title="Web Application Development" description="Secure, responsive, and SEO-friendly web applications built using modern frameworks and technologies." delay="200" color="blue-500" />
            <ServiceCard icon="fa-mobile-alt" title="Mobile App Development (Android & iOS)" description="High-performance mobile applications with intuitive UI and smooth user experience." delay="300" color="blue-700" />
            <ServiceCard icon="fa-palette" title="UI / UX Design Services" description="User-centric designs that improve engagement, usability, and conversion rates." delay="400" color="blue-600" />
            <ServiceCard icon="fa-cloud" title="Cloud Solutions & API Integration" description="Scalable cloud deployments and seamless third-party API integrations." delay="500" color="blue-500" />
            <ServiceCard icon="fa-tools" title="Software Maintenance & Support" description="Reliable post-deployment support, bug fixes, performance tuning, and upgrades." delay="600" color="blue-700" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <Stat number="500+" label="Projects Completed" delay="100" />
            <Stat number="200+" label="Happy Clients" delay="200" />
            <Stat number="50+" label="Team Members" delay="300" />
            <Stat number="5+" label="Years Experience" delay="400" />
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg mb-4 font-semibold" data-aos="fade-down">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Our Software Development Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" data-aos="zoom-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcessStep number="1" title="Requirement Analysis & Consultation" description="We understand your business needs, technical goals, and project scope." delay="100" />
            <ProcessStep number="2" title="Design & Architecture Planning" description="Creating clean UI/UX designs and robust system architecture." delay="200" />
            <ProcessStep number="3" title="Agile Development" description="Efficient coding practices with continuous progress tracking." delay="300" />
            <ProcessStep number="4" title="Testing & Quality Assurance" description="Comprehensive testing to ensure performance, security, and stability." delay="400" />
            <ProcessStep number="5" title="Deployment & Launch" description="Smooth deployment with minimal downtime." delay="500" />
            <ProcessStep number="6" title="Ongoing Support & Maintenance" description="Continuous monitoring, updates, and enhancements." delay="600" />
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg mb-4 font-semibold" data-aos="fade-down">
              Technologies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Technologies We Use for Software Development</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" data-aos="zoom-in"></div>
            <p className="text-lg text-gray-600" data-aos="fade-up">We use industry-standard and modern technologies to build scalable software solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechCategory icon="fa-laptop-code" title="Frontend Technologies" skills={['HTML', 'CSS', 'JavaScript', 'React', 'Angular']} color="bg-blue-600" delay="100" />
            <TechCategory icon="fa-server" title="Backend Technologies" skills={['Node.js', 'Java', 'PHP', 'Python']} color="bg-blue-700" delay="200" />
            <TechCategory icon="fa-mobile-alt" title="Mobile Technologies" skills={['Flutter', 'React Native']} color="bg-blue-500" delay="300" />
            <TechCategory icon="fa-database" title="Databases" skills={['MySQL', 'MongoDB']} color="bg-blue-600" delay="400" />
            <TechCategory icon="fa-cloud" title="Cloud Platforms" skills={['AWS', 'Microsoft Azure']} color="bg-blue-700" delay="500" mdColSpan="2" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg mb-4 font-semibold" data-aos="fade-down">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Why Choose Softepic Technology?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" data-aos="zoom-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WhyChooseItem text="Experienced software development team" delay="100" />
            <WhyChooseItem text="Client-focused development approach" delay="200" />
            <WhyChooseItem text="Affordable and transparent pricing" delay="300" />
            <WhyChooseItem text="On-time project delivery" delay="400" />
            <WhyChooseItem text="Secure and scalable software solutions" delay="500" />
            <WhyChooseItem text="Reliable technical support" delay="600" />
          </div>
          <p className="text-center text-lg text-gray-700 mt-10 font-semibold" data-aos="fade-up" data-aos-delay="700">We focus on long-term partnerships and business success.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg mb-4 font-semibold" data-aos="fade-down">
              Industries
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Industries We Serve</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" data-aos="zoom-in"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <IndustryCard icon="fa-rocket" title="Startups & Entrepreneurs" delay="100" bgColor="bg-blue-600" />
            <IndustryCard icon="fa-building" title="Small & Medium Businesses" delay="200" bgColor="bg-blue-700" />
            <IndustryCard icon="fa-industry" title="Enterprises" delay="300" bgColor="bg-blue-600" />
            <IndustryCard icon="fa-hands-helping" title="Service-Based Companies" delay="400" bgColor="bg-blue-700" />
            <IndustryCard icon="fa-box" title="Product-Based Businesses" delay="500" bgColor="bg-blue-600" />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg mb-4 font-semibold" data-aos="fade-down">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Contact Softepic Technology – Software Development Company in India</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" data-aos="zoom-in"></div>
            <p className="text-lg text-gray-600" data-aos="fade-up">Looking for a reliable software development company in India? Let's discuss your project.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="relative mb-8">
                <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop" alt="Contact Us" className="rounded-lg shadow-xl" />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-6 border-l-4 border-blue-600">
                <ContactInfo icon="fa-phone" label="Phone" value="+91 9566 247 327" href="tel:+919566247327" />
                <ContactInfo icon="fa-envelope" label="Email" value="info@softepictech.com" href="mailto:info@softepictech.com" />
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-3xl text-white"></i>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900 mb-2">Office Address</p>
                    <p className="text-gray-700 leading-relaxed">416/3, Vadivel Nagar Bus Stop,<br />Erode Main Road, Near Aasai Textile,<br />Karur – 639002, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-center shadow-lg transform hover:scale-105">
                  <i className="fas fa-paper-plane mr-2"></i>Contact Us Today
                </a>
                <a href="#contact" className="bg-yellow-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-yellow-600 transition text-center shadow-lg transform hover:scale-105">
                  <i className="fas fa-rocket mr-2"></i>Start Your Project
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600" data-aos="fade-left">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Project Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg transform hover:scale-105">
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg mr-2">
                  <span className="text-2xl font-bold">SE</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">Softepic Technology</div>
                  <div className="text-xs text-gray-400 -mt-1">Software Development Company</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6">Leading Software Development Company in India providing custom web applications, mobile apps, and enterprise software solutions for startups and businesses worldwide.</p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <i className="fas fa-map-marker-alt text-blue-400 mr-3"></i>
                  <span>Karur, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <i className="fas fa-phone text-blue-400 mr-3"></i>
                  <a href="tel:+919566247327" className="hover:text-blue-400 transition">+91 9566 247 327</a>
                </div>
                <div className="flex items-center text-gray-300">
                  <i className="fas fa-envelope text-blue-400 mr-3"></i>
                  <a href="mailto:info@softepictech.com" className="hover:text-blue-400 transition">info@softepictech.com</a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>About Us</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Services</a></li>
                  <li><a href="#process" className="text-gray-300 hover:text-blue-400 transition flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Our Process</a></li>
                  <li><a href="#technologies" className="text-gray-300 hover:text-blue-400 transition flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Technologies</a></li>
                </ul>
                <ul className="space-y-3">
                  <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Contact Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Terms of Service</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 mb-2">© 2025 Softepic Technology (P) Ltd – Software Development Company in India</p>
            <p className="text-gray-400 mb-2">All Rights Reserved.</p>
            <p className="text-gray-500 text-sm">CIN: U72900TN2020PTC135638</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// Reusable Components
function ServiceCard({ icon, title, description, delay, color }: { icon: string; title: string; description: string; delay: string; color: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition hover-lift border-t-4 border-blue-600" data-aos="fade-up" data-aos-delay={delay}>
      <div className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center mb-6 shadow-md`}>
        <i className={`fas ${icon} text-3xl text-white`}></i>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function Stat({ number, label, delay }: { number: string; label: string; delay: string }) {
  return (
    <div data-aos="zoom-in" data-aos-delay={delay}>
      <div className="text-5xl font-bold mb-2">{number}</div>
      <div className="text-xl">{label}</div>
    </div>
  );
}

function ProcessStep({ number, title, description, delay }: { number: string; title: string; description: string; delay: string }) {
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition hover-lift" data-aos="fade-up" data-aos-delay={delay}>
      <div className="absolute -top-4 left-8">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md">{number}</div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function TechCategory({ icon, title, skills, color, delay, mdColSpan }: { icon: string; title: string; skills: string[]; color: string; delay: string; mdColSpan?: string }) {
  const colSpanClass = mdColSpan ? `md:col-span-${mdColSpan}` : '';
  return (
    <div className={`${color} p-8 rounded-lg shadow-lg text-white transform hover:scale-105 transition ${colSpanClass}`} data-aos="zoom-in" data-aos-delay={delay}>
      <div className="flex items-center mb-4">
        <i className={`fas ${icon} text-3xl mr-3`}></i>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function WhyChooseItem({ text, delay }: { text: string; delay: string }) {
  return (
    <div className="flex items-start bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition border-l-4 border-blue-600" data-aos="fade-up" data-aos-delay={delay}>
      <i className="fas fa-check-circle text-3xl mr-4 mt-1 text-blue-600"></i>
      <div>
        <p className="text-lg font-semibold text-gray-900">{text}</p>
      </div>
    </div>
  );
}

function IndustryCard({ icon, title, delay, bgColor }: { icon: string; title: string; delay: string; bgColor: string }) {
  return (
    <div className={`${bgColor} text-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition hover-lift`} data-aos="zoom-in" data-aos-delay={delay}>
      <i className={`fas ${icon} text-5xl mb-4`}></i>
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <div className="flex items-start mb-6">
      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
        <i className={`fas ${icon} text-3xl text-white`}></i>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900 mb-2">{label}</p>
        <a href={href} className="text-blue-600 text-xl hover:underline font-bold">{value}</a>
      </div>
    </div>
  );
}

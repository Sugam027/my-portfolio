import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import images from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Sugam Shrestha
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A passionate web developer and BCA student crafting digital experiences 
            with modern technologies and creative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-delay">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="btn-gradient px-8 py-3 text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <a 
              href="/sugam-shrestha-cv.pdf" 
              download 
              className="px-8 py-1 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center rounded-md transition duration-300 ease-in-out"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-delay">
          <div className="flex flex-col items-center text-muted-foreground">
            <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingBubbles from '@/components/FloatingBubbles';
import { 
  Globe, TrendingUp, Box, Languages, Monitor, Users, 
  FlaskConical, Fish, GraduationCap, Code, Play, 
  ArrowRight, ChevronDown, Send, Menu, Rocket
} from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Intersection Observer for section animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Real-Time ARGO Data",
      description: "Access live oceanographic data from thousands of ARGO floats worldwide in real-time."
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "Advanced AI algorithms predict ocean patterns and climate trends with high accuracy."
    },
    {
      icon: Box,
      title: "Interactive 3D Visuals",
      description: "Immersive 3D visualizations bring ocean data to life with stunning detail."
    },
    {
      icon: Languages,
      title: "Multilingual Access",
      description: "Query data in multiple languages including English, Hindi, and more."
    },
    {
      icon: Monitor,
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your research needs and interests."
    },
    {
      icon: Users,
      title: "Citizen Science Projects",
      description: "Contribute to global ocean research through collaborative citizen science initiatives."
    }
  ];

  const userTypes = [
    {
      icon: FlaskConical,
      title: "Researcher",
      description: "Access comprehensive datasets for climate research and oceanographic studies."
    },
    {
      icon: Fish,
      title: "Fisheries Manager",
      description: "Monitor ocean conditions to optimize fishing operations and protect marine ecosystems."
    },
    {
      icon: GraduationCap,
      title: "Educator & Student",
      description: "Explore ocean science through interactive visualizations and educational resources."
    },
    {
      icon: Code,
      title: "Developer",
      description: "Integrate ocean data into applications using our comprehensive API and tools."
    }
  ];

  const communityProjects = [
    {
      title: "Eddy Tracker",
      description: "Track and visualize ocean eddies using satellite data and AI-powered detection algorithms.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "ARGO Dashboard",
      description: "Collaborative dashboard for monitoring global ARGO float data and ocean health metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Reef Health Map",
      description: "Crowdsourced mapping of coral reef health using citizen science and remote sensing.",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <div className="min-h-screen text-foreground">
      <title>FloatChat - Explore the Ocean with AI-powered Insights</title>
      <meta name="description" content="Your conversational gateway to ARGO data – ask in text or voice, visualize instantly. Explore ocean insights with AI-powered tools." />
      
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingBubbles />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card" data-testid="navigation">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2" data-testid="logo">
              <div className="text-primary text-2xl">🌊</div>
              <span className="text-xl font-bold">FloatChat</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-primary transition-colors" data-testid="link-features">Features</a>
              <a href="#demo" className="hover:text-primary transition-colors" data-testid="link-demo">Demo</a>
              <a href="#community" className="hover:text-primary transition-colors" data-testid="link-community">Community</a>
              <a href="#about" className="hover:text-primary transition-colors" data-testid="link-about">About</a>
              <Button className="glow-button px-6 py-2 rounded-lg text-sm font-medium" data-testid="button-nav-explore">
                Start Exploring
              </Button>
            </div>
            <Button variant="ghost" className="md:hidden text-primary" data-testid="button-mobile-menu">
              <Menu className="text-xl" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center relative ${isVisible ? 'section-fade-in' : ''}`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Explore the Ocean with<br />
            <span className="text-gradient">
              AI-powered Insights
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Your conversational gateway to ARGO data – ask in text or voice, visualize instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="glow-button px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2" data-testid="button-start-exploring">
              <span>Start Exploring</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="glass-card glass-card-hover px-8 py-4 rounded-lg text-lg font-semibold border-2 border-muted" data-testid="button-watch-demo">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-16 scroll-indicator">
            <ChevronDown className="text-primary text-2xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-testid="text-features-title">
            Powerful Ocean Data Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card glass-card-hover p-8 rounded-xl" data-testid={`card-feature-${index}`}>
                <CardContent className="p-0">
                  <feature.icon className="text-primary text-4xl mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-testid="text-demo-title">
            See FloatChat in Action
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Ocean Heatmap */}
            <Card className="glass-card p-8 rounded-xl" data-testid="card-ocean-heatmap">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">Interactive Ocean Heatmap</h3>
                <div className="relative aspect-video bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="text-6xl text-white/50 mb-4 mx-auto" />
                      <p className="text-white/80">Temperature & Salinity Data</p>
                      <p className="text-sm text-white/60 mt-2">Global Ocean Currents</p>
                    </div>
                  </div>
                  {/* Animated data points */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-6 left-1/3 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center"><div className="w-3 h-3 bg-cyan-400 rounded-full mr-2"></div>Temperature</span>
                  <span className="flex items-center"><div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>Salinity</span>
                  <span className="flex items-center"><div className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></div>Currents</span>
                </div>
              </CardContent>
            </Card>

            {/* AI Chat Panel */}
            <Card className="glass-card p-8 rounded-xl" data-testid="card-ai-chat">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">AI Chat Interface</h3>
                <div className="space-y-4 h-80 overflow-y-auto">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg max-w-xs" data-testid="text-user-message">
                      Show me temperature trends in the North Atlantic
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="glass-card px-4 py-2 rounded-lg max-w-xs" data-testid="text-ai-response">
                      I found temperature data for the North Atlantic. The average sea surface temperature has increased by 0.8°C over the past decade.
                    </div>
                  </div>

                  {/* Chart Response */}
                  <div className="flex justify-start">
                    <div className="glass-card p-4 rounded-lg" data-testid="chart-temperature-trend">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-32 rounded flex items-end space-x-1 p-2">
                        <div className="bg-white/30 w-4 h-16 rounded-t"></div>
                        <div className="bg-white/40 w-4 h-20 rounded-t"></div>
                        <div className="bg-white/50 w-4 h-24 rounded-t"></div>
                        <div className="bg-white/60 w-4 h-28 rounded-t"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Temperature trend 2020-2024</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat Input */}
                <div className="mt-6 flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Ask about ocean data..." 
                    className="flex-1 bg-muted/20 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="input-chat"
                  />
                  <Button className="glow-button px-4 py-2 rounded-lg" data-testid="button-send-message">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-testid="text-users-title">
            Built for Ocean Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userTypes.map((userType, index) => (
              <Card key={index} className="glass-card glass-card-hover p-8 rounded-xl text-center" data-testid={`card-user-${index}`}>
                <CardContent className="p-0">
                  <userType.icon className="text-primary text-5xl mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4">{userType.title}</h3>
                  <p className="text-muted-foreground">{userType.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-testid="text-community-title">
            Community Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityProjects.map((project, index) => (
              <Card key={index} className="glass-card glass-card-hover p-8 rounded-xl" data-testid={`card-project-${index}`}>
                <CardContent className="p-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg mb-6 w-full h-48 object-cover" 
                  />
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <Button variant="link" className="text-primary hover:text-accent transition-colors p-0" data-testid={`button-join-project-${index}`}>
                    Join Project <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8" data-testid="text-cta-title">
            Dive into the Future of{' '}
            <span className="text-gradient">
              Ocean Data
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Join thousands of researchers, educators, and ocean enthusiasts exploring the depths of our planet's waters.
          </p>
          <Button className="glow-button px-12 py-6 rounded-lg text-xl font-semibold" data-testid="button-cta-explore">
            Start Exploring Now
            <Rocket className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 glass-card mt-20" data-testid="footer">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4" data-testid="footer-logo">
                <div className="text-primary text-2xl">🌊</div>
                <span className="text-xl font-bold">FloatChat</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering ocean exploration through AI-powered conversational interfaces and real-time ARGO data visualization.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter">
                  <span className="sr-only">Twitter</span>
                  🐦
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-github">
                  <span className="sr-only">GitHub</span>
                  🔗
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-about">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-api-docs">API Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-terms">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-contact">Contact</a></li>
              </ul>
            </div>

            {/* Language Toggle */}
            <div>
              <h4 className="font-semibold mb-4">Language</h4>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="glass-card border-primary text-primary" data-testid="button-lang-en">
                  EN
                </Button>
                <Button variant="outline" size="sm" className="glass-card hover:border-primary hover:text-primary transition-colors" data-testid="button-lang-hindi">
                  हिंदी
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FloatChat. All rights reserved. Explore responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "@/hooks/use-title";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, HeartPulse, Stethoscope, Search, Video, MessageCircle, User, ArrowRight, Star, MapPin, Phone, Mail, Clock, ArrowUp, Facebook, Instagram, Twitter, Shield, Heart } from "lucide-react";

// Helper function to determine if an element is in viewport
const useIsInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), {
      threshold: 0.1
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
  return isIntersecting;
};
const HomePage = () => {
  useTitle("Medical Universe - Next-Generation Medical Platform");
  const servicesRef = useRef<HTMLDivElement>(null);
  const doctorsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesVisible = useIsInViewport(servicesRef);
  const doctorsVisible = useIsInViewport(doctorsRef);
  const testimonialVisible = useIsInViewport(testimonialRef);
  const contactVisible = useIsInViewport(contactRef);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const services = [{
    icon: Search,
    title: "Find Specialists",
    description: "Search for qualified doctors by specialty, location, or rating to find the perfect healthcare match."
  }, {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book appointments online with just a few clicks and manage your healthcare schedule effortlessly."
  }, {
    icon: MessageCircle,
    title: "AI Health Assistant",
    description: "Get instant answers to your health questions from our intelligent AI assistant, available 24/7."
  }, {
    icon: Video,
    title: "Telemedicine",
    description: "Connect with doctors via secure video calls from the comfort of your home for virtual consultations."
  }];
  const doctors = [{
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.9
  }, {
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8
  }, {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.9
  }, {
    name: "Dr. James Wilson",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7
  }];
  const testimonials = [{
    text: "Medical Universe transformed how I manage my healthcare. The AI assistant provided accurate advice when I needed it most.",
    name: "Emma Thompson",
    role: "Patient"
  }, {
    text: "As a physician, I appreciate how this platform streamlines appointment scheduling and patient communication.",
    name: "Dr. Robert Williams",
    role: "Surgeon"
  }, {
    text: "The telemedicine feature is fantastic! I was able to get a consultation during my lunch break without leaving the office.",
    name: "David Miller",
    role: "Patient"
  }];
  return <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-28 md:pt-36 sm:pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay z-0"></div>
        
        {/* Floating medical icons background - hidden on mobile */}
        <div className="absolute inset-0 z-0 opacity-10 hidden sm:block">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <HeartPulse size={64} className="text-medical-aqua" />
          </div>
          <div className="absolute top-1/2 left-3/4 animate-float" style={{
          animationDelay: '1s'
        }}>
            <Stethoscope size={48} className="text-medical-cyan" />
          </div>
          <div className="absolute top-3/4 left-1/3 animate-float" style={{
          animationDelay: '2s'
        }}>
            <Search size={40} className="text-medical-aqua" />
          </div>
          <div className="absolute top-1/3 left-2/3 animate-float" style={{
          animationDelay: '1.5s'
        }}>
            <Calendar size={56} className="text-medical-cyan" />
          </div>
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight opacity-0 animate-fade-in">
                Your Health, <span className="bg-gradient-to-r from-medical-aqua to-medical-cyan bg-clip-text text-transparent">Our Priority</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 opacity-0 animate-fade-in-delay leading-relaxed">
                Medical Universe brings intelligent healthcare solutions to your fingertips. 
                Find doctors, book appointments, access your records, and get AI-powered 
                health assistance all in one place.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 opacity-0 animate-fade-in-delay" style={{
              animationDelay: '0.2s'
            }}>
                <Link to="/auth" className="w-full sm:w-auto">
                  <Button size="lg" className="rounded-full bg-gradient-med hover:shadow-lg hover:scale-105 transition-all px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link to="/doctors" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="rounded-full hover:bg-gradient-med hover:border-transparent transition-all px-6 sm:px-8 py-5 sm:py-6 text-slate-950 bg-cyan-300 hover:bg-cyan-200 w-full sm:w-auto">
                    Find a Doctor
                  </Button>
                </Link>
                <Link to="/blood-support" className="w-full sm:w-auto">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105 transition-all px-6 sm:px-8 py-5 sm:py-6 text-white w-full sm:w-auto">
                    <Heart className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                    Blood Support
                  </Button>
                </Link>
              </div>
              
              {/* Life Circle Connect Button */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-delay" style={{
              animationDelay: '0.3s'
            }}>
                <Link to="/life-circle-connect" className="w-full sm:w-auto">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105 transition-all px-6 sm:px-8 py-5 sm:py-6 text-white font-bold w-full sm:w-auto">
                    🐾 LIFE CIRCLE CONNECT
                  </Button>
                </Link>
              </div>
              
              {/* Admin Login Button */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-delay" style={{
              animationDelay: '0.4s'
            }}>
                <Link to="/admin-login" className="w-full sm:w-auto">
                  <Button variant="outline" size="sm" className="border-gray-300 transition-all px-4 sm:px-6 py-2 sm:py-3 font-bold text-slate-950 rounded-full bg-[#50e3c6] text-sm sm:text-base w-full sm:w-auto">
                    <Shield className="h-4 w-4 mr-2" />
                    Admin Login
                  </Button>
                </Link>
              </div>
              
              <div style={{
              animationDelay: '0.6s'
            }} className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 opacity-0 animate-fade-in-delay rounded-2xl bg-blue-300 p-4 sm:p-0 sm:bg-transparent">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-br from-medical-aqua to-medical-cyan border-2 border-white overflow-hidden flex items-center justify-center">
                      <User className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                    </div>)}
                </div>
                <p className="sm:ml-4 text-inherit text-sm sm:text-base">Joined by 10,000+ users in the last month</p>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-10 -left-10 w-full h-full rounded-full bg-medical-aqua opacity-10 animate-pulse"></div>
              <img alt="Medical professional working with advanced laboratory equipment" src="/lovable-uploads/b4578c18-2918-431c-8492-3828b341cf8e.png" className="rounded-2xl shadow-2xl w-full max-h-[500px] relative z-10 object-fill" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${servicesVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
              Our Services
            </h2>
            <p className={`text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2 ${servicesVisible ? 'opacity-100 animate-fade-in-delay' : 'opacity-0'}`}>
              We provide comprehensive healthcare services designed to make managing your health easier than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => {
            const Icon = service.icon;
            return <div key={index} className={`transform ${servicesVisible ? 'opacity-100 animate-slide-up' : 'opacity-0'}`} style={{
              animationDelay: `${index * 0.1 + 0.2}s`
            }}>
                  <Card className="h-full border-0 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 rounded-xl overflow-hidden group">
                    <CardContent className="p-4 sm:p-6 bg-cyan-100">
                      <div className="rounded-full p-3 w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br from-medical-aqua to-medical-cyan flex items-center justify-center text-white group-hover:animate-pulse-glow">
                        <Icon className="h-6 sm:h-8 w-6 sm:w-8" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-950 line-clamp-3">{service.description}</p>
                      <div className="mt-3 sm:mt-4 flex items-center text-medical-aqua opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        <span className="font-medium mr-2">Learn more</span>
                        <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section ref={doctorsRef} className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${doctorsVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
              Meet Our Specialists
            </h2>
            <p className={`text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2 ${doctorsVisible ? 'opacity-100 animate-fade-in-delay' : 'opacity-0'}`}>
              Our team of highly qualified medical professionals is dedicated to providing you with the best care possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {doctors.map((doctor, index) => <div key={index} className={`${doctorsVisible ? 'opacity-100 animate-slide-up' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.15 + 0.2}s`
          }}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group h-full flex flex-col">
                  <div className="aspect-square relative overflow-hidden">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3 sm:p-4">
                      <Button className="mb-3 sm:mb-4 rounded-full bg-gradient-med hover:shadow-lg text-sm sm:text-base">Book Appointment</Button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <h3 className="text-base sm:text-lg font-bold line-clamp-2">{doctor.name}</h3>
                      <div className="flex items-center flex-shrink-0">
                        <Star className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-500 mr-1" fill="currentColor" />
                        <span className="text-xs sm:text-sm whitespace-nowrap">{doctor.rating}</span>
                      </div>
                    </div>
                    <p className="text-medical-aqua font-medium text-sm">{doctor.specialty}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-gray-600 text-xs sm:text-sm">
                      <MapPin className="h-3 sm:h-4 w-3 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">Medical City Hospital</span>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className={`text-center mt-8 sm:mt-12 ${doctorsVisible ? 'opacity-100 animate-fade-in-delay' : 'opacity-0'}`}>
            <Link to="/doctors">
              <Button variant="outline" className="rounded-full px-6 sm:px-8 hover:bg-gradient-med hover:text-white hover:border-transparent text-sm sm:text-base">
                View All Doctors <ArrowRight className="ml-2 h-3 sm:h-4 w-3 sm:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialRef} className="py-12 sm:py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${testimonialVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
              What Our Patients Say
            </h2>
            <p className={`text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2 ${testimonialVisible ? 'opacity-100 animate-fade-in-delay' : 'opacity-0'}`}>
              Hear from our patients about their experience with Medical Universe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className={`${testimonialVisible ? 'opacity-100 animate-slide-up' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.2 + 0.2}s`
          }}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
                    <div className="mb-4 sm:mb-6">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="inline-block h-4 sm:h-5 w-4 sm:w-5 text-yellow-500 mr-1" fill="currentColor" />)}
                    </div>
                    <p className="text-gray-700 italic mb-4 sm:mb-6 text-sm sm:text-base flex-1">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="mr-1 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-medical-aqua to-medical-cyan flex items-center justify-center text-white font-medium text-sm sm:text-base flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-sm sm:text-base line-clamp-1">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            <div className={contactVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mr-1 mt-1 p-2 rounded-full bg-medical-aqua/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-medical-aqua" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 text-sm">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mr-1 mt-1 p-2 rounded-full bg-medical-aqua/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-medical-aqua" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-sm break-all">info@medicaluniverse.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mr-1 mt-1 p-2 rounded-full bg-medical-aqua/10 flex-shrink-0">
                    <Clock className="h-5 w-5 text-medical-aqua" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Office Hours</h4>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mr-1 mt-1 p-2 rounded-full bg-medical-aqua/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-medical-aqua" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Location</h4>
                    <p className="text-gray-600 text-sm">123 Medical Plaza, Health City, CA 91234</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`bg-white rounded-xl shadow-xl p-6 sm:p-8 ${contactVisible ? 'opacity-100 animate-slide-up' : 'opacity-0'}`}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h3>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-aqua focus:border-medical-aqua transition-all text-sm" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-aqua focus:border-medical-aqua transition-all text-sm" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={4} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-aqua focus:border-medical-aqua transition-all text-sm resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <Button className="w-full rounded-lg bg-gradient-med hover:shadow-lg hover:scale-105 transition-all py-5 sm:py-6 text-base">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-medical-aqua to-medical-cyan text-white">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to take control of your health?</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join Medical Universe today and experience healthcare like never before.
          </p>
          <Link to="/auth">
            <Button variant="outline" size="lg" className="bg-white text-medical-aqua border-white hover:bg-blue-50 rounded-full px-6 sm:px-8 text-sm sm:text-base">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto max-w-7xl px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-medical-aqua to-medical-cyan flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-medical-aqua to-medical-cyan bg-clip-text text-transparent">
                  MedicalUniverse
                </span>
              </div>
              <p className="text-gray-400 max-w-xs text-sm">
                Next-generation intelligent medical platform connecting patients with doctors.
              </p>
              <div className="mt-4 flex space-x-3">
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-medical-aqua transition-colors flex-shrink-0">
                  <Facebook className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-medical-aqua transition-colors flex-shrink-0">
                  <Twitter className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-medical-aqua transition-colors flex-shrink-0">
                  <Instagram className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-medical-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 flex-shrink-0" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-medical-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 flex-shrink-0" /> Services
                  </Link>
                </li>
                <li>
                  <Link to="/doctors" className="text-gray-400 hover:text-medical-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 flex-shrink-0" /> Find Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/health-assistant" className="text-gray-400 hover:text-medical-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 flex-shrink-0" /> Health Assistant
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-medical-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 flex-shrink-0" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
              <address className="text-gray-400 not-italic space-y-2 sm:space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" /> (555) 123-4567
                </p>
                <p className="flex items-center gap-2 break-all">
                  <Mail className="h-4 w-4 flex-shrink-0" /> info@medicaluniverse.com
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /> 123 Medical Plaza, Health City, CA 91234
                </p>
              </address>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Medical Universe. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button onClick={scrollToTop} className="fixed right-6 bottom-6 p-3 rounded-full bg-gradient-to-r from-medical-aqua to-medical-cyan text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50">
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>;
};
export default HomePage;
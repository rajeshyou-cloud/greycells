import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GreyCells Technologies | Product Development, Digital Marketing & AI Solutions</title>
        <meta name="description" content="Transform your business with AI automation, product development, and digital marketing solutions. GreyCells Technologies, Bangalore." />
      </Helmet>

      {/* Hero */}
      <div className="min-h-screen bg-gradient-to-b from-primary to-primary/90 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with AI & Technology
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Product development, AI automations, and digital marketing solutions tailored for growth-focused businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold py-3 px-8 rounded-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: 'Product Development', desc: 'Custom web & mobile apps built with modern tech stack' },
              { icon: Zap, title: 'AI Automation', desc: 'Streamline workflows and reduce costs with intelligent automation' },
              { icon: TrendingUp, title: 'Digital Marketing', desc: 'Data-driven strategies to grow your online presence' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-300 mb-6">Let's discuss your project and how we can help.</p>
        <Link to="/contact" className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg inline-block">
          Schedule a Consultation
        </Link>
      </div>
    </>
  );
}

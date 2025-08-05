import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Services from './Services';
import AchievementsSection from './AchievementsSection';
import SelectedWork from './SelectedWork';
import Industries from './Industries';
import WhyMariox from './WhyMariox';
import ClientTestimonials from './ClientTestimonials';
import FAQ from './FAQ';
import Footer from './Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <Navbar />
      <div className="pt-32">
        <Services />
        <AchievementsSection />
        <SelectedWork />
        <Industries />
        <WhyMariox />
        <ClientTestimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
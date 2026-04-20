import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import StoryCard from '../components/StoryCard';

const Homepage = () => {
return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Nội dung trang home của bạn ở đây */}
      </main>

      <StoryCard/>

      <Footer />
    </div>
  )
};

  export default Homepage;
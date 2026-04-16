import React from 'react';
import './HeroSection.css'; // Make sure to add styles for animations

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to Our Website</h1>
      <p>Discover amazing content</p>
      <div className="floating-elements">
        <div className="float-item item1">Element 1</div>
        <div className="float-item item2">Element 2</div>
        <div className="float-item item3">Element 3</div>
      </div>
      <div className="arrow-animation">
        <span className="arrow">⬇️</span>
      </div>
    </div>
  );
};

export default HeroSection;

/* CSS styles (HeroSection.css) */
.hero-container {
  position: relative;
  text-align: center;
  animation: fadeIn 2s;
}

.floating-elements {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 3s ease-in-out infinite;
}

.float-item {
  display: inline-block;
  margin: 0 10px;
  animation: bob 3s ease-in-out infinite;
}

.arrow-animation {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 1s infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
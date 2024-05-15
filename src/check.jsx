import React from 'react';

// CSS styles
const styles = {
  firstImage: {
    // Styles for the first image
    width: '50%', // Adjust width as needed
    // Add other styles for the first image
  },
  dividedImage: {
    // Styles for divided images
    width: '50%', // Adjust width as needed
    // Add other styles for divided images
  }
};

// Component
function ImageGallery({ images }) {
  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={index === 0 ? styles.firstImage : styles.dividedImage}
        />
      ))}
    </div>
  );
}

// Usage
const images = [
  { src: 'icon.png', alt: 'First Image' },
  { src: 'logo.png', alt: 'Second Image' },
  { src: 'infinix.jpg', alt: 'Third Image' }
];

export function App() {
  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
}

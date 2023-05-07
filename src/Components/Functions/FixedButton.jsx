import { useState, useEffect } from 'react';

function FixedButton() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('fixed-button');
      const scrollBottom = window.pageYOffset + window.innerHeight;
      const buttonTop = button.offsetTop;
      const buttonBottom = buttonTop + button.offsetHeight;

      if (scrollBottom >= buttonBottom + 20) {
        button.style.position = 'absolute';
        button.style.bottom = '20px';
        setIsFixed(false);
      } else {
        button.style.position = 'fixed';
        button.style.bottom = '4px';
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="fixed-button"
      className={`fixed bottom-4 right-4 z-50 ${
        isFixed ? '' : 'absolute top-auto'
      }`}
    >
      Click me!
    </button>
  );
}

export default FixedButton;





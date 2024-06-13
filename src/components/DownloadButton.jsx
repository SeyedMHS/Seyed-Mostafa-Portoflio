import react from 'react'
import react from '@astrojs/react'
const DownloadButton = () => {
  return (
    <a href="../public/seyedmostafa-cv.pdf" class=' py-2 px-4 rounded truncate text-xs md:text-sm lg:text-base bg-black dark:bg-white text-white dark:text-black hover:opacity-75 blend' download>
      <button>Download CV</button>
    </a>
  );
};

export default DownloadButton;


/**
 * Utility for handling lazy loading of images
 * This improves performance by only loading images when they're about to enter the viewport
 */

export const setupLazyLoading = () => {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyImages = document.querySelectorAll('[data-src]');
    
    // Simple fallback: load all images immediately
    lazyImages.forEach(img => {
      const imgElement = img as HTMLImageElement;
      imgElement.src = imgElement.dataset.src || '';
      imgElement.removeAttribute('data-src');
    });
  }
};

// Helper component for React
export const LazyImage = ({
  src,
  alt,
  className,
  width,
  height
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <img
      data-src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
      loading="lazy"
    />
  );
};

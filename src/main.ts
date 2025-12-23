// Softepic Technology Landing Page
// Minimal initialization for AOS animations

declare const AOS: {
  init: (options: { duration: number; once: boolean; offset: number }) => void
}

// Initialize AOS if not already initialized by the HTML script
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  })
}

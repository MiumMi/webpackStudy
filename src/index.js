if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('sw registered: ', registration);
    }).catch(registrationError => {
      console.log('sw registration failed: ', registrationError)
    })
  })
}
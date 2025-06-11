(function () {
     const styleId = '__darklight_mode_toggle_style__';
     const existing = document.getElementById(styleId);

     if (existing) {
          existing.remove(); // Toggle off
          return;
     }

     const style = document.createElement('style');
     style.id = styleId;
     style.textContent = `
       html {
         filter: invert(1) hue-rotate(180deg);
         background-color: white !important;
       }
       img, video {
         filter: invert(1) hue-rotate(180deg) !important;
       }
     `;
     document.head.appendChild(style);
})();
   
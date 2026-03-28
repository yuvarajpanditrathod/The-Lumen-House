// Page Transition Shutter Logic
(function() {
    const shutter = document.createElement('div');
    shutter.id = 'page-shutter';
    shutter.className = 'page-transition-shutter loading';
    
    // Inject shutter as soon as body is available
    const injectInterval = setInterval(() => {
        if (document.body) {
            document.body.insertAdjacentElement('afterbegin', shutter);
            clearInterval(injectInterval);
        }
    }, 5);

    // Entrance: Slide OUT to Left
    window.addEventListener('load', () => {
        setTimeout(() => {
            shutter.classList.remove('loading');
            shutter.classList.add('loaded');
        }, 100);
    });

    // Exit: Slide IN from Right on Link click
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Only for internal sector/projects pages
                if (href && href.includes('.html') && !href.startsWith('#') && !href.startsWith('http') && !this.target) {
                    e.preventDefault();
                    
                    shutter.classList.remove('loaded');
                    shutter.classList.remove('loading');
                    shutter.classList.add('active'); // Slide from 100% to 0
                    
                    setTimeout(() => {
                        window.location.href = href;
                    }, 600);
                }
            });
        });
    });
})();

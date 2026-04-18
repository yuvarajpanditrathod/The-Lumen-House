
(function() {
    const shutter = document.createElement('div');
    shutter.id = 'page-shutter';
    shutter.className = 'page-transition-shutter loading';
    
    
    const injectInterval = setInterval(() => {
        if (document.body) {
            document.body.insertAdjacentElement('afterbegin', shutter);
            clearInterval(injectInterval);
        }
    }, 5);

    
    window.addEventListener('load', () => {
        setTimeout(() => {
            shutter.classList.remove('loading');
            shutter.classList.add('loaded');
        }, 100);
    });

    
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                
                if (href && href.includes('.html') && !href.startsWith('#') && !href.startsWith('http') && !this.target) {
                    e.preventDefault();
                    
                    shutter.classList.remove('loaded');
                    shutter.classList.remove('loading');
                    shutter.classList.add('active'); 
                    
                    setTimeout(() => {
                        window.location.href = href;
                    }, 600);
                }
            });
        });
    });
})();
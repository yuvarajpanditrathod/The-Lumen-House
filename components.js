

(function () {
    
    function loadComponent(id, url) {
        const el = document.getElementById(id);
        if (!el) return Promise.resolve();
        return fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (html) { el.innerHTML = html; });
    }

    
    function initMobileMenu() {
        var menuBtn = document.getElementById('menu-btn');
        var menuPanel = document.getElementById('menu-panel');
        var menuOverlay = document.getElementById('menu-overlay');
        var closeBtn = document.getElementById('menu-close-btn');
        var menuLinks = document.querySelectorAll('.menu-item');

        function openMenu() {
            if (menuPanel) menuPanel.classList.add('open');
            if (menuOverlay) menuOverlay.classList.add('open');
            if (menuBtn) {
                menuBtn.classList.add('active');
                menuBtn.setAttribute('aria-expanded', 'true');
                menuBtn.classList.add('hidden-anim');
                menuBtn.setAttribute('aria-hidden', 'true');
            }
            if (closeBtn) closeBtn.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            if (menuPanel) menuPanel.classList.remove('open');
            if (menuOverlay) menuOverlay.classList.remove('open');
            if (menuBtn) {
                menuBtn.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.classList.remove('hidden-anim');
                menuBtn.setAttribute('aria-hidden', 'false');
            }
            if (closeBtn) closeBtn.classList.remove('show');
            document.body.style.overflow = '';
        }

        if (menuBtn) {
            menuBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                if (menuPanel && menuPanel.classList.contains('open')) closeMenu(); else openMenu();
            });
        }

        if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);

        menuLinks.forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menuPanel && menuPanel.classList.contains('open')) {
                closeMenu();
                if (menuBtn) menuBtn.focus();
            }
        });
    }

    
    function initNavbarScroll() {
        var navbar = document.getElementById('navbar');
        if (!navbar) return;
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('border-white/10', 'shadow-lg');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('border-white/10', 'shadow-lg');
                navbar.classList.add('border-transparent');
            }
        });
    }

    
    function initFooterLightToggle() {
        var footer = document.getElementById('contact');
        var lightButtons = document.querySelectorAll('[data-light-toggle="true"]');
        lightButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var isOn = footer && footer.classList.contains('light-on');
                if (footer) {
                    footer.classList.toggle('light-on', !isOn);
                    footer.classList.toggle('light-off', isOn);
                }
                lightButtons.forEach(function (b) { b.classList.toggle('active', !isOn); b.blur(); });
            });
        });
    }

    
    Promise.all([
        loadComponent('header-placeholder', 'header.html'),
        loadComponent('footer-placeholder', 'footer.html')
    ]).then(function () {
        initMobileMenu();
        initNavbarScroll();
        initFooterLightToggle();
    });
})();
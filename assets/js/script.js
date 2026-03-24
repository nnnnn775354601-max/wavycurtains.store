    (function () {
      const menuToggle = document.getElementById('menuToggle');
      const mobileNav = document.getElementById('mobileNav');
      const mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

      function openMenu() {
        if (!menuToggle || !mobileNav) return;
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        mobileNav.classList.add('active');
        mobileNav.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
        if (!menuToggle || !mobileNav) return;
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('active');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      function toggleMenu() {
        if (!mobileNav) return;
        if (mobileNav.classList.contains('active')) {
          closeMenu();
        } else {
          openMenu();
        }
      }

      if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function (e) {
          e.stopPropagation();
          toggleMenu();
        });

        mobileNav.addEventListener('click', function (e) {
          e.stopPropagation();
        });

        mobileLinks.forEach(function (link) {
          link.addEventListener('click', function () {
            closeMenu();
          });
        });

        document.addEventListener('click', function () {
          if (mobileNav.classList.contains('active')) {
            closeMenu();
          }
        });

        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') {
            closeMenu();
          }
        });

        window.addEventListener('resize', function () {
          if (window.innerWidth > 920) {
            closeMenu();
          }
        });
      }

      const reveals = document.querySelectorAll('.reveal');

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries, observerInstance) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observerInstance.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });

        reveals.forEach(function (el) {
          observer.observe(el);
        });
      } else {
        reveals.forEach(function (el) {
          el.classList.add('visible');
        });
      }
    })();
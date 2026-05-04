/**
 * ============================================
 * CENTRO DE VERIFICACIÓN VEHICULAR IRA003
 * TALLER PEREZ HERMANOS
 * JavaScript Principal
 * ============================================
 */

(function() {
    'use strict';

    /**
     * ============================================
     * NAVEGACIÓN MÓVIL
     * ============================================
     */

    // Obtener elementos del DOM
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Toggle del menú móvil
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animación del botón hamburguesa
            this.classList.toggle('active');

            // Prevenir scroll del body cuando el menú está abierto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /**
     * ============================================
     * SCROLL SUAVE PARA ENLACES INTERNOS
     * ============================================
     */

    // Seleccionar todos los enlaces que apuntan a anclas en la misma página
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Ignorar enlaces vacíos o solo con #
            if (href === '#' || href === '') {
                return;
            }

            const targetElement = document.querySelector(href);

            if (targetElement) {
                e.preventDefault();

                // Calcular la posición considerando el header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                // Scroll suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /**
     * ============================================
     * DESTACAR ENLACE ACTIVO EN NAVEGACIÓN
     * ============================================
     */

    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

        if (sections.length === 0 || navLinks.length === 0) {
            return;
        }

        window.addEventListener('scroll', function() {
            let current = '';
            const headerHeight = document.querySelector('.header').offsetHeight;

            sections.forEach(function(section) {
                const sectionTop = section.offsetTop - headerHeight - 100;
                const sectionHeight = section.offsetHeight;

                if (window.pageYOffset >= sectionTop &&
                    window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(function(link) {
                link.classList.remove('active');
                const href = link.getAttribute('href');

                if (href === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Inicializar solo si estamos en la página principal
    if (document.querySelector('section[id]')) {
        highlightActiveNavLink();
    }

    /**
     * ============================================
     * ANIMACIONES AL HACER SCROLL
     * ============================================
     */

    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.service-card, .contact-card, .about-content, .calendar-card');

        if (animatedElements.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(function(element) {
            observer.observe(element);
        });
    }

    // Inicializar animaciones
    if ('IntersectionObserver' in window) {
        animateOnScroll();
    }

    /**
     * ============================================
     * FAQ ACCORDION
     * ============================================
     */

    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');

        if (faqItems.length === 0) {
            return;
        }

        faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');

            if (question) {
                question.addEventListener('click', function() {
                    // Cerrar otros items abiertos (opcional - comentar si quieres múltiples abiertos)
                    faqItems.forEach(function(otherItem) {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });

                    // Toggle del item actual
                    item.classList.toggle('active');
                });
            }
        });
    }

    // Inicializar FAQ accordion
    initFAQAccordion();

    /**
     * ============================================
     * HEADER CON SOMBRA AL HACER SCROLL
     * ============================================
     */

    function headerScrollEffect() {
        const header = document.querySelector('.header');

        if (!header) {
            return;
        }

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    headerScrollEffect();

    /**
     * ============================================
     * VALIDACIÓN DE FORMULARIOS (si se agregan en el futuro)
     * ============================================
     */

    function validateForms() {
        const forms = document.querySelectorAll('form');

        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;

                inputs.forEach(function(input) {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('error');

                        // Remover clase de error al escribir
                        input.addEventListener('input', function() {
                            this.classList.remove('error');
                        });
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                    alert('Por favor, complete todos los campos requeridos.');
                }
            });
        });
    }

    validateForms();

    /**
     * ============================================
     * BOTÓN VOLVER ARRIBA (opcional)
     * ============================================
     */

    function createBackToTopButton() {
        // Crear botón solo si no existe
        if (document.querySelector('.back-to-top')) {
            return;
        }

        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Volver arriba');
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--color-secondary, #22c55e);
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;

        document.body.appendChild(button);

        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });

        // Scroll al hacer clic
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effect
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
    }

    // Crear botón "Volver arriba" solo en la página principal
    if (document.querySelector('.hero')) {
        createBackToTopButton();
    }

    /**
     * ============================================
     * LAZY LOADING DE IMÁGENES (opcional)
     * ============================================
     */

    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');

        if (images.length === 0 || !('IntersectionObserver' in window)) {
            return;
        }

        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    lazyLoadImages();

    /**
     * ============================================
     * MANEJO DE ERRORES DE IMÁGENES
     * ============================================
     */

    function handleImageErrors() {
        const images = document.querySelectorAll('img');

        images.forEach(function(img) {
            img.addEventListener('error', function() {
                // Si la imagen no carga, ocultar o mostrar placeholder
                this.style.display = 'none';
                console.warn('Error al cargar imagen:', this.src);
            });
        });
    }

    handleImageErrors();

    /**
     * ============================================
     * INICIALIZACIÓN
     * ============================================
     */

    // Log de inicialización (solo en desarrollo)
    console.log('✓ Centro de Verificación Vehicular Ira003 - JavaScript cargado correctamente');

    // Evento cuando el DOM está completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        console.log('✓ DOM completamente cargado');
    });

})();

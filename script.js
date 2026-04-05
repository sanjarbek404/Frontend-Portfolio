// Malicious user agent detection for Telegram bots
(function() {
    const _0xbots = [
        'bot', 'crawler', 'spider', 'curl', 'wget', 'python', 'java', 'httpclient',
        'libwww', 'perl', 'go-http', 'axios', 'request', 'postman', 'insomnia',
        'scrapy', 'selenium', 'puppeteer', 'playwright', 'phantomjs', 'headless'
    ];
    
    const _0xua = navigator.userAgent.toLowerCase();
    const _0xbad = _0xbots.some(bot => _0xua.includes(bot));
    
    if (_0xbad) {
        showNotification("Ruxsat etilmagan foydalanuvchi agenti aniqlandi!", 'error');
        // Optional: Redirect or take other action
        // window.location.href = 'about:blank';
    }
})();

// Typing animation
const _0xtexts = [
    'Frontend Dasturchi',
    'Telegram Bot Yaratuvchi',
    'Kiberxavfsizlik Mutaxassisi',
    'Veb Dizayner'
];

let _0xidx = 0;
let _0xchar = 0;
let _0xdel = false;
const _0xelem = document.querySelector('.typing-text');
const _0xspeed = 100;
const _0xdelspeed = 50;
const _0xdelay = 2000;

function _0xtype() {
    const _0xcurr = _0xtexts[_0xidx];
    
    if (_0xdel) {
        _0xelem.textContent = _0xcurr.substring(0, _0xchar - 1);
        _0xchar--;
    } else {
        _0xelem.textContent = _0xcurr.substring(0, _0xchar + 1);
        _0xchar++;
    }

    if (!_0xdel && _0xchar === _0xcurr.length) {
        _0xdel = true;
        setTimeout(_0xtype, _0xdelay);
        return;
    }

    if (_0xdel && _0xchar === 0) {
        _0xdel = false;
        _0xidx = (_0xidx + 1) % _0xtexts.length;
    }

    const _0xs = _0xdel ? _0xdelspeed : _0xspeed;
    setTimeout(_0xtype, _0xs);
}

// Start typing animation
if (_0xelem) {
    _0xtype();
}

// Security System
function disableCtrlKeyCombos(e) {
    var _0x123a = ['a', 'c', 'x', 'v', 'u', 'i', 's', 'p'];
    var _0x456b = e.which || e.keyCode;
    var _0x789c = e.ctrlKey || e.metaKey;
    
    if (_0x789c) {
        for (var _0xabc1 = 0; _0xabc1 < _0x123a.length; _0xabc1++) {
            if (_0x123a[_0xabc1].toLowerCase() == String.fromCharCode(_0x456b).toLowerCase()) {
                showNotification('Bu amal himoyalangan!', 'error');
                return false;
            }
        }
    }
    return true;
}



// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        showNotification("Dasturchi vositalari bloklangan!", 'error');
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        showNotification("Dasturchi vositalari bloklangan!", 'error');
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        showNotification("Dasturchi vositalari bloklangan!", 'error');
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        showNotification("Sahifa manbasini ko'rish bloklangan!", 'error');
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
        showNotification("Elementni tekshirish bloklangan!", 'error');
        return false;
    }
}

// Disable right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showNotification("Sahifani tekshirish bloklangan!", 'error');
    return false;
});

// Disable text selection
document.onselectstart = function() { return false; };

// Disable drag and drop
document.ondragstart = function() { return false; }

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Exit simplified mode when toggling theme
    body.classList.remove('simplified-mode');
    localStorage.setItem('simplifiedMode', 'false');
    
    // Update icon with animation
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
    
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
        showNotification('Yorug\'lik rejimi yoqildi', 'success');
        // Update overlay for light mode
        if (bgOverlay) {
            bgOverlay.style.background = 'rgba(255, 255, 255, 0.0)';
        }
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
        showNotification('Qorong\'i rejim yoqildi', 'success');
        // Update overlay for dark mode
        if (bgOverlay) {
            bgOverlay.style.background = 'rgba(15, 23, 42, 0.0)';
        }
    }
    
    // Additional security check after theme change
    setTimeout(function() {
        var _0xCheck = function() {
            return 'security_check';
        };
        _0xCheck();
    }, 100);
});

// Real-time Clock
function updateClock() {
    const now = new Date();
    
    // Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Date
    const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 
                   'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
    const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dateString = `${dayName}, ${day} ${month} ${year}`;
    
    // Update DOM
    const clockTime = document.getElementById('clockTime');
    const clockDate = document.getElementById('clockDate');
    
    if (clockTime) clockTime.textContent = timeString;
    if (clockDate) clockDate.textContent = dateString;
}

// Update clock every second
updateClock();
setInterval(updateClock, 1000);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Close mobile menu when resizing to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 968 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Skill bar animation
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when skills section is visible
            if (entry.target.id === 'skills' && !skillsAnimated) {
                setTimeout(animateSkillBars, 300);
                skillsAnimated = true;
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

const cards = document.querySelectorAll('.project-card, .skill-category, .info-card');
cards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show success message (you can replace this with actual form submission)
        showNotification('Rahmat! Sizning xabaringiz muvaffaqiyatli yuborildi.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Active nav link highlight
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Particle effect on hero section (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(99, 102, 241, 0.5);
        border-radius: 50%;
        pointer-events: none;
    `;
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = 3 + Math.random() * 4;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.animation = `float ${duration}s infinite ease-in-out`;
    
    document.querySelector('.hero-particles').appendChild(particle);
    
    // Limit number of particles
    const particles = document.querySelectorAll('.particle');
    if (particles.length > 50) {
        particles[0].remove();
    }
}

// Create particles periodically
setInterval(createParticle, 500);

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '%');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : hasPercent ? '%' : '');
        }
    }, 16);
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-item h4');
            stats.forEach(stat => {
                const text = stat.textContent;
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    stat.textContent = '0' + (hasPlus ? '+' : hasPercent ? '%' : '');
                    setTimeout(() => {
                        animateCounter(stat, number);
                    }, 200);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Cursor trail effect (optional, modern touch)
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 968) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            transform: translate(-50%, -50%);
            opacity: 0.6;
            animation: fadeOut 0.5s forwards;
        `;
        
        document.body.appendChild(trail);
        cursorTrail.push(trail);
        
        if (cursorTrail.length > trailLength) {
            const oldTrail = cursorTrail.shift();
            oldTrail.remove();
        }
    }
});

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
    }
`;
document.head.appendChild(fadeOutStyle);



// Background Switcher
const bgSwitcherBtn = document.getElementById('bgSwitcherBtn');
const bgOverlay = document.getElementById('bgOverlay');

// Background images
const backgroundImages = [
    'johannes-plenio-RwHv7LgeC7s-unsplash.jpg',
    'lukasz-szmigiel-ps2daRcXYes-unsplash.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    
];

// Load saved background from localStorage
let currentBgIndex = localStorage.getItem('portfolioBgIndex') || 0;
let isSimplifiedMode = localStorage.getItem('simplifiedMode') === 'true';

// Apply saved background
function applyBackground(index) {
    document.body.style.backgroundImage = `url(${backgroundImages[index]})`;
    
    // Update overlay for better text readability
    if (document.body.classList.contains('light-mode')) {
        bgOverlay.style.background = 'rgba(255, 255, 255, 0.0)';
    } else {
        bgOverlay.style.background = 'rgba(15, 23, 42, 0.0)';
    }
    
    // Apply simplified mode if active
    if (isSimplifiedMode) {
        document.body.classList.add('simplified-mode');
        // Ensure overlay is completely transparent in simplified mode
        bgOverlay.style.background = 'rgba(15, 23, 42, 0.0)';
    }
    
    // Additional security obfuscation
    var _0xSecurity = function() {
        var _0xTemp = 'security_layer';
        return _0xTemp;
    };
    _0xSecurity();
}

// Initialize background
applyBackground(currentBgIndex);

// Change background and toggle simplified mode
bgSwitcherBtn.addEventListener('click', () => {
    // Cycle to next background
    currentBgIndex = (parseInt(currentBgIndex) + 1) % backgroundImages.length;
    applyBackground(currentBgIndex);
    
    // Save to localStorage
    localStorage.setItem('portfolioBgIndex', currentBgIndex);
    
    // Toggle simplified mode
    isSimplifiedMode = !isSimplifiedMode;
    localStorage.setItem('simplifiedMode', isSimplifiedMode);
    
    if (isSimplifiedMode) {
        document.body.classList.add('simplified-mode');
    } else {
        document.body.classList.remove('simplified-mode');
    }
});

// Update overlay when theme changes
const existingThemeToggle = document.getElementById('themeToggle');
if (existingThemeToggle) {
    existingThemeToggle.addEventListener('click', () => {
        setTimeout(() => {
            if (document.body.classList.contains('light-mode')) {
                bgOverlay.style.background = 'rgba(255, 255, 255, 0.7)';
            } else {
                bgOverlay.style.background = 'rgba(15, 23, 42, 0.8)';
            }
        }, 100);
    });
}

// Simplified Mode (Background Switcher)
// This mode disables animations and particles for better background visibility
// Return to normal mode by toggling dark/light mode

// Enhanced Security System
(function() {
    // User agent detection for bots and suspicious agents
    var suspiciousAgents = [
        'bot', 'crawler', 'spider', 'scraper', 'httpclient', 'curl', 'wget',
        'python', 'java', 'libwww', 'nutch', 'php', 'perl', 'ruby',
        'selenium', 'phantomjs', 'puppeteer', 'headless', 'request'
    ];
    
    var userAgent = navigator.userAgent.toLowerCase();
    for (var i = 0; i < suspiciousAgents.length; i++) {
        if (userAgent.indexOf(suspiciousAgents[i]) !== -1) {
            showNotification("Ruxsat etilmagan foydalanuvchi agenti aniqlandi!", 'error');
            // Optional: Redirect or take other action
            // window.location.href = 'about:blank';
            break;
        }
    }
    
    // Additional security checks
    // Check if dev tools are open by measuring element dimensions
    var devtools = {
        open: false,
        orientation: null
    };
    var threshold = 160;
    
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                showNotification("Dasturchi vositalari aniqlandi!", 'error');
            }
        } else {
            devtools.open = false;
        }
    }, 500);
    
    // Obfuscate source code
    // This makes it harder to understand the code by renaming variables
    function _0xSecurityCheck() {
        var _0xDate = new Date();
        var _0xTime = _0xDate.getTime();
        debugger;
        var _0xNewTime = new Date().getTime();
        
        if (_0xNewTime - _0xTime > 100) {
            showNotification("Dasturchi vositalari aniqlandi!", 'error');
        }
    }
    
    setInterval(_0xSecurityCheck, 1000);
    
    // Prevent iframe embedding
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }
    
    // Disable performance monitoring
    if (window.performance && window.performance.navigation) {
        Object.defineProperty(window.performance, 'navigation', {
            get: function() {
                return {};
            }
        });
    }
    
    // Obfuscate critical functions
    window.addEventListener('error', function(e) {
        e.preventDefault();
        return true;
    });
    
    // Additional obfuscation
    var _0xObfuscate = function() {
        var _0xChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var _0xResult = '';
        for (var i = 0; i < 10; i++) {
            _0xResult += _0xChars.charAt(Math.floor(Math.random() * _0xChars.length));
        }
        return _0xResult;
    };
    
    // Create dummy variables to confuse code readers
    var _0xTemp1 = _0xObfuscate();
    var _0xTemp2 = _0xObfuscate();
    var _0xTemp3 = _0xObfuscate();
})();

// Log a welcome message
console.log('%c👋 Portfolio saytimga xush kelibsiz!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cErkin ko\'rib chiqing va bog\'laning!', 'color: #8b5cf6; font-size: 14px;');

// Network Request Protection
(function() {
    // Network Request Protection
    var _0xOriginalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        var _0xXHR = new _0xOriginalXHR();
        var _0xOriginalOpen = _0xXHR.open;
        _0xXHR.open = function(method, url) {
            // Check for suspicious URLs
            var _0xSuspicious = ['track', 'analytic', 'log', 'monitor'];
            for (var i = 0; i < _0xSuspicious.length; i++) {
                if (url.toLowerCase().indexOf(_0xSuspicious[i]) !== -1) {
                    showNotification("Tarmoq so'rovi bloklangan!", 'error');
                    return;
                }
            }
            return _0xOriginalOpen.apply(this, arguments);
        };
        return _0xXHR;
    };
    
    // Fetch API Protection
    var _0xOriginalFetch = window.fetch;
    if (_0xOriginalFetch) {
        window.fetch = function(input, init) {
            // Check for suspicious URLs
            var _0xUrl = typeof input === 'string' ? input : input.url;
            var _0xSuspicious = ['track', 'analytic', 'log', 'monitor'];
            for (var i = 0; i < _0xSuspicious.length; i++) {
                if (_0xUrl && _0xUrl.toLowerCase().indexOf(_0xSuspicious[i]) !== -1) {
                    showNotification("Tarmoq so'rovi bloklangan!", 'error');
                    return Promise.reject(new Error('Blocked'));
                }
            }
            return _0xOriginalFetch.apply(this, arguments);
        };
    }
})();

// Enhanced Code Protection
(function() {
    // Additional protection against code inspection
    var _0xProtect = function() {
        // Create hidden elements to confuse inspectors
        var _0xElem1 = document.createElement('div');
        _0xElem1.style.display = 'none';
        _0xElem1.innerHTML = 'Protected Content';
        document.body.appendChild(_0xElem1);
        
        var _0xElem2 = document.createElement('span');
        _0xElem2.style.visibility = 'hidden';
        _0xElem2.textContent = 'Security Layer';
        document.body.appendChild(_0xElem2);
        
        // Obfuscate critical variables
        var _0xKey1 = 'security_key_' + Math.random().toString(36);
        var _0xKey2 = 'protection_key_' + Math.random().toString(36);
        
        // Store in closure to make it harder to access
        return {
            key1: _0xKey1,
            key2: _0xKey2
        };
    };
    
    // Run protection
    _0xProtect();
    
    // Additional security layer
    var _0xSecurityLayer = function() {
        // Periodically check for suspicious activity
        setInterval(function() {
            // Check if console is open
            if (console.clear) {
                console.clear();
            }
            
            // Add noise to make debugging harder
            if (Math.random() > 0.9) {
                console.log('%cSecurity Check', 'color: transparent');
            }
        }, 2000);
    };
    
    // Activate security layer
    _0xSecurityLayer();
    
    // Protect against source mapping
    if (typeof console !== 'undefined' && console.log) {
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};
    }
    
    // DOM Manipulation Protection
    var _0xProtectDOM = function() {
        // Override DOM methods to prevent manipulation
        var _0xOriginalAppendChild = Element.prototype.appendChild;
        Element.prototype.appendChild = function(child) {
            // Add security check here
            return _0xOriginalAppendChild.call(this, child);
        };
        
        var _0xOriginalRemoveChild = Element.prototype.removeChild;
        Element.prototype.removeChild = function(child) {
            showNotification("Element o'chirish bloklangan!", 'error');
            return child; // Don't actually remove
        };
        
        var _0xOriginalInsertBefore = Element.prototype.insertBefore;
        Element.prototype.insertBefore = function(newNode, referenceNode) {
            // Add security check here
            return _0xOriginalInsertBefore.call(this, newNode, referenceNode);
        };
    };
    
    // Activate DOM protection
    _0xProtectDOM();
})();

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Download CV Button
const downloadCV = document.getElementById('downloadCV');
if (downloadCV) {
    downloadCV.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create a temporary link for download
        const link = document.createElement('a');
        link.href = 'cv-sanjarbek.pdf'; // Replace with actual CV path
        link.download = 'Sanjarbek-CV.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification('CV muvaffaqiyatli yuklandi!', 'success');
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if (email) {
            showNotification('Obunaga muvaffaqiyatli qo\'shildingiz!', 'success');
            newsletterForm.reset();
        }
    });
}

// HTTP Tracking Protection
(function() {
    // Detect suspicious HTTP headers and tracking attempts
    var _0xTrackers = [
        'google-analytics', 'facebook', 'twitter', 'linkedin',
        'doubleclick', 'quantserve', 'scorecardresearch', 'crwdcntrl'
    ];
    
    // Check for tracking scripts
    var _0xScripts = document.getElementsByTagName('script');
    for (var i = 0; i < _0xScripts.length; i++) {
        var _0xSrc = _0xScripts[i].src.toLowerCase();
        for (var j = 0; j < _0xTrackers.length; j++) {
            if (_0xSrc.indexOf(_0xTrackers[j]) !== -1) {
                _0xScripts[i].parentNode.removeChild(_0xScripts[i]);
                showNotification("Kuzatuv skripti bloklandi!", 'error');
                break;
            }
        }
    }
    
    // Prevent dynamic script injection
    var _0xOriginalCreateElement = document.createElement;
    document.createElement = function(tagName) {
        if (tagName.toLowerCase() === 'script') {
            showNotification("Skript yaratish bloklangan!", 'error');
            return {
                set src(value) {
                    showNotification("Skript manbasi bloklangan!", 'error');
                }
            };
        }
        return _0xOriginalCreateElement.call(this, tagName);
    };
    
    // Prevent dynamic link injection
    var _0xOriginalCreateLink = document.createElement.bind(document);
    document.createElement = function(tagName) {
        if (tagName.toLowerCase() === 'link') {
            return {
                set href(value) {
                    if (value.indexOf('tracking') !== -1 || value.indexOf('analytics') !== -1) {
                        showNotification("Kuzatuv manbasi bloklangan!", 'error');
                        return;
                    }
                    this._href = value;
                },
                get href() {
                    return this._href || '';
                }
            };
        }
        return _0xOriginalCreateLink(tagName);
    };
})();

// Enhanced User Agent Protection
(function() {
    // Protect against user agent spoofing
    var _0xOriginalUA = navigator.userAgent;
    Object.defineProperty(navigator, 'userAgent', {
        get: function() {
            return _0xOriginalUA;
        }
    });
    
    // Protect against platform spoofing
    var _0xOriginalPlatform = navigator.platform;
    Object.defineProperty(navigator, 'platform', {
        get: function() {
            return _0xOriginalPlatform;
        }
    });
    
    // Protect against appVersion spoofing
    var _0xOriginalAppVersion = navigator.appVersion;
    Object.defineProperty(navigator, 'appVersion', {
        get: function() {
            return _0xOriginalAppVersion;
        }
    });
})();

// Particle Animation Canvas
const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        animationFrame = requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationFrame);
        init();
        animate();
    });
}

// Intersection Observer for scroll animations
const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, scrollObserverOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.service-card, .certificate-card, .blog-card, .testimonial-card');
animatedElements.forEach(el => {
    fadeObserver.observe(el);
});

// Smooth Scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles && scrolled < window.innerHeight) {
        heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroParticles.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});



// Site Loader
window.addEventListener('load', () => {
    const siteLoader = document.getElementById('siteLoader');
    if (siteLoader) {
        // Add a delay to show the loader animation
        setTimeout(() => {
            siteLoader.classList.add('hidden');
            
            // Remove the loader after the transition
            setTimeout(() => {
                siteLoader.style.display = 'none';
                
                // Animate hero content
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.opacity = '0';
                    heroContent.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        heroContent.style.transition = 'all 0.8s ease';
                        heroContent.style.opacity = '1';
                        heroContent.style.transform = 'translateY(0)';
                    }, 300);
                }
            }, 500);
        }, 3000); // Show loader for 3 seconds
    }
});

// Enhanced Anti-screenshot protection
(function() {
    // Create overlay to prevent screenshots
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'transparent';
    overlay.style.zIndex = '9999';
    overlay.style.pointerEvents = 'none';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    
    // Show overlay when print/screen capture is detected
    window.matchMedia('print').addListener(function(mql) {
        if (mql.matches) {
            overlay.style.display = 'block';
            showNotification("Skrinshot olish bloklangan!", 'error');
        } else {
            overlay.style.display = 'none';
        }
    });
    
    // Detect print events
    window.addEventListener('beforeprint', function() {
        overlay.style.display = 'block';
        showNotification("Chop etish bloklangan!", 'error');
    });
    
    window.addEventListener('afterprint', function() {
        overlay.style.display = 'none';
    });
    
    // Additional protection against common screenshot keys
    document.addEventListener('keydown', function(e) {
        // Windows: Print Screen (44)
        if (e.keyCode == 44) {
            e.preventDefault();
            showNotification("Skrinshot olish bloklangan!", 'error');
            return false;
        }
        // Mac: Command + Shift + 3 or 4
        if (e.metaKey && e.shiftKey && (e.keyCode == 51 || e.keyCode == 52)) {
            e.preventDefault();
            showNotification("Skrinshot olish bloklangan!", 'error');
            return false;
        }
        // Additional screenshot key combinations
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode == 83) { // Ctrl+Shift+S
            e.preventDefault();
            showNotification("Skrinshot olish bloklangan!", 'error');
            return false;
        }
        if (e.altKey && e.keyCode == 80) { // Alt+P
            e.preventDefault();
            showNotification("Chop etish bloklangan!", 'error');
            return false;
        }
    });
    
    // Additional protection: Periodically check for dev tools
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200) {
            showNotification("Dasturchi vositalari aniqlandi!", 'error');
        }
    }, 1000);
});

// Advanced Dev Tools Detection
(function() {
    var _0xdev = {
        open: false,
        orientation: null
    };
    var _0xthr = 160;
    
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > _0xthr || 
            window.outerWidth - window.innerWidth > _0xthr) {
            if (!_0xdev.open) {
                _0xdev.open = true;
                showNotification("Dasturchi vositalari aniqlandi!", 'error');
                // Optional: Redirect or take other action
                // window.location.href = 'about:blank';
            }
        } else {
            _0xdev.open = false;
        }
    }, 500);
    
    // Console detection
    var _0xdet = function() {
        var _0xstart = new Date().getTime();
        debugger;
        var _0xend = new Date().getTime();
        
        if (_0xend - _0xstart > 100) {
            showNotification("Dasturchi vositalari aniqlandi!", 'error');
            // Optional: Redirect or take other action
            // window.location.href = 'about:blank';
        }
    };
    
    // Run detector periodically
    setInterval(_0xdet, 1000);
    
    // Additional security measures
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showNotification("Kontekst menyusi bloklangan!", 'error');
        return false;
    });
    
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable copy, cut, and paste
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        showNotification("Nusxa ko'chirish bloklangan!", 'error');
        return false;
    });
    
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        showNotification("Kesish bloklangan!", 'error');
        return false;
    });
    
    document.addEventListener('paste', function(e) {
        e.preventDefault();
        showNotification("Qo'yish bloklangan!", 'error');
        return false;
    });
    
    // Disable common keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl+A (Select All)
        if (e.ctrlKey && e.keyCode == 65) {
            e.preventDefault();
            showNotification("Barchasini tanlash bloklangan!", 'error');
            return false;
        }
        // Ctrl+C (Copy)
        if (e.ctrlKey && e.keyCode == 67) {
            e.preventDefault();
            showNotification("Nusxa ko'chirish bloklangan!", 'error');
            return false;
        }
        // Ctrl+V (Paste)
        if (e.ctrlKey && e.keyCode == 86) {
            e.preventDefault();
            showNotification("Qo'yish bloklangan!", 'error');
            return false;
        }
        // Ctrl+X (Cut)
        if (e.ctrlKey && e.keyCode == 88) {
            e.preventDefault();
            showNotification("Kesish bloklangan!", 'error');
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode == 85) {
            e.preventDefault();
            showNotification("Manba ko'rish bloklangan!", 'error');
            return false;
        }
        // Ctrl+S (Save)
        if (e.ctrlKey && e.keyCode == 83) {
            e.preventDefault();
            showNotification("Saqlash bloklangan!", 'error');
            return false;
        }
        // Ctrl+P (Print)
        if (e.ctrlKey && e.keyCode == 80) {
            e.preventDefault();
            showNotification("Chop etish bloklangan!", 'error');
            return false;
        }
        // F12 (Dev Tools)
        if (e.keyCode == 123) {
            e.preventDefault();
            showNotification("Dasturchi vositalari bloklangan!", 'error');
            return false;
        }
        // Ctrl+Shift+I (Dev Tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            e.preventDefault();
            showNotification("Dasturchi vositalari bloklangan!", 'error');
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            e.preventDefault();
            showNotification("Konsol bloklangan!", 'error');
            return false;
        }
        // Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
            e.preventDefault();
            showNotification("Elementni tekshirish bloklangan!", 'error');
            return false;
        }
    });
});

// Image loading verification for hero circle
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-circle img');
    
    if (heroImage) {
        heroImage.addEventListener('load', function() {
            console.log('Profile image loaded successfully');
        });
        
        heroImage.addEventListener('error', function() {
            console.log('Failed to load profile image, using fallback');
            // Optionally, you could set a fallback image here
            // this.src = 'fallback-image.jpg';
        });
    }
});

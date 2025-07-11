// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Syllabus tab functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName + '-content').classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Contest filtering functionality
function filterContests(filterType) {
    const contestCards = document.querySelectorAll('.contest-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Remove active class from all filter buttons
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    event.target.classList.add('active');

    // Show/hide contest cards based on filter
    contestCards.forEach(card => {
        if (filterType === 'all' || card.dataset.type === filterType) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('btn-outline')) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .material-card, .contest-card, .about-card, .topic-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff6b6b';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    return isValid;
}

// Search functionality (if search is added later)
function searchContent(query) {
    const searchableElements = document.querySelectorAll('.material-card, .contest-card, .topic-card');
    const results = [];

    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            results.push(element);
        }
    });

    return results;
}

// Theme toggle (if dark mode is added later)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
}

// Load theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }
});

// Add some interactive features to the homepage
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click tracking for analytics (placeholder)
    const trackableLinks = document.querySelectorAll('a[href^="#"]');
    trackableLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Placeholder for analytics tracking
            console.log('Link clicked:', link.textContent);
        });
    });
});

// Error handling for failed image loads
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Tab key navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: Lazy loading for images (if added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images with data-src exist
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('img[data-src]').length > 0) {
        lazyLoadImages();
    }
    
    // Initialize file management if on file upload page
    if (document.querySelector('.upload-form')) {
        initializeFileManagement();
    }
});

// File management functionality
function initializeFileManagement() {
    // Sample file data (in a real app, this would come from a database)
    const sampleFiles = [
        {
            id: 1,
            title: "Linear Equations Handout",
            description: "Comprehensive guide to solving linear equations and inequalities",
            category: "amc8-algebra",
            filename: "linear-equations.pdf",
            uploadDate: "2024-01-15",
            fileSize: "2.3 MB"
        },
        {
            id: 2,
            title: "Geometry Basics",
            description: "Fundamental geometric concepts and formulas",
            category: "amc8-geometry",
            filename: "geometry-basics.pdf",
            uploadDate: "2024-01-10",
            fileSize: "1.8 MB"
        },
        {
            id: 3,
            title: "Number Theory Fundamentals",
            description: "Essential number theory concepts for AMC 8",
            category: "amc8-number-theory",
            filename: "number-theory.pdf",
            uploadDate: "2024-01-12",
            fileSize: "3.1 MB"
        }
    ];
    
    displayFiles(sampleFiles);
}

function displayFiles(files) {
    const filesGrid = document.getElementById('files-grid');
    if (!filesGrid) return;
    
    filesGrid.innerHTML = '';
    
    files.forEach(file => {
        const fileCard = createFileCard(file);
        filesGrid.appendChild(fileCard);
    });
}

function createFileCard(file) {
    const card = document.createElement('div');
    card.className = 'file-card';
    card.dataset.category = file.category;
    
    card.innerHTML = `
        <h3>${file.title}</h3>
        <p>${file.description}</p>
        <div class="file-meta">
            <span>${file.uploadDate}</span>
            <span>${file.fileSize}</span>
        </div>
        <div class="file-actions">
            <a href="#" class="btn btn-primary" onclick="downloadFile('${file.filename}')">Download</a>
            <a href="#" class="btn btn-secondary" onclick="previewFile('${file.filename}')">Preview</a>
            <button class="btn btn-outline" onclick="deleteFile(${file.id})">Delete</button>
        </div>
    `;
    
    return card;
}

function filterFiles(filterType) {
    const fileCards = document.querySelectorAll('.file-card');
    const filterButtons = document.querySelectorAll('.file-filters .filter-btn');
    
    // Remove active class from all filter buttons
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Show/hide file cards based on filter
    fileCards.forEach(card => {
        const category = card.dataset.category;
        if (filterType === 'all' || 
            (filterType === 'amc8' && category.includes('amc8')) ||
            (filterType === 'amc10' && category.includes('amc10')) ||
            (filterType === 'formulas' && category.includes('formula'))) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function downloadFile(filename) {
    // In a real application, this would trigger a file download
    console.log('Downloading file:', filename);
    alert(`Downloading ${filename}...`);
}

function previewFile(filename) {
    // In a real application, this would open a file preview
    console.log('Previewing file:', filename);
    alert(`Previewing ${filename}...`);
}

function deleteFile(fileId) {
    if (confirm('Are you sure you want to delete this file?')) {
        // In a real application, this would delete the file from the server
        console.log('Deleting file:', fileId);
        alert('File deleted successfully!');
        // Remove the file card from the DOM
        const fileCard = document.querySelector(`[data-file-id="${fileId}"]`);
        if (fileCard) {
            fileCard.remove();
        }
    }
}

// File upload form handling
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.querySelector('.upload-form');
    if (uploadForm) {
        uploadForm.addEventListener('submit', handleFileUpload);
    }
});

function handleFileUpload(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const file = formData.get('file');
    const title = formData.get('title');
    const category = formData.get('category');
    const description = formData.get('description');
    
    // In a real application, this would upload the file to a server
    console.log('Uploading file:', {
        title,
        category,
        description,
        filename: file.name,
        size: file.size
    });
    
    alert(`File "${title}" uploaded successfully!`);
    event.target.reset();
} 
// Course Data
/*const courses = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description: "Master both frontend and backend development with modern technologies.",
        price: 29999,
        image: "web-development.jpg",
        duration: "6 months",
        level: "Intermediate"
    },
    {
        id: 2,
        title: "Data Science & Analytics",
        description: "Learn data analysis, visualization, and machine learning.",
        price: 34999,
        image: "data-science.jpg",
        duration: "6 months",
        level: "Advanced"
    },
    {
        id: 3,
        title: "Cloud Computing",
        description: "Master AWS, Azure, and Google Cloud platforms.",
        price: 27999,
        image: "cloud-computing.jpg",
        duration: "4 months",
        level: "Intermediate"
    },
    {
        id: 4,
        title: "Cybersecurity Specialist",
        description: "Learn advanced security techniques and threat prevention.",
        price: 39999,
        image: "cybersecurity.jpg",
        duration: "6 months",
        level: "Advanced"
    },
    {
        id: 5,
        title: "Mobile App Development",
        description: "Create iOS and Android apps using React Native.",
        price: 31999,
        image: "mobile-dev.jpg",
        duration: "5 months",
        level: "Intermediate"
    },
    {
        id: 6,
        title: "DevOps Engineering",
        description: "Master CI/CD, containerization, and automation.",
        price: 36999,
        image: "devops.jpg",
        duration: "5 months",
        level: "Advanced"
    },
    {
        id: 7,
        title: "Artificial Intelligence",
        description: "Deep learning, neural networks, and AI applications.",
        price: 41999,
        image: "ai.jpg",
        duration: "6 months",
        level: "Advanced"
    },
    {
        id: 8,
        title: "UI/UX Design",
        description: "Learn user interface and experience design principles.",
        price: 24999,
        image: "ui-ux.jpg",
        duration: "3 months",
        level: "Beginner"
    },
    {
        id: 9,
        title: "Python Programming",
        description: "Master Python programming from basics to advanced.",
        price: 21999,
        image: "python.jpg",
        duration: "4 months",
        level: "Beginner"
    },
    {
        id: 10,
        title: "Java Development",
        description: "Complete Java programming and enterprise development.",
        price: 28999,
        image: "java.jpg",
        duration: "5 months",
        level: "Intermediate"
    },
    {
        id: 11,
        title: "Blockchain Development",
        description: "Learn blockchain technology and smart contracts.",
        price: 38999,
        image: "blockchain.jpg",
        duration: "5 months",
        level: "Advanced"
    },
    {
        id: 12,
        title: "Digital Marketing",
        description: "Master SEO, SEM, and social media marketing.",
        price: 19999,
        image: "digital-marketing.jpg",
        duration: "3 months",
        level: "Beginner"
    },
    {
        id: 13,
        title: "Network Administration",
        description: "Learn network management and security.",
        price: 26999,
        image: "networking.jpg",
        duration: "4 months",
        level: "Intermediate"
    },
    {
        id: 14,
        title: "Software Testing",
        description: "Master manual and automated testing techniques.",
        price: 23999,
        image: "testing.jpg",
        duration: "3 months",
        level: "Intermediate"
    },
    {
        id: 15,
        title: "Big Data Analytics",
        description: "Learn Hadoop, Spark, and big data processing.",
        price: 37999,
        image: "big-data.jpg",
        duration: "5 months",
        level: "Advanced"
    },
    {
        id: 16,
        title: "IoT Development",
        description: "Internet of Things development and applications.",
        price: 32999,
        image: "iot.jpg",
        duration: "4 months",
        level: "Intermediate"
    },
    {
        id: 17,
        title: "Game Development",
        description: "Create games using Unity and Unreal Engine.",
        price: 34999,
        image: "game-dev.jpg",
        duration: "5 months",
        level: "Intermediate"
    },
    {
        id: 18,
        title: "Business Analytics",
        description: "Learn data-driven business decision making.",
        price: 29999,
        image: "business-analytics.jpg",
        duration: "4 months",
        level: "Intermediate"
    },
    {
        id: 19,
        title: "Cloud Security",
        description: "Master cloud infrastructure security.",
        price: 35999,
        image: "cloud-security.jpg",
        duration: "4 months",
        level: "Advanced"
    },
    {
        id: 20,
        title: "Frontend Development",
        description: "Master HTML, CSS, JavaScript, and modern frameworks.",
        price: 25999,
        image: "frontend.jpg",
        duration: "4 months",
        level: "Beginner"
    }
];*/

// Format price in Indian Rupees
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price);
}

// Load courses on the homepage
function loadCourses() {
    const coursesContainer = document.querySelector('#courses .row');
    if (!coursesContainer) return;

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'col-md-4 mb-4';
        courseElement.innerHTML = `
            <div class="card h-100">
                <img src="images/${course.image}" class="card-img-top" alt="${course.title}">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <p class="price">${formatPrice(course.price)}</p>
                    <div class="button-group">
                        <a href="courses/${course.id}.html" class="btn btn-outline-primary">Learn More</a>
                        <a href="checkout.html?course=${course.id}" class="btn btn-primary">Enroll Now</a>
                    </div>
                </div>
            </div>
        `;
        coursesContainer.appendChild(courseElement);
    });
}

// Handle checkout process
function handleCheckout() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    
    if (courseId) {
        const course = courses.find(c => c.id === parseInt(courseId));
        if (course) {
            document.getElementById('course-title').textContent = course.title;
            document.getElementById('course-price').textContent = formatPrice(course.price);
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
    handleCheckout();
});

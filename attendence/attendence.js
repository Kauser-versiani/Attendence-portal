const teacherCards = document.querySelectorAll('.teacher-card');
const teacherProfile = document.querySelector('.teacher-profile');
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const profileInfo = document.getElementById('profile-info');
const profileBatch = document.getElementById('batch')
const closeButton = document.querySelector('.close-button');

let currentTeacher = null;

function showProfiles(index) {
    currentTeacher = index;
    const teacherData = teachers[index];

    profileImage.src = teacherData.image;
    profileName.textContent = teacherData.name;
    profileInfo.textContent = teacherData.info;
    profileBatch.textContent = teacherData.batch;
    teacherProfile.style.display = 'block';
}

function closeProfile() {
    teacherProfile.style.display = 'none';
    currentTeacher = null;
}

closeButton.addEventListener('click', closeProfile);

const teachers = [
    {
        name: 'Miss Hina',
        image: 'image-1.jpg',
        info: 'Web and App developer teacher',
        batch: "Batch : One"
    },
    {
        name: 'Miss Tayyaba',
        image: 'image-2.jpg',
        info: 'Flutter and wordpress development teacher',
        batch: "Batch : Two"

    },
    {
        name: 'Miss Qurat',
        image: 'image-3.jpg',
        info: 'Chatbot & AI teacher',
        batch: "Batch : Three"
    },
    {
        name: 'Miss Kausar',
        image: 'image-4.jpg',
        info: 'Web & App development teacher',
        batch: "Batch : Three"
    },
    {
        name: 'Miss Muneeba',
        image: 'image-5.webp',
        info: 'Graphic Designer teacher',
        batch: "Batch : Two"
    },
    {
        name: 'Miss Hafsa',
        image: 'image-6.webp',
        info: 'Video Editing teacher',
        batch: "Batch : One"
    }
];

// Initialize teacher cards
teacherCards.forEach((card, index) => {
    card.addEventListener('click', () => showProfiles(index));
});






const studentName  = localStorage.getItem("student-name");
const rollNo = localStorage.getItem("RollNo");
const today = localStorage.getItem("newDate");

document.getElementById("student-name").textContent = studentName;
document.getElementById("RollNo").textContent = rollNo;

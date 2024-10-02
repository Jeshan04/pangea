const teamMembers = [
    {
        img: "assets/images/johndoe.jpg",
        name: "Williamson",
        role: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam debitis eligendi excepturi facere laudantium nulla sint sit ut voluptatibus.",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#",
            googlePlus: "#"
        }
    },
    {
        img: "assets/images/client-image.jpg",
        name: "Kristiana",
        role: "Web Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam debitis eligendi excepturi facere laudantium nulla sint sit ut voluptatibus.",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#",
            googlePlus: "#"
        }
    },
    {
        img: "assets/images/johndoe.jpg",
        name: "John Doe",
        role: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam debitis eligendi excepturi facere laudantium nulla sint sit ut voluptatibus.",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#",
            googlePlus: "#"
        }
    },
    {
        img: "assets/images/johndoe.jpg",
        name: "Williamson",
        role: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam debitis eligendi excepturi facere laudantium nulla sint sit ut voluptatibus.",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#",
            googlePlus: "#"
        }
    },
    {
        img: "assets/images/johndoe.jpg",
        name: "Williamson",
        role: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam debitis eligendi excepturi facere laudantium nulla sint sit ut voluptatibus.",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#",
            googlePlus: "#"
        }
    },
    // Add more team members here...
];

function displayFellows() {
    const teamContainer = document.getElementById('team-container');

    teamMembers.forEach(member => {
        const memberHTML = `
            <div class="col-md-5th col-sm-6">
                <div class="our-team">
                    <img src="${member.img}" alt="${member.name}">
                    <div class="over-layer">
                        <div class="team-content">
                            <h3 class="title">${member.name}</h3>
                            <span class="post">${member.role}</span>
                            <p class="description">${member.description}</p>
                        </div>
                    </div>
                    <ul class="social-links">
                        <li><a href="${member.social.twitter}" class="fab fa-twitter"></a></li>
                        <li><a href="${member.social.linkedin}" class="fab fa-linkedin"></a></li>
                        <li><a href="${member.social.facebook}" class="fab fa-facebook"></a></li>
                        <li><a href="${member.social.googlePlus}" class="fab fa-google-plus"></a></li>
                    </ul>
                </div>
                <br>
            </div>
        `;
        teamContainer.innerHTML += memberHTML;
    });
}

document.addEventListener('DOMContentLoaded', displayFellows);

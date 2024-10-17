let profilesVisible = false; // Track whether profiles are visible

document.addEventListener('DOMContentLoaded', () => {
    const loadInfo = document.getElementById('loadInfo');
    loadInfo.addEventListener('click', toggleProfiles); // Toggle function on button click
});

function toggleProfiles() {
    if (profilesVisible) {
        hideProfiles();
    } else {
        showProfiles();
    }
}

function showProfiles() {
    const userProfilesContainer = document.getElementById('user-profiles');
    userProfilesContainer.innerHTML = ''; // Clear existing profiles

    liftOff.young_professionals.forEach(user => { // A 'for each' loop 
        const userCard = document.createElement('div'); // Create a div card for each user
        userCard.classList.add('user-card'); // Add class for each user card

        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
        `;

        userProfilesContainer.appendChild(userCard); // Append the user card to the container
    });

    loadInfo.textContent = "Hide Launchpad Students"; // Update button text
    loadInfo.style.backgroundColor = '#843024'; // Change button background color
    profilesVisible = true; // Update visibility state
}

function hideProfiles() {
    const userProfilesContainer = document.getElementById('user-profiles');
    userProfilesContainer.innerHTML = ''; // Clear the container 

    loadInfo.textContent = "Load Launchpad Students";
    loadInfo.style.backgroundColor = "#4CAF50"; 
    profilesVisible = false; 
}
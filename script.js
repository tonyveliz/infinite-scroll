// Unsplash API
const count = 10;
const apiKey = 'gTMeX7ti_XNp9stCnGN4sIEDVlFwdvLC8JCZCrD_PTE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();
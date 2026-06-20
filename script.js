let currentGift = 0;

function showNextGift() {
    // Pehle welcome button ko chupao
    if (currentGift === 0) {
        document.getElementById('startBtn').style.display = 'none';
    } else {
        // Purane gift box ko chupao style ko direct badal kar
        let prevGift = document.getElementById('gift' + currentGift);
        if (prevGift) {
            prevGift.style.display = 'none';
        }
    }

    // Agle gift ko badhao
    currentGift++;
    let nextGift = document.getElementById('gift' + currentGift);

    // Agle gift box ko screen par dikhao style badal kar
    if (nextGift) {
        nextGift.style.display = 'block';
        nextGift.classList.remove('hidden'); // Safe side ke liye dono rakh rahe hain
    } else {
        alert("Saare gifts khatam! Happy Birthday Kisha! ❤️");
    }

    // Music chalao agar file ho toh, warna crash na ho
    let audio = document.getElementById('bgMusic');
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Audio play skip.");
        });
    }
}

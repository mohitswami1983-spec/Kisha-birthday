let currentGift = 0;
const totalGifts = 10;

function showNextGift() {
    // Pehle click par music shuru karne ke liye
    if (currentGift === 0) {
        document.getElementById('startBtn').style.display = 'none';
        
        let music = document.getElementById('bgMusic');
        if (music) {
            music.play().catch(error => {
                console.log("Audio play blocked by browser:", error);
            });
        }
    } else {
        // Purane gift box ke andar ka Next button hide karne ke liye
        let currentBox = document.getElementById(`gift${currentGift}`);
        if (currentBox) {
            let btn = currentBox.querySelector('button');
            if (btn) btn.style.display = 'none';
        }
    }

    // Agla gift counter badhane ke liye
    currentGift++;

    // Naye gift box ko screen par dikhane ke liye
    if (currentGift <= totalGifts) {
        let nextBox = document.getElementById(`gift${currentGift}`);
        if (nextBox) {
            nextBox.classList.remove('hidden');
            // Smooth scroll karke naye gift par le jaane ke liye
            nextBox.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

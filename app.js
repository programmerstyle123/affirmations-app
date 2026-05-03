const defaultAffirmations = {
    work: [
        "My work is going smoothly.",
        "I finish my tasks early.",
        "I stay calm and focused at work."
    ],
    hustle: [
        "My side work is growing every day.",
        "I am earning money from my efforts.",
        "I am making good money from dropshipping.",
        "My Instagram page is growing fast and getting real followers.",
        "More people are discovering my content every day.",
        "Good opportunities are coming to me."
    ],
    health: [
        "I feel healthy and full of energy.",
        "My mind is calm and positive.",
        "I take care of my body every day."
    ]
};

let affirmations = JSON.parse(localStorage.getItem('affirmations'));

if (!affirmations) {
    affirmations = defaultAffirmations;
    localStorage.setItem('affirmations', JSON.stringify(affirmations));
}

function save() {
    localStorage.setItem('affirmations', JSON.stringify(affirmations));
}

// 🔹 Flatten all affirmations into one list
function getAllAffirmations() {
    return [
        ...affirmations.work,
        ...affirmations.hustle,
        ...affirmations.health
    ];
}

let currentIndex = 0;

function showAffirmation() {
    let all = getAllAffirmations();

    if (all.length === 0) {
        document.getElementById('card').innerText = "No affirmations found!";
        return;
    }

    document.getElementById('card').innerText = all[currentIndex];
}

function nextAffirmation() {
    let all = getAllAffirmations();
    currentIndex = (currentIndex + 1) % all.length;
    showAffirmation();
}

function prevAffirmation() {
    let all = getAllAffirmations();
    currentIndex = (currentIndex - 1 + all.length) % all.length;
    showAffirmation();
}

function addAffirmation() {
    let category = document.getElementById('category').value;
    let text = document.getElementById('affirmationInput').value;

    if (text.trim() !== '') {
        affirmations[category].push(text);
        save();
        document.getElementById('affirmationInput').value = '';
        showAffirmation();
    }
}

// Initial load
showAffirmation();
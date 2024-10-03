const jokebtn = document.getElementById("Joke-btn");
const setupDisplay = document.getElementById("setup");
const Line = document.getElementById("Line");
const loadingSpinner = document.getElementById("loading");

async function Data() {
    try {   
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            // console.log(data);

            // Hide the loading Animation
            setupDisplay.textContent = data.setup;
            Line.textContent = data.punchline; 
            Line.style.display="block"
            loadingSpinner.style.display = "none"; 
        }
        catch (error) {
        setupDisplay.textContent = "Oops, couldn't fetch a joke";
        Line.textContent = "";
    } finally { 
        loadingSpinner.style.display = "none"; 
    }
}

jokebtn.addEventListener("click", () => {
        // Show loading Animation
    setupDisplay.textContent = "Loading...";
    Line.textContent = "";
    loadingSpinner.style.display = "block";
    setTimeout(Data, 500)
}
);


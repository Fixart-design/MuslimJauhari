document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Function to handle button click for viewing material details
function openMateri(materi) {
    alert(`Anda membuka detail: ${materi}`);
}
// Function to navigate to the correct page
document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons with the class 'materi-button'
    const buttons = document.querySelectorAll(".materi-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the data-materi attribute
            const materi = button.getAttribute("data-materi");

            // Redirect to the corresponding page
            if (materi) {
                window.location.href = `./materi/${materi}.html`;
            } else {
                console.error("Materi attribute not found on button.");
            }
        });
    });
});


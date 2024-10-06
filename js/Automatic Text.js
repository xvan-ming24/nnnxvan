document.addEventListener('DOMContentLoaded', function() {
    const containerEl = document.querySelector(".containers");

    if (!containerEl) {
        console.error("Element with class 'container' not found.");
        return;
    }

    const careers = ["returns of the day", "returns of the day", "returns of the day", "returns of the day"];

    let careerIndex = 0;
    let characterIndex = 0;

    function updateText() {
        characterIndex++;
        containerEl.innerHTML = `
            <h1>Many happy ${careers[careerIndex].slice(0, 1) === "" ? "" : ""} ${careers[careerIndex].slice(0, characterIndex)}</h1>
        `;

        if (characterIndex === careers[careerIndex].length) {
            careerIndex++;
            characterIndex = 0;
        }

        if (careerIndex === careers.length) {
            careerIndex = 0;
        }
        setTimeout(updateText, 400);
    }

    updateText();
});
function Mode() {
    document.body.classList.toggle("dark-mode");
    let icon = document.getElementById("mode-icon");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon-o");
        icon.classList.add("fa-sun-o");
    } else {
        icon.classList.remove("fa-sun-o");
        icon.classList.add("fa-moon-o");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    var options = {
        strings: ["Fashion Model", "Professional Trainer", "Panelist"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    };

    var typed = new Typed(".typing", options);
});


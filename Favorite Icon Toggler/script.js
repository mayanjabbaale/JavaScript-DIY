document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite-ico');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Toggle the 'filled' class
            console.log(button.classList.toggle('filled'));

            // 3. Toggle between empty ♡ (&#9825;) and filled ❤️ (&#10084;)
            if (button.classList.contains('filled')) {
                button.innerHTML = '&#10084;';   // filled heart
            } else {
                button.innerHTML = '&#9825;';   // empty heart
            }
        });
    });
});
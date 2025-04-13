document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('name');
    const professionElement = document.getElementById('profession');
    const name = "Hi, I'm Dharmeshkumar";
    const onlyname = "Dharmeshkumar";
    const professions = ["App Developer", "Web Developer","Coder","Content Writer"];

    // Typing effect function
    function typeText(element, text, callback) {
        let charIndex = 0;
        function type() {
            if (charIndex < text.length) {
                element.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust typing speed here
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // Erasing effect
    function eraseText(element, callback) {
        let currentText = element.innerHTML;
        let charIndex = currentText.length;

        function erase() {
            if (charIndex > 0) { // Change condition to erase entire text
                element.innerHTML = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50); // Adjust erasing speed here
            } else if (callback) {
                callback();
            }
        }
        erase();
    }

    // Start the sequence
    function startTypingEffect() {
        // Step 1: Type the name
        typeText(nameElement, name, function() {
            // Step 2: Erase only the name after typing
            setTimeout(() => {
                eraseText(nameElement, function() {
                    // Step 3: Type professions with typing effect after name is erased
                    let professionIndex = 0;

                    function typeProfession() {
                        if (professionIndex < professions.length) {
                            professionElement.innerHTML = ''; // Clear profession element before typing
                            typeText(professionElement, `Hi, I'm ${professions[professionIndex]}`, function() {
                                professionIndex++;
                                setTimeout(typeProfession, 1500); // Delay between professions
                            });
                        } else {
                            // Step 4: Erase profession before re-typing the name
                            setTimeout(() => {
                                eraseText(professionElement, function() {
                                    // Step 5: Re-type the name after erasing the profession
                                    setTimeout(() => {
                                        typeText(nameElement, `Hi, I'm ${onlyname}`, null); // Re-type the name again
                                    }, 1000); // Delay before re-typing the name
                                });
                            }, 1000); // Delay before erasing the profession
                        }
                    }

                    typeProfession(); // Start typing professions after name is erased
                });
            }, 1000); // Wait before erasing the name
        });
    }

    // Start the typing effect
    startTypingEffect();
});



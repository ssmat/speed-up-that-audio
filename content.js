const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    if (header) {
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("button2x");
        let buttonActive = false;
        button.addEventListener("click", () => {
            buttonActive = !buttonActive;
            button.classList.toggle("active");

            if (buttonActive) {
                const audios = document.querySelectorAll("audio");
                audios.forEach(audio => {
                    audio.playbackRate = 2
                });
                return
            }

            const audios = document.querySelectorAll("audio");
            audios.forEach(audio => {
                audio.playbackRate = 1
            });
        })

        header.appendChild(button);
    }
}, 1000);

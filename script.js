let a = document.body.getElementsByClassName("btn");
let button = a[0];
button.addEventListener("click", () => {
    alert("Hacking initiated!")

    //Reset the whole screen
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";

    // Re-add beep element
    let audio = document.createElement("audio");
    audio.id = "beep";
    audio.src = "censor-beep-88052.mp3";
    audio.preload = "auto";
    document.body.appendChild(audio);
    let beep = audio;

    //Hacking Process Begins
    const randomDelay = () => {
        return new Promise((resolve, reject) => {
            let timeout = 1 + 3 * Math.random();
            setTimeout(() => {
                resolve();
            }, timeout * 1000);   //in miliseconds
        })
    }

    //add item function
    const addItem = async (item) => {
        await randomDelay();
        let div = document.createElement("div");
        div.innerHTML = item;
        document.body.append(div);
    }

    //main function
    async function main() {
        let text = ["Initializing Hacking",
            "Initialized Hacking now reading your data",
            "Reading your files",
            "Password files detected",
            "Sending all password and personal files to server",
            "Cleaning up"];

        //adding the blinking effect
        let t = setInterval(() => {
            let allDivs = document.body.getElementsByTagName("div");
            if (allDivs.length === 0)
                return;

            let last = allDivs[allDivs.length - 1];

            //action on prev div message
            if (allDivs.length >= 2) {
                let last_but_one = allDivs[allDivs.length - 2];

                //if any dots remain in the prev msg del them
                while (last_but_one.innerHTML.endsWith(".")) {
                    last_but_one.innerHTML = last_but_one.innerHTML.slice(0, -1);
                }

            }

            //action on current div message ie printing blinking dots
            if (last.innerHTML.endsWith("...")) {
                last.innerHTML = last.innerHTML.slice(0, -3);
            }
            else {
                last.innerHTML = last.innerHTML + ".";
            }

            // 🔊 Play beep sound on every blink
            beep.currentTime = 0;
            beep.play().catch(e => console.warn("Play error:", e));


        }, 500);

        // Print messages one by one
        for (const item of text) {
            await addItem(item);
        }

        // Stop blinking after all lines printed
        await randomDelay();
        clearInterval(t);

        //if any dots remain in the last msg del them
        let divs=document.body.getElementsByTagName("div");
        let last = divs[divs.length-1];
        while (last.innerHTML.endsWith(".")) {
            last.innerHTML = last.innerHTML.slice(0, -1);
        }
        
        // document.body.innerHTML = "";
    }

    main();
})

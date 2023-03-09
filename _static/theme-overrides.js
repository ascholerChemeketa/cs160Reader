document.addEventListener('DOMContentLoaded', function() {
    let logo;
    let logos = document.getElementsByClassName("brand-logo");
    if(logos)
        logo = logos[0];

    let brands = document.getElementsByClassName("navbar-brand");
    if(brands) {
        let brand = brands[0];
        brand.setAttribute('title', brand.innerHTML);
        brand.innerHTML = "Contents";

        if(logo !== undefined) {
            logo.href = brand.href;
        }
    }

    
    let warning = document.querySelector("#browser_warning");
    if(warning)
        warning.classList.add("red");
});

//Add listener to do ajax call when python code is run
document.addEventListener('DOMContentLoaded', function() {
    //wait for runestone to load components
    setTimeout(() => {
        const pythonACs = document.querySelectorAll('div[lang="python"]');
        pythonACs.forEach((acItem) => {
            const runBtn = acItem.querySelector("button.run-button");
            const codeMirror = acItem.querySelector("div.CodeMirror");
            runBtn.addEventListener('click', () => {
                let currentCode = codeMirror.CodeMirror.getValue();
                var data = new FormData();
                data.append('code', currentCode);
                fetch('https://postman-echo.com/post', {
                    method: 'POST',
                    body: JSON.stringify(currentCode),
                    mode: 'no-cors'
                })
                .then((response) => {
                    console.log(response);
                    const stdOutPre = acItem.querySelector("div.ac_output pre");
                    stdOutPre.insertAdjacentHTML("afterbegin", "")
                    //response.json();
                })
                // .then((jsonData) => {
                //     console.log(jsonData);
                // })
                .catch(err => {
                    console.log("Error w/ajax");
                });
            });
        });
    }, 2000);
});
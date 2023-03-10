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
                fetch('http://157.230.167.85:4242/test', {
                    method: 'POST',
                    body: JSON.stringify(currentCode)
                })
                .then((response) => {
                    console.log(response);
                    return response.text();
                })
                .then((data) => {
                    let lintPre = acItem.querySelector("div.ac_output pre.lint-results");
                    if( lintPre == null ) {
                        const stdOutPre = acItem.querySelector("div.ac_output pre");
                        stdOutPre.insertAdjacentHTML("beforebegin", '<pre class="lint-results"></pre>');
                        lintPre = acItem.querySelector("div.ac_output pre.lint-results");
                    }
                    if(data.trim() !== '') {
                        lintPre.classList.remove("hidden");
                        lintPre.innerHTML = "Syntax warnings:\n" + data;
                    } else {
                        lintPre.classList.add("hidden");
                    }
                })
                .catch(err => {
                    console.log("Error w/ajax");
                });
            });
        });
    }, 1000);
});
var symid, gender, dob, i = 0;

var authtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhbWVyYWtzMzM2NjUyQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNTY2NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjAtMTItMTEiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2MDc3NzIyNzksIm5iZiI6MTYwNzc2NTA3OX0.brOi7lc30w0kKguH5FlaQaerBn1xP-uRrIyg0K8Vkdo";
const api1 = `https://healthservice.priaid.ch/symptoms?token=${authtoken}&format=json&language=en-gb`;
fetch(api1)
    .then(response => {
        return response.json();
    })
    .then(data => {
        symdata = data;
        //console.log(data);

    });

function find() {
    symt = document.getElementById('sym').value;
    // gender = document.getElementById('gen').value;
    dob = document.getElementById('age').value;

    if (document.getElementById('malRad').checked) {
        gender = "Male";
    }
    else if (document.getElementById('femRad').checked) {
        gender = "Female";
    }

    for (i = 0; i < 281; i++) {
        if (symt == symdata[i].Name) {
            symid = symdata[i].ID;
        }
    }

    const api2 = `https://healthservice.priaid.ch/diagnosis?symptoms=[${symid}]&gender=${gender}&year_of_birth=${dob}&token=${authtoken}&format=json&language=en-gb`;
    fetch(api2)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            document.getElementById('soln').innerHTML = data.map(sol =>
                `<div class="sympData">
                
                    <h2 class="heading-tertiary no-bg" id="icdname">
                        ${sol.Issue.IcdName}
                    </h2>
                    <p class="paragraph no-margin" id="solname">
                        ${sol.Issue.Name}
                    </p>
                    <br>
                    <h2 class="heading-tertiary no-bg">Solution</h2>
                    ${sol.Specialisation.map(spe =>
                    `<li class="paragraph no-margin">${spe.Name}</li>`
                ).join('')}
                
                <br><br>
                <hr>
                <br>
                </div>`
            ).join('')
        });
}

function run() {
    drug = document.getElementById('drugname').value;

    const api1 = `https://api.fda.gov/drug/label.json?search=${drug}`;
    fetch(api1)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            var res1 = data.results[0].information_for_patients[0].split(".", 4);
            var res2 = data.results[0].adverse_reactions[0].split(".", 3);

            document.getElementById('soln').innerHTML =
                `<div class="medData">
                        <h2 class="heading-secondary no-bg" >${drug}</h2>
                        <br><br>
                        <h3 class="fhide heading-tertiary">Patient Advice</h3>
                        <p class="thide paragraph">${data.results[0].information_for_patients[0]}</p>
                        <br>
                        <h3 class="fhide heading-tertiary">Adverse Reaction</h3>
                        <p class="thide paragraph">${data.results[0].adverse_reactions[0]}</p>                                            
                        <br>
                        <h3 class="fhide heading-tertiary">Overdosage</h3>
                        <p class="thide paragraph">${data.results[0].overdosage[0]}</p>                                            
                        <br>
                        <h3 class="fhide heading-tertiary">Pregnancy</h3>
                        <p class="thide paragraph">${data.results[0].pregnancy[0]}</p>                                            
                        <br>
                        <h3 class="fhide heading-tertiary">Elements</h3>
                        <p class="thide paragraph">${data.results[0].spl_product_data_elements[0]}</p>                                            
                        <br>
                    <br><br>
                    <hr>
                    <br>
                    </div>`

        });
}

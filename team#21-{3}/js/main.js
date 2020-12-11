var symid, gender, dob, i=0;

var authtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1lY2lyMjczMDJAeWVrdGFyYS5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjU2NjkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiQmFzaWMiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTEyLTExIiwiaXNzIjoiaHR0cHM6Ly9hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjA3NzI4Njg5LCJuYmYiOjE2MDc3MjE0ODl9.w62c2YvV49Suor_0xIzi2h5tVF8rFZk89CttEdtCH2E";

const api1 = `https://healthservice.priaid.ch/symptoms?token=${authtoken}&format=json&language=en-gb`;
fetch(api1)
        .then(response =>{
            return response.json();
        })
        .then(data=>{
            symdata = data;
            //console.log(data);
            
});

function find(){
    symt = document.getElementById('sym').value;
    // gender = document.getElementById('gen').value;
    dob = document.getElementById('age').value;

    if(document.getElementById('malRad').checked) { 
        gender = "Male";
    } 
    else if(document.getElementById('femRad').checked) { 
        gender = "Female";
    } 

    for(i=0; i<281; i++){
        if(symt.localeCompare(symdata[i].Name)){
            symid = symdata[i].ID;
        }
    }

    const api2 = `https://healthservice.priaid.ch/diagnosis?symptoms=[${symid}]&gender=${gender}&year_of_birth=${dob}&token=${authtoken}&format=json&language=en-gb`;
    fetch(api2)
        .then(response =>{
            return response.json();
        })
        .then(data=>{ 
            console.log(data);

            document.getElementById('soln').innerHTML = data.map(sol => 
                `<div class="news">
                
                    <h2 id="icdname">
                        ${sol.Issue.IcdName}
                    </h2>
                    <h3 id="solname">
                        ${sol.Issue.Name}
                    </h3>
                    <br>
                    <h2>Solution</h2>
                    ${sol.Specialisation.map(spe =>
                        `<li>${spe.Name}</li>`
                        ).join('')}
                
                <br><br>
                <hr>
                <br>
                </div>`
            ).join('')
    });
}

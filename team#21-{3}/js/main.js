var symdata;
var symid, gender, dob;

var authtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1lY2lyMjczMDJAeWVrdGFyYS5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjU2NjkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiQmFzaWMiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTEyLTExIiwiaXNzIjoiaHR0cHM6Ly9hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjA3NzAwNjIwLCJuYmYiOjE2MDc2OTM0MjB9.GTJ2gnmv46g0aJZpBkgLR6MxClEuCRBAQs3L3gsSsZE";

const api1 = `https://healthservice.priaid.ch/symptoms?token=${authtoken}&format=json&language=en-gb`;
fetch(api1)
    .then(response =>{
        return response.json();
    })
    .then(data=>{
        symdata = data;
        console.log(data);
});

const api2 = `https://healthservice.priaid.ch/diagnosis?symptoms=[${symid}]&gender=${gender}&year_of_birth=${dob}&token=${authtoken}&format=json&language=en-gb`;
fetch(api2)
    .then(response =>{
        return response.json();
    })
    .then(data=>{
        symdata = data;
        console.log(data);
});





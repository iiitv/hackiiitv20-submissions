// var results = require('./script')

// console.log(results);
var obj = {"list": [
    {
        "name":"Prakhar",
        "Patient-id":12,
        "Blood-type":"A+"
    },
    {
        "name":"Sameer",
        "Patient-id":13,
        "Blood-type":"AB"
    },
    {
        "name":"Nishant",
        "Patient-id":14,
        "Blood-type":"B+"},
    {
        "name":"Divyansh",
        "Patient-id":15,
        "Blood-type":"B+"}
]}
var results = [];
var searchField = "name";
var searchVal = res.name;
for (var i=0 ; i < obj.list.length ; i++)
{
    if (obj.list[i][searchField] == searchVal) {
        results.push(obj.list[i]);
    }
}
console.log(results);


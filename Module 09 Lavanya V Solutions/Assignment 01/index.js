//creation of object

let student ={
    name:"Vishal",
    class:"X",
    seatNo:987
}

//display object keys
let user = Object.keys(student);
//console.log(`"${user[0]},${user[1]},${user[2]}"`)
console.log(`"${user.join(",")}"`)


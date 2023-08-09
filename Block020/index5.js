const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById("root");
    const h1 = document.createElement("h1").innerHTML = "FREELANCERS";
    root.append(h1);

    const list = document.createElement("ul");
    root.append(list);

    for (let i = 0; i < users.length - 1; i++) {
        const item = document.createElement("li");
        item.innerHTML = users[i].name;
        list.append(item);
    }
}

//call the main function
main();
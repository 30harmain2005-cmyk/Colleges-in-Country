let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let list = document.querySelector(".list");
let h1 = document.querySelector("h1");


async function getCollege(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(e) {
        console.log("Error -", e);
        return "No Colleges"
    }
}

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colArr = await getCollege(country);
    display(colArr, country);
});

function display(colArr, country) {
    list.innerText = "";
    for(col of colArr) {
        let li = document.createElement("li");
        h1.innerText = `Colleges in ${country}`
        li.innerText = col.name;
        list.appendChild(li);
    }
}

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let list = document.querySelector(".list")


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
    display(colArr);
});

function display(colArr) {
    list.innerText = "";
    for(col of colArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

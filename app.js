let url = "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";
let btn = document.querySelector("button");
let list = document.querySelector(".list");
let h1 = document.querySelector("h1");


async function getCollege(country) {
    try {
        let res = await axios.get(url);
        let colleges = res.data;
        let result = colleges.filter(col =>
            col.country.toLowerCase() === country.toLowerCase()
        );

        return result;
    }
    catch(e) {
        console.log("Error -", e);
        return [];
    }
}

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value.trim();
    let colArr = await getCollege(country);
    display(colArr, country);
});

function display(colArr, country) {
    list.innerText = "";
    
    if(colArr.length === 0) {
        let li = document.createElement("li");
        li.innerText = `No Colleges in ${country}`;
        list.appendChild(li);

    }
    for(let col of colArr) {
        let li = document.createElement("li");
        h1.innerText = `Colleges in ${country}`
        li.innerText = col.name;
        list.appendChild(li);
    }
}

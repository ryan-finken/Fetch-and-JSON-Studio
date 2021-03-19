window.addEventListener('load', function (event) {
    const url = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(url).then(function (response) {
        response.json().then(function (json) {
            let div = document.getElementById('container');

            for (let i = 0; i < json.length; i++) {
                let name = json[i].firstName + ' ' + json[i].lastName;
                let hoursInSpace = String(json[i].hoursInSpace);
                let active = String(json[i].active);
                let skills = '';
                // create skills string element by element
                for (let j = 0; j < json[i].skills.length; j++) {
                    skills += json[i].skills[j] + ', ';
                }
                // remove last ', ' from skills
                skills = skills.slice(0, -2);
                let imgSource = json[i].picture;

                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${name}</h3>
                        <ul>
                            <li>Hours in space: ${hoursInSpace}</li>
                            <li>Active: ${active}</li>
                            <li>Skills: ${skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${imgSource}">
                </div>
                `;
            }
        });
    });
});
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
    const choice = document.querySelector('#dateInput').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=zPLnYisugExfw0eFaDcJzhJpxal8FPtmW2Qmlu0I&date=${choice}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('h2').innerText = "NASA KNOWS ME!";
            document.querySelector('h3').innerText = data.explanation;

            const image = document.createElement('img');
            image.src = data.hdurl;
            image.alt = data.title;
            document.body.appendChild(image);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


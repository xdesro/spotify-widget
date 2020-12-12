const spotifyWrapper = document.querySelector(".spotify");
const artistTemplate = (artistObject) =>
  `<a href="${artistObject.url}">${artistObject.name}</a>`;
fetch("/.netlify/functions/spotify")
  .then((res) => res.json())
  .then(({ trackUrl, name, artists, artworkUrl }) => {
    spotifyWrapper.innerHTML = `<div class="song">
            <a href="${trackUrl}">
                ${name}
            </a>
        </div>
        <div class="artists">${artists
          .map((artist) => artistTemplate(artist))
          .join(", ")}</div>
        <img class="artwork" src="${artworkUrl}"/>`;
  })
  .catch((err) => console.error(err));

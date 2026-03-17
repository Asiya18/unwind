
const audios = document.querySelectorAll("audio");

// Ensure only one audio plays at a time
audios.forEach(audio => {
  audio.addEventListener("play", () => {
    audios.forEach(other => {
      if (other !== audio) {
        other.pause();
        other.currentTime = 0; // Reset to beginning
      }
    });
  });
});

// Search functionality
const searchInput = document.getElementById("searchInput");
const albumGrid = document.getElementById("albumGrid");

if (searchInput && albumGrid) {
  const albums = albumGrid.querySelectorAll(".album");

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase().trim();
    
    albums.forEach(album => {
      const text = album.querySelector("p").textContent.toLowerCase();
      album.style.display = text.includes(value) ? "flex" : "none";
    });
    
    // Show message if no results
    const visibleAlbums = Array.from(albums).filter(album => album.style.display !== "none");
    
    let noResultsMsg = document.getElementById("noResultsMsg");
    if (visibleAlbums.length === 0) {
      if (!noResultsMsg) {
        noResultsMsg = document.createElement("p");
        noResultsMsg.id = "noResultsMsg";
        noResultsMsg.textContent = "No albums found matching your search.";
        noResultsMsg.style.color = "#fff";
        noResultsMsg.style.textAlign = "center";
        noResultsMsg.style.marginTop = "20px";
        albumGrid.parentElement.appendChild(noResultsMsg);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
  });
}

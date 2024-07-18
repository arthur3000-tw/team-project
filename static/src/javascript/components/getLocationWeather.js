function selectLocation() {
  const taiwan = document.getElementById("taiwan");
  const paths = taiwan.querySelectorAll("path");
  paths.forEach((path) => {
    const areaId = path.getAttribute("data-name");
    const countyName = svgIdToCountyName[areaId];
    console.log(countyName);
    path.addEventListener("click", async () => {
      try {
        getHeroData(countyName);
      } catch (error) {
        console.error(`Failed to get weather data for ${countyName}:`, error);
      }
    });
  });
}

selectLocation();

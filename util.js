export const fetchSection = (file) =>
  fetch(file)
    .then((response) => response.text())
    .catch(function (err) {
      console.log('Failed to fetch page: ', err);
    });

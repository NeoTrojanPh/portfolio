/*
file:'templates/header.html'
selector:'.footer'
*/

function fetching(file,selector){
  // @ts-ignore
  fetchSection(file).then((html) => {
    const html_part = document.querySelector(selector);

    if (html_part) {
      // @ts-ignore
      html_part.innerHTML = html
    }
  });
}

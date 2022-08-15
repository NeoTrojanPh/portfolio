import * as util from './util.js';
/*
file:'templates/header.html'
selector:'.footer'
*/

function fetching(file, selector) {
  // @ts-ignore
  util.fetchSection(file).then((html) => {
    const html_part = document.querySelector(selector);

    if (html_part) {
      // @ts-ignore
      html_part.innerHTML = html;
    }
  });
}

function loadPage(ele) {
  const paged = ele.getAttribute('data');

  fetching('templates/' + paged + '.html', '.body');

  setTimeout(function () {
    const boxes = Array.from(document.getElementsByClassName('nav-link'));
    boxes.forEach((box) => {
      box.classList.remove('active');
    });

    const node = document.querySelector('a[data="' + paged + '"]');
    // @ts-ignore
    node.classList.add('active');
  }, 200);
}

window.addEventListener('load', () => {
  // @ts-ignore
  fetching('templates/header.html', '.header');
  fetching('templates/index.html', '.body');
  fetching('templates/footer.html', '.footer');

  setTimeout(function(){
    // @ts-ignore
    document.getElementById('loadFirst').click();
  },2000);


});


// @ts-ignore
window.loadPage = loadPage;

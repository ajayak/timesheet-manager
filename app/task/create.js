const Nightmare = require('nightmare');
const _ = require('lodash');

const nightmare = Nightmare({
  show: true
});

const file = JSON.parse(_.unescape(process.argv[2]));
const values = JSON.parse(_.unescape(process.argv[3]));

console.log(file);
console.log(values);

// nightmare
//   .goto('https://duckduckgo.com')
//   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#zero_click_wrapper .c-info__title a')
//   .evaluate(() => {
//     console.log(payload);
//     return document.querySelector('#zero_click_wrapper .c-info__title a').href;
//   })
//   // .end()
//   .then((result) => {
//     console.log(result, payload);
//   })
//   .catch((error) => {
//     console.error('Search failed:', error);
//   });

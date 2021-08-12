import Card from "./Card.js";
let rootEl = document.getElementById('root');
let el = new Card('http://s3.amazonaws.com/gt7sp-prod/decal/20/43/27/5981427928386274320_1.png', 'https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_.jpg');
el.render(rootEl);
rootEl.appendChild(el._createElement());
rootEl.appendChild(document.createElement('span'));
console.log('aaa');

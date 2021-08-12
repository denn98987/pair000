import Card from "./Card.js";
import Game from "./Game.js";

let rootEl = document.getElementById('root');
let suit = 'https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_.jpg';
let Stewie = 'http://images.shoutwiki.com/familyguy/0/02/Stewie_Griffin.png';
let Brian = 'https://i.pinimg.com/originals/71/32/20/7132200102efd2808cba334fb4cf08e2.jpg';
let Peter = 'https://i.pinimg.com/originals/6a/ea/63/6aea63e74b246450eab8a90d38d2bb5b.jpg';
let Chris = 'https://upload.wikimedia.org/wikipedia/en/d/df/Chris_Griffin.png';
let Herbert = 'https://sketchok.com/images/articles/01-cartoons/002-family-guy/12/13.jpg';

const table = new Game([suit, Stewie, Brian, Peter, Chris, Herbert], [2,3,5]);
// table.start(rootEl);

const a = document.querySelector("p");
const text = a.innerHTML.split(" ").map(function(word) {
    if(word.length > 8) {
        return `<span style="background-color: yellow;">${word}</span>`
    } else {
        return `<span>${word}</span>`
    }
}).join(" ");
a.innerHTML = text;

a.innerHTML = text.replaceAll('?', '🤔').replaceAll('!', '😲');


function WordCount(str) { 
    return str.split(" ").length;
  }
//console.log(a.innerHTML.split(' '));
console.log(WordCount(text));
const h2 = document.createElement('h2');
h2.innerHTML = `<span> ${WordCount(text)} words in the text</span>`;
document.body.prepend(h2);


const link = document.createElement('a');
link.innerHTML = '<a href="https://forcemipsum.com/">https://forcemipsum.com/</a>';
console.log(link);
document.body.append(link);


const b = a.innerHTML.split('.').map(function(el) {
    return `<span> <br>${el} </span>`
}).join('.');
a.innerHTML = b;








// Selects all emails on current view containing the input word

function selectEmails(inputWord) {
  let targets = Array.from(document.querySelectorAll('tr'));
  targets = targets.filter( x => x.innerText.includes(inputWord) );
  targets.forEach( x => x.children.length > 1 && x.children[1].click() );
}

selectEmails("Quora");
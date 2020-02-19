const profileUrls = Array.from(document.querySelectorAll('.user-card__link.app')).map(x => x.href);
let profiles = [];
const parser = new DOMParser();

async function fetchProfileDescription(url) {
	const fetchResult = await fetch(url).then(res => res.text());
	const doc = parser.parseFromString(fetchResult, "text/html");
	const profileText = doc.body.querySelector('.qa-profile-section-about-me .profile-section__txt');
	const final = profileText ? profileText.innerText : null;
	console.log(final);
	return final;
}

for (let i = 0; i < profileUrls.length; i++)
	profiles.push({ 'url': profileUrls[i], 'description': await fetchProfileDescription(profileUrls[i]) });

// Replace array index with url as it takes unnecessary space on console
console.table(profiles.reduce((acc, {url, ...x}) => { acc[url] = x; return acc}, {}));

document.querySelectorAll('*').forEach((node) => {
    let p = getEventListeners(node);
    let keys = Object.keys(p);
    if(keys.length > 0) {
	for(let i = 0; i < keys.length; i++) {
		node.removeEventListener(keys[i], p[keys[i]][0].listener);
	}
    }
});
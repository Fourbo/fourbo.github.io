// Fade out on link click
document.querySelectorAll('a[href]').forEach(link => {
	const href = link.getAttribute('href');
	if (!href.startsWith('#') && !link.classList.contains('no-fade')) {
		link.addEventListener('click', function (e) {
			const page = document.getElementById('page-content');
			if (page) {
				e.preventDefault();
				page.classList.remove('fade-in');
				page.classList.add('fade-out');
				setTimeout(() => {
					window.location = this.href;
				}, 400);
			}
		});
	}
});

// Reset fade when returning to page
window.addEventListener('pageshow', function(event) {
	const page = document.getElementById('page-content');
	if (page) {
		page.classList.remove('fade-out');
		page.classList.add('fade-in');
	}
});

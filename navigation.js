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

// Trigger fade-in on normal first load
window.addEventListener('DOMContentLoaded', function() {
	const page = document.getElementById('page-content');
	if (page && !page.classList.contains('fade-in')) {
		page.classList.add('fade-in');
	}
});

// Re-trigger fade-in when navigating back/forward (from bfcache)
window.addEventListener('pageshow', function(event) {
	const page = document.getElementById('page-content');
	if (page) {
		// Temporarily remove transition and set opacity to 0
		page.style.transition = 'none';
		page.style.opacity = 0;

		// Force reflow so the style is applied before fade-in
		void page.offsetWidth;

		// Restore transition and fade-in
		page.style.transition = 'opacity 0.4s ease-in-out';
		page.classList.remove('fade-out');
		page.classList.add('fade-in');
	}
});

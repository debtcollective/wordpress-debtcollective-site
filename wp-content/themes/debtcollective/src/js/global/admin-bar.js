const addTopMargin = function () {
	const wpadminbar = document.getElementById('wpadminbar');
	if (wpadminbar) {
		const dcheader = document.getElementsByTagName('dc-header');
		const styleTag = `
			<style>
				:host(dc-header) .navbar-top {margin-top:46px;}
				@media (min-width: 782px) {
					:host(dc-header) .navbar-top {margin-top:32px;}
				}
			</style>
		`;
		const combinedHtml = styleTag.concat(dcheader[0].shadowRoot.innerHTML);
		dcheader[0].shadowRoot.innerHTML = combinedHtml;
	}
};

document.addEventListener('DOMContentLoaded', function () {
	addTopMargin();
});

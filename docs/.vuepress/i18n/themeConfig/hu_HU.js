module.exports = {
	label: "Magyar",
	ariaLabel: "Select language",
	selectText: "Language",
	editLinkText: "Edit this page on GitHub",

	serviceWorker: {
		updatePopup: {
			message: "New content is available.",
			buttonText: "Refresh"
		}
	},

	sidebar: {
		"/hu_HU/": [
			"",
			{
				title: "Guide",
				children: [
					"launching-the-exploit",
					"dumping-nand",
					"installing-unlaunch"
				]
			},
			{
				title: "Extras",
				children: [
					"dsiware-backups",
					"dumping-game-cards",
					"dumping-nand",
					"file-extensions-(windows)",
					"restoring-nand",
					"sd-card-setup",
					"uninstalling-unlaunch"
				]
			},
			{
				title: "Other",
				children: [
					"faq",
					"troubleshooting",
					"credits",
					"site-navigation"
				]
			}
		]
	}
};

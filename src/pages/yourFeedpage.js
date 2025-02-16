export class YourFeedPage {
	constructor(page) {
		this.page = page;
		this.newArticleButton = page.getByRole('link', { name: 'New Article' });
		this.profileNameField = page.getByRole('navigation');
	}

	// todo naming
	async gotoArticle() {
		await this.newArticleButton.click();
	}
}
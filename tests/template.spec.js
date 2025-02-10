import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/mainPage';
import { RegisterPage } from '../src/pages/registerPage';
import { YourfeedPage } from '../src/pages/yourfeedPage';

// todo вынести в отдельное место
const URL_UI = 'https://realworld.qa.guru/';

test.describe('Шаблон', () => {
	test.beforeEach(async ({ page }) => {
		//todo подготовка состояния
		const mainPage = new MainPage(page);
		const registerPage = new RegisterPage(page);
		const yourfeedPage = new YourfeedPage(page);

		//todo подготовка данных
		const user = {
			email: faker.internet.email(),
			password: faker.internet.password({ length: 10 }),
			username: faker.person.firstName(),
		};
		await mainPage.open(URL_UI);
		await mainPage.gotoRegister();
		await registerPage.register(user.username, user.email, user.password);
		await expect(yourfeedPage.profileNameField).toBeVisible();
		await expect(yourfeedPage.profileNameField).toContainText(user.username);
	});

	test('Это новый тест', async ({ page }) => {
		const yourfeedPage = new YourfeedPage(page);
		await yourfeedPage.gotoArticle();
		await expect(yourfeedPage.profileNameField).toBeVisible();
	});
});
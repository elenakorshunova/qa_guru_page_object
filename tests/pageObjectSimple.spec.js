import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/mainPage';
import { RegisterPage } from '../src/pages/registerPage';
import { YourFeedPage } from '../src/pages/yourFeedpage';

const URL_UI = 'https://realworld.qa.guru';

test('Valid login+password', async ({ page }) => {
    const user ={
        email: faker.internet.email(),
        password: faker.internet.password({length: 10}),
        username: faker.person.firstName()
    };
    const mainPage = new MainPage(page); 
    const registerPage = new RegisterPage(page);
    const yourFeedPage = new YourFeedPage(page);

    await mainPage.open(URL_UI);
    await mainPage.goToRegister();
    await registerPage.register(user.username, user.email, user.password);
    
    await expect(yourFeedPage.profileNameField).toBeVisible();
    await expect(yourFeedPage.profileNameField).toContainText(user.username);
});

/*
//Объявление функции: первый способ - function declaration
function getUsername(){
    return faker.person.firstName();
};

//Объявление функции: второй способ - function expression
const getEmail = function(){
    return faker.internet.email();
};

//Объявление функции: третий способ - arrow function
const getPassword = () => {
    return faker.internet.password({length: 10});
};

//пример короткой записи стрелочной функции (если одна строчка например)
// const getPassword = () => faker.internet.password();

test,describe('Authorization', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL_UI);
    });
    test('Valid login+password', async ({ page }) => {
        const USERNAME = getUsername();
        //  const EMAIL = faker.internet.email(); - вынесли в функцию
        //const PASSWORD = faker.internet.password(); - вынесли в функцию
        await page.getByText('Sign up').click();
        await page.getByPlaceholder('Your Name').click();
        await page.getByPlaceholder('Your Name').fill(USERNAME);
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(getEmail());
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(getPassword());
        await page.getByRole('button', { name: 'Sign up' }).click();
        await expect(page.getByAltText(USERNAME)).toBeVisible();
    });

    // Пример второго теста в этом же тест-сьюте
    test('Invalid login+password', async ({ page }) => {
        const USERNAME = getUsername();
        await page.goto(URL_UI);
        await page.getByText('Sign up').click();
        await page.getByPlaceholder('Your Name').click();
    await page.getByPlaceholder('Your Name').fill(USERNAME);
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(getEmail());
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(getPassword());
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByAltText(USERNAME)).toBeVisible();
    }); 
}); 
*/
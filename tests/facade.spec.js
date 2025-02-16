import { test, expect } from "@playwright/test";
// todo
import { MainPage, RegisterPage, YourFeedPage } from "../src/pages/index";
import { ArticleBuilder, UserBuilder } from "../src/helpers/builder/index";

test.describe("Шаблон", () => {
     test.beforeEach(async ({ page }) => {
          const mainPage = new MainPage(page);
          const registerPage = new RegisterPage(page);
          const yourfeedPage = new YourfeedPage(page);
          const userBuilder = new UserBuilder().addEmail().addUsername().addPassword(11).generate();

          await mainPage.open();
          await mainPage.gotoRegister();
          await registerPage.register(userBuilder.username, userBuilder.email, userBuilder.password);

          await expect(yourfeedPage.profileNameField).toBeVisible();
          await expect(yourfeedPage.profileNameField).toContainText(userBuilder.username);
     });

     test("Это новый тест", async ({ page }) => {
          const yourfeedPage = new YourfeedPage(page);
          await yourfeedPage.gotoArticle();
          await expect(yourfeedPage.profileNameField).toBeVisible();
     });
});

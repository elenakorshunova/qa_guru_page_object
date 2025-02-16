import { faker } from "@faker-js/faker";

export class UserBuilder {
     addEmail() {
          this.userEmail = faker.internet.email();
          return this;
     }
     addPassword(symbol = 10) {
          this.userPassword = faker.internet.password({ length: symbol });
          return this;
     }
     addUsername() {
          this.userName = faker.person.firstName();
          return this;
     }
     generate() {
          return {
               email: this.userEmail,
               username: this.userName,
               password: this.userPassword,
          };
     }
}
//     const userBuilder = new UserBuilder().addEmail().addPassword(5).generate();
// this
/*
1) {} - создается новый объект
2) 	this.userEmail = faker.internet.email(); - возьми объект и добавь ему свойство емейл и присвой значением из фейкеры
{ userEmail: "ya@ya.ru"
}
3) вызывем адд пассворд для этого объекта и добавляем новое поле (пароль) и снова возвращает объект
{ userEmail: "ya@ya.ru",
 userPassword: secretpass
}
 вызывается метод генерации и создается объект 2 со всеми этими значениями

*/

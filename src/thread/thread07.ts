/* 
	Допишите функцию валидации пользователя, которая проверяет несколько условий и бросает разные ошибки для разных случаев.
*/

export class UserValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'UserValidationError';
  }
}

export interface User {
  name: string;
  age: number;
  email: string;
}

export function validateUser(user: User): void {
  // проверка имени
  if (!user.name) {
    throw new UserValidationError('Name is required', 'name');
  }
  // проверка возраста
  if (user.age < 18) {
    throw new UserValidationError('Age must be at least 18', 'age');
  }
  // проверка email
  if (!user.email.includes('@')) {
    throw new UserValidationError('Invalid email format', 'email');
  }
}

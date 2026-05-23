/* 
	 Допишите функцию, которая бросает кастомную ошибку с дополнительными данными. В случае, если возраст меньше 18, функция должна бросить ошибку ValidationError с сообщением "Age must be at least 18" и полем "age".
*/

export class ValidationError extends Error {
	field: string;
	constructor(message: string, field: string) {
		super(message);
		this.name = 'ValidationError';
		this.field = field;
	}
}

export function validateUserAge(age: number): void {
  // если возраст меньше 18 - бросаем кастомную ValidationError
  if (age < 18) {
    throw new ValidationError('Age must be at least 18', 'age');
  }
}
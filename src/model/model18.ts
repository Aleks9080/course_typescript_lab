/* 
	Создайте примесь с методом log, которая выводит в консоль сообщение в формате "[LOG]: <сообщение>"
*/



export function Loggable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    // добавляем метод log в миксин
    log(message: string): void {
      console.log(`[LOG]: ${message}`);
    }
  };
}

export class User {
  name: string = '';
}

export const LoggableUser = Loggable(User);
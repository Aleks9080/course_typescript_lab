/* 
	В классе Circle переопределите метод draw, чтобы он сначала вызывал метод draw у родительского класса Shape, а затем выводил в консоль "Drawing circle".
*/

export class Shape {
  draw(): void {
    console.log("Drawing shape");
  }
}


export class Circle extends Shape {
  override draw(): void {
    // сначала вызываем draw родителя, потом выводим своё сообщение
    super.draw();
    console.log("Drawing circle");
  }
}

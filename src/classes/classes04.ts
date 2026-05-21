/* 
	Создать класс Point, который принимает координаты точки либо отдельно (по оси X и Y), либо сразу массивом координат [X,Y,Z].
*/

export class Point {
    coords: number[];
    constructor(x: number, y: number);   // Конструктор с двумя числами
    constructor(coords: [number, number]);       // Конструктор с массивом чисел
    constructor(...args: any[]) {
        // определяем способ вызова: если передан массив — используем его,
        // иначе собираем координаты из двух отдельных аргументов
        if (args.length === 1 && Array.isArray(args[0])) {
            this.coords = args[0];
        } else {
            this.coords = [args[0], args[1]];
        }
    }
}

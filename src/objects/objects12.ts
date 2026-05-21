/* 
	Функция add должна добавлять переданное значение к предыдущему значению, но она работает некорректно. Почему? Исправьте ошибку.
*/

const calculator = {
    previousValue: 0,
    // стрелочная функция не имеет своего this - он берётся из внешней области,
    // поэтому меняем на обычный метод, чтобы this указывал на calculator
    add(value: number) {
        return this.previousValue += value;
    }
};

export function add(value: number) {
	return calculator.add(value);
}

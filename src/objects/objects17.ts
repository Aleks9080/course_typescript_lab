/* 
	Реализовать функцию removeField<T, K extends keyof T>(obj: T, field: K): Omit<T, K>, которая удаляет поле из объекта.
*/

export function removeField<T, K extends keyof T>(obj: T, field: K): Omit<T, K> {
    // деструктурируем объект, исключая удаляемое поле, и возвращаем новый объект
    const { [field]: _, ...rest } = obj;
    return rest;
}


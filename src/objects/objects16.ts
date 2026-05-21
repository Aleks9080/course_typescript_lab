/* 
	Реализовать функцию addToCollection<T, K extends string>(obj: Record<K, T[]>, collectionName: K, element: T): Record<K, T[]>, которая добавляет элемент в существующую коллекцию в объекте.
*/

export function addToCollection<T, K extends string>(
    obj: Record<K, T[]>,
    collectionName: K,
    element: T
): Record<K, T[]> {
    // возвращаем новый объект и новую копию массива, чтобы не мутировать оригинал
    return {
        ...obj,
        [collectionName]: [...obj[collectionName], element],
    };
}


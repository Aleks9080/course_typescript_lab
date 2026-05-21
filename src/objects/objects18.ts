/* 
	Реализовать метод uppercaseProfileNames в объекте user, который возвращает новый объект, такого же типа как и исходный, но со значением name в верхнем регистре.
*/

export const user = {
    profile: { name: 'Alice', age: 30 },
    uppercaseProfileNames() {
        // возвращаем новый объект с глубокой копией profile и name в верхнем регистре
        return {
            ...this,
            profile: {
                ...this.profile,
                name: this.profile.name.toUpperCase(),
            },
        };
    }
};
/* 
	Дописать функцию getFastestUserData, которая возвращает результат первого завершившегося промиса (пользователь или данные пользователя).
	Подсказка: используется Promise.race
*/

import { fetchUser, fetchUserData, type User } from "./promises";

export function getFastestUserData(id: number): Promise<User> {
  // запускаем оба запроса и возвращаем результат того, кто быстрее завершится
  return Promise.race([
    fetchUser(id),
    fetchUserData(id)
  ]);
}

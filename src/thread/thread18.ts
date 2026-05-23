/* 
	Дописать функцию getUserWithFallback, которая пытается получить пользователя с помощью fetchUser, а при ошибке пробует получить данные пользователя c помощью fetchUserData.
*/

import { fetchUser, fetchUserData, type User } from "./promises";

export async function getUserWithFallback(id: number): Promise<User> {
  try {
    // сначала пытаемся получить пользователя через fetchUser
    return await fetchUser(id);
  } catch {
    // если не получилось берём данные пользователя через fetchUserData
    return await fetchUserData(id);
  }
}

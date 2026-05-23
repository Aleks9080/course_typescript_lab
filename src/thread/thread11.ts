/* 
	Дописать функцию getUserWithData, которая сначала получает пользователя, затем его данные и возвращает объект { user: User, data: User }.
*/

import { fetchUser, fetchUserData, type User } from "./promises";

export async function getUserWithData(id: number): Promise<{ user: User; data: User }> {
  // сначала получаем пользователя, затем его данные
  const user = await fetchUser(id);
  const data = await fetchUserData(id);
  return { user, data };
}
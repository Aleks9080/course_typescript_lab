/* 
	Дописать функцию getAllUserInfo, которая возвращает результаты всех запросов независимо от их успешности.
*/

import { fetchUser, fetchUserData, fetchUserPosts, fetchUserSettings } from "./promises";

export function getAllUserInfo(id: number): Promise<Array<PromiseSettledResult<any>>> {
  // запускаем все четыре запроса и ждём завершения всех, независимо от результата
  return Promise.allSettled([
    fetchUser(id),
    fetchUserData(id),
    fetchUserPosts(id),
    fetchUserSettings(id)
  ]);
}

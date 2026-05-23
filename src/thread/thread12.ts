/* 
	Дописать функцию getUserProfile, которая параллельно получает пользователя, его данные и настройки.
*/

import { fetchUser, fetchUserData, fetchUserSettings } from "./promises";
import type { User } from "./thread07";

export async function getUserProfile(id: number): Promise<{
  user: User;
  data: User;
  settings: { theme: string };
}> {
  // запускаем все три запроса параллельно
  const [user, data, settings] = await Promise.all([
    fetchUser(id),
    fetchUserData(id),
    fetchUserSettings(id),
  ]);

  return { user, data, settings };
}
/* 
	Дописать функцию fetchUserWithTimeout, которая отклоняет промис, если запрос занимает больше 100ms.
*/

import { fetchUser, type User } from "./promises";

export function fetchUserWithTimeout(id: number, timeout = 100): Promise<User> {
  let timer: ReturnType<typeof setTimeout>;

  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error('Request timeout')), timeout);
  });

  return Promise.race([
    fetchUser(id).then((user) => {
      clearTimeout(timer);
      return user;
    }),
    timeoutPromise
  ]);
}

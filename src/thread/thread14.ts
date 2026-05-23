/* 
	Дописать функцию getUserPostsWithAuthor, которая получает посты пользователя, а затем информацию об авторе каждого поста.
*/

import { fetchUser, fetchUserPosts, type Post, type User } from "./promises";

export async function getUserPostsWithAuthor(userId: number): Promise<Array<Post & { author: User }>> {
  // получаем посты пользователя
  const posts = await fetchUserPosts(userId);

  // для каждого поста подгружаем автора и собираем результат
  const postsWithAuthors = await Promise.all(
    posts.map(async (post) => {
      const author = await fetchUser(post.userId);
      return { ...post, author };
    })
  );

  return postsWithAuthors;
}

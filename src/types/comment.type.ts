export type CommentType = {
  id: string,
  text: string,
  date: string,
  likesCount: number,
  dislikesCount: number,
  likeApplied?: boolean,
  dislikeApplied?: boolean,
  user: {
    id: string,
    name: string
  }
}

import { GithubUser, LocalUser } from "types";

export const extractLocalUser = (user: GithubUser): LocalUser => ({
  id: user.id,
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  created: user.created_at,
  bio: user.bio,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  location: user.location,
  twitter: user.twitter,
  blog: user.blog,
  company: user.company
})
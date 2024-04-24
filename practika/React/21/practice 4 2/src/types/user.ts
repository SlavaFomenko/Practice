export type LocalUser = {
  id: number,
  login: string,
  avatar: string,
  name: string,
  created: string,
  bio: string,
  repos: number,
  followers: number,
  following: number,
  location: string,
  twitter: string,
  blog: string,
  company: string
}

export type GithubUser = {
  id: number,
  login: string,
  avatar_url: string,
  name: string,
  created_at: string,
  bio: string,
  public_repos: number,
  followers: number,
  following: number,
  location: string,
  twitter: string,
  blog: string,
  company: string
}

export type GithubError = {
  message: string,
  documentaion_url: string
}
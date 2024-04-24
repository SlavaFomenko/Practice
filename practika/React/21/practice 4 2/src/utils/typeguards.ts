import { GithubError, GithubUser } from "types";

export const isGithubUser = (resp: GithubUser | GithubError): resp is GithubUser => 'id' in resp;
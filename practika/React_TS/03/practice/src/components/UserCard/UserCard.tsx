import { UserStat } from 'components/UserStat';
import styles from './UserCard.module.scss';
import { LocalUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalUser { }

export const UserCard = (props: UserCardProps) => {

  return (
    <div className={styles.userCard}>
      <img
        src={props.avatar}
        alt={props.login}
        className={styles.avatar}
      />
      <UserTitle
        name={props.name}
        login={props.login}
        created={props.created}
      />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || "This is profile has no bio"}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  )
};
import { LocalUser } from 'types';
import styles from './UserStat.module.scss';

interface UserStatProps extends Pick<LocalUser,
  "repos" | "followers" | "following"> {
}

interface Stat {
  title: string,
  data: string | number
}

const Stat = ({ title, data }: Stat) => (
  <div className={styles.info}>
    <div className={styles.infoTitle}>{title}</div>
    <div className={styles.infoNumber}>{data}</div>
  </div>
)

export const UserStat = ({ repos, followers, following }: UserStatProps) => {

  return (
    <div className={styles.userStat}>
      <Stat title="Repos" data={repos}/>
      <Stat title="Followers" data={followers}/>
      <Stat title="Following" data={following}/>
    </div>
  )
};
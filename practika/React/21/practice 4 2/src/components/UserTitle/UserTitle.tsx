import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { LocalUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps extends Pick<LocalUser, "name" | "login" | "created"> {}

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
    const joinedDate = format(new Date(created), 'd MMM yyyy', { locale: enGB });

    return (
        <div className={styles.userTitle}>
            <h2>{name}</h2>
            <h3>{login}</h3>
            <span>{joinedDate}</span>
        </div>
    );
};

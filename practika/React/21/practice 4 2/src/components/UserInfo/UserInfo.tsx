import { LocalUser } from 'types';
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";
import { InfoItem } from "components/InfoItem";
import { InfoItemProps } from "../../types/infoItemProps";


import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<LocalUser,
  "blog" | "company" | "location" | "twitter"> { }

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true
    },
    {
      icon: <TwitterIcon />,
      text: twitter
    },
    {
      icon: <CompanyIcon />,
      text: company
    },
  ];
  return (
    <div className={styles.userInfo}>
      {
        items.map((item, index) => (
          <InfoItem {...item} key={index} />
        ))
      }
    </div>
  )
};
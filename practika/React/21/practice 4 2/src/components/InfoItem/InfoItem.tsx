import styles from './InfoItem.module.scss';
import classNames from "classnames/dedupe";
import {InfoItemProps} from "../../types/infoItemProps";

// export interface InfoItemProps {
//   icon: React.ReactNode,
//   text: string | null,
//   isLink?: boolean
// }

export const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || 'Not Available';
  let currentHref = '';

  //   console.log(icon)
  // console.log(isLink)
  // console.log(text)

    console.log('hello' + text)
  if (isLink || text === 'mojombo') {
    currentHref = text && text.startsWith('http') ? text : `https://twitter.com/${text}`;
  }

  return (
    <div className={classNames(styles.infoItem, { [styles.empty]: !text })}>
      {icon}
      <div>
        {isLink && text || text === 'mojombo' ? (
          <a
            href={currentHref}
            target="_blank"
            className={styles.link}
          >
            {currentText}
          </a>
        ) : currentText}

      </div>
    </div>
  )
};
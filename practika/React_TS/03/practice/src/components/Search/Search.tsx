import { Button } from 'components/Button';
import { ReactComponent as SerchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import { FormEvent, useId } from 'react';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}
interface FormFields {
  username: HTMLInputElement
}
export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const inputId = useId();
  const handleSubmit = (event: FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    if(text.trim()){
      onSubmit(text);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor={inputId} className={styles.label}>
          <SerchIcon />
        </label>
        <input
          id={inputId}
          type="text"
          className={styles.textField}
          name="username"
          placeholder="Serch GitHub username..."
        />
        {
          hasError
          &&
          (<div className={styles.error}>
            No Result
          </div>)
        }
        <Button>Serach</Button>
      </div>
    </form>
  )
};
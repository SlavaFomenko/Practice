import styles from './Button.module.scss';

interface ButtonProps{
  children:string,
  onClick?:React.MouseEventHandler
}

export const Button = ({children, onClick}: ButtonProps)=>{

  return(
    <button 
    className={styles.button}
    onClick={onClick}
    >
        {children}
    </button>
  )
};
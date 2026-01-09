import styles from './Container.module.css';

type ContaineProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContaineProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

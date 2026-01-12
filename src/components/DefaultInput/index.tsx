import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

// Exemplo para definir props utilizando 'interface'
// interface DefaultInputProps extends React.ComponentProps<'input'>{
//   id: string;
//   labelText: string;
// }

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}

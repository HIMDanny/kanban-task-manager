import { ButtonWrapper } from './components/button-wrapper/ButtonWrapper';

interface Properties {
  className?: string;
  onClick?: () => void;
  text?: string;
  type: 'button' | 'submit';
  variant: 'primary' | 'secondary' | 'destructive';
}

const Button: React.FC<Properties> = ({
  onClick,
  text,
  type = 'button',
  className,
  variant = 'primary',
}: Properties) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type}
      className={className}
      variant={variant}
    >
      {text}
    </ButtonWrapper>
  );
};

export { Button };
export type { Properties };

import { ButtonWrapper } from './components/button-wrapper/ButtonWrapper';

interface Properties {
  className?: string;
  onClick?: () => void;
  size: 'large' | 'small';
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
  size = 'small',
}: Properties) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type}
      className={className}
      variant={variant}
      size={size}
    >
      {text}
    </ButtonWrapper>
  );
};

export { Button };
export type { Properties };

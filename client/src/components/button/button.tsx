import { ButtonWrapper } from './components/button-wrapper/ButtonWrapper';

interface Properties {
  className?: string;
  height: string;
  onClick?: () => void;
  text?: string;
  type: 'button' | 'submit';
  variant: 'primary' | 'secondary' | 'destructive';
  width: string;
}

const Button: React.FC<Properties> = ({
  onClick,
  text,
  type = 'button',
  className,
  variant = 'primary',
  width,
  height,
}: Properties) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type}
      className={className}
      variant={variant}
      width={width}
      height={height}
    >
      {text}
    </ButtonWrapper>
  );
};

export { Button };
export type { Properties };

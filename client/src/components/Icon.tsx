import type { IconType } from 'client/src/types/icon';

import { ReactComponent as BoardIcon } from '../assets/icons/board.svg';
import { ReactComponent as CancelIcon } from '../assets/icons/cancel.svg';
import { ReactComponent as CheckIcon } from '../assets/icons/check.svg';
import { ReactComponent as ChevronDownIcon } from '../assets/icons/chevron-down.svg';
import { ReactComponent as EyeIcon } from '../assets/icons/eye.svg';
import { ReactComponent as EyeSlashIcon } from '../assets/icons/eye-slash.svg';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';

interface IconProperties {
  icon: IconType;
}

const icons: Record<IconType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  board: BoardIcon,
  cancel: CancelIcon,
  check: CheckIcon,
  chevron: ChevronDownIcon,
  eye: EyeIcon,
  'eye-slash': EyeSlashIcon,
  menu: MenuIcon,
  moon: MoonIcon,
  sun: SunIcon,
};

const Icon: React.FC<IconProperties> = ({ icon }) => {
  const Svg = icons[icon];

  return <Svg />;
};

export { Icon, type IconProperties };

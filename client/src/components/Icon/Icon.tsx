import type { IconType } from 'client/src/types/icon';

import { ReactComponent as BoardIcon } from '../../assets/icons/board.svg';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg';
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg';
import { ReactComponent as ChevronDownIcon } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/eye-slash.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';

interface IconProperties {
  icon: IconType;
}

const Icon: React.FC<IconProperties> = ({ icon }) => {
  switch (icon) {
    case 'board': {
      return <BoardIcon />;
    }
    case 'cancel': {
      return <CancelIcon />;
    }
    case 'check': {
      return <CheckIcon />;
    }
    case 'chevron': {
      return <ChevronDownIcon />;
    }
    case 'eye': {
      return <EyeIcon />;
    }
    case 'eye-slash': {
      return <EyeSlashIcon />;
    }
    case 'menu': {
      return <MenuIcon />;
    }
    case 'moon': {
      return <MoonIcon />;
    }
    case 'sun': {
      return <SunIcon />;
    }

    default: {
      return;
    }
  }
};

export { Icon, type IconProperties };

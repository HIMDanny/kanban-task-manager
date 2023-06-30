import type { IconType } from 'client/src/types/icon';

import { BoardIcon } from './BoardIcon';
import { CancelIcon } from './CancelIcon';
import { CheckIcon } from './CheckIcon';
import { ChevronDownIcon } from './ChevronDownIcon';
import { EyeIcon } from './EyeIcon';
import { EyeSlashIcon } from './EyeSlashIcon';
import { MenuIcon } from './MenuIcon';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

interface IconProperties {
  icon: IconType;
}

// eslint-disable-next-line react/prop-types
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

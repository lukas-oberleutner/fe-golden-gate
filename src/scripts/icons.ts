// Icon
import {
  iconBasket,
  iconNotification,
  iconUser,
  iconArrowTop,
  iconArrowDown,
  iconArrowLeft,
  iconArrowRight,
  iconSquares,
  iconRows,
  iconMetal,
  iconCrypto,
  iconChart,
  iconHelp,
  iconPhone,
  iconMenu,
  iconClose,
  iconInStore,
  iconUnavailable,
  iconUDots,
  iconSearch,
} from '../theme/icons.ts';

const icons = {
  'basket': iconBasket,
  'notification': iconNotification,
  'user': iconUser,
  'arrow-top': iconArrowTop,
  'arrow-down': iconArrowDown,
  'arrow-left': iconArrowLeft,
  'arrow-right': iconArrowRight,
  'squares': iconSquares,
  'rows': iconRows,
  'metal': iconMetal,
  'crypto': iconCrypto,
  'chart': iconChart,
  'help': iconHelp,
  'phone': iconPhone,
  'menu': iconMenu,
  'close': iconClose,
  'in-store': iconInStore,
  'unavailable': iconUnavailable,
  'dots': iconUDots,
  'search': iconSearch,
};

export const loadIcons = () => {
  const iconElements = document.querySelectorAll('.c-icon');

  iconElements.forEach(iconElement => {
    const iconName = iconElement.getAttribute('data-icon');
    if (iconName && icons[iconName as keyof typeof icons]) {
      iconElement.innerHTML = icons[iconName as keyof typeof icons];
    } else {
      console.error(`Ikona "${iconName}" nenalezena.`);
    }
  });
}

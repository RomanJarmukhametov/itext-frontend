import React from 'react';
import { ProfessionalIcon, SpecializedIcon, AutomationIcon } from '@/components/common/icons';

export function getIcon(name: string) {
  switch (name) {
    case 'Professional':
      return React.createElement(ProfessionalIcon);
    case 'Specialized':
      return React.createElement(SpecializedIcon);
    case 'Automation':
      return React.createElement(AutomationIcon);
    default:
      return null;
  }
}

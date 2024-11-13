import React from 'react';
import {
  ProfessionalIcon,
  SpecializedIcon,
  AutomationIcon,
  ExperienceIcon,
  DeadlineIcon,
  PrivacyIcon,
  SupportIcon,
  SolutionsIcon,
  CultureIcon,
} from '@/components/common/icons';

export function getIcon(name: string) {
  switch (name) {
    case 'Professional':
      return React.createElement(ProfessionalIcon);
    case 'Specialized':
      return React.createElement(SpecializedIcon);
    case 'Automation':
      return React.createElement(AutomationIcon);
    case 'Experience':
      return React.createElement(ExperienceIcon);
    case 'Deadline':
      return React.createElement(DeadlineIcon);
    case 'Privacy':
      return React.createElement(PrivacyIcon);
    case 'Support':
      return React.createElement(SupportIcon);
    case 'Solutions':
      return React.createElement(SolutionsIcon);
    case 'Culture':
      return React.createElement(CultureIcon);
    default:
      return null;
  }
}

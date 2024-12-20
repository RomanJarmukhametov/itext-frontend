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
  ProfessionalTranslationsIcon,
  SpecializedTranslationsIcon,
  ProcessAutomationIcon,
  OrderIcon,
  TranslationAndVerificationIcon,
  DeliveryIcon,
  ShieldIcon,
  ArrowRightIcon,
  ArrowDownIcon,
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
    case 'ProfessionalTranslations':
      return React.createElement(ProfessionalTranslationsIcon);
    case 'SpecializedTranslations':
      return React.createElement(SpecializedTranslationsIcon);
    case 'ProcessAutomation':
      return React.createElement(ProcessAutomationIcon);
    case 'Order':
      return React.createElement(OrderIcon);
    case 'TranslationAndVerification':
      return React.createElement(TranslationAndVerificationIcon);
    case 'Delivery':
      return React.createElement(DeliveryIcon);
    case 'Shield':
      return React.createElement(ShieldIcon);
    case 'ArrowRight':
      return React.createElement(ArrowRightIcon);
    case 'ArrowDown':
      return React.createElement(ArrowDownIcon);
    default:
      return null;
  }
}

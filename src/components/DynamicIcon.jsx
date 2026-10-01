import React from 'react';
import {
  Building2,
  Rocket,
  Briefcase,
  LayoutGrid,
  Code2,
  Globe,
  Sparkles,
  Utensils,
  PartyPopper,
  Camera,
  ShoppingBag,
  Dumbbell,
  GraduationCap,
  Hotel,
  Wrench,
  Target,
  Smartphone,
  MessageSquare,
  Code,
  CheckCircle2,
  LifeBuoy,
  HelpCircle
} from 'lucide-react';

const iconMap = {
  Building2,
  Rocket,
  Briefcase,
  LayoutGrid,
  Code2,
  Globe,
  Sparkles,
  Utensils,
  PartyPopper,
  Camera,
  ShoppingBag,
  Dumbbell,
  GraduationCap,
  Hotel,
  Wrench,
  Target,
  Smartphone,
  MessageSquare,
  MessageSquareCheck: MessageSquare,
  Code,
  CheckCircle2,
  LifeBuoy,
  HelpCircle
};

/**
 * Renders a mapped Lucide icon with zero bundle bloat and a safe fallback.
 */
export const DynamicIcon = ({ name, className = "w-5 h-5", ...props }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} aria-hidden="true" {...props} />;
};

export default DynamicIcon;

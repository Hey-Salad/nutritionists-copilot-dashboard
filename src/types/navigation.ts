// src/types/navigation.ts
import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

export interface NavigationLinkProps {
  item: NavigationItem;
  mobile?: boolean;
  onClose?: () => void;
}
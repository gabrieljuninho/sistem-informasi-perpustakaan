import { ReactNode } from "react";

export interface IBackButtonProps {
  href: string;
  label: string;
}

export interface IHeaderProps {
  label: string;
}

export interface ICardWrapperProps {
  children: ReactNode;
  headerLabel: string;
}

import { create } from 'domain';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement
}

export const Portal = ({ children, element = document.body }: PortalProps) => createPortal(children, element);

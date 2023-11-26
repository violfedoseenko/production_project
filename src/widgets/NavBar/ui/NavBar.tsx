/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export function NavBar({ className }: NavBarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const { t } = useTranslation();

    const onShowModal = () => {
        setIsAuthModal(true);
    };

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>
                    {t('Вход')}
                </Button>
            </div>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
}

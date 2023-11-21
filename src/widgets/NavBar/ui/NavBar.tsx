import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export function NavBar({ className }: NavBarProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
}

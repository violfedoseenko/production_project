import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavBarProps {
	className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
	return ( 
		<div className={classNames(cls.navbar, {}, [className])}>
			<ThemeSwitcher/>
			<div className={cls.links}>
				<AppLink to={'/'} theme={AppLinkTheme.SECONDARY}> Главная </AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}> О сайте </AppLink>
			</div>
		</div>
	 );
}



import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SideBarProps {
	className?: string;
}

export const SideBar = ({className}: SideBarProps) => {
	const [ collapsed, setCollapsed ] = useState(false)

	const onToggle = () => {
		setCollapsed(prev=> !prev)
	}

	return (
		<div className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				{/* langSwitcher */}
			</div>
		</div>
	);
}
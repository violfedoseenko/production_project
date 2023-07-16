// record - создает тип, который является записью с ключами, определенными в первом параметре, 
// и значениями типа, определенного во втором параметре.
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]):string {
	return [
		cls,
		...additional,
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className)
	]
	.join(' ')

}

classNames('remove-btn', { hovered: false, selectable: true, red: true }, ['pdg'])
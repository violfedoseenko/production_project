// record - создает тип, который является записью с ключами, определенными в первом параметре,
// и значениями типа, определенного во втором параметре.
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []):string {
    return [
        cls,
        // доп классы не обязательны, потому отсекаем возможные значения undefind
        ...additional.filter(Boolean),
        ...Object.entries(mods)
        // _ в данном случае подразумевает первый аргумент className
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}

classNames('remove-btn', { hovered: false, selectable: true, red: true }, ['pdg']);

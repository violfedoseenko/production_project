import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

// дефолтный onChange принимает event, а не value
// потому используем тип Omit, котороый позволяет забрать
// из типа все нужные пропсы, при этом исключив ненужные
// 1 арг - то что хотим забрать, 2 - что хотим исключить
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    type?: string;
    autofocus?: boolean;
    value?: string;
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        autofocus,
        type = 'text',
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <input
                type={type}
                value={value}
                className={cls.input}
                onChange={onChangeHandler}
                ref={ref}
                {...otherProps}
            />
        </div>
    );
});

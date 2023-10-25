import { useEffect, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
// import { ErrorBoundary } from './providers/ErrorBoundary';

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />

                <div className="content-page">
                    <SideBar />
                    {/* <ErrorBoundary> */}
                    <AppRouter />
                    {/* </ErrorBoundary> */}
                </div>
            </Suspense>
        </div>
    );
}

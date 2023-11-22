import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

// function App() {
//     const { theme } = useTheme();

//     return (
//         <div className={classNames('app', {}, [theme])}>
//             <Suspense fallback="">
//                 <NavBar />

//                 <div className="content-page">
//                     <SideBar />
//                     {/* <ErrorBoundary> */}
//                     <AppRouter />
//                     {/* </ErrorBoundary> */}
//                 </div>
//             </Suspense>
//         </div>
//     );
// }

// module.exports = App;

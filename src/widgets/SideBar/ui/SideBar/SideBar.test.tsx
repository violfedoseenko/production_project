import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { componentRender } from '../../../../shared/lib/tests/componentRender/componentRender';

describe('sidebar', () => {
    test('render test', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle test', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

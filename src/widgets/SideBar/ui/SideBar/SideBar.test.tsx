import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('sidebar', () => {
    test('render test', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle test', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

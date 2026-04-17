// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GasOptimizer title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GasOptimizer/i);
    expect(titleElement).toBeInTheDocument();
});

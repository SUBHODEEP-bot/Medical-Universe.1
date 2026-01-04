
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(<App />);

// Register service worker in production-like environments
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/sw.js')
			.then((reg) => {
				console.log('Service worker registered.', reg);
			})
			.catch((err) => {
				console.warn('Service worker registration failed:', err);
			});
	});
}

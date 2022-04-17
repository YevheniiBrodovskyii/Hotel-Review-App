import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

serviceWorkerRegistration.register();



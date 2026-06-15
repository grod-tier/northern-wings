import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

const el = Object.assign(document.createElement('div'), { id: '__agentation__' });
document.body.appendChild(el);
createRoot(el).render(
  React.createElement(Agentation, { endpoint: 'http://localhost:4747' })
);

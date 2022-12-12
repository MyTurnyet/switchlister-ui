import { setupServer } from 'msw/node';
import { handlers } from './defaultHandlers';

export const mswServer = setupServer(...handlers);

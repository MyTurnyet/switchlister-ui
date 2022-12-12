import { setupServer } from 'msw/node';
import { handlers } from './handlers/ApiHandler';

export const mswServer = setupServer(...handlers);

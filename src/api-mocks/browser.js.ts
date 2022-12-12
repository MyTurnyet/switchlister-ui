import { setupWorker } from 'msw'
import { handlers } from './defaultHandlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);

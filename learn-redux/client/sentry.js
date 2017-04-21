import Raven from 'raven-js';

const sentry_key = '0b96da67ebf9446a8cd0a2e27a4d21bc';
const sentry_app = '160613';

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

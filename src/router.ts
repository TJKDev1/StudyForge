// ============================================
// ROUTER — hash-based SPA router
// ============================================

type RouteHandler = (params?: Record<string, string>) => void;

interface Route {
  pattern: string;
  handler: RouteHandler;
}

const routes: Route[] = [];
let notFoundHandler: RouteHandler = () => {};

export function addRoute(pattern: string, handler: RouteHandler): void {
  routes.push({ pattern, handler });
}

export function setNotFound(handler: RouteHandler): void {
  notFoundHandler = handler;
}

export function navigate(hash: string): void {
  window.location.hash = hash;
}

export function getCurrentRoute(): string {
  return window.location.hash || '#/';
}

function matchRoute(hash: string): { handler: RouteHandler; params: Record<string, string> } | null {
  const path = hash.replace('#', '') || '/';

  for (const route of routes) {
    if (route.pattern === path) {
      return { handler: route.handler, params: {} };
    }
  }
  return null;
}

function handleRoute(): void {
  const hash = getCurrentRoute();
  const match = matchRoute(hash);
  if (match) {
    match.handler(match.params);
  } else {
    notFoundHandler();
  }
}

export function initRouter(): void {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

// ============================================
// ROUTER — Improved hash-based SPA router
// ============================================
//
// Supports parameterized routes like /course/:courseId/:sectionId

type RouteHandler = (params: Record<string, string>) => void;

interface Route {
  pattern: string;
  segments: string[];
  handler: RouteHandler;
}

const routes: Route[] = [];
let notFoundHandler: RouteHandler = () => {};

function parsePattern(pattern: string): string[] {
  return pattern.split('/').filter(Boolean);
}

export function addRoute(pattern: string, handler: RouteHandler): void {
  routes.push({
    pattern,
    segments: parsePattern(pattern),
    handler,
  });
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
  const pathSegments = path.split('/').filter(Boolean);

  for (const route of routes) {
    if (route.segments.length !== pathSegments.length) continue;

    const params: Record<string, string> = {};
    let match = true;

    for (let i = 0; i < route.segments.length; i++) {
      const routeSeg = route.segments[i];
      const pathSeg = pathSegments[i];

      if (routeSeg.startsWith(':')) {
        params[routeSeg.slice(1)] = decodeURIComponent(pathSeg);
      } else if (routeSeg !== pathSeg) {
        match = false;
        break;
      }
    }

    if (match) {
      return { handler: route.handler, params };
    }
  }

  // Check root route
  if (pathSegments.length === 0) {
    const rootRoute = routes.find(r => r.pattern === '/');
    if (rootRoute) return { handler: rootRoute.handler, params: {} };
  }

  return null;
}

function handleRoute(): void {
  const hash = getCurrentRoute();
  const match = matchRoute(hash);
  if (match) {
    match.handler(match.params);
  } else {
    notFoundHandler({});
  }
}

export function initRouter(): void {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

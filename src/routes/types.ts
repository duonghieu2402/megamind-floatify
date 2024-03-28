export interface IRouter {
  path: string;
  component: () => JSX.Element;
  layout?: () => JSX.Element | null;
}

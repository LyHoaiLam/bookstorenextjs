export type ViewportBoundary = Omit<DOMRect, 'toJSON'>;

export type GlobalStates = {
  mobileCheck?: boolean;
  viewportBoundary: ViewportBoundary;
};

export type GlobalActions = {
  handleSafeAreaInset: (value: ViewportBoundary) => void;
};

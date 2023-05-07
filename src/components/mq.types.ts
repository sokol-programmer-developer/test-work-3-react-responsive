export interface IMediaQueryProps {
  orientation?: 'portrait' | 'landscape';
  maxHeight?: number | `${number}px`;
  minHeight?: number | `${number}px`;
  maxWidth?: number | `${number}px`;
  minWidth?: number | `${number}px`;
  maxResolution?: number | `${number}dppx`;
  minResolution?: number | `${number}dppx`;
}
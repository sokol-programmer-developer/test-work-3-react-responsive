import React, { FC, useMemo } from 'react';
import useMediaQuery from './react-document-query';
import { IMediaQueryProps } from './mq.types';

export function getParam(type: string, value: number | string, form?: string) {
  if (typeof value === 'number') {
    return `(${type}: ${value}${form ? form : ''})`;
  } else {
    return `(${type}: ${value})`;
  }
}
export function joinParam(mas: string[]) {
  return mas.join(' and ');
}

function getQuery(arg: IMediaQueryProps) {
  const mas: string[] = [];

  if (typeof arg.minWidth !== 'undefined') {
    mas.push(getParam('min-width', arg.minWidth, 'px'));
  }
  if (typeof arg.maxWidth !== 'undefined') {
    mas.push(getParam('max-width', arg.maxWidth, 'px'));
  }
  if (typeof arg.minHeight !== 'undefined') {
    mas.push(getParam('min-height', arg.minHeight, 'px'));
  }
  if (typeof arg.maxHeight !== 'undefined') {
    mas.push(getParam('max-height', arg.maxHeight, 'px'));
  }
  if (typeof arg.orientation !== 'undefined') {
    mas.push(getParam('orientation', arg.orientation));
  }
  if (typeof arg.minResolution !== 'undefined') {
    mas.push(getParam('min-resolution', arg.minResolution, 'dppx'));
  }
  if (typeof arg.maxResolution !== 'undefined') {
    mas.push(getParam('max-resolution', arg.maxResolution, 'dppx'));
  }

  let query: string = joinParam(mas);
  return query;
}
export interface callBackComponent {
  (matches: boolean): React.ReactNode;
}
export interface MediaQueryProps extends IMediaQueryProps {
  children: React.ReactNode | callBackComponent;
}
const MediaQuery: FC<MediaQueryProps> = ({
  children,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  orientation,
  minResolution,
  maxResolution,
}) => {
  const query = useMemo(
    () => getQuery({ minWidth, maxWidth, minHeight, maxHeight, orientation, minResolution, maxResolution }),
    [minWidth, maxWidth, minHeight, maxHeight, orientation, minResolution, maxResolution],
  );
  const isDesktopOrLaptop = useMediaQuery({
    query,
  });

  return <>{typeof children === 'function' ? children(isDesktopOrLaptop) : isDesktopOrLaptop ? children : null}</>;
};

export default MediaQuery;
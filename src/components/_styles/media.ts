export enum BreakPoint {
  largest,
  large,
  medium, 
  small,
  smallest
}

export const respond = (breakPoint: BreakPoint, content: string) => {
  switch (breakPoint) {
    case BreakPoint.largest:
      return `@media only screen and (max-width: 75rem ) { ${content} }`;
    case BreakPoint.large:
      return `@media only screen and (max-width: 68.75rem ) { ${content} }`;
    case BreakPoint.medium:
      return `@media only screen and (max-width: 56.25rem ) { ${content} }`;
    case BreakPoint.small:
        return `@media only screen and (max-width: 37.5rem ) { ${content} }`;
    case BreakPoint.smallest:
        return `@media only screen and (max-width: 31.25rem ) { ${content} }`;

    default:
      return ``;
  }
};

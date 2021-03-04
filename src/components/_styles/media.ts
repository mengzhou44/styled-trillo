export enum BreakPoint {
    largest,
    large,

}

export const respond  =  (breakPoint:BreakPoint, content: string) => {

  switch(breakPoint) {

      case  BreakPoint.largest:  
          return  `@media only screen and (max-width: 75rem ) { ${content} }`
      case  BreakPoint.large:  
          return  `@media only screen and (max-width: 68.75rem ) { ${content} }`
       
      default:  
          return   ``
     
  }
}
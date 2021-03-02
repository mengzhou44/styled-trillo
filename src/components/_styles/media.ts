export enum DeviceType {
    phone,
    smallTablet,
    largeTablet,
    desktop,
    largeDesktop
}

export const respond  =  (device:DeviceType, content: string) => {


  switch(device) {
      case   DeviceType.phone: 
            return  `@media only screen and (max-width: 600px ) { ${content} }`
       
      case   DeviceType.smallTablet:  
          return  `@media only screen and (max-width: 900px ) { ${content} }`
        

      case   DeviceType.largeTablet:  
          return  `@media only screen and (max-width: 1200px ) { ${content} }`
       
      default:  
          return  `@media only screen and (min-width: 1800px ) { ${content} }`
     
  }
}
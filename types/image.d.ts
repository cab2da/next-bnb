// declare module '*.svg' {
//     const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default value;
//   }

  // declare module "*.svg" {
  //   const content: any;
  //   export default content;
  // }

  declare module '*.svg' {
    import React = require('react');
  
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const value: string;
    export default value;
  }
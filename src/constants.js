/* eslint-disable no-useless-escape */
/* eslint-disable-format */
import React from "react";
export const WELCOME_TEXT = [
  ` ██╗  ██╗██╗       ██╗███╗   ███╗             
  ██║  ██║██║       ██║████╗ ████║             
  ███████║██║       ██║██╔████╔██║             
  ██╔══██║██║       ██║██║╚██╔╝██║             
  ██║  ██║██║▄█╗    ██║██║ ╚═╝ ██║             
  ╚═╝  ╚═╝╚═╝╚═╝    ╚═╝╚═╝     ╚═╝             
                                               
  ██╗███████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗
  ██║██╔════╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝
  ██║███████╗███████║███████║██╔██╗ ██║█████╔╝ 
  ██║╚════██║██╔══██║██╔══██║██║╚██╗██║██╔═██╗ 
  ██║███████║██║  ██║██║  ██║██║ ╚████║██║  ██╗
  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
                                               `,
];

export const WELCOME_MESSAGE = `This is a command line based interactive portfolio website.Have a look around and let me know how you liked it. 
Following are a few things you could do.
`;

export const COMMAND_LIST = [
  {
    name: "Showcase",
    description: "Show a list sample projects",
    route: "/showcase",
  },
  {
    name: "Resume",
    description: "Displays my resume on the screen",
    route: "/resume",
  },
  { name: "command 3", description: "command 3 desc" },
  { name: "command 4", description: "command 4 desc" },
];

export const CODE_SANDBOX_SHOWCASE = [
  {
    link: (
      <iframe
        src="https://codesandbox.io/embed/yq3jmxzpq1?codemirror=0"
        style={{
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="ShowCase FireWorks "
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    ),
    name: "FireWorks using P5.js",
  },
];

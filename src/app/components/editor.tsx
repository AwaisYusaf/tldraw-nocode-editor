"use client";

import StudioEditor from "@grapesjs/studio-sdk/react";
import "@grapesjs/studio-sdk/style";

export default function Editor({ showSidebar = true }) {
  return (
    <StudioEditor
      className="min-h-screen"
      options={{
        licenseKey: "ABPADTFSYAGUH567689",
        layout: {
          default: showSidebar
            ? undefined
            : {
                type: "row",
                style: { height: "100%" },
                children: [
                  {
                    type: "sidebarLeft",
                    style: {
                      alignItems: "center",
                      justifyContent: "center",
                      display: "none",
                    },
                    children: [
                      {
                        type: "button",
                        label: "Toggle Right Sidebar",
                        variant: "outline",
                        onClick: ({ editor }) =>
                          editor.runCommand("studio:sidebarRight:toggle"),
                      },
                    ],
                  },
                ],
              },
        },
        project: {
          type: "web",
          default: {
            pages: [
              { name: "Home", component: "<h1>Home page</h1>" },
              { name: "About", component: "<h1>About page</h1>" },
              { name: "Contact", component: "<h1>Contact page</h1>" },
            ],
          },
        },
      }}
    />
  );
}

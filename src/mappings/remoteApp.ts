export const remoteAppMap: Record<"vueApp" | "reactApp", () => Promise<any>> = {
  vueApp: () => import("vueApp/RemoteApp"),
  reactApp: () => import("reactApp/remoteReact"),
};

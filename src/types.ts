/* eslint-disable no-unused-vars */
// ts-nocheck
export interface Theme {
  background: string;
  body: string;
  bodyFade: string;
  highLight: string;
}

export interface FileState {
  name: string,
  children: FileState[],
  id: string
}

export enum PERMISSION {
  ROOT,
  USER
}

export interface FSState {
  fs: FileState[],
  permission: PERMISSION,
  currentDir: '/',
}

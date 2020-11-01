/* eslint-disable no-param-reassign */
import create from 'zustand';
// import produce from 'immer';
import { nanoid } from 'nanoid';
import { FSState, FileState, PERMISSION } from '../types';

const initialFSState: FSState = {
  fs: [{
    name: '/',
    children: [],
    id: '/',
  }],
  permission: PERMISSION.ROOT,
  currentDir: '/',
};

// export const immer = (config) => (set, get) => config((fn) => set(produce(fn)), get);

const store = (set) => ({
  fs: initialFSState,
  mkdir: ({ name }) => set((state) => {
    const { currentDir, fs: { children = [] } } = state;
    const queue :FileState[][] = [];
    queue.push(children);
    while (queue.length > 0) {
      const currChildren = queue.pop();
      const childQueue:FileState[] = [];
      currChildren?.forEach((currChild) => {
        if (currentDir === currChild?.id) {
          currChild?.children.push({
            name,
            children: [],
            id: nanoid(),
          });
          return;
        }
        currChild?.children.forEach((child :FileState) => childQueue.push(child));
      });
      if (childQueue.length > 0) queue.push(childQueue);
    }
    // console.log(name, state);
  }),
});

export default create(store);

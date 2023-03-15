import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useMyStore = create((set) => ({
    yearValue: [],
    categoryValue: [],
    setCategoryValue: (value) => set(() => ({ categoryValue: value })),
    setYearValue:(value) =>set(()=>({yearValue:value})),
  }));

  export const useMyCollectionStore = create(persist((set, get) => ({
    collection: get(() => JSON.parse(localStorage.getItem('my-collection-store'))) || [],
    addToCollection: (value) => set((state) => ({
        collection: [...state.collection, value]
    })),
    removeFromCollection: ({ movieId, type }) => set((state) => ({
        collection: state.collection.filter(item => item.movieId !== movieId || item.type !== type)
      }))
}), {
    name: 'my-collection-store',
    getInitialState: () => {
        // return an object with the initial state of your store
        return { collection: [] };
    },
    serialize: (value) => JSON.stringify(value), // serialize the state to JSON
    deserialize: (value) => JSON.parse(value) // deserialize the state from JSON
}));
  
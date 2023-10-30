import { create } from "zustand";

export const useCrearLlamada = create((set) => ({
    crearLlamada: false,
    toggleCrearLlamada: () => set((state) => ({
        crearLlamada: !state.crearLlamada
    }))

}))
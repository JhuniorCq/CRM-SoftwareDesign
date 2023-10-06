import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useCampanas = create(persist((set) => ({
    dataCampanas : [],
    addDataCampana : (campana) => set((state) => ({
        dataCampanas : [...state.dataCampanas, campana]
    })),
    
}), {
    name : 'data-campanas'
}))
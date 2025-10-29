import { useContext } from "react";
import { miContexto } from "../ProductContext";

//Mi hook personalizado (estaria evitando paso 1 y 2 de consumir el contexto)
export function useProducts() {
    return useContext(miContexto)
}
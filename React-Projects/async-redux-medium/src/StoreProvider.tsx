// src StoreProvider.tsx

import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, centralStore } from "./lib/store";

const StroreProvider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = centralStore()
        // Dispatch The Data You Want To Render On Initial and Page Reload Here
    }
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default StroreProvider
import { createContext, useContext, useState } from "react";

const PageContext = createContext(null);

export function usePage() {
    const pageContext = useContext(PageContext);

    if (pageContext === null) {
        throw new Error("Context error");
    }

    return pageContext;
}

export function PageProvider({ children }) {
    const [page, setPage] = useState("main");

    const value = {
        page,
        setPage,
    };

    return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

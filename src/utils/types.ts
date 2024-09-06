import { PropsWithChildren } from "react";


export type Action = {
    type: string,
    payload: any
}

export type AuthData = {
    isLoggedIn: boolean
}

export type SectionProps = PropsWithChildren<{
    title?: string;
}>;
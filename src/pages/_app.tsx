import { AppProps } from 'next/app'
import '@styles/globals.css'
import '@fontsource/inter'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className="">
            <Component {...pageProps} />
        </main>
    )
}

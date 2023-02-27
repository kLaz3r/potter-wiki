import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta
                    http-equiv='Content-Security-Policy'
                    content='default-src https:'
                />
                <meta
                    name='description'
                    content='Wiki for all the characters and spells in Harry Potter by J.K Rowling'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta
                    name='apple-mobile-web-app-title'
                    content='Harry Potter Wiki'
                />
                <meta name='application-name' content='Harry Potter Wiki' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#403d39'></meta>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

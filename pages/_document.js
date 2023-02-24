import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta
                    name='description'
                    content='Wiki for all the characters and spells in Harry Potter by J.K Rowling'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

import '../styles/globals.css';
// import { Footer } from '../components/footer';
// import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | donny-verduijn.nl',
        default: 'Donny Verduijn - Portfolio'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <title>Donny Verduijn - Frontend Architect</title>
            </head>
            <body className="antialiased text-white py-10">
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12 items-center">
                        {/* <Header /> */}
                        <div className="grow">{children}</div>
                        {/* <Footer /> */}
                </div>
            </body>
        </html>
    );
}

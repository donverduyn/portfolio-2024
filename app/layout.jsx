import '../styles/globals.css';
// import { Footer } from '../components/footer';
// import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | donverduyn.com',
        default: 'Don Verduyn - Personal site'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <title>Don Verduyn - Frontend Architect</title>
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

import './globals.css';

export const metadata = {
  title: 'Mick Daniel Morales',
  description: 'Portfolio website for Mick Daniel Morales',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import './globals.css'

export const metadata = {
  title: 'Expenses',
  description:
    'Real-time, open source, expense tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

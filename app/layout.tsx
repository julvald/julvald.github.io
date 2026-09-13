import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://julvald.github.io'),
  title: 'JULVALD — Engineer & Builder',
  description: '关注系统、开发工具与开放技术的个人网站。',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'JULVALD — Engineer & Builder',
    description: '关注系统、开发工具与开放技术的个人网站。',
    images: [{ url: '/og.png', width: 1536, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JULVALD — Engineer & Builder',
    description: '关注系统、开发工具与开放技术的个人网站。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

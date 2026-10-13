import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        url: '/',
        title: <>
          <img src="/logo/light.webp" alt="Ignite API" className="h-8 w-auto dark:hidden" />
          <img src="/logo/dark.webp" alt="Ignite API" className="hidden h-8 w-auto dark:block" />
        </>,
      }}
      links={[
        { text: 'Guides', url: '/' },
        { text: 'API reference', url: '/api-reference' },
      ]}
    >
      {children}
    </DocsLayout>
  );
}

import defaultComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';

function Update({ label, tags = [], children }: {
  label: string;
  tags?: string[];
  children: ReactNode;
}) {
  return (
    <section className="my-8 border-b pb-6 last:border-0">
      <h2>{label}</h2>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-fd-muted px-3 py-1 text-xs text-fd-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      {children}
    </section>
  );
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return { ...defaultComponents, Callout, Step, Steps, Tab, Tabs, Update, ...components };
}

export const useMDXComponents = getMDXComponents;

import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { NavSectionSelector } from '@/components/nav-section-selector';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      sidebar={{
        banner: <NavSectionSelector />,
        collapsible: true,
      }}
    >
      {children}
    </DocsLayout>
  );
}

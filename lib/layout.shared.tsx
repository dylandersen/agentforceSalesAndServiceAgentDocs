import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { NavSectionSelector } from '@/components/nav-section-selector';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/Agentforce-RGB-icon.png"
            alt="Agentforce"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="font-semibold">Agentforce Docs</span>
        </div>
      ),
      transparentMode: 'top',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
    ],
    sidebar: {
      banner: <NavSectionSelector />,
      collapsible: true,
    },
  };
}

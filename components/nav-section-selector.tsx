'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, BookOpen, Building2 } from 'lucide-react';

interface Section {
  title: string;
  url: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const sections: Section[] = [
  {
    title: 'Documentation',
    url: '/docs',
    description: 'Complete guides and references',
    icon: BookOpen,
  },
  {
    title: 'Architecture',
    url: '/docs/architecture',
    description: 'System architecture overview',
    icon: Building2,
  },
];

export function NavSectionSelector() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Find the current section based on pathname, prioritizing longer matches
  const currentSection = React.useMemo(() => {
    const sorted = [...sections].sort((a, b) => b.url.length - a.url.length);
    return sorted.find((section) => pathname.startsWith(section.url)) || sections[0];
  }, [pathname]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close dropdown on escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const CurrentIcon = currentSection.icon;

  return (
    <div className="relative mb-3" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border bg-card px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select documentation section"
      >
        <div className="flex items-center gap-2">
          {CurrentIcon && <CurrentIcon className="h-4 w-4" />}
          <span>{currentSection.title}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-lg border border-border bg-white dark:bg-neutral-950 shadow-xl animate-in fade-in-0 zoom-in-95 backdrop-blur-sm">
          <div className="p-2" role="listbox">
            <div className="space-y-0.5">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = pathname.startsWith(section.url);
                
                return (
                  <Link
                    key={section.url}
                    href={section.url}
                    onClick={() => setIsOpen(false)}
                    role="option"
                    aria-selected={isActive}
                    className={`
                      flex items-start gap-3 rounded-md px-3 py-2.5 text-sm transition-colors
                      hover:bg-accent hover:text-accent-foreground
                      ${isActive ? 'bg-accent/50 text-accent-foreground font-medium' : ''}
                    `}
                  >
                    {Icon && (
                      <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{section.title}</div>
                      {section.description && (
                        <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                          {section.description}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


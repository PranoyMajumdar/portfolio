'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';

export default function Header() {
  const pathname = usePathname();
  
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Guestbook', href: '/guestbook' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <Container>
        <nav className="flex items-center justify-center h-[4.5rem]">
          <div className="relative flex items-center gap-4 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-md">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'relative px-3 py-1.5 text-sm transition-colors duration-200 rounded-full',
                  pathname === link.href 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {pathname === link.href && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 bg-muted"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </motion.header>
  );
} 
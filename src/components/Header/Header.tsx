import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

interface HeaderProps {
  currentTab: string;
}

export function Header({ currentTab }: HeaderProps) {
  const tabs = [
    { id: '', label: 'Compatibility' },
    { id: 'types', label: 'All Types' },
    { id: 'about', label: 'About MBTI' },
  ];

  const router = useRouter();

  return (
    <header className='border-b bg-white sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => router.push('/')}
          >
            <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold'>
              MB
            </div>
            <h1 className='font-bold text-xl'>MBTI Match</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden  md:flex gap-1'>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={currentTab === tab.id ? 'default' : 'ghost'}
                onClick={() => router.push(`/${tab.id}`)}
                className='cursor-pointer'
              >
                {tab.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className='flex flex-col gap-2 mt-8'>
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={currentTab === tab.id ? 'default' : 'ghost'}
                    onClick={() => router.push(`/${tab.id}`)}
                    className='justify-start'
                  >
                    {tab.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

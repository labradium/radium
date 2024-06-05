import { ThemeToggle } from '@/ui/components/theme-toggle';

export default function Home() {
  return (
    <main
      className={'relative flex h-screen flex-col items-center justify-center'}
    >
      <h1 className={'text-4xl font-semibold'}>Radium Next.js Template</h1>
      <h3 className={'text-sm'}>
        A Template Used by Team Radium for almost every project.
      </h3>
      <ThemeToggle />
    </main>
  );
}

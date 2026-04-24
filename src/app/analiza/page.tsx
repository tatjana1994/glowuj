import type { Metadata } from 'next';
import { AnalyzeShell } from '@/components/analyze/analyze-shell';

export const metadata: Metadata = {
  title: 'Započni analizu',
  description:
    'Uploaduj fotografiju lica i tela i pokreni personalizovanu stilsku analizu.',
};

export default function AnalyzePage() {
  return (
    <main>
      <AnalyzeShell />
    </main>
  );
}

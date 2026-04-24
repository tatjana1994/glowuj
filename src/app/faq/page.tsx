import { questions } from '@/lib/data/faq-section-items';

export default function FAQPage() {
  return (
    <main className='mx-auto max-w-4xl px-6 py-16'>
      <h1 className='text-4xl font-semibold'>Najčešća pitanja</h1>

      <div className='mt-10 space-y-6'>
        {questions.map((item) => (
          <div key={item.question} className='rounded-3xl border p-6'>
            <h3 className='text-lg font-semibold'>{item.question}</h3>
            <p className='mt-3 text-neutral-600'>{item.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

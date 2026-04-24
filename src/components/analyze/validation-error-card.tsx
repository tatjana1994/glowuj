import { Card } from '@/components/ui/card';

type ValidationErrorCardProps = {
  title: string;
  errors: string[];
};

export function ValidationErrorCard({
  title,
  errors,
}: ValidationErrorCardProps) {
  return (
    <Card className='border-red-200 bg-red-50 p-5'>
      <h3 className='text-sm font-semibold text-red-900'>{title}</h3>

      <ul className='mt-3 space-y-2 text-sm text-red-700'>
        {errors.map((error) => (
          <li key={error}>• {error}</li>
        ))}
      </ul>
    </Card>
  );
}

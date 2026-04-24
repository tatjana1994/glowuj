type StepperProps = {
  step: number;
};

export function Stepper({ step }: StepperProps) {
  const steps = ['Lice', 'Telo', 'Preferencije', 'Analiza'];

  return (
    <div className='flex flex-wrap gap-2'>
      {steps.map((item, index) => {
        const aktivan = index + 1 <= step;

        return (
          <div
            key={item}
            className={`rounded-full px-4 py-2 text-sm ${
              aktivan
                ? 'bg-neutral-700 text-white'
                : 'bg-neutral-200 text-neutral-400'
            }`}
          >
            {index + 1}. {item}
          </div>
        );
      })}
    </div>
  );
}

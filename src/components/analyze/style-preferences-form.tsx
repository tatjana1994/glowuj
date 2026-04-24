'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  ageGroupOptions,
  genderOptions,
  occasionOptions,
  styleOptions,
} from '@/lib/data/style-preferences-options';

export type StylePreferences = {
  gender: string;
  ageGroup: string;
  style: string;
  occasion: string;
};

type StylePreferencesFormProps = {
  value: StylePreferences;
  onChange: (value: StylePreferences) => void;
};

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  value: string;
  options: Option[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (value: string) => void;
};

function CustomSelect({
  value,
  options,
  open,
  onOpen,
  onClose,
  onChange,
}: CustomSelectProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];

  const dropdownOptions = options.filter((option) => option.value !== '');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <div ref={wrapperRef} className='relative'>
      <button
        type='button'
        onClick={() => (open ? onClose() : onOpen())}
        className='flex h-14 w-full items-center justify-between rounded-[24px] border border-neutral-200 bg-white px-6 text-left text-sm text-neutral-700'
      >
        <span>{selectedOption.label}</span>

        <ChevronDown
          size={22}
          className={`transition ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open ? (
        <div className='absolute left-0 top-[calc(100%+10px)] z-50 w-full rounded-[26px] border border-neutral-200 bg-white p-3 shadow-xl'>
          <div className='max-h-[150px] space-y-1 overflow-y-auto pr-1'>
            {dropdownOptions.map((option) => {
              const active = option.value === value;

              return (
                <button
                  key={option.value}
                  type='button'
                  onClick={() => {
                    onChange(option.value);
                    onClose();
                  }}
                  className={`w-full rounded-2xl px-4 py-2 text-left text-md transition ${
                    active
                      ? 'bg-black/60 text-white'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function StylePreferencesForm({
  value,
  onChange,
}: StylePreferencesFormProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <CustomSelect
        value={value.gender}
        options={genderOptions}
        open={openKey === 'gender'}
        onOpen={() => setOpenKey('gender')}
        onClose={() => setOpenKey(null)}
        onChange={(newValue) => onChange({ ...value, gender: newValue })}
      />

      <CustomSelect
        value={value.ageGroup}
        options={ageGroupOptions}
        open={openKey === 'ageGroup'}
        onOpen={() => setOpenKey('ageGroup')}
        onClose={() => setOpenKey(null)}
        onChange={(newValue) => onChange({ ...value, ageGroup: newValue })}
      />

      <CustomSelect
        value={value.style}
        options={styleOptions}
        open={openKey === 'style'}
        onOpen={() => setOpenKey('style')}
        onClose={() => setOpenKey(null)}
        onChange={(newValue) => onChange({ ...value, style: newValue })}
      />

      <CustomSelect
        value={value.occasion}
        options={occasionOptions}
        open={openKey === 'occasion'}
        onOpen={() => setOpenKey('occasion')}
        onClose={() => setOpenKey(null)}
        onChange={(newValue) => onChange({ ...value, occasion: newValue })}
      />
    </div>
  );
}

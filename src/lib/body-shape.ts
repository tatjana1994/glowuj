export const bodyShapeContent = {
  Hourglass: {
    description:
      'Ramena i kukovi su približno izjednačeni, uz jasno definisan struk.',
    recommendations: [
      'Naglasi struk krojevima koji prate liniju tela',
      'Odlično ti stoje wrap haljine i strukirani blejzeri',
      'Biraj komade koji ističu balans gornjeg i donjeg dela tela',
    ],
  },

  Pear: {
    description:
      'Kukovi su izraženiji od ramena i grudi, uz definisaniji struk.',
    recommendations: [
      'Dodaj strukturu i pažnju gornjem delu tela',
      'Biraj svetlije ili detaljnije topove',
      'A-kroj i balansirane siluete ti odlično pristaju',
    ],
  },

  'Inverted Triangle': {
    description: 'Ramena ili grudi su izraženiji u odnosu na kukove.',
    recommendations: [
      'Dodaj volumen donjem delu tela',
      'Biraj jednostavnije komade za gornji deo',
      'Šire pantalone i A-kroj su odličan izbor',
    ],
  },

  Rectangle: {
    description:
      'Ramena, grudi i kukovi su približno izjednačeni, dok je struk manje definisan.',
    recommendations: [
      'Vizuelno definiši struk',
      'Koristi kaiševe i strukirane komade',
      'Dodaj slojevitost i strukturu outfitu',
    ],
  },

  Apple: {
    description:
      'Srednji deo tela je dominantniji, a struk je manje definisan u odnosu na ostatak figure.',
    recommendations: [
      'Biraj V-izreze i komade koji izdužuju siluetu',
      'Prebaci fokus na noge i dekolte',
      'Najbolje ti pristaju čisti i izduženi krojevi',
    ],
  },
} as const;

export type BodyShape = keyof typeof bodyShapeContent;

export type BodyMeasurements = {
  shoulders?: number;
  bust: number;
  waist: number;
  hips: number;
};

function percentageDifference(a: number, b: number) {
  return (Math.abs(a - b) / Math.max(a, b)) * 100;
}

export function determineBodyShape({
  shoulders,
  bust,
  waist,
  hips,
}: BodyMeasurements): BodyShape {
  const upperBody = Math.max(shoulders ?? bust, bust);
  const lowerBody = hips;

  const upperLowerDifference = percentageDifference(upperBody, lowerBody);

  const waistToUpperRatio = (waist / upperBody) * 100;
  const waistToLowerRatio = (waist / hips) * 100;

  const balancedUpperAndLower = upperLowerDifference <= 5;
  const slightlyBalancedUpperAndLower = upperLowerDifference <= 8;

  const definedWaist = waistToUpperRatio <= 75 && waistToLowerRatio <= 75;

  const moderateWaist = waistToUpperRatio <= 79 && waistToLowerRatio <= 79;

  const undefinedWaist = waistToUpperRatio >= 80 && waistToLowerRatio >= 80;

  const upperBodyDominant =
    upperBody > hips && percentageDifference(upperBody, hips) > 5;

  const lowerBodyDominant =
    hips > upperBody && percentageDifference(hips, upperBody) > 5;

  const midsectionDominant = waist >= upperBody * 0.95 || waist >= hips * 0.95;

  if (
    midsectionDominant ||
    (undefinedWaist && waist >= bust * 0.9 && waist >= hips * 0.9)
  ) {
    return 'Apple';
  }

  if (balancedUpperAndLower && definedWaist) {
    return 'Hourglass';
  }

  if (lowerBodyDominant && waistToLowerRatio <= 79) {
    return 'Pear';
  }

  if (upperBodyDominant && waistToUpperRatio <= 79) {
    return 'Inverted Triangle';
  }

  if (slightlyBalancedUpperAndLower && undefinedWaist) {
    return 'Rectangle';
  }

  if (slightlyBalancedUpperAndLower && moderateWaist) {
    return 'Rectangle';
  }

  if (lowerBodyDominant) {
    return 'Pear';
  }

  if (upperBodyDominant) {
    return 'Inverted Triangle';
  }

  return 'Rectangle';
}

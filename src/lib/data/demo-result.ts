export type SeasonType =
  | 'Topla jesen'
  | 'Duboka jesen'
  | 'Meka jesen'
  | 'Toplo proleće'
  | 'Svetlo proleće'
  | 'Jarko proleće'
  | 'Hladno leto'
  | 'Meko leto'
  | 'Svetlo leto'
  | 'Hladna zima'
  | 'Duboka zima'
  | 'Jarka zima';

export type BodyShapeType =
  | 'Peščani sat'
  | 'Kruška'
  | 'Obrnuti trougao'
  | 'Pravougaonik'
  | 'Jabuka';

export const seasonDemoData: Record<
  SeasonType,
  {
    summary: string;
    previewColors: string[];
    palette: {
      neutrals: string[];
      accents: string[];
      metals: string[];
    };
  }
> = {
  'Topla jesen': {
    summary:
      'Najviše ti laskaju tople, zemljane i bogate nijanse koje naglašavaju prirodnu toplinu tena.',
    previewColors: ['#6E4B3A', '#8C6A43', '#4B3A2F'],
    palette: {
      neutrals: ['#5B4636', '#8A7661', '#D8C7B0'],
      accents: ['#7F2F2F', '#B5642D', '#4B5D3A'],
      metals: ['Zlato', 'Bronza'],
    },
  },

  'Duboka jesen': {
    summary:
      'Najbolje ti stoje tamne, tople i intenzivne boje sa dubinom i bogatim kontrastom.',
    previewColors: ['#3B2A22', '#6B3F2A', '#2F3A24'],
    palette: {
      neutrals: ['#2B211C', '#4A362B', '#7A5A3A'],
      accents: ['#6B1F1F', '#8A4B22', '#2F4A2E'],
      metals: ['Tamno zlato', 'Bronza'],
    },
  },

  'Meka jesen': {
    summary:
      'Najlepše ti pristaju prigušene, tople i nežno zemljane nijanse bez jakog kontrasta.',
    previewColors: ['#A68B6F', '#B79C7A', '#7D7A5E'],
    palette: {
      neutrals: ['#8B7A68', '#C7B89D', '#E2D4BD'],
      accents: ['#A7664B', '#9C7A3E', '#6F7654'],
      metals: ['Mat zlato', 'Bronza'],
    },
  },

  'Toplo proleće': {
    summary:
      'Najviše ti prijaju tople, sveže i svetlije boje koje unose energiju i živost.',
    previewColors: ['#F2A65A', '#F6C85F', '#7FB069'],
    palette: {
      neutrals: ['#E8CBA8', '#D9A76C', '#FFF0D6'],
      accents: ['#F28C38', '#E85D3F', '#7FBF6A'],
      metals: ['Zlato', 'Svetlo zlato'],
    },
  },

  'Svetlo proleće': {
    summary:
      'Najbolje ti stoje svetle, tople i čiste nijanse koje ne opterećuju ten.',
    previewColors: ['#FFD7A8', '#F7B7A3', '#A7D8C9'],
    palette: {
      neutrals: ['#F5E6D3', '#EFD1B5', '#FFF8E8'],
      accents: ['#FFB86B', '#F59E9E', '#9ED9C5'],
      metals: ['Svetlo zlato', 'Šampanj zlato'],
    },
  },

  'Jarko proleće': {
    summary:
      'Najviše ti laskaju čiste, sveže i življe boje koje prate prirodan kontrast.',
    previewColors: ['#FF6B3D', '#FFD23F', '#28C76F'],
    palette: {
      neutrals: ['#FFF4D6', '#D8B98A', '#3C332B'],
      accents: ['#FF6B3D', '#FFB000', '#20B86F'],
      metals: ['Zlato', 'Sjajno zlato'],
    },
  },

  'Hladno leto': {
    summary:
      'Najbolje ti stoje hladne, nežne i sofisticirane nijanse sa plavkastim podtonom.',
    previewColors: ['#9BA7B8', '#B7AFC7', '#7E8FA3'],
    palette: {
      neutrals: ['#D8DCE2', '#9BA7B8', '#6D7480'],
      accents: ['#8E7BAA', '#A96E87', '#6F8FAF'],
      metals: ['Srebro', 'Belo zlato'],
    },
  },

  'Meko leto': {
    summary:
      'Najlepše ti pristaju prigušene, hladnije i nežne boje bez jakih kontrasta.',
    previewColors: ['#A8A0A0', '#B7A3AA', '#8B9A9A'],
    palette: {
      neutrals: ['#C9C1BC', '#A8A0A0', '#6F7375'],
      accents: ['#9E7F8F', '#7F9A9A', '#8B86A3'],
      metals: ['Srebro', 'Mat srebro'],
    },
  },

  'Svetlo leto': {
    summary:
      'Najbolje ti stoje svetle, hladne i prozračne nijanse koje omekšavaju izgled.',
    previewColors: ['#D7E4F2', '#E7CAD8', '#BFD8D2'],
    palette: {
      neutrals: ['#F0F3F5', '#D7E4F2', '#B8C2CC'],
      accents: ['#D9A7C7', '#A8C7E8', '#BFD8D2'],
      metals: ['Srebro', 'Belo zlato'],
    },
  },

  'Hladna zima': {
    summary:
      'Najviše ti laskaju hladne, jasne i kontrastne boje koje naglašavaju oštrinu tena.',
    previewColors: ['#111111', '#FFFFFF', '#B0003A'],
    palette: {
      neutrals: ['#111111', '#FFFFFF', '#6B7280'],
      accents: ['#B0003A', '#0057B8', '#6D28D9'],
      metals: ['Srebro', 'Belo zlato'],
    },
  },

  'Duboka zima': {
    summary:
      'Najbolje ti stoje tamne, hladne i intenzivne nijanse sa snažnim kontrastom.',
    previewColors: ['#151515', '#3A0D1F', '#123C3C'],
    palette: {
      neutrals: ['#111111', '#2B2B2B', '#E8E8E8'],
      accents: ['#5A001F', '#123C69', '#0F4C3A'],
      metals: ['Srebro', 'Tamno srebro'],
    },
  },

  'Jarka zima': {
    summary:
      'Najviše ti prijaju čiste, jake i kontrastne boje koje deluju moderno i upečatljivo.',
    previewColors: ['#000000', '#FFFFFF', '#E6007E'],
    palette: {
      neutrals: ['#000000', '#FFFFFF', '#D1D5DB'],
      accents: ['#E6007E', '#0047FF', '#00A86B'],
      metals: ['Srebro', 'Belo zlato'],
    },
  },
};

export const bodyShapeDemoData: Record<
  BodyShapeType,
  {
    summary: string;
    clothingRecommendations: {
      tops: string[];
      trousers: string[];
      dresses: string[];
      jackets: string[];
      necklines: string[];
      sleeves: string[];
    };
    avoidList: string[];
    outfitFormulas: string[];
    shoppingDirections: string[];
  }
> = {
  'Peščani sat': {
    summary:
      'Tvoja figura najbolje funkcioniše kada se prirodan balans između gornjeg i donjeg dela tela dodatno naglasi strukom.',
    clothingRecommendations: {
      tops: [
        'Strukirani topovi',
        'Wrap bluze',
        'Topovi koji prate liniju tela',
      ],
      trousers: [
        'Pantalone visokog struka',
        'Ravne pantalone',
        'Bootcut modeli',
      ],
      dresses: ['Wrap haljine', 'Bodycon midi haljine', 'Haljine sa pojasom'],
      jackets: ['Strukirani blejzeri', 'Kraće jakne', 'Kaputi sa pojasom'],
      necklines: ['V-izrez', 'Srcoliki izrez', 'Blagi četvrtasti izrez'],
      sleeves: ['Uži rukavi', '3/4 rukavi', 'Blago strukturisani rukavi'],
    },
    avoidList: [
      'Preširoke krojeve bez definicije',
      'Potpuno ravne haljine bez struka',
      'Previše volumena samo na jednom delu tela',
    ],
    outfitFormulas: [
      'Wrap bluza + pantalone visokog struka + salonke',
      'Midi haljina sa pojasom + kraći blejzer',
      'Strukirani top + bootcut pantalone + zlatni detalji',
    ],
    shoppingDirections: [
      'Traži komade koji prate liniju tela.',
      'Biraj modele koji jasno definišu struk.',
      'Izbegavaj krojeve koji potpuno sakrivaju proporcije.',
    ],
  },

  Kruška: {
    summary:
      'Tvoja figura najbolje funkcioniše kada se pažnja blago prebaci na gornji deo tela i vizuelno izbalansiraju kukovi.',
    clothingRecommendations: {
      tops: [
        'Topovi sa detaljima na ramenima',
        'Svetlije bluze',
        'Strukturisani topovi',
      ],
      trousers: [
        'Ravne pantalone',
        'Tamne pantalone',
        'Šire pantalone visokog struka',
      ],
      dresses: [
        'A-kroj haljine',
        'Fit-and-flare haljine',
        'Haljine sa naglašenim ramenima',
      ],
      jackets: [
        'Blejzeri do struka',
        'Jakne sa strukturisanim ramenima',
        'Kraći sakoi',
      ],
      necklines: ['Boat izrez', 'Četvrtasti izrez', 'Širi V-izrez'],
      sleeves: ['Puf rukavi', 'Rukavi sa blagim volumenom', 'Rukavi do lakta'],
    },
    avoidList: [
      'Previše detalja na kukovima',
      'Svetle i uske pantalone bez balansa gore',
      'Jakne koje se završavaju na najširem delu kukova',
    ],
    outfitFormulas: [
      'Svetliji top + tamne ravne pantalone + kraći blejzer',
      'A-kroj haljina + naglašene minđuše',
      'Strukturisana bluza + pantalone visokog struka',
    ],
    shoppingDirections: [
      'Biraj gornje komade sa detaljima, teksturom ili svetlijim bojama.',
      'Donji deo neka bude čistiji, tamniji i jednostavniji.',
      'Traži A-kroj i komade koji ne lepe tkaninu za kukove.',
    ],
  },

  'Obrnuti trougao': {
    summary:
      'Tvoja figura najbolje funkcioniše kada se ublaži širina gornjeg dela tela i doda volumen donjem delu.',
    clothingRecommendations: {
      tops: [
        'Jednostavni topovi',
        'Tamni gornji komadi',
        'Topovi bez jakih detalja na ramenima',
      ],
      trousers: [
        'Široke pantalone',
        'Cargo pantalone',
        'Pantalone sa naborima',
      ],
      dresses: [
        'A-kroj haljine',
        'Haljine sa volumenom dole',
        'Slip haljine sa mekšim padom',
      ],
      jackets: [
        'Jednostavni blejzeri',
        'Duža jakna ravnog kroja',
        'Sakoi bez naglašenih ramena',
      ],
      necklines: ['V-izrez', 'U-izrez', 'Asimetrični izrez'],
      sleeves: [
        'Jednostavni rukavi',
        'Raglan rukavi',
        'Mekani rukavi bez volumena',
      ],
    },
    avoidList: [
      'Jako naglašena ramena',
      'Puf rukave i epolete',
      'Uske pantalone uz vrlo strukturisan gornji deo',
    ],
    outfitFormulas: [
      'Jednostavan top + široke pantalone + sandale',
      'Tamna bluza + A-kroj suknja',
      'Minimalni blejzer + pantalone sa volumenom',
    ],
    shoppingDirections: [
      'Biraj donje komade sa volumenom, teksturom ili svetlijom bojom.',
      'Gornji deo neka bude jednostavniji i mekši.',
      'Izbegavaj dodatno širenje ramena.',
    ],
  },

  Pravougaonik: {
    summary:
      'Tvoja figura najbolje funkcioniše kada se vizuelno kreira struk i doda struktura silueti.',
    clothingRecommendations: {
      tops: ['Strukirani topovi', 'Peplum topovi', 'Topovi sa slojevima'],
      trousers: [
        'Pantalone visokog struka',
        'Ravne pantalone',
        'Pantalone sa pojasom',
      ],
      dresses: ['Wrap haljine', 'Haljine sa pojasom', 'Fit-and-flare modeli'],
      jackets: [
        'Strukturirani blejzeri',
        'Kraće jakne',
        'Sakoi sa blagim strukiranjem',
      ],
      necklines: ['V-izrez', 'Blagi četvrtasti izrez', 'Srcoliki izrez'],
      sleeves: [
        '3/4 rukavi',
        'Blago suženi rukavi',
        'Rukavi sa diskretnom strukturom',
      ],
    },
    avoidList: [
      'Potpuno boxy krojeve bez definicije',
      'Veoma ravne haljine bez detalja',
      'Prenizak struk',
    ],
    outfitFormulas: [
      'Strukirani top + pantalone visokog struka + blejzer',
      'Midi haljina sa pojasom + cipele sa špicem',
      'Monohromatska baza + kaiš + strukturisana jakna',
    ],
    shoppingDirections: [
      'Traži pantalone i suknje sa visokim strukom.',
      'Biraj komade koji dodaju oblik kroz pojas, sečenje ili slojeve.',
      'Koristi kaiševe i strukirane blejzere za bolju definiciju.',
    ],
  },

  Jabuka: {
    summary:
      'Tvoja figura najbolje funkcioniše kada se silueta vizuelno izduži, a fokus prebaci na noge, dekolte i vertikalne linije.',
    clothingRecommendations: {
      tops: [
        'Tunika topovi',
        'Topovi sa V-izrezom',
        'Lepršave bluze koje ne stežu stomak',
      ],
      trousers: [
        'Ravne pantalone',
        'Pantalone srednjeg ili višeg struka',
        'Tamne pantalone čistog kroja',
      ],
      dresses: ['Empire haljine', 'Ravne midi haljine', 'Haljine sa V-izrezom'],
      jackets: [
        'Duža otvorena jakna',
        'Ravan blejzer',
        'Kaputi koji prave vertikalnu liniju',
      ],
      necklines: ['V-izrez', 'U-izrez', 'Dublji okrugli izrez'],
      sleeves: [
        'Ravni rukavi',
        '3/4 rukavi',
        'Mekani rukavi bez dodatnog volumena',
      ],
    },
    avoidList: [
      'Uske topove koji stežu stomak',
      'Debele kaiševe preko sredine tela',
      'Kratke jakne koje se završavaju na stomaku',
    ],
    outfitFormulas: [
      'V-izrez bluza + ravne pantalone + duži blejzer',
      'Empire haljina + diskretan nakit',
      'Monohromatski outfit + otvoren duži kardigan',
    ],
    shoppingDirections: [
      'Biraj komade koji prave vertikalnu liniju.',
      'Fokus prebaci na dekolte, lice i noge.',
      'Izbegavaj krojeve koji seku figuru tačno preko stomaka.',
    ],
  },
};

export function createDemoResult(season: SeasonType, bodyShape: BodyShapeType) {
  const seasonData = seasonDemoData[season];
  const bodyData = bodyShapeDemoData[bodyShape];

  return {
    preview: {
      season,
      bodyShape,
      summary: `${seasonData.summary} ${bodyData.summary}`,
      previewColors: seasonData.previewColors,
    },

    full: {
      summary: `${seasonData.summary} ${bodyData.summary}`,
      palette: seasonData.palette,
      clothingRecommendations: bodyData.clothingRecommendations,
      avoidList: bodyData.avoidList,
      outfitFormulas: bodyData.outfitFormulas,
      shoppingDirections: bodyData.shoppingDirections,
    },
  };
}

export const demoPreview = createDemoResult(
  'Topla jesen',
  'Pravougaonik',
).preview;

export const demoFullResult = createDemoResult(
  'Topla jesen',
  'Pravougaonik',
).full;

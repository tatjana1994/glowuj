export type ImageValidationResult = {
  faceValid: boolean;
  bodyValid: boolean;
  faceErrors: string[];
  bodyErrors: string[];
};

export type FaceAnalysis = {
  undertone: 'warm' | 'cool' | 'neutral';
  contrast: 'low' | 'medium' | 'high';
  season: string;
  faceShape: string;
  bestMetals: string[];
  bestColorFamilies: string[];
  avoidColorFamilies: string[];
};

export type BodyAnalysis = {
  bodyShape: string;
  proportionNotes: string[];
  fitFocus: string[];
  recommendedSilhouettes: string[];
  avoidSilhouettes: string[];
};

export type FullStyleReport = {
  summary: string;
  palette: {
    neutrals: string[];
    accents: string[];
    metals: string[];
  };
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
};

export type PreviewResult = {
  season: string;
  bodyShape: string;
  summary: string;
  previewColors: string[];
};
export type AnalysisRecord = {
  id: string;
  created_at: string;
  updated_at: string;
  status: 'pending' | 'completed' | 'failed';
  face_image_url: string;
  body_image_url: string;
  gender?: string | null;
  age_group?: string | null;
  style?: string | null;
  occasion?: string | null;
  validation_result?: ImageValidationResult | null;
  preview_result?: PreviewResult | null;
  full_result?: FullStyleReport | null;
  is_paid: boolean;
  stripe_session_id?: string | null;
};

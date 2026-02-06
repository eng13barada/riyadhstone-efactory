export type SenderType = 'user' | 'ai' | 'system';

export interface ChatMessage {
  id: string;
  sender: SenderType;
  text: string;
  timestamp: Date;
  metadata?: {
    // For AI steps like "Processing PDF...", "Generating Layout..."
    isProcessing?: boolean; 
    actionRequired?: boolean;
  };
}

export interface IndustryOption {
  id: string;
  label: string;
  icon?: string; // Icon name or URL
  description?: string;
}

export interface IndustryContext {
  selectedIndustry: IndustryOption | null;
  detectedCategories: string[]; // AI suggested categories from PDF
  confidenceScore: number;
}

export type OnboardingStep = 'upload' | 'analyzing' | 'taxonomy-selection' | 'concept-preview' | 'complete';

export interface OnboardingState {
  currentStep: OnboardingStep;
  fileName?: string;
  uploadProgress: number;
  industryContext: IndustryContext;
}

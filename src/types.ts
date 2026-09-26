export interface InquiryFormState {
  name: string;
  email: string;
  phone: string;
  need: string;
  brandOrCompany: string;
  message: string;
}

export type NeedCategory =
  | 'A brand to rethink'
  | 'A story to tell'
  | 'A social presence to transform'
  | 'A campaign to move'
  | 'A business opportunity waiting to be explored';

export interface PillarItem {
  id: string;
  title: string;
  questionOrDesc: string;
  detail: string;
}

export interface CycleStep {
  step: number;
  label: string;
  verb: string;
  description: string;
}

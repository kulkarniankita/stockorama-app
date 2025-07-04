export type State = {
  message?: string | null;
  type?: string;
  errors?: {
    name?: string[];
    quantity?: string[];
  };
};

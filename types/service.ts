export type Service = {
  id: number;
  headline: string;
  info: string;
};

export type ServiceWithIcon = Service & {
  icon: string;
};

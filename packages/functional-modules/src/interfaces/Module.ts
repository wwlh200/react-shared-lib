export interface IModule {
  amount: number;
  authorityId: string;
  collectedAtCheckout: boolean;
  currency: string;
  duration: string;
  includedInRoomRate: boolean;
  name: string;
  scope: string;
  startDate: string;
  taxTypeDescriptor: string;
  type: string;
}

export interface SolicitudPago {
    merchantId: number;
    accountId: number;
    description: String;
    referenceCode: String;
    amount: Number;
    tax: Number;
    taxReturnBase: Number;
    currency: string;
    signature: String;
    test: number;
    buyerEmail: String;
    responseUrl: string;
    confirmationUrl: string;
}
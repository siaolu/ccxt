// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import _fmfwio from '../fmfwio.js';

export default abstract class fmfwio extends _fmfwio {
    abstract publicGetCurrency (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCurrencyCurrency (params?: {}): Promise<implicitReturnType>;
    abstract publicGetSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetSymbolSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickerSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradesSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderbookSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCandlesSymbol (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingBalance (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrderClientOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingFeeAll (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingFeeSymbol (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginAccount (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginAccountSymbol (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginPosition (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginPositionSymbol (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginOrderClientOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetHistoryOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateGetHistoryTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetHistoryOrderOrderIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountBalance (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountCryptoAddressCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountCryptoAddressesCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountCryptoUsedAddressesCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountCryptoEstimateWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountCryptoIsMineAddress (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountTransactions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountTransactionsId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetSubAcc (params?: {}): Promise<implicitReturnType>;
    abstract privateGetSubAccAcl (params?: {}): Promise<implicitReturnType>;
    abstract privateGetSubAccBalanceSubAccountUserID (params?: {}): Promise<implicitReturnType>;
    abstract privateGetSubAccDepositAddressSubAccountUserIdCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostMarginOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountCryptoAddressCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountCryptoWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountCryptoTransferConvert (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountTransfer (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountTransferInternal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostSubAccFreeze (params?: {}): Promise<implicitReturnType>;
    abstract privatePostSubAccActivate (params?: {}): Promise<implicitReturnType>;
    abstract privatePostSubAccTransfer (params?: {}): Promise<implicitReturnType>;
    abstract privatePutOrderClientOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privatePutMarginAccountSymbol (params?: {}): Promise<implicitReturnType>;
    abstract privatePutMarginOrderClientOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privatePutAccountCryptoWithdrawId (params?: {}): Promise<implicitReturnType>;
    abstract privatePutSubAccAclSubAccountUserId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrderClientOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginAccount (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginAccountSymbol (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginPosition (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginPositionSymbol (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginOrderClientOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteAccountCryptoWithdrawId (params?: {}): Promise<implicitReturnType>;
    abstract privatePatchOrderClientOrderId (params?: {}): Promise<implicitReturnType>;
}
// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import _okex from '../okex.js';

export default abstract class okex extends _okex {
    abstract publicGetMarketTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketIndexTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketBooks (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketBooksLite (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketHistoryCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketHistoryMarkPriceCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketHistoryIndexCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketIndexCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketMarkPriceCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketPlatform24Volume (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketOpenOracle (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketIndexComponents (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketOptionInstrumentFamilyTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicInstruments (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicDeliveryExerciseHistory (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicOpenInterest (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicFundingRate (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicFundingRateHistory (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicPriceLimit (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicOptSummary (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicEstimatedPrice (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicDiscountRateInterestFreeQuota (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicTime (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicLiquidationOrders (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicMarkPrice (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicOptionTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicPositionTiers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicInterestRateLoanQuota (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicVipInterestRateLoanQuota (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatTradingDataSupportCoin (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatTakerVolume (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatMarginLoanRatio (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatContractsLongShortAccountRatio (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatContractsOpenInterestVolume (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatOptionOpenInterestVolume (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatOptionOpenInterestVolumeRatio (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatOptionOpenInterestVolumeExpiry (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatOptionOpenInterestVolumeStrike (params?: {}): Promise<implicitReturnType>;
    abstract publicGetRubikStatOptionTakerBlockVolume (params?: {}): Promise<implicitReturnType>;
    abstract publicGetSystemStatus (params?: {}): Promise<implicitReturnType>;
    abstract publicGetAssetLendingRateSummary (params?: {}): Promise<implicitReturnType>;
    abstract publicGetAssetLendingRateHistory (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketExchangeRate (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountAccountPositionRisk (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountBalance (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountPositions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountPositionsHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountBills (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountBillsArchive (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountConfig (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountMaxSize (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountMaxAvailSize (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountLeverageInfo (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountMaxLoan (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountTradeFee (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountInterestAccrued (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountInterestRate (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountMaxWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountRiskState (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountBorrowRepayHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountQuickMarginBorrowRepayHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountInterestLimits (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountVipInterestAccrued (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountVipLoanOrderList (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountVipLoanOrderDetail (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetAssetValuation (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetBalances (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetTransferState (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetDepositHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetWithdrawalHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetDepositWithdrawStatus (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetBills (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetPiggyBalance (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetDepositLightning (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetLendingHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetSavingBalance (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetNonTradableAssets (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeOrdersPending (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeOrdersHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeOrdersHistoryArchive (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeFills (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeFillsHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeOrdersAlgoPending (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeOrdersAlgoHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradeOrderAlgo (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountSubaccountBalances (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetSubaccountBills (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUsersSubaccountList (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUsersSubaccountApikey (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUsersEntrustSubaccountList (params?: {}): Promise<implicitReturnType>;
    abstract privateGetBrokerNdInfo (params?: {}): Promise<implicitReturnType>;
    abstract privateGetBrokerNdSubaccountInfo (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetBrokerNdSubaccountDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetBrokerNdSubaccountDepositHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetBrokerNdRebateDaily (params?: {}): Promise<implicitReturnType>;
    abstract privateGetBrokerNdSubaccountApikey (params?: {}): Promise<implicitReturnType>;
    abstract privateGetBrokerNdRebatePerOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetBrokerNdSubaccountWithdrawalHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetConvertCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetConvertCurrencyPair (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetConvertEstimateQuote (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetConvertTrade (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssetConvertHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountGreeks (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFinanceStakingDefiOffers (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFinanceStakingDefiOrdersActive (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFinanceStakingDefiOrdersHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetRfqCounterparties (params?: {}): Promise<implicitReturnType>;
    abstract privateGetRfqMakerInstrumentSettings (params?: {}): Promise<implicitReturnType>;
    abstract privateGetRfqRfqs (params?: {}): Promise<implicitReturnType>;
    abstract privateGetRfqQuotes (params?: {}): Promise<implicitReturnType>;
    abstract privateGetRfqTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetRfqPublicTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetCopytradingCurrentSubpositions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetCopytradingSubpositionsHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetCopytradingInstruments (params?: {}): Promise<implicitReturnType>;
    abstract privateGetCopytradingProfitSharingDetails (params?: {}): Promise<implicitReturnType>;
    abstract privateGetCopytradingTotalProfitSharing (params?: {}): Promise<implicitReturnType>;
    abstract privateGetCopytradingUnrealizedProfitSharingDetails (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingBotGridOrdersAlgoPending (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingBotGridOrdersAlgoHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingBotGridOrdersAlgoDetails (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingBotGridSubOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingBotGridPositions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradingBotGridAiParam (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountSetPositionMode (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountSetLeverage (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountPositionMarginBalance (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountSetGreeks (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountSetIsolatedMode (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountSetRiskOffsetType (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountSimulatedMargin (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountBorrowRepay (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountQuickMarginBorrowRepay (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountActivateOption (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAccountSetAutoLoan (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetTransfer (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetPurchaseRedempt (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetWithdrawalLightning (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetSetLendingRate (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetCancelWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetConvertDustAssets (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeCancelOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeCancelBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeAmendOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeAmendBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeClosePosition (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeOrderAlgo (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeCancelAlgos (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeCancelAdvanceAlgos (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUsersSubaccountDeleteApikey (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUsersSubaccountModifyApikey (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUsersSubaccountApikey (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUsersSubaccountSetTransferOut (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetSubaccountTransfer (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBrokerNdCreateSubaccount (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBrokerNdDeleteSubaccount (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBrokerNdSetSubaccountLevel (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBrokerNdSetSubaccountFeeRate (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAssetBrokerNdSubaccountDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBrokerNdSubaccountApikey (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBrokerNdSubaccountDeleteApikey (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBrokerNdSubaccountModifyApikey (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBrokerNdRebatePerOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostFinanceStakingDefiPurchase (params?: {}): Promise<implicitReturnType>;
    abstract privatePostFinanceStakingDefiRedeem (params?: {}): Promise<implicitReturnType>;
    abstract privatePostFinanceStakingDefiCancel (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqCreateRfq (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqCancelRfq (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqCancelBatchRfqs (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqCancelAllRfqs (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqExecuteQuote (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqMakerInstrumentSettings (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqMmpReset (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqCreateQuote (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqCancelQuote (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqCancelBatchQuotes (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRfqCancelAllQuotes (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCopytradingAlgoOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCopytradingCloseSubposition (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCopytradingSetInstruments (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradingBotGridOrderAlgo (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradingBotGridAmendOrderAlgo (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradingBotGridStopOrderAlgo (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradingBotGridWithdrawIncome (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradingBotGridComputeMarginBalance (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradingBotGridMarginBalance (params?: {}): Promise<implicitReturnType>;
}
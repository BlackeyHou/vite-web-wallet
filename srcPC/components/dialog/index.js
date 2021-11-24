import baseComp from 'components/dialog/base.vue';
import vbConfirmComp from './vbConfirm.vue';
import vbConnectComp from './vbConnect.vue';
import hwAddressSelectComp from './hwAddressSelect.vue';
import hwVerifyAddressComp from './hwVerifyAddress.vue';
import getDialog from './utils.js';
import inviteComp from './invite.vue';
import receiveInviteComp from './receiveInvite.vue';
import changeRpcUrlComp from './changeRpcUrl.vue';
import powLimitComp from './powLimit.vue';
import confirmBriTx from './confirmBriTx.vue';
import confirmCrossBridge from './confirmCrossBridge.vue';
import transConfirms from './transConfirms.vue';


export const inviteDialog = getDialog(inviteComp);
export const receiveInviteDialog = getDialog(receiveInviteComp);
export const baseDialog = getDialog(baseComp);
export const vbConfirmDialog = getDialog(vbConfirmComp);
export const vbConnectDialog = getDialog(vbConnectComp);
export const hwAddressSelectDialog = getDialog(hwAddressSelectComp, { width: 'wide' });
export const hwVerifyAddressDialog = getDialog(hwVerifyAddressComp);
export const changeRpcUrlDialog = getDialog(changeRpcUrlComp);
export const confirmBriTxDialog = getDialog(confirmBriTx);
export const confirmCrossBridgeDialog = getDialog(confirmCrossBridge);
export const transConfirmsDialog = getDialog(transConfirms);

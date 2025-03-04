/* tslint:disable */
/* eslint-disable */
import { EliteVm } from '../models/elite-vm';
import { ErrorCode } from '../models/error-code';
export interface UpdateEliteCommandResult {
  elite?: EliteVm;
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
}

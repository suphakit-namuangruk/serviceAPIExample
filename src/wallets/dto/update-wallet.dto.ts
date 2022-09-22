import { WalletDto } from './wallet.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateWalletDto extends PartialType(WalletDto) {}

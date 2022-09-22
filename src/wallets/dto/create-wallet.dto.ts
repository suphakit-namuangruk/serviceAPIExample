import { PartialType } from '@nestjs/mapped-types';
import { WalletDto } from './wallet.dto';

export class CreateWalletDto extends PartialType(WalletDto) {}

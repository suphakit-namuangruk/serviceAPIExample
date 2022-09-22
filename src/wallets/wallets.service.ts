import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletDto } from './dto/wallet.dto';

@Injectable()
export class WalletsService {
  wallets: WalletDto[] = [
    { id: 1, name: 'Bird', balance: 10 },
    { id: 2, name: 'Best', balance: 22 },
    { id: 3, name: 'Bun', balance: 36 },
    { id: 4, name: 'Eikkew', balance: 41 },
    { id: 5, name: 'Fluke', balance: 59 },
  ];

  create(createWalletDto: CreateWalletDto): number {
    const idx = this.wallets.length - 1;
    const id = this.wallets[idx].id + 1;
    this.wallets.push({
      id: id,
      name: createWalletDto.name,
      balance: 0,
    });
    return id;
  }

  findAll(): WalletDto[] {
    return this.wallets;
  }

  findOne(id: number): WalletDto {
    return this.wallets.find((x) => x.id === id);
  }

  update(id: number, update: UpdateWalletDto): void {
    if (update) {
      const idx = this.wallets.findIndex((wallet) => wallet.id === id);
      if (idx > -1) {
        if (update?.name) this.wallets[idx].name = update.name;
        if (update?.balance) this.wallets[idx].balance = update.balance;
      }
    }
  }

  remove(id: number) {
    const idx = this.wallets.findIndex((wallet) => wallet.id === id);
    if (idx > -1) this.wallets.splice(idx, 1);
  }
}

export class AccountResponseDTO {
  //metadata
  id: any;
  username: string;
  creationTimestamp: Date;
  lastLogin: Date;

  // in game private information
  gold: number;
  gems: number;
  itemsStorage: any; // itemDTO[]

  //in game public information
  bio: string;
  legendaryHero: any; // legendaryHeroDTO
  companions: any; // companionsDTO[]
  guild: any; // guildID
}

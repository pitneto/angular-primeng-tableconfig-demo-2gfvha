export interface IStarship {
   name: string;
   model: string;
   manufacturer: string;
   cost_in_credits: number;
   length: number;
   max_atmosphering_speed: number;
   crew: number;
   passengers: number;
   cargo_capacity: number;
   consumables: string;
   hyperdrive_rating: number;
   MGLT: number;
   starship_class: string;
}

// taken from swapi.co
export const STAR_WARS_SHIPS: IStarship[] = [
    {
        name: "Sentinel-class landing craft",
        model: "Sentinel-class landing craft",
        manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
        cost_in_credits: 240000,
        length: 38,
        max_atmosphering_speed: 1000,
        crew: 5,
        passengers: 75,
        cargo_capacity: 180000,
        consumables: "1 month",
        hyperdrive_rating: 1.0,
        MGLT: 70,
        starship_class: "landing craft"
    },

    {
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
        cost_in_credits: 1000000000000,
        length: 120000,
        max_atmosphering_speed: null,
        crew: 342953,
        passengers: 843342,
        cargo_capacity: 1000000000000,
        consumables: "3 years",
        hyperdrive_rating: 4.0,
        MGLT: 10,
        starship_class: "Deep Space Mobile Battlestation"
    },
    {
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: 100000,
        length: 34.37,
        max_atmosphering_speed: 1050,
        crew: 4,
        passengers: 6,
        cargo_capacity: 100000,
        consumables: "2 months",
        hyperdrive_rating: 0.5,
        MGLT: 75,
        starship_class: "Light freighter"
    },
    {
        name: "Y-wing",
        model: "BTL Y-wing",
        manufacturer: "Koensayr Manufacturing",
        cost_in_credits: 134999,
        length: 14,
        max_atmosphering_speed: 1000,
        crew: 2,
        passengers: 0,
        cargo_capacity: 110,
        consumables: "1 week",
        hyperdrive_rating: 1.0,
        MGLT: 80,
        starship_class: "assault starfighter"
    },
    {
        name: "X-wing",
        model: "T-65 X-wing",
        manufacturer: "Incom Corporation",
        cost_in_credits: 149999,
        length: 12.5,
        max_atmosphering_speed: 1050,
        crew: 1,
        passengers: 0,
        cargo_capacity: 110,
        consumables: "1 week",
        hyperdrive_rating: 1.0,
        MGLT: 100,
        starship_class: "Starfighter"
    },
    {
        name: "TIE Advanced x1",
        model: "Twin Ion Engine Advanced x1",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: null,
        length: 9.2,
        max_atmosphering_speed: 1200,
        crew: 1,
        passengers: 0,
        cargo_capacity: 150,
        consumables: "5 days",
        hyperdrive_rating: 1.0,
        MGLT: 105,
        starship_class: "Starfighter"
    },
    {
        name: "Executor",
        model: "Executor-class star dreadnought",
        manufacturer: "Kuat Drive Yards, Fondor Shipyards",
        cost_in_credits: 1143350000,
        length: 19000,
        max_atmosphering_speed: null,
        crew: 279144,
        passengers: 38000,
        cargo_capacity: 250000000,
        consumables: "6 years",
        hyperdrive_rating: 2.0,
        MGLT: 40,
        starship_class: "Star dreadnought"
    },
    {
        name: "Slave 1",
        model: "Firespray-31-class patrol and attack",
        manufacturer: "Kuat Systems Engineering",
        cost_in_credits: null,
        length: 21.5,
        max_atmosphering_speed: 1000,
        crew: 1,
        passengers: 6,
        cargo_capacity: 70000,
        consumables: "1 month",
        hyperdrive_rating: 3.0,
        MGLT: 70,
        starship_class: "Patrol craft"
    },
    {
        name: "Imperial shuttle",
        model: "Lambda-class T-4a shuttle",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: 240000,
        length: 20,
        max_atmosphering_speed: 850,
        crew: 6,
        passengers: 20,
        cargo_capacity: 80000,
        consumables: "2 months",
        hyperdrive_rating: 1.0,
        MGLT: 50,
        starship_class: "Armed government transport"
    },
    {
        name: "EF76 Nebulon-B escort frigate",
        model: "EF76 Nebulon-B escort frigate",
        manufacturer: "Kuat Drive Yards",
        cost_in_credits: 8500000,
        length: 300,
        max_atmosphering_speed: 800,
        crew: 854,
        passengers: 75,
        cargo_capacity: 6000000,
        consumables: "2 years",
        hyperdrive_rating: 2.0,
        MGLT: 40,
        starship_class: "Escort ship"
    }
  ];
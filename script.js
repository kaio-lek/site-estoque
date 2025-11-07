const listaJogos = [
  "Among Us", "Apex Legends", "ARK: Survival Evolved", "Assassin's Creed", "Age of Empires",
  "Alan Wake", "Astroneer", "A Way Out", "Albion Online", "Arma 3",
  "Battlefield 1", "Battlefield V", "Baldur’s Gate 3", "Borderlands 3", "Bayonetta",
  "Bioshock Infinite", "Beat Saber", "Brawlhalla", "Bloodborne", "Batman: Arkham Knight",
  "Call of Duty: Modern Warfare", "Call of Duty: Warzone", "Cities: Skylines", "Celeste", "Clash Royale",
  "Counter-Strike 2", "Cyberpunk 2077", "Crash Bandicoot", "Cuphead", "Control",
  "Dark Souls III", "Dead Cells", "Dota 2", "Diablo IV", "Don’t Starve Together",
  "Destiny 2", "Dragon Age: Inquisition", "DayZ", "Detroit: Become Human", "Deep Rock Galactic",
  "Elden Ring", "Escape from Tarkov", "Enter the Gungeon", "EVE Online", "Euro Truck Simulator 2",
  "Fallout 4", "Far Cry 5", "FIFA 23", "Final Fantasy VII Remake", "Forza Horizon 5",
  "Fortnite", "Firewatch", "Five Nights at Freddy’s", "For Honor", "Fez",
  "Genshin Impact", "God of War", "GTA V", "Grim Dawn", "Garry’s Mod",
  "Grounded", "Guild Wars 2", "Ghost of Tsushima", "Gotham Knights", "Geometry Dash",
  "Hades", "Halo Infinite", "Hollow Knight", "Hogwarts Legacy", "Horizon Zero Dawn",
  "Hearts of Iron IV", "Hitman 3", "Human: Fall Flat", "Hunt: Showdown", "Hotline Miami",
  "Inside", "It Takes Two", "Injustice 2", "Icarus", "Immortals Fenyx Rising",
  "Just Cause 4", "Jump Force", "Jurassic World Evolution", "Journey", "Jetpack Joyride",
  "Kena: Bridge of Spirits", "Kerbal Space Program", "Kingdom Come: Deliverance", "Killing Floor 2", "Katana ZERO",
  "League of Legends", "Left 4 Dead 2", "Lego Star Wars", "Limbo", "Little Nightmares II",
  "Life is Strange", "Lost Ark", "Luigi’s Mansion 3", "Lethal Company", "Lords of the Fallen",
  "Minecraft", "Monster Hunter: World", "Mortal Kombat 11", "Metro Exodus", "Mass Effect Legendary Edition",
  "Need for Speed Heat", "No Man’s Sky", "Nier: Automata", "New World", "Naraka: Bladepoint",
  "Overwatch 2", "Ori and the Will of the Wisps", "Outlast", "Outer Wilds", "Oxygen Not Included",
  "PUBG: Battlegrounds", "Portal 2", "Project Zomboid", "Palworld", "Payday 3",
  "Phasmophobia", "Planet Zoo", "Persona 5", "Path of Exile", "Papers, Please",
  "Quake Champions", "Quantum Break", "Q.U.B.E. 2", "Qbert Rebooted", "Quiplash",
  "Red Dead Redemption 2", "Resident Evil 4 Remake", "Rocket League", "RimWorld", "Rust",
  "Rainbow Six Siege", "Raft", "Returnal", "Rogue Legacy 2", "Risk of Rain 2",
  "Stardew Valley", "Sea of Thieves", "Starfield", "Subnautica", "Slay the Spire",
  "Sekiro: Shadows Die Twice", "Skyrim", "Sons of the Forest", "Spiritfarer", "Spelunky 2",
  "Terraria", "The Witcher 3", "The Sims 4", "The Forest", "Tomb Raider",
  "Tunic", "Team Fortress 2", "Teardown", "Telltale’s The Walking Dead", "Titanfall 2",
  "Undertale", "Unturned", "Until Dawn", "Uncharted 4", "Ultra Kill",
  "Valorant", "V Rising", "Vampyr", "Vampire Survivors", "Valheim",
  "Warframe", "Witch It", "Watch Dogs 2", "Wasteland 3", "We Happy Few",
  "XCOM 2", "Xenoblade Chronicles 3", "X-Blades", "XIII", "X-Plane 12",
  "Yakuza: Like a Dragon", "Yooka-Laylee", "Ys IX: Monstrum Nox", "Youtubers Life", "YesterMorrow",
  "Zelda: Breath of the Wild", "Zombie Army 4", "Zomboid Survival", "Zoo Tycoon", "Ziggurat 2"
];

function filtrarJogos() {
  const texto = document.getElementById("jogo").value.toLowerCase();
  const areaSelect = document.getElementById("areaSelect");
  areaSelect.innerHTML = ""; // limpa o conteúdo anterior
  document.getElementById("res").innerHTML = "";

  // só mostra o select se houver algo digitado
  if (texto.length < 1) return;

  // filtra jogos que comecem OU contenham o texto
  const filtrados = listaJogos.filter(j =>
    j.toLowerCase().includes(texto)
  );

  if (filtrados.length === 0) {
    areaSelect.innerHTML = "<p>Nenhum jogo encontrado 😢</p>";
    return;
  }

  const select = document.createElement("select");
  select.id = "listaDeJogos";

  const opcaoPadrao = document.createElement("option");
  opcaoPadrao.text = "-- Selecione um jogo --";
  opcaoPadrao.value = "";
  select.appendChild(opcaoPadrao);

  filtrados.forEach(jogo => {
    const opt = document.createElement("option");
    opt.value = jogo;
    opt.text = jogo;
    select.appendChild(opt);
  });

  areaSelect.appendChild(select);

  select.addEventListener("change", () => {
    const valor = select.value;
    document.getElementById("res").innerHTML = valor
      ? `🎮 Você escolheu: <b>${valor}</b>`
      : "";
  });
}

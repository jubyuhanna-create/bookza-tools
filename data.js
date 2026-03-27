const HERO_DB = [
  {
    "name": "D.Va",
    "role": "Tank",
    "strong_against": [
      "Pharah",
      "Echo",
      "Widowmaker",
      "Hanzo",
      "Winston"
    ],
    "weak_against": [
      "Zarya",
      "Symmetra",
      "Mei",
      "Reaper"
    ],
    "tips": [
      "Use Defense Matrix to deny burst windows and key cooldowns, not random poke.",
      "Boost onto isolated hitscans or supports, then peel back before your mech gets burned.",
      "Track enemy beams; avoid long front-line trades into Zarya or Symmetra."
    ],
    "image": "assets/icons/D.Va.png"
  },
  {
    "name": "Doomfist",
    "role": "Tank",
    "strong_against": [
      "Widowmaker",
      "Ana",
      "Zenyatta",
      "Hanzo",
      "Ashe"
    ],
    "weak_against": [
      "Sombra",
      "Orisa",
      "Roadhog",
      "Cassidy",
      "Brigitte"
    ],
    "tips": [
      "Cycle Slam, Block, and Punch so you always leave with a cooldown.",
      "Farm empowered punch off predictable damage instead of forcing dry engages.",
      "Dive immobile backliners from off-angles, not straight through the tank line."
    ],
    "image": "assets/icons/Doomfist.png"
  },
  {
    "name": "Domina",
    "role": "Tank",
    "strong_against": [
      "Reinhardt",
      "Sigma",
      "Junker Queen",
      "Zarya",
      "Ramattra"
    ],
    "weak_against": [
      "Pharah",
      "Echo",
      "Widowmaker",
      "Ana"
    ],
    "tips": [
      "Anchor chokes and force close-range brawls where your space control matters most.",
      "Take short, aggressive angles only when your team can follow the pull or displacement.",
      "Respect vertical comps; rotate through cover instead of walking open sightlines."
    ],
    "image": "assets/icons/Domina.png"
  },
  {
    "name": "Hazard",
    "role": "Tank",
    "strong_against": [
      "Tracer",
      "Genji",
      "Lúcio",
      "Sombra",
      "Wrecking Ball"
    ],
    "weak_against": [
      "Reaper",
      "Bastion",
      "Mauga",
      "Pharah"
    ],
    "tips": [
      "Hold narrow corridors where your zone control punishes fast flankers.",
      "Use your displacement to break dive timing before the enemy reaches your supports.",
      "Do not overchase into open maps where long-range damage can burn you down."
    ],
    "image": "assets/icons/Hazard.png"
  },
  {
    "name": "Junker Queen",
    "role": "Tank",
    "strong_against": [
      "Roadhog",
      "Reinhardt",
      "Mauga",
      "Zarya",
      "Ramattra"
    ],
    "weak_against": [
      "Ana",
      "Kiriko",
      "Zenyatta",
      "Pharah"
    ],
    "tips": [
      "Knife pull into Carnage is your cleanest punish on overextended targets.",
      "Use Commanding Shout for tempo and rotations, not only panic saves.",
      "Anti-heal ruins your sustain, so bait Ana grenade before committing hard."
    ],
    "image": "assets/icons/Junker Queen.png"
  },
  {
    "name": "Mauga",
    "role": "Tank",
    "strong_against": [
      "Winston",
      "Doomfist",
      "Ramattra",
      "Wrecking Ball",
      "Reinhardt"
    ],
    "weak_against": [
      "Ana",
      "D.Va",
      "Sigma",
      "Zenyatta",
      "Reaper"
    ],
    "tips": [
      "Burn tanks and barriers to build pressure, then hard-focus squishies caught in the open.",
      "Cardiac Overdrive wins committed brawls; pop it before you are critical.",
      "Avoid feeding long sightlines when anti-heal and discord are available."
    ],
    "image": "assets/icons/Mauga.png"
  },
  {
    "name": "Orisa",
    "role": "Tank",
    "strong_against": [
      "Doomfist",
      "Reinhardt",
      "Roadhog",
      "Wrecking Ball",
      "Junker Queen"
    ],
    "weak_against": [
      "Zarya",
      "Symmetra",
      "Bastion",
      "Hanzo"
    ],
    "tips": [
      "Rotate Fortify and Javelin Spin instead of stacking both defensives at once.",
      "Javelin is strongest as an interrupt tool against dives, channels, and exposed targets.",
      "Play corners and short sightlines so your sustain outlasts enemy burst."
    ],
    "image": "assets/icons/Orisa.png"
  },
  {
    "name": "Ramattra",
    "role": "Tank",
    "strong_against": [
      "Reinhardt",
      "Sigma",
      "Brigitte",
      "Zarya",
      "Torbjörn"
    ],
    "weak_against": [
      "Roadhog",
      "Ana",
      "Bastion",
      "Pharah"
    ],
    "tips": [
      "Use Omnic form to poke and force cooldowns before entering Nemesis.",
      "Pummel through barriers when enemies stack behind shields or cart.",
      "Vortex is best when it traps retreats or grounds aerial heroes, not as random poke."
    ],
    "image": "assets/icons/Ramattra.png"
  },
  {
    "name": "Reinhardt",
    "role": "Tank",
    "strong_against": [
      "Soldier:76",
      "Ashe",
      "Widowmaker",
      "Hanzo",
      "Zenyatta"
    ],
    "weak_against": [
      "Bastion",
      "Reaper",
      "Symmetra",
      "Pharah",
      "Orisa"
    ],
    "tips": [
      "Path from corner to corner; your shield is a taxi, not a permanent wall.",
      "Swing only when your supports can see you or when enemy burst is on cooldown.",
      "Look for Fire Strike value through grouped enemies to accelerate Earthshatter."
    ],
    "image": "assets/icons/Reinhardt.png"
  },
  {
    "name": "Roadhog",
    "role": "Tank",
    "strong_against": [
      "Winston",
      "Doomfist",
      "Genji",
      "Tracer",
      "Wrecking Ball"
    ],
    "weak_against": [
      "Ana",
      "Reaper",
      "Mauga",
      "Zenyatta",
      "Orisa"
    ],
    "tips": [
      "Hook from cover so enemies cannot instantly punish your peek.",
      "Use Take a Breather proactively for damage reduction during enemy burst cycles.",
      "Confirm hooks with your team when targets have mobility or peel available."
    ],
    "image": "assets/icons/Roadhog.png"
  },
  {
    "name": "Sigma",
    "role": "Tank",
    "strong_against": [
      "Bastion",
      "Soldier:76",
      "Mauga",
      "Hanzo",
      "Ashe"
    ],
    "weak_against": [
      "Zarya",
      "Symmetra",
      "Reinhardt",
      "Winston"
    ],
    "tips": [
      "Alternate barrier, corners, and grasp to deny angles without overexposing.",
      "Rock is your punish tool for predictable movement, not random spam.",
      "Sigma is strongest on mid-range maps where he can control multiple lanes."
    ],
    "image": "assets/icons/Sigma.png"
  },
  {
    "name": "Winston",
    "role": "Tank",
    "strong_against": [
      "Widowmaker",
      "Hanzo",
      "Ana",
      "Zenyatta",
      "Ashe"
    ],
    "weak_against": [
      "Reaper",
      "Bastion",
      "Roadhog",
      "Mauga",
      "Brigitte"
    ],
    "tips": [
      "Jump only when your bubble and team follow-up are ready.",
      "Bubble dance to cut healing and line-of-sight while you finish isolated targets.",
      "Primal Rage is often better as disruption and stall than pure kill pressure."
    ],
    "image": "assets/icons/Winston.png"
  },
  {
    "name": "Wrecking Ball",
    "role": "Tank",
    "strong_against": [
      "Widowmaker",
      "Zenyatta",
      "Ashe",
      "Ana",
      "Baptiste"
    ],
    "weak_against": [
      "Sombra",
      "Brigitte",
      "Mei",
      "Cassidy",
      "Roadhog"
    ],
    "tips": [
      "Scout first, engage second; Ball wins on timing and information.",
      "Pile-drive when your team has angle pressure, not when they are resetting.",
      "Adaptive Shields give maximum value in the middle of multiple enemies."
    ],
    "image": "assets/icons/Wrecking Ball.png"
  },
  {
    "name": "Zarya",
    "role": "Tank",
    "strong_against": [
      "D.Va",
      "Orisa",
      "Sigma",
      "Genji",
      "Junker Queen"
    ],
    "weak_against": [
      "Reinhardt",
      "Bastion",
      "Pharah",
      "Widowmaker"
    ],
    "tips": [
      "Use bubbles to convert enemy aggression into energy, not to block chip damage.",
      "High energy means you can threaten squishies from shorter angles than most tanks.",
      "Call your projected bubble timing so teammates know when to push."
    ],
    "image": "assets/icons/Zarya.png"
  },
  {
    "name": "Anran",
    "role": "Damage",
    "strong_against": [
      "D.Va",
      "Genji",
      "Sigma",
      "Winston",
      "Echo"
    ],
    "weak_against": [
      "Zarya",
      "Reaper",
      "Mei",
      "Widowmaker"
    ],
    "tips": [
      "Take medium-range off-angles where sustained pressure forces tanks to turn.",
      "Punish mobile divers after they commit, when their escape tools are gone.",
      "Do not duel beam tanks in close space unless your team is already collapsing."
    ],
    "image": "assets/icons/Anran.png"
  },
  {
    "name": "Ashe",
    "role": "Damage",
    "strong_against": [
      "Pharah",
      "Echo",
      "Mercy",
      "Juno",
      "Illari"
    ],
    "weak_against": [
      "Widowmaker",
      "Winston",
      "Genji",
      "D.Va",
      "Tracer"
    ],
    "tips": [
      "Use Dynamite on grouped enemies or supports playing behind the tank.",
      "Coach Gun is mostly for spacing and off-angle access, not desperation damage.",
      "Swap positions often so dive heroes cannot pre-path to your perch."
    ],
    "image": "assets/icons/Ashe.png"
  },
  {
    "name": "Bastion",
    "role": "Damage",
    "strong_against": [
      "Reinhardt",
      "Winston",
      "Mauga",
      "Ramattra",
      "Wrecking Ball"
    ],
    "weak_against": [
      "Genji",
      "Sigma",
      "Ana",
      "Hanzo",
      "Widowmaker"
    ],
    "tips": [
      "Save Assault form for real commit windows, especially when tanks lose cover.",
      "Transform behind corners so the enemy sees the damage late.",
      "Grenade jumps can create better angles than staying glued to main."
    ],
    "image": "assets/icons/Bastion.png"
  },
  {
    "name": "Cassidy",
    "role": "Damage",
    "strong_against": [
      "Tracer",
      "Genji",
      "Sombra",
      "Echo",
      "Pharah"
    ],
    "weak_against": [
      "Widowmaker",
      "Ashe",
      "Hanzo",
      "Sigma"
    ],
    "tips": [
      "Hold stable mid-range angles where you can punish dives on reaction.",
      "Use Magnetic Grenade to force cooldowns, then finish with clean primary shots.",
      "Deadeye is strongest for zoning rotations or punishing shieldless enemies."
    ],
    "image": "assets/icons/Cassidy.png"
  },
  {
    "name": "Echo",
    "role": "Damage",
    "strong_against": [
      "Pharah",
      "Junkrat",
      "Reaper",
      "Winston",
      "Ramattra"
    ],
    "weak_against": [
      "Cassidy",
      "Ashe",
      "Widowmaker",
      "Soldier:76",
      "D.Va"
    ],
    "tips": [
      "Open with sticky bombs, then beam once the target drops low.",
      "Take vertical off-angles so enemies must split attention from the front line.",
      "Duplicate tanks when your team needs tempo, space, or a second life bar."
    ],
    "image": "assets/icons/Echo.png"
  },
  {
    "name": "Freja",
    "role": "Damage",
    "strong_against": [
      "Widowmaker",
      "Hanzo",
      "Ana",
      "Zenyatta",
      "Ashe"
    ],
    "weak_against": [
      "Winston",
      "D.Va",
      "Reaper",
      "Tracer"
    ],
    "tips": [
      "Use mobility to break sniper sightlines before finishing the duel.",
      "Play from layered cover so you can re-peek without giving a full body angle.",
      "When pressured, kite toward your supports instead of taking isolated 1v2 fights."
    ],
    "image": "assets/icons/Freja.png"
  },
  {
    "name": "Genji",
    "role": "Damage",
    "strong_against": [
      "Widowmaker",
      "Bastion",
      "Ashe",
      "Ana",
      "Zenyatta"
    ],
    "weak_against": [
      "Zarya",
      "Mei",
      "Symmetra",
      "Winston",
      "Brigitte"
    ],
    "tips": [
      "Dash only when you can confirm a reset or secure escape.",
      "Deflect is a tempo tool; absorb key shots and instantly counter-engage.",
      "Blade is strongest after enemy crowd control and defensive ults are tracked."
    ],
    "image": "assets/icons/Genji.png"
  },
  {
    "name": "Hanzo",
    "role": "Damage",
    "strong_against": [
      "Bastion",
      "Torbjörn",
      "Symmetra",
      "Orisa",
      "Mauga"
    ],
    "weak_against": [
      "Winston",
      "D.Va",
      "Genji",
      "Tracer",
      "Widowmaker"
    ],
    "tips": [
      "Sonic Arrow before peeking lets you take safer duels and pre-aim corners.",
      "Storm Arrows are ideal for tanks that walk predictable paths through chokes.",
      "Rotate after picks so dives cannot punish your previous position."
    ],
    "image": "assets/icons/Hanzo.png"
  },
  {
    "name": "Junkrat",
    "role": "Damage",
    "strong_against": [
      "Reinhardt",
      "Brigitte",
      "Bastion",
      "Zarya",
      "Symmetra"
    ],
    "weak_against": [
      "Pharah",
      "Echo",
      "Widowmaker",
      "Ashe"
    ],
    "tips": [
      "Spam chokes before fights and save mines for kill confirms once chaos starts.",
      "Trap flank routes and health packs to punish predictable movement.",
      "Do not mirror spam in long sightlines against hitscan-heavy comps."
    ],
    "image": "assets/icons/Junkrat.png"
  },
  {
    "name": "Mei",
    "role": "Damage",
    "strong_against": [
      "Genji",
      "D.Va",
      "Roadhog",
      "Wrecking Ball",
      "Doomfist"
    ],
    "weak_against": [
      "Pharah",
      "Widowmaker",
      "Echo",
      "Ashe"
    ],
    "tips": [
      "Wall isolated tanks away from healing instead of blocking random damage.",
      "Cryo-Freeze buys time for cooldowns and cleanses several harmful effects.",
      "Mei thrives in tight maps where enemies cannot easily disengage your slow."
    ],
    "image": "assets/icons/Mei.png"
  },
  {
    "name": "Pharah",
    "role": "Damage",
    "strong_against": [
      "Junkrat",
      "Reaper",
      "Mei",
      "Symmetra",
      "Brigitte"
    ],
    "weak_against": [
      "Ashe",
      "Widowmaker",
      "Cassidy",
      "Soldier:76",
      "D.Va"
    ],
    "tips": [
      "Use rooftops and map geometry so you are not hovering in open sky forever.",
      "Concussive Blast is a positioning tool first and a damage tool second.",
      "Play tighter angles when the enemy has multiple hitscans or Discord Orb."
    ],
    "image": "assets/icons/Pharah.png"
  },
  {
    "name": "Reaper",
    "role": "Damage",
    "strong_against": [
      "Winston",
      "Roadhog",
      "Mauga",
      "Ramattra",
      "Doomfist"
    ],
    "weak_against": [
      "Pharah",
      "Echo",
      "Widowmaker",
      "Cassidy"
    ],
    "tips": [
      "Stage on flanks before the fight; walking through main wastes your threat.",
      "Wraith Form is your exit ticket, so do not use it just to enter.",
      "Focus tanks only when you can do so from safe corners or after a collapse."
    ],
    "image": "assets/icons/Reaper.png"
  },
  {
    "name": "Sojourn",
    "role": "Damage",
    "strong_against": [
      "Mauga",
      "Roadhog",
      "Pharah",
      "Echo",
      "Mercy"
    ],
    "weak_against": [
      "Widowmaker",
      "Genji",
      "Tracer",
      "Winston"
    ],
    "tips": [
      "Charge rail on tanks, then instantly flick to a squishy target.",
      "Disruptor Shot controls space and punishes enemies who hold corners too long.",
      "Slide early to claim strong angles instead of escaping late."
    ],
    "image": "assets/icons/Sojourn.png"
  },
  {
    "name": "Soldier:76",
    "role": "Damage",
    "strong_against": [
      "Pharah",
      "Mercy",
      "Echo",
      "Juno",
      "Illari"
    ],
    "weak_against": [
      "Genji",
      "D.Va",
      "Sigma",
      "Widowmaker"
    ],
    "tips": [
      "Own high ground whenever possible; your pressure drops sharply from low ground.",
      "Helix Rocket plus primary fire is your fastest burst combo on squishies.",
      "Biotic Field lets you hold angles longer, but do not duel hard snipers in the open."
    ],
    "image": "assets/icons/Soldier 76.png"
  },
  {
    "name": "Sombra",
    "role": "Damage",
    "strong_against": [
      "Doomfist",
      "Wrecking Ball",
      "Widowmaker",
      "Zenyatta",
      "Sigma"
    ],
    "weak_against": [
      "Cassidy",
      "Brigitte",
      "Winston",
      "Torbjörn"
    ],
    "tips": [
      "Hack engages are strongest when your team is already ready to pounce.",
      "Farm EMP on tanks, then use it to break a key defensive setup or ultimate fight.",
      "Translocator should be placed for fast re-entry, not full disengage across the map."
    ],
    "image": "assets/icons/Sombra.png"
  },
  {
    "name": "Symmetra",
    "role": "Damage",
    "strong_against": [
      "D.Va",
      "Genji",
      "Reinhardt",
      "Sigma",
      "Winston"
    ],
    "weak_against": [
      "Pharah",
      "Echo",
      "Junkrat",
      "Hanzo"
    ],
    "tips": [
      "Use Teleporter creatively for rushes, rotations, and surprise off-angles.",
      "Turrets are best when layered around a turn or on retreat paths.",
      "Beam tanks only when you have cover and healing support nearby."
    ],
    "image": "assets/icons/Symmetra.png"
  },
  {
    "name": "Torbjörn",
    "role": "Damage",
    "strong_against": [
      "Tracer",
      "Genji",
      "Sombra",
      "Wrecking Ball",
      "Lúcio"
    ],
    "weak_against": [
      "Widowmaker",
      "Hanzo",
      "Pharah",
      "Echo"
    ],
    "tips": [
      "Place turrets where they see the fight late, not where they are instantly destroyed.",
      "Overload is a duel and tempo cooldown; use it before taking damage.",
      "Molten Core is excellent for splitting tanks from their backline."
    ],
    "image": "assets/icons/Torbjörn.png"
  },
  {
    "name": "Tracer",
    "role": "Damage",
    "strong_against": [
      "Zenyatta",
      "Widowmaker",
      "Ana",
      "Hanzo",
      "Baptiste"
    ],
    "weak_against": [
      "Torbjörn",
      "Symmetra",
      "Brigitte",
      "Cassidy",
      "Moira"
    ],
    "tips": [
      "Poke to force cooldowns before fully committing for a one-clip.",
      "Always preserve one blink or recall for the escape path.",
      "Pulse Bomb is easiest on targets with no movement or after crowd control."
    ],
    "image": "assets/icons/Tracer.png"
  },
  {
    "name": "Vendetta",
    "role": "Damage",
    "strong_against": [
      "Sombra",
      "Tracer",
      "Lúcio",
      "Genji",
      "Wrecking Ball"
    ],
    "weak_against": [
      "Winston",
      "Zarya",
      "Reaper",
      "Widowmaker"
    ],
    "tips": [
      "Play anti-flank angles where your trap and tracking pressure can protect supports.",
      "Punish mobile heroes after they burn movement cooldowns on entry.",
      "Avoid long sniper lanes and beam-heavy rush comps that collapse your space quickly."
    ],
    "image": "assets/icons/Vendetta.png"
  },
  {
    "name": "Venture",
    "role": "Damage",
    "strong_against": [
      "Widowmaker",
      "Ashe",
      "Zenyatta",
      "Ana",
      "Sigma"
    ],
    "weak_against": [
      "Pharah",
      "Echo",
      "Cassidy",
      "Mei"
    ],
    "tips": [
      "Take underground or side-path engages so the enemy loses track of your timing.",
      "Burst targets after surfacing, then leave before peel arrives.",
      "Venture wins in layered terrain and short cover, not extended poke wars."
    ],
    "image": "assets/icons/Venture.png"
  },
  {
    "name": "Widowmaker",
    "role": "Damage",
    "strong_against": [
      "Pharah",
      "Mercy",
      "Zenyatta",
      "Hanzo",
      "Ashe"
    ],
    "weak_against": [
      "Winston",
      "D.Va",
      "Genji",
      "Sombra",
      "Venture"
    ],
    "tips": [
      "Change positions after a few shots to avoid predictable dive paths.",
      "Use Venom Mine on your flank route, not only the objective.",
      "Do not force mirror duels without cover advantage or support attention."
    ],
    "image": "assets/icons/Widowmaker.png"
  },
  {
    "name": "Ana",
    "role": "Support",
    "strong_against": [
      "Roadhog",
      "Mauga",
      "Bastion",
      "Reinhardt",
      "Ramattra"
    ],
    "weak_against": [
      "Genji",
      "Tracer",
      "Sombra",
      "Winston",
      "Venture"
    ],
    "tips": [
      "Biotic Grenade can decide the whole fight; do not waste it on light poke.",
      "Save Sleep Dart for divers, ults, or the first hero to overcommit.",
      "Play long angles with cover so you can heal safely while remaining hard to dive."
    ],
    "image": "assets/icons/Ana.png"
  },
  {
    "name": "Baptiste",
    "role": "Support",
    "strong_against": [
      "Pharah",
      "Echo",
      "Junkrat",
      "Reaper",
      "Mauga"
    ],
    "weak_against": [
      "Sombra",
      "Genji",
      "Tracer",
      "Widowmaker"
    ],
    "tips": [
      "Weave damage between heals whenever your team is stable.",
      "Lamp belongs behind cover or around corners where enemies cannot instantly break it.",
      "Exo Boots let you keep high ground and survive dive pressure longer."
    ],
    "image": "assets/icons/Baptiste.png"
  },
  {
    "name": "Brigitte",
    "role": "Support",
    "strong_against": [
      "Genji",
      "Tracer",
      "Sombra",
      "Wrecking Ball",
      "Doomfist"
    ],
    "weak_against": [
      "Pharah",
      "Echo",
      "Junkrat",
      "Ramattra",
      "Sigma"
    ],
    "tips": [
      "Trigger Inspire early with Whip Shot so healing is already running when dive starts.",
      "Stay near your other support; Brig is strongest as a bodyguard, not a solo flanker.",
      "Shield Bash is mainly for spacing, peeling, and stun setups with your team."
    ],
    "image": "assets/icons/Brigitte.png"
  },
  {
    "name": "Illari",
    "role": "Support",
    "strong_against": [
      "Pharah",
      "Mercy",
      "Lúcio",
      "Echo",
      "Juno"
    ],
    "weak_against": [
      "D.Va",
      "Genji",
      "Winston",
      "Tracer"
    ],
    "tips": [
      "Hide Healing Pylon high or deep so it survives the first enemy glance.",
      "Your rifle is lethal from stable off-angles; do not waste time hard-scoping in the open.",
      "Use Outburst to save yourself from dives or to steal high ground quickly."
    ],
    "image": "assets/icons/Illari.png"
  },
  {
    "name": "Jetpack Cat",
    "role": "Support",
    "strong_against": [
      "Reinhardt",
      "Brigitte",
      "Doomfist",
      "Junker Queen"
    ],
    "weak_against": [
      "Soldier:76",
      "Ashe",
      "Widowmaker",
      "Cassidy"
    ],
    "tips": [
      "Abuse vertical spacing so brawl heroes cannot easily touch you.",
      "Pocket teammates entering aggressive angles, then rotate before hitscan lines up.",
      "Avoid skyboxing in open maps against disciplined long-range damage."
    ],
    "image": "assets/icons/Jetpack Cat.png"
  },
  {
    "name": "Juno",
    "role": "Support",
    "strong_against": [
      "Zenyatta",
      "Ana",
      "Ashe",
      "Widowmaker"
    ],
    "weak_against": [
      "Sombra",
      "Tracer",
      "D.Va",
      "Winston"
    ],
    "tips": [
      "Use mobility to maintain wide sightlines on your whole team without overexposing.",
      "Accelerate engages when your tank is ready, not while your team is still rotating.",
      "Stay unpredictable vertically so flankers cannot path cleanly onto you."
    ],
    "image": "assets/icons/Juno.png"
  },
  {
    "name": "Kiriko",
    "role": "Support",
    "strong_against": [
      "Ana",
      "Junker Queen",
      "Zarya",
      "Reinhardt",
      "Roadhog"
    ],
    "weak_against": [
      "Tracer",
      "Genji",
      "Winston",
      "Sombra"
    ],
    "tips": [
      "Suzu is most valuable as a cleanse or clutch save, not casual sustain.",
      "Take off-angles for headshots only when Swift Step can get you back out.",
      "Kitsune Rush is strongest when your team can instantly flood space through it."
    ],
    "image": "assets/icons/Kiriko.png"
  },
  {
    "name": "Lifeweaver",
    "role": "Support",
    "strong_against": [
      "Zarya",
      "Orisa",
      "Sigma",
      "Reinhardt",
      "Junker Queen"
    ],
    "weak_against": [
      "Sombra",
      "Tracer",
      "Genji",
      "Winston"
    ],
    "tips": [
      "Life Grip should save committed teammates from lethal mistakes or enemy ultimates.",
      "Petal Platform can break sightlines, save supports, or lift allies onto better angles.",
      "Do not drift too far forward; your value drops sharply if you get forced first."
    ],
    "image": "assets/icons/Lifeweaver.png"
  },
  {
    "name": "Lúcio",
    "role": "Support",
    "strong_against": [
      "Widowmaker",
      "Hanzo",
      "Reinhardt",
      "Zenyatta",
      "Ana"
    ],
    "weak_against": [
      "Sombra",
      "Cassidy",
      "Symmetra",
      "Mei",
      "Torbjörn"
    ],
    "tips": [
      "Speed wins engages, disengages, and corner rotations more often than healing does.",
      "Harass isolated backliners only when your team is not losing the front-line race.",
      "Wall ride through awkward geometry so enemies cannot track you consistently."
    ],
    "image": "assets/icons/Lúcio.png"
  },
  {
    "name": "Mercy",
    "role": "Support",
    "strong_against": [
      "Junkrat",
      "Reaper",
      "Hanzo",
      "Pharah",
      "Echo"
    ],
    "weak_against": [
      "Widowmaker",
      "Ashe",
      "Soldier:76",
      "Genji",
      "Sombra"
    ],
    "tips": [
      "Damage boost should be your default beam when allies are safe.",
      "Use Guardian Angel routes with cover in mind before attempting a resurrection.",
      "Mercy is strongest when amplifying a carry angle, not healing tanks through burst."
    ],
    "image": "assets/icons/Mercy.png"
  },
  {
    "name": "Mizuki",
    "role": "Support",
    "strong_against": [
      "D.Va",
      "Winston",
      "Genji",
      "Reinhardt"
    ],
    "weak_against": [
      "Widowmaker",
      "Ashe",
      "Hanzo",
      "Sombra"
    ],
    "tips": [
      "Play fluid mid-range angles where you can slow or punish heroes entering your space.",
      "Use your escape window before enemy burst fully arrives, not after.",
      "Pair with brawl or anti-dive teammates who can capitalize on your control."
    ],
    "image": "assets/icons/Mizuki.png"
  },
  {
    "name": "Moira",
    "role": "Support",
    "strong_against": [
      "Genji",
      "Tracer",
      "Lúcio",
      "Sombra",
      "Reaper"
    ],
    "weak_against": [
      "D.Va",
      "Roadhog",
      "Ana",
      "Widowmaker"
    ],
    "tips": [
      "Healing orb usually gives more fight-winning value than damage orb.",
      "Fade aggressively only when you are certain the enemy cannot punish the exit.",
      "Moira excels in messy close-range fights where aim pressure matters less."
    ],
    "image": "assets/icons/Moira.png"
  },
  {
    "name": "Wuyang",
    "role": "Support",
    "strong_against": [
      "Sombra",
      "Widowmaker",
      "Tracer",
      "Genji"
    ],
    "weak_against": [
      "Winston",
      "D.Va",
      "Reaper",
      "Pharah"
    ],
    "tips": [
      "Hold anti-flank positions where your control tools protect the backline.",
      "Punish divers after they commit instead of trying to chase poke heroes.",
      "Stay near peel so dive tanks cannot isolate you during cooldown gaps."
    ],
    "image": "assets/icons/Wuyang.png"
  },
  {
    "name": "Zenyatta",
    "role": "Support",
    "strong_against": [
      "Roadhog",
      "Mauga",
      "Reinhardt",
      "Bastion",
      "Ramattra"
    ],
    "weak_against": [
      "Tracer",
      "Sombra",
      "Genji",
      "Widowmaker",
      "Winston"
    ],
    "tips": [
      "Discord the highest-value reachable target, usually the tank or exposed flanker.",
      "Play long sightlines with cover because you have no real escape tool.",
      "Transcendence is strongest as a counter-ult or tempo stabilizer, not late panic."
    ],
    "image": "assets/icons/Zenyatta.png"
  }
];

const HERO_PATCHES = {
  "D.Va": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Micro Missiles damage per rocket reduced from 7 to 6.", "Defense Matrix resource drain rate decreased by 12%, lasting longer before depletion.", "Boosters cooldown reduced from 4s to 3.5s."] },
  "Doomfist": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Power Block damage reduction increased from 80% to 85%.", "Meteor Strike outer ring damage increased from 15-100 to 50-100.", "Rocket Punch wall-slam damage reduced from 20-40 to 15-30."] },
  "Domina": { date: "2026-03-12", patch: "Season 15 Mid-Cycle", changes: ["Primary fire projectile speed increased by 8%.", "Displacement ability cooldown increased from 8s to 9s.", "Ultimate charge cost increased by 5%."] },
  "Hazard": { date: "2026-03-12", patch: "Season 15 Mid-Cycle", changes: ["Zone control ability duration reduced from 5s to 4s.", "Base armor increased from 300 to 325.", "Wall ability health reduced from 400 to 350."] },
  "Junker Queen": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Jagged Blade wound damage increased from 15 to 20 over 3s.", "Commanding Shout overhealth reduced from 150 to 125.", "Carnage wound damage increased from 40 to 45 over 3s."] },
  "Mauga": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Incendiary and Volatile chaingun damage per bullet reduced from 4.5 to 4.", "Cardiac Overdrive lifesteal reduced from 60% to 50%.", "Cage Fight now blocks line of sight for enemies outside."] },
  "Orisa": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Energy Javelin damage reduced from 60 to 50.", "Fortify bonus health increased from 125 to 150.", "Terra Surge pull strength reduced by 10%."] },
  "Ramattra": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Nemesis Form pummel damage increased from 60 to 65.", "Ravenous Vortex slow duration increased from 0.75s to 1s.", "Annihilation damage per second reduced from 30 to 25."] },
  "Reinhardt": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Barrier Field health increased from 1200 to 1400.", "Fire Strike damage reduced from 100 to 90.", "Charge pin damage remains at 225."] },
  "Roadhog": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Chain Hook cooldown increased from 8s to 8.5s.", "Pig Pen trap slow duration increased from 3s to 3.5s.", "Whole Hog knockback reduced by 8%."] },
  "Sigma": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Hyperspheres impact damage reduced from 35 to 33.", "Kinetic Grasp converted health increased from 40% to 45%.", "Accretion stun duration on direct hit increased from 0.8s to 1s."] },
  "Winston": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Tesla Cannon damage increased from 60 to 65 DPS.", "Barrier Projector cooldown reduced from 13s to 12s.", "Jump Pack landing damage radius reduced by 5%."] },
  "Wrecking Ball": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Grappling Claw speed threshold for Fireball reduced.", "Adaptive Shield overhealth per nearby enemy increased from 75 to 85.", "Piledriver cooldown reduced from 10s to 9s."] },
  "Zarya": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Particle Cannon beam width reduced by 8%.", "Projected Barrier cooldown reduced from 10s to 9s.", "Graviton Surge radius reduced from 7m to 6.5m."] },
  "Anran": { date: "2026-03-12", patch: "Season 15 Mid-Cycle", changes: ["Primary fire damage per tick increased by 5%.", "Mobility cooldown reduced from 7s to 6.5s.", "Ultimate charge cost reduced by 4%."] },
  "Ashe": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Viper hip-fire damage reduced from 22.75 to 21.", "Dynamite burn damage per second reduced from 20 to 18.", "Coach Gun knockback on self increased slightly for better escapes."] },
  "Bastion": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Configuration Assault duration reduced from 6s to 5.5s.", "A-36 Tactical Grenade now bounces once before detonating.", "Ironclad passive damage reduction increased from 20% to 22%."] },
  "Cassidy": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Magnetic Grenade damage reduced from 131 to 120.", "Peacekeeper fall-off range extended from 25m to 28m.", "Deadeye damage ramp-up speed increased by 6%."] },
  "Echo": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Focusing Beam threshold reduced from 50% to 45% HP.", "Sticky Bombs damage per bomb reduced from 25 to 22.", "Duplicate duration increased from 15s to 16s."] },
  "Freja": { date: "2026-03-12", patch: "Season 15 Mid-Cycle", changes: ["Primary fire projectile speed increased by 6%.", "Escape ability cooldown reduced from 9s to 8s.", "Ultimate damage per tick reduced by 5%."] },
  "Genji": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Shuriken damage increased from 27 to 28.", "Deflect duration reduced from 2s to 1.75s.", "Dragonblade swing speed remains unchanged."] },
  "Hanzo": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Storm Arrows damage per arrow reduced from 65 to 60.", "Sonic Arrow detection radius increased from 9m to 10m.", "Dragonstrike travel speed increased by 10%."] },
  "Junkrat": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Frag Launcher projectile size reduced by 5%.", "Steel Trap damage increased from 80 to 85.", "RIP-Tire movement speed increased by 8%."] },
  "Mei": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Endothermic Blaster slow now stacks 10% faster.", "Ice Wall pillar health reduced from 250 to 225.", "Blizzard ultimate cost reduced by 6%."] },
  "Pharah": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Rocket Launcher direct hit damage remains at 120.", "Jet Dash cooldown reduced from 8s to 7s.", "Barrage missile damage reduced from 36 to 33 per rocket."] },
  "Reaper": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Hellfire Shotguns spread reduced by 5%.", "Shadow Step cast time reduced from 1.5s to 1.2s.", "The Reaping passive lifesteal reduced from 30% to 28%."] },
  "Sojourn": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Railgun Alt Fire maximum damage reduced from 130 to 120.", "Disruptor Shot slow increased from 20% to 25%.", "Overclock duration reduced from 9s to 8s."] },
  "Soldier:76": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Heavy Pulse Rifle damage reduced from 18 to 17.", "Biotic Field healing per second increased from 35 to 38.", "Tactical Visor now locks onto targets 5% faster."] },
  "Sombra": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Virus damage over time reduced from 90 to 80.", "Hack cooldown increased from 4s to 5s.", "EMP now deals 30% of current HP instead of 40%."] },
  "Symmetra": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Photon Projector beam charge rate increased by 10%.", "Sentry Turret slow reduced from 20% to 15%.", "Teleporter cooldown reduced from 16s to 14s."] },
  "Torbjörn": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Overload armor bonus reduced from 100 to 80.", "Deploy Turret health increased from 250 to 275.", "Molten Core damage per second increased from 130 to 140."] },
  "Tracer": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Pulse Pistols damage per bullet reduced from 6 to 5.5.", "Blink charges remain at 3.", "Pulse Bomb damage increased from 350 to 365."] },
  "Vendetta": { date: "2026-03-12", patch: "Season 15 Mid-Cycle", changes: ["Trap cooldown reduced from 10s to 9s.", "Primary fire rate increased by 4%.", "Ultimate duration reduced from 7s to 6s."] },
  "Venture": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Burrow movement speed reduced by 6%.", "Drill Dash damage increased from 40 to 45.", "Tectonic Shock wave count remains at 4."] },
  "Widowmaker": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Widow's Kiss scoped damage reduced from 120 to 115 (fully charged).", "Grappling Hook cooldown reduced from 12s to 11s.", "Infra-Sight duration reduced from 15s to 12s."] },
  "Ana": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Biotic Rifle healing per shot increased from 70 to 75.", "Sleep Dart cooldown increased from 15s to 16s.", "Nano Boost healing burst increased from 250 to 275."] },
  "Baptiste": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Regenerative Burst total healing reduced from 150 to 140.", "Amplification Matrix duration increased from 10s to 11s.", "Exo Boots charge time reduced by 10%."] },
  "Brigitte": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Shield Bash damage reduced from 50 to 45.", "Repair Pack healing per second increased from 55 to 60.", "Rally ultimate overhealth cap reduced from 100 to 85."] },
  "Illari": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Solar Rifle damage reduced from 75 to 70.", "Healing Pylon healing per second increased from 40 to 45.", "Captive Sun slow duration reduced from 1.25s to 1s."] },
  "Jetpack Cat": { date: "2026-03-12", patch: "Season 15 Mid-Cycle", changes: ["Fuel consumption rate reduced by 8%.", "Primary fire damage per burst reduced from 45 to 42.", "Healing aura radius increased from 10m to 11m."] },
  "Juno": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Pulsar Torpedoes healing reduced from 50 to 45 per torpedo.", "Hyper Ring speed boost reduced from 30% to 25%.", "Orbital Ray healing per second increased from 75 to 80."] },
  "Kiriko": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Healing Ofuda travel speed increased by 15%.", "Protection Suzu invulnerability duration reduced from 0.85s to 0.75s.", "Swift Step range remains at 35m."] },
  "Lifeweaver": { date: "2026-03-05", patch: "Season 15 Hotfix", changes: ["Healing Blossom charge rate increased by 8%.", "Life Grip cooldown reduced from 19s to 17s.", "Tree of Life healing per pulse increased from 75 to 80."] },
  "Lúcio": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Crossfade healing aura reduced from 16 to 14 HPS.", "Soundwave knockback increased by 12%.", "Sound Barrier overhealth increased from 750 to 800."] },
  "Mercy": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Caduceus Staff damage boost reduced from 30% to 28%.", "Resurrect cast time increased from 1.75s to 2s.", "Valkyrie chain healing range increased from 10m to 11m."] },
  "Mizuki": { date: "2026-03-12", patch: "Season 15 Mid-Cycle", changes: ["Primary fire healing output increased by 6%.", "Escape ability cooldown reduced from 10s to 9s.", "Ultimate slow effect increased from 25% to 30%."] },
  "Moira": { date: "2026-02-18", patch: "Season 15 Mid-Cycle", changes: ["Biotic Grasp healing per second reduced from 70 to 65.", "Biotic Orb damage total reduced from 200 to 180.", "Coalescence damage per second increased from 70 to 75."] },
  "Wuyang": { date: "2026-03-12", patch: "Season 15 Mid-Cycle", changes: ["Control ability cooldown reduced from 8s to 7s.", "Primary fire damage reduced by 3%.", "Ultimate charge rate increased by 5%."] },
  "Zenyatta": { date: "2026-01-22", patch: "Season 15 Launch", changes: ["Discord Orb damage amplification reduced from 25% to 22%.", "Orb of Destruction projectile speed increased by 5%.", "Transcendence healing per second remains at 300."] }
};

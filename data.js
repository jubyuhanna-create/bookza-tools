const HERO_DB = [
  {
    "name": "D.Va",
    "role": "Tank",
    "strong_against": [
      "Widowmaker",
      "Pharah",
      "Sojourn"
    ],
    "weak_against": [
      "Mei",
      "Symmetra",
      "Zarya"
    ],
    "strategic_rationale": "The core counter-mechanic for D.Va is the use of beam weaponry which ignores Defense Matrix. Mei's endothermic spray and Zarya's particle beam can pressure D.Va regardless of her defensive cooldowns. Additionally, Symmetra's primary fire charges off D.Va's massive frame, allowing the Specialist DPS to reach maximum lethality quickly.",
    "tips": [
      "Use Defense Matrix to deny burst windows and key cooldowns, not random poke.",
      "Boost onto isolated hitscans or supports, then peel back before your mech gets burned.",
      "Track enemy beams; avoid long front-line trades into Zarya or Symmetra."
    ],
    "emoji": "🐰"
  },
  {
    "name": "Doomfist",
    "role": "Tank",
    "strong_against": [
      "Zenyatta",
      "Widowmaker",
      "Ana"
    ],
    "weak_against": [
      "Echo",
      "Pharah",
      "Mei",
      "Sombra",
      "Cassidy"
    ],
    "strategic_rationale": "Aerial heroes like Echo and Pharah are nearly impossible for Doomfist to interact with, while Mei can use her Ice Wall to block his escapes and her primary fire to slow his movement. Sombra's Hack is a death sentence for Doomfist, as it disables his entire mobility-based kit.",
    "tips": [
      "Cycle Slam, Block, and Punch so you always leave with a cooldown.",
      "Farm empowered punch off predictable damage instead of forcing dry engages.",
      "Dive immobile backliners from off-angles, not straight through the tank line."
    ],
    "emoji": "👊"
  },
  {
    "name": "Domina",
    "role": "Tank",
    "strong_against": [
      "Widowmaker",
      "Ashe",
      "Hanzo"
    ],
    "weak_against": [
      "Bastion",
      "Reinhardt",
      "Winston",
      "Zarya"
    ],
    "strategic_rationale": "Bastion's Configuration: Assault is the premier shield-breaking tool, capable of melting Domina's segments in seconds. Reinhardt and Zarya are effective because they ignore her range advantage; Reinhardt can out-brawl her in close quarters where her Sonic Repulsors are her only defense, and Zarya's beam weapon bypasses many of the micro-positioning advantages Domina gains from her hard-light architecture. Winston remains the most viable Dive counter, as his ability to jump over her Barrier Array and deploy a bubble allows his team to ignore her zone control.",
    "tips": [
      "Anchor chokes and force close-range brawls where your space control matters most.",
      "Take short, aggressive angles only when your team can follow the pull or displacement.",
      "Respect vertical comps; rotate through cover instead of walking open sightlines."
    ],
    "emoji": "🛡️"
  },
  {
    "name": "Hazard",
    "role": "Tank",
    "strong_against": [
      "Reinhardt",
      "Ramattra",
      "Roadhog"
    ],
    "weak_against": [
      "Ana",
      "Zenyatta",
      "Orisa",
      "Sombra"
    ],
    "strategic_rationale": "Hazard lacks a traditional shield, relying instead on damage reduction and homing spike retaliation. This makes him highly susceptible to debuffs. Ana's Biotic Grenade negates the self-sustain he gains from his brawling, while Zenyatta's Discord Orb amplifies incoming damage to his large hitbox. Orisa can reliably interrupt his Violent Leap with her Javelin, and Sombra's Hack prevents him from activating Spike Guard, leaving him exposed during his engagement window.",
    "tips": [
      "Hold narrow corridors where your zone control punishes fast flankers.",
      "Use your displacement to break dive timing before the enemy reaches your supports.",
      "Do not overchase into open maps where long-range damage can burn you down."
    ],
    "emoji": "🗡️"
  },
  {
    "name": "Junker Queen",
    "role": "Tank",
    "strong_against": [
      "Zenyatta",
      "Soldier:76",
      "Widowmaker"
    ],
    "weak_against": [
      "Kiriko",
      "Orisa",
      "Bastion",
      "Mei"
    ],
    "strategic_rationale": "Kiriko's Protection Suzu is the most devastating counter to Junker Queen, as it cleanses the bleed effects that provide her sustain, effectively neutralizing her kit. Orisa can use Fortify to ignore Junker Queen's displacement and Javelin to keep her at bay, while Bastion can simply out-damage her health pool during an engagement.",
    "tips": [
      "Knife pull into Carnage is your cleanest punish on overextended targets.",
      "Use Commanding Shout for tempo and rotations, not only panic saves.",
      "Anti-heal ruins your sustain, so bait Ana grenade before committing hard."
    ],
    "emoji": "👑"
  },
  {
    "name": "Mauga",
    "role": "Tank",
    "strong_against": [
      "Reinhardt",
      "Winston",
      "Roadhog"
    ],
    "weak_against": [
      "Sigma",
      "Kiriko",
      "D.Va",
      "Sojourn",
      "Sombra"
    ],
    "strategic_rationale": "Sigma's ability to weave barriers and use Kinetic Grasp allows him to mitigate Mauga's damage output almost entirely. Kiriko is essential for cleansing the fire debuffs that Mauga uses to trigger his critical hits. D.Va can also absorb a significant portion of his damage, while Sojourn can farm her Railgun off his massive, unshielded frame.",
    "tips": [
      "Burn tanks and barriers to build pressure, then hard-focus squishies caught in the open.",
      "Cardiac Overdrive wins committed brawls; pop it before you are critical.",
      "Avoid feeding long sightlines when anti-heal and discord are available."
    ],
    "emoji": "🔥"
  },
  {
    "name": "Orisa",
    "role": "Tank",
    "strong_against": [
      "Doomfist",
      "Reinhardt",
      "Junker Queen"
    ],
    "weak_against": [
      "Bastion",
      "D.Va",
      "Winston",
      "Sombra",
      "Zenyatta"
    ],
    "strategic_rationale": "Bastion's raw damage output is the only thing capable of consistently breaking Orisa's sustain. Sombra is also highly effective, as Hacking Orisa removes her ability to use Fortify, which is her primary survival tool. Zenyatta's Discord Orb remains a constant pressure that forces her to play more conservatively.",
    "tips": [
      "Rotate Fortify and Javelin Spin instead of stacking both defensives at once.",
      "Javelin is strongest as an interrupt tool against dives, channels, and exposed targets.",
      "Play corners and short sightlines so your sustain outlasts enemy burst."
    ],
    "emoji": "🐄"
  },
  {
    "name": "Ramattra",
    "role": "Tank",
    "strong_against": [
      "Reinhardt",
      "Sigma",
      "Brigitte"
    ],
    "weak_against": [
      "Zenyatta",
      "Ana",
      "Orisa",
      "Hazard"
    ],
    "strategic_rationale": "Zenyatta's Discord Orb is fatal for Ramattra when he is in Nemesis Form, as his larger hitbox makes him an easy target for focused fire. Ana's Sleep Dart and Biotic Grenade are equally effective at halting his aggression. Hazard has also emerged as a viable counter-tank, as his Jagged Wall can isolate Ramattra and prevent his retreat.",
    "tips": [
      "Use Omnic form to poke and force cooldowns before entering Nemesis.",
      "Pummel through barriers when enemies stack behind shields or cart.",
      "Vortex is best when it traps retreats or grounds aerial heroes, not as random poke."
    ],
    "emoji": "🤖"
  },
  {
    "name": "Reinhardt",
    "role": "Tank",
    "strong_against": [
      "Zarya",
      "Cassidy",
      "Bastion"
    ],
    "weak_against": [
      "Ramattra",
      "Sombra",
      "Pharah",
      "Junkrat"
    ],
    "strategic_rationale": "Ramattra is the most direct counter to Reinhardt, as his Nemesis Form punches ignore the shield entirely. Sombra can Hack him to drop the shield, and aerial heroes like Pharah can simply fire over it, forcing him to reposition.",
    "tips": [
      "Path from corner to corner; your shield is a taxi, not a permanent wall.",
      "Swing only when your supports can see you or when enemy burst is on cooldown.",
      "Look for Fire Strike value through grouped enemies to accelerate Earthshatter."
    ],
    "emoji": "🧱"
  },
  {
    "name": "Roadhog",
    "role": "Tank",
    "strong_against": [
      "Tracer",
      "Genji",
      "Sombra"
    ],
    "weak_against": [
      "Ashe",
      "Sojourn",
      "Orisa",
      "Ana",
      "Zenyatta"
    ],
    "strategic_rationale": "Ashe and Sojourn can easily hit headshots on Roadhog from range, building their ultimates at an accelerated rate. Ana's Biotic Grenade remains his hardest counter, as it completely negates his Take a Breather healing.",
    "tips": [
      "Hook from cover so enemies cannot instantly punish your peek.",
      "Use Take a Breather proactively for damage reduction during enemy burst cycles.",
      "Confirm hooks with your team when targets have mobility or peel available."
    ],
    "emoji": "🐷"
  },
  {
    "name": "Sigma",
    "role": "Tank",
    "strong_against": [
      "Pharah",
      "Ashe",
      "Bastion"
    ],
    "weak_against": [
      "Zarya",
      "Ramattra",
      "Sombra",
      "Bastion"
    ],
    "strategic_rationale": "Zarya is the definitive tank counter to Sigma, as her beam weapon passes through Kinetic Grasp and she can use his predictable primary fire to charge her own energy. Ramattra's Nemesis Form is also highly effective, as his punches penetrate barriers, allowing him to bypass Sigma's primary defense entirely. Sombra's Hack is critical for forcing Sigma to drop his barrier, a move that often leads to his immediate elimination in coordinated fire.",
    "tips": [
      "Alternate barrier, corners, and grasp to deny angles without overexposing.",
      "Rock is your punish tool for predictable movement, not random spam.",
      "Sigma is strongest on mid-range maps where he can control multiple lanes."
    ],
    "emoji": "🧠"
  },
  {
    "name": "Winston",
    "role": "Tank",
    "strong_against": [
      "Zenyatta",
      "Widowmaker",
      "Ana"
    ],
    "weak_against": [
      "Bastion",
      "D.Va",
      "Reaper",
      "Junkrat"
    ],
    "strategic_rationale": "Bastion's turret form can shred Winston's barrier and health pool before the tank can secure a kill. Reaper remains a classic counter due to his close-range lethality and lifesteal, which allows him to out-sustain Winston inside the bubble. Interestingly, D.Va has emerged as a strong counter-pick because she can follow Winston's jumps and use her micro-missiles to burst him down.",
    "tips": [
      "Jump only when your bubble and team follow-up are ready.",
      "Bubble dance to cut healing and line-of-sight while you finish isolated targets.",
      "Primal Rage is often better as disruption and stall than pure kill pressure."
    ],
    "emoji": "🦍"
  },
  {
    "name": "Wrecking Ball",
    "role": "Tank",
    "strong_against": [
      "Widowmaker",
      "Zenyatta",
      "Ashe"
    ],
    "weak_against": [
      "Sombra",
      "Cassidy",
      "Tracer",
      "Roadhog",
      "Brigitte",
      "Mizuki"
    ],
    "strategic_rationale": "Sombra's Hack is the ultimate counter, forcing him out of ball form and into a vulnerable state. Cassidy's Flashbang and Brigitte's Shield Bash are equally effective at stopping his roll. The newcomer Mizuki can use his Binding Chain to root Wrecking Ball in place, effectively ending his engagement.",
    "tips": [
      "Scout first, engage second; Ball wins on timing and information.",
      "Pile-drive when your team has angle pressure, not when they are resetting.",
      "Adaptive Shields give maximum value in the middle of multiple enemies."
    ],
    "emoji": "🐹"
  },
  {
    "name": "Zarya",
    "role": "Tank",
    "strong_against": [
      "D.Va",
      "Sigma",
      "Genji"
    ],
    "weak_against": [
      "Reinhardt",
      "Soldier:76",
      "Cassidy",
      "Ashe",
      "Lifeweaver"
    ],
    "strategic_rationale": "Reinhardt is a strong counter in close-quarters brawls, as his hammer swings can push Zarya around and ignore her bubble's displacement immunity. High-damage hitscan heroes like Soldier: 76 and Ashe can pressure Zarya from range, forcing her to burn her bubbles defensively rather than using them to farm energy.",
    "tips": [
      "Use bubbles to convert enemy aggression into energy, not to block chip damage.",
      "High energy means you can threaten squishies from shorter angles than most tanks.",
      "Call your projected bubble timing so teammates know when to push."
    ],
    "emoji": "⚡"
  },
  {
    "name": "Anran",
    "role": "Damage",
    "strong_against": [
      "Reinhardt",
      "Roadhog",
      "Winston"
    ],
    "weak_against": [
      "Cassidy",
      "Kiriko",
      "Reaper"
    ],
    "strategic_rationale": "Cassidy's Flashbang is essential for halting Anran's Inferno Rush. Kiriko is her most significant support counter, as Protection Suzu can cleanse the fire debuff, effectively resetting the fight in the support's favor.",
    "tips": [
      "Take medium-range off-angles where sustained pressure forces tanks to turn.",
      "Punish mobile divers after they commit, when their escape tools are gone.",
      "Do not duel beam tanks in close space unless your team is already collapsing."
    ],
    "emoji": "🔥"
  },
  {
    "name": "Ashe",
    "role": "Damage",
    "strong_against": [
      "Pharah",
      "Mercy",
      "Echo"
    ],
    "weak_against": [
      "Genji",
      "Winston",
      "Doomfist",
      "Widowmaker",
      "Kiriko"
    ],
    "strategic_rationale": "Genji and Winston are classic counters who can dive Ashe and force her to use her Coach Gun defensively. Widowmaker is her only true range counter, as she can land a lethal headshot from outside Ashe's effective damage range.",
    "tips": [
      "Use Dynamite on grouped enemies or supports playing behind the tank.",
      "Coach Gun is mostly for spacing and off-angle access, not desperation damage.",
      "Swap positions often so dive heroes cannot pre-path to your perch."
    ],
    "emoji": "🧨"
  },
  {
    "name": "Bastion",
    "role": "Damage",
    "strong_against": [
      "Reinhardt",
      "Orisa",
      "Domina"
    ],
    "weak_against": [
      "Genji",
      "Sigma",
      "Ana",
      "Hanzo",
      "Widowmaker"
    ],
    "strategic_rationale": "Genji's Deflect remains a hard counter to Bastion's turret form, while Sigma can use Kinetic Grasp to absorb his entire magazine and gain massive shields. Ana's Sleep Dart is also a reliable way to take Bastion out of the fight during his most dangerous windows.",
    "tips": [
      "Save Assault form for real commit windows, especially when tanks lose cover.",
      "Transform behind corners so the enemy sees the damage late.",
      "Grenade jumps can create better angles than staying glued to main."
    ],
    "emoji": "🤖"
  },
  {
    "name": "Cassidy",
    "role": "Damage",
    "strong_against": [
      "Tracer",
      "Genji",
      "Sombra",
      "Reaper"
    ],
    "weak_against": [
      "Widowmaker",
      "Pharah",
      "Ashe"
    ],
    "strategic_rationale": "Cassidy struggles against long-range snipers who can eliminate him before he gets in range. However, he dominates close-range flankers using Flashbang to interrupt mobility and secure kills.",
    "tips": [
      "Hold stable mid-range angles where you can punish dives on reaction.",
      "Use Magnetic Grenade to force cooldowns, then finish with clean primary shots.",
      "Deadeye is strongest for zoning rotations or punishing shieldless enemies."
    ],
    "emoji": "🤠"
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
    "emoji": "🕊️"
  },
  {
    "name": "Freja",
    "role": "Damage",
    "strong_against": [
      "Widowmaker",
      "Ashe",
      "Zenyatta"
    ],
    "weak_against": [
      "Cassidy",
      "Soldier:76",
      "D.Va"
    ],
    "strategic_rationale": "Hitscan heroes like Cassidy and Soldier: 76 can track Freja in the air more easily than projectile heroes. D.Va is a strong counter because she can fly to Freja's elevated positions and use Defense Matrix to eat her shots.",
    "tips": [
      "Use mobility to break sniper sightlines before finishing the duel.",
      "Play from layered cover so you can re-peek without giving a full body angle.",
      "When pressured, kite toward your supports instead of taking isolated 1v2 fights."
    ],
    "emoji": "🦅"
  },
  {
    "name": "Genji",
    "role": "Damage",
    "strong_against": [
      "Widowmaker",
      "Hanzo",
      "Zenyatta"
    ],
    "weak_against": [
      "Moira",
      "Symmetra",
      "Winston",
      "Zarya"
    ],
    "strategic_rationale": "All of Genji's primary counters utilize beam-based damage which he cannot Deflect. Moira is particularly effective as her secondary fire requires minimal aim and she can use Fade to escape his blade.",
    "tips": [
      "Dash only when you can confirm a reset or secure escape.",
      "Deflect is a tempo tool; absorb key shots and instantly counter-engage.",
      "Blade is strongest after enemy crowd control and defensive ults are tracked."
    ],
    "emoji": "🗡️"
  },
  {
    "name": "Hanzo",
    "role": "Damage",
    "strong_against": [
      "Pharah",
      "Widowmaker",
      "Cassidy"
    ],
    "weak_against": [
      "Winston",
      "D.Va",
      "Echo",
      "Genji"
    ],
    "strategic_rationale": "Winston and D.Va can dive Hanzo and force him into close-quarters duels where his bow is disadvantaged. Echo and Genji can out-maneuver him in the air or at close range.",
    "tips": [
      "Sonic Arrow before peeking lets you take safer duels and pre-aim corners.",
      "Storm Arrows are ideal for tanks that walk predictable paths through chokes.",
      "Rotate after picks so dives cannot punish your previous position."
    ],
    "emoji": "🏹"
  },
  {
    "name": "Junkrat",
    "role": "Damage",
    "strong_against": [
      "Reinhardt",
      "Zarya",
      "Orisa"
    ],
    "weak_against": [
      "Pharah",
      "Echo",
      "Widowmaker"
    ],
    "strategic_rationale": "Aerial heroes are almost entirely immune to Junkrat's ground-based projectiles. Widowmaker can also pick him off from range where his grenades have no hope of reaching her.",
    "tips": [
      "Spam chokes before fights and save mines for kill confirms once chaos starts.",
      "Trap flank routes and health packs to punish predictable movement.",
      "Do not mirror spam in long sightlines against hitscan-heavy comps."
    ],
    "emoji": "💣"
  },
  {
    "name": "Mei",
    "role": "Damage",
    "strong_against": [
      "Doomfist",
      "Reinhardt",
      "Wrecking Ball"
    ],
    "weak_against": [
      "Orisa",
      "Kiriko",
      "Pharah",
      "Sombra",
      "D.Va"
    ],
    "strategic_rationale": "Orisa's Fortify allows her to walk through Mei's slowing effects, and Kiriko's Suzu can cleanse her freeze. Pharah can simply fly over her walls, and Sombra can Hack Mei to prevent her from using Cryo-Freeze.",
    "tips": [
      "Wall isolated tanks away from healing instead of blocking random damage.",
      "Cryo-Freeze buys time for cooldowns and cleanses several harmful effects.",
      "Mei thrives in tight maps where enemies cannot easily disengage your slow."
    ],
    "emoji": "❄️"
  },
  {
    "name": "Pharah",
    "role": "Damage",
    "strong_against": [
      "Junkrat",
      "Reinhardt",
      "Brigitte"
    ],
    "weak_against": [
      "Cassidy",
      "Widowmaker",
      "Soldier:76",
      "Symmetra"
    ],
    "strategic_rationale": "Hitscan heroes are the only reliable way to deal with an airborne Pharah. Interestingly, Symmetra's turrets have been noted as a soft counter if placed on high ground, as they can slow and chip away at Pharah's health.",
    "tips": [
      "Use rooftops and map geometry so you are not hovering in open sky forever.",
      "Concussive Blast is a positioning tool first and a damage tool second.",
      "Play tighter angles when the enemy has multiple hitscans or Discord Orb."
    ],
    "emoji": "🚀"
  },
  {
    "name": "Reaper",
    "role": "Damage",
    "strong_against": [
      "Winston",
      "Roadhog",
      "Sigma"
    ],
    "weak_against": [
      "D.Va",
      "Pharah",
      "Echo"
    ],
    "strategic_rationale": "D.Va's Defense Matrix can negate Reaper's entire damage output, and aerial heroes can simply stay out of his shotgun range.",
    "tips": [
      "Stage on flanks before the fight; walking through main wastes your threat.",
      "Wraith Form is your exit ticket, so do not use it just to enter.",
      "Focus tanks only when you can do so from safe corners or after a collapse."
    ],
    "emoji": "👻"
  },
  {
    "name": "Sojourn",
    "role": "Damage",
    "strong_against": [
      "Pharah",
      "Mercy",
      "Zenyatta"
    ],
    "weak_against": [
      "D.Va",
      "Widowmaker",
      "Winston",
      "Tracer"
    ],
    "strategic_rationale": "D.Va's Defense Matrix is the only reliable way to negate Sojourn's Railgun shots. Widowmaker can out-range her on maps with long sightlines, while high-mobility heroes like Winston and Tracer can pressure her before she can build rail charge.",
    "tips": [
      "Charge rail on tanks, then instantly flick to a squishy target.",
      "Disruptor Shot controls space and punishes enemies who hold corners too long.",
      "Slide early to claim strong angles instead of escaping late."
    ],
    "emoji": "⚡"
  },
  {
    "name": "Soldier:76",
    "role": "Damage",
    "strong_against": [
      "Pharah",
      "Echo",
      "Mercy"
    ],
    "weak_against": [
      "D.Va",
      "Winston",
      "Widowmaker",
      "Ashe",
      "Lúcio"
    ],
    "strategic_rationale": "D.Va and Winston can dive Soldier and pressure him out of his Biotic Field. Snipers like Widowmaker and Ashe can out-damage him at long range where his pulse rifle has more spread.",
    "tips": [
      "Own high ground whenever possible; your pressure drops sharply from low ground.",
      "Helix Rocket plus primary fire is your fastest burst combo on squishies.",
      "Biotic Field lets you hold angles longer, but do not duel hard snipers in the open."
    ],
    "emoji": "🎯"
  },
  {
    "name": "Sombra",
    "role": "Damage",
    "strong_against": [
      "Doomfist",
      "Wrecking Ball",
      "Sigma"
    ],
    "weak_against": [
      "Hanzo",
      "Moira",
      "Zenyatta",
      "Brigitte",
      "Kiriko"
    ],
    "strategic_rationale": "Hanzo's Sonic Arrow is the only tool that can reliably reveal an invisible Sombra. Moira's primary fire can 'spy check' with ease, and Brigitte's shield can block Virus and Hack attempts.",
    "tips": [
      "Hack engages are strongest when your team is already ready to pounce.",
      "Farm EMP on tanks, then use it to break a key defensive setup or ultimate fight.",
      "Translocator should be placed for fast re-entry, not full disengage across the map."
    ],
    "emoji": "🕶️"
  },
  {
    "name": "Symmetra",
    "role": "Damage",
    "strong_against": [
      "Reinhardt",
      "Sigma",
      "D.Va"
    ],
    "weak_against": [
      "Winston",
      "Zarya",
      "Pharah"
    ],
    "strategic_rationale": "Winston's Tesla Cannon can clear Symmetra's turrets instantly and his bubble provides protection from her beam. Zarya can use Symmetra's turrets to charge her own energy.",
    "tips": [
      "Use Teleporter creatively for rushes, rotations, and surprise off-angles.",
      "Turrets are best when layered around a turn or on retreat paths.",
      "Beam tanks only when you have cover and healing support nearby."
    ],
    "emoji": "🔷"
  },
  {
    "name": "Torbjörn",
    "role": "Damage",
    "strong_against": [
      "Tracer",
      "Genji",
      "Sombra"
    ],
    "weak_against": [
      "Winston",
      "Ramattra",
      "Widowmaker",
      "Sombra",
      "Junkrat"
    ],
    "strategic_rationale": "Winston and Ramattra can destroy Torbjörn's turret easily, while Sombra can Hack it to take it offline entirely. Widowmaker can also destroy the turret from safe range.",
    "tips": [
      "Place turrets where they see the fight late, not where they are instantly destroyed.",
      "Overload is a duel and tempo cooldown; use it before taking damage.",
      "Molten Core is excellent for splitting tanks from their backline."
    ],
    "emoji": "🔧"
  },
  {
    "name": "Tracer",
    "role": "Damage",
    "strong_against": [
      "Zenyatta",
      "Widowmaker",
      "Ana"
    ],
    "weak_against": [
      "Torbjörn",
      "Moira",
      "Symmetra",
      "Cassidy"
    ],
    "strategic_rationale": "Auto-aim or area-of-effect heroes like Torbjörn (turret) and Moira are the most effective ways to pressure a high-skill Tracer. Cassidy's Flashbang remains a classic hard counter if he can land the stun.",
    "tips": [
      "Poke to force cooldowns before fully committing for a one-clip.",
      "Always preserve one blink or recall for the escape path.",
      "Pulse Bomb is easiest on targets with no movement or after crowd control."
    ],
    "emoji": "⏱️"
  },
  {
    "name": "Vendetta",
    "role": "Damage",
    "strong_against": [
      "Zenyatta",
      "Widowmaker",
      "Ana"
    ],
    "weak_against": [
      "Cassidy",
      "Sigma",
      "Junkrat",
      "Mei",
      "Torbjörn"
    ],
    "strategic_rationale": "Cassidy is her most reliable counter; a single Flashbang can stop her mid-lunge, allowing his team to focus her down. Sigma's Accretion (rock) can also stun her, and his shield can be used to block her approach. Junkrat's traps are a nightmare for Vendetta, as her predictable dive paths make it easy to root her in place.",
    "tips": [
      "Play anti-flank angles where your trap and tracking pressure can protect supports.",
      "Punish mobile heroes after they burn movement cooldowns on entry.",
      "Avoid long sniper lanes and beam-heavy rush comps that collapse your space quickly."
    ],
    "emoji": "🩸"
  },
  {
    "name": "Venture",
    "role": "Damage",
    "strong_against": [
      "Zenyatta",
      "Widowmaker",
      "Soldier:76"
    ],
    "weak_against": [
      "Mei",
      "Sombra",
      "Pharah",
      "Echo"
    ],
    "strategic_rationale": "Mei can freeze Venture even during some of their movement animations, and Sombra can Hack them to prevent their escape through Burrow. Aerial heroes are also difficult for Venture to reach.",
    "tips": [
      "Take underground or side-path engages so the enemy loses track of your timing.",
      "Burst targets after surfacing, then leave before peel arrives.",
      "Venture wins in layered terrain and short cover, not extended poke wars."
    ],
    "emoji": "🪛"
  },
  {
    "name": "Widowmaker",
    "role": "Damage",
    "strong_against": [
      "Ashe",
      "Cassidy",
      "Ana"
    ],
    "weak_against": [
      "Winston",
      "D.Va",
      "Wrecking Ball",
      "Genji",
      "Sombra",
      "Lúcio"
    ],
    "strategic_rationale": "High-mobility dive tanks are the only reliable counter to a skilled Widowmaker. Sombra can also sneak up on her and secure a kill before she can grapple away.",
    "tips": [
      "Change positions after a few shots to avoid predictable dive paths.",
      "Use Venom Mine on your flank route, not only the objective.",
      "Do not force mirror duels without cover advantage or support attention."
    ],
    "emoji": "🕷️"
  },
  {
    "name": "Ana",
    "role": "Support",
    "strong_against": [
      "Roadhog",
      "Mauga",
      "Reinhardt"
    ],
    "weak_against": [
      "Winston",
      "Sombra",
      "Kiriko",
      "Widowmaker"
    ],
    "strategic_rationale": "Winston can bubble her off from her team, and Sombra can Hack her to prevent the use of Sleep Dart or Grenade.",
    "tips": [
      "Biotic Grenade can decide the whole fight; do not waste it on light poke.",
      "Save Sleep Dart for divers, ults, or the first hero to overcommit.",
      "Play long angles with cover so you can heal safely while remaining hard to dive."
    ],
    "emoji": "💉"
  },
  {
    "name": "Baptiste",
    "role": "Support",
    "strong_against": [
      "Pharah",
      "Echo",
      "Junkrat"
    ],
    "weak_against": [
      "Sombra",
      "Reaper",
      "Venture"
    ],
    "strategic_rationale": "Sombra can Hack the Immortality Field drone to take it offline, and high-mobility flankers can pressure Baptiste before he can stabilize.",
    "tips": [
      "Weave damage between heals whenever your team is stable.",
      "Lamp belongs behind cover or around corners where enemies cannot instantly break it.",
      "Exo Boots let you keep high ground and survive dive pressure longer."
    ],
    "emoji": "🧪"
  },
  {
    "name": "Brigitte",
    "role": "Support",
    "strong_against": [
      "Tracer",
      "Genji",
      "Sombra"
    ],
    "weak_against": [
      "Ramattra",
      "Junkrat",
      "Baptiste",
      "Pharah"
    ],
    "strategic_rationale": "Ramattra's punches pass through her shield, and Junkrat can simply blow her up from range.",
    "tips": [
      "Trigger Inspire early with Whip Shot so healing is already running when dive starts.",
      "Stay near your other support; Brig is strongest as a bodyguard, not a solo flanker.",
      "Shield Bash is mainly for spacing, peeling, and stun setups with your team."
    ],
    "emoji": "🛡️"
  },
  {
    "name": "Illari",
    "role": "Support",
    "strong_against": [
      "Pharah",
      "Echo",
      "Mercy"
    ],
    "weak_against": [
      "D.Va",
      "Genji",
      "Sombra",
      "Kiriko"
    ],
    "strategic_rationale": "D.Va can destroy her Pylon easily, and Genji can deflect her primary fire.",
    "tips": [
      "Hide Healing Pylon high or deep so it survives the first enemy glance.",
      "Your rifle is lethal from stable off-angles; do not waste time hard-scoping in the open.",
      "Use Outburst to save yourself from dives or to steal high ground quickly."
    ],
    "emoji": "☀️"
  },
  {
    "name": "Jetpack Cat",
    "role": "Support",
    "strong_against": [
      "Reinhardt",
      "Junkrat",
      "Mei"
    ],
    "weak_against": [
      "Soldier:76",
      "Cassidy",
      "Ashe",
      "Sombra",
      "Torbjörn"
    ],
    "strategic_rationale": "Hitscan heroes can track Jetpack Cat easily because her flight inertia is higher than that of Mercy or Echo, making her movement more linear. Sombra can Hack her out of the sky, causing her to drop any towed allies.",
    "tips": [
      "Abuse vertical spacing so brawl heroes cannot easily touch you.",
      "Pocket teammates entering aggressive angles, then rotate before hitscan lines up.",
      "Avoid skyboxing in open maps against disciplined long-range damage."
    ],
    "emoji": "🐱"
  },
  {
    "name": "Juno",
    "role": "Support",
    "strong_against": [
      "Junkrat",
      "Reinhardt",
      "Venture"
    ],
    "weak_against": [
      "Soldier:76",
      "Cassidy",
      "Ashe",
      "Widowmaker",
      "Sombra"
    ],
    "strategic_rationale": "Hitscan heroes are the most effective counters to Juno, as her aerial movement follows predictable arcs that can be tracked and punished. Widowmaker and Ashe can eliminate her from long range, while Soldier: 76 provides sustained pressure. Cassidy can interrupt her movement abilities, and Sombra can Hack her, disabling her mobility and leaving her exposed during critical moments.",
    "tips": [
      "Use mobility to maintain wide sightlines on your whole team without overexposing.",
      "Accelerate engages when your tank is ready, not while your team is still rotating.",
      "Stay unpredictable vertically so flankers cannot path cleanly onto you."
    ],
    "emoji": "🌌"
  },
  {
    "name": "Kiriko",
    "role": "Support",
    "strong_against": [
      "Junker Queen",
      "Ana",
      "Ashe"
    ],
    "weak_against": [
      "Winston",
      "Pharah",
      "Echo",
      "Tracer"
    ],
    "strategic_rationale": "Winston and Tracer can pressure Kiriko and force her to use Swift Step defensively, while aerial heroes can land shots from angles that bypass her traditional cover.",
    "tips": [
      "Suzu is most valuable as a cleanse or clutch save, not casual sustain.",
      "Take off-angles for headshots only when Swift Step can get you back out.",
      "Kitsune Rush is strongest when your team can instantly flood space through it."
    ],
    "emoji": "🦊"
  },
  {
    "name": "Lifeweaver",
    "role": "Support",
    "strong_against": [
      "Reinhardt",
      "Orisa",
      "Junkrat"
    ],
    "weak_against": [
      "Sombra",
      "D.Va",
      "Pharah"
    ],
    "strategic_rationale": "Sombra can Hack Lifeweaver to drop his Petal Platform or prevent his Life Grip.",
    "tips": [
      "Life Grip should save committed teammates from lethal mistakes or enemy ultimates.",
      "Petal Platform can break sightlines, save supports, or lift allies onto better angles.",
      "Do not drift too far forward; your value drops sharply if you get forced first."
    ],
    "emoji": "🌸"
  },
  {
    "name": "Lúcio",
    "role": "Support",
    "strong_against": [
      "Reinhardt",
      "Zarya",
      "Junkrat"
    ],
    "weak_against": [
      "Ramattra",
      "Sombra",
      "Moira",
      "Brigitte",
      "Mizuki"
    ],
    "strategic_rationale": "Sombra's Hack can stop Lúcio's wall-ride and disable his auras, and Mizuki's Binding Chain can root him in place.",
    "tips": [
      "Speed wins engages, disengages, and corner rotations more often than healing does.",
      "Harass isolated backliners only when your team is not losing the front-line race.",
      "Wall ride through awkward geometry so enemies cannot track you consistently."
    ],
    "emoji": "🎧"
  },
  {
    "name": "Mercy",
    "role": "Support",
    "strong_against": [
      "Pharah",
      "Sojourn"
    ],
    "weak_against": [
      "Sombra",
      "Soldier:76",
      "Cassidy",
      "Widowmaker"
    ],
    "strategic_rationale": "Sombra is her most significant counter, as Hacking Mercy mid-flight is often a death sentence.",
    "tips": [
      "Damage boost should be your default beam when allies are safe.",
      "Use Guardian Angel routes with cover in mind before attempting a resurrection.",
      "Mercy is strongest when amplifying a carry angle, not healing tanks through burst."
    ],
    "emoji": "🕊️"
  },
  {
    "name": "Mizuki",
    "role": "Support",
    "strong_against": [
      "Wrecking Ball",
      "Doomfist",
      "Tracer"
    ],
    "weak_against": [
      "Pharah",
      "Junkrat",
      "Widowmaker",
      "Ashe"
    ],
    "strategic_rationale": "Mizuki lacks long-range pressure, making him an easy target for snipers or aerial heroes.",
    "tips": [
      "Play fluid mid-range angles where you can slow or punish heroes entering your space.",
      "Use your escape window before enemy burst fully arrives, not after.",
      "Pair with brawl or anti-dive teammates who can capitalize on your control."
    ],
    "emoji": "🌊"
  },
  {
    "name": "Moira",
    "role": "Support",
    "strong_against": [
      "Genji",
      "Tracer",
      "Sombra"
    ],
    "weak_against": [
      "D.Va",
      "Brigitte",
      "Reaper"
    ],
    "strategic_rationale": "D.Va can consume her orbs, and Brigitte can out-brawl her in close quarters.",
    "tips": [
      "Healing orb usually gives more fight-winning value than damage orb.",
      "Fade aggressively only when you are certain the enemy cannot punish the exit.",
      "Moira excels in messy close-range fights where aim pressure matters less."
    ],
    "emoji": "🧬"
  },
  {
    "name": "Wuyang",
    "role": "Support",
    "strong_against": [
      "Reinhardt",
      "Junkrat",
      "Roadhog"
    ],
    "weak_against": [
      "D.Va",
      "Winston",
      "Sombra"
    ],
    "strategic_rationale": "D.Va and Winston can dive Wuyang and pressure him before he can charge his projectiles. Sombra can Hack him to disable his water-manipulation abilities.",
    "tips": [
      "Hold anti-flank positions where your control tools protect the backline.",
      "Punish divers after they commit instead of trying to chase poke heroes.",
      "Stay near peel so dive tanks cannot isolate you during cooldown gaps."
    ],
    "emoji": "💧"
  },
  {
    "name": "Zenyatta",
    "role": "Support",
    "strong_against": [
      "Reinhardt",
      "Mauga",
      "Winston"
    ],
    "weak_against": [
      "Sombra",
      "Tracer",
      "Junker Queen",
      "Zarya"
    ],
    "strategic_rationale": "Flankers can delete Zenyatta before his team can react, and Sombra's EMP removes his massive shield health, leaving him with only 50 HP.",
    "tips": [
      "Discord the highest-value reachable target, usually the tank or exposed flanker.",
      "Play long sightlines with cover because you have no real escape tool.",
      "Transcendence is strongest as a counter-ult or tempo stabilizer, not late panic."
    ],
    "emoji": "🧘"
  }
];

const HERO_PATCHES = {
  "D.Va": { date: "2026-03-10", patch: "March 10 Update", changes: ["Boosters cooldown increased from 3.5s to 4s (nerf)."] },
  "Doomfist": { date: "2026-01-08", patch: "January 8 Update", changes: ["Empowered Punch deteriorates after 20 seconds (nerf).", "Projectile absorption area reduced (nerf)."] },
  "Domina": { date: "2026-02-25", patch: "February 25 Update", changes: ["Ultimate cost increased by 12% (nerf)."] },
  "Hazard": { date: "2026-03-10", patch: "March 10 Update", changes: ["Subrole changed from Stalwart to Initiator (adjustment)."] },
  "Mauga": { date: "2026-02-25", patch: "February 25 Update", changes: ["Ammo generation now grants 150 instantly (buff)."] },
  "Orisa": { date: "2026-02-25", patch: "February 25 Update", changes: ["Barrier cooldown increased from 8s to 10s (nerf)."] },
  "Ramattra": { date: "2026-03-10", patch: "March 10 Update", changes: ["Void Barrier cooldown reduced from 13s to 12s (buff).", "Annihilation damage increased from 30 to 35 per second (buff)."] },
  "Reinhardt": { date: "2026-02-25", patch: "February 25 Update", changes: ["Passive regeneration 75% faster (buff)."] },
  "Roadhog": { date: "2026-03-10", patch: "March 10 Update", changes: ["Scrap Gun damage increased from 6.5 to 7 (buff)."] },
  "Sigma": { date: "2026-02-25", patch: "February 25 Update", changes: ["Barrier health reduced from 700 to 650 (nerf).", "Kinetic Grasp conversion reduced from 50% to 40% (nerf)."] },
  "Winston": { date: "2026-02-25", patch: "February 25 Update", changes: ["Movement speed increased up to 30% (buff)."] },
  "Wrecking Ball": { date: "2026-02-25", patch: "February 25 Update", changes: ["Minefield gains +7 additional mines (buff)."] },
  "Zarya": { date: "2026-02-25", patch: "February 25 Update", changes: ["DPS reduced from 190 to 175 (nerf)."] },
  "Anran": { date: "2026-03-10", patch: "March 10 Update", changes: ["Climb and Jump increased by 20% (buff)."] },
  "Ashe": { date: "2026-02-25", patch: "February 25 Update", changes: ["Coach Gun can be reused (buff)."] },
  "Cassidy": { date: "2026-02-25", patch: "February 25 Update", changes: ["Combat Roll cooldown reduced from 6s to 5s (buff)."] },
  "Echo": { date: "2026-02-25", patch: "February 25 Update", changes: ["Flight speed increased from 10% to 20% (buff)."] },
  "Emre": { date: "2026-03-10", patch: "March 10 Update", changes: ["Trigger cooldown reduced from 4.5s to 4s (buff)."] },
  "Freja": { date: "2026-02-25", patch: "February 25 Update", changes: ["Extra charge added (buff).", "Height reduced by 20% (nerf)."] },
  "Genji": { date: "2026-01-08", patch: "January 8 Update", changes: ["Shuriken ammo increased from 24 to 30 (buff)."] },
  "Hanzo": { date: "2026-02-25", patch: "February 25 Update", changes: ["Lunge speed reduced from 25% to 20% (nerf).", "Storm Arrows duration reduced from 2s to 1.5s (nerf)."] },
  "Junkrat": { date: "2025-12-18", patch: "December 18 Update", changes: ["Projectile speed increased from 25 to 30 (buff).", "Bonus damage reduced from 40% to 25% (nerf)."] },
  "Pharah": { date: "2026-02-25", patch: "February 25 Update", changes: ["Rockets deal 40 damage (buff)."] },
  "Reaper": { date: "2026-02-25", patch: "February 25 Update", changes: ["Wraith Form no longer cleanses debuffs (nerf)."] },
  "Soldier:76": { date: "2026-02-25", patch: "February 25 Update", changes: ["Helix Rockets projectile speed increased by 50% (buff)."] },
  "Sombra": { date: "2026-02-25", patch: "February 25 Update", changes: ["No longer detects low HP enemies (nerf).", "Hack now reveals enemy ultimate status (buff)."] },
  "Torbjörn": { date: "2026-02-25", patch: "February 25 Update", changes: ["Molten Core now triggers Overload (buff)."] },
  "Tracer": { date: "2026-02-25", patch: "February 25 Update", changes: ["Pulse Pistols damage reduced from 6 to 5.75 (nerf).", "Blink distance increased by 20% (buff)."] },
  "Vendetta": { date: "2026-03-10", patch: "March 10 Update", changes: ["Damage reduced from 35 to 30 (nerf).", "Lifesteal increased from 30% to 40% (buff)."] },
  "Venture": { date: "2026-01-08", patch: "January 8 Update", changes: ["Shield reduced from 30 to 25 (nerf).", "Drill Dash radius reduced from 2.4 to 2.0 (nerf)."] },
  "Widowmaker": { date: "2026-02-25", patch: "February 25 Update", changes: ["Venom Mine damage increased from 50 to 75 (buff)."] },
  "Ana": { date: "2025-01-21", patch: "January 21 Update", changes: ["Biotic Grenade damage/healing reduced from 90 to 75 (nerf)."] },
  "Baptiste": { date: "2026-02-25", patch: "February 25 Update", changes: ["Exo Boots speed reduced from 25% to 20% (nerf).", "Regenerative Burst healing increased from 25 to 40 (buff)."] },
  "Illari": { date: "2026-03-10", patch: "March 10 Update", changes: ["Movement speed reduced from 30% to 20% (nerf).", "Sunburn damage reduced from 70 to 50 (nerf)."] },
  "Jetpack Cat": { date: "2026-03-10", patch: "March 10 Update", changes: ["Ability cooldown reduced from 8s to 6s (buff)."] },
  "Juno": { date: "2025-12-18", patch: "December 18 Update", changes: ["Duration reduced from 10s to 8s (nerf).", "Amplification reduced from 35% to 30% (nerf).", "Critical hits enabled (buff)."] },
  "Kiriko": { date: "2026-02-25", patch: "February 25 Update", changes: ["Kunai projectile speed increased from 18 to 24 (buff).", "Swift Step duration increased from 2s to 4s (buff)."] },
  "Lifeweaver": { date: "2026-02-25", patch: "February 25 Update", changes: ["Overhealth conversion increased from 50% to 100% (buff)."] },
  "Lúcio": { date: "2026-01-08", patch: "January 8 Update", changes: ["Soundwave cooldown increased from 4s to 5s (nerf)."] },
  "Mercy": { date: "2026-02-25", patch: "February 25 Update", changes: ["Passive regeneration activates faster (buff)."] },
  "Mizuki": { date: "2026-03-10", patch: "March 10 Update", changes: ["Ability radius increased from 10m to 12m (buff)."] },
  "Moira": { date: "2026-02-25", patch: "February 25 Update", changes: ["Healing bonus increased from 25% to 30% (buff)."] },
  "Wuyang": { date: "2026-02-25", patch: "February 25 Update", changes: ["Passive ability nerfed.", "Beam ability buffed."] },
  "Zenyatta": { date: "2026-02-25", patch: "February 25 Update", changes: ["Orb of Discord now grants 10% lifesteal (buff)."] }
};

const HERO_PERKS = {
  "D.Va": {
    minor: [
      { name: "Bunny Power", desc: "Eject gives 75 temporary overhealth and Call Mech's blast radius grows by 50%.", pick: 19, recommended: false },
      { name: "Extended Boosters", desc: "Every enemy struck by Boosters takes 40% extra damage and adds 0.5 seconds to its active time.", pick: 81, recommended: true }
    ],
    major: [
      { name: "Shield System", desc: "Swap 150 health for shields. Defense Matrix recovers shields equal to 25% of the damage it absorbs.", pick: 47, recommended: true },
      { name: "Precision Fusion", desc: "Press (R) to cut Fusion Cannons' Spread by 75% for 3 seconds.", pick: 53, recommended: false }
    ]
  },
  "Domina": {
    minor: [
      { name: "Efficient Design", desc: "Activating Barrier Array refills 50 shields and kicks off passive health regeneration.", pick: 38, recommended: false },
      { name: "Extended Power", desc: "Photon Magnum's reach is extended by 20%.", pick: 62, recommended: true }
    ],
    major: [
      { name: "Disruptive Detonation", desc: "Enemies caught in Crystal Charge's explosion are slowed by 30% for 2 seconds.", pick: 74, recommended: true },
      { name: "Power Move", desc: "Barrier Array can be set up as a wall, allowing Sonic Repulsors to stun enemies with 100% bonus damage.", pick: 26, recommended: false }
    ]
  },
  "Doomfist": {
    minor: [
      { name: "One-Two", desc: "Slamming an enemy into a wall with Rocket Punch fully reloads Hand Cannon and adds 2 extra rounds.", pick: 36, recommended: false },
      { name: "Survival of the Fittest", desc: "The Best Defense awards 25 overhealth per kill and raises the overhealth cap by 50.", pick: 64, recommended: true }
    ],
    major: [
      { name: "Aftershock", desc: "Targets hit by Seismic Slam move 40% slower for 2 seconds.", pick: 14, recommended: false },
      { name: "Power Matrix", desc: "Power Block catches and destroys incoming projectiles during its first second of activation.", pick: 86, recommended: true }
    ]
  },
  "Hazard": {
    minor: [
      { name: "Deep Leap", desc: "Violent Leap travels 15% farther.", pick: 72, recommended: true },
      { name: "Anarchic Zeal", desc: "Spike Guard's spikes steal 30% of the damage they deal as health.", pick: 28, recommended: false }
    ],
    major: [
      { name: "Reconstitution", desc: "Each Jagged Wall hit charges Spike Guard with 25 energy, holding up to 50 bonus energy.", pick: 17, recommended: false },
      { name: "Explosive Impalements", desc: "Bonespur hits plant spikes on targets. Quick Melee and Violent Leap's slash then detonate those spikes for 40 explosive damage.", pick: 83, recommended: true }
    ]
  },
  "Junker Queen": {
    minor: [
      { name: "Rampant Charge", desc: "Rampage activates Unstoppable and resets all cooldowns by 6 seconds.", pick: 79, recommended: true },
      { name: "Battle Shout", desc: "Commanding Shout fully reloads Scatter Gun and boosts nearby allies' reload speed by 50%.", pick: 21, recommended: false }
    ],
    major: [
      { name: "Willy-Willy", desc: "Recalling Jagged Blade doubles its hit radius and adds 30 impact damage.", pick: 26, recommended: false },
      { name: "Savage Satiation", desc: "Carnage's initial hit heals for 100% of the impact damage dealt.", pick: 74, recommended: true }
    ]
  },
  "Mauga": {
    minor: [
      { name: "Kinetic Bandolier", desc: "Overrun loads up to 150 rounds back into the clip during its opening second of charge.", pick: 19, recommended: false },
      { name: "Pyromaniac", desc: "Setting an enemy on fire with Incendiary Chaingun grants 50 overhealth.", pick: 81, recommended: true }
    ],
    major: [
      { name: "Firewalker", desc: "Overrun sets every enemy it hits on fire.", pick: 72, recommended: true },
      { name: "Combat Fuel", desc: "Critical hits store 3 temporary overhealth for Cardiac Overdrive's next activation, up to 150 total.", pick: 28, recommended: false }
    ]
  },
  "Orisa": {
    minor: [
      { name: "Defense Protocol", desc: "Recover 100 health per second while charging up Terra Surge.", pick: 14, recommended: false },
      { name: "Mobile Fortification", desc: "Fortify removes all movement speed penalties and stops heat buildup entirely.", pick: 86, recommended: true }
    ],
    major: [
      { name: "Charged Javelin", desc: "Hold Primary Fire to charge Energy Javelin, boosting its knockback up to 25% and travel speed up to 100%. Fully charged throws pierce through enemies.", pick: 64, recommended: true },
      { name: "Protective Barrier", desc: "Javelin Spin is replaced by a launched barrier.", pick: 36, recommended: false }
    ]
  },
  "Ramattra": {
    minor: [
      { name: "Void Surge", desc: "While firing continuously, Void Accelerator occasionally bursts out 6 extra projectiles.", pick: 93, recommended: true },
      { name: "Relentless Form", desc: "Each kill during Nemesis Form adds 1 second to its timer.", pick: 7, recommended: false }
    ],
    major: [
      { name: "Nanite Repair", desc: "Standing inside Ravenous Vortex heals Ramattra for 75 health per second.", pick: 37, recommended: false },
      { name: "Vengeful Vortex", desc: "While Ravenous Vortex is in the air, tap (E) again to detonate it — dealing 50 damage and yanking enemies downward.", pick: 63, recommended: true }
    ]
  },
  "Reinhardt": {
    minor: [
      { name: "Crusader's Fire", desc: "Stunning an enemy returns a Fire Strike charge, stacking up to 3 total.", pick: 27, recommended: false },
      { name: "Crusader's Resolve", desc: "Passive health regeneration kicks in 75% faster while Barrier Field is deployed.", pick: 73, recommended: true }
    ],
    major: [
      { name: "Shield Slam", desc: "While Barrier Field is raised, Primary Fire damages and pushes back enemies in front of you.", pick: 40, recommended: false },
      { name: "Ignited Fury", desc: "Each enemy hit by Fire Strike adds 2 seconds of 25% increased attack speed.", pick: 60, recommended: true }
    ]
  },
  "Roadhog": {
    minor: [
      { name: "Scrap Hook", desc: "Landing Chain Hook reloads 2 ammo.", pick: 73, recommended: true },
      { name: "Sharpnel Launcher", desc: "Scrap Gun's alternate fire reaches 50% farther and its pellet spread tightens by 25%.", pick: 27, recommended: false }
    ],
    major: [
      { name: "Invigorate", desc: "Take A Breather builds Roadhog's movement speed up by 30% as it heals.", pick: 83, recommended: true },
      { name: "Pulled Pork", desc: "Chain Hook awards overhealth based on how far enemies are dragged, topping out at 300.", pick: 17, recommended: false }
    ]
  },
  "Sigma": {
    minor: [
      { name: "Kinetic Cycle", desc: "Absorbing projectiles with Kinetic Grasp also shaves time off Accretion's cooldown.", pick: 27, recommended: false },
      { name: "Hyper Regeneration", desc: "Half of all Hyperspheres damage dealt is converted into Experimental Barrier health.", pick: 73, recommended: true }
    ],
    major: [
      { name: "Hyper Strike", desc: "After 5 direct Hyperspheres hits, the next successful Quick Melee lifts and blasts nearby enemies away.", pick: 64, recommended: true },
      { name: "Levitation", desc: "Hold Double Jump to float upward for a brief moment.", pick: 36, recommended: false }
    ]
  },
  "Winston": {
    minor: [
      { name: "Electric Charge", desc: "Winston moves 10% faster for each enemy he's zapping with Tesla Cannon's primary fire, up to 30% total.", pick: 87, recommended: true },
      { name: "Heavy Landing", desc: "During Primal Rage, Jump Pack's damage and impact area scale up to 75% bigger depending on height.", pick: 13, recommended: false }
    ],
    major: [
      { name: "Chain Lightning", desc: "A fully charged Secondary Fire shot bounces to up to 2 more nearby targets.", pick: 26, recommended: false },
      { name: "Revitalizing Barrier", desc: "Barrier Projector continuously heals allies standing inside it for 30 health per second.", pick: 74, recommended: true }
    ]
  },
  "Wrecking Ball": {
    minor: [
      { name: "Steamroller", desc: "Rolling collisions deal twice as much damage to Tanks.", pick: 28, recommended: false },
      { name: "Multi-Ball", desc: "Press Q within 5 seconds of placing Minefield to drop 7 additional mines.", pick: 72, recommended: true }
    ],
    major: [
      { name: "Hang Time", desc: "Piledriver has a longer wind-up, giving air control and scaling damage up to 50% more.", pick: 31, recommended: false },
      { name: "Adaptative Barrier", desc: "Adaptive Shield creates a 1.5-second barrier the moment it's activated.", pick: 69, recommended: true }
    ]
  },
  "Zarya": {
    minor: [
      { name: "Spotter", desc: "Projected Barrier starts the ally's passive health regeneration and boosts their movement speed by 20%.", pick: 85, recommended: true },
      { name: "Jump-Ups", desc: "Secondary Fire kicks Zarya back 75% farther.", pick: 15, recommended: false }
    ],
    major: [
      { name: "Energy Lance", desc: "Particle Cannon's beam passes straight through enemies.", pick: 20, recommended: false },
      { name: "Extra Oomph", desc: "Dealing damage with Particle Cannon's beam while a Barrier is active generates energy.", pick: 80, recommended: true }
    ]
  },
  "Anran": {
    minor: [
      { name: "Smoulder", desc: "Burning enemies stay on fire for 1.5 extra seconds.", pick: 75, recommended: true },
      { name: "Heat Shield", desc: "Your Ultimate and each enemy it ignites grants you 50 overhealth.", pick: 25, recommended: false }
    ],
    major: [
      { name: "Short Fuse", desc: "Hitting an enemy with Inferno Rush cuts 1.5 seconds off its cooldown.", pick: 17, recommended: false },
      { name: "Hungering Blaze", desc: "Each enemy struck by Dancing Blaze restores 50 health.", pick: 83, recommended: true }
    ]
  },
  "Ashe": {
    minor: [
      { name: "Remote Detonator", desc: "After throwing Dynamite, press (E) again to set it off after a 0.5-second delay.", pick: 76, recommended: true },
      { name: "Double-Barreled", desc: "Knocking back an enemy with Coach Gun briefly lets you fire it once more with 25% less knockback.", pick: 24, recommended: false }
    ],
    major: [
      { name: "Viper's Sting", desc: "Landing 2 scoped shots in a row on the same target deals 25 bonus damage and reloads 1 ammo.", pick: 82, recommended: true },
      { name: "Airburst", desc: "Dynamite thrown while airborne detonates with a 40% wider blast and gives back 3 ammo.", pick: 18, recommended: false }
    ]
  },
  "Bastion": {
    minor: [
      { name: "Armored Artillery", desc: "Configuration Artillery grants 300 temporary overhealth when activated.", pick: 12, recommended: false },
      { name: "Configuration Reload", desc: "A-36 Tactical Grenade's cooldown resets each time you switch configurations.", pick: 88, recommended: true }
    ],
    major: [
      { name: "Lindholm Explosives", desc: "Configuration Assault gradually fires explosive shells in place of the standard rotary cannon.", pick: 29, recommended: false },
      { name: "Self-Repair", desc: "Press (E) to quickly heal yourself.", pick: 71, recommended: true }
    ]
  },
  "Cassidy": {
    minor: [
      { name: "Bang Bang", desc: "Cassidy lobs a second Flashbang that travels farther, though both deal 40% less damage.", pick: 94, recommended: true },
      { name: "Even the Odds", desc: "Regenerate 30 health per second for each enemy locked in Deadeye's sights.", pick: 6, recommended: false }
    ],
    major: [
      { name: "Rollin' Round-Up", desc: "Combat Roll restores 15 health for every bullet it reloads.", pick: 29, recommended: false },
      { name: "Silver Bullet", desc: "Peacekeeper's secondary fire becomes a piercing shot that causes bleeding. Both Combat Roll and Deadeye reset its cooldown.", pick: 71, recommended: true }
    ]
  },
  "Echo": {
    minor: [
      { name: "Focused Rush", desc: "Focused Beam extends 4 meters farther and Echo moves 20% faster while it's firing.", pick: 19, recommended: false },
      { name: "Partial Scan", desc: "Duplicate begins with half its ultimate charge already filled.", pick: 81, recommended: true }
    ],
    major: [
      { name: "Full Salvo", desc: "Sticky Bombs launches 50% more projectiles per volley.", pick: 95, recommended: true },
      { name: "High Beams", desc: "Killing an enemy with Focusing Beam resets Flight's cooldown.", pick: 5, recommended: false }
    ]
  },
  "Emre": {
    minor: [
      { name: "Suppressive Security", desc: "Override Protocol's light rounds reduce enemy movement speed by 30% for 1 second.", pick: 26, recommended: false },
      { name: "Enhanced Agility", desc: "Siphon Blaster's speed bonus increases by 20% when you're not actively firing.", pick: 74, recommended: true }
    ],
    major: [
      { name: "Heat Sink", desc: "Each direct hit from Siphon Blaster refunds heat and stretches its active duration by 0.1 seconds.", pick: 67, recommended: true },
      { name: "Cyber Adhesion", desc: "Cyber Frag sticks to whatever it touches and deals 40 bonus damage to stuck enemies.", pick: 33, recommended: false }
    ]
  },
  "Freja": {
    minor: [
      { name: "Relentless Barrage", desc: "Direct hits with Take Aim give back 8 automatic bolt ammo.", pick: 52, recommended: true },
      { name: "Momentum Boost", desc: "Quick Dash travels 20% farther.", pick: 48, recommended: false }
    ],
    major: [
      { name: "Aerial Recovery", desc: "After using Updraft, recover 30 health per second until landing.", pick: 63, recommended: true },
      { name: "Rising Winds", desc: "Updraft gains an extra charge but reaches 20% less height per use.", pick: 37, recommended: false }
    ]
  },
  "Genji": {
    minor: [
      { name: "Swift Cuts", desc: "Quick Melee takes 3 seconds off Swift Strike's cooldown.", pick: 28, recommended: false },
      { name: "Dragon's Thirst", desc: "Every Dragonblade swing steals 30% of the damage dealt as health.", pick: 72, recommended: true }
    ],
    major: [
      { name: "Blade Twisting", desc: "Swift Strike inflicts 25 extra damage over time when the target is below half health.", pick: 72, recommended: true },
      { name: "Meditation", desc: "Restore 35 health per second while Deflect is active.", pick: 28, recommended: false }
    ]
  },
  "Hanzo": {
    minor: [
      { name: "Sonic Disruption", desc: "Sonic Arrow hacks nearby Health Packs for 30 seconds after landing.", pick: 60, recommended: true },
      { name: "Dragon Fury", desc: "Landing a Primary Fire hit grants 20% increased attack speed for 1.5 seconds.", pick: 40, recommended: false }
    ],
    major: [
      { name: "Frost Arrow", desc: "Press (R) to nock an explosive frost arrow that slows whoever it hits by 35% for 2 seconds.", pick: 68, recommended: true },
      { name: "Scatter Arrows", desc: "Storm Arrows split into 5 fragments on their first bounce, each dealing 33% damage, and bounce one extra time.", pick: 32, recommended: false }
    ]
  },
  "Junkrat": {
    minor: [
      { name: "Mine Recycling", desc: "Kill shots with Concussion Mine restore one charge.", pick: 47, recommended: false },
      { name: "Nitro Boost", desc: "While RIP-Tire is rolling, press (LSHIFT) for a burst of speed — though it cuts RIP-Tire's damage in half.", pick: 53, recommended: true }
    ],
    major: [
      { name: "Bomb Voyage", desc: "Launching yourself with Concussion Mine grants 35% increased attack speed for 3 seconds.", pick: 9, recommended: false },
      { name: "Frag Cannon", desc: "Frag Launcher fires projectiles 25% faster.", pick: 91, recommended: true }
    ]
  },
  "Mei": {
    minor: [
      { name: "Skating Rink", desc: "Allies inside Blizzard move 25% faster and recover 50 health per second.", pick: 30, recommended: false },
      { name: "Glacial Propulsion", desc: "Double jumping spawns a small ice pillar beneath Mei that launches her into the air.", pick: 70, recommended: true }
    ],
    major: [
      { name: "Deep Freeze", desc: "Sustained primary fire hits eventually freeze the target solid.", pick: 65, recommended: true },
      { name: "Cryo-Storm", desc: "Cryo-Freeze slows and deals 70 damage per second to enemies nearby.", pick: 35, recommended: false }
    ]
  },
  "Pharah": {
    minor: [
      { name: "Drift Thrusters", desc: "Pharah can reposition freely while Barrage is firing.", pick: 29, recommended: false },
      { name: "Helix Shields", desc: "Trade 125 health for shields. Landing a direct hit with Rocket Launcher activates passive shield regeneration.", pick: 71, recommended: true }
    ],
    major: [
      { name: "Fuel Stores", desc: "Jet Dash refills 50% of fuel and the maximum overfuel capacity doubles.", pick: 19, recommended: false },
      { name: "Rocket Salvo", desc: "Using any movement ability causes the next primary fire to also launch two spiraling mini-rockets, each exploding for 40 damage.", pick: 81, recommended: true }
    ]
  },
  "Reaper": {
    minor: [
      { name: "Soul Reaving", desc: "Picking up Soul Globes from fallen enemies restores 50 health.", pick: 18, recommended: false },
      { name: "Lingering Wraith", desc: "Exiting Wraith Form gives a 40% movement speed boost for 2 seconds.", pick: 82, recommended: true }
    ],
    major: [
      { name: "Shadow Blink", desc: "Shadow Step's cast time and cooldown are both 25% shorter, but its teleport range is also cut by 25%.", pick: 51, recommended: true },
      { name: "Dire Triggers", desc: "Press (RMB) to fire both Hellfire Shotguns in a tight, long-range volley.", pick: 49, recommended: false }
    ]
  },
  "Sojourn": {
    minor: [
      { name: "Overcharged", desc: "Railgun's energy cap increases by 50 while Overclock is running.", pick: 47, recommended: false },
      { name: "Deceleration Field", desc: "Enemies caught by Disruptor Shot are slowed by 25%.", pick: 53, recommended: true }
    ],
    major: [
      { name: "Friction Generators", desc: "Sliding with Power Slide builds up to 50 Railgun Energy.", pick: 26, recommended: false },
      { name: "Dual Thrusters", desc: "Power Slide gets a second charge and its jump converts to horizontal momentum instead of vertical.", pick: 74, recommended: true }
    ]
  },
  "Soldier:76": {
    minor: [
      { name: "Helix Propulsion", desc: "Helix Rockets fly 50% faster.", pick: 72, recommended: true },
      { name: "Tactical Salvo", desc: "During Tactical Visor, Helix Rockets' cooldown drops by 80% and they no longer pause Heavy Pulse Rifle firing.", pick: 28, recommended: false }
    ],
    major: [
      { name: "Agility Training", desc: "Sprint becomes 20% faster and reloading is now possible without breaking Sprint.", pick: 54, recommended: true },
      { name: "Stim Pack", desc: "Stim Pack replaces Biotic Field. Using it heals Soldier: 76 for 30 health per second and boosts attack speed by 20% for 5 seconds.", pick: 46, recommended: false }
    ]
  },
  "Sombra": {
    minor: [
      { name: "Encrypted Upload", desc: "Hack works while invisible, and a successful hack tacks 3 seconds onto stealth's duration.", pick: 25, recommended: false },
      { name: "CTRL ALT ESC", desc: "Using Translocator while below half health triggers passive health regeneration.", pick: 75, recommended: true }
    ],
    major: [
      { name: "High-Speed Bandwidth", desc: "Allies who pick up hacked health packs gain 25% movement speed and 50 overhealth for 4 seconds.", pick: 33, recommended: false },
      { name: "Viral Replication", desc: "Hitting a hacked enemy with Virus spreads Virus to other enemies within 8 meters.", pick: 67, recommended: true }
    ]
  },
  "Symmetra": {
    minor: [
      { name: "Sentry Capacity", desc: "Sentry Turret holds one extra charge.", pick: 21, recommended: false },
      { name: "Perfect Alignment", desc: "Photon Projector's primary fire beam reaches 20% farther.", pick: 79, recommended: true }
    ],
    major: [
      { name: "Hovering Barrier", desc: "Teleporter can instead create a forward-gliding barrier. Pressing (E) again brakes its movement.", pick: 22, recommended: false },
      { name: "Shield Battery", desc: "Symmetra passively regenerates 20 shields per second when within 10 meters of her teleporter.", pick: 78, recommended: true }
    ]
  },
  "Torbjörn": {
    minor: [
      { name: "Hammer Time", desc: "Move 20% faster with Forge Hammer equipped.", pick: 35, recommended: false },
      { name: "Pre-Heated", desc: "Molten Core automatically triggers Overload.", pick: 65, recommended: true }
    ],
    major: [
      { name: "Anchor Bolts", desc: "Deploy Turret's throw range grows by 50% and it can now stick to walls and ceilings.", pick: 82, recommended: true },
      { name: "Overloaded Turret", desc: "Overload temporarily upgrades your Turret for 5 seconds, raising its health and damage output.", pick: 18, recommended: false }
    ]
  },
  "Tracer": {
    minor: [
      { name: "Chronal Dash", desc: "Blink covers 20% more distance.", pick: 34, recommended: false },
      { name: "Kinetic Reload", desc: "Each melee hit loads 20 ammo.", pick: 66, recommended: true }
    ],
    major: [
      { name: "Blink Packs", desc: "Picking up Health Packs refunds 1 Blink charge.", pick: 53, recommended: true },
      { name: "Quantum Entanglement", desc: "Recall grants 50 overhealth and 20 ammo that fade away over time.", pick: 47, recommended: false }
    ]
  },
  "Vendetta": {
    minor: [
      { name: "Raging Storm", desc: "Whirlwind Dash keeps spinning, striking 3 more times for 30 damage across a wider arc.", pick: 78, recommended: true },
      { name: "Extra Edge", desc: "Projected Edge costs 25% less energy to use.", pick: 22, recommended: false }
    ],
    major: [
      { name: "Relentless", desc: "Onslaught can stack 3 additional times, each stack adding 5% attack speed and 4% movement speed.", pick: 24, recommended: false },
      { name: "Siphoning Strike", desc: "Overhead attacks drain 40% of the damage dealt back as health.", pick: 76, recommended: true }
    ]
  },
  "Venture": {
    minor: [
      { name: "Deep Burrow", desc: "Drill Dash travels 50% farther while burrowing underground.", pick: 28, recommended: false },
      { name: "Excavation Exhilaration", desc: "While Tectonic Shock is active, all cooldowns refresh 300% faster.", pick: 72, recommended: true }
    ],
    major: [
      { name: "Smart Extender", desc: "Hold E to empower SMART Excavator, doubling its maximum range for 4 seconds.", pick: 81, recommended: true },
      { name: "Covered in Dirt", desc: "Clobber hits build up to 30 Explorer's Resolve shields.", pick: 19, recommended: false }
    ]
  },
  "Widowmaker": {
    minor: [
      { name: "Scoped Efficiency", desc: "Scoped shots consume only 3 ammo instead of 5.", pick: 77, recommended: true },
      { name: "Sniper's Instinct", desc: "Scoped shots charge twice as fast for 2 seconds after Grappling Hook is used.", pick: 23, recommended: false }
    ],
    major: [
      { name: "Seeker Mine", desc: "Venom Mine shoots poison darts at enemies within 10 meters and remains armed after being triggered.", pick: 9, recommended: false },
      { name: "Widow's Bite", desc: "Scoped shots can charge beyond 100% up to 125%, piercing through enemies when fully charged.", pick: 91, recommended: true }
    ]
  },
  "Ana": {
    minor: [
      { name: "Groggy", desc: "Enemies that wake from Sleep Dart are slowed and suffer 50 damage over 2 seconds.", pick: 27, recommended: false },
      { name: "Speed Serum", desc: "Nano Boost gives both Ana and her target a 40% movement speed boost.", pick: 73, recommended: true }
    ],
    major: [
      { name: "Biotic Bounce", desc: "After detonating, Biotic Grenade bounces and explodes a second time for 60 damage and healing.", pick: 35, recommended: false },
      { name: "Headhunter", desc: "Biotic Rifle shots can land critical hits on enemies.", pick: 65, recommended: true }
    ]
  },
  "Baptiste": {
    minor: [
      { name: "Expanded Field", desc: "Immortality Field's protective area is 30% larger.", pick: 57, recommended: true },
      { name: "Assault Burst", desc: "Regenerative Burst now gives Baptiste 20% increased attack speed for 3 seconds.", pick: 43, recommended: false }
    ],
    major: [
      { name: "Automated Healing", desc: "Each ability use activates Baptiste's Shoulder Turret, which periodically fires up to 3 shots at allies restoring 40 health each.", pick: 80, recommended: true },
      { name: "Rocket Boots", desc: "While airborne from Exo Boots, press (SPACE) to propel yourself horizontally.", pick: 20, recommended: false }
    ]
  },
  "Brigitte": {
    minor: [
      { name: "Combat Medic", desc: "Melee attacks cut 0.5 seconds off Repair Pack's cooldown.", pick: 18, recommended: false },
      { name: "Morale Boost", desc: "Inspire triggered by Whip Shot lasts 3 seconds longer than usual.", pick: 82, recommended: true }
    ],
    major: [
      { name: "Inspiring Strike", desc: "Shield Bash adds 30% movement speed for 2 seconds. When Inspire is triggered by Shield Bash, its healing is delivered all at once.", pick: 87, recommended: true },
      { name: "Whiplash", desc: "Whip Shot can fling enemies into walls, dealing 50 additional damage on impact.", pick: 13, recommended: false }
    ]
  },
  "Illari": {
    minor: [
      { name: "Rapid Construction", desc: "Healing Pylon deploys 300% faster and its cooldown is trimmed by 1.5 seconds.", pick: 38, recommended: false },
      { name: "Summer Solstice", desc: "Activating Captive Sun gives Illari 3 extra seconds of flight with 20% more flight speed and 20% more attack speed.", pick: 62, recommended: true }
    ],
    major: [
      { name: "Solar Flare", desc: "While the Solar Rifle's healing beam is active, press Primary Fire to heal all allies ahead of Illari for 100 healing.", pick: 12, recommended: false },
      { name: "Sunburn", desc: "Outburst ignites hit enemies, burning them for an extra 50 damage over 3 seconds.", pick: 88, recommended: true }
    ]
  },
  "Jetpack Cat": {
    minor: [
      { name: "Ulterior Motive", desc: "15% of the healing from Biotic Pawjectiles is converted into flight fuel.", pick: 97, recommended: true },
      { name: "Transport Shielding", desc: "Carrying another hero grants up to 75 bonus shield health.", pick: 3, recommended: false }
    ],
    major: [
      { name: "Headbutt", desc: "Flying fast enough during Frenetic Flight lets you knock back enemies on contact.", pick: 2, recommended: false },
      { name: "Claws Out", desc: "Every 6 seconds, Quick Melee becomes empowered — wounding enemies for 40 damage and slowing them by 30% for 1 second.", pick: 98, recommended: true }
    ]
  },
  "Juno": {
    minor: [
      { name: "Familiar Vitals", desc: "Pulsar Torpedoes lock onto allies 35% quicker.", pick: 25, recommended: false },
      { name: "Locked On", desc: "Each enemy hit by Pulsar Torpedoes reduces their cooldown by 1 second.", pick: 75, recommended: true }
    ],
    major: [
      { name: "Lift Off", desc: "Martian Overboots can now perform a triple jump.", pick: 42, recommended: false },
      { name: "Faster Blaster", desc: "Mediblaster fires non-stop while Glide Boost is active.", pick: 58, recommended: true }
    ]
  },
  "Kiriko": {
    minor: [
      { name: "Urgent Care", desc: "Healing Ofuda travels 50% faster when homing toward allies below half health.", pick: 28, recommended: false },
      { name: "Fortune Teller", desc: "Landing a Kunai hit automatically sends 2 Healing Ofuda toward a nearby ally.", pick: 72, recommended: true }
    ],
    major: [
      { name: "Ready Step", desc: "Swift Step boosts Kiriko's attack and reload speed by 40% for 3 seconds.", pick: 8, recommended: false },
      { name: "Foxtrot", desc: "Protection Suzu gives all affected allies a 30% movement speed boost for 4 seconds.", pick: 92, recommended: true }
    ]
  },
  "Lifeweaver": {
    minor: [
      { name: "Petal Protection", desc: "Allies standing on Petal Platform heal for 20 health per second.", pick: 19, recommended: false },
      { name: "Dashing Escape", desc: "Rejuvenating Dash covers 30% more ground.", pick: 81, recommended: true }
    ],
    major: [
      { name: "Sow The Seed", desc: "Quick Melee with Healing Blossom equipped launches a seed forward. An ally can collect it for 75 overhealth and a 25% speed boost for 5 seconds.", pick: 31, recommended: false },
      { name: "Superbloom", desc: "Thorns that accumulate fast enough detonate for 40 bonus damage within 2.5 seconds.", pick: 69, recommended: true }
    ]
  },
  "Lúcio": {
    minor: [
      { name: "Soundwave Rider", desc: "Wall Riding charges up your next Soundwave, pushing enemies 25% farther and hitting for 50% more damage.", pick: 57, recommended: true },
      { name: "Beat Drop", desc: "Amp It Up stays active throughout Sound Barrier's duration.", pick: 43, recommended: false }
    ],
    major: [
      { name: "Noise Violation", desc: "Crossfade's area of effect expands by 150% while Amp It Up is running.", pick: 80, recommended: true },
      { name: "Accelerando", desc: "Lúcio's attack speed climbs 50% while Amp It Up is active.", pick: 20, recommended: false }
    ]
  },
  "Mercy": {
    minor: [
      { name: "Angelic Resurrection", desc: "Casting Resurrect grants Mercy 100 overhealth.", pick: 24, recommended: false },
      { name: "Divine Momentum", desc: "Cancelling Guardian Angel gives Mercy a 15% movement speed burst.", pick: 76, recommended: true }
    ],
    major: [
      { name: "Chain Boost", desc: "Caduceus Staff's secondary fire extends to link with a second nearby ally simultaneously.", pick: 16, recommended: false },
      { name: "Flash Heal", desc: "Flash Heal instantly tops up Caduceus Staff's active target for 50 health — that amount triples for allies below half health.", pick: 84, recommended: true }
    ]
  },
  "Mizuki": {
    minor: [
      { name: "Wellspring", desc: "Remedy Aura builds its resource 25% faster.", pick: 47, recommended: false },
      { name: "Exposed Soul", desc: "Tagging an enemy with Binding Chain makes them take 30% more damage from you for 2 seconds.", pick: 53, recommended: true }
    ],
    major: [
      { name: "Resonate Return", desc: "Healing Kasa bounces one extra time, and every additional bounce raises its healing by 10.", pick: 77, recommended: true },
      { name: "Quickstep", desc: "While Katashiro Return is active, allies within Remedy Aura gain 25% extra movement speed.", pick: 23, recommended: false }
    ]
  },
  "Moira": {
    minor: [
      { name: "Destruction's Divide", desc: "Coalescence can be toggled between full healing or full damage mode, each 30% more potent than normal.", pick: 19, recommended: false },
      { name: "Ethical Nourishment", desc: "The first 30 healing Biotic Orb delivers to each ally it passes through is applied instantly.", pick: 81, recommended: true }
    ],
    major: [
      { name: "Reversal", desc: "Activating Biotic Orb a second time reverses its flight direction.", pick: 23, recommended: false },
      { name: "Phantom Step", desc: "Fade lasts 0.5 seconds longer and sends Moira 50% higher on each jump.", pick: 77, recommended: true }
    ]
  },
  "Wuyang": {
    minor: [
      { name: "Overflow", desc: "Rushing Torrent grants 10 ammo and refills 50% of healing resource on activation.", pick: 17, recommended: false },
      { name: "Balance", desc: "Hitting enemies with water orbs increases Restorative Stream's passive healing by 30% for 2 seconds.", pick: 83, recommended: true }
    ],
    major: [
      { name: "Ebb and Flow", desc: "Guardian Wave reverses back to its starting point, though at 50% effectiveness on the return trip.", pick: 26, recommended: false },
      { name: "Falling Rain", desc: "Control 3 water orbs at once — each deals 60% less damage and has a 25% smaller empowered explosion radius.", pick: 74, recommended: true }
    ]
  },
  "Zenyatta": {
    minor: [
      { name: "Discordant Repair", desc: "Zenyatta steals 10% of all damage dealt to enemies under Discord Orb as health.", pick: 74, recommended: true },
      { name: "Ascendance", desc: "Hold Double Jump to float in place for up to 3 seconds.", pick: 26, recommended: false }
    ],
    major: [
      { name: "Focused Destruction", desc: "Secondary fire charges 20% faster and can hold 1 extra Orb of Destruction in reserve.", pick: 34, recommended: false },
      { name: "Dual Harmony", desc: "Gain a second Harmony Orb, though both operate at 70% healing effectiveness.", pick: 66, recommended: true }
    ]
  }
};

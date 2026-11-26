/* ===== CONTENU : tiré du manuel (Leçons 1 et 2) ===== */
// [russe, français, prononciation (MAJUSCULES = syllabe accentuée), emoji de secours, catégorie, leçon]
const WORDS_RAW=[
["ма́ма","maman","MA-ma","👩","Famille & gens",1],
["па́па","papa","PA-pa","👨","Famille & gens",1],
["друг","ami","drouk","🧑‍🤝‍🧑","Famille & gens",1],
["подру́га","amie","pad-ROU-ga","👭","Famille & gens",1],
["брат","frère","brat","👦","Famille & gens",1],
["сын","fils","syn","🧒","Famille & gens",2],
["до́ктор","docteur","DOK-tar","🧑‍⚕️","Famille & gens",1],
["студе́нт","étudiant","stou-DIÈNT","🎓","Famille & gens",2],
["он","il","on","🙋‍♂️","Famille & gens",1],
["она́","elle","a-NA","🙋‍♀️","Famille & gens",1],
["оно́","« ça » (neutre)","a-NO","⭕","Famille & gens",1],
["гру́ппа","groupe","GROU-pa","👥","Famille & gens",1],
["дру́жба","amitié","DROUJ-ba","🤝","Famille & gens",2],
["кто","qui","kto","🙋","Famille & gens",1],
["дом","maison, immeuble","dom","🏠","Lieux",1],
["до́ма","à la maison","DO-ma","🏡","Lieux",1],
["ко́мната","chambre, pièce","KOM-na-ta","🛏️","Lieux",1],
["окно́","fenêtre","ak-NO","🪟","Lieux",1],
["го́род","ville","GO-rat","🏙️","Lieux",1],
["Москва́","Moscou","mask-VA","🇷🇺","Lieux",2],
["шко́ла","école","CHKO-la","🏫","Lieux",2],
["банк","banque","bank","🏦","Lieux",1],
["заво́д","usine","za-VOT","🏭","Lieux",2],
["цирк","cirque","tsirk","🎪","Lieux",2],
["клуб","club","kloup","💃","Lieux",2],
["парк","parc","park","🌳","Lieux",1],
["сад","jardin","sat","🌷","Lieux",2],
["мост","pont","most","🌉","Lieux",2],
["доро́га","route, chemin","da-RO-ga","🛣️","Lieux",1],
["ка́рта","carte","KAR-ta","🗺️","Lieux",1],
["страна́","pays","stra-NA","🌍","Lieux",2],
["центр","centre","tsèntr","🎯","Lieux",2],
["эта́ж","étage","i-TACH","🏢","Lieux",2],
["зал","grande salle","zal","🏛️","Lieux",2],
["класс","classe, salle de classe","klass","🧑‍🏫","Lieux",2],
["вход","entrée","fkhot","📥","Lieux",2],
["вы́ход","sortie","VY-khat","📤","Lieux",2],
["тут","ici","tout","📍","Lieux",1],
["там","là-bas","tam","👉","Lieux",1],
["молоко́","lait","ma-la-KO","🥛","Nourriture",2],
["ма́сло","beurre, huile","MAS-la","🧈","Nourriture",2],
["сыр","fromage","syr","🧀","Nourriture",2],
["суп","soupe","soup","🍲","Nourriture",2],
["сок","jus","sok","🧃","Nourriture",2],
["са́хар","sucre","SA-khar","🍬","Nourriture",2],
["ры́ба","poisson","RY-ba","🐟","Nourriture",2],
["вода́","eau","va-DA","💧","Nourriture",2],
["за́втрак","petit-déjeuner","ZAF-trak","🥐","Nourriture",2],
["у́жин","dîner","OU-jyn","🍝","Nourriture",2],
["ло́жка","cuillère","LOCH-ka","🥄","Nourriture",2],
["нож","couteau","noch","🔪","Nourriture",2],
["фру́кты","fruits","FROUK-ty","🍎","Nourriture",2],
["бана́н","banane","ba-NAN","🍌","Nourriture",1],
["лук","oignon","louk","🧅","Nourriture",2],
["каранда́ш","crayon","ka-ran-DACH","✏️","Objets",2],
["журна́л","magazine, revue","jour-NAL","📰","Objets",2],
["откры́тка","carte postale","at-KRYT-ka","💌","Objets",2],
["ма́рка","timbre","MAR-ka","📮","Objets",2],
["ла́мпа","lampe","LAM-pa","💡","Objets",2],
["шкаф","armoire","chkaf","🗄️","Objets",2],
["су́мка","sac","SOUM-ka","👜","Objets",2],
["ку́ртка","veste","KOURT-ka","🧥","Objets",1],
["руба́шка","chemise","rou-BACH-ka","👔","Objets",2],
["ша́пка","bonnet","CHAP-ka","🧢","Objets",2],
["шарф","écharpe","charf","🧣","Objets",2],
["фо́рма","uniforme, forme","FOR-ma","👕","Objets",2],
["маши́на","voiture","ma-CHY-na","🚗","Objets",2],
["авто́бус","bus","af-TO-bous","🚌","Objets",2],
["фо́то","photo","FO-ta","📷","Objets",2],
["факс","fax","faks","📠","Objets",2],
["кот","chat","kot","🐱","Objets",1],
["рука́","main, bras","rou-KA","✋","Objets",2],
["у́хо","oreille","OU-kha","👂","Objets",2],
["фонта́н","fontaine","fan-TAN","⛲","Objets",2],
["игра́","jeu","ig-RA","🎮","Objets",1],
["ша́хматы","échecs","CHAKH-ma-ty","♟️","Objets",2],
["конце́рт","concert","kan-TSÈRT","🎶","Objets",2],
["стол","table","stol","🍽️","Objets",2],
["стул","chaise","stoul","🪑","Objets",2],
["бу́ква","lettre (de l'alphabet)","BOUK-va","🔤","École & mots",2],
["сло́во","mot","SLO-va","💬","École & mots",2],
["слог","syllabe","slok","🔡","École & mots",2],
["звук","son","zvouk","🔊","École & mots",2],
["звоно́к","sonnerie","zva-NOK","🔔","École & mots",2],
["ци́фра","chiffre","TSI-fra","🔢","École & mots",2],
["расска́з","récit, nouvelle","ras-SKAS","📖","École & mots",2],
["ска́зка","conte","SKAS-ka","🧚","École & mots",2],
["глаго́л","verbe","gla-GOL","🏃‍♂️","École & mots",2],
["уро́к","leçon, cours","ou-ROK","📝","École & mots",1],
["рабо́та","travail","ra-BO-ta","💼","École & mots",1],
["сон","sommeil, rêve","son","😴","École & mots",2],
["сто","cent","sto","💯","École & mots",2],
["два","deux","dva","✌️","École & mots",2],
["а́вгуст","août","AV-goust","🗓️","Temps & météo",2],
["год","an, année","got","📆","Temps & météo",1],
["у́тро","matin","OU-tra","🌄","Temps & météo",1],
["у́тром","le matin","OU-tram","🌅","Temps & météo",1],
["за́втра","demain","ZAF-tra","⏭️","Temps & météo",2],
["пото́м","ensuite, plus tard","pa-TOM","🔜","Temps & météo",1],
["тогда́","alors","tag-DA","🕰️","Temps & météo",1],
["когда́","quand","kag-DA","❓🕒","Temps & météo",1],
["до́лго","longtemps","DOL-ga","🐢","Temps & météo",2],
["пого́да","météo, temps qu'il fait","pa-GO-da","⛅","Temps & météo",2],
["холо́дно","il fait froid","KHO-lad-na","🥶","Temps & météo",2],
["да","oui","da","✅","Mots utiles",1],
["и","et","i","➕","Mots utiles",1],
["что","quoi, que","chto","❓","Mots utiles",2],
["как","comment","kak","🤔","Mots utiles",1],
["мно́го","beaucoup","MNO-ga","🧺","Mots utiles",1],
["мо́жно","c'est permis, on peut","MOJ-na","👌","Mots utiles",2],
["пло́хо","mal, mauvais","PLO-kha","👎","Mots utiles",2],
["хорошо́","bien","kha-ra-CHO","👍","Mots utiles",2],
["тру́дно","difficile","TROUD-na","😓","Mots utiles",1],
["то́же","aussi","TO-jè","🙌","Mots utiles",2],
["э́то","c'est, voici","È-ta","☝️","Mots utiles",1],
["так","ainsi, comme ça","tak","👇","Mots utiles",1],
["вот","voici, tiens","vot","🫴","Mots utiles",2]
];
// Astuces de mémoire (clé = mot sans accent, en minuscules)
const MN={
"дом":"Comme « domicile » : même racine latine (domus).",
"брат":"Comme « bro » en anglais : le frère.",
"сын":"Comme « son » en anglais : le fils.",
"окно":"Vient de « око » (l'œil) : la fenêtre est l'œil de la maison.",
"вода":"Dans « водка » (vodka) : la petite eau.",
"сахар":"Même famille que « sucre » et « saccharine ».",
"школа":"Comme « scolaire » (du latin schola).",
"город":"On le retrouve dans Novgorod, Stalingrad (-gorod, -grad) : la ville.",
"работа":"Le mot « robot » vient de rabota, le travail !",
"сто":"Comme « cent » : même racine indo-européenne.",
"сон":"Comme « somnolent » (latin somnus).",
"ухо":"Se dit « oukha » : pense à « ouïe ».",
"кот":"Comme « cat » : le chat.",
"шапка":"En français aussi : une « chapka » !",
"шарф":"Comme « scarf » en anglais.",
"куртка":"Pense à « courte » : une veste courte.",
"молоко":"Comme « milk » en anglais.",
"стул":"Comme « stool » (tabouret).",
"холодно":"Comme « cold » en anglais.",
"дружба":"Vient de друг (ami) : l'amitié.",
"подруга":"друг (ami) + под- : l'amie.",
"вход":"в- = dans → вход = entrée. вы- = hors de → выход = sortie.",
"выход":"вы- = hors de → выход = sortie. в- = dans → вход = entrée.",
"сад":"Comme « детский сад » (jardin d'enfants) : le jardin.",
"мост":"Pense à Mostar, la ville du pont.",
"трудно":"труд (travail) : ce qui demande du travail est difficile.",
"много":"Comme « many » en anglais : beaucoup.",
"можно":"Vient de « мочь » (pouvoir) : on peut.",
"тоже":"то же = « la même chose » → aussi.",
"вот":"Pense à « voilà » : вот !",
"тут":"« тут » ≈ « tout près » : ici.",
"там":"« там » ≈ le tam-tam qu'on entend au loin : là-bas.",
"это":"Pas de verbe « être » en russe : Это Антон = « C'est Anton ».",
"два":"Comme « duo » : deux.",
"кто":"кто = qui (personnes). что = quoi (choses).",
"что":"что (prononcé « chto ») = quoi (choses). кто = qui (personnes).",
"когда":"Se dit « kagda » : pense à « quand-da ».",
"оно":"Neutre : pour les mots en -о / -е (окно, молоко).",
"он":"он = il. Pour les mots masculins (брат, дом, стол).",
"она":"она = elle. Pour les mots en -а (мама, страна, карта).",
"да":"да = oui. Réponse la plus courante : « Да, дома. »"
};
// Mots transparents (ressemblent au français)
const TRANSP=new Set(["банан","банк","парк","клуб","цирк","центр","фото","факс","доктор","студент","автобус","концерт","фонтан","карта","класс","форма","марка","лампа","суп","машина","журнал","группа","фрукты","август","москва","школа","сок","сумма"]);

// Alphabet : [Majuscule, minuscule, nom, son (français), astuce, mot exemple, dans le manuel]
const ALPHA=[
["А","а","а","« a » comme dans papa","Non accentué, il devient plus faible, presque « a » court.","а́вгуст",1],
["Б","б","бэ","« b » comme dans bon","Fin de mot : devient « p » (клуб → « kloup »).","брат",1],
["В","в","вэ","« v » comme dans vous","Fin de mot ou devant consonne sourde : « f » (вход → « fkhot »).","вода́",1],
["Г","г","гэ","« g » comme dans gare","Fin de mot : devient « k » (друг → « drouk »).","го́род",1],
["Д","д","дэ","« d » comme dans dos","Fin de mot : devient « t » (год → « got »). La langue touche les dents.","дом",1],
["Е","е","е","« yé » en début de mot, adoucit après une consonne","En début de mot ou après une voyelle : « yé » (ем). Après une consonne : elle adoucit la consonne et se lit « é » (нет → nyèt).","ем|je mange|🍽️",1],
["Ё","ё","ё","« yo » en début de mot, adoucit après une consonne","Toujours accentuée. « yo » en début de mot (ёлка), « o » doux après une consonne (тётя).","ёлка|sapin|🎄",1],
["Ж","ж","жэ","« j » dur (jour), langue recourbée","Toujours dur. Fin de mot : « ch » (этаж → « itach »).","журна́л",1],
["З","з","зэ","« z » comme dans zéro","Fin de mot : « s » (рассказ → « rasskas »).","заво́д",1],
["И","и","и","« i » comme dans ici","Après ж, ш, ц on écrit « и » mais on dit « ы » (жи, ши, ци).","игра́",1],
["Й","й","и краткое","« ï » très bref, comme dans maï","Un « i » court après une voyelle : ай, ой, уй, эй. Il termine мой, трамвай, новый.","трамва́й",1],
["К","к","ка","« k » comme dans kilo","Pas de petit souffle, comme en français.","кот",1],
["Л","л","эль","« l » plus ferme que le français","Pointe de la langue contre les dents du haut.","ла́мпа",1],
["М","м","эм","« m » comme dans maman","","ма́ма",1],
["Н","н","эн","« n » comme dans non","","нож",1],
["О","о","о","« o » comme dans mot","Non accentué, il se lit « a » : молоко́ → « malako ».","окно́",1],
["П","п","пэ","« p » comme dans papa","","па́па",1],
["Р","р","эр","« r » roulé, bout de la langue","Comme le r italien ou espagnol.","ры́ба",1],
["С","с","эс","« s » comme dans sac","Toujours « s », jamais « z ».","сок",1],
["Т","т","тэ","« t » comme dans table","","стол",1],
["У","у","у","« ou » comme dans nous","","у́тро",1],
["Ф","ф","эф","« f » comme dans fou","","фо́то",1],
["Х","х","ха","« kh » : souffle rauque au fond de la gorge","Comme le « j » espagnol de jota ou le « ch » allemand de Bach.","хорошо́",1],
["Ц","ц","цэ","« ts » comme dans tsé-tsé","Toujours dur. ци se lit « tsy ».","цирк",1],
["Ч","ч","че","« tch » doux, comme tchèque","Pas encore dans ton manuel.","чай|thé|🍵",0],
["Ш","ш","ша","« ch » dur (chat), langue recourbée","Toujours dur. ши se lit « chy ».","ша́пка",1],
["Щ","щ","ща","« chtch » long et doux","Pas encore dans ton manuel.","борщ|soupe de betterave|🍲",0],
["Ъ","ъ","твёрдый знак","pas de son : signe dur","Il sépare deux sons. Pas encore dans ton manuel.","объе́кт|objet|📦",0],
["Ы","ы","ы","un « i » dit du fond de la bouche","N'existe pas en français. Place la langue comme pour « ou » et dis « i ». Jamais en début de mot.","сыр",1],
["Ь","ь","мягкий знак","pas de son : signe mou","Il adoucit la consonne avant lui : брать, тетрадь, мать. Il ne se prononce pas seul.","тетра́дь",1],
["Э","э","э","« è » ouvert, comme dans mère","","э́то",1],
["Ю","ю","ю","« you » en début de mot, adoucit après une consonne","« you » en début de mot (юг), « u » doux après une consonne (дюна).","юг",1],
["Я","я","я","« ya » en début de mot, adoucit après une consonne","« ya » en début de mot (я, я́блоко). Après une consonne : « a » doux (тётя). Non accentuée, elle se lit presque « i » (сестра).","я́блоко",1],
];
// Sons de lettres pour le quiz (lettres du manuel uniquement) : [lettre, son court]
const SOUNDQ={"А":"a","О":"o","У":"ou","Э":"è","И":"i","Ы":"y profond","М":"m","П":"p","Б":"b","Т":"t","Д":"d","Н":"n","К":"k","Г":"g","Х":"kh","Р":"r roulé","Л":"l","Ф":"f","В":"v","С":"s","З":"z","Ш":"ch","Ж":"j","Ц":"ts","Е":"yé","Ё":"yo","Й":"ï bref","Ю":"you","Я":"ya"};

// Phrases des leçons : [russe, français, leçon]
const SENT_RAW=[
["Э́то Анто́н.","C'est Anton.",1],
["Э́то па́рк.","C'est un parc.",1],
["Э́то ма́ма.","C'est maman.",1],
["Э́то па́па.","C'est papa.",1],
["Э́то го́род.","C'est une ville.",1],
["Анто́н до́ма.","Anton est à la maison.",1],
["Анто́н до́ма?","Anton est à la maison ?",1],
["Да, Анто́н до́ма.","Oui, Anton est à la maison.",1],
["Она́ до́ма.","Elle est à la maison.",1],
["Он тут.","Il est ici.",1],
["Тама́ра там.","Tamara est là-bas.",1],
["Тут ко́мната.","Ici, il y a une chambre.",1],
["Там окно́.","Là-bas, il y a une fenêtre.",1],
["Он до́ктор.","Il est docteur.",1],
["Э́то друг и подру́га.","Ce sont un ami et une amie.",1],
["Ма́ма до́ма?","Maman est à la maison ?",1],
["Банк там?","La banque est là-bas ?",1],
["Что э́то?","Qu'est-ce que c'est ?",2],
["Э́то цирк.","C'est un cirque.",2],
["Кто э́то?","Qui est-ce ?",2],
["Кто тут?","Qui est ici ?",2],
["Тут до́ктор.","Ici, il y a un docteur.",2],
["Что там?","Qu'y a-t-il là-bas ?",2],
["Там па́рк.","Là-bas, il y a un parc.",2],
["Э́то сыр?","C'est du fromage ?",2],
["Да, сыр.","Oui, du fromage.",2],
["Когда́ за́втрак?","Quand est le petit-déjeuner ?",2],
["За́втрак у́тром.","Le petit-déjeuner est le matin.",2],
["Уро́к у́тром.","Le cours est le matin.",2],
["Э́то молоко́ и ма́сло.","C'est du lait et du beurre.",2],
["Э́то ша́пка и шарф.","Ce sont un bonnet et une écharpe.",2],
["Э́то фру́кты и сок.","Ce sont des fruits et du jus.",2],
["Э́то то́же го́род.","C'est aussi une ville.",2],
["Э́то журна́л «Москва́».","C'est le magazine « Moscou ».",2],
["Э́то до́ктор Ивано́в.","C'est le docteur Ivanov.",2],
["Э́то И́ра Ивано́ва.","C'est Ira Ivanova.",2],
["Э́то маши́на «Во́лга».","C'est la voiture « Volga ».",2],
["Э́то заво́д «Ура́л».","C'est l'usine « Oural ».",2],
["Э́то игра́ «Ша́хматы».","C'est le jeu « Échecs ».",2],
["Э́то клуб «Спарта́к».","C'est le club « Spartak ».",2]
];
// Dialogues : [titre, leçon, [[russe, français], ...]]
const DIALOGS=[
["Anton est-il à la maison ?",1,[["— Э́то Анто́н?","— C'est Anton ?"],["— Да, э́то Анто́н.","— Oui, c'est Anton."],["— Анто́н до́ма?","— Anton est à la maison ?"],["— Да, он до́ма.","— Oui, il est à la maison."]]],
["En famille",1,[["Э́то па́па. Он до́ктор.","C'est papa. Il est docteur."],["Э́то ма́ма. И она́ до́ктор.","C'est maman. Elle aussi est docteur."],["Э́то брат.","C'est mon frère."],["Э́то друг Анто́н.","C'est mon ami Anton."],["Э́то подру́га Тама́ра.","C'est mon amie Tamara."]]],
["Qui est ici ? Qu'y a-t-il là-bas ?",2,[["— И́нна, кто тут?","— Inna, qui est ici ?"],["— Тут ма́ма и па́па.","— Ici, il y a maman et papa."],["— Том, кто там?","— Tom, qui est là-bas ?"],["— Там А́нна и Анто́н.","— Là-bas, il y a Anna et Anton."]]],
["Qu'est-ce que c'est ?",2,[["— И́ра, что э́то?","— Ira, qu'est-ce que c'est ?"],["— Э́то заво́д «Ура́л».","— C'est l'usine « Oural »."],["— Анто́н, что э́то?","— Anton, qu'est-ce que c'est ?"],["— Э́то шко́ла.","— C'est l'école."]]],
["Quand ?",2,[["— Когда́ за́втрак?","— Quand est le petit-déjeuner ?"],["— За́втрак у́тром.","— Le petit-déjeuner est le matin."],["— За́втрак у́тром?","— Le petit-déjeuner est le matin ?"],["— Да, у́тром.","— Oui, le matin."]]]
];
// Règles : [titre, leçon, html, exemples [[russe, prononciation, français]]]
const RULES=[
["Un mot = un seul accent",1,"Chaque mot russe a une voyelle accentuée. Elle est dite fort et clairement. Dans ton manuel, elle est marquée d'un petit trait rouge ici. Les autres voyelles sont faibles. Quand tu apprends un mot, apprends toujours son accent.",[["ма́ма","MA-ma","maman"],["мно́го","MNO-ga","beaucoup"],["окно́","ak-NO","fenêtre"]]],
["Pas de verbe « être » ni d'article",1,"Au présent, le russe ne dit pas « est ». Он до́ктор = « Il (est) docteur ». Il n'y a pas non plus de « le / la / un » : па́рк veut dire « un parc » ou « le parc ».",[["Э́то па́рк.","È-ta park","C'est un parc."],["Анто́н до́ма.","an-TON DO-ma","Anton est à la maison."]]],
["О non accentué se lit « a »",1,"Quand О n'est pas accentué, on dit « a ». Seule la voyelle accentuée garde sa vraie valeur. Dans ton manuel : мама [мАма], Антон [антОн], она [анА], это [Эта].",[["молоко́","ma-la-KO","lait"],["хо́лодно","KHO-lad-na","il fait froid"],["каранда́ш","ka-ran-DACH","crayon"]]],
["Intonation ИК-1 : phrase qui affirme",1,"La voix reste à plat puis descend à la fin, sur le mot important. C'est la phrase normale : Э́то Анто́н. Анто́н до́ма.",[["Э́то Анто́н.","","C'est Anton."],["Да, Анто́н до́ма.","","Oui, Anton est à la maison."]]],
["Intonation ИК-3 : question oui / non",1,"Même phrase qu'une affirmation, mais la voix monte sur le mot qu'on interroge. On répond « Да, ... » en reprenant le mot clé : Анто́н до́ма? — Да, до́ма.",[["Анто́н до́ма?","","Anton est à la maison ?"],["Э́то Анто́н?","","C'est Anton ?"]]],
["Les trois genres : он, она, оно",2,"Un nom russe est masculin (он), féminin (она) ou neutre (оно). Terminaison en consonne : он. Terminaison en -а ou -я : она. Terminaison en -о ou -е : оно. Exception à retenir : па́па est masculin (он). Pour les métiers, он до́ктор se dit aussi pour une femme.",[["брат, дом, стол","","он"],["ма́ма, страна́, ка́рта","","она"],["окно́, молоко́, фо́то","","оно"]]],
["Intonation ИК-2 : кто, что, когда",2,"Quand la question contient un mot interrogatif (кто, что, когда, как), la voix monte sur ce mot puis redescend. On n'a pas besoin de monter à la fin.",[["Что э́то?","chto È-ta","Qu'est-ce que c'est ?"],["Кто тут?","kto tout","Qui est ici ?"],["Когда́ за́втрак?","kag-DA ZAF-trak","Quand est le petit-déjeuner ?"]]],
["Кто ou что ?",2,"Pour une personne, on demande кто (qui). Pour une chose, on demande что (quoi). On écrit « что » mais on dit « chto ».",[["Кто э́то? — Э́то ма́ма.","","Qui est-ce ? — C'est maman."],["Что э́то? — Э́то цирк.","","Qu'est-ce que c'est ? — C'est un cirque."]]],
["Ы et И ne sont pas le même son",2,"Ы n'existe pas en français. C'est un « i » dit du fond de la bouche. Ы n'est jamais en début de mot. Après ж, ш, ц, on écrit и mais on dit ы : жи, ши, ци se lisent [жы] [шы] [цы].",[["сыр","syr","fromage"],["ры́ба","RY-ba","poisson"],["маши́на","ma-CHY-na","voiture"]]],
["Ж, Ш, Ц sont toujours durs",2,"Ces trois consonnes n'ont pas de version douce. Même devant е ou и, elles restent dures : же se lit [жэ], це se lit [цэ].",[["журна́л","jour-NAL","magazine"],["ша́пка","CHAP-ka","bonnet"],["цирк","tsirk","cirque"]]],
["Consonnes sonores et sourdes",2,"Les consonnes vont par paires : Б-П, В-Ф, Г-К, Д-Т, Ж-Ш, З-С. Л, М, Н, Р sont toujours sonores. Х et Ц sont toujours sourdes.",[["бар — пар","",""],["дом — том","",""],["год — кот","",""]]],
["Fin de mot : la consonne devient sourde",2,"À la fin d'un mot, une consonne sonore se prononce sourde : б→п, д→т, г→к, ж→ш, з→с. Devant une consonne sourde, в se prononce ф. On écrit comme avant, on prononce autrement.",[["клуб","kloup","club"],["го́род","GO-rat","ville"],["друг","drouk","ami"],["эта́ж","i-TACH","étage"],["расска́з","ras-SKAS","récit"],["вход","fkhot","entrée"],["за́втра","ZAF-tra","demain"]]],
["Noms de famille : Иванов → Иванова",2,"Un nom de famille masculin en -ов devient -ова pour une femme. Ivanov se prononce « ivanof » (в devient ф à la fin).",[["Анто́н Ивано́в","","Anton Ivanov"],["И́ра Ивано́ва","","Ira Ivanova"]]],
["И, тоже : et, aussi",2,"и relie deux mots comme « et » : шапка и шарф. то́же veut dire « aussi » : Э́то то́же го́род.",[["ша́пка и шарф","","un bonnet et une écharpe"],["Э́то то́же го́род.","","C'est aussi une ville."]]],
["Тут, там, до́ма : où ?",1,"тут = ici. там = là-bas. до́ма = à la maison. Ils répondent à la question « où ? » et se placent après le nom : Анто́н тут. Банк там.",[["Анто́н тут.","","Anton est ici."],["Банк там.","","La banque est là-bas."],["Она́ до́ма.","","Elle est à la maison."]]]
];
// Conseils de méthode
const TIPS=[
"Dis le mot à voix haute avant de voir la réponse. Parler fixe le mot plus vite que lire.",
"Regarde l'image, pas la traduction. Cherche le mot russe directement, sans passer par le français.",
"Dix minutes chaque jour valent mieux qu'une heure une fois par semaine.",
"Recopie chaque mot à la main dans ton cahier. Ton cours demande de savoir les écrire.",
"Apprends toujours l'accent avec le mot. Un mot sans accent est un mot à moitié appris.",
"Quand tu te trompes, c'est bon signe : le mot reviendra plus vite et restera mieux.",
"Réécoute chaque phrase deux fois, puis répète-la à voix haute en imitant la mélodie.",
"Construis tes propres phrases avec les mots du jour : Это ... Тут ... Там ..."
];

// ===== Leçon 3 =====
WORDS_RAW.push(...[["апте́ка", "pharmacie", "ap-TYÈ-ka", "💊", "Lieux", 3], ["де́сять", "dix", "DYÈ-syat", "🔟", "Nombres", 3], ["костю́м", "costume", "kas-TOUM", "🤵", "Objets", 3], ["оте́ц", "père", "a-TYÈTS", "👨", "Famille & gens", 3], ["студе́нтка", "étudiante", "stou-DYÈNT-ka", "👩‍🎓", "Famille & gens", 3], ["брать", "prendre", "brat", "🤲", "Verbes", 3], ["дикта́нт", "dictée", "dik-TANT", "📝", "École & mots", 3], ["магази́н", "magasin", "ma-ga-ZIN", "🏪", "Lieux", 3], ["письмо́", "lettre (courrier)", "pis-MO", "✉️", "Objets", 3], ["твой", "ton (masc.)", "tvoï", "🫵", "Possessifs & pronoms", 3], ["твоя́", "ta (fém.)", "tva-YA", "🫵", "Possessifs & pronoms", 3], ["твоё", "ton (neutre)", "tva-YO", "🫵", "Possessifs & pronoms", 3], ["твои́", "tes (pluriel)", "tva-Ï", "🫵", "Possessifs & pronoms", 3], ["ваш", "votre (masc.)", "vach", "👥", "Possessifs & pronoms", 3], ["ва́ша", "votre (fém.)", "VA-cha", "👥", "Possessifs & pronoms", 3], ["ва́ше", "votre (neutre)", "VA-ché", "👥", "Possessifs & pronoms", 3], ["ва́ши", "vos (pluriel)", "VA-chi", "👥", "Possessifs & pronoms", 3], ["войти́", "entrer", "vaï-TI", "🚪", "Verbes", 3], ["вон", "là-bas (regarde)", "von", "👉", "Mots utiles", 3], ["вопро́с", "question", "va-PROS", "❓", "École & mots", 3], ["всё", "tout", "fsyo", "🌐", "Mots utiles", 3], ["вто́рник", "mardi", "FTOR-nik", "📅", "Temps & météo", 3], ["вы", "vous", "vy", "👥", "Possessifs & pronoms", 3], ["вы́йти", "sortir", "VY-ti", "🚶", "Verbes", 3], ["газе́та", "journal (presse)", "ga-ZYÈ-ta", "📰", "Objets", 3], ["где", "où", "gdyè", "📍", "Mots utiles", 3], ["гро́мко", "fort, bruyamment", "GROM-ka", "📢", "Mots utiles", 3], ["дай", "donne", "daï", "🤲", "Verbes", 3], ["да́йте", "donnez", "DAÏ-tyé", "🤲", "Verbes", 3], ["де́вять", "neuf", "DYÈ-vyat", "9️⃣", "Nombres", 3], ["дя́дя", "oncle", "DYA-dya", "👨", "Famille & gens", 3], ["его́", "son, sa (à lui)", "yè-VO", "👨", "Possessifs & pronoms", 3], ["её", "son, sa (à elle)", "yè-YO", "👩", "Possessifs & pronoms", 3], ["их", "leur, leurs", "ikh", "👥", "Possessifs & pronoms", 3], ["ем", "je mange (есть)", "yèm", "🍽️", "Verbes", 3], ["ёлка", "sapin", "YOL-ka", "🎄", "Objets", 3], ["здесь", "ici", "zdyès", "📍", "Mots utiles", 3], ["здра́вствуйте", "bonjour (poli)", "ZDRAST-vouï-tyé", "👋", "Mots utiles", 3], ["зима́", "hiver", "zi-MA", "❄️", "Temps & météo", 3], ["идём", "nous allons", "i-DYOM", "🚶‍♂️", "Verbes", 3], ["инжене́р", "ingénieur", "in-jè-NYÈR", "👷", "Famille & gens", 3], ["институ́т", "institut", "in-sti-TOUT", "🎓", "Lieux", 3], ["карти́на", "tableau, image", "kar-TI-na", "🖼️", "Objets", 3], ["кварти́ра", "appartement", "kvar-TI-ra", "🏢", "Lieux", 3], ["магнитофо́н", "magnétophone", "mag-ni-ta-FON", "📻", "Objets", 3], ["матема́тик", "mathématicien", "ma-tyé-MA-tik", "🧮", "Famille & gens", 3], ["матема́тика", "mathématiques", "ma-tyé-MA-ti-ka", "➗", "École & mots", 3], ["мать", "mère", "mat", "👩", "Famille & gens", 3], ["музе́й", "musée", "mou-ZYÈÏ", "🏛️", "Lieux", 3], ["мой", "mon (masc.)", "moï", "🙋", "Possessifs & pronoms", 3], ["моя́", "ma (fém.)", "ma-YA", "🙋", "Possessifs & pronoms", 3], ["моё", "mon (neutre)", "ma-YO", "🙋", "Possessifs & pronoms", 3], ["мои́", "mes (pluriel)", "ma-Ï", "🙋", "Possessifs & pronoms", 3], ["мы", "nous", "my", "👫", "Possessifs & pronoms", 3], ["наш", "notre (masc.)", "nach", "🫂", "Possessifs & pronoms", 3], ["на́ша", "notre (fém.)", "NA-cha", "🫂", "Possessifs & pronoms", 3], ["на́ше", "notre (neutre)", "NA-ché", "🫂", "Possessifs & pronoms", 3], ["на́ши", "nos (pluriel)", "NA-chi", "🫂", "Possessifs & pronoms", 3], ["не", "ne… pas", "nyè", "🚫", "Mots utiles", 3], ["нет", "non, il n'y a pas", "nyèt", "✖️", "Mots utiles", 3], ["но́вый", "nouveau", "NO-vyï", "🆕", "Adjectifs", 3], ["нос", "nez", "nos", "👃", "Objets", 3], ["они́", "ils, elles", "a-NI", "👥", "Possessifs & pronoms", 3], ["остано́вка", "arrêt (de bus)", "a-sta-NOF-ka", "🚏", "Lieux", 3], ["пожа́луйста", "s'il vous plaît, de rien", "pa-JAL-sta", "🙏", "Mots utiles", 3], ["поня́тно", "compris, clair", "pa-NYAT-na", "👍", "Mots utiles", 3], ["пою́", "je chante (петь)", "pa-YOU", "🎤", "Verbes", 3], ["родно́й", "natal, cher", "rad-NOÏ", "🏡", "Adjectifs", 3], ["сего́дня", "aujourd'hui", "si-VOD-nya", "📆", "Temps & météo", 3], ["сестра́", "sœur", "syes-TRA", "👩", "Famille & gens", 3], ["скажи́", "dis", "ska-JI", "🗣️", "Verbes", 3], ["скажи́те", "dites", "ska-JI-tyé", "🗣️", "Verbes", 3], ["соба́ка", "chien", "sa-BA-ka", "🐕", "Objets", 3], ["спаси́бо", "merci", "spa-SI-ba", "🙏", "Mots utiles", 3], ["спортза́л", "salle de sport", "spart-ZAL", "🏋️", "Lieux", 3], ["спра́ва", "à droite", "SPRA-va", "➡️", "Mots utiles", 3], ["ста́нция", "station", "STAN-tsy-ya", "🚉", "Lieux", 3], ["ста́рый", "vieux", "STA-ryï", "👴", "Adjectifs", 3], ["статья́", "article", "sta-TYA", "📄", "École & mots", 3], ["столо́вая", "cantine", "sta-LO-va-ya", "🍽️", "Lieux", 3], ["теа́тр", "théâtre", "tyé-ATR", "🎭", "Lieux", 3], ["тепло́", "il fait doux, chaud", "tyép-LO", "🌤️", "Temps & météo", 3], ["тетра́дь", "cahier", "tyé-TRAT", "📓", "Objets", 3], ["тётя", "tante", "TYO-tya", "👩", "Famille & gens", 3], ["ти́хо", "doucement, calme", "TI-kha", "🤫", "Mots utiles", 3], ["трамва́й", "tramway", "tram-VAÏ", "🚋", "Objets", 3], ["ты", "tu", "ty", "🫵", "Possessifs & pronoms", 3], ["шесть", "six", "chèst", "6️⃣", "Nombres", 3], ["юг", "sud", "iouk", "🧭", "Lieux", 3], ["я", "je", "ya", "🙋", "Possessifs & pronoms", 3], ["кни́га", "livre", "KNI-ga", "📖", "Objets", 3], ["стадио́н", "stade", "sta-di-ON", "🏟️", "Lieux", 3], ["оди́н", "un", "a-DIN", "1️⃣", "Nombres", 3], ["здра́вствуй", "bonjour (à un ami)", "ZDRAST-vouï", "👋", "Mots utiles", 3], ["я́блоко", "pomme", "YA-bla-ka", "🍎", "Nourriture", 3]]);
Object.assign(MN,{"аптека": "« apothicaire » : on y trouve les médicaments.", "магазин": "Comme « magasin », presque identique.", "диктант": "Comme « dictée » : dikt-.", "институт": "« institut ».", "инженер": "« ingénieur ».", "музей": "« musée ».", "театр": "« théâtre ».", "станция": "« station ».", "трамвай": "« tramway ».", "спортзал": "« sport » + « salle » (зал).", "магнитофон": "« magnéto » + « phone ».", "математика": "« mathématiques ».", "газета": "« gazette ».", "квартира": "Pense à « quartier » : un morceau d'immeuble.", "костюм": "« costume ».", "нос": "En anglais « nose » : même racine.", "сестра": "En anglais « sister ».", "мать": "Latin « mater » : la mère.", "спасибо": "Vient de « Que Dieu sauve » : c'est le merci.", "здравствуйте": "Racine « santé » : on souhaite la bonne santé.", "вторник": "второй = deuxième : le deuxième jour de la semaine.", "нет": "Comme le « niet » célèbre : non.", "ты": "ты = tu, вы = vous : les deux ont la même lettre.", "вы": "вы = vous. Ce y se dit du fond de la bouche.", "юг": "Se lit « iouk ». Le sud.", "яблоко": "Commence par я = « ya », comme « yaourt ».", "ем": "« yèm » : pense à « miam ».", "шесть": "Six : « chèst » ressemble à « chaise » avec 6 pieds.", "девять": "Neuf : « dyèvyat » : 9 = девять.", "десять": "Dix : « dyèsyat » : dix doigts.", "старый": "Comme « star » ? Non : vieux. Pense à « un vieux sage ».", "новый": "« nova » : nouveau, comme une nova qui brille.", "тепло": "« tiède » : tyép-LO.", "зима": "« zima » : le zéro froid de l'hiver.", "тихо": "« tikho » : on dit « chut » tout doucement.", "громко": "« grom » comme le tonnerre : fort.", "вопрос": "Un vopros se pose avec un point d'interrogation.", "отец": "« ottyéts » : le père.", "письмо": "Pense à « pli » : le pli qu'on envoie.", "картина": "« carte-ine » : une image accrochée.", "тётя": "« tyotya » : tante, comme « tata ».", "дядя": "« dyadya » : oncle, la même consonne répétée.", "собака": "« sabaka » : le chien qui aboie.", "брать": "« brat' » prendre : à ne pas confondre avec брат (frère)."});

// ===== Leçon 3 : phrases, dialogues, règles =====
SENT_RAW.push(...[["Э́то мой дом.", "C'est ma maison.", 3], ["Э́то моя́ ма́ма.", "C'est ma maman.", 3], ["Э́то моё окно́.", "C'est ma fenêtre.", 3], ["Э́то мои́ фру́кты.", "Ce sont mes fruits.", 3], ["Э́то твой оте́ц?", "C'est ton père ?", 3], ["Да, э́то мой оте́ц.", "Oui, c'est mon père.", 3], ["Э́то твоя́ сестра́?", "C'est ta sœur ?", 3], ["Где твоя́ тетра́дь?", "Où est ton cahier ?", 3], ["Вот моя́ тетра́дь.", "Voici mon cahier.", 3], ["Где остано́вка?", "Où est l'arrêt ?", 3], ["Вон там апте́ка.", "Là-bas, il y a une pharmacie.", 3], ["Э́то наш институ́т.", "C'est notre institut.", 3], ["Э́то ва́ша кварти́ра?", "C'est votre appartement ?", 3], ["Э́то его́ маши́на.", "C'est sa voiture (à lui).", 3], ["Э́то её су́мка.", "C'est son sac (à elle).", 3], ["Э́то их дом.", "C'est leur maison.", 3], ["Он студе́нт.", "Il est étudiant.", 3], ["Она́ студе́нтка.", "Elle est étudiante.", 3], ["Мой оте́ц инжене́р.", "Mon père est ingénieur.", 3], ["Моя́ мать матема́тик.", "Ma mère est mathématicienne.", 3], ["Сего́дня вто́рник.", "Aujourd'hui, c'est mardi.", 3], ["Сего́дня тепло́.", "Aujourd'hui, il fait doux.", 3], ["Спаси́бо!", "Merci !", 3], ["Пожа́луйста.", "Je vous en prie.", 3], ["Здра́вствуйте! Мо́жно войти́?", "Bonjour ! Puis-je entrer ?", 3], ["Мо́жно вы́йти?", "Puis-je sortir ?", 3], ["Скажи́те, пожа́луйста, где апте́ка?", "Dites-moi, s'il vous plaît, où est la pharmacie ?", 3], ["Ты студе́нт?", "Tu es étudiant ?", 3], ["Вы студе́нт?", "Vous êtes étudiant ?", 3], ["Я студе́нт.", "Je suis étudiant.", 3], ["Мы до́ма.", "Nous sommes à la maison.", 3], ["Они́ до́ма.", "Ils sont à la maison.", 3], ["Нет, он не до́ма.", "Non, il n'est pas à la maison.", 3], ["Э́то не мой дом.", "Ce n'est pas ma maison.", 3], ["Э́то но́вый теа́тр.", "C'est un nouveau théâtre.", 3], ["Э́то ста́рый музе́й.", "C'est un vieux musée.", 3], ["Здесь ти́хо.", "Ici, c'est calme.", 3], ["Там гро́мко.", "Là-bas, c'est bruyant.", 3], ["Я ем.", "Je mange.", 3], ["Я пою́.", "Je chante.", 3], ["Поня́тно.", "C'est clair.", 3], ["Где ты?", "Où es-tu ?", 3]]);
DIALOGS.push(...[["À l'institut", 3, [["— Здра́вствуйте! Мо́жно войти́?", "— Bonjour ! Puis-je entrer ?"], ["— Да, пожа́луйста.", "— Oui, je vous en prie."], ["— Спаси́бо.", "— Merci."], ["— Пожа́луйста.", "— Je vous en prie."]]], ["Où est la pharmacie ?", 3, [["— Скажи́те, пожа́луйста, где апте́ка?", "— Dites-moi, s'il vous plaît, où est la pharmacie ?"], ["— Вон там.", "— Là-bas."], ["— Спаси́бо!", "— Merci !"], ["— Пожа́луйста.", "— Je vous en prie."]]], ["C'est ton cahier ?", 3, [["— Э́то твоя́ тетра́дь?", "— C'est ton cahier ?"], ["— Да, э́то моя́ тетра́дь.", "— Oui, c'est mon cahier."], ["— Э́то твой журна́л?", "— C'est ton magazine ?"], ["— Нет, э́то не мой журна́л.", "— Non, ce n'est pas mon magazine."]]], ["La famille (suite)", 3, [["— Кто э́то?", "— Qui est-ce ?"], ["— Э́то мой оте́ц. Он инжене́р.", "— C'est mon père. Il est ingénieur."], ["— Кто э́то?", "— Qui est-ce ?"], ["— Э́то моя́ сестра́. Она́ студе́нтка.", "— C'est ma sœur. Elle est étudiante."]]]]);
RULES.push(...[["Мой, твой, наш, ваш : ils s'accordent avec le nom", 3, "Le possessif prend le genre du nom. Masculin : мой дом. Féminin : моя мама. Neutre : моё окно. Pluriel : мои фрукты. Même chose pour твой (ton), наш (notre) et ваш (votre). Choisis la forme d'après le nom, pas d'après la personne qui possède.", [["мой дом", "moï dom", "ma maison"], ["моя́ ма́ма", "ma-YA MA-ma", "ma maman"], ["моё окно́", "ma-YO ak-NO", "ma fenêtre"], ["мои́ фру́кты", "ma-Ï FROUK-ty", "mes fruits"], ["твоя́ сестра́", "tva-YA syes-TRA", "ta sœur"], ["на́ше окно́", "NA-ché ak-NO", "notre fenêtre"]]], ["Его, её, их ne changent jamais", 3, "его (son, à lui), её (son, à elle) et их (leur) ont une seule forme, quel que soit le nom. Э́то его дом, э́то его мама : его ne bouge pas. Attention à la prononciation : его se dit « yivo » (le г se lit в).", [["Э́то его́ дом.", "È-ta yi-VO dom", "C'est sa maison (à lui)."], ["Э́то её су́мка.", "È-ta yi-YO SOUM-ka", "C'est son sac (à elle)."], ["Э́то их кварти́ра.", "È-ta ikh kvar-TI-ra", "C'est leur appartement."]]], ["Ты ou вы ?", 3, "ты = tu : on le dit à un ami, un membre de la famille, un enfant. вы = vous : une personne qu'on respecte, ou plusieurs personnes. Здра́вствуйте est la formule polie, celle qu'on dit à quelqu'un qu'on vouvoie.", [["Ты студе́нт?", "ty stou-DYÈNT", "Tu es étudiant ?"], ["Вы студе́нт?", "vy stou-DYÈNT", "Vous êtes étudiant ?"], ["Здра́вствуйте!", "ZDRAST-vouï-tyé", "Bonjour !"]]], ["Dire non : нет et не", 3, "нет est la réponse « non » (ou « il n'y a pas »). не se place juste avant le mot nié : э́то не мой дом. Pour répondre : Нет, он не дома.", [["Нет, он не до́ма.", "nyèt on nyè DO-ma", "Non, il n'est pas à la maison."], ["Э́то не мой дом.", "È-ta nyè moï dom", "Ce n'est pas ma maison."]]], ["Où ? Là ? Voici : где, вот, вон, здесь, там", 3, "где = où. вот = voici (tout près). вон = là-bas (on montre du doigt, plus loin). здесь et тут = ici. там = là-bas. Une question avec где suit ИК-2 : la voix monte sur где puis redescend.", [["Где остано́вка?", "gdyè a-sta-NOF-ka", "Où est l'arrêt ?"], ["Вот моя́ тетра́дь.", "vot ma-YA tyé-TRAT", "Voici mon cahier."], ["Вон там апте́ка.", "von tam ap-TYÈ-ka", "Là-bas, il y a une pharmacie."]]], ["Demander poliment", 3, "Мо́жно войти? = Puis-je entrer ? Мо́жно вы́йти? = Puis-je sortir ? Скажи́те, пожа́луйста... = Dites-moi, s'il vous plaît... On répond Спаси́бо (merci), et on dit Пожа́луйста (je vous en prie). Пожа́луйста veut dire aussi « s'il vous plaît ».", [["Мо́жно войти́?", "MOJ-na vaï-TI", "Puis-je entrer ?"], ["Спаси́бо.", "spa-SI-ba", "Merci."], ["Пожа́луйста.", "pa-JAL-sta", "Je vous en prie."]]], ["Ё est toujours accentué", 3, "La lettre ё porte toujours l'accent, même si on n'écrit pas de petit trait dessus. On la prononce « yo » en début de mot : ёлка, её, всё, идём. Dans les livres on écrit souvent е à la place, mais ton manuel écrit ё.", [["ёлка", "YOL-ka", "sapin"], ["всё", "fsyo", "tout"], ["идём", "i-DYOM", "nous allons"]]]]);

// ===== Leçon 3 complète : pages 23 à 30 =====
SENT_RAW.push(...[["Э́то ваш журна́л?", "C'est votre magazine ?", 3], ["Да, мой.", "Oui, c'est le mien.", 3], ["Э́то студе́нт?", "C'est un étudiant ?", 3], ["Нет, э́то не студе́нт.", "Non, ce n'est pas un étudiant.", 3], ["Э́то до́ктор.", "C'est un docteur.", 3], ["Где Анто́н?", "Où est Anton ?", 3], ["Он до́ма.", "Il est à la maison.", 3], ["Э́то мой стол.", "C'est ma table.", 3], ["Э́то твой стол.", "C'est ta table.", 3], ["Э́то мой па́па.", "C'est mon papa.", 3], ["Э́то твой друг.", "C'est ton ami.", 3], ["Э́то твой го́род?", "C'est ta ville ?", 3], ["Э́то твой брат?", "C'est ton frère ?", 3], ["Э́то твой трамва́й?", "C'est ton tramway ?", 3], ["Э́то твой журна́л?", "C'est ton magazine ?", 3], ["Э́то я.", "C'est moi.", 3], ["Э́то ты.", "C'est toi.", 3], ["Э́то вы.", "C'est vous.", 3], ["Э́то он и она́.", "Ce sont lui et elle.", 3], ["Э́то мы.", "C'est nous.", 3], ["Э́то они́.", "Ce sont eux.", 3], ["Э́то Анто́н?", "C'est Anton ?", 3], ["Да, э́то он.", "Oui, c'est lui.", 3], ["Э́то Тама́ра?", "C'est Tamara ?", 3], ["Да, э́то она́.", "Oui, c'est elle.", 3], ["Э́то Ива́н и Том?", "Ce sont Ivan et Tom ?", 3], ["Да, э́то они́.", "Oui, ce sont eux.", 3], ["Э́то ты и Анто́н?", "C'est toi et Anton ?", 3], ["Да, э́то мы.", "Oui, c'est nous.", 3], ["Вот мой го́род.", "Voici ma ville.", 3], ["Спра́ва моё окно́.", "À droite, ma fenêtre.", 3], ["Вот моя́ ко́мната.", "Voici ma chambre.", 3], ["Вот я и мой брат Ю́ра.", "Voici moi et mon frère Youra.", 3], ["Там мои́ ма́ма и па́па.", "Là-bas, ma maman et mon papa.", 3], ["Э́то ва́ша гру́ппа?", "C'est votre groupe ?", 3], ["Да, на́ша.", "Oui, c'est le nôtre.", 3], ["Э́то его́ брат?", "C'est son frère (à lui) ?", 3], ["Да, его́.", "Oui, le sien.", 3], ["Э́то её друг?", "C'est son ami (à elle) ?", 3], ["Да, её.", "Oui, le sien (à elle).", 3], ["Э́то их го́род?", "C'est leur ville ?", 3], ["Да, их.", "Oui, la leur.", 3], ["А́нна, что э́то?", "Anna, qu'est-ce que c'est ?", 3], ["Э́то мой го́род.", "C'est ma ville.", 3], ["Тама́ра, что э́то?", "Tamara, qu'est-ce que c'est ?", 3], ["Э́то наш дом.", "C'est notre maison.", 3], ["И́нна, кто э́то?", "Inna, qui est-ce ?", 3], ["Э́то мой брат.", "C'est mon frère.", 3], ["Анто́н, кто э́то?", "Anton, qui est-ce ?", 3], ["Э́то моя́ ма́ма.", "C'est ma maman.", 3], ["И́нна, ма́ма до́ма?", "Inna, maman est à la maison ?", 3], ["Да, до́ма.", "Oui, elle y est.", 3], ["Где И́нна?", "Où est Inna ?", 3], ["Она́ до́ма.", "Elle est à la maison.", 3], ["Мама́, где моя́ тетра́дь?", "Maman, où est mon cahier ?", 3], ["Твоя́ тетра́дь? Она́ здесь.", "Ton cahier ? Il est ici.", 3, 0], ["Ира, где здесь апте́ка?", "Ira, où est la pharmacie ici ?", 3], ["Она́ там.", "Elle est là-bas.", 3], ["Скажи́те, пожа́луйста, где остано́вка авто́буса?", "Dites-moi, s'il vous plaît, où est l'arrêt de bus ?", 3], ["Остано́вка? Она́ там.", "L'arrêt ? Il est là-bas.", 3, 0], ["Скажи́те, пожа́луйста, где Тама́ра?", "Dites-moi, s'il vous plaît, où est Tamara ?", 3], ["Это мой родно́й го́род.", "C'est ma ville natale.", 3], ["Э́то наш но́вый студе́нт.", "C'est notre nouvel étudiant.", 3], ["За́втрак у́тром.", "Le petit déjeuner est le matin.", 3], ["Сего́дня уро́к.", "Aujourd'hui, il y a cours.", 3], ["Теа́тр спра́ва.", "Le théâtre est à droite.", 3], ["Там магази́н.", "Là-bas, il y a un magasin.", 3], ["Э́то го́род.", "C'est une ville.", 3], ["Э́то друг.", "C'est un ami.", 3], ["Кто э́то?", "Qui est-ce ?", 3], ["Где он?", "Où est-il ?", 3], ["Э́то магази́н?", "C'est un magasin ?", 3], ["Он до́ктор?", "Il est docteur ?", 3], ["А кто э́то?", "Et qui est-ce ?", 3], ["А ваш друг?", "Et votre ami ?", 3], ["А ты?", "Et toi ?", 3], ["А он?", "Et lui ?", 3], ["А Эмма?", "Et Emma ?", 3], ["А Анто́н?", "Et Anton ?", 3], ["А вы?", "Et vous ?", 3], ["А э́то?", "Et ça ?", 3], ["Здра́вствуй, Ира!", "Bonjour, Ira !", 3], ["Здра́вствуй, Анто́н!", "Bonjour, Anton !", 3], ["Здра́вствуй, Ни́на!", "Bonjour, Nina !", 3], ["Да, мо́жно.", "Oui, c'est possible.", 3], ["Банк там.", "La banque est là-bas.", 3], ["Э́то моя́ сестра́ Ни́на.", "C'est ma sœur Nina.", 3], ["Она́ не студе́нтка.", "Elle n'est pas étudiante.", 3], ["Нет, она́ инжене́р.", "Non, elle est ingénieure.", 3], ["Твоя́ ма́ма то́же до́ктор?", "Ta maman est docteur aussi ?", 3]]);
DIALOGS.push(...[["À mémoriser : Ira et Youra (exercice 24)", 3, [["— Здра́вствуй, Ира!", "— Bonjour, Ira !"], ["— О, Ю́ра, здра́вствуй!", "— Oh, Youra, bonjour !"], ["— Мо́жно войти́?", "— Puis-je entrer ?"], ["— Да, пожа́луйста.", "— Oui, je vous en prie."], ["— Что э́то?", "— Qu'est-ce que c'est ?"], ["— Э́то фо́то. Э́то наш дом. Там на́ша маши́на.", "— C'est une photo. C'est notre maison. Là-bas, notre voiture."], ["— А э́то кто? Твоя́ подру́га?", "— Et ça, qui est-ce ? Ta copine ?"], ["— Нет, э́то моя́ сестра́ Ни́на.", "— Non, c'est ma sœur Nina."], ["— Скажи́, пожа́луйста, она́ студе́нтка?", "— Dis-moi, s'il te plaît, elle est étudiante ?"], ["— Нет, она́ не студе́нтка.", "— Non, elle n'est pas étudiante."], ["— А кто она́?", "— Et qui est-elle ?"], ["— До́ктор?", "— Docteur ?"], ["— Твоя́ ма́ма то́же до́ктор?", "— Ta maman est docteur aussi ?"], ["— Нет, она́ инжене́р.", "— Non, elle est ingénieure."]], "mem"], ["Здравствуй, Антон !", 3, [["— Здра́вствуй, Анто́н!", "— Bonjour, Anton !"], ["— Здра́вствуй, Ни́на!", "— Bonjour, Nina !"]]], ["Puis-je entrer ? Puis-je sortir ?", 3, [["— Мо́жно войти́?", "— Puis-je entrer ?"], ["— Да, мо́жно.", "— Oui, c'est possible."], ["— Мо́жно вы́йти?", "— Puis-je sortir ?"], ["— Да, мо́жно.", "— Oui, c'est possible."]]], ["Où est la banque ?", 3, [["— Скажи́те, пожа́луйста, где банк?", "— Dites-moi, s'il vous plaît, où est la banque ?"], ["— Банк там.", "— La banque est là-bas."]]], ["Что это ? Кто это ?", 3, [["— А́нна, что э́то?", "— Anna, qu'est-ce que c'est ?"], ["— Э́то мой го́род.", "— C'est ma ville."], ["— Тама́ра, что э́то?", "— Tamara, qu'est-ce que c'est ?"], ["— Э́то наш дом.", "— C'est notre maison."], ["— И́нна, кто э́то?", "— Inna, qui est-ce ?"], ["— Э́то мой брат.", "— C'est mon frère."], ["— Анто́н, кто э́то?", "— Anton, qui est-ce ?"], ["— Э́то моя́ ма́ма.", "— C'est ma maman."]]], ["Et ça ? Et papa ?", 3, [["— А́нна, кто э́то?", "— Anna, qui est-ce ?"], ["— Э́то мой брат.", "— C'est mon frère."], ["— А э́то?", "— Et ça ?"], ["— И́нна, ма́ма до́ма?", "— Inna, maman est à la maison ?"], ["— Да, до́ма.", "— Oui, elle y est."], ["— А па́па?", "— Et papa ?"]]], ["Où est Inna ?", 3, [["— Где И́нна?", "— Où est Inna ?"], ["— Она́ до́ма.", "— Elle est à la maison."]]], ["Où est… ? (exercice 22)", 3, [["— Скажи́те, пожа́луйста, где Тама́ра?", "— Dites-moi, s'il vous plaît, où est Tamara ?"], ["— Она́ до́ма.", "— Elle est à la maison."], ["— Скажи́те, пожа́луйста, где остано́вка авто́буса?", "— Dites-moi, s'il vous plaît, où est l'arrêt de bus ?"], ["— Остано́вка? Она́ там.", "— L'arrêt ? Il est là-bas."], ["— Мама́, где моя́ тетра́дь?", "— Maman, où est mon cahier ?"], ["— Твоя́ тетра́дь? Она́ здесь.", "— Ton cahier ? Il est ici."], ["— Спаси́бо.", "— Merci."], ["— Ира, где здесь апте́ка?", "— Ira, où est la pharmacie ici ?"], ["— Она́ там.", "— Elle est là-bas."]]]]);
RULES.push(...[["Й : le « i bref »", 3, "Й (и краткое) est un « i » très court qui suit une voyelle : ай, ой, уй, эй. On l'entend dans май, дай, мой, трамвай, родно́й, но́вый, ста́рый. Dans мой et мои́, la différence est nette : мой se dit « moï », мои́ se dit « ma-Ï » (на papier : [мой — маи]).", [["май", "maï", "mai"], ["дай", "daï", "donne"], ["мой", "moï", "mon"], ["трамва́й", "tram-VAÏ", "tramway"], ["но́вый", "NO-vyï", "nouveau"], ["мои́", "ma-Ï", "mes"]]], ["Я, Ё, Ю, Е : les voyelles en « y »", 3, "Я = [йа], Ё = [йо], Ю = [йу], Е = [йэ]. En début de mot ou après une voyelle, on entend vraiment le « y » : я, ёлка, юг, ем. Après une consonne, le « y » disparaît mais la consonne devient douce : тя, ню, ле… Dans ton manuel : я, яблоко, юг, Юра, ёлка, ем, пою.", [["я", "ya", "je"], ["я́блоко", "YA-bla-ka", "pomme"], ["юг", "iouk", "sud"], ["ёлка", "YOL-ka", "sapin"], ["ем", "yèm", "je mange"], ["пою́", "pa-YOU", "je chante"]]], ["Consonnes dures et douces", 3, "Н, Т, Д, С, З peuvent être dures ou douces. La voyelle qui suit décide : на, но, ну, нэ, ны sont durs ; ня, нё, ню, не, ни sont doux. Le signe ь rend aussi la consonne douce : брать, тетра́дь, мать, де́сять. Une consonne douce est dite avec la langue bien plaquée contre le palais, comme un petit « y » ajouté. Compare : нос — нёс, брат — брать, дом — идём.", [["нос — нёс", "nos — nyos", "nez — il a porté"], ["брат — брать", "brat — brat'", "frère — prendre"], ["дом — идём", "dom — i-DYOM", "maison — nous allons"], ["тетра́дь", "tyé-TRAT'", "cahier"]]], ["Я, е, и non accentués : un « i » faible", 3, "Quand я ou е ne portent pas l'accent, ils se lisent presque « i ». Dans ton manuel : сестра́ se dit [с'истра́], тетра́дь [т'итра́т'], да́йте [да́йт'и], де́сять [д'э́с'ит'], дя́дя [д'а́д'а]. Écoute toujours le mot entier, pas lettre par lettre.", [["сестра́", "syis-TRA", "sœur"], ["тетра́дь", "tyi-TRAT'", "cahier"], ["да́йте", "DAÏ-t'i", "donnez"], ["де́сять", "DYÈ-s'it'", "dix"], ["дя́дя", "DYA-d'a", "oncle"]]], ["Les pronoms : я, ты, он, она, оно / мы, вы, они", 3, "Singulier : я (je), ты (tu), он (il), она́ (elle), оно́ (neutre). Pluriel : мы (nous), вы (vous), они́ (ils, elles). Pour désigner quelqu'un : Э́то я. Э́то ты. Э́то он и она́. Э́то мы. Э́то они́. Pour répondre à « Э́то Анто́н ? » on dit : Да, э́то он. Pour deux personnes ou plus : Да, э́то они́.", [["Э́то Анто́н? — Да, э́то он.", "", "C'est Anton ? — Oui, c'est lui."], ["Э́то Тама́ра? — Да, э́то она́.", "", "C'est Tamara ? — Oui, c'est elle."], ["Э́то Ива́н и Том? — Да, э́то они́.", "", "Ce sont Ivan et Tom ? — Oui, eux."], ["Э́то ты и Анто́н? — Да, э́то мы.", "", "Toi et Anton ? — Oui, nous."]]], ["À chaque pronom son possessif", 3, "я → мой, моя́, моё (mon, ma). ты → твой, твоя́, твоё (ton, ta). он → его́ (son, à lui). она́ → её (son, à elle). мы → наш, на́ша, на́ше (notre). вы → ваш, ва́ша, ва́ше (votre). они́ → их (leur). Seuls мой, твой, наш, ваш changent de forme avec le nom ; его, её, их ne changent jamais.", [["я → мой дом", "", "moi → ma maison"], ["ты → твоя́ ма́ма", "", "toi → ta maman"], ["мы → на́ше окно́", "", "nous → notre fenêtre"], ["они́ → их го́род", "", "eux → leur ville"]]], ["Répondre : твой → мой, ваш → наш", 3, "Quand on te demande Э́то твой дом ?, tu réponds du point de vue de celui qui parle : Да, мой. À la question Э́то ва́ша гру́ппа ?, la réponse est Да, на́ша. Avec его, её, их, rien ne change : Э́то его́ брат ? — Да, его́.", [["Э́то твой дом? — Да, мой.", "", "C'est ta maison ? — Oui, la mienne."], ["Э́то ва́ша гру́ппа? — Да, на́ша.", "", "C'est votre groupe ? — Oui, le nôtre."], ["Э́то её друг? — Да, её.", "", "C'est son ami ? — Oui, le sien."], ["Э́то их го́род? — Да, их.", "", "C'est leur ville ? — Oui, la leur."]]], ["Ш devant б, д, г, з, ж devient ж", 3, "Quand ш est suivi d'une consonne sonore, elle se prononce ж. Dans ton manuel : ваш брат [ва́ж брат], ваш дом [важ дом], наш го́род [наж го́род], наш зал [наж зал], ваш журна́л [важ журна́л]. On écrit toujours ш, mais on dit ж.", [["ваш брат", "vaj brat", "votre frère"], ["наш го́род", "naj GO-rat", "notre ville"], ["наш зал", "naj zal", "notre salle"], ["ваш журна́л", "vaj jour-NAL", "votre magazine"]]], ["Кто ? Что ? Где ? et la réponse avec он, она, они", 3, "кто = qui (une personne : Инна). что = quoi (une chose : книга). где = où (réponses : здесь, тут, там, до́ма). Quand on répond, on remplace le nom par он, она ou они : Где Инна ? — Она́ дома. Где остано́вка ? — Она́ там. Где Анто́н ? — Он до́ма. Остано́вка est féminin, donc она́.", [["Где И́нна? — Она́ до́ма.", "", "Où est Inna ? — Elle est à la maison."], ["Где остано́вка? — Она́ там.", "", "Où est l'arrêt ? — Il est là-bas."], ["Где Анто́н? — Он до́ма.", "", "Où est Anton ? — Il est à la maison."], ["Мама́, где моя́ тетра́дь? — Она́ здесь.", "", "Maman, où est mon cahier ? — Il est ici."]]], ["Intonation ИК-4 : « Et toi ? Et ça ? »", 3, "ИК-4 sert à relancer la conversation avec А : А ты ? А он ? А э́то ? А па́па ? Le mot après А est dit plus bas, puis la voix remonte à la fin. Comme ИК-3, c'est une question, mais celle-ci reprend le sujet : « Et… ? ».", [["А ты?", "a TY", "Et toi ?"], ["А э́то?", "a È-ta", "Et ça ?"], ["А ваш друг?", "a vach drouk", "Et votre ami ?"]]], ["Tableau des quatre intonations", 3, "ИК-1 : phrase qui affirme, la voix descend (Э́то го́род.). ИК-2 : question avec кто, что, где : la voix monte sur le mot interrogatif (Кто э́то ? Где он ?). ИК-3 : question oui / non, la voix monte sur le mot interrogé (Э́то магази́н ? Он до́ктор ?). ИК-4 : relance avec А (А кто э́то ? А ваш друг ?).", [["Э́то го́род.", "", "ИК-1"], ["Кто э́то? Где он?", "", "ИК-2"], ["Э́то магази́н? Он до́ктор?", "", "ИК-3"], ["А кто э́то? А ваш друг?", "", "ИК-4"]]]]);
const L3X=new Set("мама папа друг брат сын доктор студент дом комната окно город школа банк завод цирк клуб парк страна карта молоко масло сыр сок банан ложка стол карандаш журнал открытка лампа сумка куртка рубашка шапка шарф машина автобус фото кот игра класс группа подруга рассказ урок можно столовая спортзал".split(" "));

// ===== Leçon 4 (début) : pages 31 à 40 =====
WORDS_RAW.push(...[["ме́сто", "place, endroit", "MYÈ-sta", "📍", "Lieux", 4], ["вме́сте", "ensemble", "VMYÈ-styé", "🤝", "Mots utiles", 4], ["мел", "craie", "myèl", "🖍️", "École & mots", 4], ["семь", "sept", "syèm'", "7️⃣", "Nombres", 4], ["во́семь", "huit", "VO-syim'", "8️⃣", "Nombres", 4], ["пять", "cinq", "pyat'", "5️⃣", "Nombres", 4], ["мир", "monde ; paix", "mir", "🌍", "Mots utiles", 4], ["метро́", "métro", "myit-RO", "🚇", "Lieux", 4], ["семья́", "famille", "syim-YA", "👨‍👩‍👧", "Famille & gens", 4], ["пя́тница", "vendredi", "PYAT-nit-sa", "📅", "Temps & météo", 4], ["кабине́т", "bureau (pièce)", "ka-bi-NYÈT", "🗄️", "Lieux", 4], ["фи́зика", "physique (science)", "FI-zi-ka", "⚛️", "École & mots", 4], ["фи́зик", "physicien", "FI-zik", "🧑‍🔬", "Famille & gens", 4], ["биоло́г", "biologiste", "bi-a-LOK", "🧬", "Famille & gens", 4], ["биоло́гия", "biologie", "bi-a-LO-gui-ya", "🧬", "École & mots", 4], ["гео́лог", "géologue", "gui-O-lak", "⛰️", "Famille & gens", 4], ["геоло́гия", "géologie", "gui-a-LO-gui-ya", "🪨", "École & mots", 4], ["хи́мик", "chimiste", "KHI-mik", "🧪", "Famille & gens", 4], ["хи́мия", "chimie", "KHI-mi-ya", "⚗️", "École & mots", 4], ["бизнесме́н", "homme d'affaires", "biz-nis-MYÈN", "💼", "Famille & gens", 4], ["профе́ссор", "professeur (université)", "pra-FYÈ-sar", "👨‍🏫", "Famille & gens", 4], ["цвет", "couleur", "tsvyèt", "🎨", "Objets", 4], ["свет", "lumière", "svyèt", "💡", "Objets", 4], ["обе́д", "déjeuner (repas de midi)", "a-BYÈT", "🍽️", "Nourriture", 4], ["пе́сня", "chanson", "PYÈS-nya", "🎵", "Objets", 4], ["второ́й", "deuxième", "fta-ROÏ", "2️⃣", "Adjectifs", 4], ["пе́рвый", "premier", "PYÈR-vyï", "1️⃣", "Adjectifs", 4], ["весь", "tout (entier)", "vyès'", "🔄", "Mots utiles", 4], ["ко́фе", "café (masculin)", "KO-fyé", "☕", "Nourriture", 4], ["бе́лый", "blanc", "BYÈ-lyï", "⚪", "Adjectifs", 4], ["буфе́т", "buffet, snack", "bou-FYÈT", "🥪", "Lieux", 4], ["конве́рт", "enveloppe", "kan-VYÈRT", "✉️", "Objets", 4], ["филосо́ф", "philosophe", "fi-la-SOF", "🤔", "Famille & gens", 4], ["ви́лка", "fourchette", "VIL-ka", "🍴", "Objets", 4], ["весна́", "printemps", "vyis-NA", "🌸", "Temps & météo", 4], ["весно́й", "au printemps", "vyis-NOÏ", "🌷", "Temps & météo", 4], ["до свида́ния", "au revoir", "da svi-DA-ni-ya", "👋", "Mots utiles", 4], ["извини́", "excuse-moi", "iz-vi-NI", "🙏", "Mots utiles", 4], ["извини́те", "excusez-moi", "iz-vi-NI-tyé", "🙏", "Mots utiles", 4], ["визи́т", "visite", "vi-ZIT", "🚪", "École & mots", 4], ["университе́т", "université", "ou-ni-vyir-si-TYÈT", "🎓", "Lieux", 4], ["ско́ро", "bientôt", "SKO-ra", "⏳", "Mots utiles", 4], ["карто́шка", "pommes de terre", "kar-TOCH-ka", "🥔", "Nourriture", 4], ["мя́со", "viande", "MYA-sa", "🥩", "Nourriture", 4], ["познако́мься", "fais connaissance (je te présente)", "pa-zna-KOM'-sya", "🤝", "Verbes", 4], ["познако́мьтесь", "faites connaissance (je vous présente)", "pa-zna-KOM'-tis'", "🤝", "Verbes", 4], ["меня́", "me, moi (меня зовут : je m'appelle)", "myi-NYA", "🙋", "Possessifs & pronoms", 4], ["тебя́", "te, toi (тебя зовут : tu t'appelles)", "ti-BYA", "🫵", "Possessifs & pronoms", 4], ["нас", "nous (complément)", "nas", "👥", "Possessifs & pronoms", 4], ["вас", "vous (complément)", "vas", "👥", "Possessifs & pronoms", 4], ["зову́т", "(on) appelle", "za-VOUT", "📣", "Verbes", 4], ["рад", "content (homme)", "rat", "😊", "Adjectifs", 4], ["ра́да", "contente (femme)", "RA-da", "😊", "Adjectifs", 4], ["есть", "il y a ; (avoir : у меня есть)", "yèst'", "✅", "Mots utiles", 4], ["ви́за", "visa", "VI-za", "🛂", "Objets", 4], ["кинотеа́тр", "cinéma (salle)", "ki-na-ti-ATR", "🎬", "Lieux", 4], ["кино́", "cinéma, film", "ki-NO", "🎞️", "Lieux", 4], ["рабо́тать", "travailler", "ra-BO-tat'", "💼", "Verbes", 4], ["отдыха́ть", "se reposer", "at-dy-KHAT'", "🛋️", "Verbes", 4], ["де́лать", "faire", "DYÈ-lat'", "🛠️", "Verbes", 4], ["знать", "savoir, connaître", "znat'", "🧠", "Verbes", 4], ["де́ти", "enfants", "DYÈ-ti", "🧒", "Famille & gens", 4], ["друзья́", "amis", "drou-ZYA", "🧑‍🤝‍🧑", "Famille & gens", 4], ["паке́т", "sac (plastique), paquet", "pa-KYÈT", "🛍️", "Objets", 4], ["кио́ск", "kiosque", "ki-OSK", "🏪", "Lieux", 4], ["боти́нки", "bottines, chaussures", "ba-TIN-ki", "🥾", "Objets", 4], ["по-ру́сски", "en russe", "pa-ROUSS-ki", "🇷🇺", "École & mots", 4], ["по-испа́нски", "en espagnol", "pa-is-PAN-ski", "🇪🇸", "École & mots", 4], ["по-францу́зски", "en français", "pa-fran-TSOUS-ki", "🇫🇷", "École & mots", 4], ["по-кита́йски", "en chinois", "pa-ki-TAÏ-ski", "🇨🇳", "École & mots", 4], ["гимн", "hymne", "guimn", "🎶", "Objets", 4], ["гита́ра", "guitare", "gui-TA-ra", "🎸", "Objets", 4], ["ге́ний", "génie", "GUÈ-ni-ï", "💡", "Famille & gens", 4], ["де́ньги", "argent", "DYÈN'-gui", "💶", "Objets", 4], ["гимна́зия", "lycée, gymnase", "guim-NA-zi-ya", "🏫", "Lieux", 4], ["сти́хи", "poèmes, vers", "STI-khi", "📜", "École & mots", 4], ["пить", "boire", "pit'", "🥤", "Verbes", 4], ["пи́во", "bière", "PI-va", "🍺", "Nourriture", 4], ["петь", "chanter", "pyèt'", "🎤", "Verbes", 4], ["опя́ть", "encore, de nouveau", "a-PYAT'", "🔁", "Mots utiles", 4], ["проспе́кт", "avenue", "pras-PYÈKT", "🛣️", "Lieux", 4], ["бюро́", "bureau (service)", "biou-RO", "🏢", "Lieux", 4], ["фе́рма", "ferme", "FYÈR-ma", "🚜", "Lieux", 4], ["фе́рмер", "fermier", "FYÈR-myir", "👨‍🌾", "Famille & gens", 4], ["о́фис", "bureau (entreprise)", "O-fis", "🏢", "Lieux", 4], ["фи́рма", "entreprise", "FIR-ma", "🏢", "Lieux", 4], ["сайт", "site web", "sait", "🌐", "Objets", 4]]);
SENT_RAW.push(...[["Как вас зову́т?", "Comment vous appelez-vous ?", 4], ["Меня́ зову́т Анто́н.", "Je m'appelle Anton.", 4], ["Как тебя́ зову́т?", "Comment t'appelles-tu ?", 4], ["Меня́ зову́т Са́ша.", "Je m'appelle Sacha.", 4], ["Тебя́ зову́т Ива́н?", "Tu t'appelles Ivan ?", 4], ["Меня́ зову́т Том. А вас?", "Je m'appelle Tom. Et vous ?", 4], ["Меня́ зову́т Ве́ра.", "Je m'appelle Vera.", 4], ["Меня́ зову́т Пётр.", "Je m'appelle Piotr.", 4], ["Меня́ зову́т Ни́на.", "Je m'appelle Nina.", 4], ["Тебя́ зову́т Ве́ра.", "Tu t'appelles Vera.", 4], ["Его́ зову́т Пётр.", "Il s'appelle Piotr.", 4], ["Её зову́т А́нна.", "Elle s'appelle Anna.", 4], ["Нас зову́т Ни́на и Анто́н.", "Nous nous appelons Nina et Anton.", 4], ["Вас зову́т Татья́на Петро́вна.", "Vous vous appelez Tatiana Petrovna.", 4], ["Их зову́т Ви́ктор и Ива́н.", "Ils s'appellent Viktor et Ivan.", 4], ["Как его́ зову́т?", "Comment s'appelle-t-il ?", 4], ["Как её зову́т?", "Comment s'appelle-t-elle ?", 4], ["Как их зову́т?", "Comment s'appellent-ils ?", 4], ["Его́ зову́т Ви́ктор.", "Il s'appelle Viktor.", 4], ["Её зову́т Ни́на.", "Elle s'appelle Nina.", 4], ["Их зову́т Анто́н и Ни́на.", "Ils s'appellent Anton et Nina.", 4], ["Рад познако́миться.", "Enchanté (homme).", 4], ["Ра́да познако́миться.", "Enchantée (femme).", 4], ["Познако́мьтесь!", "Faites connaissance ! (Je vous présente !)", 4], ["Ма́ма, познако́мься, э́то мой друг.", "Maman, fais connaissance : c'est mon ami.", 4], ["Здра́вствуйте! Меня́ зову́т Том. А вас?", "Bonjour ! Je m'appelle Tom. Et vous ?", 4], ["Э́то наш но́вый студе́нт. Его́ зову́т Том. Он гео́лог.", "C'est notre nouvel étudiant. Il s'appelle Tom. Il est géologue.", 4], ["Э́то наш студе́нт Пётр. Он биоло́г.", "C'est notre étudiant Piotr. Il est biologiste.", 4], ["Э́то наш друг Ива́н. Он бизнесме́н.", "C'est notre ami Ivan. Il est homme d'affaires.", 4], ["Ве́ра, э́то Ви́ктор.", "Vera, voici Viktor.", 4], ["У меня́ есть журна́л.", "J'ai un magazine.", 4], ["У тебя́ есть карандаш'.", "Tu as un crayon.", 4], ["У него́ есть маши́на.", "Il a une voiture.", 4], ["У неё есть брат.", "Elle a un frère.", 4], ["У нас есть ка́рта.", "Nous avons une carte.", 4], ["У вас есть ви́за.", "Vous avez un visa.", 4], ["У них есть семья́.", "Ils ont une famille.", 4], ["У вас есть журна́л?", "Vous avez un magazine ?", 4], ["Да, есть.", "Oui, j'en ai.", 4], ["Есть.", "Oui, il y en a.", 4], ["Да́йте, пожа́луйста.", "Donnez-moi, s'il vous plaît.", 4], ["Дай, пожа́луйста!", "Donne-moi, s'il te plaît !", 4], ["Пожа́луйста.", "Voilà (je vous en prie).", 4], ["Спаси́бо.", "Merci.", 4], ["У вас есть газе́та «Дру́жба»?", "Vous avez le journal « Droujba » ?", 4], ["У вас есть ко́фе «Грант»?", "Vous avez du café « Grant » ?", 4], ["А́нна, у тебя́ есть карандаш'?", "Anna, tu as un crayon ?", 4], ["У вас есть карандаш'?", "Vous avez un crayon ?", 4], ["У неё есть семья́?", "Elle a une famille ?", 4], ["У них есть де́ти?", "Ils ont des enfants ?", 4], ["Э́то твои́ дя́дя и тётя?", "Ce sont ton oncle et ta tante ?", 4], ["Да, мои́.", "Oui, ce sont les miens.", 4], ["Э́то ваш друг?", "C'est votre ami ?", 4], ["Э́то ваш брат?", "C'est votre frère ?", 4], ["У него́ есть маши́на?", "Il a une voiture ?", 4], ["Ма́ма, у тебя́ есть де́ньги? Дай, пожа́луйста!", "Maman, tu as de l'argent ? Donne-moi, s'il te plaît !", 4], ["Кла́ра, у вас есть гита́ра? Да́йте, пожа́луйста!", "Klara, vous avez une guitare ? Donnez-moi, s'il vous plaît !", 4], ["Скажи́те, пожа́луйста, где ва́ша ви́за?", "Dites-moi, s'il vous plaît, où est votre visa ?", 4], ["Вот она́.", "La voici.", 4], ["Вот моя́ ви́за.", "Voici mon visa.", 4], ["Скажи́те, где кинотеа́тр «Ви́тязь»?", "Dites-moi, où est le cinéma « Vitiaz » ?", 4], ["Вот он.", "Le voici.", 4], ["А кинотеа́тр «Гава́на»?", "Et le cinéma « La Havane » ?", 4], ["Извини́те, я не зна́ю.", "Excusez-moi, je ne sais pas.", 4], ["Вы зна́ете, кто э́то?", "Vous savez qui c'est ?", 4], ["Да, зна́ю. Э́то наш до́ктор.", "Oui, je sais. C'est notre docteur.", 4], ["Нет, не зна́ю.", "Non, je ne sais pas.", 4], ["Что вы де́лаете?", "Que faites-vous ?", 4], ["Я рабо́таю.", "Je travaille.", 4], ["Я инжене́р. Вот наш заво́д.", "Je suis ingénieur. Voici notre usine.", 4], ["Здесь я рабо́таю.", "Ici, je travaille.", 4], ["Мой друг то́же рабо́тает здесь.", "Mon ami travaille aussi ici.", 4], ["Его́ зову́т Пётр. Он то́же инжене́р.", "Il s'appelle Piotr. Il est aussi ingénieur.", 4], ["Мы рабо́таем вме́сте.", "Nous travaillons ensemble.", 4], ["Вот наш дом. А спра́ва парк.", "Voici notre maison. Et à droite, il y a un parc.", 4], ["Там я отдыха́ю.", "Là-bas, je me repose.", 4], ["Моя́ семья́ то́же отдыха́ет там.", "Ma famille se repose aussi là-bas.", 4], ["Мы отдыха́ем вме́сте.", "Nous nous reposons ensemble.", 4], ["Вот моя́ семья́: мой оте́ц, моя́ мать, мой брат, моя́ сестра́ и я.", "Voici ma famille : mon père, ma mère, mon frère, ma sœur et moi.", 4], ["Вот фо́то: тут я.", "Voici une photo : ici, c'est moi.", 4], ["А э́то моя́ подру́га Ми́ла.", "Et voici mon amie Mila.", 4], ["Там мы вме́сте, я и Ми́ла.", "Là-bas, nous sommes ensemble, Mila et moi.", 4], ["Когда́ у нас обе́д?", "Quand est-ce qu'on déjeune ?", 4], ["Ско́ро.", "Bientôt.", 4], ["Что у нас на обе́д?", "Qu'est-ce qu'on a pour le déjeuner ?", 4], ["Суп, мя́со и карто́шка, сок и фру́кты.", "De la soupe, de la viande et des pommes de terre, du jus et des fruits.", 4], ["А ко́фе?", "Et le café ?", 4], ["Ко́фе пото́м.", "Le café, plus tard.", 4], ["Я студе́нт. Меня́ зову́т Том.", "Je suis étudiant. Je m'appelle Tom.", 4], ["Э́то мой друг. Его́ зову́т Сами́р.", "Voici mon ami. Il s'appelle Samir.", 4], ["Здесь на́ша студе́нтка. Её зову́т Мари́я.", "Voici notre étudiante. Elle s'appelle Maria.", 4], ["А там мои́ друзья́. Их зову́т Джон, Ви́ктор и Луи́с.", "Et là-bas, mes amis. Ils s'appellent John, Viktor et Luis.", 4], ["Ве́ра, кто э́то?", "Vera, qui est-ce ?", 4], ["Э́мма, кто э́то?", "Emma, qui est-ce ?", 4], ["Э́то мой друг и моя́ сестра́.", "Ce sont mon ami et ma sœur.", 4], ["Кто он?", "Qui est-il ?", 4], ["Он хи́мик.", "Il est chimiste.", 4]]);
DIALOGS.push(...[["Faire connaissance", 4, [["— Здра́вствуйте! Меня́ зову́т Том. А вас?", "— Bonjour ! Je m'appelle Tom. Et vous ?"], ["— Меня́ зову́т Ве́ра.", "— Je m'appelle Vera."], ["— Рад познако́миться.", "— Enchanté."], ["— Я то́же.", "— Moi aussi."]]], ["Tu t'appelles Ivan ?", 4, [["— Тебя́ зову́т Ива́н?", "— Tu t'appelles Ivan ?"], ["— Нет.", "— Non."], ["— А как тебя́ зову́т?", "— Et comment t'appelles-tu ?"], ["— Меня́ зову́т Са́ша.", "— Je m'appelle Sacha."]]], ["Maman, je te présente un ami", 4, [["— Ма́ма, познако́мься, э́то мой друг. Его́ зову́т Ви́ктор.", "— Maman, fais connaissance : c'est mon ami. Il s'appelle Viktor."], ["— Ра́да познако́миться, Татья́на Петро́вна.", "— Enchantée, Tatiana Petrovna."]]], ["Qui est-ce ? Comment il s'appelle ? (1)", 4, [["— Ве́ра, кто э́то?", "— Vera, qui est-ce ?"], ["— Э́то мой брат.", "— C'est mon frère."], ["— Как его́ зову́т?", "— Comment s'appelle-t-il ?"], ["— Его́ зову́т Ви́ктор.", "— Il s'appelle Viktor."]]], ["Qui est-ce ? Comment elle s'appelle ? (2)", 4, [["— Э́мма, кто э́то?", "— Emma, qui est-ce ?"], ["— Э́то моя́ подру́га.", "— C'est mon amie."], ["— Как её зову́т?", "— Comment s'appelle-t-elle ?"], ["— Её зову́т Ни́на.", "— Elle s'appelle Nina."]]], ["Qui est-ce ? Comment ils s'appellent ? (3)", 4, [["— И́ра, кто э́то?", "— Ira, qui est-ce ?"], ["— Э́то мой друг и моя́ сестра́.", "— Ce sont mon ami et ma sœur."], ["— Как их зову́т?", "— Comment s'appellent-ils ?"], ["— Их зову́т Анто́н и Ни́на.", "— Ils s'appellent Anton et Nina."]]], ["Ton ami, comment il s'appelle ?", 4, [["— Э́то ваш друг?", "— C'est votre ami ?"], ["— Да.", "— Oui."], ["— Как его́ зову́т?", "— Comment s'appelle-t-il ?"]]], ["As-tu un crayon ?", 4, [["— А́нна, у тебя́ есть карандаш'?", "— Anna, tu as un crayon ?"], ["— Да, есть. (У меня́ есть карандаш'.)", "— Oui. (J'ai un crayon.)"], ["— Дай, пожа́луйста!", "— Donne-moi, s'il te plaît !"], ["— Пожа́луйста.", "— Voilà."], ["— Спаси́бо.", "— Merci."]]], ["Un magazine", 4, [["— Ви́ктор, у вас есть журна́л «Москва́»?", "— Viktor, vous avez le magazine « Moscou » ?"], ["— Да, есть. (У меня́ есть журна́л.)", "— Oui. (J'ai un magazine.)"], ["— Да́йте, пожа́луйста.", "— Donnez-moi, s'il vous plaît."], ["— Пожа́луйста.", "— Voilà."], ["— Спаси́бо.", "— Merci."]]], ["Le journal « Droujba »", 4, [["— У вас есть газе́та «Дру́жба»?", "— Vous avez le journal « Droujba » ?"], ["— Да, есть.", "— Oui, il y en a."], ["— Да́йте, пожа́луйста.", "— Donnez-moi, s'il vous plaît."]]], ["Du café « Grant »", 4, [["— У вас есть ко́фе «Грант»?", "— Vous avez du café « Grant » ?"], ["— Есть.", "— Oui, il y en a."], ["— Да́йте, пожа́луйста.", "— Donnez-moi, s'il vous plaît."]]], ["Ta sœur a une famille ?", 4, [["— Э́то твоя́ сестра́?", "— C'est ta sœur ?"], ["— Да.", "— Oui."], ["— У неё есть семья́?", "— Elle a une famille ?"], ["— Да, есть.", "— Oui."]]], ["Ton oncle et ta tante", 4, [["— Э́то твои́ дя́дя и тётя?", "— Ce sont ton oncle et ta tante ?"], ["— Да, мои́.", "— Oui, ce sont eux."], ["— У них есть де́ти?", "— Ils ont des enfants ?"], ["— Да, есть.", "— Oui."]]], ["Ton frère a une voiture ?", 4, [["— Э́то ваш брат?", "— C'est votre frère ?"], ["— Да, брат.", "— Oui, c'est mon frère."], ["— У него́ есть маши́на?", "— Il a une voiture ?"], ["— Нет.", "— Non."]]], ["Où est ton visa ?", 4, [["— Скажи́те, пожа́луйста, где ва́ша ви́за?", "— Dites-moi, s'il vous plaît, où est votre visa ?"], ["— Вот она́. (Вот моя́ ви́за.)", "— La voici. (Voici mon visa.)"]]], ["Où est le cinéma ?", 4, [["— Скажи́те, где кинотеа́тр «Ви́тязь»?", "— Dites-moi, où est le cinéma « Vitiaz » ?"], ["— Вот он.", "— Le voici."], ["— А кинотеа́тр «Гава́на»?", "— Et le cinéma « La Havane » ?"], ["— Извини́те, я не зна́ю.", "— Excusez-moi, je ne sais pas."]]], ["Vous savez qui c'est ?", 4, [["— Вы зна́ете, кто э́то?", "— Vous savez qui c'est ?"], ["— Да, зна́ю. Э́то наш до́ктор.", "— Oui, je sais. C'est notre docteur."], ["— Нет, не зна́ю.", "— Non, je ne sais pas."]]], ["Que faites-vous ?", 4, [["— Что вы де́лаете?", "— Que faites-vous ?"], ["— Я рабо́таю.", "— Je travaille."]]], ["Qui est-il ?", 4, [["— Кто он?", "— Qui est-il ?"], ["— Он хи́мик.", "— Il est chimiste."]]], ["Le déjeuner", 4, [["— Когда́ у нас обе́д?", "— Quand est-ce qu'on déjeune ?"], ["— Ско́ро.", "— Bientôt."], ["— Что у нас на обе́д?", "— Qu'est-ce qu'on a pour le déjeuner ?"], ["— Суп, мя́со и карто́шка, сок и фру́кты.", "— De la soupe, de la viande et des pommes de terre, du jus et des fruits."], ["— А ко́фе?", "— Et le café ?"], ["— Ко́фе пото́м.", "— Le café, plus tard."]]]]);
RULES.push(...[["Consonnes douces : м', н', б', ф', в'", 4, "Devant я, ё, ю, е, и ou le signe mou ь, une consonne devient douce (mouillée) : la langue se plaque vers le palais, comme un petit « i » après la consonne. Compare chaque paire : МА – МЯ, МО – МЁ, МУ – МЮ, МЭ – МЕ, МЫ – МИ, АМ – АМЬ. Sur papier, мя se lit [м'а]. Cela marche pour м, н, б, п, ф, в.", [["ма — мя", "ma — m'a", "(dur — doux)"], ["мо — мё", "mo — m'o", "(dur — doux)"], ["му — мю", "mou — m'ou", "(dur — doux)"], ["мэ — ме", "mè — m'è", "(dur — doux)"], ["мы — ми", "my — m'i", "(dur — doux)"], ["ам — амь", "am — am'", "(dur — doux)"], ["мир", "m'ir", "monde ; paix"], ["мя́со", "M'A-sa", "viande"], ["семья́", "sim'-YA", "famille"]]], ["Ь et я : la prononciation de семья", 4, "Dans семья, on lit [с'им'йа] : с et м sont doux, ь et я donnent [йа]. Un ь entre une consonne et я, ю, е, ё, и se lit comme un petit « й ». Autres exemples : ме́сто, ве́сна, пя́тница.", [["семья́", "sim'-YA", "[с'им'йа] famille"], ["пя́тница", "PYAT-nit-sa", "vendredi"], ["весна́", "vyis-NA", "printemps"], ["ме́сто", "MYÈ-sta", "place"]]], ["К, Г, Х devant е, и : doux", 4, "Comme м et н, к, г, х deviennent doux devant е ou и : ки [к'и], ги [г'и], хи [х'и]. On ne prononce pas « ki » dur. Dans les mots étrangers, sur papier on voit souvent ки, ги, хи.", [["кино́", "ki-NO", "cinéma"], ["кио́ск", "ki-OSK", "kiosque"], ["гита́ра", "gui-TA-ra", "guitare"], ["ге́ний", "GUÈ-ni-ï", "génie"], ["хи́мия", "KHI-mi-ya", "chimie"], ["сти́хи", "STI-khi", "poèmes"]]], ["-ться se prononce [ца]", 4, "Les terminaisons -ться et -тся des verbes se prononcent [ца]. Познакомиться se dit [пазнаком'ица]. En russe, on écrit comme avant mais on prononce autrement.", [["познако́миться", "pa-zna-KOM'-i-tsa", "faire connaissance"], ["Рад познако́миться.", "rat pa-zna-KOM'-i-tsa", "Enchanté."]]], ["Se présenter : Меня́ зову́т…", 4, "Pour dire son nom, le russe dit « on m'appelle » : Меня́ зову́т Анто́н. Pour demander : Как вас зову́т ? (vous) ou Как тебя́ зову́т ? (tu). Le pronom change de forme : я → меня, ты → тебя, он → его, она → её, мы → нас, вы → вас, они → их. Tu n'as pas à décliner : apprends chaque forme avec зову́т.", [["Как вас зову́т?", "kak vas za-VOUT", "Comment vous appelez-vous ?"], ["Меня́ зову́т Анто́н.", "myi-NYA za-VOUT an-TON", "Je m'appelle Anton."], ["Как тебя́ зову́т?", "kak ti-BYA za-VOUT", "Comment t'appelles-tu ?"], ["Тебя́ зову́т Ве́ра.", "ti-BYA za-VOUT VYÈ-ra", "Tu t'appelles Vera."], ["Его́ зову́т Пётр.", "yi-VO za-VOUT pyotr", "Il s'appelle Piotr."], ["Её зову́т А́нна.", "yi-YO za-VOUT AN-na", "Elle s'appelle Anna."], ["Нас зову́т Ни́на и Анто́н.", "nas za-VOUT NI-na i an-TON", "Nous nous appelons Nina et Anton."], ["Вас зову́т Татья́на Петро́вна.", "vas za-VOUT", "Vous vous appelez Tatiana Petrovna."], ["Их зову́т Ви́ктор и Ива́н.", "ikh za-VOUT", "Ils s'appellent Viktor et Ivan."]]], ["Tableau : я – меня, ты – тебя…", 4, "Singulier : я – меня, ты – тебя, он – его, она – её. Pluriel : мы – нас, вы – вас, они – их. Après зову́т, c'est toujours la deuxième forme. Attention : его, её, их s'écrivent pareil que dans Э́то его́ маши́на (possessif), mais ici ils sont compléments.", [["я — меня́", "ya — myi-NYA", "je — me"], ["ты — тебя́", "ty — ti-BYA", "tu — te"], ["он — его́", "on — yi-VO", "il — le"], ["она́ — её", "a-NA — yi-YO", "elle — la"], ["мы — нас", "my — nas", "nous — nous"], ["вы — вас", "vy — vas", "vous — vous"], ["они́ — их", "a-NI — ikh", "ils — les"]]], ["Avoir : У меня́ есть…", 4, "Le russe n'a pas de verbe « avoir » au présent. On dit « chez moi il y a » : У меня́ есть журна́л = « chez moi il y a un magazine » = J'ai un magazine. Sur papier : у + pronom + есть + objet. Réponse : Да, есть. = Oui, j'en ai. Нет = Non. Pour répondre en entier : У меня́ есть… Pour la négation, on dira Нет, у меня́ нет… (plus tard).", [["У меня́ есть журна́л.", "ou myi-NYA yèst' jour-NAL", "J'ai un magazine."], ["У тебя́ есть карандаш'.", "ou ti-BYA yèst' ka-ran-DACH", "Tu as un crayon."], ["У него́ есть маши́на.", "ou nyi-VO yèst' ma-CHI-na", "Il a une voiture."], ["У неё есть брат.", "ou nyi-YO yèst' brat", "Elle a un frère."], ["У нас есть ка́рта.", "ou nas yèst' KAR-ta", "Nous avons une carte."], ["У вас есть ви́за.", "ou vas yèst' VI-za", "Vous avez un visa."], ["У них есть семья́.", "ou nikh yèst' sim'-YA", "Ils ont une famille."]]], ["Après у : его, её, их deviennent него, неё, них", 4, "Après la préposition у (chez), on ajoute un н devant его, её, их : у него́, у неё, у них. Les autres pronoms changent : у меня́, у тебя́, у нас, у вас. Apprends les sept formes par cœur.", [["я — у меня́", "ya — ou myi-NYA", "moi — chez moi"], ["ты — у тебя́", "ty — ou ti-BYA", "toi — chez toi"], ["он — у него́", "on — ou nyi-VO", "il — chez lui"], ["она́ — у неё", "a-NA — ou nyi-YO", "elle — chez elle"], ["мы — у нас", "my — ou nas", "nous — chez nous"], ["вы — у вас", "vy — ou vas", "vous — chez vous"], ["они́ — у них", "a-NI — ou nikh", "ils — chez eux"]]], ["Demander poliment : Да́йте, пожа́луйста", 4, "Дай = donne (tu). Да́йте = donnez (vous, ou plusieurs personnes). Même idée : Скажи́те, пожа́луйста = dites-moi, s'il vous plaît ; Извини́ / Извини́те ; Познако́мься / Познако́мьтесь. Le -те ajoute la politesse ou le pluriel.", [["Дай, пожа́луйста!", "daï pa-JA-lou-sta", "Donne-moi, s'il te plaît !"], ["Да́йте, пожа́луйста!", "DAÏ-tyé pa-JA-lou-sta", "Donnez-moi, s'il vous plaît !"], ["Извини́", "iz-vi-NI", "Excuse-moi"], ["Извини́те", "iz-vi-NI-tyé", "Excusez-moi"], ["Познако́мься", "pa-zna-KOM'-sya", "Fais connaissance"], ["Познако́мьтесь", "pa-zna-KOM'-tis'", "Faites connaissance"]]], ["Рад, ра́да : être content(e)", 4, "Рад (homme) et ра́да (femme) se disent quand on rencontre quelqu'un : Рад познако́миться. = Enchanté (c'est un homme qui parle). Ра́да познако́миться. = Enchantée (c'est une femme qui parle). La réponse : Я то́же. = Moi aussi.", [["Рад познако́миться.", "rat pa-zna-KOM'-i-tsa", "Enchanté (homme)."], ["Ра́да познако́миться.", "RA-da pa-zna-KOM'-i-tsa", "Enchantée (femme)."], ["Я то́же.", "ya TO-jé", "Moi aussi."]]], ["Вот он, вот она́, вот оно́", 4, "Вот = voici. Avec он / она / оно, on montre quelque chose qu'on cherche : Вот он. = Le voici (masc.). Вот она́. = La voici (fém.). Quand on demande Где ва́ша ви́за ? (visa : féminin), on répond Вот она́. Pour un cinéma (кинотеа́тр, masculin) : Вот он.", [["Вот он.", "vot on", "Le voici."], ["Вот она́.", "vot a-NA", "La voici."], ["Вот моя́ ви́за.", "vot ma-YA VI-za", "Voici mon visa."]]], ["Les langues : по-ру́сски", 4, "Pour dire « en russe, en français… », on utilise по- + un mot en -и : по-ру́сски, по-францу́зски, по-испа́нски, по-кита́йски. Le mot s'écrit avec un trait d'union et ne change plus. Prononciation : по-ру́сски se dit [парусск'и].", [["по-ру́сски", "pa-ROUSS-ki", "en russe"], ["по-францу́зски", "pa-fran-TSOUS-ki", "en français"], ["по-испа́нски", "pa-is-PAN-ski", "en espagnol"], ["по-кита́йски", "pa-ki-TAÏ-ski", "en chinois"]]], ["Les verbes en -ать : conjugaison de рабо́тать", 4, "Les verbes en -ать (рабо́тать, отдыха́ть, де́лать, зна́ть) se conjuguent avec les mêmes terminaisons : я -ю, ты -ешь, он/она́ -ет, мы -ем, вы -ете, они́ -ют. Pour l'ordre (impératif) : on ajoute -й (tu) ou -йте (vous). Le radical garde la même forme : рабо́та- → рабо́таю, рабо́таешь… L'accent reste toujours sur la même syllabe. Ici : travailler.", [["я рабо́таю", "ya ra-BO-ta-you", "je travaille"], ["ты рабо́таешь", "ty ra-BO-ta-yèch", "tu travailles"], ["он / она́ рабо́тает", "on / a-NA ra-BO-ta-yit", "il / elle travaille"], ["мы рабо́таем", "my ra-BO-ta-yim", "nous travaillons"], ["вы рабо́таете", "vy ra-BO-ta-yi-tyé", "vous travaillez"], ["они́ рабо́тают", "a-NI ra-BO-ta-you-t", "ils travaillent"], ["рабо́тай(те)!", "ra-BO-taï(-tyé)", "travaille ! / travaillez !"]]], ["Conjugaison de отдыха́ть (se reposer)", 4, "Même modèle : les terminaisons restent -ю, -ешь, -ет, -ем, -ете, -ют. Accent sur а du radical : отдыха́ю, отдыха́ешь…", [["я отдыха́ю", "ya at-dy-KHA-you", "je me repose"], ["ты отдыха́ешь", "ty at-dy-KHA-yèch", "tu te reposes"], ["он / она́ отдыха́ет", "on / a-NA at-dy-KHA-yit", "il / elle se repose"], ["мы отдыха́ем", "my at-dy-KHA-yim", "nous nous reposons"], ["вы отдыха́ете", "vy at-dy-KHA-yi-tyé", "vous vous reposez"], ["они́ отдыха́ют", "a-NI at-dy-KHA-you-t", "ils se reposent"], ["отдыха́й(те)!", "at-dy-KHAÏ(-tyé)", "repose-toi ! / reposez-vous !"]]], ["Conjugaison de де́лать (faire)", 4, "Même modèle encore. Accent sur е du radical : де́лаю, де́лаешь… Phrase utile : Что вы де́лаете ? — Я рабо́таю.", [["я де́лаю", "ya DYÈ-la-you", "je fais"], ["ты де́лаешь", "ty DYÈ-la-yèch", "tu fais"], ["он / она́ де́лает", "on / a-NA DYÈ-la-yit", "il / elle fait"], ["мы де́лаем", "my DYÈ-la-yim", "nous faisons"], ["вы де́лаете", "vy DYÈ-la-yi-tyé", "vous faites"], ["они́ де́лают", "a-NI DYÈ-la-you-t", "ils font"], ["де́лай(те)!", "DYÈ-laï(-tyé)", "fais ! / faites !"]]], ["Conjugaison de знать (savoir, connaître)", 4, "Même modèle. Accent sur а du radical : зна́ю, зна́ешь… Dans знать, on garde la racine зна-. Phrase utile : Вы зна́ете, кто э́то ? — Да, зна́ю. / Нет, не зна́ю.", [["я зна́ю", "ya ZNA-you", "je sais"], ["ты зна́ешь", "ty ZNA-yèch", "tu sais"], ["он / она́ зна́ет", "on / a-NA ZNA-yit", "il / elle sait"], ["мы зна́ем", "my ZNA-yim", "nous savons"], ["вы зна́ете", "vy ZNA-yi-tyé", "vous savez"], ["они́ зна́ют", "a-NI ZNA-you-t", "ils savent"], ["зна́й(те)!", "znaï(-tyé)", "sache ! / sachez !"]]], ["Dire ce qu'on fait : Что вы де́лаете ?", 4, "Question : Что вы де́лаете ? (Que faites-vous ?). Réponse : Я рабо́таю. / Я отдыха́ю. Pour dire où, on ajoute здесь (ici) ou там (là-bas) et вме́сте (ensemble) : Здесь я рабо́таю. Мы рабо́таем вме́сте.", [["Что вы де́лаете?", "chto vy DYÈ-la-yi-tyé", "Que faites-vous ?"], ["Я рабо́таю.", "ya ra-BO-ta-you", "Je travaille."], ["Здесь я рабо́таю.", "zdyès' ya ra-BO-ta-you", "Ici, je travaille."], ["Мы отдыха́ем вме́сте.", "my at-dy-KHA-yim VMYÈ-styé", "Nous nous reposons ensemble."]]]]);
Object.assign(MN,{"университет": "Comme « université » : même mot.", "метро": "Comme « métro » (neutre en russe : оно).", "кино": "Comme « ciné » (neutre en russe : оно).", "кофе": "Comme « café ». Attention : masculin en russe (мой кофе).", "гитара": "Comme « guitare ».", "физика": "Comme « physique ».", "химия": "Comme « chimie ».", "биология": "Comme « biologie ».", "геология": "Comme « géologie ».", "бизнесмен": "Comme « businessman » : homme d'affaires.", "профессор": "Comme « professeur ».", "визит": "Comme « visite ».", "виза": "Comme « visa ».", "кабинет": "Comme « cabinet » : une pièce de travail.", "буфет": "Comme « buffet ».", "пакет": "Comme « paquet ».", "ферма": "Comme « ferme ».", "фермер": "Comme « fermier ».", "философ": "Comme « philosophe ».", "гений": "Comme « génie ».", "гимн": "Comme « hymne ».", "зовут": "Vient de звать (appeler). Меня зовут = on m'appelle = je m'appelle.", "мир": "Deux sens : « monde » et « paix ». Comme la station spatiale Mir.", "пять": "Cinq doigts : пять. Ne confonds pas avec пить (boire).", "пить": "Ne confonds pas avec пять (cinq).", "есть": "Sens 1 : il y a, avoir (у меня есть). Sens 2 : manger (ем, ешь…), voir leçon 3.", "друзья": "Pluriel irrégulier de друг (ami).", "дети": "Toujours au pluriel (enfants).", "деньги": "Toujours au pluriel (argent)."});
["университет", "метро", "кино", "кофе", "физика", "физик", "биология", "биолог", "геология", "геолог", "химия", "химик", "бизнесмен", "профессор", "визит", "виза", "гитара", "гимн", "гений", "кабинет", "буфет", "пакет", "кинотеатр", "киоск", "фирма", "ферма", "фермер", "философ", "офис", "сайт", "бюро", "проспект", "гимназия"].forEach(k=>TRANSP.add(k));

const CONJ=[{"inf": "рабо́тать", "fr": "travailler", "f": ["рабо́таю", "рабо́таешь", "рабо́тает", "рабо́таем", "рабо́таете", "рабо́тают"], "frf": ["je travaille", "tu travailles", "il / elle travaille", "nous travaillons", "vous travaillez", "ils travaillent"], "imp": "рабо́тай", "impp": "рабо́тайте"}, {"inf": "отдыха́ть", "fr": "se reposer", "f": ["отдыха́ю", "отдыха́ешь", "отдыха́ет", "отдыха́ем", "отдыха́ете", "отдыха́ют"], "frf": ["je me repose", "tu te reposes", "il / elle se repose", "nous nous reposons", "vous vous reposez", "ils se reposent"], "imp": "отдыха́й", "impp": "отдыха́йте"}, {"inf": "де́лать", "fr": "faire", "f": ["де́лаю", "де́лаешь", "де́лает", "де́лаем", "де́лаете", "де́лают"], "frf": ["je fais", "tu fais", "il / elle fait", "nous faisons", "vous faites", "ils font"], "imp": "де́лай", "impp": "де́лайте"}, {"inf": "знать", "fr": "savoir, connaître", "f": ["зна́ю", "зна́ешь", "зна́ет", "зна́ем", "зна́ете", "зна́ют"], "frf": ["je sais", "tu sais", "il / elle sait", "nous savons", "vous savez", "ils savent"], "imp": "зна́й", "impp": "зна́йте"}];
const CONJF=[["Что вы ___?", 2, 4, "Que faites-vous ?"], ["Что ты ___?", 2, 1, "Que fais-tu ?"], ["Я ___.", 0, 0, "Je travaille."], ["Здесь я ___.", 0, 0, "Ici, je travaille."], ["Мой друг то́же ___ здесь.", 0, 2, "Mon ami travaille aussi ici."], ["Мы ___ вме́сте.", 0, 3, "Nous travaillons ensemble."], ["Там я ___.", 1, 0, "Là-bas, je me repose."], ["Моя́ семья́ то́же ___ там.", 1, 2, "Ma famille se repose aussi là-bas."], ["Мы ___ вме́сте.", 1, 3, "Nous nous reposons ensemble."], ["Вы ___, кто э́то?", 3, 4, "Vous savez qui c'est ?"], ["Ты ___, кто э́то?", 3, 1, "Tu sais qui c'est ?"], ["Да, я ___.", 3, 0, "Oui, je sais."], ["Нет, я не ___.", 3, 0, "Non, je ne sais pas."], ["Извини́те, я не ___.", 3, 0, "Excusez-moi, je ne sais pas."]];

TIPS.push("Pour la leçon 3, étudie en deux sessions courtes : le matin les mots nouveaux, le soir l’écriture et la dictée.","Les possessifs (мой, твой, наш, ваш) se choisissent avec le genre du nom, pas avec celui de la personne.","Quand tu dis un mot, imagine la photo. Quand tu vois la photo, dis le mot à voix haute.");

/* ===== APPLICATION : noyau, état, audio, exercices ===== */
const DAY=864e5;
const $=(s,r)=>(r||document).querySelector(s);
const $$=(s,r)=>[...(r||document).querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const strip=s=>s.replace(/́/g,'');
const norm=s=>strip(s).toLowerCase().replace(/ё/g,'е').replace(/[«»"“”.,!?;:\s—-]/g,'');
const ru=s=>esc(s).replace(/(.)́/gu,'<span class="st">$1</span>');
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=a=>a[Math.random()*a.length|0];
const IMG=new Proxy({},{get:(t,k)=>(window.IMGD||t)[k]});

const ICO={
sp:'<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
fire:'<path d="M12 3c1 3 4 5 4 9a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 0-8z"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
x:'<path d="M6 6l12 12M18 6 6 18"/>',
home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
ear:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/>',
pairs:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
wave:'<path d="M2 12c3-8 5-8 8 0s5 8 8 0 2-4 4-4"/>',
img:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
layers:'<path d="M12 2 2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
blocks:'<rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="8.5" y="3" width="7" height="7" rx="1"/>'
};
const ico=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[n]}</svg>`;
const spk=(t,slow)=>slow?`<button class="spk" style="width:auto;padding:0 13px;border-radius:20px;font-size:13px;font-weight:800" data-say="${esc(t)}" data-slow="1" aria-label="Écouter lentement">Lent</button>`:`<button class="spk" data-say="${esc(t)}" aria-label="Écouter">${ico('sp')}</button>`;

/* ----- mots ----- */
const NN=new Set(['он','она','оно','да','и','что','кто','как','когда','тогда','потом','тут','там','дома','много','плохо','хорошо','трудно','можно','тоже','это','так','вот','два','сто','холодно','долго','утром','завтра','сегодня','тепло','скоро','весной','опять']);
const NOUNC=new Set(['Famille & gens','Lieux','Nourriture','Objets','École & mots','Temps & météo']);
const EXC={'папа':'он','дядя':'он','мать':'она','тетрадь':'она','кофе':'он','метро':'оно','кино':'оно','бюро':'оно'};
const PLN=new Set(['фрукты','шахматы','дети','друзья','деньги','стихи','ботинки']);
function gen(k,cat){if(NN.has(k)||!NOUNC.has(cat))return null;if(PLN.has(k))return 'pl';if(EXC[k])return EXC[k];const l=k.slice(-1);if(l==='а'||l==='я')return 'она';if(l==='о'||l==='е')return 'оно';return 'он'}
const W=WORDS_RAW.map((r,i)=>{const pk=strip(r[0]);const k=pk.toLowerCase();return{ru:r[0],pk,k,fr:r[1],pr:r[2],em:r[3],cat:r[4],L:r[5],i,mn:MN[k]||'',tr:TRANSP.has(k),g:gen(k,r[4])}});
W.forEach(w=>{w.Ls=[w.L];if(w.L!==3&&L3X.has(w.k))w.Ls.push(3)});
const BYK=Object.fromEntries(W.map(w=>[w.k,w]));
const PRIO=['это','мама','папа','он','она','да','тут','там','дома','дом','кто','брат','друг','подруга','и','как'];
const sortKey=w=>w.L*1000+(PRIO.includes(w.k)?PRIO.indexOf(w.k):100+w.i);
const pic=(w,cls)=>{const u=IMG[w.pk];return u?`<img class="ph ${cls||''}" alt="" src="${u}">`:`<span class="em ${cls||''}" aria-hidden="true">${w.em}</span>`};

const _sn=new Set();
const SENT=SENT_RAW.filter(r=>{const k=strip(r[0]);if(_sn.has(k))return false;_sn.add(k);return true}).map((r,i)=>{
  const toks0=strip(r[0]).replace(/[«»]/g,'').match(/[А-Яа-яЁё]+/g)||[];
  const keys=[...new Set(toks0.map(t=>t.toLowerCase()).filter(t=>BYK[t]))];
  const end=r[0].trim().slice(-1);
  const QW=['кто','что','когда','как','где'];const ik=r[3]!==undefined?r[3]:end==='!'?0:toks0[0]&&toks0[0].toLowerCase()==='а'?4:end==='.'?1:(toks0.some(t=>QW.includes(t.toLowerCase()))?2:3);
  return{id:i,ru:r[0],fr:r[1],L:r[2],toks:r[0].replace(/[.?!]$/,'').split(/\s+/),end,keys,ik,key:'s'+i};
});
const sentOK=s=>s.keys.every(k=>S.cards[k]);

const LET=ALPHA.map((r,i)=>{
  let ex=null;
  if(r[5].includes('|')){const p=r[5].split('|');ex={ru:p[0],fr:p[1],em:p[2],w:null}}
  else{const w=BYK[strip(r[5]).toLowerCase()];ex={ru:r[5],fr:w?w.fr:'',em:w?w.em:'',w}}
  return{i,U:r[0],l:r[1],name:r[2],snd:r[3],tip:r[4],ex,book:!!r[6]};
});
const VOICED='БВГДЖЗ',UNVOICED='ПФКТШСХЦ',SONANT='ЛМНР',VOWEL='АОУЭИЫ';
const PAIR={Б:'П',В:'Ф',Г:'К',Д:'Т',Ж:'Ш',З:'С',П:'Б',Ф:'В',К:'Г',Т:'Д',Ш:'Ж',С:'З'};

/* ----- état ----- */
const LSK='ru-parcours-v2';
let S={v:2,cards:{},days:{},set:{goal:50,np:12,focus:3,hand:true,pr:true,slow:false,auto:true},newToday:{d:'',n:0},up:0};
const dkey=(t)=>{const d=new Date(t||Date.now());return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
function normalizeState(o){
  const d={v:2,cards:{},days:{},set:{goal:50,np:12,focus:3,hand:true,pr:true,slow:false,auto:true},newToday:{d:'',n:0},up:0};
  if(!o||typeof o!=='object')return d;
  d.cards=o.cards&&typeof o.cards==='object'?o.cards:{};
  d.days=o.days&&typeof o.days==='object'?o.days:{};
  d.set=Object.assign(d.set,o.set||{});
  d.newToday=o.newToday&&o.newToday.d?o.newToday:d.newToday;
  d.up=+o.up||0;
  return d;
}
function loadLocal(){try{const j=localStorage.getItem(LSK);if(j)return JSON.parse(j)}catch(e){}return null}
function migrateOld(){
  try{
    const j=localStorage.getItem('ru_known');if(!j)return;
    const o=JSON.parse(j);const now=Date.now();let n=0;
    Object.keys(o).forEach(r=>{const k=strip(r).toLowerCase();if(BYK[k]&&!S.cards[k]){S.cards[k]={b:2,due:now+DAY,n:1,ok:1,ko:0,last:now};n++}});
    if(n){S.up=now}
  }catch(e){}
}
let saveT=0,cloudT=0,dbDoc=null;
function save(){
  S.up=Date.now();
  try{localStorage.setItem(LSK,JSON.stringify(S))}catch(e){}
}

/* ----- répétition espacée ----- */
const IV=[0,1,2,4,8,16];
function ensure(k){if(!S.cards[k])S.cards[k]={b:0,due:Date.now(),n:0,ok:0,ko:0};return S.cards[k]}
function grade(k,ok){
  const c=ensure(k);c.n++;c.last=Date.now();
  if(ok){c.ok++;c.b=Math.min(5,c.b+1)}else{c.ko++;c.b=Math.max(0,c.b-2)}
  c.due=c.b===0?Date.now()+10*60*1000:Date.now()+IV[c.b]*DAY;
  save();
}
function streak(){
  let n=0;const d=new Date();
  if(!(S.days[dkey(d)]>0))d.setDate(d.getDate()-1);
  while(S.days[dkey(d)]>0){n++;d.setDate(d.getDate()-1)}
  return n;
}
function addXP(n){const k=dkey();S.days[k]=(S.days[k]||0)+n;R.xp+=n;save();updateHeader();updateRunTop()}
function dueWords(){const now=Date.now();return W.filter(w=>S.cards[w.k]&&S.cards[w.k].due<=now).sort((a,b)=>S.cards[a.k].due-S.cards[b.k].due)}
function unseenWords(){return W.filter(w=>!S.cards[w.k]).sort((a,b)=>sortKey(a)-sortKey(b))}
function newLeft(){const t=S.newToday.d===dkey()?S.newToday.n:0;return Math.max(0,S.set.np-t)}
function bumpNew(){if(S.newToday.d!==dkey())S.newToday={d:dkey(),n:0};S.newToday.n++}
function stats(){
  let learn=0,fam=0,sol=0;
  W.forEach(w=>{const c=S.cards[w.k];if(!c)return;if(c.b<=1)learn++;else if(c.b<=3)fam++;else sol++});
  const seen=learn+fam+sol;
  return{learn,fam,sol,seen,unseen:W.length-seen,due:dueWords().length,total:W.length};
}
const lvl=k=>{const c=S.cards[k];if(!c)return 0;return c.b<=1?1:c.b===2?2:c.b===3?3:4};

/* ----- audio ----- */
let voice=null,cTTS=null,audioOK=true;
const AU=new Proxy({},{get:(_,k)=>(window.AUDIO||{})[k]});let curA=null,seqId=0;
const akey=t=>t.replace(/[«»—]/g,'').replace(/^-\s*/,'').replace(/\s+/g,' ').trim();
function pickVoice(){try{const vs=speechSynthesis.getVoices();voice=vs.find(v=>/^ru/i.test(v.lang))||null}catch(e){voice=null}}
function updAudio(){}
function initAudio(){if('speechSynthesis' in window){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice}catch(e){}}}
function stopAudio(){seqId++;if(curA){try{curA.pause()}catch(e){}curA=null}try{speechSynthesis.cancel()}catch(e){}}
function playClip(src,slow){return new Promise(res=>{const a=new Audio(src);curA=a;a.playbackRate=slow?.72:1;a.onended=a.onerror=()=>res();a.play().catch(()=>res())})}
function tts(t,slow){try{if(!voice)return Promise.resolve();return new Promise(res=>{const u=new SpeechSynthesisUtterance(t);u.voice=voice;u.lang=voice.lang;u.rate=slow?.62:.9;u.onend=u.onerror=()=>res();speechSynthesis.speak(u)})}catch(e){return Promise.resolve()}}
async function playList(ts,slow){
  stopAudio();const my=seqId;
  for(const raw of ts){
    if(my!==seqId)return;
    const t=akey(raw);if(!t)continue;
    if(AU[t]){await playClip(AU[t],slow);continue}
    // mot composé : on joue les mots un par un si possible
    const parts=t.split(' ');
    if(parts.length>1&&parts.every(p=>AU[p])){for(const p of parts){if(my!==seqId)return;await playClip(AU[p],slow)}continue}
    await tts(strip(t),slow);
  }
}
const clean=t=>strip(t).replace(/[«»—]/g,'').replace(/\s+/g,' ').trim();
function say(text,slow){if(!text)return;playList(Array.isArray(text)?text:[text],slow!=null?slow:S.set.slow)}
function sayMany(arr){playList(arr.filter(Boolean),S.set.slow)}

/* ----- séance ----- */
const R={q:[],i:0,xp:0,ok:0,ko:0,graded:new Set(),locked:false,title:'',seenNew:0,again:null};
const PRAISE=['Bien joué','Exact','Parfait','Bravo','Très bien','Juste'];
function startRun(q,title,again){
  R.q=q.slice();R.i=0;R.xp=0;R.ok=0;R.ko=0;R.graded=new Set();R.locked=false;R.title=title;R.seenNew=0;R.again=again||null;
  $('#run').hidden=false;document.body.classList.add('lock');nextEx();
}
function updateRunTop(){const b=$('#rbar');if(b)b.style.width=(R.q.length?Math.min(100,R.i/R.q.length*100):0)+'%';const x=$('#rxp');if(x)x.textContent='+'+R.xp}
function nextEx(){
  if(R.i>=R.q.length)return endRun();
  const ex=R.q[R.i];R.locked=false;
  $('#fb').hidden=true;$('#stage').innerHTML='';$('#stage').scrollTop=0;
  if(ex.ens&&ex.key)ensure(ex.key);
  updateRunTop();
  EX[ex.t](ex);
}
function answered(ex,ok,info){
  if(R.locked)return;R.locked=true;info=info||{};
  if(ex.key&&!R.graded.has(ex.key)&&S.cards[ex.key]){R.graded.add(ex.key);grade(ex.key,ok&&!ex.retry)}
  if(ok){R.ok++;addXP(ex.retry?4:10)}
  else{R.ko++;if(!ex.retry)R.q.splice(Math.min(R.i+4,R.q.length),0,Object.assign({},ex,{retry:true}))}
  const f=$('#fb');f.className=ok?'ok':'ko';f.hidden=false;
  f.innerHTML=`<div class="in"><div class="msg">${ok?pick(PRAISE):'Pas tout à fait'}</div>${info.ans?`<div class="ans">${info.ans}${info.say?spk(info.say):''}</div>`:''}${info.note?`<div class="small">${info.note}</div>`:''}<button class="btn ${ok?'good':'bad'} block" id="cont">Continuer</button></div>`;
  const c=$('#cont');c.focus();c.onclick=()=>{R.i++;nextEx()};
  if(info.say&&S.set.auto&&audioOK)setTimeout(()=>say(info.say),150);
  updateRunTop();
}
function endRun(){
  clearInterval(R.timer);save();updateHeader();
  const tot=R.ok+R.ko,acc=tot?Math.round(R.ok/tot*100):100;
  $('#fb').hidden=true;
  $('#rbar').style.width='100%';
  $('#stage').innerHTML=`<div class="summary"><h2>Séance terminée</h2><p class="muted">${esc(R.title)}</p><div class="sgrid"><div class="card flat"><b>${acc}%</b><span>de réussite</span></div><div class="card flat"><b>+${R.xp}</b><span>points</span></div><div class="card flat"><b>${R.seenNew}</b><span>mots découverts</span></div></div><p><b>Série : ${streak()} jour${streak()>1?'s':''}</b></p><div class="cta" style="width:100%">${R.again?`<button class="btn block" data-act="again">Encore une série</button>`:''}<button class="btn ${R.again?'ghost':''} block" data-act="end">Terminer</button></div></div>`;
}
function closeRun(){clearInterval(R.timer);$('#run').hidden=true;document.body.classList.remove('lock');stopAudio();renderView()}

/* ----- exercices ----- */
const EX={};
function others(w,n){
  const p=W.filter(x=>x.k!==w.k&&x.fr!==w.fr);
  const same=shuf(p.filter(x=>x.cat===w.cat));
  const mix=same.slice(0,2).concat(shuf(p));
  const out=[],seen=new Set([w.k]);
  for(const x of mix){if(!seen.has(x.k)&&!out.some(o=>o.fr===x.fr)){out.push(x);seen.add(x.k)}if(out.length>=n)break}
  return out;
}
function choose(ex,o){
  const st=$('#stage');
  st.innerHTML=`<div class="q">${o.q}</div>${o.box?`<div class="qbox">${o.box}</div>`:''}<div class="opts ${o.cls||''}">${o.opts.map((x,i)=>`<button class="opt" data-i="${i}">${x.h}</button>`).join('')}</div>`;
  const btns=$$('.opt',st);
  btns.forEach(b=>b.onclick=()=>{
    if(R.locked)return;const i=+b.dataset.i,ok=o.opts[i].v===o.right;
    btns.forEach((x,j)=>{x.disabled=true;if(o.opts[j].v===o.right)x.classList.add('good')});
    if(!ok)b.classList.add('wrong');
    answered(ex,ok,{ans:o.ans,say:o.say,note:o.note});
  });
}
const ansW=w=>`<span class="ru">${ru(w.ru)}</span><span class="muted"> — ${esc(w.fr)}</span>`;
EX.intro=ex=>{
  const w=ex.w;
  if(!S.cards[w.k]){ensure(w.k);bumpNew();R.seenNew++;save()}
  const g=w.g&&w.g!=='pl'?`<span class="pill">${w.g}${w.g==='он'?' · masculin':w.g==='она'?' · féminin':' · neutre'}</span>`:(w.g==='pl'?'<span class="pill">pluriel</span>':'');
  $('#stage').innerHTML=`<div class="q">Nouveau mot · leçon ${w.L}</div><div class="intro">${pic(w)}<div class="big ru">${ru(w.ru)}</div>${S.set.pr?`<div class="pr">[ ${esc(w.pr)} ]</div>`:''}<div class="mid" style="font-size:26px;font-weight:800">${esc(w.fr)}</div><div class="row" style="justify-content:center">${spk(w.ru)}${spk(w.ru,true)}</div><div class="tags">${g}${w.tr?'<span class="pill g">Ressemble au français</span>':''}</div>${w.mn?`<div class="mn">${esc(w.mn)}</div>`:''}<button class="btn block" id="idone">Suivant</button></div>`;
  addXP(3);
  $('#idone').onclick=()=>{R.i++;nextEx()};
  if(S.set.auto&&audioOK)setTimeout(()=>say(w.ru),250);
};
EX.img2ru=ex=>{const w=ex.w;const o=shuf([w].concat(others(w,3)));choose(ex,{q:'Quel est ce mot en russe ?',box:pic(w),opts:o.map(x=>({h:`<span class="ru">${ru(x.ru)}</span>`,v:x.k})),right:w.k,ans:ansW(w),say:w.ru})};
EX.ru2img=ex=>{const w=ex.w;const o=shuf([w].concat(others(w,3)));choose(ex,{q:'Quelle image correspond à ce mot ?',box:`<div class="big ru">${ru(w.ru)}</div>${spk(w.ru)}`,opts:o.map(x=>({h:pic(x),v:x.k})),right:w.k,ans:ansW(w),say:w.ru});if(S.set.auto&&audioOK)setTimeout(()=>say(w.ru),200)};
EX.fr2ru=ex=>{const w=ex.w;const o=shuf([w].concat(others(w,3)));choose(ex,{q:'Comment dit-on en russe ?',box:`<div class="mid" style="font-weight:800">${esc(w.fr)}</div>`,opts:o.map(x=>({h:`<span class="ru">${ru(x.ru)}</span>`,v:x.k})),right:w.k,ans:ansW(w),say:w.ru})};
EX.ru2fr=ex=>{const w=ex.w;const o=shuf([w].concat(others(w,3)));choose(ex,{q:'Que veut dire ce mot ?',box:`<div class="big ru">${ru(w.ru)}</div>${spk(w.ru)}`,opts:o.map(x=>({h:esc(x.fr),v:x.k})),right:w.k,cls:'one',ans:ansW(w),say:w.ru});if(S.set.auto&&audioOK)setTimeout(()=>say(w.ru),200)};
EX.listen2ru=ex=>{const w=ex.w;const o=shuf([w].concat(others(w,3)));choose(ex,{q:'Écoute, puis choisis le mot',box:`<div class="row" style="justify-content:center">${spk(w.ru)}${spk(w.ru,true)}</div>`,opts:o.map(x=>({h:`<span class="ru">${ru(x.ru)}</span>`,v:x.k})),right:w.k,ans:ansW(w),say:w.ru});setTimeout(()=>say(w.ru),200)};
const KBL='абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
function typeUI(ex,o){
  const st=$('#stage');
  st.innerHTML=`<div class="q">${o.q}</div><div class="qbox">${o.box}</div><div class="typebox"><input id="ans" class="field" inputmode="none" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Ta réponse en russe" placeholder="${'· '.repeat(o.len).trim()}"><div class="kb">${[...KBL].map(c=>`<button class="key" data-k="${c}">${c}</button>`).join('')}<button class="key wide" data-k="⌫" aria-label="Effacer">⌫</button></div><div class="row"><button class="btn ghost" id="hint">Indice</button><button class="btn grow" id="chk" disabled>Vérifier</button></div></div>`;
  const inp=$('#ans'),chk=$('#chk');
  const upd=()=>{chk.disabled=!inp.value.trim()};
  inp.oninput=upd;
  $$('.key',st).forEach(b=>b.onclick=()=>{if(R.locked)return;const k=b.dataset.k;inp.value=k==='⌫'?inp.value.slice(0,-1):inp.value+k;upd()});
  $('#hint').onclick=()=>{if(R.locked)return;const a=strip(o.answer);inp.placeholder=a[0]+' '+'· '.repeat(Math.max(0,o.len-1)).trim()};
  const check=()=>{
    if(R.locked||!inp.value.trim())return;
    const ok=norm(inp.value)===norm(o.answer);
    inp.classList.add(ok?'good':'wrong');inp.readOnly=true;
    $$('.key',st).forEach(b=>b.disabled=true);chk.disabled=true;$('#hint').disabled=true;
    answered(ex,ok,{ans:o.ans,say:o.say,note:ok?'':`Tu as écrit : <span class="ru" style="font-size:22px">${esc(inp.value)}</span>`});
  };
  chk.onclick=check;
  inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();check()}};
}
EX.typeru=ex=>{const w=ex.w;typeUI(ex,{q:'Écris ce mot en russe',box:`${pic(w)}<div class="mid" style="font-weight:800">${esc(w.fr)}</div>`,answer:w.ru,len:norm(w.ru).length,ans:ansW(w),say:w.ru})};
EX.dictee=ex=>{const w=ex.w;typeUI(ex,{q:'Dictée : écoute et écris',box:`<div class="row" style="justify-content:center">${spk(w.ru)}${spk(w.ru,true)}</div>`,answer:w.ru,len:norm(w.ru).length,ans:ansW(w),say:w.ru});setTimeout(()=>say(w.ru),250)};
EX.genre=ex=>{
  const w=ex.w;
  const rule=EXC[w.k]?'Exception à retenir : '+w.pk+' est '+(w.g==='он'?'masculin':'féminin')+' malgré sa terminaison.':w.g==='он'?'Il se termine par une consonne : masculin.':w.g==='она'?'Il se termine par -а ou -я : féminin.':'Il se termine par -о ou -е : neutre.';
  choose(ex,{q:'Quel est le genre de ce nom ?',box:`${pic(w)}<div class="big ru">${ru(w.ru)}</div>`,cls:'three',opts:[['он','masculin'],['она','féminin'],['оно','neutre']].map(x=>({h:`<span><span class="ru" style="font-size:34px">${x[0]}</span><br><small class="muted">${x[1]}</small></span>`,v:x[0]})),right:w.g,ans:`<span class="ru">${ru(w.ru)}</span><span class="muted"> → ${w.g}</span>`,say:w.ru,note:rule});
};
EX.sent2fr=ex=>{
  const s=ex.s;const o=shuf([s].concat(shuf(SENT.filter(x=>x.id!==s.id&&x.fr!==s.fr)).slice(0,3)));
  choose(ex,{q:'Que veut dire cette phrase ?',box:`<div class="mid ru">${ru(s.ru)}</div><div class="row" style="justify-content:center">${spk(s.ru)}${spk(s.ru,true)}</div>`,cls:'one',opts:o.map(x=>({h:esc(x.fr),v:x.id})),right:s.id,ans:`<span class="ru">${ru(s.ru)}</span>`,say:s.ru});
  setTimeout(()=>say(s.ru),250);
};
EX.build=ex=>{
  const s=ex.s;
  const extra=[];const seen=new Set(s.toks.map(norm));
  if(!ex.nodist)shuf(SENT.filter(x=>x.id!==s.id).flatMap(x=>x.toks)).forEach(t=>{if(extra.length<2&&!seen.has(norm(t))){extra.push(t);seen.add(norm(t))}});
  const tiles=shuf(s.toks.concat(extra));let placed=[];
  $('#stage').innerHTML=`<div class="q">Traduis en russe</div><div class="qbox">${ex.prev?`<div class="small muted">Réplique précédente : <span class="ru">${ru(ex.prev)}</span>${ex.prevFr?` — ${esc(ex.prevFr)}`:''}</div>`:''}<div class="mid" style="font-size:26px;font-weight:800">${esc(s.fr)}</div></div><div class="line" id="line" aria-label="Ta phrase"></div><div class="tiles" id="bank"></div><button class="btn block" id="chk" disabled>Vérifier</button>`;
  const draw=()=>{
    $('#line').innerHTML=placed.map(i=>`<button class="tile" data-i="${i}"><span class="ru">${ru(tiles[i])}</span></button>`).join('');
    $('#bank').innerHTML=tiles.map((t,i)=>placed.includes(i)?'':`<button class="tile" data-i="${i}"><span class="ru">${ru(t)}</span></button>`).join('');
    $('#chk').disabled=!placed.length;
    $$('.tile','#stage'.length?$('#stage'):document).forEach(b=>b.onclick=()=>{if(R.locked)return;const i=+b.dataset.i;if(placed.includes(i))placed=placed.filter(x=>x!==i);else placed.push(i);draw()});
  };
  draw();
  $('#chk').onclick=()=>{
    if(R.locked)return;
    const ok=placed.map(i=>norm(tiles[i])).join('|')===s.toks.map(norm).join('|');
    $$('.tile').forEach(b=>b.disabled=true);$('#chk').disabled=true;
    answered(ex,ok,{ans:`<span class="ru">${ru(s.ru)}</span>`,say:s.ru,note:ok?'':'Vérifie l’ordre des mots et les petits mots (и, да…).'});
  };
};
EX.dread=ex=>{
  $('#stage').innerHTML=`<div class="q">Écoute et lis le dialogue</div><div class="card flat" style="max-height:62vh;overflow:auto">${ex.L.map(l=>`<div class="ln"><div><div class="ru" style="font-size:20px">${ru(l.ru)}</div><div class="small muted">${esc(l.fr)}</div></div>${spk(l.ru)}</div>`).join('')}</div><button class="btn block" id="idone">Je commence les exercices</button>`;
  $('#idone').onclick=()=>{R.i++;nextEx()};
};
EX.dnext=ex=>{
  const L=ex.L,i=ex.i,right=L[i];
  const others=shuf(L.filter((l,k)=>k!==i&&l.ru!==right.ru)).slice(0,3);
  const o=shuf([right].concat(others));
  choose(ex,{q:'Quelle est la réplique qui suit ?',box:`<div class="small muted">Réplique précédente</div><div class="mid ru">${ru(L[i-1].ru)}</div><div class="small muted">${esc(L[i-1].fr)}</div><div class="row" style="justify-content:center">${spk(L[i-1].ru)}</div>`,cls:'one',opts:o.map(x=>({h:`<span class="ru">${ru(x.ru)}</span><br><span class="small muted">${esc(x.fr)}</span>`,v:x.ru})),right:right.ru,ans:`<span class="ru">${ru(right.ru)}</span>`,say:right.ru});
};
EX.dorder=ex=>{
  const lines=ex.D[2].map(l=>l[0].replace(/^[—-]\s*/,''));let tiles=shuf(lines.map((l,i)=>i));let placed=[];
  $('#stage').innerHTML=`<div class="q">Remets le dialogue dans l’ordre</div><div class="line" id="line" aria-label="Ton dialogue" style="min-height:60px"></div><div class="tiles" id="bank" style="display:grid;grid-template-columns:1fr"></div><button class="btn block" id="chk" disabled>Vérifier</button>`;
  const draw=()=>{
    $('#line').innerHTML=placed.map(i=>`<button class="tile" data-i="${i}" style="width:100%;text-align:left"><span class="ru" style="font-size:20px">${ru(lines[i])}</span></button>`).join('');
    $('#bank').innerHTML=tiles.map(i=>placed.includes(i)?'':`<button class="tile" data-i="${i}" style="width:100%;text-align:left"><span class="ru" style="font-size:20px">${ru(lines[i])}</span></button>`).join('');
    $('#chk').disabled=placed.length!==lines.length;
    $$('.tile',$('#stage')).forEach(b=>b.onclick=()=>{if(R.locked)return;const i=+b.dataset.i;if(placed.includes(i))placed=placed.filter(x=>x!==i);else placed.push(i);draw()});
  };
  draw();
  $('#chk').onclick=()=>{
    if(R.locked)return;const ok=placed.every((v,i)=>v===i);
    $$('.tile').forEach(b=>b.disabled=true);$('#chk').disabled=true;
    answered(ex,ok,{ans:'',note:ok?'Tout le dialogue est dans le bon ordre.':'Relis le dialogue du début : '+lines.slice(0,3).map(esc).join(' · ')+'…'});
  };
};
/* ----- conjugaison (leçon 4) ----- */
const CPRON=['я','ты','он / она́','мы','вы','они́'],CPFR=['je','tu','il / elle','nous','vous','ils'],CEND=['ю','ешь','ет','ем','ете','ют'];
const cstem=(v,i)=>v.f[i].slice(0,v.f[i].length-CEND[i].length);
const cform=(v,i)=>`<span class="ru">${ru(cstem(v,i))}<b class="cend">${CEND[i]}</b></span>`;
EX.cintro=ex=>{
  const v=ex.v;
  if(!v){
    $('#stage').innerHTML=`<div class="q">Conjugaison · les verbes en -ать</div><div class="card flat"><p class="small">Pour conjuguer un verbe en -ать, tu enlèves <b>-ть</b> et tu ajoutes la terminaison qui va avec le pronom. Apprends ces 6 terminaisons : elles sont les mêmes pour <b>рабо́тать, отдыха́ть, де́лать, зна́ть</b>.</p>${CPRON.map((p,i)=>`<div class="ln"><div><span class="ru" style="font-size:22px">${p}</span> <span class="small muted">(${CPFR[i]})</span></div><div class="ru" style="font-size:26px;font-weight:800"><b class="cend">-${CEND[i]}</b></div></div>`).join('')}<p class="small muted">Ordre (impératif) : <b class="cend">-й</b> (tu) et <b class="cend">-йте</b> (vous).</p></div><button class="btn block" id="idone">Je commence</button>`;
  }else{
    $('#stage').innerHTML=`<div class="q">Conjugaison</div><div class="intro"><div class="big ru">${ru(v.inf)}</div><div class="mid" style="font-size:22px;font-weight:800">${esc(v.fr)}</div><div class="card flat">${CPRON.map((p,i)=>`<div class="ln" style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><span class="ru" style="font-size:20px">${p}</span> ${cform(v,i)}<div class="small muted">${esc(v.frf[i])}</div></div>${spk(v.f[i])}</div>`).join('')}<div class="ln"><div><span class="small muted">ordre :</span> <span class="ru" style="font-size:20px">${ru(v.imp)}</span> · <span class="ru" style="font-size:20px">${ru(v.impp)}</span></div>${spk(v.imp)}</div></div><div class="row" style="justify-content:center"><button class="btn ghost" id="sayall">Tout écouter</button></div><button class="btn block" id="idone">Suivant</button></div>`;
    $('#sayall').onclick=()=>sayMany(v.f);
  }
  addXP(3);$('#idone').onclick=()=>{R.i++;nextEx()};
};
EX.cchoose=ex=>{
  const v=ex.v,p=ex.p;const used=new Set([v.f[p]]);const o=[v.f[p]];
  shuf([0,1,2,3,4,5].filter(i=>i!==p)).slice(0,2).forEach(i=>{if(!used.has(v.f[i])){used.add(v.f[i]);o.push(v.f[i])}});
  shuf(CONJ.filter(x=>x!==v)).forEach(x=>{if(o.length<4&&!used.has(x.f[p])){used.add(x.f[p]);o.push(x.f[p])}});
  choose(ex,{q:'Choisis la bonne forme',box:`<div class="mid ru" style="font-size:34px">${CPRON[p]} …</div><div class="small muted">${esc(CPFR[p])} · <span class="ru">${ru(v.inf)}</span> (${esc(v.fr)})</div>`,cls:'one',opts:shuf(o).map(x=>({h:`<span class="ru" style="font-size:24px">${ru(x)}</span>`,v:x})),right:v.f[p],ans:`<span class="ru">${CPRON[p]} ${ru(v.f[p])}</span> <small class="muted">${esc(v.frf[p])}</small>`,say:v.f[p]});
};
EX.cend=ex=>{
  const v=ex.v,p=ex.p;const o=shuf([0,1,2,3,4,5].filter(i=>i!==p)).slice(0,3).concat([p]);
  choose(ex,{q:'Choisis la terminaison',box:`<div class="mid ru" style="font-size:34px">${CPRON[p]} ${ru(cstem(v,p))}<span style="border-bottom:3px solid var(--blue);display:inline-block;width:56px">&nbsp;</span></div><div class="small muted">${esc(CPFR[p])} · ${esc(v.fr)}</div>`,cls:'',opts:shuf(o).map(i=>({h:`<span class="ru" style="font-size:26px;font-weight:800">-${CEND[i]}</span>`,v:i})),right:p,ans:`<span class="ru">${CPRON[p]} ${cform(v,p)}</span> <small class="muted">${esc(v.frf[p])}</small>`,say:v.f[p]});
};
EX.ctype=ex=>{
  const v=ex.v,p=ex.p;
  typeUI(ex,{q:'Écris la forme du verbe',box:`<div class="mid ru" style="font-size:30px">${CPRON[p]} …</div><div class="small muted">${esc(v.frf[p])} · <span class="ru">${ru(v.inf)}</span></div>`,answer:v.f[p],len:norm(v.f[p]).length,ans:`<span class="ru">${CPRON[p]} ${cform(v,p)}</span>`,say:v.f[p]});
};
EX.cfill=ex=>{
  const [t,vi,p,fr]=ex.c;const v=CONJ[vi];const parts=t.split('___');
  const o=shuf([0,1,2,3,4,5].filter(i=>i!==p)).slice(0,3).concat([p]);
  const full=parts.join(v.f[p]);
  choose(ex,{q:'Complète la phrase',box:`<div class="mid ru" style="font-size:26px">${ru(parts[0])}<span style="border-bottom:3px solid var(--blue);display:inline-block;width:70px">&nbsp;</span>${ru(parts[1]||'')}</div><div class="small muted">${esc(fr)} · <span class="ru">${ru(v.inf)}</span></div>`,cls:'one',opts:shuf(o).map(i=>({h:`<span class="ru" style="font-size:22px">${ru(v.f[i])}</span>`,v:i})),right:p,ans:`<span class="ru">${ru(full)}</span>`,say:full});
};
EX.ctable=ex=>{
  const v=ex.v;const order=shuf([0,1,2,3,4,5]);let placed=[];
  $('#stage').innerHTML=`<div class="q">Range les formes : ${ru(v.inf)} (${esc(v.fr)})</div><div class="card flat" id="crows"></div><div class="tiles" id="bank"></div><button class="btn block" id="chk" disabled>Vérifier</button>`;
  const draw=()=>{
    $('#crows').innerHTML=CPRON.map((pr,i)=>`<div class="ln"><span class="ru" style="font-size:22px;min-width:84px">${pr}</span>${placed[i]!==undefined?`<button class="tile" data-r="${i}"><span class="ru">${ru(v.f[placed[i]])}</span></button>`:`<span class="small muted" style="${placed.length===i?'color:var(--blue);font-weight:800':''}">${placed.length===i?'← ici':'…'}</span>`}</div>`).join('');
    $('#bank').innerHTML=order.map(i=>placed.includes(i)?'':`<button class="tile" data-i="${i}"><span class="ru">${ru(v.f[i])}</span></button>`).join('');
    $('#chk').disabled=placed.length!==6;
    $$('#bank .tile').forEach(b=>b.onclick=()=>{if(R.locked)return;placed.push(+b.dataset.i);draw()});
    $$('#crows .tile').forEach(b=>b.onclick=()=>{if(R.locked)return;placed=placed.slice(0,+b.dataset.r);draw()});
  };
  draw();
  $('#chk').onclick=()=>{
    if(R.locked)return;const ok=placed.every((x,i)=>x===i);
    $$('.tile').forEach(b=>b.disabled=true);$('#chk').disabled=true;
    answered(ex,ok,{ans:CPRON.map((p,i)=>`<div><span class="ru">${p} ${cform(v,i)}</span></div>`).join(''),note:ok?'Tableau complet.':'Les terminaisons dans l’ordre : -ю, -ешь, -ет, -ем, -ете, -ют.'});
  };
};
EX.cimp=ex=>{
  const v=ex.v;const pl=ex.pl;const right=pl?v.impp:v.imp;
  const o=shuf([v.imp,v.impp,v.f[0],v.f[1]].filter((x,i,a)=>a.indexOf(x)===i)).slice(0,4);
  choose(ex,{q:pl?'Dis « '+v.fr+' ! » à plusieurs personnes (ou en politesse)':'Dis « '+v.fr+' ! » à un ami (tu)',box:`<div class="mid ru" style="font-size:28px">${ru(v.inf)}</div>`,cls:'one',opts:o.map(x=>({h:`<span class="ru" style="font-size:24px">${ru(x)}</span>`,v:x})),right,ans:`<span class="ru">${ru(right)}!</span>`,say:right});
};
function contour(n){
  const d={1:'M4 12H70L96 30',2:'M4 28L22 8H44L74 30',4:'M4 8H26L36 26H64L98 6',3:'M4 26H62C80 26 88 20 98 6'}[n];
  return `<svg class="cont" viewBox="0 0 104 36" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
}
const IKT={4:'ИК-4 : relance avec А (А ты ? А это ?). Le mot est dit plus bas, puis la voix remonte.',1:'ИК-1 : la voix descend à la fin.',2:'ИК-2 : la voix monte sur le mot interrogatif (кто, что, когда) puis redescend.',3:'ИК-3 : question oui / non, la voix monte sur le mot interrogé.'};
EX.ik=ex=>{
  const s=ex.s;
  choose(ex,{q:'Quelle intonation pour cette phrase ?',box:`<div class="mid ru">${ru(s.ru)}</div><div class="row" style="justify-content:center">${spk(s.ru)}${spk(s.ru,true)}</div>`,cls:'one',opts:[[1,'ИК-1','affirmation'],[2,'ИК-2','question avec кто, что, когда'],[3,'ИК-3','question oui / non'],[4,'ИК-4','relance avec А']].map(x=>({h:`<span><b>${x[1]}</b> <span class="muted">· ${x[2]}</span></span>`,v:x[0]})),right:s.ik,ans:contour(s.ik),note:IKT[s.ik],say:s.ru});
  setTimeout(()=>say(s.ru),250);
};
EX.ltrSound=ex=>{
  const L=ex.L;const pool=LET.filter(x=>x.book&&x.U!==L.U&&x.U!=='Ь');
  const o=shuf([L].concat(shuf(pool).slice(0,3)));
  choose(ex,{q:'Quel son fait cette lettre ?',box:`<div class="big ru">${L.U}${L.l}</div><div class="row" style="justify-content:center">${spk(L.name)}</div><div class="pr">nom : ${esc(L.name)}</div>`,cls:'one',opts:o.map(x=>({h:esc(SOUNDQ[x.U]||x.snd),v:x.U})),right:L.U,ans:`<span class="ru">${L.U}${L.l}</span><span class="muted"> — ${esc(L.snd)}</span>`,say:L.name,note:L.tip});
};
EX.soundLtr=ex=>{
  const L=ex.L;const pool=LET.filter(x=>x.book&&x.U!==L.U&&x.U!=='Ь');
  const o=shuf([L].concat(shuf(pool).slice(0,3)));
  choose(ex,{q:'Quelle lettre fait ce son ?',box:`<div class="mid" style="font-weight:800">${esc(L.snd)}</div>`,opts:o.map(x=>({h:`<span class="ru" style="font-size:40px">${x.U}${x.l}</span>`,v:x.U})),right:L.U,ans:`<span class="ru">${L.U}${L.l}</span><span class="muted"> — ${esc(L.name)}</span>`,say:L.name,note:L.tip});
};
EX.pairs=ex=>{
  const ws=ex.ws;let tiles=[];
  ws.forEach(w=>{tiles.push({k:w.k,t:'p',w});tiles.push({k:w.k,t:'r',w})});
  tiles=shuf(tiles);let sel=null,left=ws.length,err=0;
  $('#stage').innerHTML=`<div class="q">Relie chaque image à son mot russe</div><div class="pairs" id="pg">${tiles.map((t,i)=>`<button class="ptile" data-i="${i}">${t.t==='p'?pic(t.w):`<span class="ru">${ru(t.w.ru)}</span>`}</button>`).join('')}</div><div class="q" id="pmsg">&nbsp;</div>`;
  const els=$$('.ptile');
  els.forEach(el=>el.onclick=()=>{
    if(R.locked)return;const i=+el.dataset.i;
    if(sel===null){sel=i;el.classList.add('sel');return}
    if(sel===i){el.classList.remove('sel');sel=null;return}
    const a=tiles[sel],b=tiles[i],ea=els[sel];
    if(a.k===b.k&&a.t!==b.t){
      ea.classList.remove('sel');ea.classList.add('done');el.classList.add('done');sel=null;left--;
      $('#pmsg').innerHTML=`${esc(a.w.fr)}`;if(S.set.auto&&audioOK)say(a.w.ru);
      if(!left)answered(ex,err<=3,{ans:'',note:err?`${err} erreur${err>1?'s':''}`:'Sans faute'});
    }else{
      err++;ea.classList.remove('sel');ea.classList.add('err');el.classList.add('err');sel=null;
      setTimeout(()=>{ea.classList.remove('err');el.classList.remove('err')},450);
    }
  });
};
const POSS={'мой':['мой','моя','моё','мои'],'твой':['твой','твоя','твоё','твои'],'наш':['наш','наша','наше','наши'],'ваш':['ваш','ваша','ваше','ваши']};
const PFR={'мой':'mon, ma, mes','твой':'ton, ta, tes','наш':'notre, nos','ваш':'votre, vos'};
EX.poss=ex=>{
  const w=ex.w,F=POSS[ex.p];const idx=w.g==='он'?0:w.g==='она'?1:w.g==='оно'?2:3;
  const f=i=>BYK[F[i]]?BYK[F[i]].ru:F[i];
  choose(ex,{q:'Complète avec « '+ex.p+' » ('+PFR[ex.p]+')',box:`${pic(w)}<div class="big ru">… ${ru(w.ru)}</div><div class="pr">${esc(w.fr)}</div>`,cls:'',opts:F.map((x,i)=>({h:`<span class="ru">${ru(f(i))}</span>`,v:i})),right:idx,ans:`<span class="ru">${ru(f(idx))} ${ru(w.ru)}</span>`,say:[f(idx),w.ru],note:'Le possessif prend le genre du nom ('+(w.g==='pl'?'pluriel':w.g)+').'});
};
EX.tf=ex=>{
  const w=ex.w,real=Math.random()<.5,o=real?w:pick(others(w,1));
  choose(ex,{q:'Ce mot correspond-il à l’image ?',box:`${pic(w)}<div class="big ru">${ru(o.ru)}</div>${spk(o.ru)}`,cls:'',opts:[{h:'Vrai',v:1},{h:'Faux',v:0}],right:real?1:0,ans:ansW(w),say:w.ru});
};
EX.scramble=ex=>{
  const w=ex.w,target=[...strip(w.ru).toLowerCase()];let tiles=shuf(target);
  for(let t=0;t<6&&tiles.join('')===target.join('');t++)tiles=shuf(target);
  let placed=[];
  $('#stage').innerHTML=`<div class="q">Remets les lettres dans l’ordre</div><div class="qbox">${pic(w)}<div class="mid" style="font-weight:800">${esc(w.fr)}</div></div><div class="line" id="line" aria-label="Ton mot"></div><div class="tiles" id="bank"></div><div class="row"><button class="btn ghost" id="clr">Effacer</button><button class="btn grow" id="chk" disabled>Vérifier</button></div>`;
  const draw=()=>{
    $('#line').innerHTML=placed.map(i=>`<button class="tile" data-i="${i}"><span class="ru">${tiles[i]}</span></button>`).join('');
    $('#bank').innerHTML=tiles.map((t,i)=>placed.includes(i)?'':`<button class="tile" data-i="${i}"><span class="ru">${t}</span></button>`).join('');
    $('#chk').disabled=!placed.length;
    $$('.tile',$('#stage')).forEach(b=>b.onclick=()=>{if(R.locked)return;const i=+b.dataset.i;if(placed.includes(i))placed=placed.filter(x=>x!==i);else placed.push(i);draw()});
  };
  draw();
  $('#clr').onclick=()=>{if(!R.locked){placed=[];draw()}};
  $('#chk').onclick=()=>{
    if(R.locked)return;const ok=placed.map(i=>tiles[i]).join('')===target.join('');
    $$('.tile').forEach(b=>b.disabled=true);$('#chk').disabled=true;$('#clr').disabled=true;
    answered(ex,ok,{ans:ansW(w),say:w.ru});
  };
};
EX.blitz=ex=>{
  const pool=shuf(ex.pool);let t=60,score=0,wrong=0,idx=0,busy=false;
  clearInterval(R.timer);
  const st=$('#stage');
  st.innerHTML=`<div class="q" id="bq">Éclair : 60 secondes</div><div class="row" style="justify-content:center"><span class="chip" id="btime">60 s</span><span class="chip" id="bscore">0 juste</span></div><div id="bbox"></div>`;
  const finish=()=>{
    clearInterval(R.timer);
    $('#rbar').style.width='100%';
    R.locked=false;
    st.innerHTML='';
    answered(ex,score>=8,{ans:`<b>${score}</b> bonne${score>1?'s':''} réponse${score>1?'s':''}, ${wrong} erreur${wrong>1?'s':''}`,note:score>=8?'Rapide et précis.':'Refais une manche : la vitesse vient avec la répétition.'});
  };
  const next=()=>{
    if(idx>=pool.length){idx=0}
    if(!$('#bbox'))return;
    const w=pool[idx++],useImg=!!IMG[w.pk]&&Math.random()<.6;
    const o=shuf([w].concat(others(w,3)));busy=false;
    $('#bbox').innerHTML=`<div class="qbox" style="margin:10px 0">${useImg?pic(w):`<div class="big ru">${ru(w.ru)}</div>`}</div><div class="opts ${useImg?'':'one'}">${o.map((x,i)=>`<button class="opt" data-i="${i}">${useImg?`<span class="ru">${ru(x.ru)}</span>`:esc(x.fr)}</button>`).join('')}</div>`;
    $$('.opt',$('#bbox')).forEach((b,i)=>b.onclick=()=>{
      if(busy||t<=0)return;busy=true;const ok=o[i].k===w.k;
      if(S.cards[w.k]&&!R.graded.has(w.k)){R.graded.add(w.k);grade(w.k,ok)}
      b.classList.add(ok?'good':'wrong');
      if(!ok){const g=$$('.opt',$('#bbox'))[o.findIndex(x=>x.k===w.k)];if(g)g.classList.add('good')}
      if(ok){score++;addXP(2);$('#bscore').textContent=score+' juste'+(score>1?'s':'')}else wrong++;
      setTimeout(()=>{if(t>0)next()},ok?250:700);
    });
  };
  R.timer=setInterval(()=>{t--;$('#btime').textContent=Math.max(t,0)+' s';$('#rbar').style.width=((60-t)/60*100)+'%';if(t<=0)finish()},1000);
  next();
};
function buildLesson(L){
  const ws=W.filter(w=>w.Ls.includes(L));
  const un=ws.filter(w=>!S.cards[w.k]).sort((a,b)=>(b.L===L)-(a.L===L)||sortKey(a)-sortKey(b));
  const sn=ws.filter(w=>S.cards[w.k]).sort((a,b)=>S.cards[a.k].b-S.cards[b.k].b||S.cards[a.k].due-S.cards[b.k].due);
  const take=un.slice(0,8).concat(sn.slice(0,Math.max(4,12-Math.min(8,un.length))));
  const q=[];
  for(let i=0;i<take.length;i+=4){
    const g=take.slice(i,i+4);
    g.filter(w=>!S.cards[w.k]).forEach(w=>q.push({t:'intro',key:w.k,w}));
    shuf(g).forEach(w=>q.push(pickEx(w,S.cards[w.k]?S.cards[w.k].b:0,!S.cards[w.k])));
    shuf(g).forEach(w=>q.push({t:'typeru',key:w.k,w}));
  }
  return q;
}
function lessonStats(L){
  const ws=W.filter(w=>w.Ls.includes(L));let seen=0,sol=0,fam=0;
  ws.forEach(w=>{const c=S.cards[w.k];if(!c)return;seen++;if(c.b>=4)sol++;else if(c.b>=2)fam++});
  return{total:ws.length,seen,sol,fam,left:ws.length-seen};
}
function pickEx(w,b,jl){
  const img=!!IMG[w.pk];let L;
  if(jl)L=img?['img2ru','ru2img']:['fr2ru'];
  else if(b<=1)L=['fr2ru'].concat(img?['img2ru','ru2img']:[],audioOK?['listen2ru']:[]);
  else if(b<=3)L=['ru2fr','fr2ru','typeru'].concat(img?['img2ru']:[]);
  else L=['typeru','ru2fr'].concat(audioOK?['dictee']:[]);
  return{t:pick(L),key:w.k,w};
}
function buildDaily(extra){
  const now=Date.now(),q=[];
  const F=S.set.focus,inF=w=>F==='all'||w.Ls.includes(+F);
  const dd=dueWords();dd.filter(inF).concat(dd.filter(w=>!inF(w))).slice(0,16).forEach(w=>q.push(pickEx(w,S.cards[w.k].b)));
  const uu=unseenWords(),uf=uu.filter(inF).sort((a,b)=>(F!=='all'&&((b.L===+F)-(a.L===+F)))||sortKey(a)-sortKey(b)).concat(uu.filter(w=>!inF(w)));
  const nw=uf.slice(0,Math.min(newLeft()+(extra||0),uf.length));
  for(let i=0;i<nw.length;i+=3){const g=nw.slice(i,i+3);g.forEach(w=>q.push({t:'intro',key:w.k,w}));shuf(g).forEach(w=>q.push(pickEx(w,0,true)))}
  const ss=SENT.filter(s=>sentOK(s)&&(!S.cards[s.key]||S.cards[s.key].due<=now));
  const ready=shuf(ss.filter(s=>S.cards[s.key])).concat(ss.filter(s=>!S.cards[s.key]));
  ready.slice(0,3).forEach(s=>{const b=S.cards[s.key]?S.cards[s.key].b:0;q.push({t:b<2?'sent2fr':'build',key:s.key,s,ens:true})});
  const nouns=W.filter(w=>S.cards[w.k]&&w.g&&w.g!=='pl');
  if(nouns.length>=6)shuf(nouns).slice(0,2).forEach(w=>q.push({t:'genre',w}));
  return q;
}
function poolFor(p){
  if(/^l\d$/.test(p))return W.filter(w=>w.Ls.includes(+p[1]));
  if(p==='weak'){const x=W.filter(w=>S.cards[w.k]&&S.cards[w.k].b<=2);return x.length>=4?x:W;}
  return W;
}
const MODES=[
['recog','Reconnaître','Image, mot, son','img'],
['write','Écrire','Tape le mot en russe','pen'],
['dict','Dictée','Écoute et écris','ear'],
['pairs','Paires','Relie image et mot','pairs'],
['genre','он, она, оно','Trouve le genre','layers'],
['build','Phrases','Construis la phrase','blocks'],
['ik','Intonation','ИК-1, ИК-2, ИК-3','wave'],
['alpha','Alphabet','Lettres et sons','type'],
['scramble','Anagrammes','Remets les lettres','type'],
['blitz','Éclair','60 secondes','fire'],
['tf','Vrai ou faux','Image et mot','img'],
['poss','мой, моя, моё…','Possessifs','layers'],
['exam','Examen','Écris tout de mémoire','pen'],
['dlg','Dialogue','À mémoriser (ex. 24)','chat'],
['conj','Conjugaison','Verbes en -ать','blocks']
];
function buildMode(id,p){
  const pool=shuf(poolFor(p));const q=[];
  const lp=/^l\d$/.test(p)?+p[1]:0;
  const sp=SENT.filter(s=>!lp||s.L===lp);
  if(id==='recog'){const T=['img2ru','ru2img','fr2ru','ru2fr'].concat(audioOK?['listen2ru']:[]);pool.slice(0,12).forEach(w=>q.push({t:T[(Math.random()*T.length)|0],key:w.k,w}))}
  else if(id==='write')pool.slice(0,8).forEach(w=>q.push({t:'typeru',key:w.k,w}));
  else if(id==='dict')pool.slice(0,8).forEach(w=>q.push({t:'dictee',key:w.k,w}));
  else if(id==='pairs'){for(let i=0;i<3;i++){const g=shuf(pool.filter(w=>IMG[w.pk])).slice(i*6,i*6+6);if(g.length>=4)q.push({t:'pairs',ws:g})}}
  else if(id==='genre')shuf(pool.filter(w=>w.g&&w.g!=='pl')).slice(0,12).forEach(w=>q.push({t:'genre',key:w.k,w}));
  else if(id==='build')shuf(sp).slice(0,8).forEach(s=>q.push({t:'build',key:s.key,s}));
  else if(id==='ik')shuf(sp.filter(s=>s.ik>0)).slice(0,10).forEach(s=>q.push({t:'ik',s}));
  else if(id==='scramble')pool.filter(w=>norm(w.ru).length>=3&&norm(w.ru).length<=11).slice(0,8).forEach(w=>q.push({t:'scramble',key:w.k,w}));
  else if(id==='blitz'){if(pool.length>=4)q.push({t:'blitz',pool})}
  else if(id==='tf')shuf(pool.filter(w=>IMG[w.pk])).slice(0,12).forEach(w=>q.push({t:'tf',key:w.k,w}));
  else if(id==='poss'){const ns=pool.filter(w=>w.g);const ps=['мой','твой','наш','ваш'];ns.slice(0,12).forEach(w=>q.push({t:'poss',w,p:pick(ps)}))}
  else if(id==='exam'){pool.slice(0,10).forEach(w=>q.push({t:'typeru',key:w.k,w}));shuf(sp).slice(0,3).forEach(x=>q.push({t:'build',key:x.key,s:x,ens:true}))}
  else if(id==='conj'){
    q.push({t:'cintro'});
    shuf(CONJ.slice()).forEach(v=>{const ps=shuf([0,1,2,3,4,5]);q.push({t:'cintro',v});q.push({t:'cchoose',v,p:ps[0]});q.push({t:'cchoose',v,p:ps[1]});q.push({t:'cend',v,p:ps[2]});q.push({t:'ctype',v,p:ps[3]})});
    shuf(CONJF.slice()).slice(0,6).forEach(c=>q.push({t:'cfill',c}));
    shuf(CONJ.slice()).slice(0,3).forEach(v=>q.push({t:'ctable',v}));
    shuf(CONJ.slice()).forEach((v,i)=>q.push({t:'cimp',v,pl:i%2===1}));
    shuf(CONJ.slice()).slice(0,2).forEach(v=>q.push({t:'ctype',v,p:(Math.random()*6)|0}));
  }
  else if(id==='dlg'){const D=DIALOGS.find(d=>d[3]==='mem');if(D){const L=D[2].map(l=>({ru:l[0].replace(/^[—-]\s*/,''),fr:l[1].replace(/^[—-]\s*/,'')}));
    q.push({t:'dread',L,title:D[0]});
    L.forEach((l,i)=>{if(i)q.push({t:'dnext',L,i})});
    L.forEach((l,i)=>q.push({t:'build',nodist:true,s:{id:-1,ru:l.ru,fr:l.fr,toks:l.ru.split(/\s+/)},prev:i?L[i-1].ru:null,prevFr:i?L[i-1].fr:null}));
    q.push({t:'dorder',D})}}
  else if(id==='alpha')shuf(LET.filter(l=>l.book&&l.U!=='Ь')).slice(0,12).forEach((l,i)=>q.push({t:i%2?'soundLtr':'ltrSound',L:l}));
  return q;
}

/* ===== vues, routeur, événements ===== */
const TABS=[['today','Aujourd’hui','home'],['alphabet','Alphabet','type'],['lessons','Leçons','book'],['phrases','Phrases','chat'],['words','Dico','list']];
let V='today',WF={q:'',f:'all'},hideFr=true;
function toast(t){const e=$('#toast');e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,2200)}
function updateHeader(){
  $('#chStreak').innerHTML=ico('fire')+streak();
  $('#chXp').textContent=(S.days[dkey()]||0)+' pts';
}
function drawTabs(){$('#tabs').innerHTML=TABS.map(t=>`<button class="tab" data-act="tab" data-v="${t[0]}" ${V===t[0]?'aria-current="page"':''}>${ico(t[2])}<span>${t[1]}</span></button>`).join('')}
function go(v){V=v;try{if(location.hash!=='#'+v)history.replaceState(null,'','#'+v)}catch(e){}drawTabs();renderView();window.scrollTo(0,0)}
function renderView(){$('#view').innerHTML=VIEWS[V]();$$('.search',$('#view')).forEach(i=>{i.oninput=()=>{WF.q=i.value;const p=i.selectionStart;$('#wlist').innerHTML=wordList()}});updateHeader()}
function openSheet(h){$('#sheet').innerHTML=h;$('#sheetbg').hidden=false;document.body.classList.add('lock')}
function closeSheet(){$('#sheetbg').hidden=true;if($('#run').hidden)document.body.classList.remove('lock')}

const wchip=w=>`<button class="wchip" data-act="word" data-k="${w.k}"><span class="ru">${ru(w.ru)}</span></button>`;
const exi=e=>`<button class="exi" data-say="${esc(e[0])}"><span class="ru">${ru(e[0])}</span><span><small>${esc(e[1])}</small><small>${esc(e[2])}</small></span></button>`;

const VIEWS={};
VIEWS.today=()=>{
  const st=stats(),xp=S.days[dkey()]||0,goal=S.set.goal,p=Math.min(1,xp/goal),C=2*Math.PI*42;
  const due=st.due,nl=Math.min(newLeft(),st.unseen);
  const n=Math.min(due,14)+nl;
  const wk=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);wk.push([d.toLocaleDateString('fr-FR',{weekday:'narrow'}),S.days[dkey(d)]||0])}
  const mx=Math.max(goal,...wk.map(x=>x[1]));
  const tip=TIPS[(Math.floor(Date.now()/DAY))%TIPS.length];
  const done=xp>=goal;
  const F=S.set.focus;
  const lessonCards=[1,2,3,4].map(L=>{const x=lessonStats(L);const pct=Math.round((x.sol+x.fam)/x.total*100);return `<button class="mode" data-act="focus" data-l="${L}" style="${F===L?'border-color:var(--blue);background:var(--blue-soft)':''}" aria-pressed="${F===L}"><b>Leçon ${L}</b><span>${x.seen}/${x.total} mots vus</span><div class="meter" style="height:8px;margin-top:4px"><i style="width:${x.sol/x.total*100}%;background:var(--green)"></i><i style="width:${x.fam/x.total*100}%;background:var(--blue)"></i><i style="width:${(x.seen-x.sol-x.fam)/x.total*100}%;background:var(--amber)"></i></div></button>`}).join('');
  const fl=typeof F==='number'?lessonStats(F):null;
  const per=fl&&fl.left?Math.ceil(fl.left/5):0;
  const plan=fl&&fl.left?`<div class="card flat small"><b>Plan pour la leçon ${F}</b><br>Il te reste ${fl.left} mots à découvrir. Pour tout voir en 5 jours et garder 2 jours de révision : <b>${per} mots par jour</b>.${S.set.np!==per?`<div style="margin-top:8px"><button class="btn soft" data-act="np" data-n="${per}">Mettre ${per} mots par jour</button></div>`:` Réglé sur ${per} par jour.`}</div>`:'';
  return `<section class="sec"><div class="card hero"><div class="ring"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" fill="none" stroke="var(--line)" stroke-width="9"/><circle cx="50" cy="50" r="42" fill="none" stroke="${done?'var(--green)':'var(--blue)'}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-p)}"/></svg><div class="num">${xp}<small>/ ${goal} pts</small></div></div><div><h1>${done?'Objectif atteint':'Séance du jour'}</h1><p class="muted small">${st.seen} mots vus sur ${st.total}. ${due?`${due} à réviser.`:'Rien à réviser pour le moment.'}</p></div></div>
  <button class="btn block" data-act="daily" ${n?'':'disabled'}>${n?`Commencer la séance`:'Rien pour aujourd’hui'}</button>
  ${F===3||F==='all'?`<button class="btn soft block" data-act="mode" data-m="dlg" data-p="l3">Dialogue à mémoriser (exercice 24)</button>`:''}
  ${F===4||F==='all'?`<button class="btn soft block" data-act="mode" data-m="conj" data-p="l4">Conjugaison : maîtriser les verbes</button>`:''}
  ${typeof F==='number'?`<button class="btn soft block" data-act="learn" data-l="${F}">Apprendre la leçon ${F} (série de 12 mots)</button>`:''}
  ${st.unseen&&nl===0?`<button class="btn soft block" data-act="more">Apprendre 5 mots de plus</button>`:''}
  </section>
  <section class="sec"><h2>Leçon en cours</h2><div class="modes" style="grid-template-columns:repeat(2,1fr)">${lessonCards}<button class="mode" data-act="focus" data-l="all" style="grid-column:1/-1;${F==='all'?'border-color:var(--blue);background:var(--blue-soft)':''}"><b>Toutes les leçons</b><span>Mélanger</span></button></div>${plan}</section>
  <section class="sec"><h2>Tes mots</h2><div class="card"><div class="stats"><div class="stat"><b>${st.unseen}</b><span>nouveaux</span></div><div class="stat"><b>${st.learn}</b><span>en cours</span></div><div class="stat"><b>${st.fam}</b><span>connus</span></div><div class="stat"><b>${st.sol}</b><span>solides</span></div></div><div class="meter" style="margin-top:12px" role="img" aria-label="Progression"><i style="width:${st.sol/st.total*100}%;background:var(--green)"></i><i style="width:${st.fam/st.total*100}%;background:var(--blue)"></i><i style="width:${st.learn/st.total*100}%;background:var(--amber)"></i></div><div class="legend"><span style="--c:var(--green)">solides</span><span style="--c:var(--blue)">connus</span><span style="--c:var(--amber)">en cours</span></div></div></section>
  <section class="sec"><h2>S’entraîner</h2><div class="modes">${MODES.filter(m=>(m[0]!=='dict'||audioOK)&&(m[0]!=='dlg'||F===3||F==='all')&&(m[0]!=='conj'||F===4||F==='all')).map(m=>`<button class="mode" data-act="mode" data-m="${m[0]}">${ico(m[3])}<b>${m[1]}</b><span>${m[2]}</span></button>`).join('')}</div>
  <div class="seg" role="group" aria-label="Portée">${[['l4','Leçon 4'],['l3','Leçon 3'],['l2','Leçon 2'],['l1','Leçon 1'],['all','Tout'],['weak','Mes points faibles']].map(x=>`<button data-act="pool" data-p="${x[0]}" aria-pressed="${POOL===x[0]}">${x[1]}</button>`).join('')}</div></section>
  <section class="sec"><h2>7 derniers jours</h2><div class="card"><div class="week">${wk.map(x=>`<div><i class="${x[1]?'':'z'}" style="height:${Math.max(4,x[1]/mx*60)}px"></i><span>${x[0]}</span></div>`).join('')}</div></div></section>
  <section class="sec"><div class="card flat small"><b>Pourquoi ces jeux marchent</b><ul style="margin:6px 0 0;padding-left:18px"><li><b>Se tester</b> : essayer de retrouver le mot fixe mieux que relire. Les exercices te demandent toujours de produire la réponse.</li><li><b>Répéter à intervalles croissants</b> : un mot réussi revient après 1, 2, 4, 8 puis 16 jours. Un mot raté revient dans 10 minutes.</li><li><b>Image et mot ensemble</b> : la photo donne un deuxième chemin vers le mot.</li><li><b>Écrire et écouter</b> : le clavier russe, la dictée et les anagrammes entraînent l’orthographe.</li><li><b>Mélanger les exercices</b> : changer de jeu rend l’apprentissage plus lent mais plus durable.</li></ul></div></section>
  <section class="sec"><div class="tip"><b>Astuce.</b> ${esc(tip)}</div>
  <div class="card flat small"><b>Pour ton prof</b><br>Connaître tous les mots et savoir les écrire : mode <i>Écrire</i> et <i>Dictée</i>. Écrire des phrases avec les mots : mode <i>Phrases</i>. Écrire les réponses : les exercices avec clavier russe.</div></section>`;
};
let POOL='all';
VIEWS.alphabet=()=>`<section class="sec"><h2>L’alphabet russe</h2><p class="lead">Touche une lettre pour l’écouter et voir un exemple. Les lettres en pointillés ne sont pas encore dans ton manuel.</p><div class="agrid">${LET.map(l=>`<button class="ltile ${l.book?'':'off'}" data-act="letter" data-i="${l.i}"><span class="ru">${l.U}${l.l}</span><small>${esc(l.snd)}</small></button>`).join('')}</div><button class="btn block" data-act="mode" data-m="alpha">S’entraîner sur les lettres</button></section>`;
VIEWS.lessons=()=>{
  return `<section class="sec"><h2>Les leçons</h2><p class="lead">Les règles de ton manuel, expliquées, avec les mots de chaque leçon.</p>
  ${[4,3,2,1].map(L=>{
    const ORD=['Й :','Я, Ё, Ю','Consonnes dures','Я, е, и','Les pronoms','À chaque pronom','Мой, твой','Его, её','Répondre','Ш devant','Кто ?','Ты ou','Dire non','Où ?','Demander','Ё est','Intonation ИК-4','Tableau des'];
    const oi=r=>{const i=ORD.findIndex(p=>r[0].startsWith(p));return i<0?99:i};
    const rs=RULES.filter(r=>r[1]===L).sort((a,b)=>L===3?oi(a)-oi(b):0),ws=W.filter(w=>w.Ls.includes(L)),mem=L===3?DIALOGS.find(d=>d[3]==='mem'):null;
    return `<details class="les" ${L===4?'open':''}><summary>Leçon ${L}<span class="pill">${ws.length} mots</span><span class="pill g">${lessonStats(L).sol+lessonStats(L).fam} connus</span></summary><div class="les-in">
    ${mem?`<div class="card flat"><span class="pill r">À mémoriser</span> <b>${esc(mem[0].replace('À mémoriser : ',''))}</b><p class="small muted">Ton cahier indique « à mémoriser » pour ce dialogue de l’exercice 24.</p><button class="btn block" data-act="mode" data-m="dlg" data-p="l3">Apprendre ce dialogue</button></div>`:''}
    ${L===4?`<div class="card flat"><span class="pill r">Nouveau</span> <b>Jeu de conjugaison</b><p class="small muted">Les verbes en -ать : terminaisons, formes, phrases à compléter, tableau à ranger.</p><button class="btn block" data-act="mode" data-m="conj" data-p="l4">Maîtriser la conjugaison</button></div>`:''}
    ${rs.map(r=>{const m=r[0].match(/ИК-(\d)/);return `<div class="rule"><h3>${esc(r[0])}</h3>${m?contour(+m[1]):''}<p>${esc(r[2])}</p><div class="ex">${r[3].map(exi).join('')}</div></div>`}).join('')}
    <div class="rule"><h3>Mots de la leçon ${L}</h3><div class="words-inline">${ws.map(wchip).join('')}</div></div>
    <button class="btn block" data-act="learn" data-l="${L}">Apprendre la leçon ${L}</button><button class="btn soft block" data-act="mode" data-m="recog" data-p="l${L}">Réviser la leçon ${L}</button><button class="btn ghost block" data-act="mode" data-m="exam" data-p="l${L}">Examen de la leçon ${L}</button></div></details>`}).join('')}</section>`;
};
VIEWS.phrases=()=>{
  return `<section class="sec"><h2>Phrases et dialogues</h2><div class="row"><label class="tgl"><input type="checkbox" id="hf" ${hideFr?'checked':''} data-act="hf"> Cacher le français</label></div>
  <button class="btn block" data-act="mode" data-m="build">Construire des phrases</button>
  <div class="sec" style="margin-top:6px"><h2>Dialogues</h2>${DIALOGS.slice().sort((a,b)=>(b[3]==='mem')-(a[3]==='mem')).map(d=>`<div class="card dlg ${hideFr?'hide-fr':''}"><b>${esc(d[0])}</b> <span class="pill">Leçon ${d[1]}</span>${d[3]==='mem'?' <span class="pill r">À mémoriser</span>':''}${d[2].map(l=>`<div class="ln"><div><div class="ru">${ru(l[0])}</div><div class="fr small muted" data-act="showfr">${esc(l[1])}</div></div>${spk(l[0])}</div>`).join('')}</div>`).join('')}</div>
  <div class="sec"><h2>Phrases</h2><div class="${hideFr?'hide-fr':''}" style="display:grid;gap:8px">${SENT.map(s=>`<div class="sline"><div><div class="ru">${ru(s.ru)}</div><div class="fr" data-act="showfr">${esc(s.fr)}</div></div>${spk(s.ru)}</div>`).join('')}</div></div></section>`;
};
const CATS=[...new Set(W.map(w=>w.cat))];
const dfold=t=>t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ё/g,'е').replace(/[’']/g,"'");
function wordList(){
  const q=norm(WF.q),qf=dfold(WF.q.trim());
  let L=W.filter(w=>{
    if(/^l\d$/.test(WF.f)&&!w.Ls.includes(+WF.f[1]))return false;
    if(q||qf){return (q&&norm(w.ru).includes(q))||dfold(w.fr).includes(qf)||(w.pr&&dfold(w.pr).includes(qf))}
    return true;
  });
  const byFr=WF.s==='fr';
  const key=w=>byFr?dfold(w.fr):w.pk.toLowerCase();
  L.sort((a,b)=>key(a).localeCompare(key(b),byFr?'fr':'ru'));
  WF.cnt=L.length+' mot'+(L.length>1?'s':'')+' · leçons 1 à 4';const cnt=document.getElementById('dcount');if(cnt)cnt.textContent=WF.cnt;
  if(!L.length)return '<p class="muted">Aucun mot trouvé. Ce dictionnaire contient seulement les mots vus dans les leçons.</p>';
  let out='',last='';
  L.forEach(w=>{
    const h=(byFr?dfold(w.fr)[0]:w.pk[0]).toUpperCase();
    if(h!==last&&!(q||qf)){last=h;out+=`<div class="small muted" style="font-weight:800;margin-top:6px">${esc(h)}</div>`}
    out+=`<button class="wi" data-act="word" data-k="${w.k}" style="grid-template-columns:1fr auto"><span class="t"><span class="ru">${ru(w.ru)}</span> <small style="display:inline;color:var(--muted)">[ ${esc(w.pr)} ]</small><small style="font-size:15px;color:var(--ink);font-weight:700">${esc(w.fr)}</small></span><span class="small muted">${w.g&&w.g!=='pl'?w.g+' · ':w.g==='pl'?'pl. · ':''}L${w.Ls.join('+')}</span></button>`;
  });
  return out;
}
VIEWS.words=()=>{
  const WL=wordList();const F=[['all','Toutes'],['l1','Leçon 1'],['l2','Leçon 2'],['l3','Leçon 3'],['l4','Leçon 4']];
  return `<section class="sec"><h2>Dictionnaire</h2><p class="small muted" id="dcount">${WF.cnt||''}</p><input class="search" type="search" placeholder="Tape un mot en russe ou en français" value="${esc(WF.q)}" aria-label="Chercher" autocomplete="off" autocapitalize="none" spellcheck="false"><div class="filters">${F.map(f=>`<button class="fchip" data-act="filt" data-f="${f[0]}" aria-pressed="${WF.f===f[0]}">${f[1]}</button>`).join('')}<button class="fchip" data-act="dsort" aria-pressed="false">${WF.s==='fr'?'Tri : français':'Tri : русский'}</button></div><div class="wl" id="wlist">${WL}</div></section>`;
};
function wordSheet(k){
  const w=BYK[k];if(!w)return;const c=S.cards[k];
  const ss=SENT.filter(s=>s.keys.includes(k)).slice(0,8);
  openSheet(`<div class="hd"><h2>${esc(w.cat)}</h2><button class="iconbtn" data-act="close" aria-label="Fermer">${ico('x')}</button></div><div class="detail">${pic(w)}<div class="big ru">${ru(w.ru)}</div><div class="pr">[ ${esc(w.pr)} ]</div><div class="mid" style="font-size:26px;font-weight:800">${esc(w.fr)}</div><div class="row">${spk(w.ru)}${spk(w.ru,true)}</div>${w.mn?`<div class="mn">${esc(w.mn)}</div>`:''}<div class="tags"><span class="pill">Leçon ${w.Ls.join(' et ')}</span>${w.g?`<span class="pill">${w.g==='pl'?'pluriel':w.g}</span>`:''}<span class="pill ${c?'g':''}">${c?'vu '+c.n+' fois':'pas encore vu'}</span></div>${(()=>{const cv=typeof CONJ!=='undefined'&&CONJ.find(x=>strip(x.inf)===k);return cv?`<div class="card flat">${CPRON.map((p,i)=>`<div class="ln" style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><span class="ru" style="font-size:20px">${p}</span> ${cform(cv,i)}<div class="small muted">${esc(cv.frf[i])}</div></div>${spk(cv.f[i])}</div>`).join('')}</div>`:''})()}${ss.map(s=>`<button class="exi" data-say="${esc(s.ru)}" style="width:100%"><span class="ru">${ru(s.ru)}</span><small>${esc(s.fr)}</small></button>`).join('')}</div>`);
}
function letterSheet(i){
  const l=LET[i];const e=l.ex;
  openSheet(`<div class="hd"><h2>${esc(l.name)}</h2><button class="iconbtn" data-act="close" aria-label="Fermer">${ico('x')}</button></div><div class="detail"><div class="big ru">${l.U} ${l.l}</div><div class="row">${spk(l.name)}</div><div class="mid" style="font-size:24px;font-weight:800">${esc(l.snd)}</div><p>${esc(l.tip)}</p>${e&&e.ru?`<button class="exi" data-say="${esc(e.ru)}"><span style="font-size:30px">${e.em||''}</span><span class="ru">${ru(e.ru)}</span><small>${esc(e.fr)}</small></button>`:''}${l.book?'':'<p class="pill a">Pas encore dans ton manuel</p>'}</div>`);
}
function settingsSheet(){
  const s=S.set,sg=(key,vals,fmt)=>`<div class="seg">${vals.map(v=>`<button data-act="set" data-key="${key}" data-v="${v}" aria-pressed="${s[key]===v}">${fmt?fmt(v):v}</button>`).join('')}</div>`;
  const tg=(key,l)=>`<div class="seg"><button data-act="set" data-key="${key}" data-v="1" aria-pressed="${!!s[key]}">Oui</button><button data-act="set" data-key="${key}" data-v="0" aria-pressed="${!s[key]}">Non</button></div>`;
  openSheet(`<div class="hd"><h2>Réglages</h2><button class="iconbtn" data-act="close" aria-label="Fermer">${ico('x')}</button></div>
  <div class="setrow"><b>Objectif du jour (points)</b>${sg('goal',[20,50,100,200])}</div>
  <div class="setrow"><b>Nouveaux mots par jour</b>${sg('np',[5,8,12,15,20,30])}</div>
  <div class="setrow"><b>Écriture manuscrite</b>${tg('hand')}</div>
  <div class="setrow"><b>Prononciation en lettres latines</b>${tg('pr')}</div>
  <div class="setrow"><b>Lire les mots à voix haute automatiquement</b>${tg('auto')}</div>
  <div class="setrow"><b>Voix lente</b>${tg('slow')}</div>
  <p class="small muted">La voix est une voix de machine : vérifie la prononciation avec ton professeur. Ta progression est enregistrée sur cet appareil (dans ce navigateur). Pour la garder ou la passer sur un autre appareil, utilise la sauvegarde.</p>
  <p class="small muted"><a href="credits.html" target="_blank" rel="noopener">Crédits des photos</a></p>
  <div class="row" style="margin-bottom:10px"><button class="btn ghost grow" data-act="export">Sauvegarder</button><button class="btn ghost grow" data-act="import">Restaurer</button></div>
  <input type="file" id="impf" accept=".json,application/json" hidden>
  <button class="btn ghost block" data-act="reset">Effacer ma progression</button>`);
}
function applySettings(){document.body.classList.toggle('print',!S.set.hand)}

let resetArm=0;
document.addEventListener('click',e=>{
  const sayEl=e.target.closest('[data-say]');
  if(sayEl){const t=sayEl.dataset.say;if(t){say(t,sayEl.dataset.slow?true:null)}return}
  const a=e.target.closest('[data-act]');if(!a)return;
  const act=a.dataset.act;
  switch(act){
    case 'tab':go(a.dataset.v);break;
    case 'daily':{const q=buildDaily(0);if(q.length)startRun(q,'Séance du jour',false)}break;
    case 'more':{const q=buildDaily(5);if(q.length)startRun(q,'Mots de plus',false)}break;
    case 'focus':{const l=a.dataset.l;S.set.focus=l==='all'?'all':+l;POOL=l==='all'?'all':'l'+l;save();renderView()}break;
    case 'np':S.set.np=+a.dataset.n;save();renderView();toast(a.dataset.n+' mots par jour');break;
    case 'learn':{const L=+a.dataset.l;const q=buildLesson(L);if(!q.length){toast('Rien à apprendre ici');break}startRun(q,'Leçon '+L,()=>{const q2=buildLesson(L);if(q2.length)startRun(q2,'Leçon '+L,true)})}break;
    case 'pool':POOL=a.dataset.p;renderView();break;
    case 'mode':{const p=a.dataset.p||POOL,id=a.dataset.m;const q=buildMode(id,p);if(!q.length){toast('Pas assez de mots pour ce mode');break}startRun(q,(MODES.find(m=>m[0]===id)||[0,''])[1],()=>{const q2=buildMode(id,p);if(q2.length)startRun(q2,(MODES.find(m=>m[0]===id)||[0,''])[1],true)})}break;
    case 'again':if(typeof R.again==='function')R.again();break;
    case 'end':closeRun();break;
    case 'word':wordSheet(a.dataset.k);break;
    case 'letter':letterSheet(+a.dataset.i);break;
    case 'close':closeSheet();break;
    case 'settings':settingsSheet();break;
    case 'export':{const b=new Blob([JSON.stringify(S)],{type:'application/json'});const u=URL.createObjectURL(b);const l=document.createElement('a');l.href=u;l.download='progression-russe-'+dkey()+'.json';document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),2000);toast('Sauvegarde téléchargée')}break;
    case 'import':{const f=$('#impf');f.onchange=()=>{const fl=f.files[0];if(!fl)return;const r=new FileReader();r.onload=()=>{try{const o=JSON.parse(r.result);if(!o||typeof o!=='object'||!o.cards)throw 0;S=normalizeState(o);save();applySettings();closeSheet&&closeSheet();renderView();toast('Progression restaurée')}catch(e){toast('Fichier non valide')}};r.readAsText(fl)};f.click()}break;
    case 'set':{const k=a.dataset.key,v=a.dataset.v;S.set[k]=(['goal','np'].includes(k))?+v:v==='1';save();applySettings();settingsSheet();renderView()}break;
    case 'filt':WF.f=a.dataset.f;renderView();break;
    case 'dsort':WF.s=WF.s==='fr'?'ru':'fr';renderView();break;
    case 'hf':hideFr=a.checked;renderView();break;
    case 'showfr':if(hideFr)a.classList.toggle('on');break;
    case 'reset':if(resetArm>Date.now()){S=normalizeState(null);save();closeSheet();renderView();toast('Progression effacée')}else{resetArm=Date.now()+4000;a.textContent='Touche encore pour confirmer'}break;
  }
});
$('#sheetbg').addEventListener('click',e=>{if(e.target.id==='sheetbg')closeSheet()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('#sheetbg').hidden)closeSheet();else if(!$('#run').hidden)closeRun()}});
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(VIEWS[h]&&h!==V){V=h;drawTabs();renderView()}});

/* ----- démarrage ----- */
function init(){
  const l=loadLocal();S=normalizeState(l);if(!l)migrateOld();
  applySettings();
  $$('[data-act=settings]').forEach(b=>b.innerHTML=ico('gear'));
  $$('[data-act=end]').forEach(b=>b.innerHTML=ico('x'));
  POOL=S.set.focus==='all'?'all':'l'+S.set.focus;
  const h=location.hash.slice(1);if(VIEWS[h])V=h;
  drawTabs();renderView();
  initAudio();
}
init();

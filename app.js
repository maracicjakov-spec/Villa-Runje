/* ==========================================================================
   VILLA RUNJE — site script
   1. CONFIG    — edit before launch
   2. I18N      — HR / DE / IT (English lives in index.html)
   3. GALLERY   — photo list, categories, captions
   4. Behaviour — language, nav, reveals, day stepper, gallery, lightbox, forms
   ========================================================================== */

/* -------------------------------------------------------------------------
   1. CONFIG
   ------------------------------------------------------------------------- */
const CONFIG = {
  airbnbId: '5734401',
  airbnbHosts: { en: 'www.airbnb.com', hr: 'hr.airbnb.com', de: 'www.airbnb.de', it: 'www.airbnb.it' },
  maxGuests: 7,
  // Direct inquiries — fill ONE of these before launch, otherwise the form
  // honestly tells visitors that direct inquiries are not connected yet.
  formEndpoint: '',   // e.g. 'https://formspree.io/f/xxxxxxx' (JSON POST)
  inquiryEmail: '',   // e.g. 'owner@example.com' (opens the visitor's mail app)
  mapQuery: 'Gornje Sitno, Croatia'
};

/* -------------------------------------------------------------------------
   2. I18N
   ------------------------------------------------------------------------- */
const META = {
  en: { title: 'Villa Runje — Stone villa with heated pool above Split, Croatia', desc: 'Villa Runje is a hand-built stone villa in Gornje Sitno, 600 m above Split, with a private heated 36 m² pool, hot tub and views over the Adriatic and its islands. 3 bedrooms, up to 7 guests.' },
  hr: { title: 'Villa Runje — kamena vila s grijanim bazenom iznad Splita', desc: 'Villa Runje je kamena vila u Gornjem Sitnom, 600 m iznad Splita, s privatnim grijanim bazenom od 36 m², hidromasažnom kadom i pogledom na Jadran i otoke. 3 spavaće sobe, do 7 gostiju.' },
  de: { title: 'Villa Runje — Steinvilla mit beheiztem Pool oberhalb von Split', desc: 'Villa Runje ist eine handgebaute Steinvilla in Gornje Sitno, 600 m über Split, mit privatem beheiztem 36-m²-Pool, Whirlpool und Blick auf die Adria und die Inseln. 3 Schlafzimmer, bis zu 7 Gäste.' },
  it: { title: 'Villa Runje — villa in pietra con piscina riscaldata sopra Spalato', desc: 'Villa Runje è una villa in pietra costruita a mano a Gornje Sitno, 600 m sopra Spalato, con piscina privata riscaldata di 36 m², vasca idromassaggio e vista sull’Adriatico e sulle isole. 3 camere, fino a 7 ospiti.' }
};

const I18N = {
  hr: {
    'a11y.skip': 'Preskoči na sadržaj',
    'nav.villa': 'Vila', 'nav.gallery': 'Galerija', 'nav.amenities': 'Sadržaji', 'nav.location': 'Lokacija', 'nav.contact': 'Kontakt',
    'nav.book': 'Rezervirajte boravak', 'nav.menu': 'Izbornik',
    'cta.check': 'Provjerite dostupnost', 'cta.explore': 'Upoznajte vilu', 'cta.contact': 'Kontaktirajte nas',
    'hero.alt': 'Grijani bazen i hidromasažna kada Ville Runje na kamenoj terasi, s Jadranom i otocima u daljini',
    'hero.eyebrow': 'Gornje Sitno · Dalmacija · 600 m iznad mora',
    'hero.t1': 'Gdje se dalmatinska baština', 'hero.t2': 'susreće s <em>bezvremenskim luksuzom</em>',
    'hero.lead': 'Otkrijte ljepotu autentičnog dalmatinskog života u mirnom okruženju Ville Runje.',
    'hero.scroll': 'Dalje',
    'fact.guests': 'Gostiju', 'fact.bedrooms': 'Spavaće sobe', 'fact.baths': 'Kupaonice', 'fact.pool': 'Grijani bazen',
    'intro.alt': 'Kamena kuća s vanjskim stubištem, pergolom i vrtom', 'intro.alt2': 'Ručno izrađen kameni izljev vode u bazen u sumrak',
    'intro.cap': 'Kamen po kamen, sagradio ju je vlasnik vlastitim rukama',
    'intro.eyebrow': 'Dobro došli u Villu Runje',
    'intro.title': 'Utočište od kamena, <em>sunca</em> i mira',
    'intro.p1': 'Visoko u brdima iznad Splita, oko 600 metara nad morem, Villa Runje gleda na Jadran, otoke i grad podno sebe. To je kamena kuća koju je vlasnik sagradio vlastitim rukama — privatna i tiha, s čistim planinskim zrakom i nebom punim zvijezda.',
    'intro.p2': 'Cijela je vila samo vaša: grijani bazen i hidromasažna kada, natkrivena terasa stvorena za duge večere, vrt sa sezonskim povrćem i malo selo koje još živi svojim ritmom — a Split je udaljen tek dvadesetak minuta vožnje.',
    'mark.pool': 'Privatni grijani bazen', 'mark.tub': 'Jacuzzi s pogledom na more', 'mark.tub.s': 'uz sam bazen',
    'mark.stone': 'Dalmatinska kamena gradnja', 'mark.stone.s': 'ručno građena',
    'mark.view': 'Pogled na Split i otoke', 'mark.view.s': '≈ 600 m n/v',
    'mark.quiet': 'Mirno seosko okruženje', 'mark.quiet.s': 'ograđeno i privatno',
    'rating.chip': '25 recenzija na Airbnbu · Omiljeno među gostima · Superhost',
    'show.alt1': 'Osvijetljeni bazen u sumrak, s planinom iza i obalom ispod', 'show.alt2': 'Otvoreni prozor spavaće sobe uokviruje brda i more', 'show.alt3': 'Večera postavljena na natkrivenoj terasi u plavi sat',
    'show.c1': 'Umijeće usporavanja', 'show.c2': 'Jutra koja se pamte', 'show.c3': 'Autentičan mediteranski život',
    'day.eyebrow': 'Od prvog svjetla do svjetala grada',
    'day.title': 'Dan na <em>šest stotina</em> metara',
    'day.s1.k': 'Jutro', 'day.s1.t': 'Doručak iz vrta',
    'day.s1.p': 'Rano ujutro vlasnik u ekološkom vrtu pokraj kuće bere sezonsko povrće i ostavlja ga na vašem stolu — besplatno. Espresso iz aparata i doručak pod drvenim gredama natkrivene terase.',
    'day.s1.alt': 'Doručak postavljen na natkrivenoj terasi s pogledom na brda',
    'day.s2.k': 'Podne', 'day.s2.t': 'Bazen samo za vas',
    'day.s2.p': 'Privatni grijani bazen od 36 m² sa šest ležaljki i tri viseće stolice, Jadran na horizontu i nitko s kim ga morate dijeliti.',
    'day.s2.alt': 'Ležaljke i viseća stolica na terasi bazena po jakom suncu',
    'day.s3.k': 'Poslijepodne', 'day.s3.t': 'Hlad, mreža za ljuljanje, planina',
    'day.s3.p': 'Ljuljajte se u mreži na natkrivenoj terasi — ili krenite planinarskom stazom koja počinje odmah iznad vile. Slobodno penjanje i brdski biciklizam počinju na pragu.',
    'day.s3.alt': 'Mreža za ljuljanje u hladu kamene terase',
    'day.s4.k': 'Zalazak', 'day.s4.t': 'Zlatni sat',
    'day.s4.p': 'S terase bazena i s terase uz spavaće sobe sunce zalazi nad morem i otocima. Gosti dolaze zbog bazena — a pamte zalaske.',
    'day.s4.alt': 'Bazen i stara maslina u sjaju nakon zalaska sunca',
    'day.s5.k': 'Noć', 'day.s5.t': 'Split u svjetlima, duboko ispod',
    'day.s5.p': 'Uronite u jacuzzi dok se uz obalu pale svjetla grada. Na ovoj visini zrak je čist, a nebo se ispuni zvijezdama.',
    'day.s5.alt': 'Svjetla Splita svjetlucaju ispod osvijetljenog bazena noću',
    'stay.eyebrow': 'Vila', 'stay.title': 'Dvije etaže kamena, <em>drva</em> i svjetla',
    'fig.guests': 'gostiju', 'fig.bedrooms': 'spavaće sobe', 'fig.beds': 'kreveta, uklj. kauč na razvlačenje', 'fig.baths': 'kupaonice',
    'sp1.alt': 'Otvoreni prostor za blagovanje i dnevni boravak sa zavojitim stubištem i kamenim kaminom', 'sp1.alt2': 'Potpuno opremljena kuhinja s kremastim elementima i pločicama boje terakote',
    'sp1.t': 'Prizemlje — život oko kamina',
    'sp1.p': 'Otvoren, sunčan prostor u kojem se kuhanje, blagovanje i odmor prirodno spajaju, s panoramskim prozorima i izravnim izlazom na natkrivenu terasu.',
    'sp1.l1': 'Dnevni boravak s kaučem na razvlačenje, kamenim kaminom i TV-om',
    'sp1.l2': 'Blagovaonski stol s panoramskim pogledom na Split i more',
    'sp1.l3': 'Klimatizirana kuhinja s ledomatom, espresso aparatom, perilicom posuđa i pećnicom',
    'sp1.l4': 'Kupaonica s tušem i perilicom rublja',
    'sp2.alt': 'Svijetla spavaća soba s bračnim krevetom, drvenim podom i zelenim škurama', 'sp2.alt2': 'Treća spavaća soba s drvenim krevetom na kat',
    'sp2.t': 'Kat — spavaće sobe iznad bazena',
    'sp2.p': 'Tri mirne spavaće sobe s drvenim podovima i prozorima prema brdima, te terasa za zalazak sunca.',
    'sp2.l1': 'Soba 1 — bračni krevet, klima-uređaj, pogled na bazen',
    'sp2.l2': 'Soba 2 — bračni krevet, klima-uređaj, pogled na more',
    'sp2.l3': 'Soba 3 — krevet na kat',
    'sp2.l4': 'Kupaonica s tušem i terasa uz spavaće sobe',
    'sp3.alt': 'Natkrivena kamena terasa s dugim stolom i pogledom na planinu', 'sp3.alt2': 'Dječje igralište s ljuljačkom i toboganom na travnjaku',
    'sp3.t': 'Vani — srce kuće',
    'sp3.p': 'Između bazena i dnevnog boravka smjestila se natkrivena terasa s masivnim drvenim stolom — gdje doručci prelaze u ručkove, a večere traju do kasno u noć.',
    'sp3.l1': 'Natkrivena terasa za blagovanje i mreža za ljuljanje',
    'sp3.l2': 'Tradicionalno dalmatinsko vanjsko ognjište za roštilj',
    'sp3.l3': 'Igralište s ljuljačkom, toboganom, klackalicom i trampolinom te mreža za badminton ili odbojku',
    'sp3.l4': 'Ekološki vrt s povrćem, dva osigurana parkirna mjesta, potpuno ograđeno',
    'pool.alt': 'Privatni bazen uokviren vrtom, s morem na horizontu',
    'pool.eyebrow': 'Privatni bazen', 'pool.title': 'Dani ispunjeni <em>suncem</em>',
    'pool.lead': 'Opustite se, ponovno se povežite i prepustite sporijem ritmu mediteranskog života.',
    'pool.s1': 'privatni bazen', 'pool.s2b': 'Grijan', 'pool.s2': 'za proljeće i jesen', 'pool.s3b': 'Jacuzzi', 'pool.s3': 's pogledom na Split', 'pool.s4': 'ležaljki i visećih stolica',
    'pool.note': 'Grijanje najviše znači u travnju, svibnju, rujnu i listopadu. Kako domaćini napominju, temperatura vode ovisi o vremenu i ne može se jamčiti.',
    'gal.eyebrow': 'Galerija', 'gal.title': 'Svaki kutak, <em>baš kakav jest</em>', 'gal.filter': 'Filtriraj fotografije',
    'gal.all': 'Sve', 'gal.pool': 'Bazen', 'gal.exterior': 'Eksterijer', 'gal.interior': 'Interijer', 'gal.bedrooms': 'Spavaće sobe', 'gal.outdoor': 'Život na otvorenom',
    'gal.more': 'Prikaži sve fotografije', 'gal.view': 'Pogledaj fotografiju',
    'lb.label': 'Preglednik fotografija', 'lb.close': 'Zatvori', 'lb.prev': 'Prethodna fotografija', 'lb.next': 'Sljedeća fotografija',
    'am.eyebrow': 'Sadržaji', 'am.title': 'Sve <em>na svom mjestu</em>', 'am.intro': 'Svaku stavku u nastavku domaćini navode na Airbnb stranici vile.',
    'am.g1': 'Život na otvorenom', 'am.g1.1': 'Privatni grijani bazen', 'am.g1.2': 'Jacuzzi', 'am.g1.3': 'Roštilj — dalmatinsko vanjsko ognjište', 'am.g1.4': 'Natkrivena terasa za blagovanje', 'am.g1.5': 'Dječje igralište', 'am.g1.6': 'Zaseban ulaz', 'am.g1.7': 'Besplatan parking na posjedu',
    'am.g2': 'Udobnost', 'am.g2.1': 'Klima-uređaj', 'am.g2.2': 'Grijanje', 'am.g2.3': 'Kamin u kući', 'am.g2.4': 'Perilica rublja i glačalo', 'am.g2.5': 'Sušilo za kosu', 'am.g2.6': 'Sef', 'am.g2.7': 'Ručnici, posteljina i dodatni jastuci',
    'am.g3': 'Kuhinja', 'am.g3.1': 'Perilica posuđa', 'am.g3.2': 'Pećnica i štednjak', 'am.g3.3': 'Mikrovalna pećnica', 'am.g3.4': 'Hladnjak i zamrzivač', 'am.g3.5': 'Aparat za kavu i kuhalo za vodu', 'am.g3.6': 'Toster', 'am.g3.7': 'Osnovne namirnice za kuhanje',
    'am.g4': 'Povezanost i zabava', 'am.g4.1': 'Wi-Fi', 'am.g4.2': 'TV', 'am.g4.3': 'Igraća konzola',
    'am.g5': 'Obitelj', 'am.g5.1': 'Dječji krevetić', 'am.g5.2': 'Hranilica',
    'am.g6': 'Sigurnost', 'am.g6.1': 'Detektor dima', 'am.g6.2': 'Detektor ugljičnog monoksida', 'am.g6.3': 'Aparat za gašenje požara', 'am.g6.4': 'Prva pomoć',
    'sc.eyebrow': 'Što kažu gosti', 'sc.of': 'od 5', 'sc.meta': '25 recenzija na Airbnbu · Omiljeno među gostima · Superhost', 'sc.read': 'Pročitajte recenzije na Airbnbu',
    'sc.c1': 'Čistoća', 'sc.c2': 'Točnost', 'sc.c3': 'Prijava', 'sc.c4': 'Komunikacija', 'sc.c5': 'Lokacija', 'sc.c6': 'Vrijednost',
    'sc.tags': 'Najčešće spominjano u recenzijama', 'sc.t1': 'Gostoljubivost', 'sc.t2': 'Pogled', 'sc.t3': 'Bazen', 'sc.t4': 'Snalaženje u okolici', 'sc.t5': 'Jacuzzi', 'sc.t6': 'Obitelj',
    'loc.eyebrow': 'Lokacija', 'loc.title': 'Otkrijte dušu <em>Dalmacije</em>',
    'loc.p1': 'Gornje Sitno je malo pastoralno selo u brdima iznad Žrnovnice, na rubu Splita — prijateljsko, tiho i netaknuto.',
    'loc.p2': 'Susjedi prodaju kozje mlijeko, jaja, povrće, voće i vino, a dva restorana s tradicionalnom hranom i mini market udaljeni su pješice. Iznad vile počinju planinarska staza i penjački smjerovi; ispod se otvara cijela srednja Dalmacija.',
    'loc.d1': 'Dioklecijanova palača, stari grad, trajekti za otoke', 'loc.t1': '≈ 20–30 min',
    'loc.n2': 'Plaže', 'loc.d2': 'Šljunčana plaža u Strožancu (Podstrana), pješčane plaže u Omišu',
    'loc.n3': 'Omiš i Cetina', 'loc.d3': 'Rafting, kanu i zip-line iznad kanjona rijeke', 'loc.t3': '≈ 30 min',
    'loc.d4': 'Srednjovjekovni otočni gradić pod zaštitom UNESCO-a', 'loc.t4': '≈ 30 min',
    'loc.n5': 'Slapovi Krke', 'loc.d5': 'Nacionalni park sedrenih slapova', 'loc.t5': '≈ 1,5 h',
    'loc.n6': 'Otok Brač', 'loc.d6': 'Jednodnevni izlet trajektom iz Splita', 'loc.t6': 'izlet',
    'loc.fine': 'Vremena putovanja su približna, prema navodima domaćina, i ovise o prometu i sezoni.',
    'loc.alt': 'Pogled iz zraka na vilu među kućama sela, s obalom i otocima u daljini',
    'loc.pin': 'Split 18 km · ≈ 600 m n/v', 'loc.load': 'Prikaži interaktivnu kartu', 'loc.gmaps': 'Otvori u Google kartama',
    'loc.addr': 'Točnu adresu dobivaju potvrđeni gosti.',
    'bk.eyebrow': 'Rezervacije', 'bk.title': 'Vaš mediteranski bijeg <em>čeka vas</em>', 'bk.lead': 'Doživite bezvremenski šarm Ville Runje.',
    'bk.note': 'Dostupnost i cijene u stvarnom vremenu otvaraju se na Airbnbu, gdje možete sigurno rezervirati.',
    'bk.inc': 'Uključeno u cijenu', 'bk.i1': 'Ručnici za kupaonicu i bazen, posteljina', 'bk.i2': 'Voda, struja, plin, grijanje i klima-uređaj', 'bk.i3': 'Wi-Fi i osigurani parking', 'bk.i4': 'Održavanje bazena i vrta, završno čišćenje', 'bk.i5': 'Boravišna pristojba',
    'bk.rules': 'Kućni red', 'bk.r1': 'Do 7 gostiju', 'bk.r2': 'Bez kućnih ljubimaca · bez pušenja · bez zabava', 'bk.r3': 'Nositelj rezervacije mora imati najmanje 23 godine',
    'f.arrival': 'Dolazak', 'f.departure': 'Odlazak', 'f.guests': 'Gosti', 'f.name': 'Ime i prezime', 'f.email': 'E-mail', 'f.message': 'Poruka', 'f.message.ph': 'Recite nam nešto o svom putovanju', 'f.send': 'Pošalji upit',
    'err.name': 'Upišite svoje ime.', 'err.email': 'Upišite ispravnu e-mail adresu.', 'err.arrival': 'Odaberite datum dolaska.', 'err.departure': 'Odlazak mora biti nakon dolaska.',
    'err.dates': 'Odaberite datume dolaska i odlaska — odlazak mora biti nakon dolaska.',
    'ct.eyebrow': 'Kontakt', 'ct.title': 'Isplanirajte boravak <em>s nama</em>',
    'ct.p': 'Pitanja o datumima, sezoni kupanja ili okolici? Pošaljite upit i odgovorit ćemo vam osobno.',
    'ct.quote': '„Veselimo se vašem dolasku.”', 'ct.owners': 'Mare i Zdenko, vlasnici',
    'ct.alt': 'Radije preko Airbnba?', 'ct.alt.link': 'Pošaljite poruku domaćinu na Airbnbu',
    'st.sending': 'Šaljem…',
    'st.ok.t': 'Hvala — upit je poslan.', 'st.ok.p': 'Javit ćemo vam se što prije na navedenu e-mail adresu.',
    'st.mail.t': 'Otvara se vaš program za e-poštu.', 'st.mail.p': 'Upit je pripremljen kao poruka — samo je pošaljite iz svog programa za e-poštu.',
    'st.off.t': 'Izravni upiti još nisu povezani.', 'st.off.p': 'Ova stranica je u pripremi i vaš upit nije poslan. Pošaljite ga domaćinu preko Airbnba — vaši datumi i broj gostiju već su upisani.',
    'st.fail.t': 'Upit nije poslan.', 'st.fail.p': 'Došlo je do pogreške u vezi. Pokušajte ponovno ili se javite preko Airbnba.',
    'st.airbnb': 'Nastavi na Airbnb',
    'ft.tag': 'Vaše privatno mediteransko utočište', 'ft.loc': 'Gornje Sitno, Hrvatska', 'ft.credit': 'Web stranicu izradio Jakov Maračić',
    'mbar.s': '7 gostiju · grijani bazen'
  },

  de: {
    'a11y.skip': 'Zum Inhalt springen',
    'nav.villa': 'Die Villa', 'nav.gallery': 'Galerie', 'nav.amenities': 'Ausstattung', 'nav.location': 'Lage', 'nav.contact': 'Kontakt',
    'nav.book': 'Aufenthalt buchen', 'nav.menu': 'Menü',
    'cta.check': 'Verfügbarkeit prüfen', 'cta.explore': 'Die Villa entdecken', 'cta.contact': 'Kontakt aufnehmen',
    'hero.alt': 'Beheizter Pool und Whirlpool der Villa Runje auf einer Steinterrasse, darunter die Adria und die Inseln',
    'hero.eyebrow': 'Gornje Sitno · Dalmatien · 600 m über dem Meer',
    'hero.t1': 'Wo dalmatinisches Erbe', 'hero.t2': 'auf <em>zeitlosen Luxus</em> trifft',
    'hero.lead': 'Entdecken Sie die Schönheit echten dalmatinischen Lebens in der ruhigen Umgebung der Villa Runje.',
    'hero.scroll': 'Scrollen',
    'fact.guests': 'Gäste', 'fact.bedrooms': 'Schlafzimmer', 'fact.baths': 'Badezimmer', 'fact.pool': 'Beheizter Pool',
    'intro.alt': 'Das Steinhaus mit Außentreppe, Pergola und Garten', 'intro.alt2': 'Handgefertigter Wasserspeier aus Stein am Pool bei Sonnenuntergang',
    'intro.cap': 'Stein für Stein vom Eigentümer mit eigenen Händen erbaut',
    'intro.eyebrow': 'Willkommen in der Villa Runje',
    'intro.title': 'Ein Refugium aus Stein, <em>Sonnenlicht</em> &amp; Stille',
    'intro.p1': 'Hoch in den Hügeln über Split, rund 600 Meter über dem Meer, blickt die Villa Runje auf die Adria, ihre Inseln und die Stadt darunter. Ein Steinhaus, das der Eigentümer mit eigenen Händen gebaut hat — privat und still, mit klarer Bergluft und einem Himmel voller Sterne.',
    'intro.p2': 'Die ganze Villa gehört Ihnen: beheizter Pool und Whirlpool, eine überdachte Terrasse für lange Abendessen, ein Garten mit saisonalem Gemüse und ein kleines Dorf, das noch in seinem eigenen Tempo lebt — und Split ist nur zwanzig Autominuten entfernt.',
    'mark.pool': 'Privater beheizter Pool', 'mark.tub': 'Whirlpool mit Meerblick', 'mark.tub.s': 'direkt am Pool',
    'mark.stone': 'Dalmatinische Steinarchitektur', 'mark.stone.s': 'von Hand gebaut',
    'mark.view': 'Blick auf Split &amp; die Inseln', 'mark.view.s': '≈ 600 m ü. M.',
    'mark.quiet': 'Ruhige Dorflage', 'mark.quiet.s': 'eingezäunt &amp; privat',
    'rating.chip': '25 Bewertungen auf Airbnb · Gäste-Favorit · Superhost',
    'show.alt1': 'Der beleuchtete Pool in der Dämmerung, dahinter der Berg, darunter die Küste', 'show.alt2': 'Offenes Schlafzimmerfenster mit Blick auf Hügel und Meer', 'show.alt3': 'Gedeckter Tisch auf der überdachten Terrasse zur blauen Stunde',
    'show.c1': 'Die Kunst der Langsamkeit', 'show.c2': 'Für unvergessliche Morgen gemacht', 'show.c3': 'Echtes mediterranes Leben',
    'day.eyebrow': 'Vom ersten Licht bis zu den Lichtern der Stadt',
    'day.title': 'Ein Tag auf <em>sechshundert</em> Metern',
    'day.s1.k': 'Morgen', 'day.s1.t': 'Frühstück aus dem Garten',
    'day.s1.p': 'Frühmorgens erntet der Eigentümer saisonales Gemüse im Bio-Garten neben dem Haus und legt es Ihnen auf den Tisch — kostenlos. Espresso aus der Maschine, Frühstück unter den Holzbalken der überdachten Terrasse.',
    'day.s1.alt': 'Frühstück auf der überdachten Terrasse mit Blick über die Hügel',
    'day.s2.k': 'Mittag', 'day.s2.t': 'Ein Pool nur für Sie',
    'day.s2.p': 'Ein privater, beheizter 36-m²-Pool mit sechs Liegen und drei Hängesesseln, die Adria am Horizont — und niemand, mit dem Sie ihn teilen müssen.',
    'day.s2.alt': 'Liegen und Hängesessel auf dem Pooldeck in der Sonne',
    'day.s3.k': 'Nachmittag', 'day.s3.t': 'Schatten, Hängematte, Berge',
    'day.s3.p': 'Schaukeln Sie in der Hängematte auf der überdachten Terrasse — oder nehmen Sie den Bergpfad, der direkt oberhalb der Villa beginnt. Klettern und Mountainbiken starten vor der Haustür.',
    'day.s3.alt': 'Eine Hängematte im Schatten der Steinterrasse',
    'day.s4.k': 'Sonnenuntergang', 'day.s4.t': 'Die goldene Stunde',
    'day.s4.p': 'Vom Pooldeck und von der Terrasse neben den Schlafzimmern geht die Sonne über dem Meer und den Inseln unter. Man kommt wegen des Pools — und erinnert sich an die Sonnenuntergänge.',
    'day.s4.alt': 'Pool und alter Olivenbaum im Abendlicht nach Sonnenuntergang',
    'day.s5.k': 'Nacht', 'day.s5.t': 'Split im Lichtermeer, tief unten',
    'day.s5.p': 'Gleiten Sie in den Whirlpool, während entlang der Küste die Lichter der Stadt angehen. In dieser Höhe ist die Luft klar und der Himmel voller Sterne.',
    'day.s5.alt': 'Die Lichter von Split funkeln unterhalb des beleuchteten Pools bei Nacht',
    'stay.eyebrow': 'Die Villa', 'stay.title': 'Zwei Etagen aus Stein, <em>Holz</em> &amp; Licht',
    'fig.guests': 'Gäste', 'fig.bedrooms': 'Schlafzimmer', 'fig.beds': 'Betten inkl. Schlafsofa', 'fig.baths': 'Badezimmer',
    'sp1.alt': 'Offener Ess- und Wohnbereich mit Wendeltreppe und Steinkamin', 'sp1.alt2': 'Voll ausgestattete Küche mit cremefarbenen Fronten und Terrakottafliesen',
    'sp1.t': 'Erdgeschoss — Leben rund um den Kamin',
    'sp1.p': 'Ein offener, sonniger Raum, in dem Kochen, Essen und Entspannen ineinanderfließen — mit Panoramafenstern und direktem Zugang zur überdachten Terrasse.',
    'sp1.l1': 'Wohnbereich mit Schlafsofa, Steinkamin und TV',
    'sp1.l2': 'Esstisch mit Panoramablick auf Split und das Meer',
    'sp1.l3': 'Klimatisierte Küche mit Eiswürfelmaschine, Espressomaschine, Geschirrspüler und Backofen',
    'sp1.l4': 'Badezimmer mit Dusche und Waschmaschine',
    'sp2.alt': 'Helles Schlafzimmer mit Doppelbett, Holzboden und grünen Fensterläden', 'sp2.alt2': 'Drittes Schlafzimmer mit Etagenbett aus Holz',
    'sp2.t': 'Obergeschoss — Schlafzimmer über dem Pool',
    'sp2.p': 'Drei ruhige Schlafzimmer mit Holzböden und Fenstern zu den Hügeln, dazu eine Terrasse für den Sonnenuntergang.',
    'sp2.l1': 'Schlafzimmer 1 — Doppelbett, Klimaanlage, Poolblick',
    'sp2.l2': 'Schlafzimmer 2 — Doppelbett, Klimaanlage, Meerblick',
    'sp2.l3': 'Schlafzimmer 3 — Etagenbett',
    'sp2.l4': 'Badezimmer mit Dusche und eine Terrasse neben den Schlafzimmern',
    'sp3.alt': 'Überdachte Steinterrasse mit langem Esstisch und Bergblick', 'sp3.alt2': 'Kinderspielplatz mit Schaukel und Rutsche auf dem Rasen',
    'sp3.t': 'Draußen — das Herz des Hauses',
    'sp3.p': 'Zwischen Pool und Wohnzimmer liegt eine überdachte Terrasse mit massivem Holztisch — hier wird aus dem Frühstück ein Mittagessen und aus dem Abendessen eine lange Nacht.',
    'sp3.l1': 'Überdachte Essterrasse und Hängematte',
    'sp3.l2': 'Traditionelle dalmatinische Außenfeuerstelle zum Grillen',
    'sp3.l3': 'Spielplatz mit Schaukel, Rutsche, Wippe und Trampolin sowie Netz für Badminton oder Volleyball',
    'sp3.l4': 'Bio-Gemüsegarten, zwei gesicherte Parkplätze, komplett eingezäunt',
    'pool.alt': 'Der private Pool, eingerahmt vom Garten, das Meer am Horizont',
    'pool.eyebrow': 'Der private Pool', 'pool.title': 'Tage voller <em>Sonnenschein</em>',
    'pool.lead': 'Entspannen, wieder zueinanderfinden und den langsameren Rhythmus des Mittelmeers genießen.',
    'pool.s1': 'privater Pool', 'pool.s2b': 'Beheizt', 'pool.s2': 'für Frühling &amp; Herbst', 'pool.s3b': 'Whirlpool', 'pool.s3': 'mit Blick auf Split', 'pool.s4': 'Liegen &amp; Hängesessel',
    'pool.note': 'Die Heizung macht vor allem im April, Mai, September und Oktober den Unterschied. Wie die Gastgeber betonen, hängt die Wassertemperatur vom Wetter ab und kann nicht garantiert werden.',
    'gal.eyebrow': 'Galerie', 'gal.title': 'Jeder Winkel, <em>wie er ist</em>', 'gal.filter': 'Fotos filtern',
    'gal.all': 'Alle', 'gal.pool': 'Pool', 'gal.exterior': 'Außen', 'gal.interior': 'Innen', 'gal.bedrooms': 'Schlafzimmer', 'gal.outdoor': 'Leben im Freien',
    'gal.more': 'Alle Fotos anzeigen', 'gal.view': 'Foto ansehen',
    'lb.label': 'Fotoansicht', 'lb.close': 'Schließen', 'lb.prev': 'Vorheriges Foto', 'lb.next': 'Nächstes Foto',
    'am.eyebrow': 'Ausstattung', 'am.title': 'Alles <em>an seinem Platz</em>', 'am.intro': 'Jeder der folgenden Punkte ist von den Gastgebern auf der Airbnb-Seite der Villa aufgeführt.',
    'am.g1': 'Leben im Freien', 'am.g1.1': 'Privater beheizter Pool', 'am.g1.2': 'Whirlpool', 'am.g1.3': 'Grill — dalmatinische Außenfeuerstelle', 'am.g1.4': 'Überdachte Essterrasse', 'am.g1.5': 'Kinderspielplatz', 'am.g1.6': 'Eigener Eingang', 'am.g1.7': 'Kostenlose Parkplätze auf dem Grundstück',
    'am.g2': 'Komfort', 'am.g2.1': 'Klimaanlage', 'am.g2.2': 'Heizung', 'am.g2.3': 'Kamin', 'am.g2.4': 'Waschmaschine &amp; Bügeleisen', 'am.g2.5': 'Haartrockner', 'am.g2.6': 'Safe', 'am.g2.7': 'Handtücher, Bettwäsche &amp; zusätzliche Kissen',
    'am.g3': 'Küche', 'am.g3.1': 'Geschirrspüler', 'am.g3.2': 'Backofen &amp; Herd', 'am.g3.3': 'Mikrowelle', 'am.g3.4': 'Kühlschrank &amp; Gefrierschrank', 'am.g3.5': 'Kaffeemaschine &amp; Wasserkocher', 'am.g3.6': 'Toaster', 'am.g3.7': 'Grundausstattung zum Kochen',
    'am.g4': 'Verbindung &amp; Unterhaltung', 'am.g4.1': 'WLAN', 'am.g4.2': 'TV', 'am.g4.3': 'Spielkonsole',
    'am.g5': 'Familie', 'am.g5.1': 'Babybett', 'am.g5.2': 'Hochstuhl',
    'am.g6': 'Sicherheit', 'am.g6.1': 'Rauchmelder', 'am.g6.2': 'Kohlenmonoxidmelder', 'am.g6.3': 'Feuerlöscher', 'am.g6.4': 'Erste-Hilfe-Set',
    'sc.eyebrow': 'Was Gäste sagen', 'sc.of': 'von 5', 'sc.meta': '25 Bewertungen auf Airbnb · Gäste-Favorit · Superhost', 'sc.read': 'Bewertungen auf Airbnb lesen',
    'sc.c1': 'Sauberkeit', 'sc.c2': 'Genauigkeit', 'sc.c3': 'Check-in', 'sc.c4': 'Kommunikation', 'sc.c5': 'Lage', 'sc.c6': 'Preis-Leistung',
    'sc.tags': 'Am häufigsten in Bewertungen erwähnt', 'sc.t1': 'Gastfreundschaft', 'sc.t2': 'Aussicht', 'sc.t3': 'Pool', 'sc.t4': 'Mobilität vor Ort', 'sc.t5': 'Whirlpool', 'sc.t6': 'Familie',
    'loc.eyebrow': 'Lage', 'loc.title': 'Entdecken Sie die Seele <em>Dalmatiens</em>',
    'loc.p1': 'Gornje Sitno ist ein kleines, ländliches Dorf in den Bergen oberhalb von Žrnovnica, am Rand von Split — freundlich, ruhig und unberührt.',
    'loc.p2': 'Nachbarn verkaufen Ziegenmilch, Eier, Gemüse, Obst und Wein, und zwei Restaurants mit traditioneller Küche sowie ein Minimarkt sind zu Fuß erreichbar. Oberhalb der Villa beginnen ein Bergpfad und Kletterrouten; darunter öffnet sich ganz Mitteldalmatien.',
    'loc.d1': 'Diokletianpalast, Altstadt, Fähren zu den Inseln', 'loc.t1': '≈ 20–30 Min.',
    'loc.n2': 'Strände', 'loc.d2': 'Kiesstrand in Strožanac (Podstrana), Sandstrände in Omiš',
    'loc.n3': 'Omiš &amp; die Cetina', 'loc.d3': 'Rafting, Kanu und Zipline über der Flussschlucht', 'loc.t3': '≈ 30 Min.',
    'loc.d4': 'Mittelalterliche Inselstadt, UNESCO-Welterbe', 'loc.t4': '≈ 30 Min.',
    'loc.n5': 'Krka-Wasserfälle', 'loc.d5': 'Nationalpark mit Kalksinterkaskaden', 'loc.t5': '≈ 1,5 Std.',
    'loc.n6': 'Insel Brač', 'loc.d6': 'Tagesausflug mit der Fähre ab Split', 'loc.t6': 'Tagesausflug',
    'loc.fine': 'Fahrzeiten sind ungefähre Angaben der Gastgeber und hängen von Verkehr und Saison ab.',
    'loc.alt': 'Luftaufnahme der Villa zwischen den Dorfhäusern, in der Ferne Küste und Inseln',
    'loc.pin': 'Split 18 km · ≈ 600 m ü. M.', 'loc.load': 'Interaktive Karte anzeigen', 'loc.gmaps': 'In Google Maps öffnen',
    'loc.addr': 'Die genaue Adresse erhalten bestätigte Gäste.',
    'bk.eyebrow': 'Reservierung', 'bk.title': 'Ihre mediterrane Auszeit <em>wartet</em>', 'bk.lead': 'Erleben Sie den zeitlosen Charme der Villa Runje.',
    'bk.note': 'Aktuelle Verfügbarkeit und Preise öffnen sich auf Airbnb, wo Sie sicher buchen können.',
    'bk.inc': 'Im Preis inbegriffen', 'bk.i1': 'Bade- &amp; Pooltücher, Bettwäsche', 'bk.i2': 'Wasser, Strom, Gas, Heizung &amp; Klimaanlage', 'bk.i3': 'WLAN und gesicherter Parkplatz', 'bk.i4': 'Pool- &amp; Gartenpflege, Endreinigung', 'bk.i5': 'Kurtaxe',
    'bk.rules': 'Hausregeln', 'bk.r1': 'Bis zu 7 Gäste', 'bk.r2': 'Keine Haustiere · Rauchverbot · keine Partys', 'bk.r3': 'Hauptgast mindestens 23 Jahre alt',
    'f.arrival': 'Anreise', 'f.departure': 'Abreise', 'f.guests': 'Gäste', 'f.name': 'Name', 'f.email': 'E-Mail', 'f.message': 'Nachricht', 'f.message.ph': 'Erzählen Sie uns kurz von Ihrer Reise', 'f.send': 'Anfrage senden',
    'err.name': 'Bitte geben Sie Ihren Namen ein.', 'err.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'err.arrival': 'Bitte wählen Sie ein Anreisedatum.', 'err.departure': 'Die Abreise muss nach der Anreise liegen.',
    'err.dates': 'Bitte wählen Sie An- und Abreise — die Abreise muss nach der Anreise liegen.',
    'ct.eyebrow': 'Kontakt', 'ct.title': 'Planen Sie Ihren Aufenthalt <em>mit uns</em>',
    'ct.p': 'Fragen zu Terminen, zur Badesaison oder zur Umgebung? Senden Sie eine Anfrage — wir antworten persönlich.',
    'ct.quote': '„Wir freuen uns darauf, Sie kennenzulernen.“', 'ct.owners': 'Mare &amp; Zdenko, Eigentümer',
    'ct.alt': 'Lieber über Airbnb?', 'ct.alt.link': 'Gastgeber auf Airbnb kontaktieren',
    'st.sending': 'Wird gesendet …',
    'st.ok.t': 'Danke — Ihre Anfrage wurde gesendet.', 'st.ok.p': 'Wir melden uns so bald wie möglich unter der angegebenen E-Mail-Adresse.',
    'st.mail.t': 'Ihr E-Mail-Programm wird geöffnet.', 'st.mail.p': 'Die Anfrage ist als Nachricht vorbereitet — senden Sie sie einfach aus Ihrem E-Mail-Programm ab.',
    'st.off.t': 'Direktanfragen sind noch nicht verbunden.', 'st.off.p': 'Diese Website befindet sich im Aufbau, Ihre Anfrage wurde nicht gesendet. Bitte schreiben Sie den Gastgebern über Airbnb — Ihre Daten und die Gästezahl sind bereits eingetragen.',
    'st.fail.t': 'Anfrage nicht gesendet.', 'st.fail.p': 'Es gab ein Verbindungsproblem. Bitte versuchen Sie es erneut oder schreiben Sie über Airbnb.',
    'st.airbnb': 'Weiter zu Airbnb',
    'ft.tag': 'Ihr privates mediterranes Refugium', 'ft.loc': 'Gornje Sitno, Kroatien', 'ft.credit': 'Website gestaltet von Jakov Maračić',
    'mbar.s': '7 Gäste · beheizter Pool'
  },

  it: {
    'a11y.skip': 'Vai al contenuto',
    'nav.villa': 'La villa', 'nav.gallery': 'Galleria', 'nav.amenities': 'Servizi', 'nav.location': 'Posizione', 'nav.contact': 'Contatti',
    'nav.book': 'Prenota il soggiorno', 'nav.menu': 'Menu',
    'cta.check': 'Verifica disponibilità', 'cta.explore': 'Scopri la villa', 'cta.contact': 'Contattaci',
    'hero.alt': 'Piscina riscaldata e vasca idromassaggio di Villa Runje su una terrazza in pietra, con l’Adriatico e le isole sullo sfondo',
    'hero.eyebrow': 'Gornje Sitno · Dalmazia · 600 m sul mare',
    'hero.t1': 'Dove l’eredità dalmata', 'hero.t2': 'incontra il <em>lusso senza tempo</em>',
    'hero.lead': 'Scoprite la bellezza dell’autentica vita dalmata nella quiete di Villa Runje.',
    'hero.scroll': 'Scorri',
    'fact.guests': 'Ospiti', 'fact.bedrooms': 'Camere', 'fact.baths': 'Bagni', 'fact.pool': 'Piscina riscaldata',
    'intro.alt': 'La casa in pietra con scala esterna, pergolato e giardino', 'intro.alt2': 'Bocca d’acqua in pietra lavorata a mano che alimenta la piscina al tramonto',
    'intro.cap': 'Costruita pietra su pietra dalle mani del proprietario',
    'intro.eyebrow': 'Benvenuti a Villa Runje',
    'intro.title': 'Un rifugio di pietra, <em>luce</em> e serenità',
    'intro.p1': 'In alto sulle colline sopra Spalato, a circa 600 metri sul mare, Villa Runje guarda l’Adriatico, le sue isole e la città ai suoi piedi. È una casa in pietra che il proprietario ha costruito con le proprie mani — privata e silenziosa, con aria pulita di montagna e cieli pieni di stelle.',
    'intro.p2': 'L’intera villa è solo vostra: piscina riscaldata e idromassaggio, una terrazza coperta fatta per lunghe cene, un orto di verdure di stagione e un piccolo villaggio che vive ancora secondo i propri ritmi — mentre Spalato dista appena venti minuti in auto.',
    'mark.pool': 'Piscina privata riscaldata', 'mark.tub': 'Idromassaggio vista mare', 'mark.tub.s': 'accanto alla piscina',
    'mark.stone': 'Architettura dalmata in pietra', 'mark.stone.s': 'costruita a mano',
    'mark.view': 'Vista su Spalato e le isole', 'mark.view.s': '≈ 600 m s.l.m.',
    'mark.quiet': 'Un villaggio tranquillo', 'mark.quiet.s': 'recintata e privata',
    'rating.chip': '25 recensioni su Airbnb · Amato dagli ospiti · Superhost',
    'show.alt1': 'La piscina illuminata al crepuscolo, con la montagna alle spalle e la costa sotto', 'show.alt2': 'Finestra aperta della camera che incornicia colline e mare', 'show.alt3': 'Cena apparecchiata sulla terrazza coperta all’ora blu',
    'show.c1': 'L’arte di rallentare', 'show.c2': 'Pensata per mattine indimenticabili', 'show.c3': 'Autentica vita mediterranea',
    'day.eyebrow': 'Dalla prima luce alle luci della città',
    'day.title': 'Una giornata a <em>seicento</em> metri',
    'day.s1.k': 'Mattino', 'day.s1.t': 'Colazione dall’orto',
    'day.s1.p': 'Di primo mattino il proprietario raccoglie le verdure di stagione nell’orto biologico accanto alla casa e le lascia sul vostro tavolo — gratuitamente. Espresso dalla macchina e colazione sotto le travi di legno della terrazza coperta.',
    'day.s1.alt': 'Colazione servita sulla terrazza coperta con vista sulle colline',
    'day.s2.k': 'Mezzogiorno', 'day.s2.t': 'Una piscina tutta per voi',
    'day.s2.p': 'Una piscina privata riscaldata di 36 m² con sei lettini e tre poltrone sospese, l’Adriatico all’orizzonte e nessuno con cui condividerla.',
    'day.s2.alt': 'Lettini e poltrona sospesa sul bordo piscina in pieno sole',
    'day.s3.k': 'Pomeriggio', 'day.s3.t': 'Ombra, amaca, montagna',
    'day.s3.p': 'Dondolatevi sull’amaca della terrazza coperta — oppure prendete il sentiero di montagna che parte proprio sopra la villa. Arrampicata e mountain bike iniziano sulla soglia di casa.',
    'day.s3.alt': 'Un’amaca all’ombra della terrazza in pietra',
    'day.s4.k': 'Tramonto', 'day.s4.t': 'L’ora dorata',
    'day.s4.p': 'Dal bordo piscina e dalla terrazza accanto alle camere, il sole tramonta sul mare e sulle isole. Si viene per la piscina — e si ricordano i tramonti.',
    'day.s4.alt': 'La piscina e un vecchio ulivo nella luce dopo il tramonto',
    'day.s5.k': 'Notte', 'day.s5.t': 'Spalato illuminata, laggiù',
    'day.s5.p': 'Immergetevi nell’idromassaggio mentre lungo la costa si accendono le luci della città. A questa altitudine l’aria è pulita e il cielo si riempie di stelle.',
    'day.s5.alt': 'Le luci di Spalato brillano sotto la piscina illuminata di notte',
    'stay.eyebrow': 'La villa', 'stay.title': 'Due piani di pietra, <em>legno</em> e luce',
    'fig.guests': 'ospiti', 'fig.bedrooms': 'camere', 'fig.beds': 'letti, divano letto incluso', 'fig.baths': 'bagni',
    'sp1.alt': 'Zona pranzo e soggiorno open space con scala a chiocciola e camino in pietra', 'sp1.alt2': 'Cucina completamente attrezzata con mobili color crema e piastrelle in cotto',
    'sp1.t': 'Piano terra — la vita intorno al camino',
    'sp1.p': 'Uno spazio aperto e luminoso in cui cucina, pranzo e relax si fondono, con finestre panoramiche e accesso diretto alla terrazza coperta.',
    'sp1.l1': 'Soggiorno con divano letto, camino in pietra e TV',
    'sp1.l2': 'Tavolo da pranzo con vista panoramica su Spalato e il mare',
    'sp1.l3': 'Cucina climatizzata con macchina del ghiaccio, macchina per espresso, lavastoviglie e forno',
    'sp1.l4': 'Bagno con doccia e lavatrice',
    'sp2.alt': 'Camera luminosa con letto matrimoniale, pavimento in legno e persiane verdi', 'sp2.alt2': 'Terza camera con letto a castello in legno',
    'sp2.t': 'Primo piano — camere sopra la piscina',
    'sp2.p': 'Tre camere tranquille con pavimenti in legno e finestre sulle colline, più una terrazza per il tramonto.',
    'sp2.l1': 'Camera 1 — letto matrimoniale, aria condizionata, vista piscina',
    'sp2.l2': 'Camera 2 — letto matrimoniale, aria condizionata, vista mare',
    'sp2.l3': 'Camera 3 — letto a castello',
    'sp2.l4': 'Bagno con doccia e terrazza accanto alle camere',
    'sp3.alt': 'Terrazza coperta in pietra con un lungo tavolo e vista sulla montagna', 'sp3.alt2': 'Parco giochi con altalena e scivolo sul prato',
    'sp3.t': 'All’aperto — il cuore della casa',
    'sp3.p': 'Tra la piscina e il soggiorno si trova una terrazza coperta con un massiccio tavolo in legno — dove le colazioni diventano pranzi e le cene si allungano fino a notte.',
    'sp3.l1': 'Terrazza coperta per i pasti e amaca',
    'sp3.l2': 'Tradizionale focolare dalmata all’aperto per il barbecue',
    'sp3.l3': 'Parco giochi con altalena, scivolo, altalena a bilico e trampolino, più una rete da badminton o pallavolo',
    'sp3.l4': 'Orto biologico, due posti auto protetti, proprietà interamente recintata',
    'pool.alt': 'La piscina privata incorniciata dal giardino, con il mare all’orizzonte',
    'pool.eyebrow': 'La piscina privata', 'pool.title': 'Giornate scandite <em>dal sole</em>',
    'pool.lead': 'Rilassatevi, ritrovatevi e lasciatevi andare al ritmo lento della vita mediterranea.',
    'pool.s1': 'piscina privata', 'pool.s2b': 'Riscaldata', 'pool.s2': 'in primavera e autunno', 'pool.s3b': 'Idromassaggio', 'pool.s3': 'con vista su Spalato', 'pool.s4': 'lettini e poltrone sospese',
    'pool.note': 'Il riscaldamento fa la differenza soprattutto ad aprile, maggio, settembre e ottobre. Come precisano gli host, la temperatura dell’acqua dipende dal meteo e non può essere garantita.',
    'gal.eyebrow': 'Galleria', 'gal.title': 'Ogni angolo, <em>così com’è</em>', 'gal.filter': 'Filtra le foto',
    'gal.all': 'Tutte', 'gal.pool': 'Piscina', 'gal.exterior': 'Esterni', 'gal.interior': 'Interni', 'gal.bedrooms': 'Camere', 'gal.outdoor': 'Vita all’aperto',
    'gal.more': 'Mostra tutte le foto', 'gal.view': 'Guarda la foto',
    'lb.label': 'Visualizzatore foto', 'lb.close': 'Chiudi', 'lb.prev': 'Foto precedente', 'lb.next': 'Foto successiva',
    'am.eyebrow': 'Servizi', 'am.title': 'Tutto <em>al suo posto</em>', 'am.intro': 'Ogni voce qui sotto è indicata dagli host sulla pagina Airbnb della villa.',
    'am.g1': 'Vita all’aperto', 'am.g1.1': 'Piscina privata riscaldata', 'am.g1.2': 'Idromassaggio', 'am.g1.3': 'Barbecue — focolare dalmata all’aperto', 'am.g1.4': 'Terrazza coperta per i pasti', 'am.g1.5': 'Parco giochi per bambini', 'am.g1.6': 'Ingresso privato', 'am.g1.7': 'Parcheggio gratuito in loco',
    'am.g2': 'Comfort', 'am.g2.1': 'Aria condizionata', 'am.g2.2': 'Riscaldamento', 'am.g2.3': 'Camino interno', 'am.g2.4': 'Lavatrice e ferro da stiro', 'am.g2.5': 'Asciugacapelli', 'am.g2.6': 'Cassaforte', 'am.g2.7': 'Asciugamani, lenzuola e cuscini extra',
    'am.g3': 'Cucina', 'am.g3.1': 'Lavastoviglie', 'am.g3.2': 'Forno e piano cottura', 'am.g3.3': 'Microonde', 'am.g3.4': 'Frigorifero e congelatore', 'am.g3.5': 'Macchina da caffè e bollitore', 'am.g3.6': 'Tostapane', 'am.g3.7': 'Elementi base per cucinare',
    'am.g4': 'Connessione e svago', 'am.g4.1': 'Wi-Fi', 'am.g4.2': 'TV', 'am.g4.3': 'Console per videogiochi',
    'am.g5': 'Famiglia', 'am.g5.1': 'Culla', 'am.g5.2': 'Seggiolone',
    'am.g6': 'Sicurezza', 'am.g6.1': 'Rilevatore di fumo', 'am.g6.2': 'Rilevatore di monossido di carbonio', 'am.g6.3': 'Estintore', 'am.g6.4': 'Kit di pronto soccorso',
    'sc.eyebrow': 'Cosa dicono gli ospiti', 'sc.of': 'su 5', 'sc.meta': '25 recensioni su Airbnb · Amato dagli ospiti · Superhost', 'sc.read': 'Leggi le recensioni su Airbnb',
    'sc.c1': 'Pulizia', 'sc.c2': 'Precisione', 'sc.c3': 'Check-in', 'sc.c4': 'Comunicazione', 'sc.c5': 'Posizione', 'sc.c6': 'Qualità-prezzo',
    'sc.tags': 'I temi più citati nelle recensioni', 'sc.t1': 'Ospitalità', 'sc.t2': 'Vista', 'sc.t3': 'Piscina', 'sc.t4': 'Spostamenti', 'sc.t5': 'Idromassaggio', 'sc.t6': 'Famiglia',
    'loc.eyebrow': 'Posizione', 'loc.title': 'Scoprite l’anima <em>della Dalmazia</em>',
    'loc.p1': 'Gornje Sitno è un piccolo villaggio pastorale tra le montagne sopra Žrnovnica, ai margini di Spalato — accogliente, tranquillo e incontaminato.',
    'loc.p2': 'I vicini vendono latte di capra, uova, verdure, frutta e vino, e due ristoranti di cucina tradizionale e un minimarket sono raggiungibili a piedi. Sopra la villa partono un sentiero di montagna e vie d’arrampicata; sotto si apre tutta la Dalmazia centrale.',
    'loc.d1': 'Palazzo di Diocleziano, centro storico, traghetti per le isole', 'loc.t1': '≈ 20–30 min',
    'loc.n2': 'Spiagge', 'loc.d2': 'Spiaggia di ciottoli a Strožanac (Podstrana), spiagge di sabbia a Omiš',
    'loc.n3': 'Omiš e la Cetina', 'loc.d3': 'Rafting, canoa e zip-line sopra il canyon del fiume', 'loc.t3': '≈ 30 min',
    'loc.d4': 'Cittadina medievale su un’isola, patrimonio UNESCO', 'loc.t4': '≈ 30 min',
    'loc.n5': 'Cascate del Krka', 'loc.d5': 'Parco nazionale di cascate di travertino', 'loc.t5': '≈ 1,5 h',
    'loc.n6': 'Isola di Brač', 'loc.d6': 'Gita di un giorno in traghetto da Spalato', 'loc.t6': 'in giornata',
    'loc.fine': 'I tempi di percorrenza sono indicativi, come riportati dagli host, e variano con traffico e stagione.',
    'loc.alt': 'Veduta aerea della villa tra le case del villaggio, con la costa e le isole in lontananza',
    'loc.pin': 'Spalato 18 km · ≈ 600 m s.l.m.', 'loc.load': 'Mostra la mappa interattiva', 'loc.gmaps': 'Apri in Google Maps',
    'loc.addr': 'L’indirizzo esatto viene comunicato agli ospiti confermati.',
    'bk.eyebrow': 'Prenotazioni', 'bk.title': 'La vostra fuga mediterranea <em>vi aspetta</em>', 'bk.lead': 'Vivete il fascino senza tempo di Villa Runje.',
    'bk.note': 'Disponibilità e prezzi aggiornati si aprono su Airbnb, dove potete prenotare in sicurezza.',
    'bk.inc': 'Incluso nel prezzo', 'bk.i1': 'Teli bagno e piscina, biancheria da letto', 'bk.i2': 'Acqua, elettricità, gas, riscaldamento e aria condizionata', 'bk.i3': 'Wi-Fi e parcheggio protetto', 'bk.i4': 'Manutenzione di piscina e giardino, pulizia finale', 'bk.i5': 'Tassa di soggiorno',
    'bk.rules': 'Regole della casa', 'bk.r1': 'Fino a 7 ospiti', 'bk.r2': 'Niente animali · non fumatori · niente feste', 'bk.r3': 'Il titolare della prenotazione deve avere almeno 23 anni',
    'f.arrival': 'Arrivo', 'f.departure': 'Partenza', 'f.guests': 'Ospiti', 'f.name': 'Nome', 'f.email': 'E-mail', 'f.message': 'Messaggio', 'f.message.ph': 'Raccontateci qualcosa del vostro viaggio', 'f.send': 'Invia richiesta',
    'err.name': 'Inserite il vostro nome.', 'err.email': 'Inserite un indirizzo e-mail valido.', 'err.arrival': 'Scegliete una data di arrivo.', 'err.departure': 'La partenza deve essere successiva all’arrivo.',
    'err.dates': 'Scegliete le date di arrivo e partenza — la partenza deve essere successiva all’arrivo.',
    'ct.eyebrow': 'Contatti', 'ct.title': 'Organizzate il soggiorno <em>con noi</em>',
    'ct.p': 'Domande sulle date, sulla stagione della piscina o sui dintorni? Inviate una richiesta e vi risponderemo personalmente.',
    'ct.quote': '«Non vediamo l’ora di conoscervi.»', 'ct.owners': 'Mare e Zdenko, proprietari',
    'ct.alt': 'Preferite Airbnb?', 'ct.alt.link': 'Scrivete all’host su Airbnb',
    'st.sending': 'Invio in corso…',
    'st.ok.t': 'Grazie — la richiesta è stata inviata.', 'st.ok.p': 'Vi risponderemo al più presto all’indirizzo e-mail indicato.',
    'st.mail.t': 'Si sta aprendo il vostro programma di posta.', 'st.mail.p': 'La richiesta è pronta come messaggio — basta inviarla dal vostro programma di posta.',
    'st.off.t': 'Le richieste dirette non sono ancora attive.', 'st.off.p': 'Questo sito è in preparazione e la vostra richiesta non è stata inviata. Scrivete agli host tramite Airbnb — date e numero di ospiti sono già inseriti.',
    'st.fail.t': 'Richiesta non inviata.', 'st.fail.p': 'Si è verificato un problema di connessione. Riprovate o scriveteci tramite Airbnb.',
    'st.airbnb': 'Continua su Airbnb',
    'ft.tag': 'Il vostro rifugio mediterraneo privato', 'ft.loc': 'Gornje Sitno, Croazia', 'ft.credit': 'Sito realizzato da Jakov Maračić',
    'mbar.s': '7 ospiti · piscina riscaldata'
  }
};

/* Strings only used from JS — English defaults */
const EN_JS = {
  'gal.view': 'View photo',
  'err.dates': 'Please choose arrival and departure dates — departure must be after arrival.',
  'st.sending': 'Sending…',
  'st.ok.t': 'Thank you — your inquiry has been sent.', 'st.ok.p': 'We’ll reply as soon as possible to the email address you gave.',
  'st.mail.t': 'Opening your email app.', 'st.mail.p': 'Your inquiry is ready as a message — just send it from your email app.',
  'st.off.t': 'Direct inquiries aren’t connected yet.', 'st.off.p': 'This website is still being set up and your inquiry has not been sent. Please message the hosts on Airbnb — your dates and guest count are already filled in.',
  'st.fail.t': 'Inquiry not sent.', 'st.fail.p': 'There was a connection problem. Please try again or message us on Airbnb.',
  'st.airbnb': 'Continue to Airbnb'
};

/* -------------------------------------------------------------------------
   3. GALLERY — [file, category, layout(w=wide,t=tall,''), EN, HR, DE, IT]
   ------------------------------------------------------------------------- */
const GALLERY = [
  ['pool-sea-view', 'pool', 'w', 'Heated pool and hot tub above the Adriatic', 'Grijani bazen i jacuzzi iznad Jadrana', 'Beheizter Pool und Whirlpool über der Adria', 'Piscina riscaldata e idromassaggio sopra l’Adriatico'],
  ['villa-aerial', 'exterior', '', 'The villa, pool and garden from above', 'Vila, bazen i vrt iz zraka', 'Villa, Pool und Garten von oben', 'La villa, la piscina e il giardino dall’alto'],
  ['pool-olive', 'pool', 't', 'Pool deck in the shade of an olive tree', 'Terasa bazena u hladu masline', 'Pooldeck im Schatten eines Olivenbaums', 'Bordo piscina all’ombra di un ulivo'],
  ['pool-hanging-chair', 'pool', '', 'Hanging chair beside the pool', 'Viseća stolica uz bazen', 'Hängesessel am Pool', 'Poltrona sospesa accanto alla piscina'],
  ['pool-hot-tub', 'pool', '', 'Loungers and hot tub under the mountain', 'Ležaljke i jacuzzi podno planine', 'Liegen und Whirlpool unter dem Berg', 'Lettini e idromassaggio sotto la montagna'],
  ['pool-sun', 'pool', '', 'The 36 m² pool in full sun', 'Bazen od 36 m² na punom suncu', 'Der 36-m²-Pool in voller Sonne', 'La piscina di 36 m² in pieno sole'],
  ['hot-tub-view', 'pool', 'w', 'Hot tub with views of the islands and Split', 'Jacuzzi s pogledom na otoke i Split', 'Whirlpool mit Blick auf die Inseln und Split', 'Idromassaggio con vista sulle isole e su Spalato'],
  ['pool-lounger', 'pool', '', 'A lounger by the hot tub', 'Ležaljka uz jacuzzi', 'Eine Liege am Whirlpool', 'Un lettino accanto all’idromassaggio'],
  ['village-aerial', 'exterior', '', 'The village in the hills above Split', 'Selo u brdima iznad Splita', 'Das Dorf in den Hügeln über Split', 'Il villaggio sulle colline sopra Spalato'],
  ['playground', 'outdoor', '', 'Playground with swing and slide', 'Igralište s ljuljačkom i toboganom', 'Spielplatz mit Schaukel und Rutsche', 'Parco giochi con altalena e scivolo'],
  ['terrace-breakfast', 'outdoor', 'w', 'Breakfast on the covered terrace', 'Doručak na natkrivenoj terasi', 'Frühstück auf der überdachten Terrasse', 'Colazione sulla terrazza coperta'],
  ['hammock', 'outdoor', '', 'The hammock under the stone arches', 'Mreža za ljuljanje pod kamenim lukovima', 'Die Hängematte unter den Steinbögen', 'L’amaca sotto gli archi di pietra'],
  ['terrace-dining', 'outdoor', '', 'Covered dining terrace between pool and house', 'Natkrivena terasa za blagovanje između bazena i kuće', 'Überdachte Essterrasse zwischen Pool und Haus', 'Terrazza coperta per i pasti tra piscina e casa'],
  ['dining-kitchen', 'interior', '', 'Dining area and kitchen', 'Blagovaonica i kuhinja', 'Essbereich und Küche', 'Zona pranzo e cucina'],
  ['living-room', 'interior', 'w', 'Living room with a view of the terrace', 'Dnevni boravak s pogledom na terasu', 'Wohnzimmer mit Blick auf die Terrasse', 'Soggiorno con vista sulla terrazza'],
  ['dining-view', 'interior', '', 'Panoramic views from the dining table', 'Panoramski pogled s blagovaonskog stola', 'Panoramablick vom Esstisch', 'Vista panoramica dal tavolo da pranzo'],
  ['kitchen', 'interior', '', 'The fully equipped kitchen', 'Potpuno opremljena kuhinja', 'Die voll ausgestattete Küche', 'La cucina completamente attrezzata'],
  ['living-fireplace', 'interior', '', 'Open-plan living with spiral staircase', 'Otvoreni dnevni prostor sa zavojitim stubištem', 'Offener Wohnbereich mit Wendeltreppe', 'Open space con scala a chiocciola'],
  ['fireplace-stone', 'interior', '', 'Stone fireplace and TV', 'Kameni kamin i TV', 'Steinkamin und TV', 'Camino in pietra e TV'],
  ['living-sofa', 'interior', '', 'Sofa by the fireplace', 'Kauč uz kamin', 'Sofa am Kamin', 'Divano accanto al camino'],
  ['bathroom-ground', 'interior', '', 'Ground-floor bathroom with shower', 'Kupaonica s tušem u prizemlju', 'Badezimmer mit Dusche im Erdgeschoss', 'Bagno con doccia al piano terra'],
  ['bedroom-1', 'bedrooms', '', 'Bedroom 1 — double bed', 'Soba 1 — bračni krevet', 'Schlafzimmer 1 — Doppelbett', 'Camera 1 — letto matrimoniale'],
  ['bedroom-1b', 'bedrooms', '', 'Bedroom 1 — air-conditioned', 'Soba 1 — klimatizirana', 'Schlafzimmer 1 — klimatisiert', 'Camera 1 — climatizzata'],
  ['bedroom-3-bunk', 'bedrooms', '', 'Bedroom 3 — bunk bed', 'Soba 3 — krevet na kat', 'Schlafzimmer 3 — Etagenbett', 'Camera 3 — letto a castello'],
  ['bathroom-first', 'interior', '', 'First-floor bathroom with shower', 'Kupaonica s tušem na katu', 'Badezimmer mit Dusche im Obergeschoss', 'Bagno con doccia al primo piano'],
  ['bedroom-2', 'bedrooms', 'w', 'Bedroom 2 — double bed', 'Soba 2 — bračni krevet', 'Schlafzimmer 2 — Doppelbett', 'Camera 2 — letto matrimoniale'],
  ['bedroom-2-view', 'bedrooms', '', 'Bedroom 2 — sea view', 'Soba 2 — pogled na more', 'Schlafzimmer 2 — Meerblick', 'Camera 2 — vista mare'],
  ['terrace-first-floor', 'outdoor', '', 'First-floor terrace beside the bedrooms', 'Terasa na katu uz spavaće sobe', 'Terrasse im Obergeschoss neben den Schlafzimmern', 'Terrazza al primo piano accanto alle camere'],
  ['stone-house-pergola', 'exterior', 't', 'Stone house, pergola and playground', 'Kamena kuća, pergola i igralište', 'Steinhaus, Pergola und Spielplatz', 'Casa in pietra, pergolato e parco giochi'],
  ['bbq-house', 'outdoor', '', 'Traditional barbecue behind the house', 'Tradicionalni roštilj iza kuće', 'Traditioneller Grill hinter dem Haus', 'Barbecue tradizionale dietro la casa'],
  ['aerial-top', 'exterior', '', 'The property seen from above', 'Posjed iz ptičje perspektive', 'Das Anwesen von oben', 'La proprietà vista dall’alto'],
  ['pool-deck', 'pool', '', 'Six loungers and three hanging chairs', 'Šest ležaljki i tri viseće stolice', 'Sechs Liegen und drei Hängesessel', 'Sei lettini e tre poltrone sospese'],
  ['pool-garden', 'pool', 'w', 'The pool framed by the garden', 'Bazen uokviren vrtom', 'Der Pool, eingerahmt vom Garten', 'La piscina incorniciata dal giardino'],
  ['pool-spout', 'pool', '', 'Hand-made stone details at the pool', 'Ručno izrađeni kameni detalji uz bazen', 'Handgefertigte Steindetails am Pool', 'Dettagli in pietra fatti a mano in piscina'],
  ['dining-night', 'outdoor', '', 'Evening dinner on the covered terrace', 'Večera na natkrivenoj terasi', 'Abendessen auf der überdachten Terrasse', 'Cena serale sulla terrazza coperta'],
  ['pool-dusk-olive', 'pool', '', 'Olive trees around the pool at dusk', 'Masline oko bazena u sumrak', 'Olivenbäume am Pool in der Dämmerung', 'Ulivi intorno alla piscina al crepuscolo'],
  ['hot-tub-dusk', 'pool', '', 'The hot tub as the sun goes down', 'Jacuzzi dok sunce zalazi', 'Der Whirlpool bei Sonnenuntergang', 'L’idromassaggio al calar del sole'],
  ['terrace-dusk', 'outdoor', 'w', 'Dinner set for the blue hour', 'Večera postavljena za plavi sat', 'Gedeckt für die blaue Stunde', 'Cena apparecchiata per l’ora blu'],
  ['pool-dusk', 'pool', '', 'The lit pool against the mountain', 'Osvijetljeni bazen pod planinom', 'Der beleuchtete Pool vor dem Berg', 'La piscina illuminata contro la montagna'],
  ['villa-night', 'exterior', '', 'Evening lights across the property', 'Večernja svjetla na posjedu', 'Abendbeleuchtung auf dem Anwesen', 'Luci serali sulla proprietà'],
  ['split-lights', 'pool', 't', 'The lights of Split from the pool', 'Svjetla Splita s bazena', 'Die Lichter von Split vom Pool aus', 'Le luci di Spalato dalla piscina'],
  ['aerial-night', 'exterior', '', 'The villa from above at night', 'Vila iz zraka noću', 'Die Villa von oben bei Nacht', 'La villa dall’alto di notte']
];
const LANGS = ['en', 'hr', 'de', 'it'];
const INITIAL_COUNT = 14;

/* -------------------------------------------------------------------------
   4. BEHAVIOUR
   ------------------------------------------------------------------------- */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  /* ---------- i18n ---------- */
  const EN = Object.assign({}, EN_JS);
  const EN_ATTR = new Map();
  $$('[data-i18n]').forEach(el => { if (!(el.dataset.i18n in EN)) EN[el.dataset.i18n] = el.innerHTML.trim(); });
  $$('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (!(key in EN)) EN[key] = el.getAttribute(attr) || '';
    });
  });

  let lang = 'en';
  const t = key => (lang !== 'en' && I18N[lang] && I18N[lang][key]) || EN[key] || key;

  function guestLabel(n) {
    if (lang === 'hr') {
      const m10 = n % 10, m100 = n % 100;
      if (m10 === 1 && m100 !== 11) return n + ' gost';
      if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return n + ' gosta';
      return n + ' gostiju';
    }
    if (lang === 'de') return n + (n === 1 ? ' Gast' : ' Gäste');
    if (lang === 'it') return n + (n === 1 ? ' ospite' : ' ospiti');
    return n + (n === 1 ? ' guest' : ' guests');
  }

  function fillGuests() {
    $$('select[data-guests]').forEach(sel => {
      const v = sel.value || '2';
      sel.innerHTML = '';
      for (let i = 1; i <= CONFIG.maxGuests; i++) {
        const o = document.createElement('option');
        o.value = String(i); o.textContent = guestLabel(i);
        sel.appendChild(o);
      }
      sel.value = v;
    });
  }

  function airbnbUrl(path = '', params) {
    const host = CONFIG.airbnbHosts[lang] || CONFIG.airbnbHosts.en;
    const u = new URL(`https://${host}/rooms/${CONFIG.airbnbId}${path}`);
    if (params) Object.entries(params).forEach(([k, v]) => { if (v) u.searchParams.set(k, v); });
    return u.toString();
  }

  function setLang(next, persist) {
    lang = LANGS.includes(next) ? next : 'en';
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $$('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr, t(key));
      });
    });
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.title = META[lang].title;
    const md = $('meta[name="description"]'); if (md) md.setAttribute('content', META[lang].desc);
    $$('a[data-airbnb]').forEach(a => { a.href = airbnbUrl(a.dataset.airbnb || ''); });
    fillGuests();
    renderGallery();
    syncDayLabel();
    if (persist) store.set('vr-lang', lang);
  }

  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang, true)));

  /* ---------- nav: solid/hidden state, menu, active link ---------- */
  const nav = $('#nav');
  const hero = $('.hero');
  const burger = $('.burger');
  const menu = $('#menu');
  const mbar = $('#mbar');
  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const heroH = hero ? hero.offsetHeight : 600;
    nav.classList.toggle('is-solid', y > heroH - 90);
    const hide = y > lastY && y > heroH * .6 && !document.body.classList.contains('menu-open');
    nav.classList.toggle('is-hidden', hide);
    lastY = y;
    // mobile booking bar: after hero, hidden around booking/contact/footer
    const book = $('#book').getBoundingClientRect();
    const contact = $('#contact').getBoundingClientRect();
    const vh = window.innerHeight;
    const nearForms = (book.top < vh && book.bottom > 0) || (contact.top < vh * .9);
    mbar.classList.toggle('is-on', y > heroH * .8 && !nearForms);
    parallax();
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  function openMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    document.body.classList.toggle('is-locked', open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add('is-open'));
      nav.classList.remove('is-hidden');
      setTimeout(() => { const f = menu.querySelector('a'); if (f) f.focus({ preventScroll: true }); }, 60);
    } else {
      menu.classList.remove('is-open');
      setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 500);
    }
  }
  burger.addEventListener('click', () => openMenu(burger.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', e => { if (e.target.closest('a')) openMenu(false); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { openMenu(false); burger.focus(); }
  });
  // keep focus inside the open menu (burger + menu links)
  document.addEventListener('focusin', e => {
    if (!document.body.classList.contains('menu-open')) return;
    if (!menu.contains(e.target) && e.target !== burger && !nav.contains(e.target)) { const f = menu.querySelector('a'); if (f) f.focus(); }
  });
  window.matchMedia('(min-width: 1280px)').addEventListener('change', m => { if (m.matches) openMenu(false); });

  const navLinks = $$('.nav__links a');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = en.target.id === 'stay' || en.target.id === 'day' || en.target.id === 'pool' ? 'villa' : en.target.id;
      navLinks.forEach(a => { if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['villa', 'day', 'stay', 'pool', 'gallery', 'amenities', 'location', 'book', 'contact'].forEach(id => { const s = document.getElementById(id); if (s) spy.observe(s); });

  /* ---------- reveals ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  $$('[data-reveal], [data-mask], .score__bars').forEach(el => io.observe(el));

  /* ---------- parallax (transform only, in-view only) ---------- */
  const px = $$('[data-parallax]');
  function parallax() {
    if (reduce) return;
    const vh = window.innerHeight;
    px.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / (vh + r.height);
      el.style.transform = `translate3d(0, ${(p * -14).toFixed(2)}%, 0)`;
    });
  }

  /* ---------- A day at Villa Runje ---------- */
  const day = $('#day');
  const steps = $$('.day__step');
  const frames = $$('.day__frames img');
  const sunRot = $('.sun__rot');
  const sunLabel = $('.sun__label');
  let dayIdx = 0;
  function setDay(i) {
    dayIdx = i;
    steps.forEach((s, k) => s.classList.toggle('is-on', k === i));
    frames.forEach((f, k) => f.classList.toggle('is-on', k === i));
    day.dataset.step = String(i);
    if (sunRot) sunRot.style.transform = `rotate(${-70 + i * 35}deg)`;
    syncDayLabel();
  }
  function syncDayLabel() {
    if (sunLabel) { sunLabel.dataset.i18n = `day.s${dayIdx + 1}.k`; sunLabel.textContent = t(sunLabel.dataset.i18n); }
  }
  const dayIo = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) setDay(steps.indexOf(en.target)); });
  }, { rootMargin: '-48% 0px -48% 0px' });
  steps.forEach(s => dayIo.observe(s));
  // warm the frame images once the section approaches
  const warm = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { frames.forEach(f => { f.loading = 'eager'; }); warm.disconnect(); }
  }, { rootMargin: '600px 0px' });
  warm.observe(day);

  /* ---------- Gallery ---------- */
  const grid = $('#grid');
  const moreBtn = $('#more');
  let cat = 'all';
  let expanded = false;
  let visible = [];
  const capIdx = () => 3 + LANGS.indexOf(lang);

  const gio = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); gio.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -5% 0px' });

  function renderGallery() {
    const list = GALLERY.filter(g => cat === 'all' || g[1] === cat);
    const limit = expanded || cat !== 'all' ? list.length : INITIAL_COUNT;
    visible = list;
    const frag = document.createDocumentFragment();
    list.slice(0, limit).forEach((g, i) => {
      const li = document.createElement('li');
      if (cat === 'all' && g[2]) li.className = g[2];
      else if (cat !== 'all' && i % 5 === 0) li.className = 'w';
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'grid__btn'; b.dataset.i = String(i);
      const img = document.createElement('img');
      img.src = `images/${g[0]}-640.webp`;
      img.srcset = `images/${g[0]}-640.webp 640w, images/${g[0]}-1024.webp 1024w`;
      img.sizes = (li.className === 'w' || li.className === 't') ? '(min-width: 760px) 46vw, 92vw' : '(min-width: 760px) 23vw, 46vw';
      img.width = 640; img.height = 427; img.loading = 'lazy'; img.decoding = 'async';
      img.alt = g[capIdx()];
      const v = document.createElement('span');
      v.className = 'grid__view'; v.setAttribute('aria-hidden', 'true');
      v.innerHTML = `<span>${t('gal.view')}</span><i>+</i>`;
      b.append(img, v);
      li.appendChild(b);
      frag.appendChild(li);
    });
    grid.replaceChildren(frag);
    $$('li', grid).forEach(li => { if (reduce) li.classList.add('is-in'); else gio.observe(li); });
    moreBtn.parentElement.hidden = limit >= list.length;
    // counts on filter chips
    $$('.filters button').forEach(btn => {
      const c = btn.dataset.cat;
      btn.querySelector('sup').textContent = c === 'all' ? GALLERY.length : GALLERY.filter(g => g[1] === c).length;
    });
  }
  $$('.filters button').forEach(btn => btn.addEventListener('click', () => {
    cat = btn.dataset.cat;
    $$('.filters button').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    renderGallery();
  }));
  moreBtn.addEventListener('click', () => {
    expanded = true;
    const first = INITIAL_COUNT;
    renderGallery();
    const nextBtn = $(`.grid__btn[data-i="${first}"]`); if (nextBtn) nextBtn.focus({ preventScroll: true });
  });
  grid.addEventListener('click', e => {
    const b = e.target.closest('.grid__btn');
    if (b) openLb(Number(b.dataset.i), b);
  });

  /* ---------- Lightbox ---------- */
  const lb = $('#lb');
  const lbImg = $('#lb-img');
  const lbCap = $('#lb-cap');
  const lbI = $('#lb-i');
  const lbN = $('#lb-n');
  let lbIdx = 0;
  let lbOpener = null;

  function showLb(i, dir = 0) {
    const n = visible.length;
    lbIdx = (i + n) % n;
    const g = visible[lbIdx];
    const apply = () => {
      lbImg.src = `images/${g[0]}-1600.webp`;
      lbImg.srcset = `images/${g[0]}-1024.webp 1024w, images/${g[0]}-1600.webp 1600w`;
      lbImg.sizes = '100vw';
      lbImg.alt = g[capIdx()];
      lbCap.textContent = g[capIdx()];
      lbI.textContent = String(lbIdx + 1);
      lbN.textContent = String(n);
      lbImg.classList.remove('is-swap');
      [1, -1].forEach(d => { const p = new Image(); p.src = `images/${visible[(lbIdx + d + n) % n][0]}-1600.webp`; });
    };
    if (dir && !reduce) { lbImg.classList.add('is-swap'); setTimeout(apply, 180); } else apply();
  }
  function openLb(i, opener) {
    lbOpener = opener || null;
    showLb(i);
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
    document.body.classList.add('is-locked');
  }
  function closeLb() { if (lb.open) lb.close(); }
  lb.addEventListener('close', () => {
    document.body.classList.remove('is-locked');
    if (lbOpener) lbOpener.focus({ preventScroll: true });
  });
  $('#lb-close').addEventListener('click', closeLb);
  $('#lb-prev').addEventListener('click', () => showLb(lbIdx - 1, -1));
  $('#lb-next').addEventListener('click', () => showLb(lbIdx + 1, 1));
  lb.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); showLb(lbIdx - 1, -1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); showLb(lbIdx + 1, 1); }
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb__fig')) closeLb(); });
  // swipe
  let sx = 0, sy = 0, tracking = false;
  const fig = $('.lb__fig');
  fig.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') return; tracking = true; sx = e.clientX; sy = e.clientY; });
  fig.addEventListener('pointerup', e => {
    if (!tracking) return; tracking = false;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) showLb(lbIdx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
  });
  fig.addEventListener('pointercancel', () => { tracking = false; });

  /* ---------- Dates helpers ---------- */
  const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = iso(new Date());
  function linkDates(inEl, outEl) {
    inEl.min = today; outEl.min = today;
    inEl.addEventListener('change', () => {
      if (!inEl.value) return;
      const next = new Date(inEl.value + 'T12:00:00'); next.setDate(next.getDate() + 1);
      outEl.min = iso(next);
      if (!outEl.value || outEl.value <= inEl.value) outEl.value = iso(next);
    });
  }
  linkDates($('#b-in'), $('#b-out'));
  linkDates($('#c-in'), $('#c-out'));

  /* ---------- Booking form → Airbnb ---------- */
  const bookform = $('#bookform');
  const bErr = $('#b-err');
  bookform.addEventListener('submit', e => {
    e.preventDefault();
    const ci = $('#b-in').value, co = $('#b-out').value, g = $('#b-g').value;
    if ((ci || co) && !(ci && co && co > ci && ci >= today)) {
      bErr.textContent = t('err.dates'); bErr.hidden = false; return;
    }
    bErr.hidden = true;
    window.open(airbnbUrl('', { check_in: ci, check_out: co, adults: g }), '_blank', 'noopener');
  });

  /* ---------- Contact form ---------- */
  const form = $('#inquiry');
  const status = $('#c-status');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function check(el, ok) { el.closest('.field').classList.toggle('is-bad', !ok); return ok; }
  function validate() {
    const name = $('#c-name'), email = $('#c-email'), ci = $('#c-in'), co = $('#c-out');
    const r = [
      check(name, name.value.trim().length > 1),
      check(email, emailRe.test(email.value.trim())),
      check(ci, !!ci.value && ci.value >= today),
      check(co, !!co.value && co.value > ci.value)
    ];
    const firstBad = $('.field.is-bad input', form);
    if (firstBad) firstBad.focus();
    return r.every(Boolean);
  }
  $$('input', form).forEach(el => el.addEventListener('input', () => el.closest('.field').classList.remove('is-bad')));

  function showStatus(kind, extra) {
    status.hidden = false;
    status.className = 'inquiry__status' + (kind === 'ok' ? ' is-ok' : '');
    status.innerHTML = `<strong>${t(`st.${kind}.t`)}</strong>${t(`st.${kind}.p`)}`;
    if (extra) status.appendChild(extra);
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    status.hidden = true;
    if (!validate()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const airbnbBtn = () => {
      const a = document.createElement('a');
      a.className = 'btn btn--solid'; a.target = '_blank'; a.rel = 'noopener';
      a.href = airbnbUrl('', { check_in: data.arrival, check_out: data.departure, adults: data.guests });
      a.textContent = t('st.airbnb');
      return a;
    };

    if (CONFIG.formEndpoint) {
      const btn = $('.inquiry__send', form);
      const label = btn.innerHTML;
      btn.disabled = true; btn.textContent = t('st.sending');
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.assign({ _subject: `Villa Runje inquiry — ${data.arrival} → ${data.departure}`, language: lang }, data))
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset(); fillGuests();
        showStatus('ok');
      } catch (err) {
        showStatus('fail', airbnbBtn());
      } finally {
        btn.disabled = false; btn.innerHTML = label;
      }
      return;
    }
    if (CONFIG.inquiryEmail) {
      const body = `Name: ${data.name}\nEmail: ${data.email}\nArrival: ${data.arrival}\nDeparture: ${data.departure}\nGuests: ${data.guests}\n\n${data.message || ''}`;
      window.location.href = `mailto:${CONFIG.inquiryEmail}?subject=${encodeURIComponent('Villa Runje — ' + data.arrival + ' → ' + data.departure)}&body=${encodeURIComponent(body)}`;
      showStatus('mail');
      return;
    }
    showStatus('off', airbnbBtn());
  });

  /* ---------- Map facade ---------- */
  $('#map-load').addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.google.com/maps?q=${encodeURIComponent(CONFIG.mapQuery)}&z=12&output=embed`;
    f.title = 'Map — Gornje Sitno'; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade';
    f.setAttribute('allowfullscreen', '');
    const map = $('#map');
    map.replaceChildren(f);
  });

  /* ---------- Init ---------- */
  $('#year').textContent = String(new Date().getFullYear());
  const saved = store.get('vr-lang');
  const nav0 = (navigator.language || 'en').slice(0, 2).toLowerCase();
  setLang(saved || (LANGS.includes(nav0) ? nav0 : 'en'), false);
  onScroll();

  requestAnimationFrame(() => hero.classList.add('is-in'));
})();

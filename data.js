const storyData = {
  de: {
    // --- HZ. OSMAN PFAD (DE) ---
    osman_start: {
      title: "Der Brunnen von Ruma",
      text: "In Medina ist das Wasser knapp. Ein Mann verkauft das Wasser eines Brunnens zu sehr hohen Preisen an die armen Muslime. Was tust du?",
      options: [
        {
          text: "Ich kaufe den Brunnen für eine enorme Summe und schenke das Wasser allen Menschen.",
          nextId: "osman_heer",
          isMatch: true,
          trait: "Großzügigkeit",
          characterChange: "Osman (Der Wohltäter)",
          wisdom:
            "Osman kaufte den Brunnen Ruma, damit kein Muslim mehr Durst leiden musste.",
        },
        {
          text: "Ich versuche, den Verkäufer zu überreden, die Preise zu senken.",
          nextId: "beobachter_weg",
          isMatch: false,
        },
      ],
    },
    osman_heer: {
      title: "Das Heer der Not",
      text: "Der Prophet (s.a.w.) ruft zur Ausrüstung des Heeres für Tabuk auf. Die Muslime sind sehr arm. Wie viel von deinem Vermögen gibst du?",
      options: [
        {
          text: "Ich rüste ein Drittel des Heeres allein aus und spende hunderte Kamele und Gold.",
          nextId: "osman_koran",
          isMatch: true,
          trait: "Großzügigkeit",
          wisdom:
            "Der Prophet sagte über ihn: 'Was auch immer Osman ab heute tut, es wird ihm nicht schaden'.",
        },
        {
          text: "Ich gebe eine angemessene Spende, aber behalte den Rest für mein Geschäft.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    osman_koran: {
      title: "Die Einheit des Buches",
      text: "Als Kalif bemerkst du, dass die Menschen den Koran in verschiedenen Dialekten lesen, was zu Streit führt. Was tust du?",
      options: [
        {
          text: "Ich lasse den Koran vereinheitlichen und Kopien in alle Länder schicken.",
          nextId: "osman_finale",
          isMatch: true,
          trait: "Weisheit",
          wisdom:
            "Dank Hz. Osman lesen wir heute auf der ganzen Welt denselben Koran.",
        },
        {
          text: "Ich überlasse es den Menschen, wie sie den Koran rezitieren möchten.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    osman_finale: {
      title: "Das Licht der Sittsamtkeit",
      text: "Du hast den Weg von Hz. Osman vollendet. Er war so sittsam, dass sich sogar die Engel vor ihm schämten. \n\nBediüzzaman Said Nursi sagt: 'Wahre Großzügigkeit ist ein Strahl der göttlichen Schönheit.' Hz. Osman besaß die Welt, aber sein Herz gehörte nur Allah.",
      options: [],
    },
    // --- ABDURRAHMAN BIN AVF PFAD (DE) ---
    avf_start: {
      title: "Ankunft ohne Besitz",
      text: "Du kommst als Flüchtling in Medina an und hast alles in Mekka verloren. Dein neuer Bruder Sa'd bietet dir die Hälfte seines Vermögens an. Was tust du?",
      options: [
        {
          text: "Ich sage: 'Möge Allah dich segnen, aber zeig mir nur den Weg zum Markt'.",
          nextId: "avf_handel",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "Abdurrahman (Händler)",
          wisdom:
            "Er wollte durch eigene Arbeit erfolgreich sein und niemandem zur Last fallen.",
        },
        {
          text: "Ich nehme das Geld an, um schnell wieder reich zu werden.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    avf_handel: {
      title: "Der ehrliche Kaufmann",
      text: "Du verkaufst Butter und Käse auf dem Markt. Du könntest die Preise künstlich erhöhen, um mehr Gewinn zu machen. Wie handelst du?",
      options: [
        {
          text: "Ich bleibe ehrlich und verkaufe zu einem fairen Preis.",
          nextId: "avf_spende",
          isMatch: true,
          trait: "Ehrlichkeit",
          wisdom:
            "Abdurrahman bin Avf sagte: 'Ich betrüge nicht und verberge keine Mängel'.",
        },
        {
          text: "Ich erhöhe die Preise, weil die Nachfrage groß ist.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    avf_spende: {
      title: "Die Karawane der Güte",
      text: "Du besitzt nun eine Karawane mit 700 Kamelen. Medina leidet Hunger. Behältst du die Waren für dich oder spendest du alles?",
      options: [
        {
          text: "Ich spende die gesamte Karawane inklusive der Lasten für Allah.",
          nextId: "avf_finale",
          isMatch: true,
          trait: "Großzügigkeit",
          wisdom:
            "Er spendete so viel, dass man sagte, ganz Medina lebe von seinem Reichtum.",
        },
        {
          text: "Ich verkaufe die Waren, um mein Kapital zu vergrößern.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    avf_finale: {
      title: "Der Segen des Händlers",
      text: "Du hast den Weg von Abdurrahman bin Avf vollendet. Er war einer der reichsten Männer, aber sein Herz hing nicht am Geld. \n\nBediüzzaman Said Nursi sagt: 'Wenn man die Welt im Namen Allahs nutzt, wird sie zu einer Quelle des Segens (Barakah).'",
      options: [],
    },
    // --- HABBAB BIN ERET PFAD (DE) ---
    habbab_start: {
      title: "Das Eisen im Feuer",
      text: "Du bist Habbab, ein Sklave und Schmied. Du hast den Islam angenommen. Deine Besitzerin erfährt es und presst glühendes Eisen auf deinen Kopf. Was tust du?",
      options: [
        {
          text: "Ich bleibe standhaft und halte am Tawheed fest.",
          nextId: "habbab_lehrer",
          isMatch: true,
          trait: "Geduld",
          characterChange: "Habbab (Der Standhafte)",
          wisdom:
            "Habbab war härter als das Eisen, das er schmiedete. Sein Glaube war unbesiegbar.",
        },
        {
          text: "Ich gebe nach, um die Qualen zu beenden.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    habbab_lehrer: {
      title: "Der geheime Unterricht",
      text: "Du unterrichtest heimlich Fatima bint al-Chattab im Koran. Ihr Bruder Umar stürmt wütend herein. Fliehst du?",
      options: [
        {
          text: "Ich bleibe und zeige ihm die Kraft der Verse.",
          nextId: "habbab_finale",
          isMatch: true,
          trait: "Mut",
          wisdom:
            "Habbabs Standhaftigkeit in diesem Moment führte dazu, dass Umar (r.a.) den Islam annahm.",
        },
        {
          text: "Ich verstecke mich, um mein Leben zu schützen.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    habbab_finale: {
      title: "Gereinigtes Gold",
      text: "Du hast Habbabs Weg vollendet. Ein Sklave, der zum Lehrer der Umma wurde. \n\nBediüzzaman Said Nursi sagt: 'Die Prüfungen sind wie ein Feuer, das das Eisen zu Stahl härtet.'",
      options: [],
    },
    // --- HZ. ALI PFAD ---
    ali_start: {
      title: "Das erste Kind",
      text: "Du bist erst 10 Jahre alt und siehst deinen Cousin, den Propheten (s.a.w.), beten. Du spürst die Wahrheit in deinem Herzen. Was tust du?",
      options: [
        {
          text: "Ich nehme den Islam sofort an, ohne jemanden zu fragen.",
          nextId: "ali_hidschra",
          isMatch: true,
          trait: "Mut",
          characterChange: "Hz. Ali (jung)",
          wisdom:
            "Ali war das erste Kind, das den Islam annahm. Sein Verstand war schon in jungen Jahren hellwach.",
        },
        {
          text: "Ich warte und frage erst meinen Vater um Erlaubnis.",
          nextId: "beobachter_weg",
          isMatch: false,
          trait: "Weisheit",
        },
      ],
    },
    ali_hidschra: {
      title: "Die gefährliche Nacht",
      text: "Die Feinde wollen den Propheten in seinem Haus töten. Er bittet dich, dich in sein Bett zu legen, um sie abzulenken. Es könnte dein Tod sein. Was tust du?",
      options: [
        {
          text: "Ich lege mich furchtlos in sein Bett, damit er fliehen kann.",
          nextId: "ali_khaybar",
          isMatch: true,
          trait: "Mut",
          characterChange: "Hz. Ali (Beschützer)",
          wisdom:
            "Er riskierte sein Leben für den Gesandten Allahs. Wahrer Mut ist die Abwesenheit von Egoismus.",
        },
        {
          text: "Ich suche einen sichereren Weg, ihm zu helfen.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    ali_khaybar: {
      title: "Das Tor von Khaybar",
      text: "Die Festung Khaybar scheint uneinnehmbar. Der Prophet gibt dir die Fahne. Die Krieger blicken auf dich. Wie handelst du?",
      options: [
        {
          text: "Ich stürme voran und öffne das Tor mit der Kraft meines Glaubens.",
          nextId: "ali_finale",
          isMatch: true,
          trait: "Mut",
          characterChange: "Löwe Allahs",
          wisdom:
            "Hz. Ali ist als 'Asadullah' (Löwe Allahs) bekannt für seine unbezwingbare Kraft in der Schlacht.",
        },
        {
          text: "Ich warte auf eine bessere Strategie der anderen.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    ali_finale: {
      title: "Das Tor zum Wissen",
      text: "Du hast den Weg von Hz. Ali vollendet. Der Prophet sagte: 'Ich bin die Stadt des Wissens und Ali ist ihr Tor.' \n\nBediüzzaman Said Nursi schreibt: 'Hz. Ali ist der König der Heiligkeit (Shah-i Vilayet) und zeigt uns, dass Wissen und Mut eins sind.'",
      options: [],
    },
    // --- ABDULLAH IBN MESUD PFAD ---
    mesud_start: {
      title: "Die Begegnung in der Wüste",
      text: "Du bist der junge Hirte Abdullah. Ein Mann (der Prophet) bittet dich um Milch von einer Ziege, die dir nicht gehört. Was tust du?",
      options: [
        {
          text: "Ich lehne ab, da die Ziege nicht mein Eigentum ist.",
          nextId: "mesud_wunder",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "Ehrlicher Hirte",
          wisdom: "Ehrlichkeit ist das Fundament des Iman.",
        },
        {
          text: "Ich gebe ihm die Milch, um großzügig zu sein.",
          nextId: "beobachter_weg",
          isMatch: false,
          trait: "Großzügigkeit",
          characterChange: "Großzügiger Fremder",
          wisdom:
            "Großzügigkeit ist gut, aber Ehrlichkeit gegenüber dem Eigentümer geht vor.",
        },
      ],
    },
    mesud_wunder: {
      title: "Das Wunder der Milch",
      text: "Der Prophet streicht über eine junge Ziege, die keine Milch gibt, und sie füllt sich plötzlich. Was tust du?",
      options: [
        {
          text: "Ich bitte ihn: 'Lehre mich von diesen Worten!'",
          nextId: "mesud_bekenntnis",
          isMatch: true,
          trait: "Weisheit",
          characterChange: "Suchender Schüler",
          wisdom: "Ibn Mesud erkannte sofort die Wahrheit hinter dem Wunder.",
        },
        {
          text: "Ich laufe erschrocken weg vor dieser Zauberei.",
          nextId: "angst_ende",
          isMatch: false,
          wisdom: "Angst verhindert die Erkenntnis der Wahrheit.",
        },
      ],
    },
    mesud_bekenntnis: {
      title: "Der sechste Muslim",
      text: "Du erfährst vom Tawheed. Du hast keinen Clan, der dich schützt. Bekennst du dich trotz deiner Schwäche?",
      options: [
        {
          text: "Ja, ich bekenne mich sofort als sechster Muslim.",
          nextId: "mesud_diener",
          isMatch: true,
          trait: "Mut",
          characterChange: "Abdullah ibn Mesud",
          wisdom: "Wahrer Mut braucht keine körperliche Stärke.",
        },
        {
          text: "Ich lerne erst heimlich, um mich zu schützen.",
          nextId: "beobachter_weg",
          isMatch: false,
          trait: "Weisheit",
          wisdom:
            "Vorsicht ist klug, aber Ibn Mesud wählte die direkte Hingabe.",
        },
      ],
    },
    mesud_diener: {
      title: "Der ständige Begleiter",
      text: "Der Prophet braucht jemanden, der seine Sandalen trägt. Nimmst du diesen Dienst an?",
      options: [
        {
          text: "Ja, ich möchte ihm so nah wie möglich sein.",
          nextId: "mesud_kaaba",
          isMatch: true,
          trait: "Geduld",
          characterChange: "Begleiter des Propheten",
          wisdom: "Durch den Dienst lernte er den Koran direkt von der Quelle.",
        },
        {
          text: "Nein, ich suche eine Aufgabe mit mehr Ansehen.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    mesud_kaaba: {
      title: "Mut an der Kaaba",
      text: "Die Muslime fragen: 'Wer liest den Koran laut an der Kaaba vor?' Meldest du dich?",
      options: [
        {
          text: "Ich gehe hin und lese Sure Ar-Rahman laut vor.",
          nextId: "mesud_folter",
          isMatch: true,
          trait: "Mut",
          wisdom: "Er war der erste, der den Koran öffentlich in Mekka las.",
        },
        {
          text: "Ich bleibe im Hintergrund.",
          nextId: "lokal_weg",
          isMatch: false,
        },
      ],
    },
    mesud_folter: {
      title: "Standhaftigkeit",
      text: "Die Quraisch schlagen dich blutig. Gehst du am nächsten Tag wieder hin?",
      options: [
        {
          text: "Ja, ich werde morgen wieder dort lesen!",
          nextId: "mesud_finale",
          isMatch: true,
          trait: "Geduld",
          wisdom: "Seine Entschlossenheit war stärker als der Schmerz.",
        },
        {
          text: "Nein, das war zu gefährlich.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    mesud_finale: {
      title: "Der Gelehrte Sahaba",
      text: "Du hast den Weg von Ibn Mesud vollendet. Vom Hirten zum Lehrer der Umma. \n\nBediüzzaman Said Nursi sagt: 'Ein Mensch, der den wahren Glauben erlangt, kann dem Universum trotzen.'",
      options: [],
    },

    // --- SA'D BIN EBI VAKKAS PFAD ---
    sad_start: {
      title: "Die Prüfung der Liebe",
      text: "Du bist Sa'd, ein junger Pfeilmacher. Deine Mutter tritt in einen Hungerstreik, damit du den Islam verlässt. Was tust du?",
      options: [
        {
          text: "Ich bleibe standhaft: 'Selbst bei 100 Seelen verlasse ich meinen Glauben nicht.'",
          nextId: "sad_uhud",
          isMatch: true,
          trait: "Mut",
          characterChange: "Sa'd bin Ebi Vakkas",
          wisdom: "Sa'd zeigte, dass die Liebe zu Allah über allem steht.",
        },
        {
          text: "Ich gebe nach, um sie zu retten.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    sad_uhud: {
      title: "Der Bogenschütze des Propheten",
      text: "In Uhud sagt der Prophet: 'Schieß, Sa'd!'. Bleibst du an seiner Seite?",
      options: [
        {
          text: "Ich schütze ihn mit jedem Pfeil.",
          nextId: "sad_finale",
          isMatch: true,
          trait: "Mut",
          wisdom:
            "Er war der Bogenschütze, für den der Prophet alles opfern würde.",
        },
        {
          text: "Ich suche Schutz für mich selbst.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    sad_finale: {
      title: "Der Löwe im Islam",
      text: "Du hast den Weg von Sa'd vollendet. Ein Held der Wahrheit, dessen Gebete stets erhört wurden.",
      options: [],
    },

    // --- MUS'AB BIN UMEYR PFAD ---
    musab_start: {
      title: "Der Duft von Mekka",
      text: "Du bist Mus'ab, ein reicher Jüngling. Deine Mutter droht dir mit Verstoßung. Was wählst du?",
      options: [
        {
          text: "Ich wähle den Iman und verzichte auf den Luxus.",
          nextId: "musab_botschafter",
          isMatch: true,
          trait: "Mut",
          characterChange: "Mus'ab b. Umeyr",
          wisdom: "Mus'ab tauschte Seide gegen Wolle für das ewige Licht.",
        },
        {
          text: "Ich behalte mein Erbe und bleibe im Wohlstand.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    musab_botschafter: {
      title: "Der erste Lehrer",
      text: "Der Prophet sendet dich nach Medina, um den Koran zu lehren. Nimmst du an?",
      options: [
        {
          text: "Ja, ich bereite Medina auf den Islam vor.",
          nextId: "musab_uhud",
          isMatch: true,
          trait: "Weisheit",
          characterChange: "Muallim Mus'ab",
          wisdom: "Er wurde der erste Botschafter des Islam.",
        },
        {
          text: "Das ist mir zu viel Verantwortung.",
          nextId: "lokal_weg",
          isMatch: false,
        },
      ],
    },
    musab_uhud: {
      title: "Das Banner von Uhud",
      text: "In Uhud hältst du die Flagge. Du bist verletzt. Lässt du sie sinken?",
      options: [
        {
          text: "Ich halte die Flagge fest bis zum Ende.",
          nextId: "musab_finale",
          isMatch: true,
          trait: "Mut",
          wisdom: "Er starb als Märtyrer, um das Banner des Islam zu schützen.",
        },
        {
          text: "Ich rette mich selbst.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    musab_finale: {
      title: "Der erste Botschafter",
      text: "Du hast Mus'abs Weg vollendet. Bediüzzaman sagt: 'Die Welt ist ein Gästehaus.' Mus'ab hat sein Zimmer perfekt vorbereitet.",
      options: [],
    },

    // --- ALLGEMEINE ENDEN ---
    beobachter_weg: {
      title: "Ein anderer Weg",
      text: "Du hast klug gehandelt, aber den Pfad der totalen Hingabe verlassen.",
      options: [],
    },
    angst_ende: {
      title: "Weg beendet",
      text: "Die Angst verstellte dir den Blick.",
      options: [],
    },
    bequem_ende: {
      title: "Weg beendet",
      text: "Bequemlichkeit stoppt den Aufstieg.",
      options: [],
    },
    welt_ende: {
      title: "Weg beendet",
      text: "Die Welt war wichtiger als der Glaube.",
      options: [],
    },
    lokal_weg: {
      title: "Stiller Helfer",
      text: "Du hast im Stillen gedient.",
      options: [],
    },
  },

  tr: {
    // --- HZ. OSMAN YOLU (TR) ---
    osman_start: {
      title: "Rume Kuyusu",
      text: "Medine'de su kıtlığı var. Bir adam suyun kovasını Müslümanlara çok pahalıya satıyor. Ne yaparsın?",
      options: [
        {
          text: "Kuyuyu büyük bir bedelle satın alır ve herkese bedava vakfederim.",
          nextId: "osman_heer",
          isMatch: true,
          trait: "Großzügigkeit",
          characterChange: "Hz. Osman (Hayırsever)",
          wisdom:
            "Hz. Osman, Rume kuyusunu alarak müminlerin su ihtiyacını sonsuza dek çözdü.",
        },
        {
          text: "Satıcıyla fiyatları indirmesi için pazarlık yaparım.",
          nextId: "beobachter_weg",
          isMatch: false,
        },
      ],
    },
    osman_heer: {
      title: "Zorluk Ordusu",
      text: "Peygamberimiz (sav) Tebük seferi için yardım istiyor. Müslümanlar çok fakir ve darda. Ne kadar bağışlarsın?",
      options: [
        {
          text: "Ordunun üçte birini tek başıma donatır, yüzlerce deve ve altın veririm.",
          nextId: "osman_koran",
          isMatch: true,
          trait: "Großzügigkeit",
          wisdom:
            "Efendimiz (sav) onun için: 'Bugünden sonra Osman'a yaptığı hiçbir şey zarar vermez' buyurdu.",
        },
        {
          text: "Uygun bir miktar bağış yapar, kalanını ticaretim için saklarım.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    osman_koran: {
      title: "Kitabın Birliği",
      text: "Halifeliğin döneminde Kur'an kıraatinde farklılıklar ve tartışmalar olduğunu görüyorsun. Ne yaparsın?",
      options: [
        {
          text: "Kur'an'ı tek bir lehçede birleştirip nüshaları her yere gönderirim.",
          nextId: "osman_finale",
          isMatch: true,
          trait: "Weisheit",
          wisdom:
            "Hz. Osman sayesinde bugün tüm dünya aynı Mushaf üzerinden Kur'an okumaktadır.",
        },
        {
          text: "İnsanları Kur'an'ı istedikleri gibi okumakta serbest bırakırım.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    osman_finale: {
      title: "Haya Nuru",
      text: "Hz. Osman'ın yolunu tamamladın. O kadar hayalıydı ki melekler bile ondan haya ederdi. \n\nBediüzzaman Said Nursi der ki: 'Hakiki cömertlik, İlahî güzelliğin bir parıltısıdır.' Hz. Osman dünyaya sahip oldu ama dünya onun kalbine giremedi.",
      options: [],
    },
    // --- ABDURRAHMAN BİN AVF YOLU (TR) ---
    avf_start: {
      title: "Varlıksız Varış",
      text: "Medine'ye bir muhacir olarak geldin ve her şeyini Mekke'de bıraktın. Kardeşin Sa'd sana malının yarısını teklif ediyor. Ne yaparsın?",
      options: [
        {
          text: "Allah senden razı olsun, ama bana sadece çarşının yolunu göster' derim.",
          nextId: "avf_handel",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "Abdurrahman (Tüccar)",
          wisdom:
            "Kendi emeğiyle başarmayı seçti ve kimseye yük olmak istemedi.",
        },
        {
          text: "Hızlıca zengin olmak için bu yardımı kabul ederim.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    avf_handel: {
      title: "Dürüst Tüccar",
      text: "Pazarda yağ ve peynir satıyorsun. Daha fazla kâr etmek için fiyatları hileyle artırabilirsin. Ne yaparsın?",
      options: [
        {
          text: "Dürüst kalırım ve hakkaniyetli bir fiyata satarım.",
          nextId: "avf_spende",
          isMatch: true,
          trait: "Ehrlichkeit",
          wisdom:
            "Abdurrahman bin Avf: 'Asla aldatmam ve malın kusurunu gizlemem' derdi.",
        },
        {
          text: "Talep çok olduğu için fiyatları yükseltirim.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    avf_spende: {
      title: "İyilik Kervanı",
      text: "Artık 700 develik bir kervanın var. Medine'de kıtlık var. Malları kendine mi saklarsın yoksa bağışlar mısın?",
      options: [
        {
          text: "Kervanı tüm yüküyle beraber Allah rızası için bağışlarım.",
          nextId: "avf_finale",
          isMatch: true,
          trait: "Großzügigkeit",
          wisdom:
            "O kadar çok bağış yapardı ki, Medine halkının yarısı onun malıyla geçiniyor denirdi.",
        },
        {
          text: "Sermayemi büyütmek için malları yüksek fiyata satarım.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    avf_finale: {
      title: "Tüccarın Bereketi",
      text: "Abdurrahman bin Avf'ın yolunu tamamladın. En zenginlerden biriydi ama kalbi paraya bağlı değildi. \n\nBediüzzaman Said Nursi der ki: 'Dünyayı asıl sahibi adına kullanırsan, o senin için bir bereket kaynağı olur.'",
      options: [],
    },
    // --- HABBAB BİN ERET YOLU (TR) ---
    habbab_start: {
      title: "Ateşteki Demir",
      text: "Sen bir köle ve demirci olan Habbab'sın. Müslüman oldun. Sahibin bunu öğrendi ve başına kızgın demir bastırıyor. Ne yaparsın?",
      options: [
        {
          text: "Sabrederim ve Tevhid'e tutunmaya devam ederim.",
          nextId: "habbab_lehrer",
          isMatch: true,
          trait: "Geduld",
          characterChange: "Habbab (Metanet Sahibi)",
          wisdom:
            "Habbab, dövdüğü demirden daha sertti. İmanı sarsılmaz bir kale gibiydi.",
        },
        {
          text: "İşkenceyi bitirmek için pes ederim.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    habbab_lehrer: {
      title: "Gizli Ders",
      text: "Fatıma bint Hattat'a gizlice Kur'an öğretiyorsun. Kardeşi Ömer öfkeyle içeri giriyor. Kaçar mısın?",
      options: [
        {
          text: "Kalırım ve ona ayetlerin gücünü gösteririm.",
          nextId: "habbab_finale",
          isMatch: true,
          trait: "Mut",
          wisdom:
            "Habbab'ın o andaki duruşu, Hz. Ömer'in Müslüman olmasına vesile oldu.",
        },
        {
          text: "Canımı kurtarmak için saklanırım.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    habbab_finale: {
      title: "Arınmış Altın",
      text: "Habbab'ın yolunu tamamladın. Ümmetin hocası olan bir köle... \n\nBediüzzaman Said Nursi der ki: 'Musibetler, demiri çeliğe dönüştüren bir ateş gibidir.'",
      options: [],
    },
    // --- HZ. ALİ YOLU ---
    ali_start: {
      title: "İlk Çocuk",
      text: "Henüz 10 yaşındasın ve kuzenin Peygamber'i (sav) namaz kılarken gördün. Kalbinde hakikati hissediyorsun. Ne yaparsın?",
      options: [
        {
          text: "Kimseye sormadan hemen İslam'ı kabul ederim.",
          nextId: "ali_hidschra",
          isMatch: true,
          trait: "Mut",
          characterChange: "Hz. Ali (Genç)",
          wisdom:
            "Hz. Ali Müslüman olan ilk çocuktur. Küçük yaşta büyük bir feraset göstermiştir.",
        },
        {
          text: "Beklerim ve önce babama danışırım.",
          nextId: "beobachter_weg",
          isMatch: false,
          trait: "Weisheit",
        },
      ],
    },
    ali_hidschra: {
      title: "Tehlikeli Gece",
      text: "Düşmanlar Peygamber'i öldürmek için evi kuşattı. O, senden yatağına yatmanı istiyor. Bu ölümcül bir görev. Ne yaparsın?",
      options: [
        {
          text: "Korkmadan yatağına yatarım ki o güvenle hicret edebilsin.",
          nextId: "ali_khaybar",
          isMatch: true,
          trait: "Mut",
          characterChange: "Hz. Ali (Muhafız)",
          wisdom:
            "Canını Peygamber için feda etmeye hazırdı. Gerçek cesaret, benliği aşmaktır.",
        },
        {
          text: "Yardım etmek için daha güvenli bir yol ararım.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    ali_khaybar: {
      title: "Hayber Kapısı",
      text: "Hayber kalesi bir türlü geçilemiyor. Peygamber sancağı sana verdi. Ne yaparsın?",
      options: [
        {
          text: "İman gücüyle öne atılır ve kalenin kapısını sökerim.",
          nextId: "ali_finale",
          isMatch: true,
          trait: "Mut",
          characterChange: "Allah'ın Aslanı",
          wisdom:
            "Hz. Ali, savaş meydanlarındaki yenilmezliğiyle 'Esedullah' lakabını almıştır.",
        },
        {
          text: "Başkalarının bir strateji geliştirmesini beklerim.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    ali_finale: {
      title: "İlim Şehri",
      text: "Hz. Ali'nin yolunu tamamladın. Peygamberimiz buyurdu: 'Ben ilmin şehriyim, Ali ise onun kapısıdır.' \n\nBediüzzaman Said Nursi der ki: 'Hz. Ali velayetin şahıdır ve bize ilim ile cesaretin birleştiği yolu gösterir.'",
      options: [],
    },
    // --- ABDULLAH IBN MESUD YOLU ---
    mesud_start: {
      title: "Çölde Karşılaşma",
      text: "Genç bir çobansın. Bir adam senden emanet koyunun sütünü istiyor. Ne yaparsın?",
      options: [
        {
          text: "Reddederim, çünkü koyunlar benim değil.",
          nextId: "mesud_wunder",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "Dürüst Çoban",
          wisdom: "Emanete sadakat imanın temelidir.",
        },
        {
          text: "Cömertlik olsun diye sütü veririm.",
          nextId: "beobachter_weg",
          isMatch: false,
          trait: "Großzügigkeit",
          characterChange: "Cömert Yabancı",
          wisdom: "Cömertlik güzeldir ama emanete hıyanet edilemez.",
        },
      ],
    },
    mesud_wunder: {
      title: "Süt Mucizesi",
      text: "Peygamber kısır bir keçiye dokunuyor ve keçi sütle doluyor. Ne yaparsın?",
      options: [
        {
          text: "Ona yalvarırım: 'Bana bu kelimelerden öğret!'",
          nextId: "mesud_bekenntnis",
          isMatch: true,
          trait: "Weisheit",
          characterChange: "İlim Talebesi",
          wisdom: "İbn Mesud mucizenin arkasındaki hakikati hemen kavradı.",
        },
        {
          text: "Korkup kaçarım.",
          nextId: "angst_ende",
          isMatch: false,
          wisdom: "Korku, hakikati görmeye engeldir.",
        },
      ],
    },
    mesud_bekenntnis: {
      title: "Altıncı Müslüman",
      text: "Tevhid'i öğrendin. Altıncı Müslüman olarak imanını açıklar mısın?",
      options: [
        {
          text: "Evet, hemen imanımı açıklarım.",
          nextId: "mesud_diener",
          isMatch: true,
          trait: "Mut",
          characterChange: "Abdullah ibn Mesud",
          wisdom: "Hakiki cesaret pazı gücünde değil, kalptedir.",
        },
        {
          text: "Gizli kalmayı tercih ederim.",
          nextId: "beobachter_weg",
          isMatch: false,
          trait: "Weisheit",
          wisdom: "Tedbir iyidir ama İbn Mesud doğrudan teslimiyeti seçti.",
        },
      ],
    },
    mesud_diener: {
      title: "Peygamberin Hizmetkarı",
      text: "Peygamberin eşyalarını taşıyacak birine ihtiyacı var. Kabul eder misin?",
      options: [
        {
          text: "Evet, ona en yakın olmak için kabul ederim.",
          nextId: "mesud_kaaba",
          isMatch: true,
          trait: "Geduld",
          characterChange: "Peygamber Dostu",
          wisdom: "Hizmet ederek Kur'an'ı bizzat kaynağından öğrendi.",
        },
        {
          text: "Hayır, daha itibarlı bir iş ararım.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    mesud_kaaba: {
      title: "Kabe'de Cesaret",
      text: "Kabe'de Kur'an'ı yüksek sesle okur musun? Müşrikler tehlikeli.",
      options: [
        {
          text: "Giderim ve Rahman suresini haykırırım.",
          nextId: "mesud_folter",
          isMatch: true,
          trait: "Mut",
          wisdom: "Mekke'de açıkça Kur'an okuyan ilk sahabi oldu.",
        },
        {
          text: "Geri planda kalırım.",
          nextId: "lokal_weg",
          isMatch: false,
        },
      ],
    },
    mesud_folter: {
      title: "Sarsılmazlık",
      text: "Müşrikler seni dövdü. Yarın tekrar gider misin?",
      options: [
        {
          text: "Evet, yarın yine gidip okuyacağım!",
          nextId: "mesud_finale",
          isMatch: true,
          trait: "Geduld",
          wisdom: "Onun azmi aldığı yaralardan daha büyüktü.",
        },
        {
          text: "Hayır, bu kadarı yeter.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    mesud_finale: {
      title: "Alim Sahabi",
      text: "İbn Mesud'un yolunu tamamladın. \n\nBediüzzaman Said Nursi: 'Hakikî imanı elde eden adam, kâinata meydan okuyabilir.'",
      options: [],
    },

    // --- SA'D BİN EBİ VAKKAS YOLU ---
    sad_start: {
      title: "Sevgi İmtihanı",
      text: "Annen İslam'dan dönmen için açlık grevi yapıyor. Ne yaparsın?",
      options: [
        {
          text: "Kararlı dururum: 'Yüz canın olsa yine dönmem.'",
          nextId: "sad_uhud",
          isMatch: true,
          trait: "Mut",
          characterChange: "Sa'd bin Ebi Vakkas",
          wisdom:
            "Sa'd, Allah sevgisinin her şeyin üstünde olduğunu kanıtladı.",
        },
        {
          text: "Annem için vazgeçerim.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    sad_uhud: {
      title: "Peygamberin Okçusu",
      text: "Uhud'da Peygamber 'At Ya Sa'd!' diyor. Yanında kalır mısın?",
      options: [
        {
          text: "Onu her okumla korurum.",
          nextId: "sad_finale",
          isMatch: true,
          trait: "Mut",
          wisdom: "Peygamberin 'Anam babam feda olsun' dediği okçu oldu.",
        },
        {
          text: "Kendi canımı kurtarırım.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    sad_finale: {
      title: "İslam'ın Aslanı",
      text: "Sa'd'ın yolunu tamamladın. Duası makbul bir komutan oldun.",
      options: [],
    },

    // --- MUS'AB BİN UMEYR YOLU ---
    musab_start: {
      title: "Mekke'nin Kokusu",
      text: "Zengin bir gençsin. Annen seni mirastan mahrum etmekle tehdit ediyor.",
      options: [
        {
          text: "Zenginliği bırakır, imanı seçerim.",
          nextId: "musab_botschafter",
          isMatch: true,
          trait: "Mut",
          characterChange: "Mus'ab b. Umeyr",
          wisdom: "Mus'ab ipeği yüne feda etti.",
        },
        {
          text: "Mirasımı seçerim.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    musab_botschafter: {
      title: "İlk Öğretmen",
      text: "Peygamber seni Medine'ye elçi olarak gönderiyor. Gider misin?",
      options: [
        {
          text: "Evet, Medine'yi İslam'a hazırlarım.",
          nextId: "musab_uhud",
          isMatch: true,
          trait: "Weisheit",
          characterChange: "Muallim Mus'ab",
          wisdom: "Medine'nin kapılarını o açtı.",
        },
        {
          text: "Bu sorumluluk çok ağır.",
          nextId: "lokal_weg",
          isMatch: false,
        },
      ],
    },
    musab_uhud: {
      title: "Uhud Sancağı",
      text: "Sancağı taşıyorsun, yaralandın. Bırakır mısın?",
      options: [
        {
          text: "Son nefesime kadar bırakmam.",
          nextId: "musab_finale",
          isMatch: true,
          trait: "Mut",
          wisdom: "Sancağı korurken şehit düştü.",
        },
        {
          text: "Sancağı bırakıp kaçarım.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    musab_finale: {
      title: "İlk Elçi",
      text: "Mus'ab'ın yolunu tamamladın. Bediüzzaman der ki: 'Dünya bir misafirhanedir.'",
      options: [],
    },

    // --- GENEL SONLAR ---
    beobachter_weg: {
      title: "Farklı Yol",
      text: "Hikmetli davrandın ama İbn Mesud'un yolundan ayrıldın.",
      options: [],
    },
    angst_ende: { title: "Yol Bitti", text: "Korku ağır bastı.", options: [] },
    bequem_ende: {
      title: "Yol Bitti",
      text: "Konfor tercihin oldu.",
      options: [],
    },
    welt_ende: {
      title: "Yol Bitti",
      text: "Dünya malı imandan tatlı geldi.",
      options: [],
    },
    lokal_weg: {
      title: "Sessiz Yardımcı",
      text: "Sessizce hizmet ettin.",
      options: [],
    },
  },
};

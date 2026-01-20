const storyData = {
  de: {
    // --- HZ. OSMAN PFAD (DE) ---
    osman_start: {
      title: "Der Brunnen von Ruma",
      text: "In Medina herrscht Wasserknappheit. Ein Mann verkauft das Wasser eines Brunnens zu extrem hohen Preisen an die Muslime. Du bist sehr reich. Was tust du?",
      options: [
        {
          text: "Ich kaufe den Brunnen und schenke ihn dem Volk.",
          nextId: "osman_heer",
          isMatch: true,
          trait: "Großzügigkeit",
          characterChange: "Hz. Osman (Wohltäter)",
          wisdom:
            "Hz. Osman kaufte den Brunnen von Ruma und machte ihn zur Stiftung (Vakıf), damit alle Muslime kostenlos Wasser trinken konnten.",
        },
        {
          text: "Ich verhandle mit dem Verkäufer, damit er die Preise senkt.",
          nextId: "beobachter_weg",
          isMatch: false,
        },
      ],
    },
    osman_heer: {
      title: "Das Heer der Not",
      text: "Der Prophet (sav) bittet um Hilfe für den Tabuk-Feldzug. Die Muslime sind arm und in Not. Du bist sehr reich. Wie hilfst du?",
      options: [
        {
          text: "Ich rüste das Heer aus und spende hunderte Kamele und Gold.",
          nextId: "osman_koran",
          isMatch: true,
          trait: "Großzügigkeit",
          wisdom:
            "Der Gesandte Allahs (sav) sagte über ihn: 'Was auch immer Osman ab heute tut, es wird ihm nicht schaden'.",
        },
        {
          text: "Ich spende eine angemessene Summe und behalte den Rest für meinen Handel.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    osman_koran: {
      title: "Die Einheit des Buches",
      text: "Während deines Kalifats bemerkst du Unterschiede und Streitigkeiten bei der Koran-Rezitation. Was tust du?",
      options: [
        {
          text: "Ich vereinheitliche den Koran auf einen Dialekt und sende Kopien überall hin.",
          nextId: "osman_finale",
          isMatch: true,
          trait: "Weisheit",
          wisdom:
            "Dank Hz. Osman liest heute die ganze Welt den Koran aus demselben Mushaf (Buch).",
        },
        {
          text: "Ich lasse den Menschen die Freiheit, den Koran so zu lesen, wie sie wollen.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    osman_finale: {
      title: "Licht der Sittsamtkeit",
      text: "Du hast den Weg von Hz. Osman vollendet. Er war so sittsam, dass sich sogar die Engel vor ihm schämten. \n\nBediüzzaman Said Nursi sagt: 'Wahre Wohltätigkeit ist echte Großzügigkeit, wenn sie an Bedürftige und Arme gerichtet ist. Wenn sie jedoch an jemanden gerichtet ist, der keine Not leidet, macht sie diese Person faul.' Hz. Osman besaß die Welt, aber die Welt konnte nicht in sein Herz eindringen.",
      options: [],
    },

    // --- ABDURRAHMAN BIN AVF PFAD (DE) ---
    avf_start: {
      title: "Ankunft ohne Besitz",
      text: "Du kommst als Flüchtling (Muhacir) nach Medina und hast alles in Mekka gelassen. Dein Bruder Sa'd bin Rabi bietet dir die Hälfte seines Vermögens an. Was tust du?",
      options: [
        {
          text: "Ich sage: 'Möge Allah dich belohnen, aber zeig mir nur den Weg zum Markt'.",
          nextId: "avf_handel",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "Abdurrahman (Händler)",
          wisdom:
            "Er entschied sich für den Erfolg durch eigene Arbeit und wollte niemandem zur Last fallen.",
        },
        {
          text: "Ich nehme die Hilfe an, um schnell wieder wohlhabend zu werden.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    avf_handel: {
      title: "Der ehrliche Kaufmann",
      text: "Du verkaufst Butter und Käse auf dem Markt. Du könntest die Preise heimlich durch Täuschung erhöhen und niemand würde es merken. Was tust du?",
      options: [
        {
          text: "Ich bleibe ehrlich und verkaufe zu einem fairen Preis.",
          nextId: "avf_spende",
          isMatch: true,
          trait: "Ehrlichkeit",
          wisdom:
            "Abdurrahman bin Avf sagte: 'Ich betrüge niemals und verberge niemals einen Mangel der Ware'.",
        },
        {
          text: "Ich nutze die große Nachfrage und erhöhe die Preise.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    avf_spende: {
      title: "Die Karawane der Güte",
      text: "Du besitzt nun eine Karawane mit 700 Kamelen. In Medina herrscht Hunger. Behältst du die Waren oder spendest du sie?",
      options: [
        {
          text: "Ich spende die gesamte Karawane mit aller Ladung für Allahs Wohlgefallen.",
          nextId: "avf_finale",
          isMatch: true,
          trait: "Großzügigkeit",
          wisdom:
            "Er spendete so viel, dass man sagte, die Hälfte der Bewohner Medinas lebe von seinem Vermögen.",
        },
        {
          text: "Handel ist mein Geschäft und dies ist eine Chance. Ich verkaufe teuer, um mein Kapital zu vergrößern.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    avf_finale: {
      title: "Der Segen des Händlers",
      text: "Du hast den Weg von Abdurrahman bin Avf vollendet. Er war einer der Reichsten, aber sein Herz hing nicht an Besitz oder Eigentum. \n\nBediüzzaman Said Nursi sagt: 'Genügsamkeit (Sparsamkeit) ist die Ursache für Würde und Vollkommenheit.'",
      options: [],
    },

    // --- HABBAB BIN ERET PFAD (DE) ---
    habbab_start: {
      title: "Das Eisen im Feuer",
      text: "Du bist Habbab, ein Sklave und Schmied. Du bist Muslim geworden. Deine Besitzerin erfährt es und presst glühendes Eisen auf deinen Kopf. Was tust du?",
      options: [
        {
          text: "Ich bin geduldig und halte am Glauben (Tawheed) fest.",
          nextId: "habbab_lehrer",
          isMatch: true,
          trait: "Geduld",
          characterChange: "Habbab (Der Standhafte)",
          wisdom:
            "Habbab war härter als das Eisen, das er schmiedete. Sein Glaube war wie eine unerschütterliche Festung.",
        },
        {
          text: "Ich gebe auf, um die Qualen zu beenden.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    habbab_lehrer: {
      title: "Der geheime Unterricht",
      text: "Du lehrst Fatima bint al-Chattab und ihren Mann heimlich den Koran. Ihr Bruder Umar stürmt wütend herein. Fliehst du?",
      options: [
        {
          text: "Ich bleibe und tue mein Bestes, um ihm das Licht der Wahrheit zu zeigen.",
          nextId: "habbab_finale",
          isMatch: true,
          trait: "Mut",
          wisdom:
            "Habbabs Standhaftigkeit in diesem Moment war die Ursache dafür, dass Umar (ra) Muslim wurde.",
        },
        {
          text: "Ich fliehe, um mein Leben zu retten.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    habbab_finale: {
      title: "Gereinigtes Gold",
      text: "Du hast den Weg von Habbab vollendet. Ein Sklave, der zum Lehrer der Umma wurde. \n\nBediüzzaman Said Nursi sagt: 'Dass ihr in diese schwere Prüfung geraten seid und man euch prüft, ob ihr Gold oder Kupfer seid, war für euren Dienst im Namen der Wahrheit absolut notwendig.'",
      options: [],
    },

    // --- HZ. ALI PFAD (DE) ---
    ali_start: {
      title: "Das erste Kind",
      text: "Du bist erst 10 Jahre alt und siehst deinen Cousin, den Propheten (sav), beten. Du spürst die Wahrheit. Was tust du?",
      options: [
        {
          text: "Ich nehme den Islam sofort an, ohne jemanden zu fragen.",
          nextId: "ali_hidschra",
          isMatch: true,
          trait: "Mut",
          characterChange: "Hz. Ali (Jung)",
          wisdom:
            "Hz. Ali war das erste Kind, das den Islam annahm. Er zeigte schon früh große Weisheit.",
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
      text: "Feinde belagern das Haus, um den Propheten zu töten. Er bittet dich, dich in sein Bett zu legen. Das ist lebensgefährlich. Was tust du?",
      options: [
        {
          text: "Ich lege mich furchtlos in sein Bett, damit er sicher auswandern kann.",
          nextId: "ali_khaybar",
          isMatch: true,
          trait: "Mut",
          characterChange: "Hz. Ali (Beschützer)",
          wisdom: "Hz. Ali war bereit, sein Leben für den Propheten zu opfern.",
        },
        {
          text: "Ich suche nach einem sichereren Weg, um zu helfen.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    ali_khaybar: {
      title: "Das Tor von Khaybar",
      text: "Die Festung Khaybar kann nicht erobert werden. Der Prophet gibt dir die Fahne. Was tust du?",
      options: [
        {
          text: "Ich stürme mit der Kraft des Glaubens voran und reiße das Tor auf.",
          nextId: "ali_finale",
          isMatch: true,
          trait: "Mut",
          characterChange: "Löwe Allahs",
          wisdom:
            "Aufgrund seiner Unbesiegbarkeit auf dem Schlachtfeld erhielt Hz. Ali den Beinamen 'Asadullah' (Löwe Allahs).",
        },
        {
          text: "Ich warte darauf, dass die anderen eine Strategie entwickeln.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    ali_finale: {
      title: "Stadt des Wissens",
      text: "Du hast den Weg von Hz. Ali vollendet. Der Prophet sagte: 'Ich bin die Stadt des Wissens, und Ali ist ihr Tor.' \n\nBediüzzaman Said Nursi sagt: 'Die Quelle und der Beschützer der Sunna, die verpflichtet ist, sie in jeder Hinsicht zu bewahren, ist die Ahl-i Bayt (die Familie des Propheten).'",
      options: [],
    },

    // --- ABDULLAH IBN MESUD PFAD (DE) ---
    mesud_start: {
      title: "Begegnung in der Wüste",
      text: "Du bist ein junger Hirte in Mekka. Ein Mann bittet dich um Milch von einer Ziege, die dir nicht gehört, weil er sehr hungrig ist. Was tust du?",
      options: [
        {
          text: "Ich lehne ab, da die Ziegen nicht mein Eigentum sind.",
          nextId: "mesud_wunder",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "Dürüst Çoban",
          wisdom:
            "Ehrlichkeit gegenüber dem Anvertrauten (Emanet) ist die Basis des Glaubens.",
        },
        {
          text: "Ich gebe ihm die Milch als Geste der Großzügigkeit.",
          nextId: "beobachter_weg",
          isMatch: false,
          trait: "Großzügigkeit",
          characterChange: "Großzügiger Fremder",
          wisdom:
            "Großzügigkeit ist gut, aber man darf das Anvertraute nicht missbrauchen.",
        },
      ],
    },
    mesud_wunder: {
      title: "Das Milch-Wunder",
      text: "Du merkst, dass dieser Mann der Prophet ist. Er berührt eine unfruchtbare Ziege, und sie füllt sich mit Milch. Was tust du?",
      options: [
        {
          text: "Ich flehe ihn an: 'Lehre mich von diesen Worten!'",
          nextId: "mesud_bekenntnis",
          isMatch: true,
          trait: "Weisheit",
          characterChange: "Schüler des Wissens",
          wisdom: "Ibn Mesud verstand sofort die Wahrheit hinter dem Wunder.",
        },
        {
          text: "Ich bekomme Angst und laufe weg.",
          nextId: "angst_ende",
          isMatch: false,
          wisdom: "Angst verhindert, die Wahrheit zu erkennen.",
        },
      ],
    },
    mesud_bekenntnis: {
      title: "Der sechste Muslim",
      text: "Du hast den Tawheed gelernt. Bekennst du deinen Glauben als sechster Muslim? Das wird Konsequenzen haben.",
      options: [
        {
          text: "Ja, ich bekenne mich sofort, um den Propheten zu unterstützen.",
          nextId: "mesud_diener",
          isMatch: true,
          trait: "Mut",
          characterChange: "Abdullah ibn Mesud",
          wisdom:
            "Wahrer Mut liegt nicht in der Körperkraft, sondern im Herzen.",
        },
        {
          text: "Ich bleibe lieber im Verborgenen.",
          nextId: "beobachter_weg",
          isMatch: false,
          trait: "Weisheit",
          wisdom:
            "Vorsicht ist gut, aber Ibn Mesud wählte die direkte Hingabe.",
        },
      ],
    },
    mesud_diener: {
      title: "Diener des Propheten",
      text: "Der Prophet braucht jemanden, der seine Sachen trägt. Akzeptierst du das?",
      options: [
        {
          text: "Ja, ich akzeptiere es, um ihm so nah wie möglich zu sein.",
          nextId: "mesud_kaaba",
          isMatch: true,
          trait: "Geduld",
          characterChange: "Freund des Propheten",
          wisdom:
            "Durch seinen Dienst lernte er den Koran direkt von der Quelle.",
        },
        {
          text: "Nein, ich suche eine prestigevollere Aufgabe.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    mesud_kaaba: {
      title: "Mut an der Kaaba",
      text: "Wirst du den Koran laut an der Kaaba vorlesen? Die Götzendiener könnten dich dafür töten.",
      options: [
        {
          text: "Ich sage: 'Allah wird mich schützen' und gehe lesen.",
          nextId: "mesud_folter",
          isMatch: true,
          trait: "Mut",
          wisdom:
            "Er war der erste Sahaba nach dem Propheten, der öffentlich in Mekka aus dem Koran las.",
        },
        {
          text: "Das ist zu riskant und gefährlich. Ich bin unsicher und mache es nicht.",
          nextId: "lokal_weg",
          isMatch: false,
        },
      ],
    },
    mesud_folter: {
      title: "Unerschütterlichkeit",
      text: "Die Götzendiener haben dich blutig geschlagen. Gehst du morgen wieder hin?",
      options: [
        {
          text: "Ja, ich werde morgen wieder dort lesen!",
          nextId: "mesud_finale",
          isMatch: true,
          trait: "Geduld",
          wisdom: "Seine Entschlossenheit war größer als seine Wunden.",
        },
        {
          text: "Nein, das reicht. Sie haben gehört, was sie hören mussten.",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    mesud_finale: {
      title: "Gelehrter Sahaba",
      text: "Du hast den Weg von Ibn Mesud vollendet. \n\nBediüzzaman Said Nursi: 'Iman ist sowohl Licht als auch Kraft. Wer den wahren Iman erlangt, kann dem Universum trotzen.'",
      options: [],
    },

    // --- SA'D BIN EBI VAKKAS PFAD (DE) ---
    sad_start: {
      title: "Prüfung der Liebe",
      text: "Deine Mutter tritt in einen Hungerstreik, damit du den Islam verlässt. Was tust du?",
      options: [
        {
          text: "Ich bleibe entschlossen: 'Selbst wenn sie hundert Leben hätte und alle durch Hunger verlöre, würde ich nicht weichen.'",
          nextId: "sad_uhud",
          isMatch: true,
          trait: "Mut",
          characterChange: "Sa'd bin Ebi Vakkas",
          wisdom: "Sa'd bewies, dass die Liebe zu Allah über allem steht.",
        },
        {
          text: "Ich kann meine Mutter nicht so leiden sehen und gebe auf.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    sad_uhud: {
      title: "Der Bogenschütze des Propheten",
      text: "Du bist als Bogenschütze in Uhud. Der Prophet (sav) sagt: 'Schieß, oh Sa'd!'. Plötzlich wendet sich das Blatt gegen die Muslime. Bleibst du bei ihm, um ihn zu schützen?",
      options: [
        {
          text: "Ich schieße alle Pfeile ab und ziehe dann mein Schwert, um den Propheten zu verteidigen.",
          nextId: "sad_finale",
          isMatch: true,
          trait: "Mut",
          wisdom:
            "Er war der Bogenschütze, zu dem der Prophet sagte: 'Mögen meine Eltern für dich geopfert sein'.",
        },
        {
          text: "Ich muss mein eigenes Leben retten; wie kann ich sonst später nützlich sein?",
          nextId: "bequem_ende",
          isMatch: false,
        },
      ],
    },
    sad_finale: {
      title: "Löwe des Islam",
      text: "Du hast den Weg von Sa'd vollendet. Du wurdest ein Kommandant, dessen Gebete stets erhört wurden.",
      options: [],
    },

    // --- MUS'AB BIN UMEYR PFAD (DE) ---
    musab_start: {
      title: "Der Duft von Mekka",
      text: "Du bist ein reicher Jüngling. Weil du Muslim geworden bist, droht deine Mutter, dich zu verstoßen und das Erbe zu streichen.",
      options: [
        {
          text: "Ich esse lieber Essensreste aus dem Müll und wähle den Glauben.",
          nextId: "musab_botschafter",
          isMatch: true,
          trait: "Mut",
          characterChange: "Mus'ab b. Umeyr",
          wisdom:
            "Mus'ab ließ die materielle Welt zurück und nahm den Glauben mit, den er über den Tod hinaus tragen konnte.",
        },
        {
          text: "Ich wähle mein Erbe, damit ich später mit dem Geld dem Islam dienen kann.",
          nextId: "welt_ende",
          isMatch: false,
        },
      ],
    },
    musab_botschafter: {
      title: "Der erste Lehrer",
      text: "Der Prophet sendet dich als Botschafter nach Medina. Gehst du?",
      options: [
        {
          text: "Ein einziger Blick des Propheten (sav) ist für mich wie ein Befehl.",
          nextId: "musab_uhud",
          isMatch: true,
          trait: "Weisheit",
          characterChange: "Lehrer Mus'ab",
          wisdom:
            "In Medina öffneten sich die Herzen und die Tore der Stadt für die Muslime.",
        },
        {
          text: "Diese Verantwortung ist zu schwer. Ich lehne ab, aus Angst zu versagen. Zudem ist die Reise beschwerlich.",
          nextId: "lokal_weg",
          isMatch: false,
        },
      ],
    },
    musab_uhud: {
      title: "Das Banner von Uhud",
      text: "Du trägst das Banner und wirst verletzt. Wenn das Banner fällt, sinkt die Moral der Muslime. Was wirst du tun?",
      options: [
        {
          text: "Ich weiß, was dieses Banner bedeutet. Ich werde es bis zum letzten Atemzug nicht loslassen.",
          nextId: "musab_finale",
          isMatch: true,
          trait: "Mut",
          wisdom:
            "Während er das Banner schützte, wurden seine Arme und Beine verletzt und er starb als Märtyrer.",
        },
        {
          text: "Ich lasse das Banner los, gehe zur Sanitätsstation und komme später zurück, um es wieder aufzuheben.",
          nextId: "angst_ende",
          isMatch: false,
        },
      ],
    },
    musab_finale: {
      title: "Der erste Botschafter",
      text: "Du hast Mus'abs Weg vollendet. Bediüzzaman sagt: 'Ich habe mit Gewissheit geglaubt und erkannt, dass diese Welt ein Gästehaus ist, das sich schnell wandelt. Wenn der Herr des Gästehauses barmherzig ist, dann ist jeder ein Freund; wenn nicht, wird jeder Ort zur Last für das Herz.'",
      options: [],
    },

    // --- ALLGEMEINE ENDEN (DE) ---
    beobachter_weg: {
      title: "Ein anderer Weg",
      text: "Du hast nach eigenem Ermessen klug und vorsichtig gehandelt, aber du hast den Weg der Sahaba verlassen. Leider hast du die große Belohnung verpasst.",
      options: [],
    },
    angst_ende: {
      title: "Weg beendet",
      text: "Die Angst war stärker. Der Teufel täuscht den Menschen leicht mit Dingen wie Angst, Gier oder Ruhmsucht.",
      options: [],
    },
    bequem_ende: {
      title: "Weg beendet",
      text: "Du hast die Bequemlichkeit gewählt. Doch ohne eine starke Standhaftigkeit und Beständigkeit im heiligen Dienst des Lichts beginnt Trägheit, Schwäche und Stillstand.",
      options: [],
    },
    welt_ende: {
      title: "Weg beendet",
      text: "Der weltliche Besitz war süßer als der Glaube. Der Glaube macht den Menschen erst zum Menschen. Er macht ihn vielleicht sogar zum König. Daher ist die eigentliche Aufgabe des Menschen der Glaube und das Gebet. Unglaube macht den Menschen zu einem schwachen, raubtierartigen Wesen.",
      options: [],
    },
    lokal_weg: {
      title: "Stiller Helfer",
      text: "Du hast im Stillen etwas getan, aber es war nicht wie bei den Sahaba. Vertraue auf Allah, damit du dich von der Bettelei bei der Schöpfung und dem Zittern vor jedem Ereignis befreist.",
      options: [],
    },
  },

  tr: {
    // --- HZ. OSMAN YOLU (TR) ---
    osman_start: {
      title: "Rume Kuyusu",
      text: "Medine'de su kıtlığı var. Bir adam, suyun kovasını Müslümanlara çok pahalıya satıyor. Sen de gayet zenginsin. Ne yaparsın?",
      options: [
        {
          text: "Kuyuyu satın alır ve halka vakfederim.",
          nextId: "osman_heer",
          isMatch: true,
          trait: "Großzügigkeit",
          characterChange: "Hayırsever ve Merhmaetli",
          wisdom:
            "Kuyuyu satın alıp, onu vakfetti, yani ücretsiz kullanmaya bıraktı ve müminlerin su ihtiyacını giderdi.",
        },
        {
          text: "Satıcıyla fiyatları indirmesi için pazarlık yaparım.",
          nextId: "beobachter_weg",
          characterChange: "Aksiyonu engelleyen Temkin",
          isMatch: false,
        },
      ],
    },
    osman_heer: {
      title: "Zorluk Ordusu",
      text: "Peygamberimiz (sav) Tebük seferi için yardım istiyor. Müslümanlar çok fakir ve darda. Çok zenginsin. Ne yapar, nasıl yardım edersin?",
      options: [
        {
          text: "Orduyu donatır, yüzlerce deve ve altın veririm.",
          nextId: "osman_koran",
          isMatch: true,
          trait: "Großzügigkeit",
          characterChange: "Aksiyoner ve Risk Alan",
          wisdom:
            "Efendimiz (sav) onun için: 'Bugünden sonra Osman'a yaptığı hiçbir şey zarar vermez' buyurdu.",
        },
        {
          text: "Uygun bir miktar bağış yapar, kalanını ticaretim için saklarım.",
          nextId: "welt_ende",
          characterChange: "Ticaretini Düşünen ve Hesapçı",
          isMatch: false,
        },
      ],
    },
    osman_koran: {
      title: "Kitabın Birliği",
      text: "Halife olduğun dönemde Kur'an okunuşunda, ana dili arapça olan ve olmayan müslüman toplumlarda farklılıklar ve tartışmalar olduğunu görüyorsun. Ne yaparsın?",
      options: [
        {
          text: "Kur'an'ı tek bir lehçede birleştirip ayrılıkları kardeşliğe çevirmek için çalışırım.",
          nextId: "osman_finale",
          isMatch: true,
          trait: "Weisheit",
          characterChange: "Bilge Lider ve Barış Elçisi",
          wisdom:
            "Bugün tüm dünya aynı Mushaf üzerinden Kur'an okumaktadır.",
        },
        {
          text: "İnsanları Kur'an'ı istedikleri gibi okumakta serbest bırakırım.",
          nextId: "bequem_ende",
          characterChange: "Hassas durumda İnisiyatif Alamayan Kararsız",
          isMatch: false,
        },
      ],
    },
    osman_finale: {
      title: "Haya Nuru",
      text: "Hz. Osman'ın yolunu tamamladın. O kadar hayalıydı ki melekler bile ondan haya ederdi. \n\nBediüzzaman Said Nursi der ki: 'İhsan, ihsandır. Eğer kendi cinsine olsa veya muhtaca ve fakire olsa, cömertlik o vakit tam cömertliktir. Şayet muhtaç olmayan şahsa olsa, şahsı tembel eder.' Hz. Osman dünyaya sahip oldu ama dünya onun kalbine giremedi.",
      options: [],
    },
    // --- ABDURRAHMAN BİN AVF YOLU (TR) ---
    avf_start: {
      title: "Varlıksız Varış",
      text: "Medine'ye bir muhacir olarak geldin ve her şeyini Mekke'de bıraktın. Kardeşin Sa'd bin Reb'i sana malının yarısını teklif ediyor. Ne yaparsın?",
      options: [
        {
          text: "Allah senden razı olsun, ama bana sadece çarşının yolunu göster' derim.",
          nextId: "avf_handel",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "İstiğna sahibi ve Tüccar",
          wisdom:
            "Kendi emeğiyle başarmayı seçti ve kimseye yük olmak istemedi.",
        },
        {
          text: "Hızlıca zengin olmak için bu yardımı kabul ederim.",
          nextId: "bequem_ende",
          characterChange: "Kolaycı ve Yardımseverlikten Uzak",
          isMatch: false,
        },
      ],
    },
    avf_handel: {
      title: "Dürüst Tüccar",
      text: "Pazarda yağ ve peynir satıyorsun. Daha fazla kâr etmek için fiyatları hileyle artırsan kimsenin ruhu duymaz. Ne yaparsın?",
      options: [
        {
          text: "Dürüst kalırım ve hakkaniyetli bir fiyata satarım.",
          nextId: "avf_spende",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "Önce İnsan sonra Tüccar",
          wisdom:
            "Abdurrahman bin Avf: 'Asla aldatmam ve malın kusurunu gizlemem' derdi.",
        },
        {
          text: "Talep çok olduğu için fiyatları yükseltirim. Bu sayede belki sonra daha çok yardım yapabilirim.",
          nextId: "welt_ende",
          characterChange: "Kâr Hırsı ile Dolu ve biraz da kaçamak Tüccar",
          isMatch: false,
        },
      ],
    },
    avf_spende: {
      title: "İyilik Kervanı",
      text: "Artık 700 develik bir kervanın var. Medine'de kıtlık var. Malları inanlar ile paylaşmayı düşünür müsün?",
      options: [
        {
          text: "Kervanı tüm yüküyle beraber Allah rızası için bağışlarım.",
          nextId: "avf_finale",
          isMatch: true,
          trait: "Großzügigkeit",
          characterChange: "Cömert ve Fedakar Tüccar",
          wisdom:
            "O kadar çok bağış yapardı ki, Medine halkının yarısı onun malıyla geçiniyor denirdi.",
        },
        {
          text: "Ticaret benim işim, bu da bir fırsat. Sermayemi büyütmek için malları yüksek fiyata satarım.",
          nextId: "welt_ende",
          characterChange: "Fırsatçı ve Kâr Düşkünü",
          isMatch: false,
        },
      ],
    },
    avf_finale: {
      title: "Tüccarın Bereketi",
      text: "Abdurrahman bin Avf'ın yolunu tamamladın. En zenginlerden biriydi ama kalbi paraya, mala mülke bağlı değildi. \n\nBediüzzaman Said Nursi der ki: 'İktisat izzet ve kemal sebebidir.'",
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
          characterChange: "Metanet Sahibi",
          wisdom:
            "Habbab, dövdüğü demirden daha sertti. İmanı sarsılmaz bir kale gibiydi.",
        },
        {
          text: "İşkenceyi bitirmek için pes ederim.",
          nextId: "bequem_ende",
          characterChange: "Erken pes eden",
          isMatch: false,
        },
      ],
    },
    habbab_lehrer: {
      title: "Gizli Ders",
      text: "Fatıma bint Hattab ve kocası Said bin Zeyd'e gizlice Kur'an öğretiyorsun. Kardeşi Ömer öfkeyle içeri giriyor. Ölüm ihtimali var. Kaçar mısın?",
      options: [
        {
          text: "Kalırım ve ona hakikat nurunu göstermek için elimden geleni yaparım.",
          nextId: "habbab_finale",
          isMatch: true,
          trait: "Mut",
          characterChange: "Çalışkan ve Gayretli",
          wisdom:
            "Habbab'ın o andaki duruşu, Hz. Ömer'in Müslüman olmasına vesile oldu.",
        },
        {
          text: "Canımı kurtarmak için kaçar giderim. Böylece daha sonra yine gelir yine anlatırım.",
          nextId: "angst_ende",
          characterChange: "Kaçamak İş",
          isMatch: false,
        },
      ],
    },
    habbab_finale: {
      title: "Arınmış Altın",
      text: "Habbab'ın yolunu tamamladın. Ümmetin hocası olan bir köle... \n\nBediüzzaman Said Nursi der ki: 'bu şiddetli imtihana girmek ve inceden inceye sizi kaç defa `altın mı, bakır mı?` diye mehenge vurmak, hak namına olan hizmetinize pek çok lüzumu vardı.'",
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
          characterChange: "Genç İman",
          wisdom:
            "Hz. Ali Müslüman olan ilk çocuktur. Küçük yaşta büyük bir feraset göstermiştir.",
        },
        {
          text: "Beklerim ve önce babama danışırım.",
          nextId: "beobachter_weg",
          isMatch: false,
          characterChange: "Çocuk Aklı",
        },
      ],
    },
    ali_hidschra: {
      title: "Tehlikeli Gece",
      text: "Düşmanlar Peygamber'i öldürmek için evi kuşattı. Hz.Peygamber, senden yatağına yatmanı istiyor. Bu ölümcül bir görev. Ne yaparsın?",
      options: [
        {
          text: "Korkmadan yatağına yatarım ki o güvenle hicret edebilsin.",
          nextId: "ali_khaybar",
          isMatch: true,
          trait: "Mut",
          characterChange: "Şecaat ve Cesaret Kahramanı",
          wisdom: "Hz.Ali zamanını, malını, sevdiklerini ve canını Peygamber için feda etmeye hazırdı.",
        },
        {
          text: "Yardım etmek için daha güvenli bir yol ararım.",
          nextId: "angst_ende",
          characterChange: "Hayır işlemede geç Kalan",
          isMatch: false,
        },
      ],
    },
    ali_khaybar: {
      title: "Hayber Kapısı",
      text: "Hayber kalesi bir türlü geçilemiyor. Peygamber sancağı sana verdi. Ne yaparsın?",
      options: [
        {
          text: "Öne atılır ve kalenin kapısını sökmek ve inananları içeri sokmak için çalışmaya başlarım.",
          nextId: "ali_finale",
          isMatch: true,
          trait: "Mut",
          characterChange: "Allah'ın Aslanı",
          wisdom:
            "Hz. Ali, savaş meydanlarındaki yenilmezliğiyle 'Esedullah' lakabını almıştır.",
        },
        {
          text: "Birileri kapıdan içeri girebilse de biz de girsek diye beklerim.",
          nextId: "bequem_ende",
          isMatch: false,
          characterChange: "Komutan değil, Sıradan",
        },
      ],
    },
    ali_finale: {
      title: "İlim Şehri",
      text: "Hz. Ali'nin yolunu tamamladın. Peygamberimiz buyurdu: 'Ben ilmin şehriyim, Ali ise onun kapısıdır.' \n\nBediüzzaman Said Nursi der ki: 'Sünnet-i Seniyyenin menbaı ve muhafızı ve her cihetle iltizam etmesiyle mükellef olan, Âl-i Beyttir.'",
      options: [],
    },
    // --- ABDULLAH IBN MESUD YOLU ---
    mesud_start: {
      title: "Çölde Karşılaşma",
      text: "Mekke'de genç bir çobansın. Bir adam, çok acıktığı için senden emanet koyunun sütünü istiyor. Ne yaparsın?",
      options: [
        {
          text: "Reddederim, çünkü koyunlar benim değil.",
          nextId: "mesud_wunder",
          isMatch: true,
          trait: "Ehrlichkeit",
          characterChange: "Dürüst Çoban",
          wisdom: "Emanete sadakat gösterdin.",
        },
        {
          text: "Cömertlik olsun diye sütü veririm.",
          nextId: "beobachter_weg",
          isMatch: false,
          characterChange: "Başkasının malında Cömert Yabancı",
          wisdom: "Cömertlik güzeldir ama emanete hıyanet edilemez.",
        },
      ],
    },
    mesud_wunder: {
      title: "Süt Mucizesi",
      text: "O kişinin özel bir insan olduğunu anladın. O kısır bir keçiye dokunuyor ve keçi sütle doluyor. Ne yaparsın?",
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
          characterChange: "Aşırı Korkak",
          wisdom: "Korku, hakikati görmeye engeldir.",
        },
      ],
    },
    mesud_bekenntnis: {
      title: "Altıncı Müslüman",
      text: "Tevhid'i öğrendin. Altıncı Müslüman olarak imanını açıklar mısın? Bunun bazı sonuçları olacaktır.",
      options: [
        {
          text: "Evet, hemen imanımı açıklarım. Çünkü Peygamber'in desteğine koşarım.",
          nextId: "mesud_diener",
          isMatch: true,
          trait: "Mut",
          characterChange: "Peygamber Destekçisi",
          wisdom: "Hakiki cesaret pazı gücünde değil, kalptedir.",
        },
        {
          text: "Gizli kalmayı tercih ederim.",
          nextId: "beobachter_weg",
          isMatch: false,
          characterChange: "Zamansız Çekingen",
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
          text: "Hayır, daha düzgün ve itibarlı bir iş ararım.",
          nextId: "welt_ende",
          characterChange: "Prestij Peşinde",
          isMatch: false,
        },
      ],
    },
    mesud_kaaba: {
      title: "Kabe'de Cesaret",
      text: "Kur'an artık insanlara açıkça duyurulmalıdır. Kabe'de onu yüksek sesle okur musun? Müşrikler seni bu nedenle öldürebilirler.",
      options: [
        {
          text: "Allah beni koruyacaktır deyip gider okurum.",
          nextId: "mesud_folter",
          isMatch: true,
          trait: "Mut",
          characterChange: "Korkusuz Hatip",
          wisdom: "Mekke'de açıkça Kur'an okuyan ilk sahabi oldu.",
        },
        {
          text: "Çok riskli bir iş ve ayrıca çok tehlikeli, emin değilim, yapmayabilirim.",
          nextId: "lokal_weg",
          characterChange: "Tereddütlü",
          isMatch: false,
        },
      ],
    },
    mesud_folter: {
      title: "Sarsılmazlık",
      text: "Müşrikler seni dövdü. Yüzün, kolların, bacakların kan içinde kaldı. Tekrar gider misin?",
      options: [
        {
          text: "Evet, yarın yine gidip okuyacağım!",
          nextId: "mesud_finale",
          isMatch: true,
          trait: "Geduld",
          characterChange: "Sebatkar ve Azimli",
          wisdom: "Onun azmi aldığı yaralardan daha büyüktü.",
        },
        {
          text: "Hayır, bu kadarı yeter. Onlar duyacağını duydu zaten.",
          nextId: "bequem_ende",
          characterChange: "Hak üzere İnatçı Değil",
          isMatch: false,
        },
      ],
    },
    mesud_finale: {
      title: "Alim Sahabi",
      text: "İbn Mesud'un yolunu tamamladın. \n\nBediüzzaman Said Nursi: 'İman hem nurdur, hem kuvvettir. Hakikî imanı elde eden adam, kâinata meydan okuyabilir.'",
      options: [],
    },

    // --- SA'D BİN EBİ VAKKAS YOLU ---
    sad_start: {
      title: "Sevgi İmtihanı",
      text: "Annen İslam'dan dönmen için açlık grevi yapıyor. Ne yaparsın?",
      options: [
        {
          text: "Kararlı dururum: Yüz canı olsa, hepsi açlıktan çıksa, yine de dönmem.",
          nextId: "sad_uhud",
          isMatch: true,
          trait: "Mut",
          characterChange: "Hakiki Sevgi",
          wisdom:
            "Sa'd, Allah sevgisinin her şeyin üstünde olduğunu kanıtladı.",
        },
        {
          text: "Anneme kıyamam ve vazgeçerim.",
          nextId: "welt_ende",
          characterChange: "Aile Bağlarına fazla Düşkün",
          isMatch: false,
        },
      ],
    },
    sad_uhud: {
      title: "Peygamberin Okçusu",
      text: "Uhud'da okçu olarak bulunuyorsun. Hz.Peygamber 'At Ya Sa'd!' diyor. İşler bir anda müslümanların aleyhine dönmeye başladı. Yanında kalıp onu korur musun?",
      options: [
        {
          text: "Sadaktaki oklarım bitene atar, sonra da kılıcımı çeker ve Peygamber'i korurum.",
          nextId: "sad_finale",
          isMatch: true,
          trait: "Mut",
          characterChange: "Peygamberin Koruyucusu",
          wisdom: "Peygamberin 'Anam babam feda olsun' dediği okçu oldu.",
        },
        {
          text: "Kendi canımı kurtarmak zorundayım, ben hayatta olmazsam nasıl faydalı işler yapabilirim.",
          nextId: "bequem_ende",
          characterChange: "Kendi Canını Peygamber'den önce Düşünen",
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
      text: "Zengin bir gençsin. Müslüman olduğun için, annen seni mirastan mahrum etmekle tehdit ediyor.",
      options: [
        {
          text: "Çöpteki artıklardan bişeyler bulur yer ve imanı seçerim.",
          nextId: "musab_botschafter",
          isMatch: true,
          trait: "Mut",
          characterChange: "Azim Fedakarlık",
          wisdom:
            "Mus'ab, herkesin dünyada bırakıp gittiği maddeyi bıraktı, yanına ölüm ötesine götürebileceği imanı aldı.",
        },
        {
          text: "Mirasımı seçerim, çünkü daha sonra onunla hizmet edebilirim.",
          nextId: "welt_ende",
          characterChange: "Dünya Malına Kalpten Bağlı",
          isMatch: false,
        },
      ],
    },
    musab_botschafter: {
      title: "İlk Öğretmen",
      text: "Peygamber seni Medine'ye elçi olarak gönderiyor. Gider misin?",
      options: [
        {
          text: "Hz.Peygamber'in bakışı bile benim için emirdir.",
          nextId: "musab_uhud",
          isMatch: true,
          trait: "Weisheit",
          characterChange: "Muallim-i Evvel",
          wisdom:
            "Medine'de kalplerin ve şehrin kapıları biiznillah müslümanlara açıldı.",
        },
        {
          text: "Bu sorumluluk çok ağır. Yapamazsam diye hiç üstüme almam. Hem çok zorlu bir yolculuk, orada ne yer ne içerim, nerede kalırım!?",
          nextId: "lokal_weg",
          characterChange: "Tevekkül Eksiği",
          isMatch: false,
        },
      ],
    },
    musab_uhud: {
      title: "Uhud Sancağı",
      text: "Sancağı taşıyorsun, yaralandın. O sancak düşerse müslümanlar moral olarak çökerler ve yenildik diye düşünürler. Ne yapacaksın?",
      options: [
        {
          text: "O sancağın dalgalanmasının ne anlama geldiğini biliyorum. Son nefesime kadar bırakmam.",
          nextId: "musab_finale",
          isMatch: true,
          trait: "Mut",
          characterChange: "Sancak Taşıyıcısı",
          wisdom:
            "Sancağı korurken, kolu, bacağı et doğranır gibi doğrandı ve şehit düştü.",
        },
        {
          text: "Sancağı bırakıp ilk yardım istasyonuna giderim ve tekrar gelir ve sancağı yerden kaldırırım.",
          nextId: "angst_ende",
          characterChange: "Ortam gereği fazlaca Hamakat",
          isMatch: false,
        },
      ],
    },
    musab_finale: {
      title: "İlk Elçi",
      text: "Mus'ab'ın yolunu tamamladın. Bediüzzaman der ki: 'Bu dünya çabuk tebeddül eder bir misafirhane olduğunu yakinen iman edip bildim. Eğer misafirhane sahibinin rahmeti yar ise, herkes yardır, eğer değilse, her yer kalbe sıkıntı verir, yük olur.'",
      options: [],
    },

    // --- GENEL SONLAR ---
    beobachter_weg: {
      title: "Farklı Yol",
      text: "Kendince akıllı ve tedbirli davrandın, ama Sahabe'nin yolundan ayrıldın. Ne yazık ki Büyük ödülü kaçırdın.",
      options: [],
    },
    angst_ende: {
      title: "Yol Bitti",
      text: "Korku ağır bastı. Zaten şeytan insanı korku, aç gözlülük, şöhret sahibi olmak gibi şeylerle kolayca kandırır.",
      options: [],
    },
    bequem_ende: {
      title: "Yol Bitti",
      text: "Konfor tercihin oldu. Halbuki, Gayet kuvvetli bir metanet ve vazife-i nuriye-i kudsiyede bir sebat olmazsa, Risale-i Nur'un hizmeti zararına bir atâlet(tembellik), bir fütur(gevşeklik) ve tevakkuf(duraksama) başlar.",
      options: [],
    },
    welt_ende: {
      title: "Yol Bitti",
      text: "Dünya malı imandan tatlı geldi. İman, insanı insan eder. Belki insanı sultan eder. Öyle ise, insanın vazife-i asliyesi, iman ve duadır. Küfür, insanı gayet âciz bir canavar hayvan eder.",
      options: [],
    },
    lokal_weg: {
      title: "Sessiz Yardımcı",
      text: "Sessizce bişeyler yaptın. Ama pek Sahabe gibi değildi. Tevekkül et. Tâ bütün kâinatın dilenciliğinden ve her hadisenin karşısında titremekten ve kendini beğendirmeye çalışıp maskara olmaktan ve ahirette zor duruma düşmek ve dünyanın içini sıkan bunaltan hapsinden kurtulasın.",
      options: [],
    },
  },
};

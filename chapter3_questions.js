(function(){
  const replacements = {
  "3.1": [
    {
      "q": "Ce desemnează structura în cadrul organizației?",
      "options": [
        "dimensiunea formală a relațiilor dintre oameni",
        "îndeplinirea scopurilor organizaționale stabilite",
        "modelul autorizat al relațiilor instituționale",
        "primatul structurii organizaționale oficiale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „dimensiunea formală a relațiilor dintre oameni”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmăresc relațiile dintre indivizi în definiția structurii?",
      "options": [
        "dimensiunea formală a relațiilor dintre oameni",
        "îndeplinirea scopurilor organizaționale stabilite",
        "modelul autorizat al relațiilor instituționale",
        "primatul structurii organizaționale oficiale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „îndeplinirea scopurilor organizaționale stabilite”.",
      "kind": "Text"
    },
    {
      "q": "Ce subliniază în primul rând modelele structurale?",
      "options": [
        "dimensiunea formală a relațiilor dintre oameni",
        "îndeplinirea scopurilor organizaționale stabilite",
        "modelul autorizat al relațiilor instituționale",
        "primatul structurii organizaționale oficiale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „primatul structurii organizaționale oficiale”.",
      "kind": "Text"
    },
    {
      "q": "Ce reprezintă organigrama din perspectiva formală?",
      "options": [
        "dimensiunea formală a relațiilor dintre oameni",
        "îndeplinirea scopurilor organizaționale stabilite",
        "modelul autorizat al relațiilor instituționale",
        "primatul structurii organizaționale oficiale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „modelul autorizat al relațiilor instituționale”.",
      "kind": "Text"
    },
    {
      "q": "Pentru ce există organizațiile în prima ipoteză Bolman și Deal?",
      "options": [
        "aplicarea normelor și a rațiunii",
        "asigurarea coordonării și a controlului",
        "creșterea expertizei și performanței individuale",
        "îndeplinirea unor scopuri stabilite"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „îndeplinirea unor scopuri stabilite”.",
      "kind": "Text"
    },
    {
      "q": "Ce limitează tulburările de mediu și preferințele personale?",
      "options": [
        "aplicarea normelor și a rațiunii",
        "asigurarea coordonării și a controlului",
        "creșterea expertizei și performanței individuale",
        "îndeplinirea unor scopuri stabilite"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „aplicarea normelor și a rațiunii”.",
      "kind": "Text"
    },
    {
      "q": "Ce efect are specializarea în perspectiva structurală?",
      "options": [
        "aplicarea normelor și a rațiunii",
        "asigurarea coordonării și a controlului",
        "creșterea expertizei și performanței individuale",
        "îndeplinirea unor scopuri stabilite"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „creșterea expertizei și performanței individuale”.",
      "kind": "Text"
    },
    {
      "q": "Ce este esențial pentru eficacitate în această perspectivă?",
      "options": [
        "aplicarea normelor și a rațiunii",
        "asigurarea coordonării și a controlului",
        "creșterea expertizei și performanței individuale",
        "îndeplinirea unor scopuri stabilite"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „asigurarea coordonării și a controlului”.",
      "kind": "Text"
    },
    {
      "q": "Ce soluție corespunde structurilor organizaționale nepotrivite?",
      "options": [
        "autoritățile locale și districtuale responsabile",
        "autoritățile naționale, regionale sau statale",
        "departamentele, catedrele și unitățile de consiliere",
        "restructurarea ori crearea unor sisteme noi"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „restructurarea ori crearea unor sisteme noi”.",
      "kind": "Text"
    },
    {
      "q": "Ce se află la nivelul central al modelului cu cinci niveluri?",
      "options": [
        "autoritățile locale și districtuale responsabile",
        "autoritățile naționale, regionale sau statale",
        "departamentele, catedrele și unitățile de consiliere",
        "restructurarea ori crearea unor sisteme noi"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „autoritățile naționale, regionale sau statale”.",
      "kind": "Text"
    },
    {
      "q": "Ce se află la nivelul local al modelului cu cinci niveluri?",
      "options": [
        "autoritățile locale și districtuale responsabile",
        "autoritățile naționale, regionale sau statale",
        "departamentele, catedrele și unitățile de consiliere",
        "restructurarea ori crearea unor sisteme noi"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „autoritățile locale și districtuale responsabile”.",
      "kind": "Text"
    },
    {
      "q": "Ce se află la nivelul subunităților instituționale?",
      "options": [
        "autoritățile locale și districtuale responsabile",
        "autoritățile naționale, regionale sau statale",
        "departamentele, catedrele și unitățile de consiliere",
        "restructurarea ori crearea unor sisteme noi"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „departamentele, catedrele și unitățile de consiliere”.",
      "kind": "Text"
    },
    {
      "q": "Ce cuprinde nivelul individual al structurii educaționale?",
      "options": [
        "contactele informale dintre membrii organizației",
        "federația cu aranjamente comune de leadership",
        "profesori, studenți, elevi și personal auxiliar",
        "rețeaua școlară pentru nevoi specifice emergente"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „profesori, studenți, elevi și personal auxiliar”.",
      "kind": "Text"
    },
    {
      "q": "Ce structură formală poate reuni școli sub conducere comună?",
      "options": [
        "contactele informale dintre membrii organizației",
        "federația cu aranjamente comune de leadership",
        "profesori, studenți, elevi și personal auxiliar",
        "rețeaua școlară pentru nevoi specifice emergente"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „federația cu aranjamente comune de leadership”.",
      "kind": "Text"
    },
    {
      "q": "Ce formă apare organic în comunitatea locală?",
      "options": [
        "contactele informale dintre membrii organizației",
        "federația cu aranjamente comune de leadership",
        "profesori, studenți, elevi și personal auxiliar",
        "rețeaua școlară pentru nevoi specifice emergente"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „rețeaua școlară pentru nevoi specifice emergente”.",
      "kind": "Text"
    },
    {
      "q": "Ce relații lipsesc adesea din diagramele organizaționale?",
      "options": [
        "contactele informale dintre membrii organizației",
        "federația cu aranjamente comune de leadership",
        "profesori, studenți, elevi și personal auxiliar",
        "rețeaua școlară pentru nevoi specifice emergente"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „contactele informale dintre membrii organizației”.",
      "kind": "Text"
    },
    {
      "q": "Ce pot facilita structurile aparent ierarhice?",
      "options": [
        "condiționarea schimbării prin structuri și convingeri",
        "delegarea și participarea la luarea deciziilor",
        "eficacitatea managementului exercitat de directori",
        "natura relațiilor lor profesionale ulterioare"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „delegarea și participarea la luarea deciziilor”.",
      "kind": "Text"
    },
    {
      "q": "Ce influențează pozițiile în care sunt numiți indivizii?",
      "options": [
        "condiționarea schimbării prin structuri și convingeri",
        "delegarea și participarea la luarea deciziilor",
        "eficacitatea managementului exercitat de directori",
        "natura relațiilor lor profesionale ulterioare"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „natura relațiilor lor profesionale ulterioare”.",
      "kind": "Text"
    },
    {
      "q": "Ce efect are istoria asupra dezvoltării organizaționale?",
      "options": [
        "condiționarea schimbării prin structuri și convingeri",
        "delegarea și participarea la luarea deciziilor",
        "eficacitatea managementului exercitat de directori",
        "natura relațiilor lor profesionale ulterioare"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „condiționarea schimbării prin structuri și convingeri”.",
      "kind": "Text"
    },
    {
      "q": "Ce prezice structura în cercetarea lui Gaziel?",
      "options": [
        "condiționarea schimbării prin structuri și convingeri",
        "delegarea și participarea la luarea deciziilor",
        "eficacitatea managementului exercitat de directori",
        "natura relațiilor lor profesionale ulterioare"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 57–59), răspunsul este „eficacitatea managementului exercitat de directori”.",
      "kind": "Text"
    }
  ],
  "3.2": [
    {
      "q": "Ce evidențiază teoriile sistemelor în privința organizației?",
      "options": [
        "apartenența la instituția unde predau sau învață",
        "coerența sa ca instituție primară distinctă",
        "interacțiunea părților componente și a mediului",
        "unitatea și integritatea organizației educaționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „unitatea și integritatea organizației educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Pe ce se concentrează teoriile sistemelor?",
      "options": [
        "apartenența la instituția unde predau sau învață",
        "coerența sa ca instituție primară distinctă",
        "interacțiunea părților componente și a mediului",
        "unitatea și integritatea organizației educaționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „interacțiunea părților componente și a mediului”.",
      "kind": "Text"
    },
    {
      "q": "Ce presupun modelele sistemice despre școală?",
      "options": [
        "apartenența la instituția unde predau sau învață",
        "coerența sa ca instituție primară distinctă",
        "interacțiunea părților componente și a mediului",
        "unitatea și integritatea organizației educaționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „coerența sa ca instituție primară distinctă”.",
      "kind": "Text"
    },
    {
      "q": "Ce pot simți personalul și studenții în organizație?",
      "options": [
        "apartenența la instituția unde predau sau învață",
        "coerența sa ca instituție primară distinctă",
        "interacțiunea părților componente și a mediului",
        "unitatea și integritatea organizației educaționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „apartenența la instituția unde predau sau învață”.",
      "kind": "Text"
    },
    {
      "q": "Ce risc apare când organizația este privilegiată excesiv?",
      "options": [
        "caracteristici umane școlii ca organizație",
        "neglijarea oamenilor care lucrează în interior",
        "obiective convenite și susținute de membri",
        "politici instituționale orientate spre scopuri"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „neglijarea oamenilor care lucrează în interior”.",
      "kind": "Text"
    },
    {
      "q": "Ce atribuire critică Greenfield în teoria sistemică?",
      "options": [
        "caracteristici umane școlii ca organizație",
        "neglijarea oamenilor care lucrează în interior",
        "obiective convenite și susținute de membri",
        "politici instituționale orientate spre scopuri"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „caracteristici umane școlii ca organizație”.",
      "kind": "Text"
    },
    {
      "q": "Ce obiective presupune modelul pentru întregul sistem?",
      "options": [
        "caracteristici umane școlii ca organizație",
        "neglijarea oamenilor care lucrează în interior",
        "obiective convenite și susținute de membri",
        "politici instituționale orientate spre scopuri"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „obiective convenite și susținute de membri”.",
      "kind": "Text"
    },
    {
      "q": "Ce dezvoltă instituția pentru urmărirea obiectivelor?",
      "options": [
        "caracteristici umane școlii ca organizație",
        "neglijarea oamenilor care lucrează în interior",
        "obiective convenite și susținute de membri",
        "politici instituționale orientate spre scopuri"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „politici instituționale orientate spre scopuri”.",
      "kind": "Text"
    },
    {
      "q": "Ce măsoară instituția potrivit abordărilor sistemice?",
      "options": [
        "contestarea obiectivelor de către membrii instituției",
        "eficacitatea politicilor pe care le aplică",
        "granița organizațională a sistemului educațional",
        "scopurile independente de obiectivele formale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „eficacitatea politicilor pe care le aplică”.",
      "kind": "Text"
    },
    {
      "q": "Ce posibilitate este minimalizată de teoria sistemelor?",
      "options": [
        "contestarea obiectivelor de către membrii instituției",
        "eficacitatea politicilor pe care le aplică",
        "granița organizațională a sistemului educațional",
        "scopurile independente de obiectivele formale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „contestarea obiectivelor de către membrii instituției”.",
      "kind": "Text"
    },
    {
      "q": "Ce scopuri individuale sunt deseori ignorate?",
      "options": [
        "contestarea obiectivelor de către membrii instituției",
        "eficacitatea politicilor pe care le aplică",
        "granița organizațională a sistemului educațional",
        "scopurile independente de obiectivele formale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „scopurile independente de obiectivele formale”.",
      "kind": "Text"
    },
    {
      "q": "Ce concept delimitează instituția de mediul extern?",
      "options": [
        "contestarea obiectivelor de către membrii instituției",
        "eficacitatea politicilor pe care le aplică",
        "granița organizațională a sistemului educațional",
        "scopurile independente de obiectivele formale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „granița organizațională a sistemului educațional”.",
      "kind": "Text"
    },
    {
      "q": "Ce se află dincolo de granița sistemului?",
      "options": [
        "absolvenții pregătiți în instituția educațională",
        "materia primă necesară activității organizației",
        "mediul extern al instituției educaționale",
        "studenții care intră în instituția educațională"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „mediul extern al instituției educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce oferă mediul extern organizației în exemplul cărții?",
      "options": [
        "absolvenții pregătiți în instituția educațională",
        "materia primă necesară activității organizației",
        "mediul extern al instituției educaționale",
        "studenții care intră în instituția educațională"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „materia primă necesară activității organizației”.",
      "kind": "Text"
    },
    {
      "q": "Cine revine în comunitate după parcurgerea școlii?",
      "options": [
        "absolvenții pregătiți în instituția educațională",
        "materia primă necesară activității organizației",
        "mediul extern al instituției educaționale",
        "studenții care intră în instituția educațională"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „absolvenții pregătiți în instituția educațională”.",
      "kind": "Text"
    },
    {
      "q": "Ce primesc școlile din comunitate în schema sistemică?",
      "options": [
        "absolvenții pregătiți în instituția educațională",
        "materia primă necesară activității organizației",
        "mediul extern al instituției educaționale",
        "studenții care intră în instituția educațională"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „studenții care intră în instituția educațională”.",
      "kind": "Text"
    },
    {
      "q": "Ce a sporit complexitatea sistemelor potrivit lui O’Shea?",
      "options": [
        "accentul pe colaborarea dintre participanți",
        "diversitatea crescândă a studenților înscriși",
        "mașini dotate cu o tehnologie foarte înaltă",
        "sistemele cu un grad mai mare de complexitate"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „diversitatea crescândă a studenților înscriși”.",
      "kind": "Text"
    },
    {
      "q": "Ce orientare a sporit, alături de diversitate, complexitatea?",
      "options": [
        "accentul pe colaborarea dintre participanți",
        "diversitatea crescândă a studenților înscriși",
        "mașini dotate cu o tehnologie foarte înaltă",
        "sistemele cu un grad mai mare de complexitate"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „accentul pe colaborarea dintre participanți”.",
      "kind": "Text"
    },
    {
      "q": "Ce fel de sisteme pot fi mai vulnerabile la eșec?",
      "options": [
        "accentul pe colaborarea dintre participanți",
        "diversitatea crescândă a studenților înscriși",
        "mașini dotate cu o tehnologie foarte înaltă",
        "sistemele cu un grad mai mare de complexitate"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „sistemele cu un grad mai mare de complexitate”.",
      "kind": "Text"
    },
    {
      "q": "Ce nu sunt școlile, deși integrarea activităților e utilă?",
      "options": [
        "accentul pe colaborarea dintre participanți",
        "diversitatea crescândă a studenților înscriși",
        "mașini dotate cu o tehnologie foarte înaltă",
        "sistemele cu un grad mai mare de complexitate"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 59–60), răspunsul este „mașini dotate cu o tehnologie foarte înaltă”.",
      "kind": "Text"
    }
  ],
  "3.2.1": [
    {
      "q": "După ce criteriu se disting sistemele deschise și închise?",
      "options": [
        "influență redusă asupra scopurilor instituției",
        "minimalizează schimburile cu mediul extern",
        "relațiile organizației cu propriul mediu extern",
        "scopuri explicite în condiții previzibile"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „relațiile organizației cu propriul mediu extern”.",
      "kind": "Text"
    },
    {
      "q": "Cum tratează sistemele închise tranzacțiile externe?",
      "options": [
        "influență redusă asupra scopurilor instituției",
        "minimalizează schimburile cu mediul extern",
        "relațiile organizației cu propriul mediu extern",
        "scopuri explicite în condiții previzibile"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „minimalizează schimburile cu mediul extern”.",
      "kind": "Text"
    },
    {
      "q": "Ce rol acordă sistemele închise opiniei externe?",
      "options": [
        "influență redusă asupra scopurilor instituției",
        "minimalizează schimburile cu mediul extern",
        "relațiile organizației cu propriul mediu extern",
        "scopuri explicite în condiții previzibile"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „influență redusă asupra scopurilor instituției”.",
      "kind": "Text"
    },
    {
      "q": "Ce tip de scopuri urmăresc sistemele relativ închise?",
      "options": [
        "influență redusă asupra scopurilor instituției",
        "minimalizează schimburile cu mediul extern",
        "relațiile organizației cu propriul mediu extern",
        "scopuri explicite în condiții previzibile"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „scopuri explicite în condiții previzibile”.",
      "kind": "Text"
    },
    {
      "q": "Ce protejează mecanismele structurale față de fluctuații?",
      "options": [
        "activitățile centrale ale organizației educaționale",
        "în ambele sensuri între școală și mediu",
        "orientarea spre managementul școlar autonom",
        "permeabile la relațiile dintre școală și mediu"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „activitățile centrale ale organizației educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce reformă a făcut dificilă abordarea sistemului închis?",
      "options": [
        "activitățile centrale ale organizației educaționale",
        "în ambele sensuri între școală și mediu",
        "orientarea spre managementul școlar autonom",
        "permeabile la relațiile dintre școală și mediu"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „orientarea spre managementul școlar autonom”.",
      "kind": "Text"
    },
    {
      "q": "Cum sunt granițele unui sistem deschis?",
      "options": [
        "activitățile centrale ale organizației educaționale",
        "în ambele sensuri între școală și mediu",
        "orientarea spre managementul școlar autonom",
        "permeabile la relațiile dintre școală și mediu"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „permeabile la relațiile dintre școală și mediu”.",
      "kind": "Text"
    },
    {
      "q": "În câte sensuri se desfășoară relația sistemului deschis?",
      "options": [
        "activitățile centrale ale organizației educaționale",
        "în ambele sensuri între școală și mediu",
        "orientarea spre managementul școlar autonom",
        "permeabile la relațiile dintre școală și mediu"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „în ambele sensuri între școală și mediu”.",
      "kind": "Text"
    },
    {
      "q": "Ce trebuie să facă școala pentru a supraviețui pe termen lung?",
      "options": [
        "adaptarea la condițiile schimbătoare din mediu",
        "angajații și autoritățile locale de educație",
        "părinții interesați de activitatea instituției",
        "sprijinirea realizării obiectivelor organizației"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „adaptarea la condițiile schimbătoare din mediu”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmăresc schimburile externe ale sistemului deschis?",
      "options": [
        "adaptarea la condițiile schimbătoare din mediu",
        "angajații și autoritățile locale de educație",
        "părinții interesați de activitatea instituției",
        "sprijinirea realizării obiectivelor organizației"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „sprijinirea realizării obiectivelor organizației”.",
      "kind": "Text"
    },
    {
      "q": "Ce grup extern este menționat în relația cu școala?",
      "options": [
        "adaptarea la condițiile schimbătoare din mediu",
        "angajații și autoritățile locale de educație",
        "părinții interesați de activitatea instituției",
        "sprijinirea realizării obiectivelor organizației"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „părinții interesați de activitatea instituției”.",
      "kind": "Text"
    },
    {
      "q": "Ce alte grupuri externe sunt menționate expres?",
      "options": [
        "adaptarea la condițiile schimbătoare din mediu",
        "angajații și autoritățile locale de educație",
        "părinții interesați de activitatea instituției",
        "sprijinirea realizării obiectivelor organizației"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „angajații și autoritățile locale de educație”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate face școala față de mediul extern?",
      "options": [
        "când reputația reduce presiunea recrutării studenților",
        "influențarea mediului prin propriile activități",
        "interacționează constant cu grupurile din vecinătate",
        "legături vitale cu angajații care sponsorizează studenți"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „influențarea mediului prin propriile activități”.",
      "kind": "Text"
    },
    {
      "q": "Ce tip de legături extinse au colegiile engleze?",
      "options": [
        "când reputația reduce presiunea recrutării studenților",
        "influențarea mediului prin propriile activități",
        "interacționează constant cu grupurile din vecinătate",
        "legături vitale cu angajații care sponsorizează studenți"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „legături vitale cu angajații care sponsorizează studenți”.",
      "kind": "Text"
    },
    {
      "q": "De ce multe școli pot fi socotite deschise?",
      "options": [
        "când reputația reduce presiunea recrutării studenților",
        "influențarea mediului prin propriile activități",
        "interacționează constant cu grupurile din vecinătate",
        "legături vitale cu angajații care sponsorizează studenți"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „interacționează constant cu grupurile din vecinătate”.",
      "kind": "Text"
    },
    {
      "q": "Când poate părea o instituție relativ închisă?",
      "options": [
        "când reputația reduce presiunea recrutării studenților",
        "influențarea mediului prin propriile activități",
        "interacționează constant cu grupurile din vecinătate",
        "legături vitale cu angajații care sponsorizează studenți"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „când reputația reduce presiunea recrutării studenților”.",
      "kind": "Text"
    },
    {
      "q": "Cum descrie autorul diferența dintre deschis și închis?",
      "options": [
        "atenția față de cerințele părinților potențiali",
        "ca un continuum mai degrabă decât o ruptură",
        "dependența mai mare de grupurile din exterior",
        "rețelele informale de rezolvare a problemelor comune"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „ca un continuum mai degrabă decât o ruptură”.",
      "kind": "Text"
    },
    {
      "q": "Ce sporește probabilitatea deschiderii unei instituții?",
      "options": [
        "atenția față de cerințele părinților potențiali",
        "ca un continuum mai degrabă decât o ruptură",
        "dependența mai mare de grupurile din exterior",
        "rețelele informale de rezolvare a problemelor comune"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „dependența mai mare de grupurile din exterior”.",
      "kind": "Text"
    },
    {
      "q": "Ce efect are concurența pentru elevi asupra școlilor?",
      "options": [
        "atenția față de cerințele părinților potențiali",
        "ca un continuum mai degrabă decât o ruptură",
        "dependența mai mare de grupurile din exterior",
        "rețelele informale de rezolvare a problemelor comune"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „atenția față de cerințele părinților potențiali”.",
      "kind": "Text"
    },
    {
      "q": "Ce exemplu contemporan ilustrează sistemul deschis?",
      "options": [
        "atenția față de cerințele părinților potențiali",
        "ca un continuum mai degrabă decât o ruptură",
        "dependența mai mare de grupurile din exterior",
        "rețelele informale de rezolvare a problemelor comune"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 60–62), răspunsul este „rețelele informale de rezolvare a problemelor comune”.",
      "kind": "Text"
    }
  ],
  "3.3": [
    {
      "q": "Cu al cui nume este asociată versiunea pură a birocrației?",
      "options": [
        "autoritatea legală conferită funcțiilor oficiale",
        "Max Weber în teoria organizațiilor formale",
        "nivelul ridicat de eficiență tehnică",
        "superiorilor aflați pe treptele ierarhice"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „Max Weber în teoria organizațiilor formale”.",
      "kind": "Text"
    },
    {
      "q": "Ce calitate atribuie Weber administrării birocratice?",
      "options": [
        "autoritatea legală conferită funcțiilor oficiale",
        "Max Weber în teoria organizațiilor formale",
        "nivelul ridicat de eficiență tehnică",
        "superiorilor aflați pe treptele ierarhice"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „nivelul ridicat de eficiență tehnică”.",
      "kind": "Text"
    },
    {
      "q": "Ce formă a autorității stă la baza piramidei?",
      "options": [
        "autoritatea legală conferită funcțiilor oficiale",
        "Max Weber în teoria organizațiilor formale",
        "nivelul ridicat de eficiență tehnică",
        "superiorilor aflați pe treptele ierarhice"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „autoritatea legală conferită funcțiilor oficiale”.",
      "kind": "Text"
    },
    {
      "q": "În fața cui răspund titularii funcțiilor birocratice?",
      "options": [
        "autoritatea legală conferită funcțiilor oficiale",
        "Max Weber în teoria organizațiilor formale",
        "nivelul ridicat de eficiență tehnică",
        "superiorilor aflați pe treptele ierarhice"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „superiorilor aflați pe treptele ierarhice”.",
      "kind": "Text"
    },
    {
      "q": "Cine formulează scopurile în vârful piramidei?",
      "options": [
        "aprobate fără discuții de către colectiv",
        "diviziunea muncii între specialiști",
        "oficialii aflați la nivelurile superioare",
        "predarea specializată în arii ale curriculumului"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „oficialii aflați la nivelurile superioare”.",
      "kind": "Text"
    },
    {
      "q": "Cum sunt tratate scopurile conducerii de către personal?",
      "options": [
        "aprobate fără discuții de către colectiv",
        "diviziunea muncii între specialiști",
        "oficialii aflați la nivelurile superioare",
        "predarea specializată în arii ale curriculumului"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „aprobate fără discuții de către colectiv”.",
      "kind": "Text"
    },
    {
      "q": "Ce principiu repartizează sarcini după expertiză?",
      "options": [
        "aprobate fără discuții de către colectiv",
        "diviziunea muncii între specialiști",
        "oficialii aflați la nivelurile superioare",
        "predarea specializată în arii ale curriculumului"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „diviziunea muncii între specialiști”.",
      "kind": "Text"
    },
    {
      "q": "Ce ilustrează structura departamentală gimnazială?",
      "options": [
        "aprobate fără discuții de către colectiv",
        "diviziunea muncii între specialiști",
        "oficialii aflați la nivelurile superioare",
        "predarea specializată în arii ale curriculumului"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „predarea specializată în arii ale curriculumului”.",
      "kind": "Text"
    },
    {
      "q": "De ce învățătorul la clasă se distanțează de model?",
      "options": [
        "inițiativa personală a fiecărui angajat",
        "îndrumătoarele și regulile interne ale școlii",
        "lucrează cu aceeași grupă în majoritatea timpului",
        "regulile și reglementările instituționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „lucrează cu aceeași grupă în majoritatea timpului”.",
      "kind": "Text"
    },
    {
      "q": "Ce guvernează deciziile în instituția birocratică?",
      "options": [
        "inițiativa personală a fiecărui angajat",
        "îndrumătoarele și regulile interne ale școlii",
        "lucrează cu aceeași grupă în majoritatea timpului",
        "regulile și reglementările instituționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „regulile și reglementările instituționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce nu ar trebui să guverneze deciziile birocratice?",
      "options": [
        "inițiativa personală a fiecărui angajat",
        "îndrumătoarele și regulile interne ale școlii",
        "lucrează cu aceeași grupă în majoritatea timpului",
        "regulile și reglementările instituționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „inițiativa personală a fiecărui angajat”.",
      "kind": "Text"
    },
    {
      "q": "Ce instrument poate ghida comportamentul profesorilor?",
      "options": [
        "inițiativa personală a fiecărui angajat",
        "îndrumătoarele și regulile interne ale școlii",
        "lucrează cu aceeași grupă în majoritatea timpului",
        "regulile și reglementările instituționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „îndrumătoarele și regulile interne ale școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce tip de relații promovează modelul birocratic?",
      "options": [
        "influența individualității participanților implicați",
        "legăturile de calitate dintre profesori și elevi",
        "meritul dovedit prin calificări și experiență",
        "relații impersonale între personal și beneficiari"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „relații impersonale între personal și beneficiari”.",
      "kind": "Text"
    },
    {
      "q": "Ce reduce neutralitatea în luarea deciziilor?",
      "options": [
        "influența individualității participanților implicați",
        "legăturile de calitate dintre profesori și elevi",
        "meritul dovedit prin calificări și experiență",
        "relații impersonale între personal și beneficiari"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „influența individualității participanților implicați”.",
      "kind": "Text"
    },
    {
      "q": "Ce relații personale rămân importante în școli?",
      "options": [
        "influența individualității participanților implicați",
        "legăturile de calitate dintre profesori și elevi",
        "meritul dovedit prin calificări și experiență",
        "relații impersonale între personal și beneficiari"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „legăturile de calitate dintre profesori și elevi”.",
      "kind": "Text"
    },
    {
      "q": "Pe ce criteriu se bazează recrutarea personalului?",
      "options": [
        "influența individualității participanților implicați",
        "legăturile de calitate dintre profesori și elevi",
        "meritul dovedit prin calificări și experiență",
        "relații impersonale între personal și beneficiari"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „meritul dovedit prin calificări și experiență”.",
      "kind": "Text"
    },
    {
      "q": "De ce depinde promovarea în sens birocratic?",
      "options": [
        "eficiența maximă a organizației formale",
        "expertiza demonstrată în funcțiile ocupate",
        "proceduri competitive și formale de selecție",
        "recomandarea formulată de directorul instituției"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „expertiza demonstrată în funcțiile ocupate”.",
      "kind": "Text"
    },
    {
      "q": "Ce proceduri se folosesc pentru numiri și promovări?",
      "options": [
        "eficiența maximă a organizației formale",
        "expertiza demonstrată în funcțiile ocupate",
        "proceduri competitive și formale de selecție",
        "recomandarea formulată de directorul instituției"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „proceduri competitive și formale de selecție”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate face promovarea internă mai puțin formală?",
      "options": [
        "eficiența maximă a organizației formale",
        "expertiza demonstrată în funcțiile ocupate",
        "proceduri competitive și formale de selecție",
        "recomandarea formulată de directorul instituției"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „recomandarea formulată de directorul instituției”.",
      "kind": "Text"
    },
    {
      "q": "Ce scop urmărește birocrația prin abordări raționale?",
      "options": [
        "eficiența maximă a organizației formale",
        "expertiza demonstrată în funcțiile ocupate",
        "proceduri competitive și formale de selecție",
        "recomandarea formulată de directorul instituției"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 62–63), răspunsul este „eficiența maximă a organizației formale”.",
      "kind": "Text"
    }
  ],
  "3.3.1": [
    {
      "q": "Ce instituții mari conțin elemente birocratice?",
      "options": [
        "activitatea elevilor și a personalului didactic",
        "directorul instituției de învățământ",
        "organizațiile educaționale de dimensiuni mari",
        "predarea potrivit expertizei profesorilor"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „organizațiile educaționale de dimensiuni mari”.",
      "kind": "Text"
    },
    {
      "q": "Cine ocupă vârful ierarhiei într-o școală?",
      "options": [
        "activitatea elevilor și a personalului didactic",
        "directorul instituției de învățământ",
        "organizațiile educaționale de dimensiuni mari",
        "predarea potrivit expertizei profesorilor"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „directorul instituției de învățământ”.",
      "kind": "Text"
    },
    {
      "q": "Ce forme de specializare apar în colegii?",
      "options": [
        "activitatea elevilor și a personalului didactic",
        "directorul instituției de învățământ",
        "organizațiile educaționale de dimensiuni mari",
        "predarea potrivit expertizei profesorilor"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „predarea potrivit expertizei profesorilor”.",
      "kind": "Text"
    },
    {
      "q": "Ce reglementează numeroase reguli școlare?",
      "options": [
        "activitatea elevilor și a personalului didactic",
        "directorul instituției de învățământ",
        "organizațiile educaționale de dimensiuni mari",
        "predarea potrivit expertizei profesorilor"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „activitatea elevilor și a personalului didactic”.",
      "kind": "Text"
    },
    {
      "q": "Ce expresie descrie presiunea orarului asupra muncii?",
      "options": [
        "consiliului de administrație și părților interesate",
        "dominarea scopurilor educaționale de birocrație",
        "tirania orarului în activitatea școlară",
        "un rol subordonat finalităților educaționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „tirania orarului în activitatea școlară”.",
      "kind": "Text"
    },
    {
      "q": "În fața cui răspunde conducerea pentru activitatea școlii?",
      "options": [
        "consiliului de administrație și părților interesate",
        "dominarea scopurilor educaționale de birocrație",
        "tirania orarului în activitatea școlară",
        "un rol subordonat finalităților educaționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „consiliului de administrație și părților interesate”.",
      "kind": "Text"
    },
    {
      "q": "Ce pericol semnalează autorul în privința procedurilor?",
      "options": [
        "consiliului de administrație și părților interesate",
        "dominarea scopurilor educaționale de birocrație",
        "tirania orarului în activitatea școlară",
        "un rol subordonat finalităților educaționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „dominarea scopurilor educaționale de birocrație”.",
      "kind": "Text"
    },
    {
      "q": "Ce rol trebuie să aibă birocrația față de scopurile școlii?",
      "options": [
        "consiliului de administrație și părților interesate",
        "dominarea scopurilor educaționale de birocrație",
        "tirania orarului în activitatea școlară",
        "un rol subordonat finalităților educaționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „un rol subordonat finalităților educaționale”.",
      "kind": "Text"
    },
    {
      "q": "În ce sisteme este birocrația probabil preferată?",
      "options": [
        "autonomie sporită pentru profesori și directori",
        "centralizarea și birocrația excesivă persistente",
        "în sisteme educaționale puternic centralizate",
        "nivelurile subordonate ale ierarhiei educaționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „în sisteme educaționale puternic centralizate”.",
      "kind": "Text"
    },
    {
      "q": "Ce controlează aparatul birocratic centralizat?",
      "options": [
        "autonomie sporită pentru profesori și directori",
        "centralizarea și birocrația excesivă persistente",
        "în sisteme educaționale puternic centralizate",
        "nivelurile subordonate ale ierarhiei educaționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „nivelurile subordonate ale ierarhiei educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce afectează eficacitatea potrivit lui Newland?",
      "options": [
        "autonomie sporită pentru profesori și directori",
        "centralizarea și birocrația excesivă persistente",
        "în sisteme educaționale puternic centralizate",
        "nivelurile subordonate ale ierarhiei educaționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „centralizarea și birocrația excesivă persistente”.",
      "kind": "Text"
    },
    {
      "q": "Ce ar fi benefic în cazul sistemului grec?",
      "options": [
        "autonomie sporită pentru profesori și directori",
        "centralizarea și birocrația excesivă persistente",
        "în sisteme educaționale puternic centralizate",
        "nivelurile subordonate ale ierarhiei educaționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „autonomie sporită pentru profesori și directori”.",
      "kind": "Text"
    },
    {
      "q": "Ce a facilitat managementul la nivelul școlii în Victoria?",
      "options": [
        "controlul local și îmbunătățirea calității",
        "discreția și autonomia profesională exercitate",
        "impunerea politicilor și a standardelor rigide",
        "școli mai autonome și mai flexibile"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „controlul local și îmbunătățirea calității”.",
      "kind": "Text"
    },
    {
      "q": "Ce fel de școli a produs managementul local comparativ?",
      "options": [
        "controlul local și îmbunătățirea calității",
        "discreția și autonomia profesională exercitate",
        "impunerea politicilor și a standardelor rigide",
        "școli mai autonome și mai flexibile"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „școli mai autonome și mai flexibile”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate dăuna creativității profesorilor?",
      "options": [
        "controlul local și îmbunătățirea calității",
        "discreția și autonomia profesională exercitate",
        "impunerea politicilor și a standardelor rigide",
        "școli mai autonome și mai flexibile"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „impunerea politicilor și a standardelor rigide”.",
      "kind": "Text"
    },
    {
      "q": "Ce au redus auditul și reglementarea muncii profesorilor?",
      "options": [
        "controlul local și îmbunătățirea calității",
        "discreția și autonomia profesională exercitate",
        "impunerea politicilor și a standardelor rigide",
        "școli mai autonome și mai flexibile"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „discreția și autonomia profesională exercitate”.",
      "kind": "Text"
    },
    {
      "q": "De ce aplicarea excesivă este dificilă în educație?",
      "options": [
        "când participă la propria schimbare educațională",
        "datorită rolului profesional al cadrelor didactice",
        "eșecul inovației impuse din exterior",
        "implementare lipsită de entuziasm din partea profesorilor"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „datorită rolului profesional al cadrelor didactice”.",
      "kind": "Text"
    },
    {
      "q": "Când își asumă profesorii mai bine o inovație?",
      "options": [
        "când participă la propria schimbare educațională",
        "datorită rolului profesional al cadrelor didactice",
        "eșecul inovației impuse din exterior",
        "implementare lipsită de entuziasm din partea profesorilor"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „când participă la propria schimbare educațională”.",
      "kind": "Text"
    },
    {
      "q": "Ce atitudine poate produce schimbarea impusă extern?",
      "options": [
        "când participă la propria schimbare educațională",
        "datorită rolului profesional al cadrelor didactice",
        "eșecul inovației impuse din exterior",
        "implementare lipsită de entuziasm din partea profesorilor"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „implementare lipsită de entuziasm din partea profesorilor”.",
      "kind": "Text"
    },
    {
      "q": "Ce rezultat poate avea implementarea fără entuziasm?",
      "options": [
        "când participă la propria schimbare educațională",
        "datorită rolului profesional al cadrelor didactice",
        "eșecul inovației impuse din exterior",
        "implementare lipsită de entuziasm din partea profesorilor"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 63–65), răspunsul este „eșecul inovației impuse din exterior”.",
      "kind": "Text"
    }
  ],
  "3.4": [
    {
      "q": "Ce privilegiază modelul rațional față de celelalte modele?",
      "options": [
        "în structura organizațională deja stabilită",
        "perceperea problemei ori oportunității de alegere",
        "procesul managerial al luării deciziilor",
        "realizarea scopurilor organizaționale stabilite"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „procesul managerial al luării deciziilor”.",
      "kind": "Text"
    },
    {
      "q": "În ce cadru se desfășoară decizia rațională?",
      "options": [
        "în structura organizațională deja stabilită",
        "perceperea problemei ori oportunității de alegere",
        "procesul managerial al luării deciziilor",
        "realizarea scopurilor organizaționale stabilite"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „în structura organizațională deja stabilită”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmărește procesul rațional de decizie?",
      "options": [
        "în structura organizațională deja stabilită",
        "perceperea problemei ori oportunității de alegere",
        "procesul managerial al luării deciziilor",
        "realizarea scopurilor organizaționale stabilite"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „realizarea scopurilor organizaționale stabilite”.",
      "kind": "Text"
    },
    {
      "q": "Care este primul pas în schema procesului rațional?",
      "options": [
        "în structura organizațională deja stabilită",
        "perceperea problemei ori oportunității de alegere",
        "procesul managerial al luării deciziilor",
        "realizarea scopurilor organizaționale stabilite"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „perceperea problemei ori oportunității de alegere”.",
      "kind": "Text"
    },
    {
      "q": "Ce presupune analiza problemei înainte de decizie?",
      "options": [
        "colectarea datelor necesare evaluării",
        "contribuția la obiectivele organizației",
        "formularea soluțiilor și opțiunilor alternative",
        "implementarea soluției deja selectate"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „colectarea datelor necesare evaluării”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmează după analizarea problemei?",
      "options": [
        "colectarea datelor necesare evaluării",
        "contribuția la obiectivele organizației",
        "formularea soluțiilor și opțiunilor alternative",
        "implementarea soluției deja selectate"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „formularea soluțiilor și opțiunilor alternative”.",
      "kind": "Text"
    },
    {
      "q": "După ce criteriu este aleasă soluția adecvată?",
      "options": [
        "colectarea datelor necesare evaluării",
        "contribuția la obiectivele organizației",
        "formularea soluțiilor și opțiunilor alternative",
        "implementarea soluției deja selectate"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „contribuția la obiectivele organizației”.",
      "kind": "Text"
    },
    {
      "q": "Ce etapă urmează alegerii alternativei potrivite?",
      "options": [
        "colectarea datelor necesare evaluării",
        "contribuția la obiectivele organizației",
        "formularea soluțiilor și opțiunilor alternative",
        "implementarea soluției deja selectate"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „implementarea soluției deja selectate”.",
      "kind": "Text"
    },
    {
      "q": "Cum se încheie ciclul decizional rațional?",
      "options": [
        "consecințele soluțiilor alternative propuse",
        "decizii pe moment în situații în evoluție",
        "evaluarea poate redefini problema inițială",
        "monitorizarea și evaluarea strategiei alese"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „monitorizarea și evaluarea strategiei alese”.",
      "kind": "Text"
    },
    {
      "q": "De ce este procesul rațional unul repetitiv?",
      "options": [
        "consecințele soluțiilor alternative propuse",
        "decizii pe moment în situații în evoluție",
        "evaluarea poate redefini problema inițială",
        "monitorizarea și evaluarea strategiei alese"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „evaluarea poate redefini problema inițială”.",
      "kind": "Text"
    },
    {
      "q": "Ce pot cântări factorii decizionali prin planificare?",
      "options": [
        "consecințele soluțiilor alternative propuse",
        "decizii pe moment în situații în evoluție",
        "evaluarea poate redefini problema inițială",
        "monitorizarea și evaluarea strategiei alese"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „consecințele soluțiilor alternative propuse”.",
      "kind": "Text"
    },
    {
      "q": "Ce fel de decizii iau profesorii și directorii uneori?",
      "options": [
        "consecințele soluțiilor alternative propuse",
        "decizii pe moment în situații în evoluție",
        "evaluarea poate redefini problema inițială",
        "monitorizarea și evaluarea strategiei alese"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „decizii pe moment în situații în evoluție”.",
      "kind": "Text"
    },
    {
      "q": "Cum califică autorul descrierea rațională idealizată?",
      "options": [
        "datele relevante despre problema examinată",
        "perspectivele diferite asupra obiectivelor școlii",
        "preferințele indivizilor și grupurilor implicate",
        "un model normativ al deciziei organizaționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „un model normativ al deciziei organizaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate face identificarea problemei discutabilă?",
      "options": [
        "datele relevante despre problema examinată",
        "perspectivele diferite asupra obiectivelor școlii",
        "preferințele indivizilor și grupurilor implicate",
        "un model normativ al deciziei organizaționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „perspectivele diferite asupra obiectivelor școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce resursă necesară unei decizii poate lipsi?",
      "options": [
        "datele relevante despre problema examinată",
        "perspectivele diferite asupra obiectivelor școlii",
        "preferințele indivizilor și grupurilor implicate",
        "un model normativ al deciziei organizaționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „datele relevante despre problema examinată”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate altera alegerea imparțială a soluției?",
      "options": [
        "datele relevante despre problema examinată",
        "perspectivele diferite asupra obiectivelor școlii",
        "preferințele indivizilor și grupurilor implicate",
        "un model normativ al deciziei organizaționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „preferințele indivizilor și grupurilor implicate”.",
      "kind": "Text"
    },
    {
      "q": "Ce ar trebui să orienteze alocarea rațională a resurselor?",
      "options": [
        "considerarea efectelor dincolo de ciclul bugetar",
        "costul de oportunitate al opțiunilor bugetare",
        "reexaminarea tuturor domeniilor de cheltuieli",
        "scopurile articulate și prioritățile școlii"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „scopurile articulate și prioritățile școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce cere planificarea bugetară pe termen lung?",
      "options": [
        "considerarea efectelor dincolo de ciclul bugetar",
        "costul de oportunitate al opțiunilor bugetare",
        "reexaminarea tuturor domeniilor de cheltuieli",
        "scopurile articulate și prioritățile școlii"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „considerarea efectelor dincolo de ciclul bugetar”.",
      "kind": "Text"
    },
    {
      "q": "Ce înseamnă bugetarea în bază zero?",
      "options": [
        "considerarea efectelor dincolo de ciclul bugetar",
        "costul de oportunitate al opțiunilor bugetare",
        "reexaminarea tuturor domeniilor de cheltuieli",
        "scopurile articulate și prioritățile școlii"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „reexaminarea tuturor domeniilor de cheltuieli”.",
      "kind": "Text"
    },
    {
      "q": "Ce cercetează evaluarea alternativelor de cheltuire?",
      "options": [
        "considerarea efectelor dincolo de ciclul bugetar",
        "costul de oportunitate al opțiunilor bugetare",
        "reexaminarea tuturor domeniilor de cheltuieli",
        "scopurile articulate și prioritățile școlii"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 65–68), răspunsul este „costul de oportunitate al opțiunilor bugetare”.",
      "kind": "Text"
    }
  ],
  "3.5": [
    {
      "q": "Ce relații evidențiază modelele ierarhice?",
      "options": [
        "autoritatea și responsabilitatea managerilor superiori",
        "organizația birocratică structurată pe roluri",
        "relațiile verticale din cadrul organizației",
        "sponsorilor externi ai instituției educaționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „relațiile verticale din cadrul organizației”.",
      "kind": "Text"
    },
    {
      "q": "În fața cui răspund liderii în acest model?",
      "options": [
        "autoritatea și responsabilitatea managerilor superiori",
        "organizația birocratică structurată pe roluri",
        "relațiile verticale din cadrul organizației",
        "sponsorilor externi ai instituției educaționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „sponsorilor externi ai instituției educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Pe ce pune accent descrierea structurii ierarhice?",
      "options": [
        "autoritatea și responsabilitatea managerilor superiori",
        "organizația birocratică structurată pe roluri",
        "relațiile verticale din cadrul organizației",
        "sponsorilor externi ai instituției educaționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „autoritatea și responsabilitatea managerilor superiori”.",
      "kind": "Text"
    },
    {
      "q": "În ce tip de organizație încadrează Packwood ierarhia?",
      "options": [
        "autoritatea și responsabilitatea managerilor superiori",
        "organizația birocratică structurată pe roluri",
        "relațiile verticale din cadrul organizației",
        "sponsorilor externi ai instituției educaționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „organizația birocratică structurată pe roluri”.",
      "kind": "Text"
    },
    {
      "q": "În ce direcție se deleagă autoritatea pentru sarcini?",
      "options": [
        "de la rolurile inferioare spre cele superioare",
        "de la rolurile superioare spre cele inferioare",
        "din poziția formală de director al școlii",
        "sunt atașate rolurilor și nu persoanelor"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „de la rolurile superioare spre cele inferioare”.",
      "kind": "Text"
    },
    {
      "q": "În ce direcție circulă răspunderea pentru performanță?",
      "options": [
        "de la rolurile inferioare spre cele superioare",
        "de la rolurile superioare spre cele inferioare",
        "din poziția formală de director al școlii",
        "sunt atașate rolurilor și nu persoanelor"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „de la rolurile inferioare spre cele superioare”.",
      "kind": "Text"
    },
    {
      "q": "De ce sunt impersonale autoritatea și responsabilitatea?",
      "options": [
        "de la rolurile inferioare spre cele superioare",
        "de la rolurile superioare spre cele inferioare",
        "din poziția formală de director al școlii",
        "sunt atașate rolurilor și nu persoanelor"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „sunt atașate rolurilor și nu persoanelor”.",
      "kind": "Text"
    },
    {
      "q": "De unde derivă autoritatea directorului asupra adjunctului?",
      "options": [
        "de la rolurile inferioare spre cele superioare",
        "de la rolurile superioare spre cele inferioare",
        "din poziția formală de director al școlii",
        "sunt atașate rolurilor și nu persoanelor"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „din poziția formală de director al școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce tip de comunicare domină modelul ierarhic?",
      "options": [
        "arbitrul final al problemelor instituționale",
        "comunicarea verticală între nivelurile instituției",
        "de sus în jos către personalul subordonat",
        "la un nivel superior capabil să le soluționeze"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „comunicarea verticală între nivelurile instituției”.",
      "kind": "Text"
    },
    {
      "q": "În ce sens circulă politicile aprobate prin ierarhie?",
      "options": [
        "arbitrul final al problemelor instituționale",
        "comunicarea verticală între nivelurile instituției",
        "de sus în jos către personalul subordonat",
        "la un nivel superior capabil să le soluționeze"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „de sus în jos către personalul subordonat”.",
      "kind": "Text"
    },
    {
      "q": "Unde ajung problemele nerezolvate la nivel inferior?",
      "options": [
        "arbitrul final al problemelor instituționale",
        "comunicarea verticală între nivelurile instituției",
        "de sus în jos către personalul subordonat",
        "la un nivel superior capabil să le soluționeze"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „la un nivel superior capabil să le soluționeze”.",
      "kind": "Text"
    },
    {
      "q": "Ce rol are directorul în conflictele nerezolvate?",
      "options": [
        "arbitrul final al problemelor instituționale",
        "comunicarea verticală între nivelurile instituției",
        "de sus în jos către personalul subordonat",
        "la un nivel superior capabil să le soluționeze"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „arbitrul final al problemelor instituționale”.",
      "kind": "Text"
    },
    {
      "q": "La ce servește comunicarea orizontală potrivit lui Packwood?",
      "options": [
        "autoritate managerială asupra profesorilor de clasă",
        "consiliului de administrație și autorităților locale",
        "coordonării dintre colegi aflați la același nivel",
        "discreție profesională în predare și evaluare"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „coordonării dintre colegi aflați la același nivel”.",
      "kind": "Text"
    },
    {
      "q": "Ce nu deține titularul de disciplină asupra colegilor?",
      "options": [
        "autoritate managerială asupra profesorilor de clasă",
        "consiliului de administrație și autorităților locale",
        "coordonării dintre colegi aflați la același nivel",
        "discreție profesională în predare și evaluare"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „autoritate managerială asupra profesorilor de clasă”.",
      "kind": "Text"
    },
    {
      "q": "În fața cui răspunde directorul pentru activitatea școlii?",
      "options": [
        "autoritate managerială asupra profesorilor de clasă",
        "consiliului de administrație și autorităților locale",
        "coordonării dintre colegi aflați la același nivel",
        "discreție profesională în predare și evaluare"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „consiliului de administrație și autorităților locale”.",
      "kind": "Text"
    },
    {
      "q": "Ce solicită profesorii ca profesioniști în activitatea de clasă?",
      "options": [
        "autoritate managerială asupra profesorilor de clasă",
        "consiliului de administrație și autorităților locale",
        "coordonării dintre colegi aflați la același nivel",
        "discreție profesională în predare și evaluare"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „discreție profesională în predare și evaluare”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate tempera importanța ierarhiei școlare?",
      "options": [
        "autoritatea legală exercitată de directori",
        "calități personale mai degrabă decât funcții",
        "China în analiza realizată de Bush și Qiang",
        "colegialitatea și autonomia profesorilor"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „colegialitatea și autonomia profesorilor”.",
      "kind": "Text"
    },
    {
      "q": "Pe ce se sprijină leadershipul distribuit potrivit lui Hatcher?",
      "options": [
        "autoritatea legală exercitată de directori",
        "calități personale mai degrabă decât funcții",
        "China în analiza realizată de Bush și Qiang",
        "colegialitatea și autonomia profesorilor"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „calități personale mai degrabă decât funcții”.",
      "kind": "Text"
    },
    {
      "q": "Ce menține ierarhia importantă în școli și colegii?",
      "options": [
        "autoritatea legală exercitată de directori",
        "calități personale mai degrabă decât funcții",
        "China în analiza realizată de Bush și Qiang",
        "colegialitatea și autonomia profesorilor"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „autoritatea legală exercitată de directori”.",
      "kind": "Text"
    },
    {
      "q": "Ce societate ilustrează respectul pentru autoritatea pozițională?",
      "options": [
        "autoritatea legală exercitată de directori",
        "calități personale mai degrabă decât funcții",
        "China în analiza realizată de Bush și Qiang",
        "colegialitatea și autonomia profesorilor"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 68–69), răspunsul este „China în analiza realizată de Bush și Qiang”.",
      "kind": "Text"
    }
  ],
  "3.6.1": [
    {
      "q": "Cum sunt descrise școlile în perspectiva formală?",
      "options": [
        "directorii împreună cu echipa de conducere",
        "lucrează împreună pentru scopurile oficiale",
        "organizații orientate spre obiective specifice",
        "scopurile fundamentale ale educației"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „organizații orientate spre obiective specifice”.",
      "kind": "Text"
    },
    {
      "q": "Cine stabilește de regulă obiectivele oficiale?",
      "options": [
        "directorii împreună cu echipa de conducere",
        "lucrează împreună pentru scopurile oficiale",
        "organizații orientate spre obiective specifice",
        "scopurile fundamentale ale educației"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „directorii împreună cu echipa de conducere”.",
      "kind": "Text"
    },
    {
      "q": "Ce se presupune despre membrii organizației?",
      "options": [
        "directorii împreună cu echipa de conducere",
        "lucrează împreună pentru scopurile oficiale",
        "organizații orientate spre obiective specifice",
        "scopurile fundamentale ale educației"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „lucrează împreună pentru scopurile oficiale”.",
      "kind": "Text"
    },
    {
      "q": "Ce trebuie să ghideze deciziile liderilor potrivit lui Begley?",
      "options": [
        "directorii împreună cu echipa de conducere",
        "lucrează împreună pentru scopurile oficiale",
        "organizații orientate spre obiective specifice",
        "scopurile fundamentale ale educației"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „scopurile fundamentale ale educației”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmăresc scopurile estetice menționate de Begley?",
      "options": [
        "formarea caracterului în cadrul educației",
        "formarea competențelor sociale și civice",
        "învățarea pentru câștigarea existenței",
        "printr-o abordare echilibrată în leadership"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „formarea caracterului în cadrul educației”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmăresc scopurile economice menționate de Begley?",
      "options": [
        "formarea caracterului în cadrul educației",
        "formarea competențelor sociale și civice",
        "învățarea pentru câștigarea existenței",
        "printr-o abordare echilibrată în leadership"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „învățarea pentru câștigarea existenței”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmăresc funcțiile de socializare ale educației?",
      "options": [
        "formarea caracterului în cadrul educației",
        "formarea competențelor sociale și civice",
        "învățarea pentru câștigarea existenței",
        "printr-o abordare echilibrată în leadership"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „formarea competențelor sociale și civice”.",
      "kind": "Text"
    },
    {
      "q": "Cum trebuie tratate cele trei scopuri fundamentale?",
      "options": [
        "formarea caracterului în cadrul educației",
        "formarea competențelor sociale și civice",
        "învățarea pentru câștigarea existenței",
        "printr-o abordare echilibrată în leadership"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „printr-o abordare echilibrată în leadership”.",
      "kind": "Text"
    },
    {
      "q": "Ce subliniază Davies și Davies în leadershipul strategic?",
      "options": [
        "alegerea direcției instituției educaționale",
        "conceperea și îndeplinirea obiectivelor școlii",
        "conducerea membrilor spre atingerea standardelor",
        "dezvoltarea misiunii și obiectivelor adecvate"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „alegerea direcției instituției educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce misiune atribuie Cheng liderilor?",
      "options": [
        "alegerea direcției instituției educaționale",
        "conceperea și îndeplinirea obiectivelor școlii",
        "conducerea membrilor spre atingerea standardelor",
        "dezvoltarea misiunii și obiectivelor adecvate"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „conceperea și îndeplinirea obiectivelor școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce strategie propune Cheng pentru promovarea calității?",
      "options": [
        "alegerea direcției instituției educaționale",
        "conceperea și îndeplinirea obiectivelor școlii",
        "conducerea membrilor spre atingerea standardelor",
        "dezvoltarea misiunii și obiectivelor adecvate"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „dezvoltarea misiunii și obiectivelor adecvate”.",
      "kind": "Text"
    },
    {
      "q": "Ce altă strategie propune Cheng pentru calitate?",
      "options": [
        "alegerea direcției instituției educaționale",
        "conceperea și îndeplinirea obiectivelor școlii",
        "conducerea membrilor spre atingerea standardelor",
        "dezvoltarea misiunii și obiectivelor adecvate"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „conducerea membrilor spre atingerea standardelor”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate submina imaginea unui singur scop oficial?",
      "options": [
        "ambiția personală în propria carieră",
        "atingerea standardului la o disciplină",
        "existența obiectivelor multiple în școală",
        "individual, departamental și instituțional"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „existența obiectivelor multiple în școală”.",
      "kind": "Text"
    },
    {
      "q": "Ce trei niveluri ale scopurilor se pot distinge?",
      "options": [
        "ambiția personală în propria carieră",
        "atingerea standardului la o disciplină",
        "existența obiectivelor multiple în școală",
        "individual, departamental și instituțional"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „individual, departamental și instituțional”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate exprima un scop individual al profesorului?",
      "options": [
        "ambiția personală în propria carieră",
        "atingerea standardului la o disciplină",
        "existența obiectivelor multiple în școală",
        "individual, departamental și instituțional"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „ambiția personală în propria carieră”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate exprima un scop al departamentului?",
      "options": [
        "ambiția personală în propria carieră",
        "atingerea standardului la o disciplină",
        "existența obiectivelor multiple în școală",
        "individual, departamental și instituțional"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „atingerea standardului la o disciplină”.",
      "kind": "Text"
    },
    {
      "q": "Cum se raportează uneori aceste obiective între ele?",
      "options": [
        "centralizarea deciziilor la nivelul autorităților",
        "pot fi incompatibile în cadrul școlii",
        "scopuri interne și scopuri externe",
        "stabilirea lor în școală potrivit nevoilor"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „pot fi incompatibile în cadrul școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce distincție între scopuri este făcută de Fishman?",
      "options": [
        "centralizarea deciziilor la nivelul autorităților",
        "pot fi incompatibile în cadrul școlii",
        "scopuri interne și scopuri externe",
        "stabilirea lor în școală potrivit nevoilor"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „scopuri interne și scopuri externe”.",
      "kind": "Text"
    },
    {
      "q": "Ce restrânge alegerea scopurilor de către liderii locali?",
      "options": [
        "centralizarea deciziilor la nivelul autorităților",
        "pot fi incompatibile în cadrul școlii",
        "scopuri interne și scopuri externe",
        "stabilirea lor în școală potrivit nevoilor"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „centralizarea deciziilor la nivelul autorităților”.",
      "kind": "Text"
    },
    {
      "q": "Ce favorizează asumarea și implementarea scopurilor?",
      "options": [
        "centralizarea deciziilor la nivelul autorităților",
        "pot fi incompatibile în cadrul școlii",
        "scopuri interne și scopuri externe",
        "stabilirea lor în școală potrivit nevoilor"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 70–72), răspunsul este „stabilirea lor în școală potrivit nevoilor”.",
      "kind": "Text"
    }
  ],
  "3.6.2": [
    {
      "q": "Cum prezintă modelele formale structura organizației?",
      "options": [
        "apartenență la instituția educațională",
        "ca un fapt obiectiv al instituției",
        "continuitatea și permanența rolurilor oficiale",
        "în raport cu poziția ocupată în școală"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „ca un fapt obiectiv al instituției”.",
      "kind": "Text"
    },
    {
      "q": "Ce sentiment pot insufla școlile personalului și elevilor?",
      "options": [
        "apartenență la instituția educațională",
        "ca un fapt obiectiv al instituției",
        "continuitatea și permanența rolurilor oficiale",
        "în raport cu poziția ocupată în școală"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „apartenență la instituția educațională”.",
      "kind": "Text"
    },
    {
      "q": "Cum își definesc membrii personalului viața profesională?",
      "options": [
        "apartenență la instituția educațională",
        "ca un fapt obiectiv al instituției",
        "continuitatea și permanența rolurilor oficiale",
        "în raport cu poziția ocupată în școală"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „în raport cu poziția ocupată în școală”.",
      "kind": "Text"
    },
    {
      "q": "Ce implică reprezentarea fizică a structurii?",
      "options": [
        "apartenență la instituția educațională",
        "ca un fapt obiectiv al instituției",
        "continuitatea și permanența rolurilor oficiale",
        "în raport cu poziția ocupată în școală"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „continuitatea și permanența rolurilor oficiale”.",
      "kind": "Text"
    },
    {
      "q": "Cum sunt definite sarcinile profesorilor în model?",
      "options": [
        "cerințele oficiale ale postului ocupat",
        "individualitatea persoanei care ocupă postul",
        "poziția deținută în organizația educațională",
        "prin rolul ocupat în structura formală"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „prin rolul ocupat în structura formală”.",
      "kind": "Text"
    },
    {
      "q": "Ce influențează comportamentul individului în model?",
      "options": [
        "cerințele oficiale ale postului ocupat",
        "individualitatea persoanei care ocupă postul",
        "poziția deținută în organizația educațională",
        "prin rolul ocupat în structura formală"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „poziția deținută în organizația educațională”.",
      "kind": "Text"
    },
    {
      "q": "Ce este subordonat structurii în această perspectivă?",
      "options": [
        "cerințele oficiale ale postului ocupat",
        "individualitatea persoanei care ocupă postul",
        "poziția deținută în organizația educațională",
        "prin rolul ocupat în structura formală"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „individualitatea persoanei care ocupă postul”.",
      "kind": "Text"
    },
    {
      "q": "Ce influențează rolul liderilor și managerilor?",
      "options": [
        "cerințele oficiale ale postului ocupat",
        "individualitatea persoanei care ocupă postul",
        "poziția deținută în organizația educațională",
        "prin rolul ocupat în structura formală"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „cerințele oficiale ale postului ocupat”.",
      "kind": "Text"
    },
    {
      "q": "Ce înseamnă asumarea rolului potrivit lui Hall?",
      "options": [
        "acceptarea poziției așa cum este definită",
        "ierarhic și pe verticală în instituție",
        "primatul funcției față de numele ocupantului",
        "reinterpretarea poziției potrivit persoanei"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „acceptarea poziției așa cum este definită”.",
      "kind": "Text"
    },
    {
      "q": "Ce înseamnă crearea rolului potrivit lui Hall?",
      "options": [
        "acceptarea poziției așa cum este definită",
        "ierarhic și pe verticală în instituție",
        "primatul funcției față de numele ocupantului",
        "reinterpretarea poziției potrivit persoanei"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „reinterpretarea poziției potrivit persoanei”.",
      "kind": "Text"
    },
    {
      "q": "Ce indică inscripția director pe ușa biroului?",
      "options": [
        "acceptarea poziției așa cum este definită",
        "ierarhic și pe verticală în instituție",
        "primatul funcției față de numele ocupantului",
        "reinterpretarea poziției potrivit persoanei"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „primatul funcției față de numele ocupantului”.",
      "kind": "Text"
    },
    {
      "q": "Cum tind să fie configurate raporturile dintre funcții?",
      "options": [
        "acceptarea poziției așa cum este definită",
        "ierarhic și pe verticală în instituție",
        "primatul funcției față de numele ocupantului",
        "reinterpretarea poziției potrivit persoanei"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „ierarhic și pe verticală în instituție”.",
      "kind": "Text"
    },
    {
      "q": "Prin cine poate răspunde un profesor în fața directorului?",
      "options": [
        "egalitatea de șanse a elevilor",
        "în relațiile școlare din Africa de Sud",
        "modul de urmărire a obiectivelor școlii",
        "printr-un șef de departament intermediar"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „printr-un șef de departament intermediar”.",
      "kind": "Text"
    },
    {
      "q": "Unde este remarcat un etos de sus în jos?",
      "options": [
        "egalitatea de șanse a elevilor",
        "în relațiile școlare din Africa de Sud",
        "modul de urmărire a obiectivelor școlii",
        "printr-un șef de departament intermediar"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „în relațiile școlare din Africa de Sud”.",
      "kind": "Text"
    },
    {
      "q": "Ce alt element cuprinde structura, dincolo de organigramă?",
      "options": [
        "egalitatea de șanse a elevilor",
        "în relațiile școlare din Africa de Sud",
        "modul de urmărire a obiectivelor școlii",
        "printr-un șef de departament intermediar"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „modul de urmărire a obiectivelor școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce obiectiv poate fi influențat de structură?",
      "options": [
        "egalitatea de șanse a elevilor",
        "în relațiile școlare din Africa de Sud",
        "modul de urmărire a obiectivelor școlii",
        "printr-un șef de departament intermediar"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „egalitatea de șanse a elevilor”.",
      "kind": "Text"
    },
    {
      "q": "Cum poate reacționa structura la schimbare?",
      "options": [
        "diversificarea școlilor din Singapore",
        "istoria gândirii ierarhice și birocratice",
        "marjă redusă de reinterpretare a rolului",
        "poate manifesta rezistență considerabilă"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „poate manifesta rezistență considerabilă”.",
      "kind": "Text"
    },
    {
      "q": "Ce exemplu ilustrează schimbarea structurală dificilă?",
      "options": [
        "diversificarea școlilor din Singapore",
        "istoria gândirii ierarhice și birocratice",
        "marjă redusă de reinterpretare a rolului",
        "poate manifesta rezistență considerabilă"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „diversificarea școlilor din Singapore”.",
      "kind": "Text"
    },
    {
      "q": "Ce trecut frânează uneori schimbarea structurală?",
      "options": [
        "diversificarea școlilor din Singapore",
        "istoria gândirii ierarhice și birocratice",
        "marjă redusă de reinterpretare a rolului",
        "poate manifesta rezistență considerabilă"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „istoria gândirii ierarhice și birocratice”.",
      "kind": "Text"
    },
    {
      "q": "Ce limită au preferințele persoanei numite într-un post?",
      "options": [
        "diversificarea școlilor din Singapore",
        "istoria gândirii ierarhice și birocratice",
        "marjă redusă de reinterpretare a rolului",
        "poate manifesta rezistență considerabilă"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 72–73), răspunsul este „marjă redusă de reinterpretare a rolului”.",
      "kind": "Text"
    }
  ],
  "3.6.3": [
    {
      "q": "În ce privință diferă abordările formale?",
      "options": [
        "autoritățile și organismele superioare",
        "definirea relației școlii cu mediul extern",
        "directorul în relația cu grupurile formale",
        "la minimumul necesar responsabilizării"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „definirea relației școlii cu mediul extern”.",
      "kind": "Text"
    },
    {
      "q": "Cum limitează sistemele închise legăturile externe?",
      "options": [
        "autoritățile și organismele superioare",
        "definirea relației școlii cu mediul extern",
        "directorul în relația cu grupurile formale",
        "la minimumul necesar responsabilizării"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „la minimumul necesar responsabilizării”.",
      "kind": "Text"
    },
    {
      "q": "Cine reprezintă școala în legăturile oficiale?",
      "options": [
        "autoritățile și organismele superioare",
        "definirea relației școlii cu mediul extern",
        "directorul în relația cu grupurile formale",
        "la minimumul necesar responsabilizării"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „directorul în relația cu grupurile formale”.",
      "kind": "Text"
    },
    {
      "q": "Ce grupuri sunt privilegiate în sistemul închis?",
      "options": [
        "autoritățile și organismele superioare",
        "definirea relației școlii cu mediul extern",
        "directorul în relația cu grupurile formale",
        "la minimumul necesar responsabilizării"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „autoritățile și organismele superioare”.",
      "kind": "Text"
    },
    {
      "q": "Ce grupuri sunt trecute în plan secund în modelul închis?",
      "options": [
        "în fața oficialilor ierarhici superiori",
        "părinții, angajatorii și alte instituții",
        "răspunderea față de elevi și părinți",
        "responsabilitatea în principal față de ierarhie"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „părinții, angajatorii și alte instituții”.",
      "kind": "Text"
    },
    {
      "q": "În fața cui primează răspunderea birocratică?",
      "options": [
        "în fața oficialilor ierarhici superiori",
        "părinții, angajatorii și alte instituții",
        "răspunderea față de elevi și părinți",
        "responsabilitatea în principal față de ierarhie"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „în fața oficialilor ierarhici superiori”.",
      "kind": "Text"
    },
    {
      "q": "Ce răspundere este diminuată de sistemele închise?",
      "options": [
        "în fața oficialilor ierarhici superiori",
        "părinții, angajatorii și alte instituții",
        "răspunderea față de elevi și părinți",
        "responsabilitatea în principal față de ierarhie"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „răspunderea față de elevi și părinți”.",
      "kind": "Text"
    },
    {
      "q": "Ce tendință este remarcată la directorii din Africa de Sud?",
      "options": [
        "în fața oficialilor ierarhici superiori",
        "părinții, angajatorii și alte instituții",
        "răspunderea față de elevi și părinți",
        "responsabilitatea în principal față de ierarhie"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „responsabilitatea în principal față de ierarhie”.",
      "kind": "Text"
    },
    {
      "q": "Prin cine se exercită ierarhia în districtele respective?",
      "options": [
        "dependența directorilor de autoritățile superioare",
        "organizații interactive adaptate mediului schimbător",
        "prin oficialitățile responsabile din district",
        "realizările obținute de instituția educațională"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „prin oficialitățile responsabile din district”.",
      "kind": "Text"
    },
    {
      "q": "Ce relație descrie exemplul din Slovenia?",
      "options": [
        "dependența directorilor de autoritățile superioare",
        "organizații interactive adaptate mediului schimbător",
        "prin oficialitățile responsabile din district",
        "realizările obținute de instituția educațională"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „dependența directorilor de autoritățile superioare”.",
      "kind": "Text"
    },
    {
      "q": "Cum descriu sistemele deschise instituțiile școlare?",
      "options": [
        "dependența directorilor de autoritățile superioare",
        "organizații interactive adaptate mediului schimbător",
        "prin oficialitățile responsabile din district",
        "realizările obținute de instituția educațională"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „organizații interactive adaptate mediului schimbător”.",
      "kind": "Text"
    },
    {
      "q": "Ce expun școlile deschise comunității locale?",
      "options": [
        "dependența directorilor de autoritățile superioare",
        "organizații interactive adaptate mediului schimbător",
        "prin oficialitățile responsabile din district",
        "realizările obținute de instituția educațională"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „realizările obținute de instituția educațională”.",
      "kind": "Text"
    },
    {
      "q": "De ce caută școlile autonome o reputație bună?",
      "options": [
        "conformitatea curriculară și rezultatele învățării",
        "inspecțiile și monitorizarea externă a școlii",
        "mai deschise spre influențele din exterior",
        "pentru părinți, angajați și comunitatea locală"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „pentru părinți, angajați și comunitatea locală”.",
      "kind": "Text"
    },
    {
      "q": "Cum sunt majoritatea instituțiilor din secolul XXI?",
      "options": [
        "conformitatea curriculară și rezultatele învățării",
        "inspecțiile și monitorizarea externă a școlii",
        "mai deschise spre influențele din exterior",
        "pentru părinți, angajați și comunitatea locală"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „mai deschise spre influențele din exterior”.",
      "kind": "Text"
    },
    {
      "q": "Ce întărește răspunderea formală față de ierarhie?",
      "options": [
        "conformitatea curriculară și rezultatele învățării",
        "inspecțiile și monitorizarea externă a școlii",
        "mai deschise spre influențele din exterior",
        "pentru părinți, angajați și comunitatea locală"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „inspecțiile și monitorizarea externă a școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmăresc sistemele de inspecție școlară?",
      "options": [
        "conformitatea curriculară și rezultatele învățării",
        "inspecțiile și monitorizarea externă a școlii",
        "mai deschise spre influențele din exterior",
        "pentru părinți, angajați și comunitatea locală"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „conformitatea curriculară și rezultatele învățării”.",
      "kind": "Text"
    },
    {
      "q": "Ce pot ignora liderii sub presiunea țintelor externe?",
      "options": [
        "factorii interni și externi ai școlii",
        "influența mediului asupra îmbunătățirii școlare",
        "propria judecată profesională despre elevi",
        "realizările și performanțele elevilor școlii"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „propria judecată profesională despre elevi”.",
      "kind": "Text"
    },
    {
      "q": "Ce mai contează pentru îmbunătățire pe lângă leadership?",
      "options": [
        "factorii interni și externi ai școlii",
        "influența mediului asupra îmbunătățirii școlare",
        "propria judecată profesională despre elevi",
        "realizările și performanțele elevilor școlii"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „factorii interni și externi ai școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce arată studiul Harris despre școlile în contexte dificile?",
      "options": [
        "factorii interni și externi ai școlii",
        "influența mediului asupra îmbunătățirii școlare",
        "propria judecată profesională despre elevi",
        "realizările și performanțele elevilor școlii"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „influența mediului asupra îmbunătățirii școlare”.",
      "kind": "Text"
    },
    {
      "q": "Ce tip de rezultate pot fi influențate extern?",
      "options": [
        "factorii interni și externi ai școlii",
        "influența mediului asupra îmbunătățirii școlare",
        "propria judecată profesională despre elevi",
        "realizările și performanțele elevilor școlii"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 73–74), răspunsul este „realizările și performanțele elevilor școlii”.",
      "kind": "Text"
    }
  ],
  "3.6.4": [
    {
      "q": "Cui atribuie modelele formale leadershipul instituțional?",
      "options": [
        "analizarea problemelor și alegerea rațională",
        "eroul aflat în vârful piramidei puterii",
        "obiectivele oficiale majore ale școlii",
        "persoanei aflate în vârful ierarhiei"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „persoanei aflate în vârful ierarhiei”.",
      "kind": "Text"
    },
    {
      "q": "Ce stabilește liderul formal în modelul organizației?",
      "options": [
        "analizarea problemelor și alegerea rațională",
        "eroul aflat în vârful piramidei puterii",
        "obiectivele oficiale majore ale școlii",
        "persoanei aflate în vârful ierarhiei"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „obiectivele oficiale majore ale școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce imagine folosesc Baldridge și colaboratorii?",
      "options": [
        "analizarea problemelor și alegerea rațională",
        "eroul aflat în vârful piramidei puterii",
        "obiectivele oficiale majore ale școlii",
        "persoanei aflate în vârful ierarhiei"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „eroul aflat în vârful piramidei puterii”.",
      "kind": "Text"
    },
    {
      "q": "Ce sarcină primește liderul în imaginea eroului?",
      "options": [
        "analizarea problemelor și alegerea rațională",
        "eroul aflat în vârful piramidei puterii",
        "obiectivele oficiale majore ale școlii",
        "persoanei aflate în vârful ierarhiei"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „analizarea problemelor și alegerea rațională”.",
      "kind": "Text"
    },
    {
      "q": "Ce se așteaptă personalul de la liderul erou?",
      "options": [
        "ca o etapă lipsită de probleme majore",
        "liderul oficial al instituției educaționale",
        "opoziția sau indiferența membrilor personalului",
        "rezolvarea problemelor și a amenințărilor externe"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „rezolvarea problemelor și a amenințărilor externe”.",
      "kind": "Text"
    },
    {
      "q": "Cine adoptă politicile și inovațiile în această viziune?",
      "options": [
        "ca o etapă lipsită de probleme majore",
        "liderul oficial al instituției educaționale",
        "opoziția sau indiferența membrilor personalului",
        "rezolvarea problemelor și a amenințărilor externe"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „liderul oficial al instituției educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce reacție la schimbare este neglijată de model?",
      "options": [
        "ca o etapă lipsită de probleme majore",
        "liderul oficial al instituției educaționale",
        "opoziția sau indiferența membrilor personalului",
        "rezolvarea problemelor și a amenințărilor externe"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „opoziția sau indiferența membrilor personalului”.",
      "kind": "Text"
    },
    {
      "q": "Cum este imaginată implementarea schimbării?",
      "options": [
        "ca o etapă lipsită de probleme majore",
        "liderul oficial al instituției educaționale",
        "opoziția sau indiferența membrilor personalului",
        "rezolvarea problemelor și a amenințărilor externe"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „ca o etapă lipsită de probleme majore”.",
      "kind": "Text"
    },
    {
      "q": "Cine este punctul central al comunicării externe?",
      "options": [
        "cu directorul în numele instituției",
        "directorul ca reprezentant oficial",
        "directorul școlii sau al colegiului",
        "mai ales în instituțiile de învățământ primar"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „directorul școlii sau al colegiului”.",
      "kind": "Text"
    },
    {
      "q": "Cu cine se așteaptă liderii comunității să comunice?",
      "options": [
        "cu directorul în numele instituției",
        "directorul ca reprezentant oficial",
        "directorul școlii sau al colegiului",
        "mai ales în instituțiile de învățământ primar"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „cu directorul în numele instituției”.",
      "kind": "Text"
    },
    {
      "q": "Cine este văzut drept imaginea publică a școlii?",
      "options": [
        "cu directorul în numele instituției",
        "directorul ca reprezentant oficial",
        "directorul școlii sau al colegiului",
        "mai ales în instituțiile de învățământ primar"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „directorul ca reprezentant oficial”.",
      "kind": "Text"
    },
    {
      "q": "Unde este accentuată identificarea școlii cu directorul?",
      "options": [
        "cu directorul în numele instituției",
        "directorul ca reprezentant oficial",
        "directorul școlii sau al colegiului",
        "mai ales în instituțiile de învățământ primar"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „mai ales în instituțiile de învățământ primar”.",
      "kind": "Text"
    },
    {
      "q": "Ce limitează ideea liderului atotputernic?",
      "options": [
        "asumarea lor de către personalul didactic",
        "finanțe, personal și relații externe",
        "nevoia consimțământului colegilor profesori",
        "volumul mare de responsabilități manageriale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „nevoia consimțământului colegilor profesori”.",
      "kind": "Text"
    },
    {
      "q": "Ce favorizează implementarea deciziilor la clasă?",
      "options": [
        "asumarea lor de către personalul didactic",
        "finanțe, personal și relații externe",
        "nevoia consimțământului colegilor profesori",
        "volumul mare de responsabilități manageriale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „asumarea lor de către personalul didactic”.",
      "kind": "Text"
    },
    {
      "q": "De ce împart directorii școlilor autonome puterea?",
      "options": [
        "asumarea lor de către personalul didactic",
        "finanțe, personal și relații externe",
        "nevoia consimțământului colegilor profesori",
        "volumul mare de responsabilități manageriale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „volumul mare de responsabilități manageriale”.",
      "kind": "Text"
    },
    {
      "q": "Ce sarcini suplimentare apar în școala autonomă?",
      "options": [
        "asumarea lor de către personalul didactic",
        "finanțe, personal și relații externe",
        "nevoia consimțământului colegilor profesori",
        "volumul mare de responsabilități manageriale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „finanțe, personal și relații externe”.",
      "kind": "Text"
    },
    {
      "q": "Ce efect are uneori împărțirea sarcinilor la vârf?",
      "options": [
        "coordonarea schimbării de liderii formali seniori",
        "distanțarea echipei de lideri seniori",
        "ierarhia instituțională sub conducere colectivă",
        "sporirea rolului echipei de lideri seniori"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „sporirea rolului echipei de lideri seniori”.",
      "kind": "Text"
    },
    {
      "q": "Ce se păstrează când conducerea devine o echipă?",
      "options": [
        "coordonarea schimbării de liderii formali seniori",
        "distanțarea echipei de lideri seniori",
        "ierarhia instituțională sub conducere colectivă",
        "sporirea rolului echipei de lideri seniori"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „ierarhia instituțională sub conducere colectivă”.",
      "kind": "Text"
    },
    {
      "q": "Ce descrie Wallace prin orchestrare distribuită?",
      "options": [
        "coordonarea schimbării de liderii formali seniori",
        "distanțarea echipei de lideri seniori",
        "ierarhia instituțională sub conducere colectivă",
        "sporirea rolului echipei de lideri seniori"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „coordonarea schimbării de liderii formali seniori”.",
      "kind": "Text"
    },
    {
      "q": "Ce risc percepe uneori restul personalului?",
      "options": [
        "coordonarea schimbării de liderii formali seniori",
        "distanțarea echipei de lideri seniori",
        "ierarhia instituțională sub conducere colectivă",
        "sporirea rolului echipei de lideri seniori"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 74–75), răspunsul este „distanțarea echipei de lideri seniori”.",
      "kind": "Text"
    }
  ],
  "3.7": [
    {
      "q": "Cu ce familie de modele este asociat leadershipul managerial?",
      "options": [
        "funcții, sarcini și comportamente organizaționale",
        "în cea mai mare parte rațional",
        "modelele formale ale organizației educaționale",
        "munca altor membri ai organizației"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „modelele formale ale organizației educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Pe ce trebuie să se concentreze liderii manageriali?",
      "options": [
        "funcții, sarcini și comportamente organizaționale",
        "în cea mai mare parte rațional",
        "modelele formale ale organizației educaționale",
        "munca altor membri ai organizației"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „funcții, sarcini și comportamente organizaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce facilitează îndeplinirea competentă a sarcinilor?",
      "options": [
        "funcții, sarcini și comportamente organizaționale",
        "în cea mai mare parte rațional",
        "modelele formale ale organizației educaționale",
        "munca altor membri ai organizației"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „munca altor membri ai organizației”.",
      "kind": "Text"
    },
    {
      "q": "Cum este considerat comportamentul membrilor organizației?",
      "options": [
        "funcții, sarcini și comportamente organizaționale",
        "în cea mai mare parte rațional",
        "modelele formale ale organizației educaționale",
        "munca altor membri ai organizației"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „în cea mai mare parte rațional”.",
      "kind": "Text"
    },
    {
      "q": "Din ce derivă autoritatea în leadershipul managerial?",
      "options": [
        "din statutul poziției formale în ierarhie",
        "puterea pozițională și procedurile formale",
        "responsabilități de management al școlii",
        "supervizarea personalului din instituție"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „din statutul poziției formale în ierarhie”.",
      "kind": "Text"
    },
    {
      "q": "Ce constituie sursa influenței manageriale?",
      "options": [
        "din statutul poziției formale în ierarhie",
        "puterea pozițională și procedurile formale",
        "responsabilități de management al școlii",
        "supervizarea personalului din instituție"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „puterea pozițională și procedurile formale”.",
      "kind": "Text"
    },
    {
      "q": "Ce responsabilități avea tradițional directorul?",
      "options": [
        "din statutul poziției formale în ierarhie",
        "puterea pozițională și procedurile formale",
        "responsabilități de management al școlii",
        "supervizarea personalului din instituție"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „responsabilități de management al școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce funcție managerială identifică Myers și Murphy?",
      "options": [
        "din statutul poziției formale în ierarhie",
        "puterea pozițională și procedurile formale",
        "responsabilități de management al școlii",
        "supervizarea personalului din instituție"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „supervizarea personalului din instituție”.",
      "kind": "Text"
    },
    {
      "q": "Ce funcție vizează transferurile profesorilor?",
      "options": [
        "controlul comportamentului profesional",
        "controlul ieșirilor organizației",
        "controlul intrărilor în organizație",
        "viziunea unui viitor educațional diferit"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „controlul intrărilor în organizație”.",
      "kind": "Text"
    },
    {
      "q": "Ce funcție vizează descrierea posturilor?",
      "options": [
        "controlul comportamentului profesional",
        "controlul ieșirilor organizației",
        "controlul intrărilor în organizație",
        "viziunea unui viitor educațional diferit"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „controlul comportamentului profesional”.",
      "kind": "Text"
    },
    {
      "q": "Ce funcție vizează testarea elevilor?",
      "options": [
        "controlul comportamentului profesional",
        "controlul ieșirilor organizației",
        "controlul intrărilor în organizație",
        "viziunea unui viitor educațional diferit"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „controlul ieșirilor organizației”.",
      "kind": "Text"
    },
    {
      "q": "Ce concept lipsește din acest tip de leadership?",
      "options": [
        "controlul comportamentului profesional",
        "controlul ieșirilor organizației",
        "controlul intrărilor în organizație",
        "viziunea unui viitor educațional diferit"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „viziunea unui viitor educațional diferit”.",
      "kind": "Text"
    },
    {
      "q": "Ce urmărește leadershipul managerial în primul rând?",
      "options": [
        "gestionarea activităților deja existente",
        "învățarea și predarea în instituție",
        "managementul excesiv lipsit de scop moral",
        "valorile și scopurile educaționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „gestionarea activităților deja existente”.",
      "kind": "Text"
    },
    {
      "q": "Ce trebuie să sprijine managementul școlar?",
      "options": [
        "gestionarea activităților deja existente",
        "învățarea și predarea în instituție",
        "managementul excesiv lipsit de scop moral",
        "valorile și scopurile educaționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „învățarea și predarea în instituție”.",
      "kind": "Text"
    },
    {
      "q": "Ce desemnează managerialismul în discuția autorului?",
      "options": [
        "gestionarea activităților deja existente",
        "învățarea și predarea în instituție",
        "managementul excesiv lipsit de scop moral",
        "valorile și scopurile educaționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „managementul excesiv lipsit de scop moral”.",
      "kind": "Text"
    },
    {
      "q": "Ce subordonează managerialismul unor ținte de eficiență?",
      "options": [
        "gestionarea activităților deja existente",
        "învățarea și predarea în instituție",
        "managementul excesiv lipsit de scop moral",
        "valorile și scopurile educaționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „valorile și scopurile educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce valori pot înlocui valorile sectorului public?",
      "options": [
        "autonomia profesională a profesorilor",
        "completarea abordărilor întemeiate pe valori",
        "rezultatele măsurabile în dauna celor valoroase",
        "valorile sectorului privat și ale pieței"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „valorile sectorului privat și ale pieței”.",
      "kind": "Text"
    },
    {
      "q": "Ce rezultate pot fi favorizate excesiv?",
      "options": [
        "autonomia profesională a profesorilor",
        "completarea abordărilor întemeiate pe valori",
        "rezultatele măsurabile în dauna celor valoroase",
        "valorile sectorului privat și ale pieței"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „rezultatele măsurabile în dauna celor valoroase”.",
      "kind": "Text"
    },
    {
      "q": "Ce pot înlocui puterea și controlul managerilor?",
      "options": [
        "autonomia profesională a profesorilor",
        "completarea abordărilor întemeiate pe valori",
        "rezultatele măsurabile în dauna celor valoroase",
        "valorile sectorului privat și ale pieței"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „autonomia profesională a profesorilor”.",
      "kind": "Text"
    },
    {
      "q": "Ce rol final atribuie Bush managementului eficient?",
      "options": [
        "autonomia profesională a profesorilor",
        "completarea abordărilor întemeiate pe valori",
        "rezultatele măsurabile în dauna celor valoroase",
        "valorile sectorului privat și ale pieței"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 76–78), răspunsul este „completarea abordărilor întemeiate pe valori”.",
      "kind": "Text"
    }
  ],
  "3.8": [
    {
      "q": "Ce caracter au modelele formale potrivit autorului?",
      "options": [
        "istoria, cultura și contextul organizațional",
        "normativ în descrierea organizațiilor educaționale",
        "structura și procedurile birocratice oficiale",
        "sunt prea vagi pentru deciziile curente"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „normativ în descrierea organizațiilor educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce aspecte sunt descrise cu precădere de ele?",
      "options": [
        "istoria, cultura și contextul organizațional",
        "normativ în descrierea organizațiilor educaționale",
        "structura și procedurile birocratice oficiale",
        "sunt prea vagi pentru deciziile curente"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „structura și procedurile birocratice oficiale”.",
      "kind": "Text"
    },
    {
      "q": "Ce dimensiuni sunt subestimate de modelul raționalist?",
      "options": [
        "istoria, cultura și contextul organizațional",
        "normativ în descrierea organizațiilor educaționale",
        "structura și procedurile birocratice oficiale",
        "sunt prea vagi pentru deciziile curente"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „istoria, cultura și contextul organizațional”.",
      "kind": "Text"
    },
    {
      "q": "Ce problemă au uneori scopurile oficiale?",
      "options": [
        "istoria, cultura și contextul organizațional",
        "normativ în descrierea organizațiilor educaționale",
        "structura și procedurile birocratice oficiale",
        "sunt prea vagi pentru deciziile curente"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „sunt prea vagi pentru deciziile curente”.",
      "kind": "Text"
    },
    {
      "q": "De ce pot intra scopurile școlii în conflict?",
      "options": [
        "impunerea lor de agenții externe școlii",
        "numai o dimensiune a procesului educațional",
        "o sarcină dificilă pentru evaluatori",
        "solicită aceleași resurse disponibile"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „solicită aceleași resurse disponibile”.",
      "kind": "Text"
    },
    {
      "q": "Ce sursă a obiectivelor poate crea tensiuni?",
      "options": [
        "impunerea lor de agenții externe școlii",
        "numai o dimensiune a procesului educațional",
        "o sarcină dificilă pentru evaluatori",
        "solicită aceleași resurse disponibile"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „impunerea lor de agenții externe școlii”.",
      "kind": "Text"
    },
    {
      "q": "Ce parte a educației surprind rezultatele la examene?",
      "options": [
        "impunerea lor de agenții externe școlii",
        "numai o dimensiune a procesului educațional",
        "o sarcină dificilă pentru evaluatori",
        "solicită aceleași resurse disponibile"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „numai o dimensiune a procesului educațional”.",
      "kind": "Text"
    },
    {
      "q": "Ce face măsurarea multor obiective educaționale?",
      "options": [
        "impunerea lor de agenții externe școlii",
        "numai o dimensiune a procesului educațional",
        "o sarcină dificilă pentru evaluatori",
        "solicită aceleași resurse disponibile"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „o sarcină dificilă pentru evaluatori”.",
      "kind": "Text"
    },
    {
      "q": "Ce dificultate afectează decizia presupus rațională?",
      "options": [
        "creații ale oamenilor care le formează",
        "expertiza și experiența indivizilor implicați",
        "informațiile și cunoașterea limitate",
        "scopurile simultane incompatibile între ele"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „informațiile și cunoașterea limitate”.",
      "kind": "Text"
    },
    {
      "q": "Ce alte scopuri pot împiedica urmărirea unuia singur?",
      "options": [
        "creații ale oamenilor care le formează",
        "expertiza și experiența indivizilor implicați",
        "informațiile și cunoașterea limitate",
        "scopurile simultane incompatibile între ele"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „scopurile simultane incompatibile între ele”.",
      "kind": "Text"
    },
    {
      "q": "Ce contribuție personală ignoră uneori modelele?",
      "options": [
        "creații ale oamenilor care le formează",
        "expertiza și experiența indivizilor implicați",
        "informațiile și cunoașterea limitate",
        "scopurile simultane incompatibile între ele"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „expertiza și experiența indivizilor implicați”.",
      "kind": "Text"
    },
    {
      "q": "Cum descrie Greenfield organizațiile școlare?",
      "options": [
        "creații ale oamenilor care le formează",
        "expertiza și experiența indivizilor implicați",
        "informațiile și cunoașterea limitate",
        "scopurile simultane incompatibile între ele"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „creații ale oamenilor care le formează”.",
      "kind": "Text"
    },
    {
      "q": "Ce estompează rațiunea tehnică potrivit lui Samier?",
      "options": [
        "asumarea inițiativelor în propria practică",
        "autoritatea expertizei profesorilor specialiști",
        "în vârful piramidei organizaționale",
        "personalitatea omului din birocrație"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „personalitatea omului din birocrație”.",
      "kind": "Text"
    },
    {
      "q": "Unde plasează modelele formale puterea instituțională?",
      "options": [
        "asumarea inițiativelor în propria practică",
        "autoritatea expertizei profesorilor specialiști",
        "în vârful piramidei organizaționale",
        "personalitatea omului din birocrație"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „în vârful piramidei organizaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce necesită profesioniștii față de schimbare?",
      "options": [
        "asumarea inițiativelor în propria practică",
        "autoritatea expertizei profesorilor specialiști",
        "în vârful piramidei organizaționale",
        "personalitatea omului din birocrație"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „asumarea inițiativelor în propria practică”.",
      "kind": "Text"
    },
    {
      "q": "Ce autoritate poate contrazice puterea funcției?",
      "options": [
        "asumarea inițiativelor în propria practică",
        "autoritatea expertizei profesorilor specialiști",
        "în vârful piramidei organizaționale",
        "personalitatea omului din birocrație"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „autoritatea expertizei profesorilor specialiști”.",
      "kind": "Text"
    },
    {
      "q": "Cine exercită autonomia în chestiuni pedagogice?",
      "options": [
        "în medii relativ simple și stabile",
        "în perioade de schimbări rapide și multiple",
        "profesorul calificat în propria clasă",
        "stabilitate relativă a structurilor instituționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „profesorul calificat în propria clasă”.",
      "kind": "Text"
    },
    {
      "q": "Ce presupun implicit teoriile formale despre organizații?",
      "options": [
        "în medii relativ simple și stabile",
        "în perioade de schimbări rapide și multiple",
        "profesorul calificat în propria clasă",
        "stabilitate relativă a structurilor instituționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „stabilitate relativă a structurilor instituționale”.",
      "kind": "Text"
    },
    {
      "q": "În ce condiții sunt mai adecvate modelele structurale?",
      "options": [
        "în medii relativ simple și stabile",
        "în perioade de schimbări rapide și multiple",
        "profesorul calificat în propria clasă",
        "stabilitate relativă a structurilor instituționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „în medii relativ simple și stabile”.",
      "kind": "Text"
    },
    {
      "q": "Când devine succesiunea rațională dificil de aplicat?",
      "options": [
        "în medii relativ simple și stabile",
        "în perioade de schimbări rapide și multiple",
        "profesorul calificat în propria clasă",
        "stabilitate relativă a structurilor instituționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 78–82), răspunsul este „în perioade de schimbări rapide și multiple”.",
      "kind": "Text"
    }
  ],
  "3.9": [
    {
      "q": "Ce slăbește dominația ierarhiei formale în școli?",
      "options": [
        "expertiza profesională a personalului didactic",
        "individual, departamental și instituțional",
        "multiplicitatea obiectivelor din educație",
        "ritmul și complexitatea schimbărilor educaționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „expertiza profesională a personalului didactic”.",
      "kind": "Text"
    },
    {
      "q": "Ce obligă la ajustarea ipotezei deciziei raționale?",
      "options": [
        "expertiza profesională a personalului didactic",
        "individual, departamental și instituțional",
        "multiplicitatea obiectivelor din educație",
        "ritmul și complexitatea schimbărilor educaționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „ritmul și complexitatea schimbărilor educaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce contestă noțiunea unui singur scop organizațional?",
      "options": [
        "expertiza profesională a personalului didactic",
        "individual, departamental și instituțional",
        "multiplicitatea obiectivelor din educație",
        "ritmul și complexitatea schimbărilor educaționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „multiplicitatea obiectivelor din educație”.",
      "kind": "Text"
    },
    {
      "q": "Între ce niveluri de obiective poate apărea conflict?",
      "options": [
        "expertiza profesională a personalului didactic",
        "individual, departamental și instituțional",
        "multiplicitatea obiectivelor din educație",
        "ritmul și complexitatea schimbărilor educaționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „individual, departamental și instituțional”.",
      "kind": "Text"
    },
    {
      "q": "Cum apreciază autorul eliminarea modelelor formale?",
      "options": [
        "diferențierea industrială după poziție",
        "noul management public și ierarhia",
        "o abordare inadecvată a școlilor",
        "rezistența îndelungată la schimbările organizaționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „o abordare inadecvată a școlilor”.",
      "kind": "Text"
    },
    {
      "q": "Ce trăsătură a birocrației subliniază Fitzgerald?",
      "options": [
        "diferențierea industrială după poziție",
        "noul management public și ierarhia",
        "o abordare inadecvată a școlilor",
        "rezistența îndelungată la schimbările organizaționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „rezistența îndelungată la schimbările organizaționale”.",
      "kind": "Text"
    },
    {
      "q": "Ce susține încă birocrația în școli?",
      "options": [
        "diferențierea industrială după poziție",
        "noul management public și ierarhia",
        "o abordare inadecvată a școlilor",
        "rezistența îndelungată la schimbările organizaționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „noul management public și ierarhia”.",
      "kind": "Text"
    },
    {
      "q": "Ce model de muncă copiază organizarea școlilor?",
      "options": [
        "diferențierea industrială după poziție",
        "noul management public și ierarhia",
        "o abordare inadecvată a școlilor",
        "rezistența îndelungată la schimbările organizaționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „diferențierea industrială după poziție”.",
      "kind": "Text"
    },
    {
      "q": "Ce accent este puternic în sistemul englezesc?",
      "options": [
        "ca reacție la punctele slabe formale",
        "ierarhia funcțiilor și responsabilităților",
        "performativitate prin cerințe centrale",
        "standardele și obiectivele instituționale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „standardele și obiectivele instituționale”.",
      "kind": "Text"
    },
    {
      "q": "Cum numesc Ball și Strain forma regulată de control?",
      "options": [
        "ca reacție la punctele slabe formale",
        "ierarhia funcțiilor și responsabilităților",
        "performativitate prin cerințe centrale",
        "standardele și obiectivele instituționale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „performativitate prin cerințe centrale”.",
      "kind": "Text"
    },
    {
      "q": "Ce vehicul transmite controlul extern asupra școlii?",
      "options": [
        "ca reacție la punctele slabe formale",
        "ierarhia funcțiilor și responsabilităților",
        "performativitate prin cerințe centrale",
        "standardele și obiectivele instituționale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „ierarhia funcțiilor și responsabilităților”.",
      "kind": "Text"
    },
    {
      "q": "De ce au apărut modelele prezentate ulterior?",
      "options": [
        "ca reacție la punctele slabe formale",
        "ierarhia funcțiilor și responsabilităților",
        "performativitate prin cerințe centrale",
        "standardele și obiectivele instituționale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „ca reacție la punctele slabe formale”.",
      "kind": "Text"
    },
    {
      "q": "Ce nu au reușit alternativele să facă?",
      "options": [
        "ca descrieri parțiale ale organizației",
        "eliminarea completă a modelelor formale",
        "înțelegerea școlilor și colegiilor ca organizații",
        "reducerea încrederii în modelele birocratice"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „eliminarea completă a modelelor formale”.",
      "kind": "Text"
    },
    {
      "q": "În ce sens rămân modelele formale valide?",
      "options": [
        "ca descrieri parțiale ale organizației",
        "eliminarea completă a modelelor formale",
        "înțelegerea școlilor și colegiilor ca organizații",
        "reducerea încrederii în modelele birocratice"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „ca descrieri parțiale ale organizației”.",
      "kind": "Text"
    },
    {
      "q": "Ce contribuție au modelele formale în continuare?",
      "options": [
        "ca descrieri parțiale ale organizației",
        "eliminarea completă a modelelor formale",
        "înțelegerea școlilor și colegiilor ca organizații",
        "reducerea încrederii în modelele birocratice"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „înțelegerea școlilor și colegiilor ca organizații”.",
      "kind": "Text"
    },
    {
      "q": "Ce semnalează Owens și Shakeshaft?",
      "options": [
        "ca descrieri parțiale ale organizației",
        "eliminarea completă a modelelor formale",
        "înțelegerea școlilor și colegiilor ca organizații",
        "reducerea încrederii în modelele birocratice"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „reducerea încrederii în modelele birocratice”.",
      "kind": "Text"
    },
    {
      "q": "Către ce se deplasează analiza organizațională?",
      "options": [
        "către o abordare mai sofisticată",
        "perspectivele alternative de conducere a școlilor",
        "schimbarea rapidă a contextului educațional",
        "utilitatea parțială a abordărilor formale"
      ],
      "answer": 0,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „către o abordare mai sofisticată”.",
      "kind": "Text"
    },
    {
      "q": "Ce se evaluează în capitolele următoare?",
      "options": [
        "către o abordare mai sofisticată",
        "perspectivele alternative de conducere a școlilor",
        "schimbarea rapidă a contextului educațional",
        "utilitatea parțială a abordărilor formale"
      ],
      "answer": 1,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „perspectivele alternative de conducere a școlilor”.",
      "kind": "Text"
    },
    {
      "q": "Ce poate modifica relevanța deciziei raționale?",
      "options": [
        "către o abordare mai sofisticată",
        "perspectivele alternative de conducere a școlilor",
        "schimbarea rapidă a contextului educațional",
        "utilitatea parțială a abordărilor formale"
      ],
      "answer": 2,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „schimbarea rapidă a contextului educațional”.",
      "kind": "Text"
    },
    {
      "q": "Ce concluzie integrează critica și valoarea modelului?",
      "options": [
        "către o abordare mai sofisticată",
        "perspectivele alternative de conducere a școlilor",
        "schimbarea rapidă a contextului educațional",
        "utilitatea parțială a abordărilor formale"
      ],
      "answer": 3,
      "feedback": "În capitolul III (pp. 82–83), răspunsul este „utilitatea parțială a abordărilor formale”.",
      "kind": "Text"
    }
  ]
};
  for (const module of window.MODULES || []) {
    if (Object.prototype.hasOwnProperty.call(replacements, module.id)) module.questions = replacements[module.id];
  }
})();

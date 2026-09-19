(function(){
function Q(q,correct,wrong,fb){return {q:q,options:[correct].concat(wrong),answer:0,feedback:fb,kind:"Antrenament"}}
function make(id,title,audio,facts){
 let qs=[]; facts.forEach((f,i)=>{qs.push(Q("Care afirmație este corectă despre "+f[0]+"?",f[1],f[2],f[3]));});
 facts.forEach((f,i)=>{qs.push(Q("În logica lui Tony Bush, "+f[0]+" se recunoaște cel mai bine prin:",f[1],f[2].slice().reverse(),f[3]));});
 while(qs.length<10){let f=facts[qs.length%facts.length];qs.push(Q("Alege formularea care păstrează sensul conceptului „"+f[0]+"”:",f[1],f[2],f[3]));}
 return {id,title,audio,questions:qs.slice(0,10)}
}
const D=[
make("2.1","Separarea teoriei de practică","2_1.m4a",[
["relația teorie–practică","teoria și practica se influențează reciproc",["teoria trebuie izolată de experiență","practica este neutră teoretic","experiența elimină nevoia de reflecție"],"Bush respinge separarea rigidă: practica este interpretată prin cadre teoretice."],
["bunul-simț managerial","conține presupoziții și teorii implicite",["este complet lipsit de teorie","garantează aceeași soluție în orice școală","înlocuiește analiza critică"],"Deciziile aparent evidente au în spate presupoziții ce trebuie făcute explicite."],
["reflecția critică","face vizibile presupozițiile care ghidează decizia",["elimină contextul","transformă teoria în regulă fixă","exclude experiența"],"Reflecția critică leagă experiența de cadre explicative."],
["practica profesională","poate genera, testa și modifica teoria",["doar aplică mecanic teoria","nu produce informații relevante","este identică în toate organizațiile"],"Relația este circulară, nu unidirecțională."]
]),
make("2.2","Relevanța teoriei pentru buna practică","2_2.m4a",[
["experiența personală","este limitată și trebuie completată de perspective mai largi",["este suficientă în orice situație","face inutilă teoria","produce automat decizii transferabile"],"Teoria extinde experiența individuală și ajută la interpretarea contextelor noi."],
["rolul teoriei","oferă modele mentale pentru interpretarea evenimentelor",["prescrie o singură soluție universală","înlocuiește judecata profesională","elimină nevoia de observație"],"Teoria oferă cadre de interpretare, nu rețete universale."],
["transferul practicilor","cere analizarea contextului înainte de aplicare",["este automat între școli","depinde doar de vechimea directorului","nu necesită adaptare"],"Ce funcționează într-o școală poate eșua în alta."],
["decizia argumentată","combină experiența, teoria și analiza contextului",["se bazează exclusiv pe intuiție","ignoră perspectivele altora","repetă mecanic soluțiile anterioare"],"Buna practică presupune interpretare, nu simplă rutină."]
]),
make("2.3","Natura teoriei","2_3.m4a",[
["pluralismul teoretic","acceptă mai multe perspective parțiale asupra organizației",["caută un singur adevăr universal","respinge toate modelele","elimină diferențele de context"],"Niciun model nu explică întreaga organizație."],
["perspectiva","funcționează ca filtru pentru selectarea și interpretarea evenimentelor",["este o regulă juridică","este un indicator financiar","este o procedură fixă"],"House folosește ideea de perspectivă ca filtru interpretativ."],
["metafora organizațională","oferă un mod valoros, dar parțial, de a vedea organizația",["descrie complet realitatea","nu influențează interpretarea","este echivalentă cu organigrama"],"Morgan subliniază utilitatea și caracterul parțial al metaforelor."],
["paradigma","ghidează conștient sau inconștient gândirea",["este doar o tehnică de evaluare","este exclusiv o normă administrativă","nu afectează decizia"],"Paradigma structurează felul în care este înțeleasă realitatea."]
]),
make("2.4","Caracteristicile teoriei","2_4.m4a",[
["caracterul normativ","arată cum ar trebui conduse instituțiile",["descrie doar ce s-a întâmplat","exclude valorile","interzice observația"],"Utilizarea normativă trebuie deosebită de cea descriptivă."],
["caracterul selectiv","evidențiază unele dimensiuni și lasă altele în plan secund",["explică exhaustiv organizația","elimină alegerea perspectivei","produce răspunsuri identice"],"Orice teorie selectează anumite aspecte ale realității."],
["baza empirică","observația poate genera sau testa concepte și teorii",["observația este incompatibilă cu teoria","datele nu pot modifica teoria","cercetarea este inutilă"],"Teoria și observația se pot alimenta reciproc."],
["rezerva modelului subiectiv","observarea externă poate rata sensurile atribuite de participanți",["participanții nu dau sens evenimentelor","doar structura formală contează","interpretarea individuală este irelevantă"],"Sensurile actorilor nu sunt întotdeauna accesibile observatorului extern."]
]),
make("2.5","Diversitatea în leadership și management educațional","2_5.m4a",[
["diversitatea","cere adaptarea teoriilor și practicilor la școli și comunități diferite",["impune un model identic tuturor","elimină contextul cultural","face inutile perspectivele multiple"],"Modelele trebuie analizate în raport cu diversitatea organizațiilor."],
["stereotipurile de leadership","pot crea bariere de acces și promovare",["garantează reprezentarea echilibrată","sunt neutre organizațional","nu influențează selecția"],"Normele dominante pot produce subreprezentare."],
["calitățile de leadership","nu sunt determinate de gen",["aparțin exclusiv unui profil masculin","exclud grija și creativitatea","sunt identice cu autoritatea formală"],"Bush discută depășirea stereotipurilor tradiționale."],
["reprezentarea minorităților","poate fi redusă de stereotipuri și acces inegal la formare",["depinde numai de organigramă","nu este influențată de selecție","este independentă de bariere"],"Accesul și practicile de selecție contează."]
]),
make("2.6","Modele de management educațional: introducere","2_6.m4a",[
["modelele de management","sunt categorii integratoare pentru perspective suprapuse",["sunt rețete obligatorii","se exclud întotdeauna reciproc","descriu doar finanțele"],"Bush grupează literatura în șase modele de management."],
["modelul formal","accentuează structuri, roluri și obiective oficiale",["pune în centru ambiguitatea","elimină autoritatea","se bazează exclusiv pe emoții"],"Formalul este asociat cu structura și controlul managerial."],
["modelul colegial","accentuează participarea și responsabilitatea împărtășită",["presupune decizie exclusiv unilaterală","elimină colaborarea","se bazează doar pe conflict"],"Colegiul și participarea sunt elemente centrale."],
["cele șase modele","sunt formal, colegial, politic, subiectiv, de ambiguitate și cultural",["sunt doar formal și informal","sunt trei modele fixe","sunt exclusiv modele de leadership"],"Aceasta este tipologia integratoare folosită de Bush."]
]),
make("2.7","Modele de leadership educațional: introducere","2_7.m4a",[
["leadershipul managerial","este asociat în principal modelului formal",["este asociat exclusiv ambiguității","respinge structurile","exclude obiectivele oficiale"],"Corespondența de bază este formal–managerial."],
["leadershipul participativ, transformațional și distribuit","se asociază modelului colegial",["se asociază doar birocrației","elimină participarea","sunt forme de control ierarhic pur"],"Aceste forme împart influența și responsabilitatea."],
["leadershipul tranzacțional","se leagă de interese, schimburi și negociere",["exclude orice schimb","este identic cu leadershipul moral","se bazează numai pe simboluri"],"Este asociat modelului politic."],
["leadershipul instruirii","arată direcția influenței spre predare și învățare, nu un singur proces managerial",["aparține exclusiv modelului formal","este doar control administrativ","exclude rezultatele elevilor"],"Bush îl tratează transversal față de modelele de management."]
]),
make("3.1","Caracteristicile principale ale modelelor formale","3_1.m4a",[
["modelele formale","tratează organizațiile ca sisteme orientate spre obiective oficiale",["resping obiectivele","pun conflictul informal în centru","consideră structura irelevantă"],"Modelele formale pornesc de la obiective, structură și autoritate."],
["structura formală","definește roluri, poziții și relații oficiale",["este doar o percepție individuală","nu influențează responsabilitatea","este identică cu cultura"],"Structura este un element central al perspectivei formale."],
["autoritatea","este legată de pozițiile oficiale din organizație",["provine exclusiv din relații personale","nu are legătură cu rolurile","este eliminată prin reguli"],"Poziția formală conferă autoritate legitimă."],
["decizia","este evaluată prin raportare la obiectivele organizației",["este independentă de scopuri","urmărește doar interese individuale","evită criteriile oficiale"],"Raționalitatea formală presupune orientare către scopuri."]
]),
make("3.2","Modelele structurale","3_2.m4a",[
["modelele structurale","pun accent pe structura oficială și relațiile dintre poziții",["pun în centru exclusiv emoțiile","ignoră rolurile","resping diviziunea muncii"],"Structura și rolurile sunt cheia analizei."],
["diviziunea muncii","distribuie sarcini și responsabilități între roluri",["elimină specializarea","face inutile pozițiile","înlocuiește obiectivele"],"Specializarea este o caracteristică structurală."],
["organigrama","reprezintă relațiile formale de autoritate și responsabilitate",["descrie cultura informală completă","arată doar rezultatele elevilor","înlocuiește toate regulile"],"Organigrama exprimă arhitectura formală."],
["coordonarea","leagă activitățile specializate de obiectivele organizației",["separă complet departamentele","exclude comunicarea","face inutile obiectivele"],"Structura trebuie să permită coordonarea."]
]),
make("3.3","Modelele sistemice","3_3.m4a",[
["perspectiva sistemică","vede organizația ca ansamblu de elemente interdependente",["tratează fiecare parte izolat","exclude mediul extern","reduce școala la organigramă"],"Schimbarea unei componente poate afecta întregul sistem."],
["sistemul deschis","interacționează cu mediul extern",["este complet izolat","nu primește resurse din exterior","nu produce rezultate pentru mediu"],"Școala schimbă resurse și informații cu mediul."],
["intrările și ieșirile","leagă resursele primite de rezultatele produse",["sunt concepte fără legătură","descriu doar ierarhia","elimină procesele interne"],"Modelul sistemic urmărește input–proces–output."],
["interdependența","înseamnă că modificarea unei părți poate influența alte părți",["fiecare compartiment este complet autonom","schimbarea rămâne locală în orice caz","nu există efecte organizaționale"],"Componentele sistemului se influențează reciproc."]
]),
make("3.4","Modelele birocratice","3_4.m4a",[
["birocrația","se bazează pe reguli, ierarhie, specializare și autoritate formală",["elimină regulile","funcționează numai informal","respinge specializarea"],"Aceste elemente sunt caracteristice modelului birocratic."],
["regulile","urmăresc standardizarea și predictibilitatea activității",["fac decizia complet aleatorie","elimină responsabilitatea","înlocuiesc toate obiectivele"],"Procedurile reduc variația și clarifică așteptările."],
["ierarhia birocratică","stabilește niveluri de autoritate și răspundere",["elimină diferențele de poziție","se bazează exclusiv pe carismă","nu definește responsabilități"],"Autoritatea este distribuită pe niveluri."],
["specializarea","asociază sarcini distincte unor roluri definite",["presupune că toți fac aceleași sarcini","exclude expertiza","elimină diviziunea muncii"],"Birocrația valorifică diviziunea funcțională."]
]),
make("3.5","Modelele raționale","3_5.m4a",[
["modelul rațional","pornește de la obiective și alegerea mijloacelor adecvate pentru atingerea lor",["respinge obiectivele","decide fără alternative","pune simbolurile înaintea rezultatelor"],"Raționalitatea leagă scopurile de mijloace."],
["procesul decizional rațional","compară alternativele în raport cu criterii și obiective",["alege fără criterii","exclude informația","se bazează doar pe rutină"],"Alternativele sunt evaluate sistematic."],
["eficacitatea","privește gradul de atingere a obiectivelor",["înseamnă doar reducerea costurilor","este identică cu ierarhia","nu are legătură cu rezultate"],"Eficacitatea se raportează la scopuri."],
["limita raționalității","apare când obiectivele sunt neclare sau contestate",["dispare orice nevoie de analiză","obiectivele sunt întotdeauna clare","contextul nu contează"],"Modelele raționale funcționează mai greu în ambiguitate."]
]),
make("3.6","Modelele ierarhice","3_6.m4a",[
["ierarhia","ordonează pozițiile pe niveluri de autoritate",["elimină autoritatea formală","presupune egalitate totală a rolurilor","descrie doar cultura"],"Ierarhia structurează relațiile verticale."],
["responsabilitatea","este asociată poziției și nivelului de autoritate",["nu poate fi atribuită formal","aparține exclusiv grupurilor informale","este independentă de rol"],"Rolurile formale includ răspunderi explicite."],
["comunicarea verticală","circulă între nivelurile ierarhice",["exclude conducerea","este doar externă","nu poate transmite decizii"],"Structura ierarhică organizează fluxuri de decizie și raportare."],
["directorul în modelul ierarhic","ocupă o poziție centrală de autoritate formală",["nu are atribuții distincte","este doar observator","nu poate coordona"],"Poziția de vârf concentrează responsabilități manageriale."]
]),
make("3.7","Modelele formale: obiective, structură, mediu și leadership","3_7.m4a",[
["obiectivele formale","oferă criterii oficiale pentru decizie și evaluare",["sunt întotdeauna irelevante","apar doar informal","nu influențează managementul"],"Modelele formale presupun orientarea spre scopuri declarate."],
["mediul extern","este abordat prin relații oficiale și schimburi organizaționale",["este ignorat complet","este doar o percepție individuală","nu furnizează resurse"],"Chiar modelele formale recunosc raportarea la mediu."],
["leadershipul formal","se sprijină pe poziție, autoritate și responsabilitate managerială",["exclude rolurile oficiale","depinde numai de emoții","nu are legătură cu structura"],"Autoritatea pozițională este centrală."],
["coerența formală","leagă obiectivele, structura și activitatea managerială",["separă scopurile de acțiuni","elimină coordonarea","face structura accidentală"],"Modelul presupune alinierea componentelor organizației."]
]),
make("3.8","Leadershipul managerial","3_8.m4a",[
["leadershipul managerial","pune accent pe funcții, sarcini și comportamente necesare funcționării organizației",["respinge managementul","se bazează exclusiv pe simboluri","elimină obiectivele"],"Este strâns legat de perspectiva formală."],
["autoritatea liderului managerial","derivă în mare măsură din poziția formală",["provine numai din popularitate","nu are bază organizațională","exclude responsabilitatea"],"Poziția oficială susține influența managerială."],
["prioritatea managerială","este realizarea eficientă a activităților și obiectivelor stabilite",["este menținerea ambiguității","este evitarea coordonării","este eliminarea standardelor"],"Modelul urmărește implementarea și funcționarea eficientă."],
["limita leadershipului managerial","poate supraaccentua structura și sarcinile în detrimentul altor dimensiuni",["explică exhaustiv orice situație","nu are nicio limită","exclude complet managementul"],"Ca orice lentilă, este parțial."]
]),
make("3.9","Limitările modelelor formale","3_9.m4a",[
["o limită a modelelor formale","este presupunerea că obiectivele organizației sunt clare și acceptate",["recunoașterea conflictului permanent","accentul pe sensuri individuale","respingerea structurii"],"În școli, scopurile pot fi multiple sau contestate."],
["structura formală","nu surprinde întreaga viață informală a organizației",["explică toate relațiile personale","elimină cultura","face inutilă analiza puterii"],"Relațiile informale pot modifica funcționarea reală."],
["raționalitatea","este limitată de informație incompletă, ambiguitate și interese diferite",["este întotdeauna perfectă","nu depinde de informații","exclude contextul"],"Decizia reală nu urmează mereu modelul ideal."],
["autoritatea formală","nu este singura sursă de influență în școală",["este unica sursă posibilă","elimină expertiza","face inutile relațiile"],"Expertiza și relațiile pot produce influență dincolo de poziție."]
]),
make("3.10","Concluzie: mai sunt valide modelele formale?","3_10.m4a",[
["validitatea modelelor formale","rămâne importantă, dar este dependentă de context și trebuie completată de alte perspective",["a dispărut complet","este universală și suficientă singură","exclude pluralismul"],"Bush nu le abandonează, ci le tratează ca lentile parțiale."],
["utilitatea structurii","este mare pentru clarificarea rolurilor, responsabilităților și coordonării",["este nulă în școli","elimină nevoia de leadership","înlocuiește cultura"],"Structura formală continuă să aibă funcții reale."],
["pluralismul","permite combinarea modelului formal cu alte lentile explicative",["interzice combinarea modelelor","impune o singură teorie","face contextul irelevant"],"Niciun model nu explică singur întreaga organizație."],
["alegerea modelului","trebuie raportată la problema și contextul analizat",["se face identic în orice situație","depinde doar de tradiție","nu necesită analiză"],"Contextul decide cât de utilă este fiecare perspectivă."]
])];
window.MODULES=window.MODULES.concat(D);
})();
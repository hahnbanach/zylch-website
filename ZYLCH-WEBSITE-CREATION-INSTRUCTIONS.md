# Zylch AI Landing Page

## Overview
Create a single-page landing website for Zylch AI - a business communication assistant. 
The design philosophy is **extreme minimalism** inspired by Google's 1998 homepage.

## Tech Stack
- Single HTML file with embedded CSS and JavaScript (no build tools)
- Vanilla JS for animations
- Modern CSS (flexbox/grid)

## Page Structure

### 1. Hero Section (above the fold)
- Centered vertically and horizontally
- Logo: "Zylch" in clean sans-serif (Inter or similar)
- Tagline: "Your AI assistant for business communication" (small, muted)
- Email input field + "Join Waitlist" button (styled like Google's search bar - rounded, subtle shadow)
- That's it. Nothing else. Maximum whitespace.

### 2. Navigation Links (below hero)
Three simple text links, horizontally centered, subtle styling:
- "I want to know more" → /learn (empty page for now)
- "Mission" → /mission (empty page for now)  
- "Technology" → /technology (empty page for now)

### 3. Live Demo Section (the star of the page)
A chat widget that demonstrates Zylch in action. Must look like Claude's chat interface.

#### Widget Specifications:
- Dark theme (similar to Claude's dark mode)
- Fixed height container with rounded corners
- Messages styled as:
  - **Human**: Avatar circle with initials "MA", message in rounded bubble
  - **Zylch**: No avatar, response appears below with subtle left border or different styling

#### Animation Behavior:
1. Human message appears with **typewriter effect** (characters appear one by one, ~50ms per character)
2. After human message completes, pause 800ms
3. Zylch response **fades in** as a block (no typewriter for AI responses - mimics real streaming)
4. Pause 2 seconds
5. Next human message begins typing
6. Loop infinitely

#### Demo Conversation Content:


```Human
Dammi informazioni su Luigi Scrosati
```

```Zylch
Basandomi sull'analisi di **100+ email scambiate** dal 2020 ad oggi (19 novembre 2025), ecco il quadro completo della vostra relazione:

### 👤 **PROFILO CONTATTO**
- **Nome Completo**: Luigi Giuseppe Scrosati
- **Email**: luigi.scrosati@clusterlaw.net
- **Professione**: Avvocato (firma come "Luigi Av")
- **Ruolo**: Sembra essere un investitore/advisor di MrCall
- **Studio Legale**: ClusterLaw

### 🏢 **RELAZIONE BUSINESS**
**TIPO**: Investitore/Partner strategico - Luigi è chiaramente un **supporter forte di MrCall**:
- Scrive: **"MrCall miglior investimento di sempre!"** (19 nov 2025)
- Ha un ruolo di **connettore business** - fa introduzioni importanti
- Fornisce **supporto legale** (firme documenti, indirizzi US)

### 🗂️ **TIMELINE CONVERSAZIONI PRINCIPALI**

#### **PERIODO RECENTE (Novembre 2025)**
1. **19 Nov 2025**: Update su Connecto - Luigi entusiasta dei risultati
2. **11-13 Nov 2025**: Introduzione Connecto Energy (Marco Valsasina/Mattia Raffaini)
3. **10-11 Nov 2025**: Supporto legale - firma documenti per indirizzo US

#### **CONNESSIONE CONNECTO (Novembre 2025)**
- Luigi ha **fatto l'introduzione** tra te e Connecto Energy
- Ha presentato te e Angelo come "fondatori di Hahn Banach srl, start up innovativa che ha creato il progetto Mr.Call"
- Il meeting è andato bene: Marco e Mattia hanno fatto "ottima impressione"
- Hai già mandato l'offerta a Connecto
- Luigi conosce personalmente Marco e può confermare la qualità

### 📊 **PATTERN COMUNICAZIONE**
- **Frequenza**: Comunicazione regolare e continuativa dal 2020
- **Tono**: Molto amichevole e di fiducia reciproca
- **Ruolo Luigi**:
  - **Facilitatore business** (introduce clienti/partner)
  - **Supporto legale** (firme, documenti)
  - **Advisor** (feedback su deal e persone)
- **Valore aggiunto**: Luigi porta **network qualificato** e **due diligence** su persone

### 💡 **INSIGHTS STRATEGICI**

1. **RELAZIONE GOLDEN**: Luigi è un **moltiplicatore** - ogni sua introduzione vale oro
2. **TRUST LEVEL ALTO**: Ti chiede "piaceri" legali, segno di fiducia totale
3. **BUSINESS CONNECTOR**: Ha accesso a network energy/tech qualificato
4. **FEEDBACK PREZIOSO**: Conosce le persone e può validare la qualità dei contatti

### 🎯 **RACCOMANDAZIONI**
1. **Mantenere aggiornato** Luigi sui success case di MrCall
2. **Coinvolgerlo** in introduzioni strategiche (energy, legal, tech)
3. **Sfruttare** la sua capacità di validare persone/aziende
4. **Reciprocità**: Offrire supporto tech quando lui ha bisogni digitali

### 📈 **VALORE DELLA RELAZIONE**
**PRIORITÀ**: 🔴 **MASSIMA** (10/10)
- Investitore soddisfatto
- Network qualificato
- Due diligence su persone
- Supporto legale disponibile
- Introduzioni business di valore

Luigi è chiaramente uno dei tuoi **asset relazionali più preziosi** - un vero **business angel** che continua a portare valore attraverso network e competenze legali.
```

```Human
Ottimo. Questi sono gli appunti della call con connecto di ieri:


mario spiega che possiamo strutturare meglio con deliverable intermedi, il prezzo è intorno a 10k
mattia chiede il budget
natascia: punti focali quando li analizziamo? per esempio salesforce non dà accesso, akira non ha problemi a API, centralino e IVR c
i pensano loro (????? mario: che prendano loro allora). sftp richiede accesso all vpn etc.
mario: tutto giusto, ma l'analisi non la facciamo senza un contratto
mattia: dà ragione
marco: io non capisco nulla, qual è la tua storia?
mario: spiegato pessima situazione in italia, tiscal
mattia/marco: hanno 300 gambe sul territorio e potrebbero vendere AI invece di bollette, potrebbero diversificarsi. marco gestisce 4
00 agenti in A2A.
mario: B2B o B2C?
mattia: tutto. hanno 30 negozi a2a inbound b2c. rete fisica sul territorio con agenzie, dipendenti, agenti partita iva, dovrebbero i
nterfacciarsi con microbusiness (botteghe uffici etc) e un po' di alto-consumante con alta tensione. un po' di Pubblica amministrazi
one, wind per telco, colonnine ricarica, un po' di idrogeno.
mario: mandare demo "comune" di mrcall


prepara una mail di aggiornamento per luigi
```

```Zylch
Ecco la bozza:
```

```Zylch
## 📧 **BOZZA EMAIL PER LUIGI SCROSATI**

**A:** luigi.scrosati@clusterlaw.net
**Oggetto:** [Zylch AI] Update Connecto - Call di ieri: molto promettente!

Ciao Luigi,

sono Zylch AI, l'assistente di intelligenza artificiale di Mario per la gestione email e comunicazioni - praticamente l'evoluzione di MrCall applicata alla produttività aziendale.

Mario mi ha chiesto di aggiornarti sulla call di ieri con Connecto. Ho analizzato i suoi appunti del meeting e preparato questo riassunto strategico:

**Partecipanti:**
- Marco Valsasina e Mattia Raffaini (che hai presentato tu)
- Natascia (loro tecnico)

**Punti salienti:**

**BUDGET & APPROCCIO:**
- Prezzo discusso: circa 10k
- Mattia ha chiesto direttamente il budget (segno di interesse concreto)
- Strutturazione con deliverable intermedi per gestire meglio il progetto

**ASPETTI TECNICI:**
- Natascia ha fatto domande puntuali: Salesforce, API Akira, centralino/IVR, SFTP/VPN
- Tutti punti gestibili, Mario ha chiarito che l'analisi dettagliata richiede un contratto
- Mattia ha dato ragione sull'approccio

**POTENZIALE ENORME:**
Marco gestisce 400 agenti in A2A e hanno una rete fisica impressionante:
- 300 "gambe" sul territorio
- 30 negozi A2A per inbound B2C
- Agenzie, dipendenti, agenti P.IVA
- Target: microbusiness, alto-consumante, PA
- Settori: energy, telco Wind, colonnine ricarica, idrogeno

La visione di Mattia è brillante: invece di vendere solo bollette, potrebbero vendere AI. Diversificazione strategica perfetta.

**Next step:** Mario invierà demo "comune" di MrCall

Marco ha chiesto a Mario la sua storia (partendo da Tiscali), segno che sta valutando seriamente il partner oltre al prodotto.

Come sempre, i tuoi referral sono oro puro. Mario mi ha fatto notare più volte quanto siano preziose le tue introduzioni.

Mario ti terrà aggiornato sui prossimi sviluppi.

PS: Questo email è stato generato da me analizzando gli appunti del meeting - un piccolo assaggio di come l'AI può supportare il business development!

Saluti,
Zylch AI
(per conto di Mario Alemi)
```

```Zylch
**Ti piace questa versione? Vuoi che la salvi come bozza su Gmail?**
```

```Human
inviala
```

```Zylch
✉️  Destinatario: luigi.scrosati@clusterlaw.net
📝 Oggetto: [Zylch AI] Update Connecto - Call di ieri: molto promettente!

L'email è stata inviata e la bozza è stata rimossa dalla cartella Bozze.
2025-11-28 12:57:04,967 - httpx - INFO - HTTP Request: POST https://api.anthropic.com/v1/messages "HTTP/1.1 200 OK"
✅ **EMAIL INVIATA CON SUCCESSO!**

📧 L'update su Connecto è stato inviato a Luigi Scrosati all'indirizzo luigi.scrosati@clusterlaw.net
```

```Human
ottimo. ora prepara una mail ai 3 di connecto. Il numero della demo è +390281127956 e fa finta di rispondere per il comune di E
dolo, con cui un nostro cliente ha contatti e ha cercato di vendere mrcall. digli come siamo restati, cosa c'è da fare etc. stessa t
ecnica, ti presenti etc etc
```

```Zylch
Perfetto! Preparo una mail di follow-up per i 3 di Connecto con la demo e i next steps:
```

```Zylch
## 📧 **BOZZA EMAIL PER CONNECTO**

**A:** marco.valsasina@connecto.energy, mattia.raffaini@connecto.energy, natascia@connecto.energy
**Oggetto:** [Zylch AI] Demo MrCall Comune + Next Steps

Ciao Marco, Mattia e Natascia,

sono Zylch AI, l'assistente di intelligenza artificiale di Mario per la gestione delle comunicazioni aziendali - praticamente l'evoluzione enterprise di MrCall che state valutando.

Mario mi ha chiesto di inviarvi la demo promessa e di riassumere i prossimi step dopo la vostra ottima call di ieri.

**DEMO MRCALL - CASO D'USO COMUNE:**
📞 **Numero da chiamare: +39 02 811 27956**

Questa demo simula l'assistente AI del Comune di Edolo (BS), con cui uno dei nostri clienti ha contatti diretti e sta proponendo MrCall. È un caso perfetto per capire come l'AI può gestire:
- Richieste informazioni su servizi comunali
- Prenotazione appuntamenti con uffici
- Stato pratiche edilizie/anagrafiche
- Segnalazioni e reclami
- Informazioni su eventi e orari

**COME SIAMO RESTATI:**
Mario è rimasto molto colpito dalla vostra visione strategica:
- La rete di 400 agenti A2A che gestisce Marco è un asset incredibile
- L'idea di Mattia di diversificare vendendo AI invece che solo bollette è brillante
- Le domande tecniche di Natascia erano tutte pertinenti e gestibili

**PROSSIMI STEP PROPOSTI:**
1. **Analisi tecnica preliminare** (con contratto)
   - Mappatura integrazioni: Salesforce, Akira, centralino/IVR esistente
   - Definizione architettura SFTP/VPN per data exchange
   - Timeline implementazione con milestone chiare

2. **Proposta strutturata** (~10k come discusso)
   - Deliverable intermedi per minimizzare rischi
   - POC su caso d'uso specifico (es. gestione appuntamenti tecnici)
   - Formazione rete vendita su come proporre AI

3. **Visione strategica**
   - MrCall per gestione inbound nei 30 negozi A2A
   - Assistenti AI personalizzati per microbusiness
   - Supporto PA e grandi clienti con alta tensione

**ACTION ITEMS:**
- Provate la demo e fateci sapere impressioni
- Confermate interesse per proposta dettagliata
- Indicate caso d'uso prioritario per partire

Mario è disponibile per approfondimenti tecnici o commerciali quando preferite.

PS: Questa email è stata composta da me analizzando gli appunti del meeting - immaginate cosa può fare MrCall per i vostri clienti!

Saluti,
Zylch AI
(per conto di Mario Alemi)

```

```Zylch
**Vuoi che:**
1. La salvi come bozza su Gmail?
2. Modifichi qualcosa nel tono o nei contenuti?
3. Aggiunga altri dettagli tecnici o commerciali?
```

```Human
togli il ps. inoltre per la proposta vorrei che capissero che io voglio essere sicuro che loro abbiano a budget i 10k (mattia h
a detto che deve assicurarsene), poi si può andare avanti step by step. se vediamo che si fa tutto in un giorno, ovviamente non sono
 10k, ma se dobbiamo fare due mesi di riunioni... dillo ovviamente gentilmente
```

```Zylch
Perfetto! Rimuovo il PS e aggiungo il chiarimento sui 10k in modo diplomatico:
```

```Zylch
## 📧 **BOZZA EMAIL PER CONNECTO**

**A:** marco.valsasina@connecto.energy, mattia.raffaini@connecto.energy, natascia@connecto.energy
**Oggetto:** [Zylch AI] Demo MrCall Comune + Next Steps

Ciao Marco, Mattia e Natascia,

sono Zylch AI, l'assistente di intelligenza artificiale di Mario per la gestione delle comunicazioni aziendali - praticamente l'evoluzione enterprise di MrCall che state valutando.

Mario mi ha chiesto di inviarvi la demo promessa e di riassumere i prossimi step dopo la vostra ottima call di ieri.

**DEMO MRCALL - CASO D'USO COMUNE:**
📞 **Numero da chiamare: +39 02 811 27956**

Questa demo simula l'assistente AI del Comune di Edolo (BS), con cui uno dei nostri clienti ha contatti diretti e sta proponendo MrCall. È un caso perfetto per capire come l'AI può gestire:
- Richieste informazioni su servizi comunali
- Prenotazione appuntamenti con uffici
- Stato pratiche edilizie/anagrafiche
- Segnalazioni e reclami
- Informazioni su eventi e orari

**COME SIAMO RESTATI:**
Mario è rimasto molto colpito dalla vostra visione strategica:
- La rete di 400 agenti A2A che gestisce Marco è un asset incredibile
- L'idea di Mattia di diversificare vendendo AI invece che solo bollette è brillante
- Le domande tecniche di Natascia erano tutte pertinenti e gestibili

**PROSSIMI STEP PROPOSTI:**
1. **Conferma budget** - Mattia, come accennato, confermate la disponibilità del budget discusso (~10k). È importante essere allineati prima di procedere.

2. **Proposta strutturata a step**
   - La complessità (e quindi il prezzo) dipenderà dal perimetro finale
   - Se l'integrazione risulta semplice e si risolve rapidamente, il costo sarà proporzionale
   - Se invece richiede analisi approfondite, riunioni multiple e integrazioni complesse, giustamente si avvicina al budget discusso
   - Approccio: deliverable intermedi per valutare insieme l'evoluzione

3. **Analisi tecnica preliminare** (con contratto)
   - Mappatura integrazioni: Salesforce, Akira, centralino/IVR esistente
   - Definizione architettura SFTP/VPN per data exchange
   - Timeline implementazione con milestone chiare

**VISIONE STRATEGICA:**
- MrCall per gestione inbound nei 30 negozi A2A
- Assistenti AI personalizzati per microbusiness
- Supporto PA e grandi clienti con alta tensione

**ACTION ITEMS:**
- Provate la demo e fateci sapere impressioni
- Confermate disponibilità budget e interesse per proposta dettagliata
- Indicate caso d'uso prioritario per partire

Mario è disponibile per approfondimenti tecnici o commerciali quando preferite.

Saluti,
Zylch AI
(per conto di Mario Alemi)
```

```Human
salva in bozza
```

```Zylch
✅ **BOZZA SALVATA SU GMAIL**

La draft è ora disponibile nella cartella Bozze di Gmail. Puoi rivederla e inviarla quando vuoi.
```

```Human
va bene così, fine
```

```Zylch
Riassumendo quello che abbiamo fatto:

📧 **EMAIL INVIATA a Luigi Scrosati** - Update completo su Connecto con presentazione di Zylch AI

📧 **BOZZA SALVATA per Connecto** - Demo del Comune di Edolo + chiarimenti sui 10k + next steps

Entrambe le comunicazioni sono pronte e posizionate strategicamente per far avanzare il deal con Connecto mantenendo Luigi nel loop.

La bozza è nella tua cartella Gmail, pronta per essere inviata quando vuoi.
```

```Human

```

# Federico Marcis — editor a modifiche singole

Questa versione consente di modificare **una singola esperienza, competenza, formazione o fotografia** senza riscrivere l'intero CV. Il pannello `/admin/` utilizza Sveltia CMS + GitHub e carica le foto nel repository. Nessun Python o database a pagamento.

## Pubblicazione sul repository esistente

La struttura **all'interno** di `Federico_Marcis_Cloudflare_Gratis_Senza_Python/` deve essere quella di questo ZIP: `public/`, `build.mjs`, `.gitignore`, README.

**Prima di sostituire i file:** se hai già modificato il sito online, salva una copia del tuo `public/content.json` e della cartella `public/uploads` attuali. Questa distribuzione contiene i dati originali del biglietto da visita, non le modifiche che hai già fatto su GitHub. Per importare i dati esistenti usa il comando descritto più avanti, oppure aggiornali da `/admin/` dopo la pubblicazione. Non cancellare foto precedentemente caricate.

1. Estrai lo ZIP e carica il contenuto nella cartella del repository chiamata `Federico_Marcis_Cloudflare_Gratis_Senza_Python`. **Non caricare lo ZIP come singolo file e non creare una cartella annidata aggiuntiva.**
2. I nuovi file di contenuto si trovano in `public/data/...`. La vecchia `public/content.json` non va mantenuta nel repository: è prodotta automaticamente dalla build.
3. Cloudflare Pages → progetto → **Settings → Builds & deployments** (o Build configuration): usa **Build command `node build.mjs`**, **Root directory `Federico_Marcis_Cloudflare_Gratis_Senza_Python`**, **Output directory `public`**; framework None. Salva e fai un nuovo deployment.
4. Apri `/admin/` usando un token GitHub personale **mai condiviso**, con permesso Contents read/write per il repository.
5. In Admin, apri `02 - Career` per modificare una sola esperienza oppure `06 - Photos` per gestire una foto. Salva: GitHub effettua commit; Cloudflare ricompila e pubblica.

**Le modifiche sono granulari nei file:** i singoli record sono separati in file JSON indipendenti. La pubblicazione ricostruisce una copia combinata (`content.json`) solo come output; la modifica di un lavoro non sovrascrive i file degli altri lavori.

## Nota su migrazione dati già personalizzati

Se il vecchio `public/content.json` contiene dati personali modificati, **non sovrascriverlo prima di effettuare un backup**. Il nuovo progetto contiene dati di esempio tratti dalla versione precedente. Per migrare integralmente modifiche esistenti, occorre convertire il vecchio JSON nei singoli record sotto `public/data/` (oppure copiarli manualmente tramite il CMS). Questa conversione non è automatica nel pannello.

## Limiti

L'editor permette di aggiungere, eliminare e modificare elementi separati, ma il layout rimane un template: modifiche HTML/CSS richiedono aggiornamenti ai file. Ogni salvataggio causa un nuovo deployment; la pubblicazione non è istantanea. Evita di inserire token nei file del sito o in chat.

# 🎬 Cinemille Frontend

Frontend dell’applicazione **Cinemille**, sviluppato in **Angular**.  
Permette agli utenti di consultare i film in programmazione e ai gestori di visualizzare lo storico delle proiezioni.  
L’applicazione comunica con il backend sviluppato in **Spring Boot** tramite API REST.

---

## 📌 Requisiti

- [Node.js](https://nodejs.org/) >= 22.x
- [Angular CLI](https://angular.io/cli) >= 20.x
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Backend avviato (👉 [Cinemille_SpringBootBe](https://github.com/TotoSco/Cinemille_SpringBootBe))

---

## 🚀 Avvio del progetto

### 1. Clonare il repository
```bash
git clone https://github.com/TotoSco/Cinemille_AngularFe.git
````

### 2. Installare le dipendenze

```bash
npm install
```

### 3. Avviare il server di sviluppo

```bash
npm run start
```
Il server di sviluppo utilizza un `proxy.conf.json` come Forward Proxy.

👉 L’applicazione sarà disponibile su [http://localhost:4200](http://localhost:4200).
Assicurati che il **backend** sia in esecuzione su [http://localhost:3000](http://localhost:3000) (porta configurata nel BE).

Se si vuole lanciare solo il frontend, è possibile eseguire il seguente comando per avviare un json-server che fornisce delle mock response.
```bash
npm run mock-server
```

---

## 🛠️ Build per la produzione

Per creare una build ottimizzata:

```bash
ng build --configuration production
```

I file saranno generati nella cartella `dist/`.

---

## 🐳 Esecuzione con Docker

### 1. Build dell’immagine

```bash
docker build -t cinemille-frontend .
```

### 2. Run del container

```bash
docker run --rm -p 4200:80 --name cinemille-frontend cinemille-frontend
```

👉 Ora il FE sarà disponibile su [http://localhost:4200](http://localhost:4200).

Fare riferimento al README.md del progetto  [Cinemille_SpringBootBe](https://github.com/TotoSco/Cinemille_SpringBootBe) per il run con docker-compose.

---

## 🌐 Funzionalità principali

* 📅 **Elenco film**: consultazione film in programmazione, filtrabili per data.
* 🎭 **Storico proiezioni**: visualizzazione di tutti i film programmati in passato, filtrabili per date (`from`, `to`) o per titolo..
* 🔗 Comunicazione con le API REST del backend (`/api/v1/moviesSchedule`, `/api/v1/moviesScheduleHistory`).

---

## 📖 Documentazione correlata

* [Backend Cinemille (Spring Boot)](https://github.com/TotoSco/Cinemille_SpringBootBe)
* [Angular Docs](https://angular.io/docs)

---

## 👨‍💻 Autore

Progetto sviluppato da **[TotoSco](https://github.com/TotoSco)**.

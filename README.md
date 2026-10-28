# URL Stepper

Chrome ekstenzija koja povećava ili smanjuje poslednji broj u URL-u trenutnog taba.

Primer: `https://sajt.com/strana/5` → `https://sajt.com/strana/6`

## Funkcije

- Dugmad **▲ +1** i **▼ −1** u popup prozoru
- Prečice na tastaturi:
  - `Alt+Shift+↑` — povećaj broj
  - `Alt+Shift+↓` — smanji broj
- Port (npr. `:3000`) se nikad ne menja — traži broj u putanji, pa u query stringu, pa u hash-u
- Čuva vodeće nule (`007` → `008`)
- Broj ne ide ispod nule

## Instalacija

1. Preuzmi ili kloniraj ovaj folder na računar.
2. Otvori Chrome i idi na `chrome://extensions`.
3. Uključi **Developer mode** (gore desno).
4. Klikni **Load unpacked** i izaberi folder `url-stepper`.
5. (Opciono) Zakači ekstenziju na traku klikom na ikonicu slagalice 🧩 → 📌.

Prečice možeš promeniti na `chrome://extensions/shortcuts`.

## Ažuriranje

Posle izmene koda, idi na `chrome://extensions` i klikni ikonicu za osvežavanje ↻ na kartici ekstenzije.
